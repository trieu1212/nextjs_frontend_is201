

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
const formSchema = z.object({
    username: z.string().trim().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6).max(20),
})


const RegisterForm = () => {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: '',
            password: '',
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`, {
            body: JSON.stringify(values),
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then((res)=>res.json())
        console.log(result)
        if(result.statusCode === 201) {
            toast({
                title: result.message,
            })
        }
        else{
            toast({
                title: "Đăng kí không thành công!",
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
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập email" type='email' {...field} />
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
                        <Button type="submit" className='!mt-8 w-full' style={{backgroundColor:"#13308E"}}>Đăng ký</Button>
                    </form>
                </Form>
        </>
    )
}

export default RegisterForm