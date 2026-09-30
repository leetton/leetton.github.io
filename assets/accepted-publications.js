const recentPublications = document.querySelector('#publications');

if (recentPublications) {
  const publicationCards = recentPublications.querySelector('.publication-cards');

  if (publicationCards) {
    const insertionTarget = publicationCards.querySelector('.featured-publication');
    (insertionTarget || publicationCards).insertAdjacentHTML(insertionTarget ? 'afterend' : 'afterbegin',
      '<article class="publication-card" data-publication-period="recent" data-selected="false">' +
        '<img src="assets/images/publications/phonotonos.png" alt="Phonotonos smartphone-based ultrasonic sensing of carotid-artery blood-flow velocity">' +
        '<div><p class="publication-venue">MobiCom · 2026 Demo</p><h3>Demo: Phonotonos: Through-Skin Ultrasonic Blood Flow Sensing Using Smartphones</h3><p class="authors">Rishav Gupta, Shirui Cao, Jie Xiong, Sunghoon Ivan Lee, Jeremy Gummeson, and Dong Li</p><p class="publication-links"><a href="assets/files/MobiCom26_Demo_Phonotonos.pdf">Paper</a><a href="https://phonotonos.github.io">Project</a><a href="#highlights">Demo video</a><a href="https://github.com/Phonotonos/Phonotonos">Code</a></p></div>' +
      '</article>' +
      '<article class="publication-card" data-publication-period="recent" data-selected="false">' +
        '<img src="assets/images/publications/acoustic-tissue-characterization.png" alt="Comparison of traditional ultrasound elastography and smartphone-based acoustic tissue characterization for tissue-aware device tuning">' +
        '<div><p class="publication-venue">MobiCom 2026 · WiP</p><h3>Smartphone-based Acoustic Tissue Characterization for Personalized Body-contact Systems</h3><p class="authors">Rishav Gupta, Alyssa N. Maguina, Sithumina Weeraratna, Janelle P. Clark, and Dong Li</p><p class="publication-links"><a href="assets/files/MobiCom26_WIP_AcousticTissueCharacterization.pdf">Paper</a></p></div>' +
      '</article>' +
      '<article class="publication-card" data-publication-period="recent" data-selected="false">' +
        '<img src="assets/images/publications/horae.png" alt="Horae behavior-aware agentic calendar scheduling interface on a smartphone and calendar">' +
        '<div><p class="publication-venue">MobiCom 2026 · Demo</p><h3>Demo: Horae: A Behavior-Aware Agentic Calendar Scheduling Framework Grounded in Mobile Sensing</h3><p class="authors">Sanskriti Aripineni, Rishi Simhadri, Khoa Tran, Lakshana Srinivasachari, Xiao Yan, Yili Ren, Dong Li, and Yi Ding</p><p class="publication-links"><a class="publication-icon-link" href="assets/files/MobiCom26_Demo_Horae.pdf" aria-label="Read Horae paper" title="Read paper"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2.75h8.2L19 7.55v13.7H6zM14 2.75v4.8h5M8.5 12h7M8.5 15.5h7"/></svg><span>Paper</span></a><a class="publication-icon-link" href="https://drive.google.com/file/d/1L-y0WEbKoZ4tpAJcaeH_yAxi_KyN39Zq/view" aria-label="Watch Horae demo" title="Watch demo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 5.5h15v13h-15zM10 9l5 3-5 3z"/></svg><span>Demo</span></a></p></div>' +
      '</article>' +
      '<article class="publication-card" data-publication-period="recent" data-selected="false">' +
        '<img src="assets/images/publications/personalized-oral-hygiene.png" alt="Personalized oral hygiene monitoring with a smartwatch and toothbrush-tracking dashboard">' +
        '<div><p class="publication-venue">MobiDx 2026 · Co-located with MobiCom</p><h3>Personalized Oral Hygiene Framework for Longitudinal Toothbrushing Monitoring In-the-Wild</h3><p class="authors">Kodilinye Mkpasi, Dong Li, Nirmalya Roy, Mary Elizabeth Aichelmann-Reidy, and Anuradha Ravi</p><p class="publication-links"><a href="assets/files/Mobicom26_Workshop_Toothbrushing.pdf">Paper</a></p></div>' +
      '</article>' +
      '<article class="publication-card" data-publication-period="recent" data-selected="false">' +
        '<img src="assets/images/publications/ultrasound-watermark.png" alt="Ultrasound Watermark system for protecting smartphone speech from voice scams">' +
        '<div><p class="publication-venue">EdgeSP 2026 Workshop · Co-located with SEC</p><h3>Ultrasound Watermark: Real-time Acoustic Watermarking against Voice Scams on Smartphones</h3><p class="authors">Renzhi Hao, Shirui Cao, Yizhu Wen, Rishav Gupta, Dharani Nadendla, Mehran Kafai, Hanqing Guo, and Dong Li</p><p class="publication-links"><a href="assets/files/EdgeSP2026_UltrasoundWatermark.pdf">Paper</a></p></div>' +
      '</article>' +
      '<article class="publication-card" data-publication-period="recent" data-selected="false">' +
        '<img src="assets/images/publications/echoguard.png" alt="EchoGuard diagram contrasting acoustic responses from human and automated AI-agent presence">' +
        '<div><p class="publication-venue">EdgeSP 2026 Workshop · Co-located with SEC</p><h3>EchoGuard: Continuous Ultrasound-Based Human Presence Verification for AI Agent Detections</h3><p class="authors">Yizhu Wen, Dharani Nadendla, Shirui Cao, Renzhi Hao, Dong Li, and Hanqing Guo</p><p class="publication-links"><a href="assets/files/EdgeSP2026_EchoGuard.pdf">Paper</a></p></div>' +
      '</article>'
    );
    const echoGuardCard = [...publicationCards.querySelectorAll('.publication-card')]
      .find(card => card.querySelector('h3')?.textContent.includes('EchoGuard'));
    if (insertionTarget && echoGuardCard) echoGuardCard.insertAdjacentElement('afterend', insertionTarget);
    window.normalizePublicationAuthors?.(recentPublications);
    window.formatPublicationLinks?.(recentPublications);
    recentPublications.dispatchEvent(new Event('publicationsupdated'));
  }
}
