

"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import envConfig from '@/config'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/app/AppProvider'
const formSchema = z.object({
    username: z.string().trim().min(3).max(20),
    password: z.string().min(6).max(20),
})


const LoginForm = () => {
    const {setAccessToken,setUser} = useAppContext()
    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: '',
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then((res) => res.json())
        if (result.JWTToken) {
            toast({
                title: "Đăng nhập thành công",
            })
            const resultFromNextServer = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result)
            }).then((res)=>{
                const data = {
                    status: res.status,
                    accessToken:result.JWTToken.accessToken,
                    user:result.user
                }
                if(!res.ok){
                    throw data
                }
                return data
            })
            setAccessToken(resultFromNextServer.accessToken)
            setUser(resultFromNextServer.user)
            router.push('/')
        }
        else if (result.statusCode === 401) {
            toast({
                title: result.message,
                variant: "destructive"
            })
        }
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-[600px] flex-shrink-0 w-full" noValidate>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên tài khoản</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nhập tên tài khoản" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nhập mật khẩu" type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='!mt-8 w-full' style={{ backgroundColor: "#13308E" }}>Đăng Nhập</Button>
                </form>
            </Form>
        </>
    )
}

export default LoginForm