// clips.js

import misinfo from "@/public/images/misinfo.webp";
import profling from "@/public/images/profling.webp";
import comment from "@/public/images/noComment.webp";
import hospitals from "@/public/images/hospitals.webp";
import darkMoney from "@/public/images/darkMoney.webp";
import okcBombing from "@/public/images/BombingMemorial_11.webp";
import nukeSite from "@/public/images/nukeSitePic.jpeg";
import highwayPatrol from "@/public/images/highwayPatrolPic.jpg";
import fallin from "@/public/images/fallinPic.jpg";
import henry from "@/public/images/HenryPic.webp";

export const clips = [
  {
    id: 1,
    headline:
      "The Misinformation Election: Lies, Conspiracy Theories Prominent in Many GOP Races",
    text: "How election denial and conspiracy theories moved from the fringe into Oklahoma's 2022 GOP races – and what that meant for voters and democracy.",
    oneLiner:
      "In this deeply reported piece, I uncovered and wrote about the impact of misinformation on GOP races.",
    image: misinfo,
    publication: "Oklahoma Watch",
    date: "June 6, 2022",

    siteLink:
      "https://oklahomawatch.org/2022/06/06/the-misinformation-election-lies-conspiracy-theories-prominent-in-many-gop-races/",
  },
  {
    id: 2,
    headline:
      "Twenty Years After It Became a Crime, Racial Profiling Charges Remain Scarce",
    text: "Twenty years after Oklahoma criminalized racial profiling, complaints rose yet none were substantiated – a look at the data gaps and accountability failures built into the system.",
    oneLiner:
      "In this investigative piece, I examined the lack of accountability in Oklahoma's racial profiling laws.",
    image: profling,
    publication: "Oklahoma Watch",
    date: "June 2, 2020",
    siteLink:
      "https://oklahomawatch.org/2020/06/02/twenty-years-after-it-became-a-crime-racial-profiling-charges-remain-scarce/",
  },
  {
    id: 3,
    headline:
      "Oklahoma Hospitals Sue Thousands Each Year Over Unpaid Medical Bills",
    text: "Oklahoma hospitals have sued thousands of patients over unpaid medical bills – who files the most cases and what that looks like for families on the other end.",
    oneLiner:
      "I reviewed hundreds of court records to uncover the extent of hospital lawsuits in Oklahoma.",
    image: hospitals,
    date: "Aug. 7, 2019",

    publication: "Oklahoma Watch",

    siteLink:
      "https://oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands-each-year-over-unpaid-medical-bills/",
  },
  {
    id: 8,
    headline: "Where Dark Money Flowed in Oklahoma's Legislative Races",
    text: "Tracking nearly $1 million in dark-money spending in 2020 legislative races – who spent it, where it went and how it shaped close contests.",
    oneLiner:
      "Using campaign finance data and investigative tools, I helped uncover the flow of dark money in Oklahoma.",
    image: darkMoney,
    date: "Jan. 13, 2022",

    publication: "Oklahoma Watch",

    siteLink:
      "https://oklahomawatch.org/2020/11/16/where-dark-money-flowed-in-oklahomas-legislative-races/",
  },
  {
    id: 5,
    headline:
      "No Comment: In Oklahoma's Legislature, Public Rarely Given Chance to Weigh In",
    text: "Committees moved high-impact bills in minutes with little debate – a Sunshine Week look at how public comment gets sidelined at the Capitol.",
    oneLiner:
      "I looked at Oklahoma's open records and meetings laws to see how public input is often overlooked.",
    date: "Feb. 11, 2022",

    image: comment,
    publication: "Oklahoma Watch",

    siteLink:
      "https://oklahomawatch.org/2021/03/15/no-comment-in-oklahomas-legislature-public-rarely-given-chance-to-weigh-in/",
  },
  {
    id: 9,
    headline:
      "In Remembering OKC Bombing Victims, Experts See Lessons for Grieving COVID Losses",
    text: "Lessons from the Oklahoma City bombing for grieving during COVID – how counselors apply what they learned when rituals and timelines are disrupted.",
    image: okcBombing,
    date: "Feb. 11, 2022",
    oneLiner:
      "I explored the parallels between the Oklahoma City bombing and the grieving process during COVID.",

    publication: "Oklahoma Watch",
    siteLink:
      "https://oklahomawatch.org/2021/04/25/in-remembering-okc-bombing-victims-experts-see-lessons-for-grieving-covid-losses/",
  },
  {
    id: 7,
    headline:
      "Questions Remain Around Cleanup of Former Nuke Sites Near Cheyenne",
    text: "Cold War missile site cleanup will take 100 years and tens of millions to remove TCE contamination from Cheyenne-area groundwater.",
    oneLiner:
      "I investigated the decades-long contamination from Cold War missile sites affecting Cheyenne-area groundwater.",
    image: nukeSite,
    publication: "Wyoming Tribune Eagle",
    date: "Dec. 13, 2015",
    siteLink:
      "https://www.wyomingnews.com/news/local_news/questions-remain-around-cleanup-of-former-nuke-sites-near-cheyenne/article_cbc7ee82-a168-11e5-856a-0f03142089af.html",
  },
  {
    id: 4,
    headline: "Memo: Troopers Must Hit Numbers",
    text: "Wyoming Highway Patrol required troopers to meet citation quotas or face career consequences – policy rescinded after public backlash.",
    oneLiner:
      "I exposed a controversial quota system that was ultimately overturned following public and legislative pressure.",
    image: highwayPatrol,
    publication: "Wyoming Tribune Eagle",
    date: "Nov. 23, 2014",
    siteLink:
      "https://www.wyomingnews.com/news/memo-troopers-must-hit-numbers/article_caf073e2-20e8-5b91-a720-262a72bfb1d2.html",
  },
  {
    id: 6,
    headline: "Republicans Rally with Conservative Wave",
    text: "Oklahoma's Republican Party claimed unprecedented victories with Mary Fallin's gubernatorial win, marking the first time since statehood that the GOP controlled both legislative houses and the governor's mansion.",
    oneLiner:
      "I covered the historic Republican sweep of Oklahoma's state government in the 2010 elections.",
    image: fallin,
    publication: "Norman Transcript",
    date: "Nov. 2, 2010",
    siteLink:
      "https://www.normantranscript.com/edmond/republicans-rally-with-conservative-wave/article_9c031602-7b00-52cb-9e60-6175552ba477.html",
  },
  {
    id: 10,
    headline: "Henry: Gambling Expansions Paid Off",
    text: "An enterprise look at Gov. Brad Henry's signature achievement: transforming Oklahoma tribal gaming from $466 million to billions in revenue.",
    oneLiner:
      "I examined the impact of Oklahoma's gaming expansion and its transformation into a $2.8 billion industry.",
    image: henry,
    publication: "Cherokee Phoenix",
    date: "Dec. 23, 2010",
    siteLink:
      "https://www.cherokeephoenix.org/news/henry-gambling-expansions-paid-off/article_929806da-abeb-506c-b1bf-ba067fec7bf3.html",
  },
];
