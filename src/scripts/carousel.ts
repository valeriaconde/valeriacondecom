/**
 * Photo carousels: a horizontally scrolling strip (works with swipe and trackpads)
 * plus previous/next buttons and dots that follow along.
 */
export function initCarousels(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('[data-carousel]:not([data-ready])').forEach((carousel) => {
    carousel.dataset.ready = '';
    const track = carousel.querySelector<HTMLElement>('[data-track]')!;
    const prev = carousel.querySelector<HTMLButtonElement>('[data-prev]');
    const next = carousel.querySelector<HTMLButtonElement>('[data-next]');
    const dots = [...carousel.querySelectorAll<HTMLElement>('[data-dot]')];
    const count = track.children.length;

    // clientWidth is 0 while the lightbox is still closed
    const current = () => (track.clientWidth ? Math.round(track.scrollLeft / track.clientWidth) : 0);
    const go = (i: number) => {
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollTo({ left: i * track.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
    };
    const update = () => {
      const i = current();
      dots.forEach((d, j) => d.toggleAttribute('data-active', i === j));
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = i === count - 1;
    };

    prev?.addEventListener('click', () => go(current() - 1));
    next?.addEventListener('click', () => go(current() + 1));
    track.addEventListener('scroll', update, { passive: true });
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') go(current() + 1);
      if (e.key === 'ArrowLeft') go(current() - 1);
    });
    update();
  });
}
