const favicon = document.querySelector('link[rel="icon"]') || document.head.appendChild(document.createElement('link'));
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = 'assets/images/favicon.ico';

document.querySelectorAll('.masthead .site-name').forEach(siteName => {
  if (siteName.nextElementSibling?.classList.contains('lab-wordmark')) return;
  siteName.classList.add('with-lab-wordmark');
  siteName.insertAdjacentHTML('afterend', '<a class="lab-wordmark" href="current-members.html" aria-label="Future Sensing and Interaction Lab"><img src="assets/images/fsi-lab-monogram-umbc.png" alt="FSI Lab"></a>');
});

if (![...document.querySelectorAll('link[rel="stylesheet"]')].some(link => link.href.includes('fsi-team.css'))) {
  document.documentElement.classList.add('light-lab-wordmark');
}
const labWordmarkStyles = document.createElement('style');
labWordmarkStyles.textContent = '.site-name.with-lab-wordmark{margin-right:.72rem}.lab-wordmark{display:inline-flex;margin-right:auto}.lab-wordmark:hover{text-decoration:none}.lab-wordmark img{display:block;height:52px;width:auto}.masthead nav a{font-size:.98rem}.team-menu{gap:0;min-width:0;padding:.25rem;width:max-content}.masthead .team-menu a{font-size:.98rem;line-height:1.2;padding:.3rem .72rem}@media(max-width:650px){.site-name.with-lab-wordmark{margin-right:.45rem}.lab-wordmark img{height:42px}.team-menu{min-width:0}.masthead .team-menu a{font-size:.98rem;padding:.28rem 0}}';
document.head.appendChild(labWordmarkStyles);

const menuButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('#navigation');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('.lab-nav').forEach(labNav => {
  const labMenu = labNav.querySelector('.nav-dropdown');
  if (!labMenu) return;
  let closeMenuTimer;
  const openLabMenu = () => {
    clearTimeout(closeMenuTimer);
    labMenu.open = true;
  };
  const scheduleLabMenuClose = () => {
    clearTimeout(closeMenuTimer);
    closeMenuTimer = setTimeout(() => { labMenu.open = false; }, 220);
  };
  labNav.addEventListener('pointerenter', () => {
    if (window.matchMedia('(hover: hover)').matches) openLabMenu();
  });
  labNav.addEventListener('pointerleave', () => {
    if (window.matchMedia('(hover: hover)').matches) scheduleLabMenuClose();
  });
  labMenu.querySelector('.team-menu')?.addEventListener('pointerenter', openLabMenu);
  labMenu.querySelector('.team-menu')?.addEventListener('pointerleave', scheduleLabMenuClose);
});
document.querySelectorAll('a[href="gallery.html"]').forEach(link => {
  link.textContent = 'Lab Moments';
});
document.querySelectorAll('.team-menu a[href="current-members.html"]').forEach(link => {
  link.textContent = 'Our Team';
});
document.querySelectorAll('.team-menu a[href="former-members.html"]').forEach(link => {
  link.textContent = 'Past Members';
});
document.querySelectorAll('.former-member a[href="current-members.html"]').forEach(link => {
  link.textContent = 'Our Team';
});
document.querySelectorAll('.former-member a[href="former-members.html"]').forEach(link => {
  link.textContent = 'Past Members';
});
document.querySelector('.profile-contact a[href*="linkedin.com"]')?.insertAdjacentHTML(
  'afterend',
  '<a href="assets/files/Dong_Li_Academic_CV.pdf" aria-label="Download curriculum vitae"><span class="identity-icon cv-icon" aria-hidden="true">CV</span>Curriculum Vitae</a>'
);
document.querySelector('#year').textContent = new Date().getFullYear();

const categoryNames = {
  publication: 'Publication',
  award: 'Award',
  funding: 'Funding',
  service: 'Service',
  talk: 'Talks & Events',
  lab: 'Lab & People',
};
const archive = document.querySelector('#news-archive');
const filters = document.querySelector('.news-filters');
const moreNews = document.querySelector('#news-more');
let activeCategory = 'all';
let showAllNews = false;

function renderNews() {
  if (!archive || !window.newsItems) return;
  const items = [...window.newsItems]
    .filter(item => activeCategory === 'all' || item.category === activeCategory)
    .sort((first, second) => {
      const dateValue = date => {
        const [monthOrYear, year] = date.split('/').map(Number);
        if (year) return year * 100 + monthOrYear;
        const standaloneYear = Number(date.match(/^\d{4}/)?.[0]);
        return standaloneYear ? standaloneYear * 100 : 0;
      };
      const dateDifference = dateValue(second.date) - dateValue(first.date);
      if (dateDifference) return dateDifference;
      const topNewsPriority = item => item.html.includes('Cybersecurity Graduate Fellows Program') ? 1 : 0;
      const topNewsDifference = topNewsPriority(second) - topNewsPriority(first);
      if (topNewsDifference) return topNewsDifference;
      const publicationPriority = item => {
        if (item.category !== 'publication') return 0;
        if (/MobiCom 2026|MobiDx 2026/.test(item.html)) return 2;
        if (/EdgeSP 2026/.test(item.html)) return 1;
        return 0;
      };
      return publicationPriority(second) - publicationPriority(first);
    });
  const displayed = showAllNews ? items : items.slice(0, 8);
  archive.innerHTML = displayed
    .map(item => `<li><time>${item.date}</time><span><b class="news-tag tag-${item.category}">${categoryNames[item.category]}</b>${item.html}</span></li>`)
    .join('');
  if (moreNews) {
    const hiddenCount = items.length - displayed.length;
    moreNews.hidden = hiddenCount <= 0 && !showAllNews;
    moreNews.textContent = showAllNews ? 'Show fewer news items' : `Show ${hiddenCount} more news items`;
    moreNews.setAttribute('aria-expanded', String(showAllNews));
  }
}

filters?.addEventListener('click', event => {
  const button = event.target.closest('button[data-category]');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  activeCategory = button.dataset.category;
  showAllNews = false;
  renderNews();
});

moreNews?.addEventListener('click', () => {
  showAllNews = !showAllNews;
  renderNews();
});

renderNews();

const recognition = document.querySelector('#research-areas .research-note:last-of-type');
if (recognition) {
  recognition.insertAdjacentHTML('afterend', '<p class="research-note openings-note"><strong>Openings.</strong> I am looking for highly motivated Ph.D. students, master’s students, and research interns to join my group. If you are interested, please email me with your CV and transcripts attached.</p>');
}

const publications = document.querySelector('#publications');
if (publications) {
  publications.innerHTML = '<h2>Recent Publications</h2><div class="publication-cards"><article class="publication-card featured-publication"><img src="assets/images/publications/phonotonos.png" alt="Phonotonos smartphone-based ultrasonic sensing of carotid-artery blood-flow velocity"><div><p class="publication-venue">MobiSys 2026 · MobiCom 2026 Demo</p><span class="featured-paper-label">Featured Paper</span><h3>[Emerging Ideas] Phonotonos: Through-Skin Ultrasonic Blood Flow Sensing Using Smartphones</h3><p class="authors">Shirui Cao, Jie Xiong, Rishav Gupta, Sunghoon Ivan Lee, Jeremy Gummeson, and <strong>Dong Li</strong></p><p class="publication-links"><a href="papers/MobiCom26_Demo_Phonotonos.pdf">Paper</a><a href="https://phonotonos.github.io">Project</a><a href="#highlights">Demo video</a><a href="https://github.com/Phonotonos/Phonotonos">Code</a></p></div></article><article class="publication-card"><img src="assets/images/publications/through-skin-acoustic-sensing.png" alt="Smartphone-based through-skin acoustic sensing on a forearm"><div><p class="publication-venue">GetMobile · 2026</p><h3>From Hearing to Feeling: Unlocking Through-Skin Acoustic Sensing on Smartphones</h3><p class="authors"><strong>Dong Li</strong></p><p class="publication-links"><a href="papers/GetMobile26_ThroughSkin.pdf">Paper</a></p></div></article><article class="publication-card"><div class="publication-mark mark-green" aria-hidden="true"><span>2026</span><strong>IMWUT</strong></div><div><p class="publication-venue">IMWUT / UbiComp · 2026</p><h3>Acoustoscillogram: Unlocking Arterial Health Insights via Acoustic Sensing with Low-cost Wired Earphones</h3><p class="authors">Xiaoxuan Liang, Zhaolong Wei, Shirui Cao, Quan Zhang, Longfei Shangguan, <strong>Dong Li</strong>, and Jeremy Gummeson</p><p class="publication-links"><a href="assets/files/IMWUT26_Acoustoscillogram.pdf">Paper</a></p></div></article><article class="publication-card"><div class="publication-mark mark-slate" aria-hidden="true"><span>2025</span><strong>IMWUT</strong></div><div><p class="publication-venue">IMWUT / UbiComp · 2025</p><h3>WindDancer: Understanding Acoustic Sensing under Ambient Airflow</h3><p class="authors">Kuang Yuan, <strong>Dong Li</strong>, Hao Zhou, Zhehao Li, Lili Qiu, Swarun Kumar, and Jie Xiong</p></div></article></div>';

  const publicationCards = publications.querySelector('.publication-cards');
  const phonotonosMobiSysCard = publicationCards.querySelector('.featured-publication');
  phonotonosMobiSysCard?.querySelector('.publication-venue').replaceChildren('MobiSys 2026');
  phonotonosMobiSysCard?.querySelector('.publication-links a')
    ?.setAttribute('href', 'https://dl.acm.org/doi/pdf/10.1145/3745756.3809246');
  const getMobileCard = [...publicationCards.querySelectorAll('.publication-card')]
    .find(card => card.querySelector('h3')?.textContent.includes('From Hearing to Feeling'));
  getMobileCard?.querySelector('.publication-links a')
    ?.setAttribute('href', 'https://dl.acm.org/doi/pdf/10.1145/3793236.3793238');
  const acoustoscillogramCard = [...publicationCards.querySelectorAll('.publication-card')]
    .find(card => card.querySelector('h3')?.textContent.includes('Acoustoscillogram'));
  if (acoustoscillogramCard) {
    acoustoscillogramCard.querySelector('.publication-mark')?.replaceWith(Object.assign(document.createElement('img'), {
      src: 'assets/images/publications/acoustoscillogram.png',
      alt: 'Acoustoscillogram sensing system using wired earphones to measure arterial blood-flow dynamics',
    }));
    acoustoscillogramCard.querySelector('.publication-links')?.insertAdjacentHTML(
      'beforeend',
      '<a href="https://www.youtube.com/shorts/ksvF8SqRY8w?feature=share&amp;themeRefresh=1">Demo video</a>'
    );
    acoustoscillogramCard.querySelector('a[href*="IMWUT26_Acoustoscillogram"]')
      ?.setAttribute('href', 'https://dl.acm.org/doi/epdf/10.1145/3770690');
  }
  const windDancerCard = [...publicationCards.querySelectorAll('.publication-card')]
    .find(card => card.querySelector('h3')?.textContent.includes('WindDancer'));
  if (windDancerCard) {
    windDancerCard.querySelector('.publication-mark')?.replaceWith(Object.assign(document.createElement('img'), {
      src: 'assets/images/publications/winddancer.png',
      alt: 'WindDancer illustration showing how air turbulence distorts acoustic sensing signals',
    }));
    windDancerCard.querySelector('.authors')?.insertAdjacentHTML(
      'afterend',
      '<p class="publication-links"><a href="https://github.com/kuangyuan-cmu/WindDancer">Code</a></p>'
    );
    windDancerCard.querySelector('.publication-links')?.insertAdjacentHTML(
      'afterbegin',
      '<a href="https://dl.acm.org/doi/pdf/10.1145/3729469">Paper</a>'
    );
    windDancerCard.insertAdjacentHTML(
      'afterend',
      '<article class="publication-card" data-publication-period="recent" data-selected="false"><div class="publication-mark mark-slate" aria-hidden="true"><span>2025</span><strong>Demo</strong></div><div><p class="publication-venue">IEEE S&amp;P SecureTrans · 2025</p><span class="publication-award-label">Best Demo Award</span><h3>Demo: Disrupting In-Car mmWave Sensing Through IRS Manipulation</h3><p class="authors">Hanqing Guo, Dong Li, Ruofeng Liu, and Yao Zheng</p><p class="publication-links"><a href="https://gustybear-websites.s3.us-west-2.amazonaws.com/publication-guo-demo-disrupting-in-car-mmwave-sensing-2025/Guo+%E2%80%93+2025+%E2%80%93+Demo+Disrupting+In-Car+mmWave+Sensing+Through+IRS+Manipulation.pdf">Paper</a></p></div></article>'
    );
    const secureTransCard = windDancerCard.nextElementSibling;
    secureTransCard?.querySelector('.publication-mark')?.replaceWith(Object.assign(document.createElement('img'), {
      src: 'assets/images/publications/irs-manipulation.png',
      alt: 'In-car mmWave sensing attack through intelligent reflecting surface manipulation',
    }));
    secureTransCard?.insertAdjacentHTML(
      'afterend',
      '<article class="publication-card" data-publication-period="recent" data-selected="false"><img src="assets/images/publications/sondar.png" alt="SONDAR acoustic imaging system for measuring object size and shape on a conveyor belt"><div><p class="publication-venue">MobiHoc · 2024</p><h3>SONDAR: Size and Shape Measurements Using Acoustic Imaging</h3><p class="authors">Xiaoxuan Liang, Zhaolong Wei, Dong Li, Jie Xiong, and Jeremy Gummeson</p><p class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3641512.3686359">Paper</a></p></div></article>'
    );
  }
  publicationCards?.insertAdjacentHTML('beforeend',
    '<article class="publication-card" data-publication-period="earlier" data-selected="true"><img src="assets/images/publications/powerphone.png" alt="PowerPhone frequency-response comparison across smartphone models"><div><p class="publication-venue">MobiCom · 2023</p><h3>PowerPhone: Unleashing the Acoustic Sensing Capability of Smartphones</h3><p class="authors">Shirui Cao, <strong>Dong Li</strong>, Sunghoon Ivan Lee, and Jie Xiong</p><p class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3570361.3613270">Paper</a><a href="https://powerphone.github.io">Project</a><a href="https://github.com/PowerPhone">Code</a></p></div></article>' +
    '<article class="publication-card" data-publication-period="earlier" data-selected="true"><img src="assets/images/publications/speaker-gesture.png" alt="Room-scale gesture recognition with inaudible acoustic signals from a smart speaker"><div><p class="publication-venue">SenSys · 2022</p><h3>Room-scale Hand Gesture Recognition Using Smart Speakers</h3><p class="authors"><strong>Dong Li</strong>, Jialin Liu, Sunghoon Ivan Lee, and Jie Xiong</p><p class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3560905.3568528">Paper</a></p></div></article>' +
    '<article class="publication-card" data-publication-period="earlier" data-selected="true"><img src="assets/images/publications/mom.png" alt="MOM microphone-based 3D orientation measurement system with two speakers and a mobile device"><div><p class="publication-venue">IPSN · 2022</p><h3>MOM: Microphone-based 3D Orientation Measurement</h3><p class="authors">Zhihui Gao, Ang Li, <strong>Dong Li</strong>, Jialin Liu, Jie Xiong, Yu Wang, Bing Li, and Yiran Chen</p><p class="publication-links"><a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9826109">Paper</a></p></div></article>' +
    '<article class="publication-card" data-publication-period="earlier" data-selected="true"><img src="assets/images/publications/lasense.png" alt="LASense virtual transceiver for fine-grained acoustic activity sensing and respiration monitoring"><div><p class="publication-venue">IMWUT / UbiComp · 2022</p><h3>LASense: Pushing the Limits of Fine-grained Activity Sensing Using Acoustic Signals</h3><p class="authors"><strong>Dong Li</strong>, Jialin Liu, Sunghoon Ivan Lee, and Jie Xiong</p><p class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3517253">Paper</a></p></div></article>' +
    '<article class="publication-card" data-publication-period="earlier" data-selected="true"><img src="assets/images/publications/device-motion-sensing.png" alt="Contact-free acoustic sensing with a moving robotic device and a seated target"><div><p class="publication-venue">IMWUT / UbiComp · 2022</p><h3>Enabling Contact-free Acoustic Sensing Under Device Motion</h3><p class="authors">Jialin Liu, <strong>Dong Li</strong>, Lei Wang, Fusang Zhang, and Jie Xiong</p><p class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3550329">Paper</a></p></div></article>' +
    '<article class="publication-card" data-publication-period="earlier" data-selected="true"><img src="assets/images/publications/acoustic-sensing-experience.png" alt="Conceptual illustration of real-world noise, device orientation, and motion challenges in acoustic sensing"><div><p class="publication-venue">MobiCom · 2022</p><h3>Experience: Practical Problems for Acoustic Sensing</h3><p class="authors"><strong>Dong Li</strong>, Jialin Liu, Sunghoon Ivan Lee, and Jie Xiong</p><p class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3495243.3560527">Paper</a></p></div></article>' +
    '<article class="publication-card" data-publication-period="earlier" data-selected="true"><img src="assets/images/publications/hardware-nonlinearity.png" alt="Acoustic sensing paths and phase analysis using hardware non-linearity"><div><p class="publication-venue">HotNets · 2022</p><h3>Boosting the Sensing Granularity of Acoustic Signals by Exploiting Hardware Non-linearity</h3><p class="authors">Xiangru Chen, <strong>Dong Li</strong>, Yiran Chen, and Jie Xiong</p><p class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3563766.3564091">Paper</a></p></div></article>' +
    '<article class="publication-card" data-publication-period="earlier" data-selected="true"><img src="assets/images/publications/blink-listener.png" alt="BlinkListener acoustic sensing of eye blinks using a speaker and microphone"><div><p class="publication-venue">IMWUT / UbiComp · 2021</p><h3>BlinkListener: “Listen” to Your Eye Blink Using Your Smartphone</h3><p class="authors">Jialin Liu, <strong>Dong Li</strong>, Lei Wang, and Jie Xiong</p><p class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3463521">Paper</a><a href="https://www.youtube.com/watch?v=H-QOrw1m2Lw&amp;t=204s">Video</a></p></div></article>' +
    '<article class="publication-card" data-publication-period="earlier" data-selected="true"><img src="assets/images/publications/fm-track.png" alt="FM-Track coarse-to-fine hand and finger tracking across everyday devices"><div><p class="publication-venue">SenSys · 2020</p><h3>FM-Track: Pushing the Limits of Contactless Multi-target Tracking Using Acoustic Signals</h3><p class="authors"><strong>Dong Li</strong>, Jialin Liu, Sunghoon Ivan Lee, and Jie Xiong</p><p class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3384419.3430780">Paper</a><a href="https://www.youtube.com/watch?v=Gi2Hll8nBe8&amp;list=PL6jLuiS6wP5ZsP-7tf6f62Y6cAzaZiCcV&amp;index=6">Video</a></p></div></article>'
  );

  publicationCards?.querySelectorAll('.publication-card').forEach(card => {
    card.dataset.publicationPeriod ||= 'recent';
    card.dataset.selected ||= 'true';
  });

  publications.querySelector('h2').textContent = 'Publications';
  publications.querySelector('h2').insertAdjacentHTML('afterend',
    '<div class="publication-filters" aria-label="Filter publications"><button class="active" type="button" data-publication-filter="selected">Selected</button><button type="button" data-publication-filter="health">Mobile and Wearable Health</button><button type="button" data-publication-filter="ubiquitous">Ubiquitous Sensing</button><button type="button" data-publication-filter="trustworthy">Intelligent and Trustworthy Sensing</button></div>'
  );

  const publicationFilters = publications.querySelector('.publication-filters');
  const researchDirections = [
    {
      id: 'health',
      title: 'Mobile and Wearable Health',
      publications: [
        'Demo: Phonotonos:',
        'Smartphone-based Acoustic Tissue Characterization',
        'Personalized Oral Hygiene Framework',
        '[Emerging Ideas] Phonotonos:',
        'From Hearing to Feeling:',
        'Acoustoscillogram:',
        'BlinkListener:',
      ],
    },
    {
      id: 'ubiquitous',
      title: 'Ubiquitous Sensing',
      publications: [
        'WindDancer:',
        'SONDAR:',
        'PowerPhone:',
        'Room-scale Hand Gesture Recognition',
        'LASense:',
        'MOM:',
        'Enabling Contact-free Acoustic Sensing',
        'Experience: Practical Problems for Acoustic Sensing',
        'Boosting the Sensing Granularity',
        'FM-Track:',
      ],
    },
    {
      id: 'trustworthy',
      title: 'Intelligent and Trustworthy Sensing',
      publications: [
        'Demo: Horae:',
        'Ultrasound Watermark:',
        'EchoGuard:',
        'Demo: Disrupting In-Car mmWave Sensing',
      ],
    },
  ];
  const selectedPublicationTitles = [
    '[Emerging Ideas] Phonotonos',
    'Acoustoscillogram',
    'PowerPhone',
    'Experience: Practical Problems for Acoustic Sensing',
    'BlinkListener',
  ];
  const markSelectedPublications = () => {
    publicationCards?.querySelectorAll('.publication-card').forEach(card => {
      const title = card.querySelector('h3')?.textContent || '';
      const venue = card.querySelector('.publication-venue')?.textContent || '';
      card.dataset.selected = String(
        venue.includes('2026') || selectedPublicationTitles.some(item => title.includes(item))
      );
    });
  };
  markSelectedPublications();
  const filterPublications = filter => {
    const direction = researchDirections.find(item => item.id === filter);
    publicationCards?.querySelectorAll('.publication-card').forEach(card => {
      const title = card.querySelector('h3')?.textContent || '';
      const directionIndex = direction?.publications.findIndex(item => title.includes(item));
      const visible = filter === 'selected'
        ? card.dataset.selected === 'true'
        : directionIndex >= 0;
      card.style.order = directionIndex >= 0 ? String(directionIndex) : '';
      card.hidden = !visible;
    });
  };
  filterPublications('selected');
  publicationFilters?.addEventListener('click', event => {
    const button = event.target.closest('button[data-publication-filter]');
    if (!button) return;
    publicationFilters.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === button));
    filterPublications(button.dataset.publicationFilter);
  });
  publications.addEventListener('publicationsupdated', () => {
    markSelectedPublications();
    filterPublications(publicationFilters?.querySelector('.active')?.dataset.publicationFilter || 'selected');
  });
}

const publicationIcons = {
  paper: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2.75h8.2L19 7.55v13.7H6zM14 2.75v4.8h5M8.5 12h7M8.5 15.5h7"/></svg>',
  project: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5C9.8 18.2 8.7 15.4 8.7 12S9.8 5.8 12 3.5"/></svg>',
  demo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 5.5h15v13h-15zM10 9l5 3-5 3z"/></svg>',
  code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4 10.5 20"/></svg>',
};

window.normalizePublicationAuthors = (scope = document) => {
  scope.querySelectorAll('.authors strong').forEach(author => {
    if (author.textContent.trim() === 'Dong Li') author.replaceWith(document.createTextNode('Dong Li'));
  });
};

window.formatPublicationLinks = (scope = document) => {
  scope.querySelectorAll('.publication-links a:not(.publication-icon-link)').forEach(link => {
    const label = link.textContent.trim();
    const href = link.getAttribute('href') || '';
    const type = /paper|\.pdf/i.test(label + href) ? 'paper' : /video|demo|youtube|#highlights/i.test(label + href) ? 'demo' : /code|github\.com/i.test(label + href) ? 'code' : 'project';
    const accessibleLabel = {
      paper: 'Read paper',
      project: 'Visit project website',
      demo: 'Watch demo video',
      code: 'View code',
    }[type];
    link.classList.add('publication-icon-link');
    link.setAttribute('aria-label', accessibleLabel);
    link.setAttribute('title', accessibleLabel);
    link.innerHTML = publicationIcons[type] + '<span>' + accessibleLabel + '</span>';
  });
};

window.normalizePublicationAuthors();
window.formatPublicationLinks();

const highlightsHeading = document.querySelector('#highlights .highlights-heading');
const highlightsContent = document.querySelector('#highlights .highlights-carousel');
if (highlightsHeading && highlightsContent) {
  highlightsHeading.innerHTML = '<div><h2>Research Highlights</h2></div>';
  highlightsContent.innerHTML = '<article class="highlight-slide active single-highlight"><video id="phonotonos-video" autoplay muted loop playsinline controls preload="metadata"><source src="assets/videos/phonotonos-demo.mp4" type="video/mp4">Your browser does not support embedded video.</video><div class="highlight-copy"><p class="venue">MobiSys 2026 <span class="featured-badge">Featured Paper</span> · MobiCom 2026 Demo</p><h3>Phonotonos</h3><p>Through-skin ultrasonic blood-flow sensing using smartphones</p><p class="highlight-authors">Shirui Cao, Jie Xiong, Rishav Gupta, Sunghoon Ivan Lee, Jeremy Gummeson, and Dong Li</p></div></article>';
  const phonotonosVideo = document.querySelector('#phonotonos-video');
  const clipStart = 28;
  const clipEnd = 38;
  phonotonosVideo?.addEventListener('loadedmetadata', () => {
    phonotonosVideo.currentTime = clipStart;
    phonotonosVideo.play().catch(() => {});
  });
  phonotonosVideo?.addEventListener('timeupdate', () => {
    if (phonotonosVideo.currentTime >= clipEnd) phonotonosVideo.currentTime = clipStart;
  });
  phonotonosVideo?.addEventListener('seeking', () => {
    if (phonotonosVideo.currentTime < clipStart || phonotonosVideo.currentTime > clipEnd) phonotonosVideo.currentTime = clipStart;
  });
}

const carousel = document.querySelector('.highlights-carousel');
const slides = [...document.querySelectorAll('.highlight-slide')];
const dots = [...document.querySelectorAll('[data-carousel-slide]')];
const carouselCurrent = document.querySelector('#carousel-current');
const pauseButton = document.querySelector('.carousel-pause');
const translationalImpact = [...document.querySelectorAll('.research-note')].find(note => note.textContent.includes('Translational impact.'));
if (translationalImpact) {
  translationalImpact.innerHTML = translationalImpact.innerHTML.replace('I work to translate sensing research from laboratory prototypes to real-world healthcare solutions through', 'I work to translate sensing research and watermarking technology from laboratory prototypes to real-world healthcare and trustworthy computing solutions through');
}
const recognitionCopy = [...document.querySelectorAll('.research-note')].find(note => note.textContent.includes('Recognition.'));
if (recognitionCopy) {
  recognitionCopy.innerHTML = '<strong>Recognition.</strong> My work was selected as a MobiSys 2026 Featured Paper, received the IEEE S&amp;P SecureTrans 2025 Best Demo Award, and earned the MobiQuitous 2017 Best Paper Runner-Up Award. My students have received the <a href="https://umbc.edu/stories/rishav-gupta-coeit-computing-for-social-good/">Computing for Social Good Award</a>, <a href="https://www.linkedin.com/posts/jeanne-m-van-briesen-34838194_umbcproud-activity-7450289918477492224-JSqN/">Best of COEIT Graduate Award</a>, <a href="https://www.csee.umbc.edu/news-events/2026-csee-research-day/2026-csee-research-day-awardees/">CSEE Research Day Best Poster Award</a>, <a href="https://coeit.umbc.edu/2026-talks-poster-sessions/">Doctorate Student Award</a>, and multiple <a href="https://coeit.umbc.edu/2026-talks-poster-sessions/">Undergraduate Student Awards</a>.';
}
let currentSlide = 0;
let carouselPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let carouselTimer;

function showSlide(index) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === currentSlide));
  dots.forEach((dot, dotIndex) => {
    const selected = dotIndex === currentSlide;
    dot.classList.toggle('active', selected);
    dot.setAttribute('aria-selected', String(selected));
  });
  if (carouselCurrent) carouselCurrent.textContent = String(currentSlide + 1);
}

function startCarousel() {
  window.clearInterval(carouselTimer);
  if (!carouselPaused && slides.length > 1) carouselTimer = window.setInterval(() => showSlide(currentSlide + 1), 6500);
}

carousel?.addEventListener('click', event => {
  const target = event.target.closest('button');
  if (!target) return;
  if (target.dataset.carousel === 'previous') showSlide(currentSlide - 1);
  if (target.dataset.carousel === 'next') showSlide(currentSlide + 1);
  if (target.dataset.carouselSlide !== undefined) showSlide(Number(target.dataset.carouselSlide));
  if (target.classList.contains('carousel-pause')) {
    carouselPaused = !carouselPaused;
    target.textContent = carouselPaused ? 'Play' : 'Pause';
    target.setAttribute('aria-pressed', String(carouselPaused));
  }
  startCarousel();
});
carousel?.addEventListener('mouseenter', () => window.clearInterval(carouselTimer));
carousel?.addEventListener('mouseleave', startCarousel);
carousel?.addEventListener('focusin', () => window.clearInterval(carouselTimer));
carousel?.addEventListener('focusout', startCarousel);
if (carouselPaused && pauseButton) {
  pauseButton.textContent = 'Play';
  pauseButton.setAttribute('aria-pressed', 'true');
}
startCarousel();
