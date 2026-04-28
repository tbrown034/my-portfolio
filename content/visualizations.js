import hospitalDashboard from "@/public/images/hospital-lawsuits-tableau.png";
import donations from "@/public/images/donations.png";
import covidMemorial from "@/public/images/covid-memorial.png";
import financialDisclosures from "@/public/images/financial-disclosures.png";
import vaccination from "@/public/images/vaccination.png";
import bills from "@/public/images/flourish1.png";

// Curated: award-winners and multi-viz packages only
// Removed: Legislative Races, Competitive Races, ICE Detainers, Mass Shootings (supporting-tier single-chart pieces)
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
    id: 2,
    slug: "viz-hospital-lawsuits",
    navLabel: "Hospital Lawsuits",
    headline:
      "Amid COVID-19, Some Hospitals Continue Suing Patients Over Unpaid Bills",
    text: "Follow-up investigation showing that despite the pandemic, several Oklahoma hospitals continued filing lawsuits against patients over unpaid medical bills. Built an updated Tableau dashboard tracking which hospitals kept suing and at what rates.",
    image: hospitalDashboard,
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
      "Interactive Tableau dashboard tracking campaign financial statuses of Oklahoma lawmakers heading into re-election.",
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
    image: covidMemorial,
    publication: "Oklahoma Watch",
    tools: ["Flourish"],
    award: "Community Champion Award, Honorable Mention — Institute for Nonprofit News (2020)",
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
    id: 11,
    slug: "viz-financial-disclosures",
    navLabel: "Financial Disclosures",
    headline:
      "Oklahoma Candidate & Legislator Financial Disclosures",
    text: "The state's financial disclosure forms ask officeholders to list their stakes and spouses' stakes in private businesses, investments worth more than $20,000, and income of more than $20,000 outside of officeholder pay.",
    image: financialDisclosures,
    date: "2018-2022",
    publication: "Oklahoma Watch",
    program: "Flourish",
    tools: ["Flourish", "Tableau", "DocumentCloud"],
    award: null,
    summary:
      "4-year investigative series exposing gaps in Oklahoma's candidate financial disclosure system. Digitized handwritten legislator ethics forms into a searchable database and built a Tableau map of disclosure compliance by district. Exposed a rule change that concealed candidates' personal finances.",
    siteLink:
      "https://oklahomawatch.org/2018/07/06/rule-change-conceals-statewide-candidates-personal-finances/",
    graphicLink: [
      "https://flo.uri.sh/visualisation/8481541/embed",
      "https://public.tableau.com/views/Map1_180/Dashboard1",
    ],
    vizUrls: [
      {
        label: "Searchable disclosures database",
        url: "https://flo.uri.sh/visualisation/8481541/embed",
        tool: "Flourish",
      },
      {
        label: "Compliance map by district",
        url: "https://public.tableau.com/views/Map1_180/Dashboard1",
        tool: "Tableau",
      },
    ],
  },
];
