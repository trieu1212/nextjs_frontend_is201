'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useAppContext } from '@/app/AppProvider'
import envConfig from '@/config'
import { toast } from '@/components/ui/use-toast'
import Link from 'next/link'
const AuthHeader = () => {
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
            if (logoutFromNextServer.ok) {
                setAccessToken('')
                setUser({
                    id:0,
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
        </>
    )
}

export default AuthHeader