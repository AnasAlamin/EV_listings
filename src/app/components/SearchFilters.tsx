'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  SelectItem,
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('query') || '')

  const updateSearch = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString())
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })
    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Input
          placeholder="Search vehicles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && updateSearch({ query })}
          onBlur={() => updateSearch({ query })}
        />
      </div>
      <div className="grid grid-cols-2 md:flex gap-4">
        <Select
          onValueChange={(value) => updateSearch({ sort: value })}
          value={searchParams.get('sort') || ''}
        >
          <SelectTrigger className="md:w-[200px] w-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="range-asc">Range: Low to High</SelectItem>
            <SelectItem value="range-desc">Range: High to Low</SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => updateSearch({ filter: value })}
          value={searchParams.get('filter') || ''}
        >
          <SelectTrigger className="md:w-[200px] w-full">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="condition:New">New Vehicles</SelectItem>
            <SelectItem value="condition:Used">Used Vehicles</SelectItem>
            <SelectItem value="range:400">Range {'>'} 400 km</SelectItem>
            <SelectItem value="range:500">Range {'>'} 500 km</SelectItem>
            <SelectItem value="price:50000">Price {'<'} €50,000</SelectItem>
            <SelectItem value="price:100000">Price {'<'} €100,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="default"
        className="md:w-fit md:flex-none flex-1"
        onClick={() => {
          setQuery('')
          router.push('/')
        }}
      >
        Clear
      </Button>
    </div>
  )
}
