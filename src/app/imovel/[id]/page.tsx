"use client"

import { useState, use } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Bed, 
  Bath, 
  Car, 
  Maximize, 
  MapPin, 
  Calendar,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react'

// Mock data - em uma aplicação real, isso viria de uma API
const getPropertyData = (id: string) => {
  const properties = {
    "1": {
      id: "1",
      title: "Apartamento Luxuoso em Pinheiros",
      price: 850000,
      address: "Rua Oscar Freire, 123 - Pinheiros, São Paulo",
      bedrooms: 3,
      bathrooms: 2,
      parkingSpaces: 2,
      area: 120,
      yearBuilt: 2020,
      type: "Apartamento",
      isForSale: true,
      isFeatured: true,
      description: "Apartamento moderno e luxuoso localizado no coração de Pinheiros. Com acabamentos de primeira qualidade, este imóvel oferece o máximo em conforto e sofisticação. Localização privilegiada com fácil acesso a restaurantes, shopping centers e transporte público.",
      features: [
        "Varanda gourmet",
        "Churrasqueira",
        "Ar condicionado",
        "Armários embutidos",
        "Piso porcelanato",
        "Sacada com vista",
        "Cozinha planejada",
        "Suíte master"
      ],
      amenities: [
        { name: "Piscina", icon: "🏊‍♂️" },
        { name: "Academia", icon: "💪" },
        { name: "Salão de festas", icon: "🎉" },
        { name: "Playground", icon: "🎮" },
        { name: "Portaria 24h", icon: "🔒" },
        { name: "Elevador", icon: "⬆️" },
        { name: "Garagem coberta", icon: "🚗" },
        { name: "Área de lazer", icon: "🌳" }
      ],
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      agent: {
        name: "Carlos Silva",
        phone: "(11) 99999-9999",
        email: "carlos@imovelprime.com.br",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    },
    "2": {
      id: "2",
      title: "Casa Moderna em Condomínio Fechado",
      price: 1200000,
      address: "Rua das Flores, 456 - Vila Madalena, São Paulo",
      bedrooms: 4,
      bathrooms: 3,
      parkingSpaces: 3,
      area: 200,
      yearBuilt: 2019,
      type: "Casa",
      isForSale: true,
      isFeatured: true,
      description: "Casa em condomínio fechado com total privacidade e segurança. Projeto arquitetônico moderno com amplos espaços e jardim privativo. Ideal para famílias que buscam qualidade de vida em um dos bairros mais charmosos de São Paulo.",
      features: [
        "Jardim privativo",
        "Churrasqueira",
        "Piscina privativa",
        "Closet",
        "Lavabo",
        "Escritório",
        "Garagem coberta",
        "Área gourmet"
      ],
      amenities: [
        { name: "Segurança 24h", icon: "🔒" },
        { name: "Área verde", icon: "🌳" },
        { name: "Quadra esportiva", icon: "🏀" },
        { name: "Salão de festas", icon: "🎉" },
        { name: "Playground", icon: "🎮" },
        { name: "Portaria", icon: "🏢" },
        { name: "Circuito de câmeras", icon: "📹" },
        { name: "Controle de acesso", icon: "🎯" }
      ],
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      agent: {
        name: "Ana Costa",
        phone: "(11) 98888-8888",
        email: "ana@imovelprime.com.br",
        avatar: "https://avatar.iran.liara.run/public/girl?username=AnaCosta"
      }
    },
    "3": {
      id: "3",
      title: "Apartamento Completo para Locação",
      price: 3500,
      address: "Av. Paulista, 789 - Bela Vista, São Paulo",
      bedrooms: 2,
      bathrooms: 1,
      parkingSpaces: 1,
      area: 80,
      yearBuilt: 2018,
      type: "Apartamento",
      isForSale: false,
      isFeatured: true,
      description: "Apartamento completo e mobiliado na Avenida Paulista. Localização privilegiada com acesso fácil a transporte público, restaurantes e vida noturna. Perfeito para profissionais que trabalham na região central da cidade.",
      features: [
        "Mobiliado",
        "Ar condicionado",
        "Internet incluída",
        "TV a cabo",
        "Roupas de cama",
        "Utensílios de cozinha",
        "Máquina de lavar",
        "Micro-ondas"
      ],
      amenities: [
        { name: "Portaria 24h", icon: "🔒" },
        { name: "Elevador", icon: "⬆️" },
        { name: "Interfone", icon: "📞" },
        { name: "Limpeza semanal", icon: "🧹" },
        { name: "Água incluída", icon: "💧" },
        { name: "Gás incluído", icon: "🔥" },
        { name: "Condomínio incluído", icon: "🏢" },
        { name: "IPTU incluído", icon: "📄" }
      ],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      agent: {
        name: "Roberto Santos",
        phone: "(11) 97777-7777",
        email: "roberto@imovelprime.com.br",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    },
    "4": {
      id: "4",
      title: "Cobertura com Vista Panorâmica",
      price: 2500000,
      address: "Rua Augusta, 321 - Jardins, São Paulo",
      bedrooms: 4,
      bathrooms: 4,
      parkingSpaces: 3,
      area: 300,
      yearBuilt: 2021,
      type: "Cobertura",
      isForSale: true,
      isFeatured: true,
      description: "Cobertura de luxo com vista panorâmica da cidade. Acabamentos premium, terraço gourmet com piscina e localização exclusiva nos Jardins. Um verdadeiro refúgio urbano para quem busca o máximo em sofisticação e conforto.",
      features: [
        "Terraço com piscina",
        "Vista panorâmica",
        "Home theater",
        "Adega climatizada",
        "Sauna seca",
        "Hidromassagem",
        "Cozinha gourmet",
        "Dependência completa"
      ],
      amenities: [
        { name: "Piscina privativa", icon: "🏊‍♂️" },
        { name: "Academia", icon: "💪" },
        { name: "Spa", icon: "🧖‍♀️" },
        { name: "Concierge", icon: "🎩" },
        { name: "Valet parking", icon: "🚗" },
        { name: "Heliponto", icon: "🚁" },
        { name: "Salão de beleza", icon: "💄" },
        { name: "Business center", icon: "💼" }
      ],
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        ],
      agent: {
        name: "Mariana Oliveira",
        phone: "(11) 96666-6666",
        email: "mariana@imovelprime.com.br",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      }
    }
  }
  
  return properties[id as keyof typeof properties] || null
}

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)
  
  const resolvedParams = use(params)
  const property = getPropertyData(resolvedParams.id)
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Imóvel não encontrado</h1>
          <button 
            onClick={() => router.back()}
            className="text-blue-600 hover:text-blue-700"
          >
            Voltar
          </button>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    }).format(price)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className={`p-2 rounded-full transition-colors ${
                  isFavorited ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorited ? 'fill-current' : ''}`} />
              </button>
              
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-96 group">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Property Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.isForSale ? 'Venda' : 'Aluguel'}
                  </span>
                </div>

                {/* Featured Badge */}
                {property.isFeatured && (
                  <div className="absolute top-4 left-20">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Destaque</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                        index === currentImageIndex ? 'ring-2 ring-blue-600' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.address}</span>
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {formatPrice(property.price)}
                  {!property.isForSale && <span className="text-lg font-normal text-gray-500">/mês</span>}
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Bed className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Quartos</div>
                </div>
                <div className="text-center">
                  <Bath className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Banheiros</div>
                </div>
                <div className="text-center">
                  <Car className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.parkingSpaces}</div>
                  <div className="text-sm text-gray-600">Vagas</div>
                </div>
                <div className="text-center">
                  <Maximize className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                  <div className="text-sm text-gray-600">m²</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Descrição</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Características</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comodidades do Condomínio</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{amenity.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corretor Responsável</h3>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{property.agent.name}</h4>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Ligar Agora</span>
                </a>
                
                <a
                  href={`mailto:${property.agent.email}`}
                  className="w-full flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>Enviar E-mail</span>
                </a>
                
                <button className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  <span>📱</span>
                  <span>WhatsApp</span>
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Agende uma visita</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Entre em contato para agendar uma visita ao imóvel
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Disponível todos os dias</span>
                </div>
              </div>
            </div>

            {/* Property Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informações do Imóvel</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipo:</span>
                  <span className="font-medium text-gray-900">{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ano de construção:</span>
                  <span className="font-medium text-gray-900">{property.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Área total:</span>
                  <span className="font-medium text-gray-900">{property.area} m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Preço por m²:</span>
                  <span className="font-medium text-gray-900">
                    {formatPrice(Math.round(property.price / property.area))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 