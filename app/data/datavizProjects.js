import ice from "../../public/images/ice.png";
import donations from "../../public/images/donations.png";
import redistricting from "../../public/images/redistricting.png";
import shootings from "../../public/images/shootings.png";
import tweets from "../../public/images/tweets.png";
import vaccination from "../../public/images/vaccination.png";
export const graphics = [
  {
    id: 1,
    headline: "Which State Lawmakers Have the Biggest Campaign War Chests?",
    text: "Many Oklahoma lawmakers will be in a good position financially come re-election time. State lawmakers reported an average of $32,800.",
    image: donations,
    date: "Nov 4, 2019",
    program: "Tableau",
    publication: "Oklahoma Watch",
    summary:
      "Infographic displaying campaign financial statuses of Oklahoma lawmakers in anticipation of re-election.",
    siteLink:
      "https://oklahomawatch.org/2021/02/08/oklahoma-lawmakers-report-large-campaign-reserves-after-2020-races/",
  },

  {
    id: 2,
    headline: "ICE Detainers Issued in Oklahoma",
    text: "Immigration and Customs Enforcement data shows that the immigration 'detainers' issued by the agency in Oklahoma increased from 2004 to 2012 before falling and then climbing again in 2016. The number of detainers since then has been on the decline. That trend mirrors the national data.",
    image: ice,
    publication: "Oklahoma Watch",
    program: "DataWrapper",
    date: "April 18, 2022",
    summary:
      "Chart showing trends of ICE detainers issued in Oklahoma from 2004, reflecting national trends.",
    siteLink:
      "https://oklahomawatch.org/2022/03/04/ice-holds-drop-as-immigrant-communities-law-enforcement-balance-policy-changes/",
  },
  {
    id: 3,
    headline: "Vaccination Rates By State",
    text: "About 52% of Oklahoma's population has been fully vaccination, according to a tally from the Mayo Clinic. That is the 13th lowest percent in the country, as of Dec. 10.",
    image: vaccination,
    date: "Feb. 28, 2022",
    publication: "Oklahoma Watch",
    program: "DataWrapper",
    summary:
      "Map visualizing vaccination rates across states, emphasizing Oklahoma's below-average rates.",
    siteLink:
      "https://oklahomawatch.org/2021/12/20/as-some-oklahoma-churches-push-vaccines-others-sow-misinformation-doubt/?utm_content=bufferff609&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer",
  },
  {
    id: 4,
    headline:
      "How The Proposed Redistricting Map Impacts OKC's Hispanic/Latino Population",
    text: "In the current congressional map, 153,173 Hispanic or Latino Oklahomans live in Oklahoma's 5th Congressional District, making up 18.6% of the population. But if the GOP's proposed congressional redistricting plan is passed, only 78,218 Hispanic or Latino Oklahomans would remain in the 5th District. ",
    image: redistricting,
    date: "Nov 11, 2021",
    publication: "Oklahoma Watch",
    program: "Tableau",
    summary:
      "Visual depiction of redistricting impacts on the Hispanic/Latino population in Oklahoma's 5th Congressional District.",
    siteLink:
      "https://oklahomawatch.org/2022/03/04/ice-holds-drop-as-immigrant-communities-law-enforcement-balance-policy-changes/",
  },
  {
    id: 5,
    headline:
      "How Often Do Governors Tweet About Vaccination Benefits, Outreach Efforts?",
    text: "Of the 181 tweets Gov. Kevin Stitt sent since he got his vaccination on March 28, the governor only urged residents to get a vaccine or touted the benefits in two of them. In contrast, governors of the six surrounding states have tweeted about vaccination at a much more frequent pace. ",
    date: "Jul 28, 2021",
    program: "Tableau",
    image: tweets,
    publication: "Oklahoma Watch",
    summary:
      "Graphic comparison of vaccination advocacy on Twitter between Governor Kevin Stitt and governors of surrounding states.",
    siteLink:
      "https://oklahomawatch.org/2021/07/30/as-other-governors-pull-out-vaccine-media-blitz-oklahomas-stitt-largely-silent/",
  },

  {
    id: 6,
    headline:
      "In Three Days, Oklahoma Sees Number of Mass Shooting Since 2009 Increase from Five to Seven",
    text: "Since 2009, there have been 7 mass shootings in Oklahoma, resulting in 27 people shot and killed and 12 people shot and wounded, according to the Everytown Research & Policy, a gun-control advocacy group. Two of those shooting have occurred since Monday.",
    image: shootings,
    publication: "Oklahoma Watch",
    program: "DataWrapper",
    date: "June 3, 2022",
    summary:
      "Graphic illustrating the increase of mass shootings in Oklahoma, highlighting a surge in recent incidents.",
    siteLink:
      "https://oklahomawatch.org/2022/06/03/how-oklahoma-lawmakers-have-loosened-gun-regulations-the-past-decade%EF%BF%BC/",
  },
];
