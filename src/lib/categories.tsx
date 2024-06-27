import { 
    GiAmericanFootballPlayer, 
    GiBaseballBat, 
    GiBasketballBall, 
    GiBoxingGlove, 
    GiCricketBat, 
    GiGolfFlag, 
    GiRaceCar, 
    GiSailboat,  
    GiTennisRacket, 
    GiVolleyballBall, 
    GiDogHouse, 
    GiHorseHead, 
    GiRugbyConversion, 
    GiEightBall,
    GiTvRemote,
    GiDart,
    GiBombingRun,
    GiBoxingRing
} from 'react-icons/gi';
import { FaBicycle, FaGamepad, FaHandHoldingUsd, FaHockeyPuck, FaMicrophoneAlt, FaTableTennis, FaTv } from 'react-icons/fa';
import { SiCounterstrike, SiRiotgames } from 'react-icons/si';
import { MdSportsHandball } from 'react-icons/md';
import { PiSoccerBallFill } from 'react-icons/pi';
import { TbSoccerField } from 'react-icons/tb';

export const categories = [
    { name: "American Football", types: ["american_football_match", "american_football_outright"], href: "/american-football", icon: <GiAmericanFootballPlayer size={20}/> },
    { name: "Baseball", types: ["baseball_match", "baseball_outright"], href: "/baseball", icon: <GiBaseballBat size={20}/> },
    { name: "Basketball", types: ["basketball_esports_match", "basketball_match"], href: "/basketball", icon: <GiBasketballBall size={20}/> },
    { name: "Boxing", types: ["boxing_match"], href: "/boxing", icon: <GiBoxingGlove size={20}/> },
    { name: "Call of Duty", types: ["call_of_duty_match"], href: "/call-of-duty", icon: <GiBombingRun size={20}/> },
    { name: "Cricket", types: ["cricket_match", "cricket_outright"], href: "/cricket", icon: <GiCricketBat size={20}/> },
    { name: "CSGO", types: ["csgo_match"], href: "/csgo", icon: <SiCounterstrike size={20}/> },
    { name: "Current Affairs", types: ["current_affairs"], href: "/current-affairs", icon: <FaMicrophoneAlt size={20}/> },
    { name: "Cycling", types: ["cycling"], href: "/cycling", icon: <FaBicycle size={20}/> },
    { name: "Darts", types: ["darts_match", "darts_outright"], href: "/darts", icon: <GiDart size={20}/> },
    { name: "Dota 2", types: ["dota_2_match"], href: "/dota-2", icon: <FaGamepad size={20}/> },
    { name: "Football Esports", types: ["football_esports_match"], href: "/football-esports", icon: <TbSoccerField size={20}/> },
    { name: "Football", types: ["football_match", "football_outright"], href: "/football", icon: <PiSoccerBallFill size={20}/> },
    { name: "Golf", types: ["golf_match", "golf_outright"], href: "/golf", icon: <GiGolfFlag size={20}/> },
    { name: "Greyhound Racing", types: ["greyhound_racing_race"], href: "/greyhound-racing", icon: <GiDogHouse size={20}/> },
    { name: "Handball", types: ["handball_match"], href: "/handball", icon: <MdSportsHandball size={20}/> },
    { name: "Horse Racing", types: ["horse_racing_race"], href: "/horse-racing", icon: <GiHorseHead size={20}/> },
    { name: "Ice Hockey", types: ["ice_hockey_match"], href: "/ice-hockey", icon: <FaHockeyPuck size={20}/> },
    { name: "League of Legends", types: ["league_of_legends_match"], href: "/league-of-legends", icon: <SiRiotgames size={20}/> },
    { name: "MMA", types: ["mma_match"], href: "/mma", icon: <GiBoxingRing size={20}/> },
    { name: "Motorsports", types: ["motorsports_race", "motorsports_outright"], href: "/motorsports", icon: <GiRaceCar size={20}/> },
    { name: "Politics", types: ["politics", "politics_outright"], href: "/politics", icon: <FaHandHoldingUsd size={20}/> },
    { name: "Rowing", types: ["rowing"], href: "/rowing", icon: <GiSailboat size={20}/> },
    { name: "Rugby League", types: ["rugby_league_match", "rugby_league_outright"], href: "/rugby-league", icon: <GiRugbyConversion size={20}/> },
    { name: "Rugby Union", types: ["rugby_union_match", "rugby_union_outright"], href: "/rugby-union", icon: <GiRugbyConversion size={20}/> },
    { name: "Sailing", types: ["sailing_race", "sailing_outright"], href: "/sailing", icon: <GiSailboat size={20}/> },
    { name: "Snooker", types: ["snooker_match", "snooker_outright"], href: "/snooker", icon: <GiEightBall size={20}/> },
    { name: "Table Tennis", types: ["table_tennis_match", "table_tennis_outright"], href: "/table-tennis", icon: <FaTableTennis size={20}/> },
    { name: "Tennis", types: ["tennis_match", "tennis_outright"], href: "/tennis", icon: <GiTennisRacket size={20}/> },
    { name: "Volleyball", types: ["volleyball_match"], href: "/volleyball", icon: <GiVolleyballBall size={20}/> },
    { name: "Top Level Event", types: ["top_level_event"], href: "/top-level-event", icon: <GiTvRemote size={20}/> },
    { name: "TV Entertainment", types: ["tv_entertainment"], href: "/tv-entertainment", icon: <FaTv size={20}/> }
];

const typeMap = new Map();
categories.forEach(item => typeMap.set(item.href, item.types));

export function getTypesByName(name) {
    return typeMap.get(name) || [];
}