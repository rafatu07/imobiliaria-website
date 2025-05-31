"use client"

import { Heart, Bed, Bath, Car, Maximize, MapPin, Camera } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface PropertyCardProps {
  property: {
    id: string
    title: string
    price: number
    address: string
    bedrooms: number
    bathrooms: number
    parkingSpaces: number
    area: number
    images: string[]
    type: string
    isForSale: boolean
    isFeatured?: boolean
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)

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

  const handleViewDetails = () => {
    router.push(`/imovel/${property.id}`)
  }

  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200",
      property.isFeatured && "ring-2 ring-blue-500"
    )}>
      {/* Image Gallery */}
      <div className="relative h-48 group">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              →
            </button>
          </>
        )}

        {/* Image Counter */}
        {property.images.length > 1 && (
          <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            <Camera className="h-3 w-3" />
            <span>{currentImageIndex + 1}/{property.images.length}</span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-2 right-2 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
        >
          <Heart 
            className={cn(
              "h-4 w-4",
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"
            )} 
          />
        </button>

        {/* Property Type Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            {property.isForSale ? 'Venda' : 'Aluguel'}
          </span>
        </div>

        {/* Featured Badge */}
        {property.isFeatured && (
          <div className="absolute top-8 left-2">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
              Destaque
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <div className="mb-2">
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(property.price)}
          </span>
          {!property.isForSale && (
            <span className="text-gray-500 text-sm">/mês</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>

        {/* Address */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm truncate">{property.address}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
          <div className="flex items-center space-x-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center space-x-1">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            
            {property.bathrooms > 0 && (
              <div className="flex items-center space-x-1">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            
            {property.parkingSpaces > 0 && (
              <div className="flex items-center space-x-1">
                <Car className="h-4 w-4" />
                <span>{property.parkingSpaces}</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-1">
            <Maximize className="h-4 w-4" />
            <span>{property.area}m²</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button 
            onClick={handleViewDetails}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Ver Detalhes
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium">
            Contato
          </button>
        </div>
      </div>
    </div>
  )
} 