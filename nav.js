(function () {
  var btn = document.querySelector('.nav-toggle');
  if (!btn) return;
  var nav = btn.closest('nav');
  var list = document.getElementById(btn.getAttribute('aria-controls'));
  function set(open) { nav.classList.toggle('nav-open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) { set(false); btn.focus(); }
  });
  if (list) list.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', function (e) { if (e.matches) set(false); });
})();
