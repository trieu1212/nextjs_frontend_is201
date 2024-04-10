'use client'
import Nav from "@/components/ui/nav";
import Image from "next/image";
import hcm from '@/../../public/images/hcm.png'
import ListPost from "@/app/(home)/list-post";
import React from "react";
const items = [
  { name: 'Phòng trọ TPHCM', imageUrl: hcm, address: 'TPHCM' },
  { name: 'Phòng trọ Hà Nội', imageUrl: hcm, address: 'Hà Nội' },
  { name: 'Phòng trọ Long An', imageUrl: hcm, address: 'Long An' }
]
export default function Home() {
  const [location, setLocation] = React.useState('')
  const handleSetAddress = (text: string) => {
    setLocation(text)
  }
  return (
    <>
      <Nav />
      <h1 className="text-center mt-4 font-bold">Tìm chỗ thuê ưng ý</h1>
      <h3 className="mt-3 text-center">
        Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
      </h3>
      <div className="flex justify-around mt-8">
        {items.map((item, index) => {
          return (
            <div className="rounded border cursor-pointer" key={index} onClick={() => handleSetAddress(item.address)}>
              <Image
                src={item.imageUrl}
                height={400}
                width={320}
                alt="Hình trọ"
                quality={100}
              />
              <hr />
              <div className="text-center">
                <b>{item.name}</b>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-row flex-1 justify-center items-center m-12">
        <div className="w-2/3 ">
        <ListPost location={location} />
        </div>
        <div className="w-1/3">
        </div>
      </div>
    </>

  );
}
