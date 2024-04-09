'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from '../../../public/images/Logo.png'
import React from 'react'

const Header = () => {
    const router = useRouter()
    const handleToLogin = () => {
        router.push('/login')
    }
    const handleToRegister = () => {
        router.push('/register')
    }
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
                    <ul className="flex gap-4 m-4">
                        <li>
                            <Button
                                onClick={handleToLogin}
                                className="bg-blue-400">
                                    Đăng nhập
                            </Button>
                        </li>
                        <li>
                            <Button
                                onClick={handleToRegister}
                                className="bg-blue-400">
                                    Đăng ký
                            </Button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header