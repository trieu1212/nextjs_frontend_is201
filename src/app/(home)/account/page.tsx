

import AccountContent from '@/app/(home)/account/account-content'
import envConfig from '@/config'
import { cookies } from 'next/headers'

const Account = () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')
    const getUserinfo = async () => {
      const result= await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/user`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken?.value}`
        },
        method: 'GET'
      }).then((res)=>{
        res.json()
      })
      // console.log(result)
    }
    getUserinfo()
  return (
    <>
      <div className='m-12 flex justify-center items-center gap-4'>
          <AccountContent/>
      </div>
    </>
  )
}

export default Account