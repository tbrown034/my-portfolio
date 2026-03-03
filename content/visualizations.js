import ice from "@/public/images/ice.png";
import donations from "@/public/images/donations.png";
import redistricting from "@/public/images/redistricting.png";
import shootings from "@/public/images/shootings.png";
import tweets from "@/public/images/tweets.png";
import vaccination from "@/public/images/vaccination.png";
import bills from "@/public/images/flourish1.png";
export const graphics = [
  {
    id: 3,
    slug: "viz-churches-vaccines",
    navLabel: "Churches & Vaccines",
    headline:
      "As Some Oklahoma Churches Push Vaccines, Others Sow Misinformation, Doubt",
    text: "About 52% of Oklahoma's population has been fully vaccinated, according to a tally from the Mayo Clinic. That is the 13th-lowest percentage in the country, as of Dec. 10.",
    image: vaccination,
    date: "Dec. 20, 2021",
    publication: "Oklahoma Watch",
    program: "Datawrapper",
    tools: ["Datawrapper"],
    award: "1st Place Investigative Reporting, Oklahoma SPJ (2022)",
    summary:
      "Award-winning investigation analyzing county-level relationship between vaccination rates and church density. Three Datawrapper visualizations — scatter plot with regression line plus two choropleth maps.",
    siteLink:
      "https://oklahomawatch.org/2021/12/20/as-some-oklahoma-churches-push-vaccines-others-sow-misinformation-doubt/",
    graphicLink: [
      "https://www.datawrapper.de/_/J9m2Z/",
      "https://www.datawrapper.de/_/RFBFU/",
    ],
    vizUrls: [
      {
        label: "Scatter plot",
        url: "https://datawrapper.dwcdn.net/RFBFU/2/",
        tool: "Datawrapper",
      },
      {
        label: "Vaccination rates map",
        url: "https://datawrapper.dwcdn.net/J9m2Z/5/",
        tool: "Datawrapper",
      },
      {
        label: "Church density map",
        url: "https://datawrapper.dwcdn.net/MfJHa/4/",
        tool: "Datawrapper",
      },
    ],
  },
  {
    id: 7,
    slug: "viz-bills-passed",
    navLabel: "Bills Passed",
    headline:
      "Hundreds of Bills Passed the Legislature. Just a Dozen Were Authored by Democrats.",
    text: "Of the more than 3,600 bills introduced during Oklahoma's 58th Legislature, only 1,031 were sent to the governor. Democrats authored just 40 bills (14 in the House and 26 in the Senate) that passed — the GOP holds 81% of the 149 legislative seats. Compared to the 53rd Legislature (2011-2012), Democratic influence has significantly declined.",
    image: bills,
    publication: "Oklahoma Watch",
    program: "Flourish",
    date: "June 2, 2022",
    tools: ["Datawrapper", "Flourish"],
    award: null,
    summary:
      "Analyzed more than 3,600 bills across two sessions. Two Datawrapper charts showing the partisan authorship gap and 20 years of shifting seat control.",
    siteLink:
      "https://oklahomawatch.org/2022/06/02/hundreds-of-bills-passed-the-legislature-just-a-dozen-were-authored-by-democrats/",
    graphicLink: [
      "https://www.datawrapper.de/_/WFo9H/",
      "https://www.datawrapper.de/_/EncDs/",
      "/images/flourish1.png",
      "/images/flourish2.png",
    ],
    vizUrls: [
      {
        label: "Bills passed chart",
        url: "https://datawrapper.dwcdn.net/WFo9H/3/",
        tool: "Datawrapper",
      },
      {
        label: "Party dominance trend",
        url: "https://datawrapper.dwcdn.net/EncDs/4/",
        tool: "Datawrapper",
      },
    ],
  },
  {
    id: 4,
    slug: "viz-legislative-races",
    navLabel: "Legislative Races",
    headline:
      "Nearly Half of Oklahoma Legislative Races Already Are Decided Without a Vote",
    text: "Analysis of every legislative race in the 2022 cycle showing that nearly half were decided before voters ever cast a ballot — uncontested seats where only one candidate filed. Four visualizations built in Flourish and Datawrapper showing how uncontested races predetermine legislative control.",
    image: redistricting,
    date: "April 18, 2022",
    publication: "Oklahoma Watch",
    program: "Flourish",
    tools: ["Flourish", "Datawrapper"],
    award: null,
    summary:
      "Four visualizations built in Flourish and Datawrapper showing how uncontested races predetermine who controls the Oklahoma legislature before voters cast a ballot.",
    siteLink:
      "https://oklahomawatch.org/2022/04/18/nearly-half-of-oklahoma-legislative-races-already-are-decided-without-a-vote/",
    graphicLink: [
      "https://flo.uri.sh/visualisation/9434901/embed",
      "https://flo.uri.sh/visualisation/9435055/embed",
      "https://datawrapper.dwcdn.net/edtag/7/",
      "https://datawrapper.dwcdn.net/L0qvZ/3/",
    ],
    vizUrls: [
      {
        label: "House seats",
        url: "https://flo.uri.sh/visualisation/9434901/embed",
        tool: "Flourish",
      },
      {
        label: "Senate seats",
        url: "https://flo.uri.sh/visualisation/9435055/embed",
        tool: "Flourish",
      },
      {
        label: "Candidates by party",
        url: "https://datawrapper.dwcdn.net/L0qvZ/3/",
        tool: "Datawrapper",
      },
      {
        label: "Uncontested winners",
        url: "https://datawrapper.dwcdn.net/edtag/7/",
        tool: "Datawrapper",
      },
    ],
  },
  {
    id: 2,
    slug: "viz-hospital-lawsuits",
    navLabel: "Hospital Lawsuits",
    headline:
      "Amid COVID-19, Some Hospitals Continue Suing Patients Over Unpaid Bills",
    text: "Follow-up investigation showing that despite the pandemic, several Oklahoma hospitals continued filing lawsuits against patients over unpaid medical bills. Built an updated Tableau dashboard tracking which hospitals kept suing and at what rates.",
    image: ice,
    publication: "Oklahoma Watch",
    program: "Tableau",
    date: "Aug. 4, 2020",
    tools: ["Tableau", "Infogram"],
    award: "1st Place General News Reporting, Oklahoma SPJ (2020)",
    summary:
      "Follow-up to award-winning investigation that structured 22,250 court records into a searchable database. Tracked which hospitals continued suing patients during the pandemic.",
    siteLink:
      "https://oklahomawatch.org/2020/08/04/amid-covid-19-crisis-some-oklahoma-hospitals-continue-suing-patients-over-unpaid-bills/",
    graphicLink:
      "https://public.tableau.com/app/profile/oklahoma.watch/viz/HospitalLawsuit2020/Dashboard1",
    vizUrls: [
      {
        label: "Lawsuit dashboard",
        url: "https://public.tableau.com/app/profile/oklahoma.watch/viz/HospitalLawsuit2020/Dashboard1",
        tool: "Tableau",
      },
      {
        label: "Infographic",
        url: "https://infogram.com/hospital-lawsuit-1h7j4dmjn1jm4nr",
        tool: "Infogram",
      },
    ],
  },
  {
    id: 1,
    slug: "viz-campaign-finance",
    navLabel: "Campaign Finance",
    headline:
      "Which State Lawmakers Have the Biggest Campaign War Chests?",
    text: "Many Oklahoma lawmakers will be in a good position financially come re-election time. State lawmakers reported an average of $32,800.",
    image: donations,
    date: "Jan. 13, 2022",
    program: "Tableau",
    publication: "Oklahoma Watch",
    tools: ["Tableau"],
    award: null,
    summary:
      "Infographic displaying campaign financial statuses of Oklahoma lawmakers in anticipation of re-election.",
    siteLink:
      "https://oklahomawatch.org/2021/02/08/oklahoma-lawmakers-report-large-campaign-reserves-after-2020-races/",
    graphicLink:
      "https://public.tableau.com/app/profile/oklahoma.watch/viz/2020Legislature1/Dashboard1",
    vizUrls: [
      {
        label: "Finance dashboard",
        url: "https://public.tableau.com/app/profile/oklahoma.watch/viz/2020Legislature1/Dashboard1",
        tool: "Tableau",
      },
    ],
  },
  {
    id: 5,
    slug: "viz-covid-memorial",
    navLabel: "COVID Memorial",
    headline:
      "Lost in the Pandemic: Oklahoma COVID-19 Digital Memorial",
    text: "Crowdsourced obituaries and family stories of Oklahomans lost to COVID-19, displayed as browsable, searchable memorial cards.",
    date: "2020",
    program: "Flourish",
    image: tweets,
    publication: "Oklahoma Watch",
    tools: ["Flourish"],
    award: "Community Champion Award, Institute for Nonprofit News (2020)",
    summary:
      "Interactive Flourish memorial visualizing individual lives lost to COVID-19 in Oklahoma through crowdsourced stories and obituaries.",
    siteLink:
      "https://oklahomawatch.org/oklahoma-covid-legacy-project/",
    graphicLink:
      "https://flo.uri.sh/visualisation/5834301/embed",
    vizUrls: [
      {
        label: "Memorial cards",
        url: "https://flo.uri.sh/visualisation/5834301/embed",
        tool: "Flourish",
      },
    ],
  },
  {
    id: 6,
    slug: "viz-mass-shootings",
    navLabel: "Mass Shootings",
    headline:
      "In Three Days, Oklahoma Sees Number of Mass Shooting Since 2009 Increase from Five to Seven",
    text: "Since 2009, there have been 7 mass shootings in Oklahoma, resulting in 27 people shot and killed and 12 people shot and wounded, according to the Everytown Research & Policy Group, a gun-control advocacy group. Two of those shootings have occurred since Monday.",
    image: shootings,
    publication: "Oklahoma Watch",
    program: "Datawrapper",
    date: "June 3, 2022",
    tools: ["Datawrapper"],
    award: null,
    summary:
      "Graphic illustrating the increase of mass shootings in Oklahoma, highlighting a surge in recent incidents.",
    siteLink:
      "https://oklahomawatch.org/2022/06/03/how-oklahoma-lawmakers-have-loosened-gun-regulations-the-past-decade%EF%BF%BC/",
    graphicLink: "https://www.datawrapper.de/_/fMDc4/",
    vizUrls: [
      {
        label: "Shootings timeline",
        url: "https://www.datawrapper.de/_/fMDc4/",
        tool: "Datawrapper",
      },
    ],
  },
  {
    id: 8,
    slug: "viz-redistricting",
    navLabel: "Redistricting",
    headline:
      "Redistricting: Weighing the Impact of Splitting Oklahoma's Largest Hispanic Community",
    text: "Analysis of how Oklahoma's congressional redistricting reshaped political boundaries, with dual Tableau maps comparing before-and-after district lines and demographic shifts.",
    image: redistricting,
    date: "Nov. 19, 2021",
    publication: "Oklahoma Watch",
    program: "Tableau",
    tools: ["Tableau"],
    award: null,
    summary:
      "Dual Tableau maps comparing before-and-after congressional district boundaries and demographic composition after Oklahoma's 2021 redistricting.",
    siteLink:
      "https://oklahomawatch.org/2021/11/19/redistricting-weighing-the-impact-of-splitting-oklahomas-largest-hispanic-community/",
    graphicLink: [
      "https://public.tableau.com/views/BothMapsRedistricting/Dashboard1",
      "https://public.tableau.com/views/DualMaps_16366620253140/Dashboard1",
    ],
    vizUrls: [
      {
        label: "Before/after map",
        url: "https://public.tableau.com/views/BothMapsRedistricting/Dashboard1",
        tool: "Tableau",
      },
      {
        label: "Demographic comparison",
        url: "https://public.tableau.com/views/DualMaps_16366620253140/Dashboard1",
        tool: "Tableau",
      },
    ],
  },
  {
    id: 9,
    slug: "viz-competitive-races",
    navLabel: "Competitive Races",
    headline:
      "Expect Fewer Competitive Oklahoma Legislative Races After Redistricting",
    text: "Datawrapper choropleth maps showing which House and Senate districts were likely to see competitive races after Oklahoma redrew its legislative boundaries.",
    image: redistricting,
    date: "Dec. 6, 2021",
    publication: "Oklahoma Watch",
    program: "Datawrapper",
    tools: ["Datawrapper"],
    award: null,
    summary:
      "Paired Datawrapper choropleth maps showing competitive House and Senate races after Oklahoma's 2021 redistricting reshaped legislative districts.",
    siteLink:
      "https://oklahomawatch.org/2021/12/06/expect-fewer-competitive-oklahoma-legislative-races-after-redistricting/",
    graphicLink: [
      "https://datawrapper.dwcdn.net/otcEs/2/",
      "https://datawrapper.dwcdn.net/YW1No/2/",
    ],
    vizUrls: [
      {
        label: "House races map",
        url: "https://datawrapper.dwcdn.net/otcEs/2/",
        tool: "Datawrapper",
      },
      {
        label: "Senate races map",
        url: "https://datawrapper.dwcdn.net/YW1No/2/",
        tool: "Datawrapper",
      },
    ],
  },
  {
    id: 10,
    slug: "viz-ice-detainers",
    navLabel: "ICE Detainers",
    headline:
      "ICE Holds Drop as Immigrant Communities, Law Enforcement Balance Policy Changes",
    text: "Datawrapper chart tracking the decline in ICE detainer requests to Oklahoma law enforcement agencies as immigration enforcement policies shifted.",
    image: ice,
    date: "March 4, 2022",
    publication: "Oklahoma Watch",
    program: "Datawrapper",
    tools: ["Datawrapper"],
    award: null,
    summary:
      "Datawrapper chart tracking the decline in ICE detainer requests to Oklahoma law enforcement as federal immigration enforcement policies shifted.",
    siteLink:
      "https://oklahomawatch.org/2022/03/04/ice-holds-drop-as-immigrant-communities-law-enforcement-balance-policy-changes/",
    graphicLink: "https://datawrapper.dwcdn.net/NDN7G/7/",
    vizUrls: [
      {
        label: "ICE holds chart",
        url: "https://datawrapper.dwcdn.net/NDN7G/7/",
        tool: "Datawrapper",
      },
    ],
  },
];
