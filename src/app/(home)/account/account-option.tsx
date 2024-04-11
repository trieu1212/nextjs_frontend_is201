'use client'
import { useAppContext } from '@/app/AppProvider'
import envConfig from '@/config'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import userIcon from '@/../../public/images/user.png'
interface IService {
  id: number;
  name: string;
  description: string;
  price: number;
  postAmount: number;
}
interface IUser {
  id: number;
  username: string;
  email: string;
  phone: number;
  avatar: string;
  postAmount: number;
  service: IService;
}
const OptionAccount = (props: { option: string }) => {
  const { option } = props
  const { user, accessToken } = useAppContext()
  const [userInfo, setUserInfo] = useState<IUser>()
  useEffect(() => {
    const getUserinfo = async () => {
      const response = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/user/${user.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      })
      const data = await response.json()
      setUserInfo(data)
    }
    getUserinfo()
  }, [])
  return (
    <>
      <div className='flex flex-col justify-center gap-6 ml-4'>
        {option && option === 'Thông tin cá nhân' && (
          <React.Fragment>
            <div className='flex gap-5 items-center'>
              <div className='rounded-2xl border'>
                <Image
                  src={userInfo?.avatar ? userInfo?.avatar : userIcon}
                  height={30}
                  width={50}
                  alt='avatar'
                />
              </div>
              <div>
                <h3 className='font-bold'>
                  {userInfo?.username}
                </h3>
              </div>
            </div>
            <div className='flex gap-6'>
              <div>
                <h3>Tên người dùng:</h3>
              </div>
              <div>
                <p className='text-xl'>
                  {userInfo?.username}
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div>
                <h3>Email:</h3>
              </div>
              <div>
                <p className='text-xl'>
                  {userInfo?.email}
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div>
                <h3>Số điện thoại:</h3>
              </div>
              <div>
                <p className='text-xl'>
                  {userInfo?.phone ? userInfo.phone : 'Chưa cập nhật'}
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
        {option && option === 'Dịch vụ đã đăng ký' && (
          <>
            {userInfo?.service ? (
              <>
                <div className='flex gap-6'>
                  <div>
                    <h3>Tên dịch vụ:</h3>
                  </div>
                  <div>
                    <p className='text-xl'>
                      {userInfo?.service.name}
                    </p>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <div>
                    <h3>Mô tả dịch vụ:</h3>
                  </div>
                  <div>
                    <p className='text-xl'>
                      {userInfo?.service.description}
                    </p>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <div>
                    <h3>Giá:</h3>
                  </div>
                  <div>
                    <p className='text-xl'>
                      {userInfo?.service.price}
                    </p>
                  </div>
                </div>
              </>
            ):(
              <>
                <p className='p-8 text-center'>
              Tài khoản chưa đăng ký dịch vụ!
            </p>
              </>
            )}
          </>
        )}
        {option && option === 'Thông báo' && (
          <>
            <p className='p-8 text-center'>
              Không có thông báo nào!
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default OptionAccount