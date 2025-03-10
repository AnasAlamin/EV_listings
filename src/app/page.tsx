/* eslint-disable @typescript-eslint/no-explicit-any */
import { getVehicles } from './lib/actions'
import { VehicleCard } from './components/VehicleCard'
import { Pagination } from './components/Paginations'
import { SearchFilters } from './components/SearchFilters'
import Head from 'next/head'
import Layout from './components/Layout'

type HomeProps = {
  searchParams: Promise<{
    [key: string]: string | string[] | number | undefined
  }>
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams
  const page = parseInt((params.page as string) || '1')
  const [field, value] = ((params.filter as string) || '').split(':')

  const { vehicles, total, totalPages } = await getVehicles({
    query: params.query as string,
    sort: params.sort as any,
    filter: field ? { field: field as any, value } : undefined,
    page,
    limit: 12
  })

  return (
    <Layout>
      <Head>
        <title>Electric Vehicles - Home</title>
        <meta
          name="description"
          content="Browse our selection of electric vehicles."
        />
        <meta
          name="keywords"
          content="electric vehicles, cars, EVs, buy electric cars"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Electric Vehicles</h1>
        <SearchFilters />
        {total === 0 ? (
          <p className="text-center text-gray-500 my-8">No vehicles found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle, index) => (
                <VehicleCard
                  key={`${vehicle.brand}_${index}`}
                  vehicle={vehicle}
                />
              ))}
            </div>
            <Pagination totalPages={totalPages} currentPage={page} />
          </>
        )}
      </main>
    </Layout>
  )
}
