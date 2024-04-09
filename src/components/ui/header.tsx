'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from '../../../public/images/Logo.png'
import React from 'react'
import { useAppContext } from '@/app/AppProvider'
import envConfig from '@/config'
import { toast } from '@/components/ui/use-toast'

const Header = () => {
    const { accessToken, setAccessToken, user, setUser } = useAppContext()
    const router = useRouter()
    const handleToLogin = () => {
        router.push('/login')
    }
    const handleToRegister = () => {
        router.push('/register')
    }
    const handleToLogout = async () => {
        const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/logout`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            method: "POST"
        })
        if (result.status === 201) {
            toast({
                title: 'Đăng xuất thành công',
            })
            const logoutFromNextServer = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(result)
            })
            console.log(logoutFromNextServer)
            if (logoutFromNextServer.ok) {
                setAccessToken('')
                setUser({
                    username: '',
                    email: '',
                    password: '',
                    phone: 0,
                    postAmount: 0,
                })
                router.push('/login')
            }
            else {
                console.log('lỗi')
            }
        }
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
                    {accessToken ? (
                        <>
                            <div className='flex justify-center items-center'>
                                <p>Xin chào <Link href='/account'>{user.username}</Link>!</p>
                                <Button
                                    onClick={handleToLogout}
                                    className="bg-blue-400 m-6">
                                    Đăng xuất
                                </Button>
                            </div>
                        </>
                    ) : (
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
                    )}
                </div>
            </header>
        </>
    )
}

export default Header