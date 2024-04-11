import React from 'react'
import Logo from '@/../../public/images/Logo.png'
import fb from '@/../../public/images/fb.png'
import utube from '@/../../public/images/utube.png'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
      <footer className='m-14'>
        <hr className='my-6' />
        <div className='flex justify-around gap-12'>
          <div className='w-1/4'>
            <div className='mb-4'>
              <Image
                src={Logo}
                width={100}
                height={80}
                alt='Logo'
              />
            </div>
            <p>
              Chúng tôi tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng trọ.
            </p>
          </div>
          <div className='flex flex-col w-1/4  gap-4'>
            <h3 className='font-bold'>
              Về chúng tôi
            </h3>
            <Link href='/'>
              Trang chủ
            </Link>
            <Link href='/service'>
              Các dịch vụ
            </Link>
          </div>
          <div className='w-1/4 flex flex-col  gap-4'>
            <h3 className='font-bold'>
              Hỗ trợ khách hàng
            </h3>
            <p className='cursor-pointer'>Câu hỏi thường gặp</p>
            <p className='cursor-pointer'>Hướng dẫn đăng tin</p>
            <p className='cursor-pointer'>Bảng giá dịch vụ</p>
            <p className='cursor-pointer'>Quy định đăng tin</p>
            <p className='cursor-pointer'>Giải quyết khiếu nại</p>
          </div>
          <div className='w-1/4 flex flex-col  gap-4'>
            <h3 className='font-bold'>
              Liên hệ với chúng tôi
            </h3>
            <div className='flex gap-6'>
                <Image
                  src={fb}
                  height={30}
                  width={50}
                  alt='fb'
                />
                <Image
                  src={utube}
                  height={30}
                  width={50}
                  alt='fb'
                />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer