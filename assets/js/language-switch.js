/* Keep homepage sections when following the explicit language links. */
(function () {
  'use strict';

  var switcher = document.querySelector('.language-switch[data-homepage]');
  if (!switcher) return;

  function updateLinks() {
    var hash = window.location.hash;
    if (!/^#(about-me|news|publications|honors|education)$/.test(hash)) hash = '';
    switcher.querySelectorAll('a[data-home]').forEach(function (link) {
      link.setAttribute('href', link.getAttribute('data-home') + hash);
    });
  }

  updateLinks();
  window.addEventListener('hashchange', updateLinks);

  // The theme's smooth-scroll handler prevents native anchor navigation.
  // Record same-page navigation so switching still reaches the selected section.
  var navigation = document.getElementById('site-nav');
  if (!navigation) return;
  navigation.addEventListener('click', function (event) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    var link = event.target.closest('a');
    if (!link) return;
    var destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname) return;
    if (!/^#(about-me|news|publications|honors|education)$/.test(destination.hash)) return;
    window.history.replaceState(null, '', destination.hash);
    updateLinks();
  });
})();
