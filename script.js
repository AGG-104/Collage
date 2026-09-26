// script.js – memory data & injection

(function() {
  // ----- memory data -----
  const memories = [
    {
      type: 'image',
      src: 'us/12-01-25.jpg',
      alt: 'sunny day together',
      text: 'Coming to classes just to sit with me',
      date: 'Taken 1 December 2025 · AI class'
    },
    {
      type: 'image',
      src: 'us/12-06-25.jpg',
      alt:  'nerd',
      text: 'Nerd',
      date: 'Taken 6 December 2025 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/12-18-25_1.jpg',
      alt: 'hot chocolate',
      text: 'First date in my city',
      date: 'Taken 18 December 2025 · Ghirardelli'
    },
    {
      type: 'image',
      src: 'us/12-18-25_2.jpg',
      alt: 'hot chocolate',
      text: 'Felt warm with you and this hot chocolate',
      date: 'Taken 18 December 2025 · Ghirardelli'
    },
    {
      type: 'image',
      src: 'us/01-15-26.jpg',
      alt: 'sleepy',
      text: 'The happiest with you',
      date: 'Taken 15 January 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/01-22-26.jpg',
      alt: 'cuddling',
      text: 'Bright smile with your kiss',
      date: 'Taken 22 January 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/02-05-26.jpg',
      alt: 'cuddling',
      text: 'I love laying on you',
      date: 'Taken 5 February 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/02-14-26_1.jpg',
      alt: 'ice cream',
      text: 'Demolished that ice cream and then each other later',
      date: 'Taken 14 February 2026 · Gunthers Ice Cream'
    },
    {
      type: 'image',
      src: 'us/02-14-26_2.jpg',
      alt: 'ice cream',
      text: 'I melt with you... get it cause its ice cream',
      date: 'Taken 14 February 2026 · Gunthers Ice Cream'
    },
    {
    type: 'image',
      src: 'us/02-14-26_3.jpg',
      alt: 'hammock',
      text: 'Looking at the constellation with you',
      date: 'Taken 14 February 2026 · The Green'
    },
    {
      type: 'image',
      src: 'us/02-16-26_1.jpg',
      alt: 'cookies',
      text: 'Cutie with his cookies',
      date: 'Taken 16 February 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/02-16-26_2.jpg',
      alt: 'cookies',
      text: 'Salty ass cookies tho',
      date: 'Taken 16 February 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/03-09-26.jpg',
      alt: 'carrot',
      text: 'I love you for taking me with Mr. Carrot',
      date: 'Taken 9 March 2026 · Near Silo Bus Stop'
    },
    {
      type: 'image',
      src: 'us/03-20-26_1.jpg',
      alt: 'party',
      text: 'Party life felt better with you',
      date: 'Taken 20 March 2026 · Ricardos Apartment'
    },
    {
      type: 'video',
      sources: [
      { src: 'us/03-20-26_2.mp4', type: 'video/mp4' }
      ],
      text: 'Hit the scuba with me?',
      date: 'Taken 20 March 2026 · Ricardos Apartment'
    }, 
    {
      type: 'image',
      src: 'us/03-29-26.jpg',
      alt: 'apt',
      text: 'You always looked soft here',
      date: 'Taken 29 March 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/04-04-26_1.jpg',
      alt: 'bowl',
      text: 'They say you are either good at bowling or..., good thing you are bad at bowling',
      date: 'Taken 4 April 2026 · MU Game Area'
    },
    {
      type: 'image',
      src: 'us/04-04-26_2.jpg',
      alt: 'bbq',
      text: 'Tim when he wasnt giving that bbq',
      date: 'Taken 4 April 2026 · Tims Hawaiian BBQ'
    },
    {
      type: 'image',
      src: 'us/04-04-26_3.jpg',
      alt: 'bbq',
      text: 'Love looking at you',
      date: 'Taken 4 April 2026 · Tims Hawaiian BBQ'
    },
    {
      type: 'image',
      src: 'us/04-08-26.jpg',
      alt: 'cutie',
      text: 'You',
      date: 'Taken 8 April 2026 · Leadr Center'
    },
    {
      type: 'image',
      src: 'us/04-19-26_1.jpg',
      alt: 'pajamas',
      text: 'Twins',
      date: 'Taken 19 April 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/04-19-26_2.jpg',
      alt: 'mask',
      text: 'One of my favorite days with you',
      date: 'Taken 19 April 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/05-02-26_1.jpg',
      alt: 'cutie',
      text: 'Handsome',
      date: 'Taken 2 May 2026 · Ghirardelli'
    },
    {
      type: 'image',
      src: 'us/05-02-26_2.jpg',
      alt: 'cutie',
      text: 'Hot chocolate almost burned my tongue',
      date: 'Taken 2 May 2026 · Ghirardelli'
    },
    {
      type: 'video',
      sources: [
      { src: 'us/05-02-26_3.mp4', type: 'video/mp4' }
      ],
      text: 'Lowkey cooking at the end',
      date: 'Taken 2 May 2026 · Musée Mécanique'
    }, 
    {
      type: 'image',
      src: 'us/05-02-26_4.jpg',
      alt: 'cutie',
      text: 'Happy with you',
      date: 'Taken 2 May 2026 · Pier 39'
    },
    {
      type: 'image',
      src: 'us/05-02-26_5.jpg',
      alt: 'cutie',
      text: 'Always love your kisses',
      date: 'Taken 2 May 2026 · Pier 39'
    },
    {
      type: 'image',
      src: 'us/05-02-26_6.jpg',
      alt: 'cutie',
      text: 'Always feel at the top of the world with you',
      date: 'Taken 2 May 2026 · Twin Peaks'
    },
    {
      type: 'image',
      src: 'us/05-02-26_7.jpg',
      alt: 'cutie',
      text: 'My other lowkey spot',
      date: 'Taken 2 May 2026 · Twin Peaks'
    },
    {
      type: 'image',
      src: 'us/05-17-26.jpg',
      alt: 'passed out',
      text: 'Always rolling over to my side',
      date: 'Taken 17 May 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/05-21-26.jpg',
      alt: 'smores',
      text: 'Smores twins on their dad',
      date: 'Taken 21 May 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/05-28-26.jpg',
      alt: 'cuddle bug',
      text: 'Brainrot time',
      date: 'Taken 28 May 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/05-30-26_1.jpg',
      alt: 'us',
      text: 'Couple pic time!',
      date: 'Taken 30 May 2026 · Bridge Near Olson'
    },
    {
      type: 'image',
      src: 'us/05-30-26_2.jpg',
      alt: 'us',
      text: 'The look of love',
      date: 'Taken 30 May 2026 · Bridge Near Olson'
    },
    {
      type: 'image',
      src: 'us/05-30-26_3.jpg',
      alt: 'us',
      text: 'You are too silly :)',
      date: 'Taken 30 May 2026 · Arboretum'
    },
    {
      type: 'image',
      src: 'us/05-30-26_4.jpg',
      alt: 'us',
      text: 'Having fun with you',
      date: 'Taken 30 May 2026 · Arboretum'
    },
    {
      type: 'image',
      src: 'us/06-09-26_1.jpg',
      alt: 'us',
      text: 'First thing I see out of my last final ever is you',
      date: 'Taken 9 June 2026 · VX Bus'
    },
    {
      type: 'image',
      src: 'us/06-09-26_2.jpg',
      alt: 'us',
      text: 'You and your popcorn',
      date: 'Taken 9 June 2026 · Back from watching Obsession and BJs'
    },
    {
      type: 'image',
      src: 'us/06-12-26.jpg',
      alt: 'us',
      text: 'Coming in single to UC Davis, came out with the love of my life',
      date: 'Taken 12 June 2026 · Kittus Apartment'
    },
    {
      type: 'image',
      src: 'us/06-14-26.jpg',
      alt: 'EG',
      text: 'A day I had to memorize so many names, all worth it for you',
      date: 'Taken 14 June 2026 · EG tourist spot'
    },
    {
      type: 'image',
      src: 'us/06-20-26_1.jpg',
      alt: 'driving',
      text: 'I can never not stare at your face',
      date: 'Taken 20 June 2026 · On our way to Vacaville'
    },
    {
      type: 'image',
      src: 'us/06-20-26_2.jpg',
      alt: 'beautiful',
      text: 'Your beautiful face before a face mask',
      date: 'Taken 20 June 2026 · Mint 405'
    },
    {
      type: 'image',
      src: 'us/06-20-26_3.jpg',
      alt: 'face mask',
      text: 'Last night I felt your body next to mine at our place',
      date: 'Taken 20 June 2026 · Mint 405 '
    },
    {
      type: 'video',
      sources: [
      { src: 'us/07-02-26.mp4', type: 'video/mp4' }
      ],
      text: 'My face shinning bright with my sunshine',
      date: 'Taken 2 July 2026 · Potobox Stonestown'
    },
    {
      type: 'image',
      src: 'us/07-03-26.jpg',
      alt: 'face mask',
      text: 'I love spooning you :)',
      date: 'Taken 3 July 2026 · PB '
    },
    {
      type: 'image',
      src: 'us/07-05-26.jpg',
      alt: 'You and car',
      text: 'You wanted me to take pictures of the car, but I had a better view in front of me',
      date: 'Taken 20 June 2026 · On our way to Roseville Mall '
    },
    {
      type: 'image',
      src: 'us/07-06-26.jpg',
      alt: 'sleepy boyfriend',
      text: 'My favorite sight in the morning',
      date: 'Taken 6 July 2026 · PB '
    },
    {
      type: 'image',
      src: 'us/07-29-26.jpg',
      alt: 'fish',
      text: 'I loved seeing you look amazed at the animals, my favorite part',
      date: 'Taken 29 July 2026 · California Academy of Sciences '
    },
    {
      type: 'image',
      src: 'us/07-30-26.jpg',
      alt: 'face mask',
      text: 'This is how I imagine you every single morning when I text you good morning',
      date: 'Taken 30 July 2026 · PB'
    },
    {
      type: 'video',
      sources: [
      { src: 'us/08-02-26_1.mp4', type: 'video/mp4' }
      ],
      text: 'You beat me here but it didnt feel like losing when I have you',
      date: 'Taken 2 August 2026 · Underground Mini Golf'
    },
    {
      type: 'image',
      src: 'us/08-02-26_2.jpg',
      alt: 'face mask',
      text: 'I almost fell asleep like this',
      date: 'Taken 2 August 2026 · PB '
    },
    {
      type: 'image',
      src: 'us/08-03-26.jpg',
      alt: 'morning',
      text: 'You look so comfy and safe',
      date: 'Taken 3 August 2026 · PB'
    },
    {
      type: 'image',
      src: 'us/08-22-26_1.jpg',
      alt: 'matching',
      text: 'My handsome boyfriend decided to match with me that day',
      date: 'Taken 22 August 2026 · Ocean Beach'
    },
    {
      type: 'image',
      src: 'us/08-22-26_2.jpg',
      alt: 'camera',
      text: 'My boyfriend decided to take over my camera roll',
      date: 'Taken 22 August 2026 · Ocean Beach'
    },
    {
      type: 'image',
      src: 'us/08-22-26_3.jpg',
      alt: 'dp trip',
      text: 'Some of my favorite people together',
      date: 'Taken 22 August 2026 · Ocean Beach'
    },
    {
      type: 'image',
      src: 'us/09-02-26_1.jpg',
      alt: 'ramen',
      text: 'My boyfriend satisfying my cravings in many ways',
      date: 'Taken 2 September 2026 · HiroNori Craft Ramen'
    },
    {
      type: 'image',
      src: 'us/09-02-26_2.jpg',
      alt: 'ramen',
      text: 'I might just eat you (Oh I definitely will)',
      date: 'Taken 2 September 2026 · HiroNori Craft Ramen'
    },
    {
      type: 'image',
      src: 'us/09-07-26.jpeg',
      alt: 'facetime',
      text: 'Seeing you and your smile will always brighten my day',
      date: 'Taken 7 September 2026 · Facetime'
    },
    {
      type: 'image',
      src: 'us/09-14-26_1.jpg',
      alt: 'facetime',
      text: 'Cutie',
      date: 'Taken 14 September 2026 · Facetime'
    },
    {
      type: 'image',
      src: 'us/09-14-26_2.jpg',
      alt: 'soft',
      text: 'all soft in your blanket',
      date: 'Taken 14 September 2026 · Facetime'
    },
    {
      type: 'image',
      src: 'us/09-21-26.jpg',
      alt: 'ring pop',
      text: 'Sucking on that ring pop',
      date: 'Taken 21 September 2026 · Camera'
    },
    {
      type: 'image',
      src: 'us/09-22-26.jpg',
      alt: 'apple',
      text: 'show me your apples ;)',
      date: 'Taken 22 September 2026 · Camera'
    },
    // More memories to come for october :)

  ];

  // ----- helper: build media HTML -----
  function buildMedia(item) {
  if (item.type === 'image') {
    return `<img src="${item.src}" alt="${item.alt || 'memory'}" loading="lazy">`;
  } else if (item.type === 'video') {
    const sources = item.sources.map(s =>
      `<source src="${s.src}" type="${s.type}">`
    ).join('');
    return `
      <video muted loop autoplay playsinline controls preload="auto" poster="${item.poster || ''}">
        ${sources}
        your browser doesn't support video.
      </video>
    `;
  }
  return '';
}

  // ----- build card -----
  function createCard(item) {
    const mediaHtml = buildMedia(item);

    const card = document.createElement('div');
    card.className = 'memory-card';

    card.innerHTML = `
      <div class="media-wrapper">${mediaHtml}</div>
      <div class="memory-textbox" contenteditable="true">${item.text}</div>
      <div class="memory-description">${item.date}</div>
      <div class="love-icon">♡</div>
    `;

    return card;
  }

  // ----- render all cards into grid -----
  const grid = document.getElementById('collageGrid');
  if (grid) {
    memories.forEach(item => {
      const card = createCard(item);
      grid.appendChild(card);
    });
  }

  // optional: log (no-op)
  console.log('happy anniversary — edit any text box to add your memories!');
})();

/* ---------- love counter ---------- */

(function () {
  const counter = document.getElementById('loveCounter');
  if(!counter) return;

  const START_DATE = new Date('2025-11-02T00:00:00');

  const el = {
    years:    document.getElementById('counterYears'),
    months:   document.getElementById('counterMonths'),
    days:     document.getElementById('counterDays'),
    hours:    document.getElementById('counterHours'),
    minutes:  document.getElementById('counterMinutes'),
    seconds:  document.getElementById('counterSeconds')
  };

  function getElapsed(start, now) {
    let years     = now.getFullYear() - start.getFullYear();
    let months    = now.getMonth() - start.getMonth();
    let days      = now.getDate() - start.getDate();
    let hours     = now.getHours() - start.getHours();
    let minutes   = now.getMinutes() - start.getMinutes();
    let seconds   = now.getSeconds() - start.getSeconds();

    if(seconds < 0) { seconds += 60; minutes--; }
    if(minutes < 0) { minutes += 60; hours--; }
    if(hours < 0) { hours += 24; days--; }
    if(days < 0) {
      const daysInPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += daysInPrevMonth;
      months--;
    }

    if(months < 0) { months += 12; years--; }

    return {years, months, days, hours, minutes, seconds};
  }

  function tick() {
    const now = new Date();
    const t = getElapsed(START_DATE, now);

    el.years.textContent   = t.years;
    el.months.textContent  = t.months;
    el.days.textContent    = t.days;
    el.hours.textContent   = t.hours;
    el.minutes.textContent = String(t.minutes).padStart(2, '0');
    el.seconds.textContent = String(t.seconds).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
})();