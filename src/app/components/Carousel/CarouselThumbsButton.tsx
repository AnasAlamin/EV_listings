import React from 'react'
import './style.css'
import Image from 'next/image'

type PropType = {
  selected: boolean
  index: number
  image: string
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, image, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number overflow-hidden"
      >
        <Image
          width={400}
          height={300}
          src={image}
          alt={`EV_${index}`}
          className="object-cover w-full h-full"
        />
      </button>
    </div>
  )
}
