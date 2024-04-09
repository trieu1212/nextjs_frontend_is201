'use client'
import Nav from "@/components/ui/nav";
import Image from "next/image";
import hcm from '@/../../public/images/hcm.png'
import { useRouter } from "next/navigation";
import ListPost from "@/app/(home)/list-post";

const items = [
  { name: 'Phòng trọ TPHCM', imageUrl: hcm },
  { name: 'Phòng trọ Hà Nội', imageUrl: hcm },
  { name: 'Phòng trọ Long An', imageUrl: hcm }
]
const location = () => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="rounded border" key={index}>
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
    </>
  )
}
export default function Home() {
  return (
    <>
      <Nav />
      <h1 className="text-center mt-4 font-bold">Tìm chỗ thuê ưng ý</h1>
      <h3 className="mt-3 text-center">
        Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
      </h3>
      <div className="flex justify-around mt-8">
        {location()}
      </div>
      <div className="flex flex-row flex-1 justify-center items-center m-12">
        <div className="w-2/3">
          <ListPost/>
        </div>
        <div className="w-1/3">
          cc
        </div>
      </div>
    </>

  );
}
