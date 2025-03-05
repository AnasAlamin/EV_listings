import { SearchParams, Vehicle, VehicleListResponse } from '../types'
import { vehicleData } from './data'

export async function getVehicles(
  params: SearchParams
): Promise<VehicleListResponse> {
  let filteredVehicles = [...vehicleData.data]
  const limit = params.limit || 10
  const page = params.page || 1

  // Search
  if (params.query) {
    const query = params.query.toLowerCase()
    filteredVehicles = filteredVehicles.filter(
      (vehicle) =>
        vehicle.brand.toLowerCase().includes(query) ||
        vehicle.model.toLowerCase().includes(query) ||
        vehicle.location.toLowerCase().includes(query)
    )
  }

  // Filter
  if (params.filter) {
    const { field, value } = params.filter
    filteredVehicles = filteredVehicles.filter((vehicle) => {
      if (field === 'price') return vehicle.price <= parseInt(value)
      if (field === 'range') return vehicle.range_km >= parseInt(value)
      if (field === 'condition') return vehicle.condition === value
      return true
    })
  }

  // Sort
  if (params.sort) {
    filteredVehicles.sort((a, b) => {
      switch (params.sort) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'range-asc':
          return a.range_km - b.range_km
        case 'range-desc':
          return b.range_km - a.range_km
        default:
          return 0
      }
    })
  }

  // Pagination
  const total = filteredVehicles.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const paginatedVehicles = filteredVehicles.slice(start, start + limit)

  return {
    vehicles: paginatedVehicles,
    total,
    page,
    totalPages
  }
}

export async function getVehicleById(id: string): Promise<Vehicle | null> {
  const [brand, model] = id.split('_')
  const vehicle = vehicleData.data.find(
    (vehicle) =>
      vehicle.brand.toLowerCase().replace(/\s+/g, '') === brand.toLowerCase() &&
      vehicle.model.toLowerCase().replace(/\s+/g, '') === model.toLowerCase()
  )
  return vehicle || null
}
