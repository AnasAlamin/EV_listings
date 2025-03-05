import Carousel from '@/app/components/Carousel'
import Layout from '@/app/components/Layout'
import { getVehicleById } from '@/app/lib/actions'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Battery, Gauge, Timer, Zap } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type VehiclePageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { id } = await params

  const vehicle = await getVehicleById(id)

  if (!vehicle) {
    notFound()
  }

  return (
    <Layout>
      <Head>
        <title>{`${vehicle.brand} ${vehicle.model} - Details`}</title>
        <meta
          name="description"
          content={`Details of ${vehicle.brand} ${vehicle.model}, ${vehicle.year}.`}
        />
        <meta
          name="keywords"
          content={`${vehicle.brand}, ${vehicle.model}, electric vehicles, EVs`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="outline" className="mb-8">
            ← Back to Listings
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Carousel slides={vehicle.images} options={{}} />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2">
              {vehicle.brand} {vehicle.model} ({vehicle.year})
            </h1>
            <p className="text-3xl font-bold mb-6">
              € {vehicle.price.toLocaleString()}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="flex items-center gap-2 p-4">
                  <Zap className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">Range</p>
                    <p className="font-semibold">{vehicle.range_km} km</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-2 p-4">
                  <Battery className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">Battery</p>
                    <p className="font-semibold">
                      {vehicle.battery_capacity_kWh} kWh
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-2 p-4">
                  <Gauge className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">Accidents</p>
                    <p className="font-semibold">
                      {vehicle.accidents
                        ? vehicle.accident_description || 'Yes'
                        : 'No'}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-2 p-4">
                  <Timer className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">Charging Speed</p>
                    <p className="font-semibold">
                      {vehicle.charging_speed_kW} kW
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h1 className="text-xl font-semibold mb-4">Description</h1>
            <p className="text-gray-600 mb-4">Condition: {vehicle.condition}</p>
            <p className="text-gray-600 mb-4">Color: {vehicle.color}</p>
            <p className="text-gray-600 mb-4">
              Drivetrain: {vehicle.drivetrain}
            </p>
            <p className="text-gray-600 mb-4">Seats: {vehicle.seats}</p>
            <p className="text-gray-600 mb-4">Location: {vehicle.location}</p>
            <p className="text-gray-600 mb-4">
              Kilometers Driven: {vehicle.kilometer_count.toLocaleString()} km
            </p>
            <p className="text-gray-600 mb-4">
              Autopilot: {vehicle.autopilot ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
