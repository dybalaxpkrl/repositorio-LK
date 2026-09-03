"use client";

import { useEffect, useRef } from "react";

export default function MotionEffects() {
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = document.querySelector<HTMLDetailsElement>(".mobile-menu");
    const close = (event: Event) => {
      if (event.target instanceof Element && event.target.closest('a[href^="#"]') && menu) menu.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu?.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    };
    menu?.addEventListener("click", close);
    document.addEventListener("keydown", escape);
    return () => {
      menu?.removeEventListener("click", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 700px)");
    document.documentElement.classList.add("motion-ready");
    const revealTargets = document.querySelectorAll<HTMLElement>(
      ".personal > *, .results-head > *, .comparison, .natural-copy > *, .natural-photo, .process-title > *, .timeline article, .transition-bridge, .faq-intro > *, .accordion details, .barber-copy > *, .barber-grid > *, .location-info > *, .contact-footer > *"
    );
    revealTargets.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 34}ms`);
      element.style.setProperty("--reveal-x", `${index % 2 ? 18 : -18}px`);
    });

    const revealObserver = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (!mobile.matches) revealObserver.unobserve(entry.target);
        } else if (mobile.matches) {
          entry.target.classList.remove("is-visible");
        }
      }),
      { threshold: 0, rootMargin: "0px 0px -12%" }
    );
    if (!mobile.matches) revealTargets.forEach(element => revealObserver.observe(element));

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a[href^="#"]');
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: "-35% 0px -55%" });
    sections.forEach(section => sectionObserver.observe(section));

    let raf = 0;
    const updateScroll = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      const ratio = max > 0 ? scrollY / max : 0;
      progressRef.current?.style.setProperty("--scroll-progress", `${ratio}`);
      document.documentElement.style.setProperty("--page-scroll", `${scrollY}px`);
      document.documentElement.style.setProperty("--hero-drift", `${Math.min(scrollY * .16, 120)}px`);
      if (mobile.matches) {
        // Measure first, then update classes: effects begin only in the viewport.
        const visible = Array.from(revealTargets, element => {
          const rect = element.getBoundingClientRect();
          return rect.top < innerHeight * .88 && rect.bottom > 0;
        });
        revealTargets.forEach((element, index) => element.classList.toggle("is-visible", visible[index]));
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(updateScroll); };
    updateScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll, { passive: true });

    const onPointer = (event: PointerEvent) => {
      glowRef.current?.style.setProperty("--pointer-x", `${event.clientX}px`);
      glowRef.current?.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (hasMouse) addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      document.documentElement.classList.remove("motion-ready");
      revealObserver.disconnect();
      sectionObserver.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      removeEventListener("pointermove", onPointer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <><div ref={progressRef} className="scroll-progress" aria-hidden="true"/><div ref={glowRef} className="pointer-glow" aria-hidden="true"/></>;
}
