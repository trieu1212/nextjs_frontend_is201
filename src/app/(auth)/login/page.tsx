
import Image from 'next/image'
import React from 'react'
import background from '@/../../public/images/authBackgroun.jpg'
import Link from 'next/link'
import LoginForm from '@/app/(auth)/login/login-form'

const Login = () => {
  return (
    <>
      <div className='flex flex-1 justify-center items-center'>
        <div className='w-1/2'>
          <h1 className='text-center'>
            Đăng nhập
          </h1>
          <div className='flex flex-col justify-center items-center '>
            <LoginForm/>
            <p className='mt-4'>Chưa có tài khoản? <b><Link href='/register'>Đăng ký ngay!</Link></b></p>
          </div>
        </div>
        <div className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat' style={{backgroundColor:"#13308E"}}>
            <Image
              src={background}
              className="h-screen w-screen object-cover bg-no-repeat"
              alt='background'
            />
        </div>
      </div>
    </>
  )
}

export default Login