'use client'
import Image from "next/image";
import la from '@/../../public/images/la.png'
import tphcm1 from '@/../../public/images/hcm1.jpg'
import hanoi from '@/../../public/images/hanoi.jpg'
import ListPost from "@/app/(home)/list-post";
import React from "react";

const items = [
  { name: 'Phòng trọ TPHCM', imageUrl: tphcm1, address: 'TPHCM' },
  { name: 'Phòng trọ Hà Nội', imageUrl: hanoi, address: 'Hà Nội' },
  { name: 'Phòng trọ Long An', imageUrl: la, address: 'Long An' }
]
export default function Home() {
  const [location, setLocation] = React.useState('')
  const handleSetAddress = (text: string) => {
    setLocation(text)
  }
  return (
    <>
      <h1 className="text-center mt-4 font-bold">Tìm chỗ thuê ưng ý</h1>
      <h3 className="mt-3 text-center">
        Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
      </h3>
      <div className="flex md:flex md:justify-around md:flex-row flex-col gap-3 justify-center items-center mt-4">
        {items.map((item, index) => {
          return (
            <div className="grid place-items-center rounded border cursor-pointer w-52" key={index} onClick={() => handleSetAddress(item.address)}>
              <div className="max-w-[250px] max-h-[250px]" >
                <Image
                  src={item.imageUrl}
                  alt="Hình trọ"
                  quality={100}
                  className="rounded border-red-400 bg-cover"
                />
              </div>
              <hr />
              <div className="text-center">
                <b>{item.name}</b>
              </div>
            </div>
          )
        })}
      </div>
      <h3 className=" ml-12 mt-8 text-xl font-bold">
        {location === '' ? "Tất cả phòng trọ" : (<>Phòng trọ ở {location}</>)}
      </h3>
      <div className="flex flex-row flex-1 justify-center items-center mt-4 mx-12 gap-3">
        <div className="w-2/3 border rounded" style={{ backgroundColor: '#FFF9F3' }}>
          <ListPost location={location} />
        </div>
        <div style={{ backgroundColor: "#F5F5F5" }} className="w-1/3 flex flex-col border rounded p-4 hidden xl:block ">
          <div className="mb-4">
            <h3 className="font-bold">Danh mục cho thuê</h3>
            <ul className="ml-4 cursor-pointer">
              <li>Cho thuê trọ</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Thuê theo giá</h3>
            <ul className="ml-4 cursor-pointer">
              <li>Dưới 1 triệu</li>
              <li>Trên 1 triệu</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Xem theo diện tích</h3>
            <ul className="ml-4 cursor-pointer">
              <li>Dưới 20 m<sup>2</sup></li>
              <li>Trên 20 m<sup>2</sup></li>
            </ul>
          </div>
        </div>
      </div>
    </>

  );
}
