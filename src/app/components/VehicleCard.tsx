'use client'

import { Vehicle } from '../types'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Battery, Gauge, Timer, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const vehicleId =
    `${vehicle.brand}_${vehicle.model}`
      .toLowerCase()
      .replace(/\s+/g, '')      

  return (
    <Link href={`/vehicles/${vehicleId}`}>
      <Card className="hover:shadow-lg transition-shadow py-0">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <Image
            width={400}
            height={250}
            src={vehicle.images[0]}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <Badge>{vehicle.year}</Badge>
            <Badge
              variant={vehicle.condition === 'New' ? 'default' : 'secondary'}
            >
              {vehicle.condition}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-2xl font-bold mb-4">
            ${vehicle.price.toLocaleString()}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>{Math.round(vehicle.range_km * 0.621371)} mi</span>
            </div>
            <div className="flex items-center gap-2">
              <Battery className="w-4 h-4" />
              <span>{vehicle.battery_capacity_kWh} kWh</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              <span>{vehicle.drivetrain}</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              <span>{vehicle.charging_speed_kW}kW</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <p className="text-sm text-gray-600">
            {vehicle.location} • {vehicle.kilometer_count.toLocaleString()} km
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}
