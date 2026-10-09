window.newsItems.unshift(
  {
    date: '10/2026',
    category: 'funding',
    html: 'Received <a href="https://research.umbc.edu/office-of-technology-development/faculty-entrepreneurship-accelerator-fund-feat/">UMBC Faculty Entrepreneurship Accelerator Fund (FAST) funding</a>. Thanks to the Office of Institutional Advancement (OIA) and the Office of Research and Creative Achievement (ORCA)!'
  },
  {
    date: '9/2026',
    category: 'talk',
    html: 'Interviewed by Lalitha Vinjamuri for <a href="https://www.linkedin.com/pulse/nextgen-talks-episode-3-smartphones-smart-health-future-vinjamuri-p4mpe/">NextGen Talks: Smartphones, Smart Health, and the Future</a>.'
  },
  {
    date: '10/2026',
    category: 'talk',
    html: 'Gave a guest lecture, <em class="news-title">Acoustic Sensing for Hemodynamic Health</em>, at the Columbia University Research Seminar. Thanks to Dr. Xia Zhou for the invitation!'
  },
  {
    date: '7/2026',
    category: 'service',
    html: "Invited to serve on the Technical Program Committee for <a href='https://www.sigmobile.org/mobicom/2027/'>MobiCom '27</a>. We welcome your submissions!"
  },
  {
    date: '6/2026',
    category: 'service',
    html: "Selected to serve as a reviewer for TOSN '26."
  },
  {
    date: '6/2026',
    category: 'talk',
    html: "I will attend <a href='https://www.sigmobile.org/mobisys/2026/'>ACM MobiSys 2026</a> in Cambridge, UK. Looking forward to presenting our research and engaging with the mobile systems community."
  },
  {
    date: '6/2026',
    category: 'funding',
    html: "Received Strategic Awards for Research Transitions (START) funding. Thanks to the UMBC Office of Research Development!"
  },
  {
    date: '5/2026',
    category: 'service',
    html: "Invited to serve on the Technical Program Committee for <a href='https://sensys.acm.org/2027/'>SenSys '27</a>."
  }
);

window.newsItems = window.newsItems.filter(item => !item.html.includes('FSI Lab PhD students Rishav Gupta'));

const sondarAnnouncement = window.newsItems.find(item =>
  item.date === '09/2024' && item.category === 'publication' && item.html.includes("MobiHoc' 24")
);
if (sondarAnnouncement) {
  sondarAnnouncement.html = 'Our paper <em class="news-title">SONDAR: Size and Shape Measurements Using Acoustic Imaging</em> was accepted at MobiHoc 2024.';
}

function moveNewsToFunding(date, phrase) {
  const item = window.newsItems.find(entry => entry.date === date && entry.html.includes(phrase));
  if (item) item.category = 'funding';
}

moveNewsToFunding('08/2025', 'COEIT Interdisciplinary Proposal (CIP) Award');
moveNewsToFunding('06/2025', 'Google Research Scholar Award');
moveNewsToFunding('10/2024', 'Undergraduate Research Experiences (SURE) award');

function moveNewsToLabAndPeople(date, phrase) {
  const item = window.newsItems.find(entry => entry.date === date && entry.html.includes(phrase));
  if (item) item.category = 'lab';
}

moveNewsToLabAndPeople('5/2026', 'FSI Lab PhD students');
moveNewsToLabAndPeople('4/2026', 'My Ph.D. student, Rishav Gupta');
moveNewsToLabAndPeople('4/2026', 'My graduate student, Dharani Nadendla');
moveNewsToLabAndPeople('4/2026', 'My undergraduate student, Kodi Mkpasi');
moveNewsToLabAndPeople('4/2026', 'My undergraduate student, Tushar Passi');
moveNewsToLabAndPeople('05/2025', 'my student Riishav Guptaa');
moveNewsToLabAndPeople('05/2025', 'NSF Research Experiences for Undergraduates (REU) funding');

function moveNewsToAwards(date, phrase) {
  const item = window.newsItems.find(entry => entry.date === date && entry.html.includes(phrase));
  if (item) item.category = 'award';
}

moveNewsToAwards('09/2025', 'distinguished TPC member');

function updateFundingNews(date, phrase, html) {
  const item = window.newsItems.find(entry => entry.date === date && entry.html.includes(phrase));
  if (item) item.html = html;
}

function updateAwardNews(date, phrase, html) {
  const item = window.newsItems.find(entry => entry.date === date && entry.category === 'award' && entry.html.includes(phrase));
  if (item) item.html = html;
}

updateAwardNews(
  '05/2025',
  'Best Demo Award',
  'Our demo received the <span class="news-award">Best Demo Award</span> at IEEE S&amp;P SecureTrans 2025!'
);

function updateLabNews(date, phrase, html) {
  const item = window.newsItems.find(entry => entry.date === date && entry.category === 'lab' && entry.html.includes(phrase));
  if (item) item.html = html;
}

updateLabNews(
  '4/2026',
  'My Ph.D. student, Rishav Gupta',
  'My Ph.D. student, Rishav Gupta, received the <a href="https://www.csee.umbc.edu/news-events/2026-csee-research-day/2026-csee-research-day-awardees/">CSEE Research Day Best Poster Award</a>. Congratulations!'
);
updateLabNews(
  '05/2025',
  'my student Riishav Guptaa',
  'Rishav Gupta received the <a href="https://www.csee.umbc.edu/news-events/2026-csee-research-day/2026-csee-research-day-awardees/">CSEE Research Day Best Poster Award</a>. Congratulations!'
);

updateFundingNews(
  '5/2026',
  'CENTRE funding',
  'Received <a href="https://entrepreneurship.umbc.edu/centre-funding-initiative/">UMBC Commercialization &amp; ENTR Research (CENTRE) Funding</a>. Thanks to the Alex. Brown Center for Entrepreneurship!'
);
updateFundingNews(
  '6/2026',
  'START',
  'Received <a href="https://research.umbc.edu/past-start-awards/">UMBC Strategic Awards for Research Transitions (START) Funding</a>. Thanks to the UMBC Office of Research Development!'
);
updateFundingNews(
  '08/2025',
  'COEIT Interdisciplinary Proposal (CIP) Award',
  'Received the <a href="https://coeit.umbc.edu/ciip-awards/">UMBC COEIT Interdisciplinary Proposal (CIP) Award</a> as Co-PI, with collaborator Janelle Clark (UMBC, ME). Thanks to COEIT!'
);
updateFundingNews(
  '06/2025',
  'Google Research Scholar Award',
  'Received the <a href="https://research.google/programs-and-events/research-scholar-program/recipients/">Google Research Scholar Award</a>. Many thanks to Google!'
);
updateFundingNews(
  '06/2025',
  'FEAT funding',
  'Received the <a href="https://research.umbc.edu/office-of-technology-development/faculty-entrepreneurship-accelerator-fund-feat/">UMBC Faculty Entrepreneurship AcceleraTor Fund (FEAT) Award</a>. Thanks to UMBC OIA and ORCA!'
);
updateFundingNews(
  '03/2025',
  'SURFF funding',
  'Received the <a href="https://research.umbc.edu/past-surff-awards/">UMBC Summer Research Faculty Fellowship (SURFF)</a>. Thanks to UMBC ORD!'
);
updateFundingNews(
  '02/2025',
  'UMB ICTR Pilot Grant',
  'Received the <a href="https://www.umaryland.edu/ictr/funding/ictr-pilot-grant-awardee-news/">UMB ICTR Accelerated Translational Incubator Pilot (ATIP) Grant</a> with collaborator Zhekang Ying (UMB School of Medicine, Department of Medicine).'
);
updateFundingNews(
  '10/2024',
  'Undergraduate Research Experiences (SURE) award',
  'Received the <a href="https://research.umbc.edu/sure/">UMBC Supplement for Undergraduate Research Experiences (SURE)</a> award to support undergraduate research.'
);
updateFundingNews(
  '05/2025',
  'NSF Research Experiences for Undergraduates (REU) funding',
  'Congratulations to Kodi Mkpasi on receiving <a href="https://new.nsf.gov/funding/opportunities/research-experiences-undergraduates-reu">NSF Research Experiences for Undergraduates (REU) funding</a> for summer research!'
);

function updatePublicationNews(date, phrase, html) {
  const item = window.newsItems.find(entry =>
    entry.date === date && entry.category === 'publication' && entry.html.includes(phrase)
  );
  if (item) item.html = html;
}

updatePublicationNews(
  '3/2026',
  "MobiSys '26",
  'Our paper <strong>[Emerging Ideas] Phonotonos: Through-Skin Ultrasonic Blood Flow Sensing Using Smartphones</strong> was accepted as a <span class="news-award">MobiSys 2026 Featured Paper</span>.'
);
updatePublicationNews(
  '09/2025',
  "IMWUT '26",
  'Our paper <strong>Acoustoscillogram: Unlocking Arterial Health Insights via Acoustic Sensing with Low-cost Wired Earphones</strong> was accepted at IMWUT/UbiComp 2026.'
);
updatePublicationNews(
  '04/2025',
  "IMWUT '25",
  'Our paper <strong>WindDancer: Understanding Acoustic Sensing under Ambient Airflow</strong> was accepted at IMWUT/UbiComp 2025.'
);
updatePublicationNews(
  '03/2025',
  'IRS Manipulation',
  'Our demo paper <strong>Disrupting In-Car mmWave Sensing Through IRS Manipulation</strong> was accepted at IEEE S&amp;P SecureTrans 2025 and received the <span class="news-award">Best Demo Award</span>.'
);

window.newsItems.push(
  {
    date: '4/2026',
    category: 'service',
    html: 'Serving as Local Chair for the ACM Conference on Trustworthy and Responsible AI and Computing Systems (EIGTRUST) 2027.'
  },
  {
    date: '6/2026',
    category: 'service',
    html: 'Served as a Session Chair at ACM MobiSys 2026.'
  },
  {
    date: '6/2026',
    category: 'service',
    html: 'Mentored at the N2Women Workshop at ACM MobiSys 2026.'
  },
  {
    date: '2026',
    category: 'service',
    html: 'Serving as a reviewer for the UMB ICTR ATIP Grant Review Committee for the 2026–2027 term.'
  },
  {
    date: '2025',
    category: 'service',
    html: 'Served as a reviewer for UbiComp/ISWC 2025.'
  },
  {
    date: '11/2025',
    category: 'talk',
    html: 'Invited to give a talk at the Cyber Practicum, Center for Women in Technology, UMBC.'
  },
  {
    date: '9/2025',
    category: 'talk',
    html: 'Invited to give a talk at the UMBC Biomedical Engineering Society (BMES).'
  },
  {
    date: '8/2025',
    category: 'talk',
    html: 'Gave a lightning talk, <em class="news-title">Smarter Living with Everyday Devices</em>, at CSEE Welcome Week.'
  },
  {
    date: '5/2025',
    category: 'talk',
    html: 'Gave a lightning talk, <em class="news-title">Turning Smartphones and Earphones into Scalable Cardiovascular Monitors</em>, at ACS ICSOFC.'
  },
  {
    date: '3/2025',
    category: 'talk',
    html: 'Invited to give a talk at the Center for Real-time Distributed Sensing and Autonomy (CARDS).'
  },
  {
    date: '2026',
    category: 'lab',
    html: 'Congratulations to Aima Waheed on receiving a UMBC COEIT Student Summer Project (CSSP) Award!'
  },
  {
    date: '2026',
    category: 'lab',
    html: 'Congratulations to Marianne Nguyen on becoming a UMBC Cyber Scholar!'
  },
  {
    date: '2025',
    category: 'lab',
    html: 'Congratulations to lab alumnus Mu Du on admission to the Georgia Institute of Technology!'
  },
  {
    date: '8/2026',
    category: 'funding',
    html: 'Received the <a href="https://my3.my.umbc.edu/groups/csss/posts/143566"><em class="news-title">Cybersecurity Graduate Fellows Program (Cyber Graduate Fellowship)</em></a>. Thanks to the UMBC Cybersecurity Institute!'
  },
  {
    date: '8/2026',
    category: 'funding',
    html: 'Received <a href="https://research.umbc.edu/umbc-ictr-core-catalytic-support-to-launch-early-stage-investigations/"><em class="news-title">UMBC-UMB ICTR Core Catalytic Support to Launch Early-Stage Investigations (CONNECT) Funding</em></a> as Co-PI, with collaborators Yiwen Hu (UMBC, CSEE) and Chixiang Chen (UMB, Epidemiology &amp; Public Health), to launch early-stage investigations.'
  },
  {
    date: '2026',
    category: 'funding',
    html: 'Received <a href="https://coeit.umbc.edu/coeit-student-summer-project-awards/"><em class="news-title">UMBC COEIT Student Summer Project (CSSP) Awards</em></a> to support student research. Congratulations to Aima Waheed!'
  },
  {
    date: '3/2026',
    category: 'award',
    html: 'Our paper <em class="news-title">[Emerging Ideas] Phonotonos: Through-Skin Ultrasonic Blood Flow Sensing Using Smartphones</em> was selected as a <span class="news-award">MobiSys 2026 Featured Paper</span>.'
  },
  {
    date: '4/2026',
    category: 'award',
    html: 'Received the Asian American Alumni and Friends Society (AAAFS) Inaugural Community Builder Award at UMBC.'
  },
  {
    date: '2022',
    category: 'award',
    html: 'Received a Student Travel Grant from MobiCom.'
  },
  {
    date: '2022',
    category: 'award',
    html: 'Received a Student Travel Grant from HotNets.'
  },
  {
    date: '2022',
    category: 'award',
    html: 'Received the Dr. Phil Bernstein Graduate Scholarship from UMass Amherst.'
  },
  {
    date: '2017',
    category: 'award',
    html: 'Received the Bosch Scholarship from SJTU.'
  },
  {
    date: '2017',
    category: 'award',
    html: 'Received the <span class="news-award">MobiQuitous Best Paper Runner-Up Award</span>.'
  },
  {
    date: '2014',
    category: 'award',
    html: 'Received the Google Excellence Scholarship.'
  },
  {
    date: '2014',
    category: 'award',
    html: 'Received the Outstanding Undergraduate Award from CCF.'
  },
  {
    date: '2012-13',
    category: 'award',
    html: 'Received the China National Scholarship.'
  },
  {
    date: '1/2026',
    category: 'publication',
    html: 'Published <strong>From Hearing to Feeling: Unlocking Through-Skin Acoustic Sensing on Smartphones</strong> in ACM GetMobile.'
  },
  {
    date: '8/2026',
    category: 'publication',
    html: 'Our workshop paper <strong>Personalized Oral Hygiene Framework for Longitudinal Toothbrushing Monitoring In-the-Wild</strong> was accepted at MobiDx 2026, co-located with MobiCom. Congratulations to Kodilinye Mkpasi!'
  },
  {
    date: '8/2026',
    category: 'publication',
    html: 'Our workshop paper <strong>Ultrasound Watermark: Real-time Acoustic Watermarking against Voice Scams on Smartphones</strong> was accepted at EdgeSP 2026, co-located with SEC. Congratulations to Renzhi Hao!'
  },
  {
    date: '8/2026',
    category: 'publication',
    html: 'Our work-in-progress paper <strong>Smartphone-based Acoustic Tissue Characterization for Personalized Body-contact Systems</strong> was accepted at MobiCom 2026. Congratulations to Rishav Gupta!'
  },
  {
    date: '8/2026',
    category: 'publication',
    html: 'Our workshop paper <strong>EchoGuard: Continuous Ultrasound-Based Human Presence Verification for AI Agent Detections</strong> was accepted at EdgeSP 2026, co-located with SEC. Congratulations to Yizhu Wen!'
  },
  {
    date: '5/2026',
    category: 'lab',
    html: 'Christian Wilkins presented the poster <strong>Smartphone Human Detection using Acoustic Sensing</strong> at UMBC COEIT Research Day and received an <a href="https://coeit.umbc.edu/2026-talks-poster-sessions/">Undergraduate Student Award</a>.'
  },
  {
    date: '5/2026',
    category: 'lab',
    html: 'Dharani Nadendla presented the poster <strong>Ultrasound Watermark: Real-time Acoustic Watermarking for Voice Scam Protection on Smartphones</strong> at the UMBC Annual Research Symposium and COEIT Research Day, receiving the <a href="https://www.linkedin.com/posts/jeanne-m-van-briesen-34838194_umbcproud-activity-7450289918477492224-JSqN/">Best of COEIT Graduate Award</a>.'
  },
  {
    date: '5/2026',
    category: 'lab',
    html: 'Kodilinye Mkpasi presented the poster <strong>O-HygieCare: Predictive Oral Health Monitoring through Longitudinal Toothbrushing Analytics using Smart Wearable Intelligence</strong> at UMBC COEIT Research Day and received an <a href="https://coeit.umbc.edu/2026-talks-poster-sessions/">Undergraduate Student Award</a>.'
  },
  {
    date: '5/2026',
    category: 'lab',
    html: 'Alyssa N. Maguina, Sithumina Weeraratna, and Rishav Gupta presented the poster <strong>Integrating Psychophysics, Tissue Mechanics and Smartphone Ultrasound for Personalized Human-Robot Interaction</strong> at UMBC COEIT Research Day; Rishav received the <a href="https://coeit.umbc.edu/2026-talks-poster-sessions/">Doctorate Student Award</a>.'
  },
  {
    date: '5/2026',
    category: 'lab',
    html: 'Rishav Gupta presented the poster <strong>Enabling Affordable and Accessible Blood Pressure Monitoring on Smartphones</strong> at UMBC COEIT and CSEE Research Day, receiving the <a href="https://umbc.edu/stories/rishav-gupta-coeit-computing-for-social-good/">Computing for Social Good Award</a> and the <a href="https://www.csee.umbc.edu/news-events/2026-csee-research-day/2026-csee-research-day-awardees/">CSEE Research Day Best Poster Award</a>.'
  },
  {
    date: '5/2025',
    category: 'lab',
    html: 'Kodilinye Mkpasi presented the poster <strong>UltraControl: Capturing Ultrasound Leaked from Home Appliances for Smartphone-Based Gesture Control</strong> at UMBC CSEE Research Day.'
  },
  {
    date: '5/2025',
    category: 'lab',
    html: 'Rishav Gupta presented the poster <strong>Continuous Blood Pressure Monitoring Using Smartphones and Wearables: A Survey of Recent Advances and Challenges</strong> at UMBC COEIT Research Day and received a <a href="https://www.csee.umbc.edu/news-events/2026-csee-research-day/2026-csee-research-day-awardees/">Research Day Poster Award</a>.'
  },
  {
    date: '8/2026',
    category: 'publication',
    html: 'Our demo paper <strong>Horae: A Behavior-Aware Agentic Calendar Scheduling Framework Grounded in Mobile Sensing</strong> was accepted at MobiCom 2026. Congratulations to Sanskriti Aripineni!'
  },
  {
    date: '8/2026',
    category: 'publication',
    html: 'Our demo paper <strong>Phonotonos: Through-Skin Ultrasonic Blood Flow Sensing Using Smartphones</strong> was accepted at MobiCom 2026. Congratulations to Rishav Gupta!'
  }
);

window.newsItems.forEach(item => {
  item.html = item.html
    .replace(/<strong>([^<]*(?:Award|Fellowship)[^<]*)<\/strong>/g, '<span class="news-award">$1</span>')
    .replace(/<strong>(.*?)<\/strong>/g, '<em class="news-title">$1</em>');
});
