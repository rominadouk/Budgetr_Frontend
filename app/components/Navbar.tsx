'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import hamburgerMenu from '../../public/icons/hamburger-menu.svg'
import Logo from '../../public/icons/money.svg'



import Link from 'next/link'

const Navbar = () => {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    
    const toggleMobileMenu = () => {
        setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)
    };

    
  return (

    <nav className={ `py-4 h-16 w-full bg-money-green px-5 lg:flex lg:justify-between lg:px-28 ${hamburgerMenuIsOpen ? '  h-auto pt-4 w-full px-5  lg:bg-transluscent shadow-xl' : '' }`}>

        <div className='flex justify-between'>
            <div className='flex gap-3'>
                {/* logo */}
                <Link href={'/'}>
                    <Image src={Logo} alt='rd-logo' className='w-10'/>
                </Link>

                <p className='text-lg place-self-center'>Budgetr</p>
            </div>
            <button onClick={toggleMobileMenu} className="flex flex-col justify-center items-center lg:hidden">
                <span className={`bg-money-green block transition-all duration-300 ease-out h-0.5 w-6 rounded-md ${hamburgerMenuIsOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                </span>
                <span className={`bg-money-green block transition-all duration-300 ease-out h-0.5 w-6 rounded-md my-0.5 ${hamburgerMenuIsOpen ? 'opacity-0' : 'opacity-100'}`}>
                </span>
                <span className={`bg-money-green block transition-all duration-300 ease-out h-0.5 w-6 rounded-md ${hamburgerMenuIsOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>
                </span>    
            </button>

        </div>
            {/* Mobile View */}
                    <div className={`lg:hidden flex  flex-col relative  text-center text-xl  transition-all duration-300 ease-out transform  ${hamburgerMenuIsOpen ? 'translate-y-2 opacity-100 visible pointer-events-aut pb-3' : 'translate-y-1 opacity-0 invisible pointer-events-none'}`}>
                        <ul className='flex flex-col gap-5 ' onClick={toggleMobileMenu}>
                            <Link href='/' >
                                <li>Home</li>
                            </Link>
                            <Link href='s' >
                                <li>Other Projects</li>
                            </Link>
                            <Link href='/'>
                                <li>Contact</li>
                            </Link>
                            {/* <Link href='https://www.linkedin.com/in/rominadouk/'  className='self-center' target='_blank'>
                                <li>
                                    <Image src={linkedinIcon} alt='linkedin-icon' className='w-7' />
                                </li>
                            </Link>
                            <Link href='https://github.com/rominadouk'  className='self-center '  target='_blank'>
                                <li className=''>
                                    <Image src={githubIcon} alt='github-icon' className='w-7 h-8' />
                                </li>
                            </Link> */}
                        </ul>
                    </div>



        {/* Navbar View on Desktop */}
        <ul className='hidden lg:flex lg:items-center gap-5'>
            <Link href='/' >
                <li>Home</li>
            </Link>
            <Link href='/'>
                <li>Other Projects</li>
            </Link>
            <Link href='/'>
                <li>Contact</li>
            </Link>
            {/* <Link href='https://www.linkedin.com/in/rominadouk/' target='_blank'>
                <li>
                    <Image src={linkedinIcon} alt='linkedin-icon' className='w-7' />
                </li>
            </Link>
            <Link href='https://github.com/rominadouk'  target='_blank'>
                <li>
                    <Image src={githubIcon} alt='github-icon' className='w-7 h-8' />
                </li>
            </Link> */}
        </ul>
        {/* END Mobile Menu */}
    </nav>
  )
}

export default Navbar