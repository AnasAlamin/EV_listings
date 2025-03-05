export interface Vehicle {
  brand: string
  model: string
  year: number
  price: number
  range_km: number
  color: string
  condition: 'New' | 'Used'
  battery_capacity_kWh: number
  charging_speed_kW: number
  seats: number
  drivetrain: 'FWD' | 'RWD' | 'AWD'
  location: string
  autopilot: boolean
  kilometer_count: number
  accidents: boolean
  accident_description?: string
  images: string[]
}

export interface SearchParams {
  query?: string
  sort?: 'price-asc' | 'price-desc' | 'range-asc' | 'range-desc'
  filter?: {
    field: 'price' | 'range' | 'condition'
    value: string
  }
  page?: number
  limit?: number
}

export interface VehicleListResponse {
  vehicles: Vehicle[]
  total: number
  page: number
  totalPages: number
}

export interface VehicleData {
  count: number
  data: Vehicle[]
}
