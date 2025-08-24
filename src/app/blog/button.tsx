'use client'
import React from 'react'

export default function ClientButton() {
  return (
    <button onClick={()=>{throw new Error('error while loading more')}}>Load More</button>
  )
}
