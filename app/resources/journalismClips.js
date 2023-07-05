// clips.js

import misinfo from "../../public/images/misinfo.webp";
import profling from "../../public/images/profling.webp";
import comment from "../../public/images/noComment.webp";
import hospitals from "../../public/images/hospitals.webp";
import darkMoney from "../../public/images/darkMoney.webp";
import okcBombing from "../../public/images/BombingMemorial_11.webp";

export const clips = [
  {
    id: 1,
    headline:
      "The Misinformation Election: Lies, Conspiracy Theories Prominent in Many GOP Races",
    text: "PRYOR — Devon Garly spoke up about halfway through Jackson Lahmeyer’s speech.",
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
    text: "As protests over racial policing practices continue to rage across Oklahoma and the nation, a milestone in Oklahoma’s racial history will quietly pass later this week. Friday will mark the 20th anniversary of the passage of a state law that for the first time explicitly banned racial profiling by law enforcement agencies.",
    image: profling,
    publication: "Oklahoma Watch",
    date: "June 2, 2020",

    description:
      "Created this app that fetches weather information and displays it after a user enters their zipcode.",
    siteLink:
      "https://oklahomawatch.org/2020/06/02/twenty-years-after-it-became-a-crime-racial-profiling-charges-remain-scarce/",
  },
  {
    id: 3,
    headline:
      "Oklahoma Hospitals Sue Thousands Each Year Over Unpaid Medical Bills",
    text: "It was not a call that  Rabekah Crow expected. The Bartlesville resident was working  at her job as a Phillips 66 help-desk agent  in spring 2018 when an unfamiliar number  flashed across her  caller ID.",
    image: hospitals,
    date: "August 7, 2019",

    publication: "Oklahoma Watch",

    siteLink:
      "https://oklahomawatch.org/2019/08/07/oklahoma-hospitals-sue-thousands-each-year-over-unpaid-medical-bills/",
  },
  {
    id: 4,
    headline: "Where Dark Money Flowed in Oklahoma’s Legislative Races",
    text: "In the days and weeks leading up to election day, dark money groups pumped hundreds of thousands of dollars into key Oklahoma legislative races, with the vast majority of the money helping Republican candidates.",
    image: darkMoney,
    date: "January 13, 2022",

    publication: "Oklahoma Watch",

    siteLink:
      "https://oklahomawatch.org/2020/11/16/where-dark-money-flowed-in-oklahomas-legislative-races/",
  },
  {
    id: 5,
    headline:
      "No Comment: In Oklahoma’s Legislature, Public Rarely Given Chance to Weigh In",
    text: "It took one minute and 55 seconds for an Oklahoma House legislative committee to give the green light to a bill that would make it easier for teachers to carry guns in classrooms.",
    date: "February 11, 2022",

    image: comment,
    publication: "Oklahoma Watch",

    siteLink:
      "https://oklahomawatch.org/2021/03/15/no-comment-in-oklahomas-legislature-public-rarely-given-chance-to-weigh-in/",
  },
  {
    id: 6,
    headline:
      "In Remembering OKC Bombing Victims, Experts See Lessons for Grieving COVID Losses",
    text: "Robin Gurwitch knows all too well about loss. ",
    image: okcBombing,
    date: "February 11, 2022",

    publication: "Oklahoma Watch",
    siteLink:
      "https://oklahomawatch.org/2021/04/25/in-remembering-okc-bombing-victims-experts-see-lessons-for-grieving-covid-losses/",
  },
];
