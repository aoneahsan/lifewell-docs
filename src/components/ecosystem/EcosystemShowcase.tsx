import {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import {Button} from 'react-aria-components';
import ProductCard from './ProductCard';
import {products} from './data';
import {ecosystemWords} from './words';

/** Carousel rendered once by the shared Docusaurus footer. */
export default function EcosystemShowcase() {
  const words = ecosystemWords();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [offscreen, setOffscreen] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      media.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !('IntersectionObserver' in window)) {
      setOffscreen(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setOffscreen(!entry.isIntersecting));
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stopped = paused || hovered || focused || hidden || offscreen || reducedMotion;
  useEffect(() => {
    if (stopped) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % products.length), 10_000);
    return () => window.clearInterval(timer);
  }, [stopped]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const item = trackRef.current?.children[index] as HTMLElement | undefined;
    if (item) item.scrollIntoView({inline: 'start', block: 'nearest', behavior: reducedMotion ? 'auto' : 'smooth'});
  }, [index, reducedMotion]);

  return (
    <section ref={sectionRef} className="ecosystem-showcase" aria-label={words.showcase} aria-roledescription={words.carousel}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setFocused(false);
      }}>
      <div className="container">
        <div className="eco-showcase-heading">
          <div><span className="eco-kicker">{words.kicker}</span><h2>{words.showcase}</h2></div>
          <Link to="/ecosystem" className="eco-action eco-action--quiet">{words.all}</Link>
        </div>
        <ul className="eco-track" ref={trackRef} aria-live={stopped ? 'polite' : 'off'}>
          {products.map((product) => (
            <li key={product.id} className="eco-slide">
              <ProductCard product={product} compact />
            </li>
          ))}
        </ul>
        <div className="eco-carousel-controls">
          <Button aria-label={words.previous} className="eco-control" data-eco-arrow onPress={() => setIndex((current) => (current - 1 + products.length) % products.length)}>←</Button>
          <span aria-live="off">{words.count(index + 1, products.length)}</span>
          <Button aria-label={words.next} className="eco-control" data-eco-arrow onPress={() => setIndex((current) => (current + 1) % products.length)}>→</Button>
          <Button className="eco-control eco-control--pause" onPress={() => setPaused((value) => !value)}
            aria-label={paused ? words.play : words.pause} aria-pressed={paused}>
            {paused ? words.playLabel : words.pauseLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
