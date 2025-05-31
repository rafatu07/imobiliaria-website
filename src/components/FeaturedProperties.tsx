"use client"

import { useState, useEffect, useRef } from 'react'
import PropertyCard from './PropertyCard'
import { ArrowRight, Star, TrendingUp, Award, Users, Target } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Mock data para demonstração
const featuredProperties = [
  {
    id: "1",
    title: "Apartamento Luxuoso em Pinheiros",
    price: 850000,
    address: "Rua Oscar Freire, 123 - Pinheiros, São Paulo",
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    area: 120,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    type: "apartamento",
    isForSale: true,
    isFeatured: true
  },
  {
    id: "2",
    title: "Casa Moderna em Condomínio Fechado",
    price: 1200000,
    address: "Rua das Flores, 456 - Vila Madalena, São Paulo",
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 3,
    area: 200,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    type: "casa",
    isForSale: true,
    isFeatured: true
  },
  {
    id: "3",
    title: "Apartamento Completo para Locação",
    price: 3500,
    address: "Av. Paulista, 789 - Bela Vista, São Paulo",
    bedrooms: 2,
    bathrooms: 1,
    parkingSpaces: 1,
    area: 80,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    type: "apartamento",
    isForSale: false,
    isFeatured: true
  },
  {
    id: "4",
    title: "Cobertura com Vista Panorâmica",
    price: 2500000,
    address: "Rua Augusta, 321 - Jardins, São Paulo",
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 3,
    area: 300,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    type: "cobertura",
    isForSale: true,
    isFeatured: true
  }
]

const targetStats = {
  sold: 2500,
  experience: 15,
  satisfaction: 98,
  specialists: 50
}

export default function FeaturedProperties() {
  const [statsCounts, setStatsCounts] = useState({ sold: 0, experience: 0, satisfaction: 0, specialists: 0 })
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  // Inicializar scroll reveal
  useScrollReveal()

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
        const easedProgress = easeOutCubic(progress)

        setStatsCounts({
          sold: Math.floor(targetStats.sold * easedProgress),
          experience: Math.floor(targetStats.experience * easedProgress),
          satisfaction: Math.floor(targetStats.satisfaction * easedProgress),
          specialists: Math.floor(targetStats.specialists * easedProgress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setStatsCounts(targetStats)
        }
      }, stepDuration)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true)
          animateStats()
        }
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [isStatsVisible])

  return (
    <section className="pt-20 pb-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="scroll-reveal text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6 backdrop-blur-sm bg-white/80 rounded-full px-6 py-3 border border-gray-200/50 shadow-sm">
            <Star className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Destaques
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Imóveis em <span className="text-blue-600">Destaque</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Selecionamos os melhores imóveis do nosso portfólio para você. 
            Oportunidades únicas com <span className="font-semibold text-gray-800">localização privilegiada</span> e excelente custo-benefício.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {featuredProperties.map((property, index) => (
            <div key={property.id} className="transform hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="scroll-reveal text-center mb-20">
          <button className="group relative inline-flex items-center px-12 py-4 bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            <TrendingUp className="mr-3 h-5 w-5" />
            <span>Ver Todos os Imóveis</span>
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Modern Stats Bar */}
        <div ref={statsRef} className="scroll-reveal backdrop-blur-md bg-white/90 rounded-xl p-8 shadow-xl border border-gray-200/50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {isStatsVisible ? `${(statsCounts.sold / 1000).toFixed(1)}k+` : '0+'}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Imóveis Vendidos
              </div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">
                {isStatsVisible ? `${statsCounts.experience}+` : '0+'}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Anos de Experiência
              </div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {isStatsVisible ? `${statsCounts.satisfaction}%` : '0%'}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Satisfação do Cliente
              </div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">
                {isStatsVisible ? `${statsCounts.specialists}+` : '0+'}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Corretores Especializados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 