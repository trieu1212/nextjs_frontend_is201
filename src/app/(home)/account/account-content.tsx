'use client'

import React from 'react'
import OptionAccount from '@/app/(home)/account/account-option'
interface IOptionState {
    option: string;
    setOption: React.Dispatch<React.SetStateAction<string>>
}
const AccountContent = () => {
    const [option, setOption] = React.useState<IOptionState>({ option: 'Thông tin cá nhân', setOption: () => { } })
    const handleGetUserInfo = (text:string) =>{
        setOption({
            option: text, 
            setOption: () => { }
        })
    }
    return (
        <>
            <div className='w-1/3' style={{ backgroundColor: "#13308E" }}>
                <h2 className='text-4xl text-white ml-10 py-4'>Cài Đặt</h2>
                <ul className='flex justify-center flex-col gap-16 text-white my-5 ml-10'>
                    <li className='cursor-pointer' onClick={() => handleGetUserInfo('Thông tin cá nhân')}>Thông tin cá nhân</li>
                    <li className='cursor-pointer' onClick={() => handleGetUserInfo('Thông báo')}>Thông báo</li>
                    <li className='cursor-pointer' onClick={() => handleGetUserInfo('Dịch vụ đã đăng ký')}>Dịch vụ đã đăng ký</li>
                </ul>
            </div>
            <div className='w-2/3'>
                {option.option}
                <OptionAccount option={option.option} />
            </div>
        </>
    )
}

export default AccountContent