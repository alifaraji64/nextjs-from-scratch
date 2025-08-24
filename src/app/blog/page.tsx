import React from 'react'
import ClientButton from './button'
export default async function Blog() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <div>
      <h1>Blog</h1>
      <ClientButton />
    </div>
  )
}
