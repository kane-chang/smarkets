export interface EventResponse {
  events: Event[];
  pagination: Pagination;
}

export interface Event {
  bet_allowed: boolean;
  bettable: boolean;
  chart_time_period: string | null;
  created: string;
  description: string | null;
  display_order: number | null;
  end_date: string | null;
  full_slug: string;
  hidden: boolean;
  id: string;
  inplay_enabled: boolean;
  modified: string;
  name: string;
  parent_id: string | null;
  seo_description: string | null;
  short_name: string | null;
  slug: string;
  special_rules: string | null;
  start_date: string | null;
  start_datetime: string | null;
  state: EventState;
  type: EventType;
}

export type EventState =
  | "new"
  | "upcoming"
  | "live"
  | "ended"
  | "settled"
  | "cancelled"
  | "suspended";

export interface EventType {
  domain: EventTypeDomain;
  scope: EventTypeScope;
}

export type EventTypeDomain =
  | "accumulator"
  | "american_football"
  | "australian_rules"
  | "baseball"
  | "basketball"
  | "basketball_esports"
  | "boxing"
  | "call_of_duty"
  | "chess"
  | "cricket"
  | "csgo"
  | "current_affairs"
  | "cycling"
  | "darts"
  | "dota_2"
  | "esports"
  | "football"
  | "football_esports"
  | "golf"
  | "greyhound_racing"
  | "handball"
  | "horse_racing"
  | "ice_hockey"
  | "king_of_glory"
  | "league_of_legends"
  | "lol_wild_rift"
  | "mma"
  | "motorsports"
  | "olympics"
  | "overwatch"
  | "poker"
  | "politics"
  | "pubg"
  | "rainbow_six_siege"
  | "rocket_league"
  | "rowing"
  | "rugby_league"
  | "rugby_union"
  | "sailing"
  | "snooker"
  | "starcraft"
  | "starcraft_2"
  | "tv_and_entertainment"
  | "table_tennis"
  | "tennis"
  | "valorant"
  | "volleyball"
  | "winter_sports";

export type EventTypeScope =
  | "root"
  | "round"
  | "category_root"
  | "category"
  | "single_event"
  | "acca_root"
  | "acca_category"
  | "acca"
  | "outright_root"
  | "outright_category"
  | "outright"
  | "tour"
  | "antepost_root"
  | "antepost_category"
  | "antepost";

export type EventTypeEnum =
  | "american_football_match"
  | "american_football_outright"
  | "baseball_match"
  | "baseball_outright"
  | "basketball_esports_match"
  | "basketball_match"
  | "boxing_match"
  | "call_of_duty_match"
  | "cricket_match"
  | "cricket_outright"
  | "csgo_match"
  | "current_affairs"
  | "cycling"
  | "darts_match"
  | "darts_outright"
  | "dota_2_match"
  | "football_esports_match"
  | "football_match"
  | "football_outright"
  | "golf_match"
  | "golf_outright"
  | "greyhound_racing_race"
  | "handball_match"
  | "horse_racing_race"
  | "ice_hockey_match"
  | "league_of_legends_match"
  | "mma_match"
  | "motorsports_race"
  | "motorsports_outright"
  | "politics"
  | "politics_outright"
  | "rowing"
  | "rugby_league_match"
  | "rugby_league_outright"
  | "rugby_union_match"
  | "rugby_union_outright"
  | "sailing_race"
  | "sailing_outright"
  | "snooker_match"
  | "snooker_outright"
  | "table_tennis_match"
  | "table_tennis_outright"
  | "tennis_match"
  | "tennis_outright"
  | "volleyball_match"
  | "generic"
  | "top_level_event"
  | "tv_entertainment";

export interface MarketsResponse {
  markets: Market[];
}

export interface Market {
  bet_delay: number;
  cashout_enabled: boolean;
  categories: MarketCategory[];
  category: MarketCategory;
  complete: boolean;
  contract_selections: number[] | null;
  created: string;
  description: string | null;
  display_order: number | null;
  display_type: DisplayType;
  event_id: string;
  hidden: boolean;
  id: string;
  info: MarketInfo | null;
  inplay_enabled: boolean;
  market_type: MarketType | null;
  modified: string;
  name: string;
  slug: string;
  state: MarketState;
  winner_count: number;
}

export type MarketCategory =
  | "goals"
  | "half_time"
  | "handicap"
  | "totals"
  | "corners"
  | "cards"
  | "players"
  | "winner"
  | "other"
  | "teams"
  | "place"
  | "relegation"
  | "nationality"
  | "make_the_cut"
  | "first_round_leader"
  | "one_eighty"
  | "set"
  | "game"
  | "half"
  | "quarter"
  | "frame"
  | "hole_in_one"
  | "hole_group_betting"
  | "hole_match_bet"
  | "bet_builder"
  | "popular";

export type DisplayType =
  | "bars"
  | "bars2"
  | "cross"
  | "default"
  | "donut"
  | "population"
  | "poster"
  | "graph"
  | "top"
  | "prices"
  | "line"
  | "gauge"
  | "leaderboard";

export interface MarketInfo {
  [key: string]: string;
}

export interface MarketType {
  name: string;
  param: string;
  params: { [key: string]: string };
}

export type MarketState =
  | "new"
  | "open"
  | "live"
  | "halted"
  | "settled"
  | "voided"
  | "unavailable";

export interface Pagination {
  next_page: string | null;
}

export interface ContractsResponse {
  contracts: Contract[];
}

export interface Contract {
  competitor_id: number | null;
  contract_type: ContractType | null;
  created: string;
  display_order: number | null;
  hidden: boolean;
  id: string;
  info: ContractInfo | null;
  market_id: string;
  modified: string;
  name: string;
  outcome_timestamp: string | null;
  reduction_factor: string;
  slug: string;
  state_or_outcome: ContractStateOrOutcome;
}

export interface ContractType {
  name: string;
  param: string;
}

export interface ContractInfo {
  color_primary: string;
  color_secondary: string;
  primary: boolean;
}

export type ContractStateOrOutcome =
  | "live"
  | "open"
  | "new"
  | "halted"
  | "winner"
  | "loser"
  | "deadheat"
  | "reduced"
  | "voided"
  | "unavailable";

export interface QuotesResponse {
  [key: string]: Book;
}

export interface Book {
  bids: Tick[];
  offers: Tick[];
}

export interface Tick {
  price: number;
  quantity: number;
}

export type ContractsQuotesResponse = [ContractsResponse, QuotesResponse] | undefined ;
