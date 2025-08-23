import ice from "@/public/images/ice.png";
import donations from "@/public/images/donations.png";
import redistricting from "@/public/images/redistricting.png";
import shootings from "@/public/images/shootings.png";
import tweets from "@/public/images/tweets.png";
import vaccination from "@/public/images/vaccination.png";
import bills from "@/public/images/flourish1.png";
export const graphics = [
  {
    id: 1,
    headline: "Which State Lawmakers Have the Biggest Campaign War Chests?",
    text: "Many Oklahoma lawmakers will be in a good position financially come re-election time. State lawmakers reported an average of $32,800.",
    image: donations,
    date: "Jan. 13, 2022",
    program: "Tableau",
    publication: "Oklahoma Watch",
    summary:
      "Infographic displaying campaign financial statuses of Oklahoma lawmakers in anticipation of re-election.",
    siteLink:
      "https://oklahomawatch.org/2021/02/08/oklahoma-lawmakers-report-large-campaign-reserves-after-2020-races/",
    graphicLink:
      "https://public.tableau.com/app/profile/oklahoma.watch/viz/2020Legislature1/Dashboard1",
  },

  {
    id: 2,
    headline: "ICE Detainers Issued in Oklahoma",
    text: "Immigration and Customs Enforcement data shows that the immigration 'detainers' issued by the agency in Oklahoma increased from 2004 to 2012 before falling and then climbing again in 2016. The number of detainers since then has been on the decline. That trend mirrors the national data.",
    image: ice,
    publication: "Oklahoma Watch",
    program: "DataWrapper",
    date: "March 4, 2022",
    summary:
      "Chart showing trends of ICE detainers issued in Oklahoma from 2004, reflecting national trends.",
    siteLink:
      "https://oklahomawatch.org/2022/03/04/ice-holds-drop-as-immigrant-communities-law-enforcement-balance-policy-changes/",
    graphicLink: "https://www.datawrapper.de/_/NDN7G/",
  },
  {
    id: 3,
    headline: "Vaccination Rates By State",
    text: "About 52% of Oklahoma's population has been fully vaccinated, according to a tally from the Mayo Clinic. That is the 13th-lowest percentage in the country, as of Dec. 10.",
    image: vaccination,
    date: "Jan. 13, 2022",
    publication: "Oklahoma Watch",
    program: "DataWrapper",
    summary:
      "Map visualizing vaccination rates across states, emphasizing Oklahoma's below-average rates.",
    siteLink:
      "https://oklahomawatch.org/2021/12/20/as-some-oklahoma-churches-push-vaccines-others-sow-misinformation-doubt/?utm_content=bufferff609&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer",
    graphicLink: [
      "https://www.datawrapper.de/_/J9m2Z/",
      "https://www.datawrapper.de/_/RFBFU/",
    ],
  },
  {
    id: 4,
    headline:
      "How The Proposed Redistricting Map Impacts OKC's Hispanic/Latino Population",
    text: "In the current congressional map, 153,173 Hispanic or Latino Oklahomans live in Oklahoma's 5th Congressional District, making up 18.6% of the population. But if the GOP's proposed congressional redistricting plan is passed, only 78,218 Hispanic or Latino Oklahomans would remain in the 5th District. ",
    image: redistricting,
    date: "March 4, 2022",
    publication: "Oklahoma Watch",
    program: "Tableau",
    summary:
      "Visual depiction of redistricting impacts on the Hispanic/Latino population in Oklahoma's 5th Congressional District.",
    siteLink:
      "https://oklahomawatch.org/2021/11/19/redistricting-weighing-the-impact-of-splitting-oklahomas-largest-hispanic-community/",
    graphicLink: [
      "https://public.tableau.com/app/profile/oklahoma.watch/viz/BothMapsRedistricting/Dashboard1",
      "https://public.tableau.com/app/profile/oklahoma.watch/viz/DualMaps_16366620253140/Dashboard1",
    ],
  },
  {
    id: 5,
    headline:
      "How Often Do Governors Tweet About Vaccination Benefits, Outreach Efforts?",
    text: "Of the 181 tweets Gov. Kevin Stitt sent since he got his vaccination on March 28, the governor only urged residents to get a vaccine or touted the benefits in two of them. In contrast, governors of the six surrounding states have tweeted about vaccination at a much more frequent pace. ",
    date: "Jul 30, 2021",
    program: "Tableau",
    image: tweets,
    publication: "Oklahoma Watch",
    summary:
      "Graphic comparison of vaccination advocacy on Twitter between Governor Kevin Stitt and governors of surrounding states.",
    siteLink:
      "https://oklahomawatch.org/2021/07/30/as-other-governors-pull-out-vaccine-media-blitz-oklahomas-stitt-largely-silent/",
    graphicLink:
      "https://public.tableau.com/app/profile/oklahoma.watch/viz/VaccinationTweets/Dashboard1",
  },

  {
    id: 6,
    headline:
      "In Three Days, Oklahoma Sees Number of Mass Shooting Since 2009 Increase from Five to Seven",
    text: "Since 2009, there have been 7 mass shootings in Oklahoma, resulting in 27 people shot and killed and 12 people shot and wounded, according to the Everytown Research & Policy Group, a gun-control advocacy group. Two of those shootings have occurred since Monday.",
    image: shootings,
    publication: "Oklahoma Watch",
    program: "DataWrapper",
    date: "June 3, 2022",
    summary:
      "Graphic illustrating the increase of mass shootings in Oklahoma, highlighting a surge in recent incidents.",
    siteLink:
      "https://oklahomawatch.org/2022/06/03/how-oklahoma-lawmakers-have-loosened-gun-regulations-the-past-decade%EF%BF%BC/",
    graphicLink: "https://www.datawrapper.de/_/fMDc4/",
  },
  {
    id: 7,
    headline: "Bills Passed During the 58th Oklahoma Legislature (2021-2022 sessions)",
    text: "Of the more than 3,600 bills introduced during Oklahoma's 58th Legislature, only 1,031 were sent to the governor. Democrats authored just 40 bills (14 in the House and 26 in the Senate) that passed – the GOP holds 81% of the 149 legislative seats. Compared to the 53rd Legislature (2011-2012), Democratic influence has significantly declined.",
    image: bills,
    publication: "Oklahoma Watch",
    program: "Flourish",
    date: "June 2, 2022",
    summary: "Sankey diagram showing the legislative process flow and partisan breakdown of bills passed in the Oklahoma Legislature.",
    siteLink: "https://oklahomawatch.org/2022/06/02/hundreds-of-bills-passed-the-legislature-just-a-dozen-were-authored-by-democrats/",
    graphicLink: [
      "https://www.datawrapper.de/_/WFo9H/",
      "https://www.datawrapper.de/_/EncDs/",
      "/images/flourish1.png",
      "/images/flourish2.png"
    ],
  },
];
