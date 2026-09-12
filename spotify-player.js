// spotify-player.js — collapse/expand the Spotify dock

(function () {
  const dock    = document.getElementById('spotifyDock');
  const toggle  = document.getElementById('spotifyToggle');
  const openBtn = document.getElementById('spotifyOpenBtn');
  if (!dock || !toggle) return;

  const STORAGE_KEY = 'spotifyDockCollapsed';

  // restore previous state (per session)
  if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
    dock.classList.add('collapsed');
  }

  function collapse() {
    dock.classList.add('collapsed');
    sessionStorage.setItem(STORAGE_KEY, 'true');
  }

  function expand() {
    dock.classList.remove('collapsed');
    sessionStorage.setItem(STORAGE_KEY, 'false');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dock.classList.contains('collapsed')) expand();
    else collapse();
  });

  // clicking the collapsed circle expands it
  dock.addEventListener('click', () => {
    if (dock.classList.contains('collapsed')) expand();
  });

  // optional: log when the playlist is opened (purely for your own console)
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      console.log('♫ opening playlist in Spotify');
    });
  }
})();