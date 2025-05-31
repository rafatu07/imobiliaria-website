"use client"

import { useState } from 'react'
import { Home, Heart, User, Phone, Building, Key, Calculator, X, Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Home className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">ImóvelPrime</span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <Building className="h-4 w-4" />
                <span>Comprar</span>
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Apartamentos</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Casas</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Terrenos</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Comerciais</a>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <Key className="h-4 w-4" />
                <span>Alugar</span>
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Apartamentos</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Casas</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Terrenos</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Comerciais</a>
              </div>
            </div>

            <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Calculator className="h-4 w-4" />
              <span>Financiamento</span>
            </a>

            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Lançamentos
            </a>

            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Anunciar
            </a>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="h-4 w-4" />
              <span>Favoritos</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="h-4 w-4" />
              <span>Entrar</span>
            </button>

            <a 
              href="#" 
              className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div>
                <button className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                  <Building className="h-4 w-4" />
                  <span>Comprar</span>
                </button>
              </div>
              
              <div>
                <button className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                  <Key className="h-4 w-4" />
                  <span>Alugar</span>
                </button>
              </div>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Calculator className="h-4 w-4" />
                <span>Financiamento</span>
              </a>

              <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">
                Lançamentos
              </a>

              <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">
                Anunciar
              </a>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <button className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                  <Heart className="h-4 w-4" />
                  <span>Favoritos</span>
                </button>
                
                <button className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                  <User className="h-4 w-4" />
                  <span>Entrar</span>
                </button>

                <a 
                  href="#" 
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full justify-center"
                >
                  <Phone className="h-4 w-4" />
                  <span>Contato</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 