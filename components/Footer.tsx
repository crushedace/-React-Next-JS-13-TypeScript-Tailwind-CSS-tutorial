import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flerx flex-col gap-12 w-full">
        <div className= "flex items-start flex-col">
          <Image
          src="/logo-purple.svg"
          width={115}
          height={38}
          alt="flexibble"
          
          />



        </div>

      </div>
    </footer>
  )
}

export default Footer