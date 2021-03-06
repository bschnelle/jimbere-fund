export function smoothScrollTo(id, dur) {
  const duration = dur || 750;
  const el = document.getElementById(id).getBoundingClientRect();
  const navYOffset = document.getElementById('jf-nav').offsetHeight;
  const startingY = window.pageYOffset;
  const diff = el.top - navYOffset;
  let start;

  /* [0-1] */
  const easeInOutCubic = (t) => (
    t < 0.5
    ? 4 * t * t * t
    : ((t - 1) * ((2 * t) - 2) * ((2 * t) - 2)) + 1
  );

  if (dur === 0) {
    window.scrollTo(0, startingY + diff);
  } else {
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percent = Math.min(easeInOutCubic(elapsed / duration), 1);
      window.scrollTo(0, startingY + (diff * percent));

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }

  location.hash = id;
}

export default smoothScrollTo;
