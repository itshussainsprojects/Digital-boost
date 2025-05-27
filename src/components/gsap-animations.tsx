"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAPAnimations() {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Hero animations
      const tl = gsap.timeline()

      tl.from(".hero-badge", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-title-1",
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-title-2",
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ".hero-title-3",
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ".hero-description",
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-buttons",
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-stats",
          {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3",
        )

      // Floating elements animation
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      })

      // Section animations with ScrollTrigger
      gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
        gsap.from(element, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Service cards animation
      gsap.utils.toArray(".service-card").forEach((card: any, index) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Portfolio items animation
      gsap.utils.toArray(".portfolio-item").forEach((item: any, index) => {
        gsap.from(item, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Parallax effect for background elements
      gsap.utils.toArray(".parallax-bg").forEach((bg: any) => {
        gsap.to(bg, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: bg,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return { heroRef, aboutRef, servicesRef }
}

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
