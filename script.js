// script.js – memory data & injection

(function() {
  // ----- memory data (8 items: images & videos) -----
  const memories = [
    {
      type: 'image',
      src: 'https://picsum.photos/id/1025/400/300',
      alt: 'sunny day together',
      text: '✨ first trip – everything felt like a dream.',
      date: 'taken 14 May 2025 · golden hour'
    },
    {
      type: 'video',
      poster: 'https://picsum.photos/id/1015/400/300',
      sources: [
        { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm', type: 'video/webm' },
        { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', type: 'video/mp4' }
      ],
      text: '🌸 blooming together – our first spring.',
      date: 'taken 2 April 2025 · botanical garden'
    },
    {
      type: 'image',
      src: 'https://picsum.photos/id/1039/400/300',
      alt: 'cozy evening',
      text: '☕️ lazy sunday, your hand in mine.',
      date: 'taken 19 July 2025 · our apartment'
    },
    {
      type: 'video',
      poster: 'https://picsum.photos/id/1043/400/300',
      sources: [
        { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm', type: 'video/webm' },
        { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', type: 'video/mp4' }
      ],
      text: '🌿 quiet moments, big love.',
      date: 'taken 11 August 2025 · park bench'
    },
    {
      type: 'image',
      src: 'https://picsum.photos/id/1018/400/300',
      alt: 'sunset silhouette',
      text: '🌅 watching the sun set on our first year.',
      date: 'taken 3 September 2025 · cliff view'
    },
    {
      type: 'video',
      poster: 'https://picsum.photos/id/1060/400/300',
      sources: [
        { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm', type: 'video/webm' },
        { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', type: 'video/mp4' }
      ],
      text: '🍂 autumn walk, leaves and laughter.',
      date: 'taken 22 October 2025 · forest trail'
    },
    {
      type: 'image',
      src: 'https://picsum.photos/id/1049/400/300',
      alt: 'city lights',
      text: '🌃 city lights, but you\'re the brightest.',
      date: 'taken 12 December 2025 · rooftop'
    },
    {
      type: 'video',
      poster: 'https://picsum.photos/id/1055/400/300',
      sources: [
        { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm', type: 'video/webm' },
        { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', type: 'video/mp4' }
      ],
      text: '❄️ winter kiss, warm heart.',
      date: 'taken 31 January 2026 · snow day'
    }
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
        <video muted loop playsinline preload="metadata" poster="${item.poster || ''}">
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
  console.log('❤️ happy anniversary — edit any text box to add your memories!');
})();