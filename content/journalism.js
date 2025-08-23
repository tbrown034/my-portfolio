// clips.js

import misinfo from "@/public/images/misinfo.webp";
import profling from "@/public/images/profling.webp";
import comment from "@/public/images/noComment.webp";
import hospitals from "@/public/images/hospitals.webp";
import darkMoney from "@/public/images/darkMoney.webp";
import okcBombing from "@/public/images/BombingMemorial_11.webp";

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
    id: 4,
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
    id: 6,
    headline:
      "In Remembering OKC Bombing Victims, Experts See Lessons for Grieving COVID Losses",
    text: "Lessons from the Oklahoma City bombing for grieving during COVID – how counselors apply what they learned when rituals and timelines are disrupted.",
    oneLiner: "Used the Oklahoma City bombing as a lens to view greiving  ",
    image: okcBombing,
    date: "Feb. 11, 2022",
    oneLiner:
      "I explored the parallels between the Oklahoma City bombing and the grieving process during COVID.",

    publication: "Oklahoma Watch",
    siteLink:
      "https://oklahomawatch.org/2021/04/25/in-remembering-okc-bombing-victims-experts-see-lessons-for-grieving-covid-losses/",
  },
];
