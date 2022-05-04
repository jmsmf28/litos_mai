import React from 'react'
import { MailIcon, PhoneIcon, HomeIcon } from '@heroicons/react/solid'

function Navbar() {
  return (
    <div className="flex justify-end bg-slate-300">
      <PhoneIcon className="w-5 p-1" />
      <span className="flex p-2 text-xs">(+351) 926415585</span>
      <span className="invisible flex p-2 text-xs  md:visible">|</span>
      <HomeIcon className="invisible w-5 p-1 md:visible" />
      <span className="invisible flex p-2 text-xs md:visible ">
        Rua Padre Costa 1132 S. Mamede de Infesta
      </span>
      <span className="invisible flex p-2 text-xs md:visible">|</span>
      <MailIcon className="w-5 p-1" />
      <span className="flex p-2 text-xs">fernandes648@gmail.com</span>
    </div>
  )
}

export default Navbar
