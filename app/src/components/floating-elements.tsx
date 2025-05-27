"use client"

import { useEffect, useState } from "react"
import { Code, Zap, Target, Rocket, Star, Heart } from "lucide-react"

const icons = [Code, Zap, Target, Rocket, Star, Heart]

export function FloatingElements() {
  const [elements, setElements] = useState<
    Array<{
      id: number
      x: number
      y: number
      icon: any
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    const newElements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => {
        const Icon = element.icon
        return (
          <div
            key={element.id}
            className="absolute animate-float opacity-20 hover:opacity-40 transition-opacity"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-violet-400" />
          </div>
        )
      })}
    </div>
  )
}
