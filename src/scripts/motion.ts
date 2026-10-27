/**
 * Site animations (GSAP + ScrollTrigger + SplitText) and smooth scrolling (Lenis).
 *
 * Add these attributes to any element in the HTML:
 *   data-reveal              → rises and fades in when it scrolls into view
 *   data-reveal="fade"       → only fades in
 *   data-reveal="pop"        → scales up with a little bounce
 *   data-delay="0.2"         → wait before revealing (seconds)
 *   data-load                → reveal as soon as the page loads instead of on scroll
 *   data-reveal-stagger      → its children come in one after another (value = seconds between each)
 *   data-split               → headline comes in line by line; data-split="load" plays right away
 *   data-split="chars"       → headline comes in letter by letter, right away (hero only)
 *   data-words               → words light up as you scroll past (quotes)
 *   data-draw                → wipes in left to right (hand-drawn arrows); data-draw="rtl" for the other way
 *   data-parallax="0.2"      → drifts at a different speed while scrolling (negative = opposite way)
 *   data-float               → bobs gently forever (stickers, cards)
 *   data-magnetic            → leans toward the cursor on hover
 *   data-grow-line           → a vertical line that fills as you scroll through its parent
 *   data-rotator             → cycles through its [data-rotator-item] children
 *   data-hero-zoom           → image settles in with a slow zoom when the page loads
 *   data-stair               → its cards start as a staircase and rise into one row as you scroll
 *                              (wide screens hold the section still meanwhile); [data-stair-text]
 *                              inside a card fades from faint to full as the card arrives
 *   data-pop-group           → its [data-pop] cards start as one small stack, pop up and fan out
 *                              into their spots (plays once; see pops() for the data-fan-* values)
 *
 * When the visitor prefers reduced motion, nothing animates and everything is shown as is.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const EASE = 'expo.out';

function smoothScroll() {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  // The post lightbox pauses smooth scrolling while it's open
  (window as unknown as { __lenis: Lenis }).__lenis = lenis;
}

function reveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    const pop = el.dataset.reveal === 'pop';
    gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: pop ? 1 : 1.2,
      ease: pop ? 'back.out(1.8)' : EASE,
      delay: Number(el.dataset.delay ?? 0),
      scrollTrigger: el.hasAttribute('data-load') ? undefined : { trigger: el, start: 'top 90%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    gsap.to(group.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: EASE,
      stagger: Number(group.dataset.revealStagger || 0.08),
      scrollTrigger: { trigger: group, start: 'top 88%', once: true },
    });
  });
}

function splitHeadlines() {
  gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
    const mode = el.dataset.split;
    if (mode === 'chars') {
      const split = SplitText.create(el, { type: 'chars,words', mask: 'words' });
      gsap.set(el, { visibility: 'visible' });
      gsap.from(split.chars, {
        yPercent: 115,
        rotate: 6,
        duration: 1.4,
        ease: EASE,
        stagger: 0.035,
        delay: 0.15,
      });
      return;
    }
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { visibility: 'visible' });
        const immediate = mode === 'load';
        return gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.3,
          ease: EASE,
          stagger: 0.09,
          delay: immediate ? 0.1 : 0,
          scrollTrigger: immediate ? undefined : { trigger: el, start: 'top 90%', once: true },
        });
      },
    });
  });
}

function scrubWords() {
  gsap.utils.toArray<HTMLElement>('[data-words]').forEach((el) => {
    const split = SplitText.create(el, { type: 'words' });
    gsap.fromTo(
      split.words,
      { opacity: 0.15 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 50%', scrub: true },
      },
    );
  });
}

function draws() {
  gsap.utils.toArray<HTMLElement>('[data-draw]').forEach((el) => {
    gsap.to(el, {
      clipPath: 'inset(0 0% 0 0%)',
      duration: 1.4,
      ease: 'power3.inOut',
      delay: Number(el.dataset.delay ?? 0),
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
    });
  });
}

function parallax() {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax || 0.15);
    gsap.fromTo(
      el,
      { y: () => -amount * 300 },
      {
        y: () => amount * 300,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
  });
}

function floats() {
  gsap.utils.toArray<HTMLElement>('[data-float]').forEach((el, i) => {
    // Animate a child wrapper if present so this doesn't fight reveal/parallax transforms
    const target = el.querySelector<HTMLElement>('[data-float-inner]') ?? el;
    gsap.to(target, {
      y: gsap.utils.random(-10, -4),
      rotate: gsap.utils.random(-2.5, 2.5),
      duration: gsap.utils.random(2.6, 3.8),
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: i * 0.3,
    });
  });
}

function magnetic() {
  if (!finePointer) return;
  gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
    });
    el.addEventListener('pointerleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

/** Hero cards drift slightly away from the cursor, each at its own depth. */
function pointerDrift() {
  if (!finePointer) return;
  const items = gsap.utils.toArray<HTMLElement>('[data-drift]');
  if (!items.length) return;
  const movers = items.map((el) => {
    const depth = Number(el.dataset.drift || 1);
    return {
      depth,
      x: gsap.quickTo(el, 'x', { duration: 1.2, ease: 'power3.out' }),
      y: gsap.quickTo(el, 'y', { duration: 1.2, ease: 'power3.out' }),
    };
  });
  window.addEventListener('pointermove', (e) => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    movers.forEach((m) => {
      m.x(nx * -24 * m.depth);
      m.y(ny * -18 * m.depth);
    });
  });
}

function growLines() {
  gsap.utils.toArray<HTMLElement>('[data-grow-line]').forEach((el) => {
    gsap.fromTo(
      el,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        transformOrigin: 'top',
        scrollTrigger: { trigger: el.parentElement ?? el, start: 'top 70%', end: 'bottom 60%', scrub: true },
      },
    );
  });
}

function rotators() {
  gsap.utils.toArray<HTMLElement>('[data-rotator]').forEach((el) => {
    const items = gsap.utils.toArray<HTMLElement>(el.querySelectorAll('[data-rotator-item]'));
    if (items.length < 2) return;
    gsap.set(items, { yPercent: 110, opacity: 0 });
    gsap.set(items[0], { yPercent: 0, opacity: 1 });
    // The box hugs the current word instead of the longest one
    gsap.set(el, { width: items[0].offsetWidth });
    let i = 0;
    const next = () => {
      const current = items[i];
      i = (i + 1) % items.length;
      gsap.to(current, { yPercent: -110, opacity: 0, duration: 0.8, ease: 'power3.inOut' });
      gsap.fromTo(items[i], { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, ease: 'power3.inOut' });
      gsap.to(el, { width: items[i].offsetWidth, duration: 0.8, ease: 'power3.inOut' });
    };
    gsap.delayedCall(2.2, function loop() {
      next();
      gsap.delayedCall(2.2, loop);
    });
  });
}

/**
 * Cards start tucked into one small stack, pop up with a spring, then fan out into
 * their own spots. data-fan-x (percent of the card's width) and data-fan-rotate
 * (degrees) say how far each card's resting spot is from the middle. Plays once.
 */
function pops() {
  gsap.utils.toArray<HTMLElement>('[data-pop-group]').forEach((group) => {
    const cards = gsap.utils.toArray<HTMLElement>(group.querySelectorAll('[data-pop]'));
    ScrollTrigger.create({
      trigger: group,
      start: 'top 70%',
      once: true,
      onEnter() {
        // Undo each card's resting offset and tilt so they all start in one neat stack
        cards.forEach((card) => {
          gsap.set(card, {
            xPercent: -Number(card.dataset.fanX || 0),
            rotate: -Number(card.dataset.fanRotate || 0),
            scale: 0.35,
            y: 40,
          });
        });
        group.setAttribute('data-popped', '');
        gsap
          .timeline()
          .fromTo(cards, { opacity: 0 }, { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(2.6)', stagger: 0.07 })
          .to(cards, { xPercent: 0, rotate: 0, duration: 1.3, ease: 'elastic.out(1, 0.55)', stagger: 0.09 }, '-=0.1');
      },
    });
  });
}

/**
 * Cards in columns start as a staircase (each column lower than the last) and rise
 * one after another until they line up, following the scroll. On wide screens the
 * section holds still while it happens.
 */
function stairs() {
  const mm = gsap.matchMedia();
  gsap.utils.toArray<HTMLElement>('[data-stair]').forEach((grid) => {
    const cards = gsap.utils.toArray<HTMLElement>(grid.children);
    const texts = cards.map((c) => c.querySelector<HTMLElement>('[data-stair-text]') ?? c);
    const section = grid.closest('section') ?? grid;

    const build = (columns: number, scrollTrigger: ScrollTrigger.Vars) => {
      const tl = gsap.timeline({ scrollTrigger: { ...scrollTrigger, scrub: 1, invalidateOnRefresh: true } });
      cards.forEach((card, i) => {
        const col = i % columns;
        // later columns start lower and arrive later
        const arrive = 0.45 + 0.55 * (columns > 1 ? col / (columns - 1) : 1);
        tl.fromTo(card, { y: () => (col + 1) * card.offsetHeight * 0.6 }, { y: 0, ease: 'power1.out', duration: arrive }, 0);
        tl.fromTo(texts[i], { opacity: 0.2 }, { opacity: 1, ease: 'none', duration: 0.3 }, arrive - 0.3);
      });
      return tl;
    };

    mm.add('(min-width: 1024px)', () => {
      const pin = ScrollTrigger.create({ trigger: section, start: 'top 12%', end: '+=70%', pin: true });
      build(4, { trigger: section, start: 'top 80%', end: () => pin.end });
    });
    mm.add('(max-width: 1023px)', () => {
      build(2, { trigger: grid, start: 'top 95%', end: 'top 25%' });
    });
  });
}

function heroZoom() {
  gsap.utils.toArray<HTMLElement>('[data-hero-zoom]').forEach((el) => {
    gsap.fromTo(el, { scale: 1.18, filter: 'saturate(0.6) brightness(1.1)' }, { scale: 1, filter: 'saturate(1) brightness(1)', duration: 2.4, ease: 'expo.out' });
  });
}

/** The header slides away when scrolling down and comes back when scrolling up. */
function headerOnScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  ScrollTrigger.create({
    start: 'top -120',
    end: 'max',
    onUpdate(self) {
      if (header.dataset.open === 'true') return;
      gsap.to(header, { yPercent: self.direction === 1 ? -100 : 0, duration: 0.5, ease: 'power3.out', overwrite: true });
    },
    onLeaveBack: () => gsap.to(header, { yPercent: 0, duration: 0.5, ease: 'power3.out', overwrite: true }),
  });
}

function init() {
  if (reduceMotion) return;
  smoothScroll();
  // Pinned sections first, so everything below them measures positions with the pin in place
  stairs();
  splitHeadlines();
  reveals();
  scrubWords();
  draws();
  parallax();
  floats();
  magnetic();
  pointerDrift();
  growLines();
  heroZoom();
  pops();
  document.fonts?.ready.then(rotators);
  headerOnScroll();
  // Recalculate positions once fonts have loaded (they change text size)
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

init();
