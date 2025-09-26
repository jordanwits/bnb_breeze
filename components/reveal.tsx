"use client"

import React, { useEffect, useRef } from "react"

type RevealProps = {
  children: React.ReactNode
  /**
   * Set to true to apply a staggered animation to direct children.
   * If false, the wrapper itself animates.
   */
  staggerChildren?: boolean
  /**
   * Optional root margin to trigger earlier/later.
   */
  rootMargin?: string
  /**
   * Optional className to pass to wrapper.
   */
  className?: string
}

export default function Reveal({ children, staggerChildren = false, rootMargin = "0px 0px -10% 0px", className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const elementsToAnimate: Element[] = []
    if (staggerChildren) {
      elementsToAnimate.push(...Array.from(element.children))
    } else {
      elementsToAnimate.push(element)
    }

    elementsToAnimate.forEach((el, index) => {
      ;(el as HTMLElement).style.setProperty("--reveal-index", String(index))
      el.classList.add("reveal-pre")
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (staggerChildren) {
              elementsToAnimate.forEach((el) => {
                el.classList.add("reveal-in")
                el.classList.remove("reveal-pre")
              })
            } else {
              entry.target.classList.add("reveal-in")
              entry.target.classList.remove("reveal-pre")
            }
            observer.disconnect()
          }
        })
      },
      { root: null, rootMargin, threshold: 0.12 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [staggerChildren, rootMargin])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}


