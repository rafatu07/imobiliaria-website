"use client"

import { useState, useEffect, useRef } from 'react'
import SearchBar from './SearchBar'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const targetCounts = {
  properties: 10000,
  cities: 50,
  clients: 5000
}

export default function Hero() {
  const [counts, setCounts] = useState({ properties: 0, cities: 0, clients: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  // Inicializar scroll reveal
  useScrollReveal()

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000 // 2 segundos
      const steps = 60 // 60 frames para animação suave
      const stepDuration = duration / steps

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        // Função de easing para animação mais natural
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
        const easedProgress = easeOutCubic(progress)

        setCounts({
          properties: Math.floor(targetCounts.properties * easedProgress),
          cities: Math.floor(targetCounts.cities * easedProgress),
          clients: Math.floor(targetCounts.clients * easedProgress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounts(targetCounts) // Garantir valores finais exatos
        }
      }, stepDuration)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const formatNumber = (num: number, target: number) => {
    if (target >= 1000) {
      return (num / 1000).toFixed(num < 1000 ? 0 : 1) + 'k+'
    }
    return num + '+'
  }

  return (
    <>
      <section className="relative min-h-[60vh] sm:min-h-[70vh] overflow-hidden">
        {/* Background Image with zoom animation */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.55)), url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[60vh] sm:h-[70vh] flex flex-col justify-center">
          <div className="text-center mb-8 sm:mb-12 pt-4 sm:pt-0">
            <h1 className="scroll-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-shadow-strong leading-tight">
              <span>Encontre o</span>
              <span className="text-blue-200"> Imóvel dos Seus Sonhos</span>
            </h1>
            <p className="scroll-reveal text-base sm:text-lg md:text-xl lg:text-2xl text-gray-50 mb-6 sm:mb-8 max-w-3xl mx-auto text-shadow-medium font-semibold px-4 leading-relaxed">
              Descubra as melhores oportunidades do mercado imobiliário com a confiança de quem é especialista há mais de 20 anos
            </p>
            
            {/* Stats with animated counters */}
            <div ref={statsRef} className="scroll-reveal grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 mb-6 sm:mb-12 max-w-3xl mx-auto px-4">
              <div className="text-center backdrop-blur-md bg-white/25 rounded-xl py-4 sm:py-6 px-3 sm:px-4 border border-white/40 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 text-shadow-strong">
                  {isVisible ? formatNumber(counts.properties, targetCounts.properties) : '0+'}
                </div>
                <div className="text-gray-50 font-semibold text-shadow-medium text-xs sm:text-sm md:text-base">
                  Imóveis Disponíveis
                </div>
              </div>
              <div className="text-center backdrop-blur-md bg-white/25 rounded-xl py-4 sm:py-6 px-3 sm:px-4 border border-white/40 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 text-shadow-strong">
                  {isVisible ? formatNumber(counts.cities, targetCounts.cities) : '0+'}
                </div>
                <div className="text-gray-50 font-semibold text-shadow-medium text-xs sm:text-sm md:text-base">
                  Cidades Atendidas
                </div>
              </div>
              <div className="text-center backdrop-blur-md bg-white/25 rounded-xl py-4 sm:py-6 px-3 sm:px-4 border border-white/40 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 text-shadow-strong">
                  {isVisible ? formatNumber(counts.clients, targetCounts.clients) : '0+'}
                </div>
                <div className="text-gray-50 font-semibold text-shadow-medium text-xs sm:text-sm md:text-base">
                  Clientes Satisfeitos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth wave transition - only on larger screens */}
        <div className="hidden sm:block absolute bottom-0 left-0 right-0 z-20">
          <svg 
            className="w-full h-20 text-white" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Search Bar positioned between sections */}
      <div className="scroll-reveal relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:-mt-32">
        <SearchBar />
      </div>
    </>
  )
}