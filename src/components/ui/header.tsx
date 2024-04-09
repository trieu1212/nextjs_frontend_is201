

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../public/images/Logo.png'
import React from 'react'
import AuthHeader from '@/components/ui/auth-header'

const Header = () => {
    return (
        <>
            <header className='flex justify-between'>
                <div className="m-4">
                    <Link href='/'>
                        <Image
                            src={Logo}
                            width={100}
                            height={80}
                            alt='Logo'
                        />
                    </Link>
                </div>
                <div>
                    <AuthHeader />
                </div>
            </header>
        </>
    )
}

export default Header