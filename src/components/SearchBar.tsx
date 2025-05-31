"use client"

import { useState, useRef } from 'react'
import { Search, MapPin, Filter, Bed, Bath, Car, DollarSign, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState('comprar')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    location: '',
    propertyType: 'todos',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    parkingSpaces: '',
    areaMin: '',
    areaMax: ''
  })

  const propertyTypes = [
    { value: 'todos', label: 'Todos os tipos' },
    { value: 'apartamento', label: 'Apartamento' },
    { value: 'casa', label: 'Casa' },
    { value: 'terreno', label: 'Terreno' },
    { value: 'comercial', label: 'Comercial' },
    { value: 'cobertura', label: 'Cobertura' }
  ]

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      ref={containerRef}
      className="backdrop-blur-md bg-white/90 rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/40"
    >
      {/* Tabs */}
      <div className="flex space-x-2 mb-6 sm:mb-8 bg-white/50 rounded-xl p-2 border border-white/30">
        <button
          onClick={() => setActiveTab('comprar')}
          className={cn(
            "flex-1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm font-semibold transition-all duration-300",
            activeTab === 'comprar' 
              ? "bg-blue-600 text-white shadow-lg" 
              : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
          )}
        >
          Comprar
        </button>
        <button
          onClick={() => setActiveTab('alugar')}
          className={cn(
            "flex-1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm font-semibold transition-all duration-300",
            activeTab === 'alugar' 
              ? "bg-blue-600 text-white shadow-lg" 
              : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
          )}
        >
          Alugar
        </button>
      </div>

      {/* Main Search */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Location */}
        <div className="sm:col-span-2">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="location"
              type="text"
              placeholder="Cidade, bairro, endereço..."
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm transition-all placeholder-gray-500 text-gray-700 font-medium shadow-lg text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Property Type */}
        <div className="relative">
          <select
            id="propertyType"
            value={filters.propertyType}
            onChange={(e) => handleFilterChange('propertyType', e.target.value)}
            className="w-full px-4 py-3 sm:py-4 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm transition-all text-gray-700 font-medium shadow-lg appearance-none cursor-pointer text-sm sm:text-base"
          >
            {propertyTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <Home className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Search Button */}
        <div className="sm:col-span-2 lg:col-span-1">
          <button 
            type="button"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2 sm:space-x-3 font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Buscar</span>
          </button>
        </div>
      </div>

      {/* Filters Toggle */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center space-x-3 px-6 py-3 rounded-xl transition-all font-medium",
            showFilters 
              ? "bg-blue-600 text-white shadow-lg" 
              : "text-blue-600 hover:bg-blue-50 bg-white/50 border border-blue-200"
          )}
        >
          <Filter className="h-4 w-4" />
          <span>{showFilters ? 'Ocultar filtros' : 'Filtros avançados'}</span>
        </button>

        <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white/50 px-4 py-2 rounded-lg border border-white/30">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-medium">Mais de 10.000 imóveis disponíveis</span>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="mt-8 pt-8 border-t border-white/30">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Price Range */}
            <div className="md:col-span-2">
              <div className="mb-3 flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Faixa de Preço</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  id="priceMin"
                  type="text"
                  placeholder="Mínimo"
                  value={filters.priceMin}
                  onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                  className="px-4 py-3 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm transition-all shadow-lg"
                />
                <input
                  id="priceMax"
                  type="text"
                  placeholder="Máximo"
                  value={filters.priceMax}
                  onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                  className="px-4 py-3 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm transition-all shadow-lg"
                />
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                <Bed className="h-4 w-4 text-gray-600" />
                <label htmlFor="bedrooms">Quartos</label>
              </div>
              <select
                id="bedrooms"
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                className="w-full px-4 py-3 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm transition-all shadow-lg appearance-none cursor-pointer"
              >
                <option value="">Qualquer</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                <Bath className="h-4 w-4 text-gray-600" />
                <label htmlFor="bathrooms">Banheiros</label>
              </div>
              <select
                id="bathrooms"
                value={filters.bathrooms}
                onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                className="w-full px-4 py-3 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm transition-all shadow-lg appearance-none cursor-pointer"
              >
                <option value="">Qualquer</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Parking */}
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                <Car className="h-4 w-4 text-gray-600" />
                <label htmlFor="parkingSpaces">Vagas</label>
              </div>
              <select
                id="parkingSpaces"
                value={filters.parkingSpaces}
                onChange={(e) => handleFilterChange('parkingSpaces', e.target.value)}
                className="w-full px-4 py-3 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm transition-all shadow-lg appearance-none cursor-pointer"
              >
                <option value="">Qualquer</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Area */}
            <div>
              <div className="mb-3 flex items-center space-x-2">
                <Home className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Área (m²)</span>
              </div>
              <div className="space-y-2">
                <input
                  id="areaMin"
                  type="text"
                  placeholder="Mín"
                  value={filters.areaMin}
                  onChange={(e) => handleFilterChange('areaMin', e.target.value)}
                  className="w-full px-3 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm transition-all text-sm shadow-lg"
                />
                <input
                  id="areaMax"
                  type="text"
                  placeholder="Máx"
                  value={filters.areaMax}
                  onChange={(e) => handleFilterChange('areaMax', e.target.value)}
                  className="w-full px-3 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm transition-all text-sm shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <button 
              onClick={() => setFilters({
                location: '',
                propertyType: 'todos',
                priceMin: '',
                priceMax: '',
                bedrooms: '',
                bathrooms: '',
                parkingSpaces: '',
                areaMin: '',
                areaMax: ''
              })}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors bg-white/50 rounded-xl border border-white/30 font-medium"
            >
              Limpar filtros
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg">
              Aplicar filtros
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 