"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { AuroraText } from "./aurora-text"
import { LineShadowText } from "./line-shadow-text"

const morphTime = 1.5
const cooldownTime = 0.5

interface StyledMorphingTextProps {
  className?: string
}

export const StyledMorphingText: React.FC<StyledMorphingTextProps> = ({
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % 2)
        setIsTransitioning(false)
      }, morphTime * 500)
    }, (morphTime + cooldownTime) * 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        "relative mx-auto h-auto min-h-[4rem] w-full max-w-screen-md text-center font-sans text-5xl leading-tight font-bold sm:text-6xl md:text-7xl lg:text-8xl md:min-h-[6rem] lg:min-h-[8rem]",
        className
      )}
    >
      <div
        className={cn(
          "transition-opacity duration-700",
          isTransitioning ? "opacity-0" : "opacity-100"
        )}
      >
        {currentIndex === 0 ? (
          <AuroraText>LGTM Podcast</AuroraText>
        ) : (
          <LineShadowText 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
            shadowColor="#667eea"
          >
            Under Construction
          </LineShadowText>
        )}
      </div>
    </div>
  )
}
