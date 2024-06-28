import { unstable_noStore as noStore } from "next/cache";
import {
  ContractsQuotesResponse,
  ContractsResponse,
  Event,
  EventResponse,
  EventTypeDomain,
  EventTypeEnum,
  Market,
  MarketsResponse,
} from "./definitions";

const SMARKETS_API_URL = "https://api.smarkets.com/v3";

export async function fetchEvents(
  types: EventTypeEnum[]
): Promise<EventResponse> {
  noStore(); // As market information may regularly update, I decided to prevent caching of potentially outdated data
  try {
    const response = await fetch(
      `${SMARKETS_API_URL}/events/?state=new&state=upcoming&state=live&type=${types.join('&type=')}&with_new_type=true&sort=display_order%2Cstart_datetime%2Cid&limit=50&include_hidden=false`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching boxing matches:", error);
    throw error;
  }
}

export async function fetchEvent(
  event_id: Event["id"]
): Promise<EventResponse> {
  try {
    const response = await fetch(`${SMARKETS_API_URL}/events/${event_id}/?&with_new_type=true`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching boxing matches:", error);
    throw error;
  }
}

export async function fetchMarkets(
  event_ids: Event["id"][]
): Promise<MarketsResponse> {
  noStore();

  try {
    const response = await fetch(
      `${SMARKETS_API_URL}/events/${event_ids}/markets/?sort=event_id%2Cdisplay_order&popular=false&include_hidden=false`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching event markets:", error);
    throw error;
  }
}

export async function fetchContracts(
  market_id: Market["id"][]
): Promise<ContractsResponse> {
  noStore();

  try {
    const response = await fetch(
      `${SMARKETS_API_URL}/markets/${market_id}/contracts/?include_hidden=false`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching contracts:", error);
  }
}

export async function fetchContractsQuotes(
  market_ids: Market["id"][]
): Promise<ContractsQuotesResponse> {
  noStore();

  try {
    const contractsPromise = fetch(
      `${SMARKETS_API_URL}/markets/${market_ids}/contracts/?include_hidden=false`
    );
    const quotesPromise = fetch(
      `${SMARKETS_API_URL}/markets/${market_ids}/quotes`
    );

    const data = await Promise.all([
      (await contractsPromise).json(),
      (await quotesPromise).json(),
    ]);

    return data;
  } catch (error) {
    console.error("Error fetching contracts:", error);
  }
}
