"use client"

import { useEffect, useState } from "react"

export function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor="pointer"]')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-200 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isHovering ? 2 : 1})`,
        }}
      />

      {/* Trailing cursor */}
      <div
        className="fixed w-8 h-8 border-2 border-violet-400/50 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${isHovering ? 1.5 : 1})`,
        }}
      />
    </>
  )
}
