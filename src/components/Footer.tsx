"use client"

import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Clock,
  CreditCard,
  Shield,
  Award
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Footer() {
  const [connector, setConnector] = useState('&')

  // Inicializar scroll reveal
  useScrollReveal()

  useEffect(() => {
    const interval = setInterval(() => {
      setConnector(prev => prev === '&' ? 'E' : '&')
    }, 2000) // Alterna a cada 2 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="scroll-reveal bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">ImóvelPrime</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Há mais de 15 anos conectando pessoas aos imóveis dos seus sonhos. 
              Somos especialistas em transformar oportunidades em realizações.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Comprar Imóveis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Alugar Imóveis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Lançamentos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Financiamento
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Anunciar Imóvel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Avaliação de Imóveis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Consultoria Imobiliária
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Gestão de Aluguéis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Marketing Imobiliário
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Suporte Jurídico
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Rua das Imobiliárias, 123</p>
                  <p>Centro, São Paulo - SP</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>(11) 99999-9999</p>
                  <p>(11) 3333-3333</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">contato@imovelprime.com.br</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Seg-Sex: 8h às 18h</p>
                  <p>Sáb: 9h às 15h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-sm text-gray-300">Transações Seguras</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-8 w-8 text-blue-400" />
              <span className="text-sm text-gray-300">CRECI Registrado</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CreditCard className="h-8 w-8 text-blue-400" />
              <span className="text-sm text-gray-300">Financiamento Facilitado</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Clock className="h-8 w-8 text-blue-400" />
              <span className="text-sm text-gray-300">Atendimento 24h</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 ImóvelPrime. Todos os direitos reservados. | CRECI: 12345-J
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LGPD
              </a>
            </div>
          </div>
          
          {/* Development Credit */}
          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              Desenvolvido por{' '}
              <a 
                href="https://www.rtisistema.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 font-medium hover:text-green-300 transition-colors duration-300"
              >
                RTI Sistemas <span className="inline-block transition-all duration-500">{connector}</span> Tecnologia
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 