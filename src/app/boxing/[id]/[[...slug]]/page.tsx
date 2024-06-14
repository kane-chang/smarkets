import { formatEventDate } from "@/lib/Formatter";
import { fetchContractsQuotes, fetchEvent, fetchMarkets } from "@/lib/data";
import Breadcrumbs from "@/ui/Breadcrumbs";
import MarketCard from "@/ui/boxing/boxingIdPage/MarketCard";
import { notFound } from "next/navigation";
import { IoMdCalendar } from "react-icons/io";

export default async function Page({
  params,
}: {
  params: { id: string; slug?: string[] };
}) {
  const id = params.id;

  const marketsPromise = fetchMarkets([id]);
  const eventPromise = fetchEvent(id);
  const [marketsData, eventData] = await Promise.all([
    marketsPromise,
    eventPromise,
  ]);
  // console.log(marketsData);

  if (!marketsData.markets || !eventData) {
    notFound();
  } else {
    const markets_ids = marketsData.markets.map((market) => market.id);

    const contractsQuotesData = await fetchContractsQuotes(markets_ids);
    const marketCards = marketsData.markets.map((market) => (
      <MarketCard key={market.id} market={market} data={contractsQuotesData} />
    ));
    return (
      <main className="p-5 flex flex-col w-full h-full">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Boxing", href: "/boxing" },
            {
              label: eventData.events[0].name,
              href: params.slug
                ? `/boxing/${id}/${params.slug.join("/")}`
                : `/boxing/${id}`,
            },
          ]}
        />
        <div className="event-info border-b border-grey-400 ">
          <h1 className="text-4xl font-bold my-5">
            {eventData.events[0].name}
          </h1>
          <div className="flex items-center gap-1 font-semibold text-grey-300 text-xs my-3">
            <IoMdCalendar />
            <p>
              {eventData.events[0].start_datetime
                ? formatEventDate(eventData.events[0].start_datetime)
                : null}
            </p>
          </div>
        </div>
        <div className="markets-container flex flex-col gap-3">
          {marketCards}
        </div>
      </main>
    );
  }
}
