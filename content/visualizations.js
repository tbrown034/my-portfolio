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
    headline: "Amid COVID-19, Some Hospitals Continue Suing Patients Over Unpaid Bills",
    text: "Follow-up investigation showing that despite the pandemic, several Oklahoma hospitals continued filing lawsuits against patients over unpaid medical bills. Built an updated Tableau dashboard tracking which hospitals kept suing and at what rates.",
    image: ice,
    publication: "Oklahoma Watch",
    program: "Tableau",
    date: "Aug. 4, 2020",
    summary:
      "Updated interactive dashboard showing hospital lawsuit patterns during the pandemic, building on the original 22,250-record investigation.",
    siteLink:
      "https://oklahomawatch.org/2020/08/04/amid-covid-19-crisis-some-oklahoma-hospitals-continue-suing-patients-over-unpaid-bills/",
    graphicLink: "https://public.tableau.com/app/profile/oklahoma.watch/viz/HospitalLawsuit2020/Dashboard1",
  },
  {
    id: 3,
    headline: "Vaccination Rates By State",
    text: "About 52% of Oklahoma's population has been fully vaccinated, according to a tally from the Mayo Clinic. That is the 13th-lowest percentage in the country, as of Dec. 10.",
    image: vaccination,
    date: "Jan. 13, 2022",
    publication: "Oklahoma Watch",
    program: "Datawrapper",
    summary:
      "Map visualizing vaccination rates across states, emphasizing Oklahoma's below-average rates.",
    siteLink:
      "https://oklahomawatch.org/2021/12/20/as-some-oklahoma-churches-push-vaccines-others-sow-misinformation-doubt/",
    graphicLink: [
      "https://www.datawrapper.de/_/J9m2Z/",
      "https://www.datawrapper.de/_/RFBFU/",
    ],
  },
  {
    id: 4,
    headline:
      "Nearly Half of Oklahoma Legislative Races Already Are Decided Without a Vote",
    text: "Analysis of every legislative race in the 2022 cycle showing that nearly half were decided before voters ever cast a ballot -- uncontested seats where only one candidate filed. Four visualizations built in Flourish and Datawrapper showing how uncontested races predetermine legislative control.",
    image: redistricting,
    date: "April 18, 2022",
    publication: "Oklahoma Watch",
    program: "Flourish",
    summary:
      "Parliament charts and data tables showing uncontested races across the Oklahoma House and Senate, by party.",
    siteLink:
      "https://oklahomawatch.org/2022/04/18/nearly-half-of-oklahoma-legislative-races-already-are-decided-without-a-vote/",
    graphicLink: [
      "https://flo.uri.sh/visualisation/9434901/embed",
      "https://flo.uri.sh/visualisation/9435055/embed",
      "https://datawrapper.dwcdn.net/edtag/7/",
      "https://datawrapper.dwcdn.net/L0qvZ/3/",
    ],
  },
  {
    id: 5,
    headline:
      "Lost in the Pandemic: Oklahoma COVID-19 Digital Memorial",
    text: "Crowdsourced obituaries and family stories of Oklahomans lost to COVID-19, displayed as browsable, searchable memorial cards. Won Community Champion Award (Honorable Mention) from the Institute for Nonprofit News (2020).",
    date: "2020",
    program: "Flourish",
    image: tweets,
    publication: "Oklahoma Watch",
    summary:
      "Interactive Flourish memorial visualizing individual lives lost to COVID-19 in Oklahoma through crowdsourced stories and obituaries.",
    siteLink:
      "https://oklahomawatch.org/oklahoma-covid-legacy-project/",
    graphicLink:
      "https://flo.uri.sh/visualisation/5834301/embed",
  },

  {
    id: 6,
    headline:
      "In Three Days, Oklahoma Sees Number of Mass Shooting Since 2009 Increase from Five to Seven",
    text: "Since 2009, there have been 7 mass shootings in Oklahoma, resulting in 27 people shot and killed and 12 people shot and wounded, according to the Everytown Research & Policy Group, a gun-control advocacy group. Two of those shootings have occurred since Monday.",
    image: shootings,
    publication: "Oklahoma Watch",
    program: "Datawrapper",
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
    text: "Of the more than 3,600 bills introduced during Oklahoma's 58th Legislature, only 1,031 were sent to the governor. Democrats authored just 40 bills (14 in the House and 26 in the Senate) that passed — the GOP holds 81% of the 149 legislative seats. Compared to the 53rd Legislature (2011-2012), Democratic influence has significantly declined.",
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
