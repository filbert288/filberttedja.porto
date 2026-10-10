// Portfolio script. Optional: the page works without it.
// Adds a gentle fade-in to cards as they scroll into view.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  // Which elements fade in: edit this selector to change it.
  document.querySelectorAll('.work, .certs li, .skills > div').forEach(function (el) {
    el.classList.add('reveal');
    io.observe(el);
  });
})();

// "Get in Touch": opens the mail app, and also copies the address and shows it,
// so it still works when the browser has no mail app (or blocks mailto links).
(function () {
  var link = document.querySelector('[data-copy-email]');
  if (!link) return;
  var addr = link.getAttribute('href').replace('mailto:', '');
  function toast(text) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.textContent = text;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 4000);
  }
  link.addEventListener('click', function () {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(addr).then(
        function () { toast('Email copied: ' + addr); },
        function () { toast(addr); }
      );
    } else {
      toast(addr);
    }
  });
})();
