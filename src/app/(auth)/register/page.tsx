
import RegisterForm from '@/app/(auth)/register/register-form'
import Image from 'next/image'
import React from 'react'
import background from '@/../../public/images/authBackgroun.jpg'
import Link from 'next/link'


const Register = () => {

  return (
    <>
      <div className='flex flex-1 justify-center items-center'>
        <div className='w-1/2'>
          <h1 className='text-center'>
            Đăng ký
          </h1>
          <div className='flex flex-col justify-center items-center '>
            <RegisterForm />
            <p className='mt-4'>Đã có tài khoản? <b><Link href='/login'>Đăng nhập ngay!</Link></b></p>
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

export default Register