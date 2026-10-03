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
