'use client'
import envConfig from '@/config'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface IUser {
  id: number;
  username: string;
  email: string;
  phone: number;
  avatar: string;
}

interface IImages {
  id: number;
  imageUrl: string;
}

interface IPost {
  id: number;
  name: string;
  description: string;
  status: boolean;
  roomType: string;
  price: number;
  address: string;
  arcreage: number;
  user: IUser;
  images: IImages[];
}
const ListPost = (props: { location: string }) => {
  const { location } = props;
  const [posts, setPosts] = useState<IPost[]>([]);
  function formatMoney(amount: number): string {
    if (amount >= 1000000000) {
      return (amount / 1000000000).toFixed(1) + ' tỷ';
    } else if (amount >= 1000000) {
      const trAmount = amount / 1000000;
      return trAmount % 1 === 0 ? trAmount.toFixed(0) + ' tr' : trAmount.toFixed(1) + ' tr';
    } else {
      return amount.toFixed(0) + ' đ';
    }
  }
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/posts?address=${location}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
        });

        if (!res.ok) {
          throw new Error('Không lấy được các bài post');
        }

        const data = await res.json();
        const receivedPosts: IPost[] = data.data;
        setPosts(receivedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    getPosts();
  }, [location]);
  console.log(posts)
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className='flex justify-between items-center ml-8 px-4 py-4 gap-6' style={{ backgroundColor: '#FFF9F3' }}>
              <Image 
                src={post.images[0].imageUrl} 
                height={300} width={300} 
                alt={`Hình ảnh phòng ${post.images[0].id}`} 
                quality={100}
                className='w-1/3'
              />
              <div className='w-2/3 flex flex-col justify-center gap-10 rounded border-red-400'>
                  <div>
                    <h1 className='text-center font-bold'>{post.name}</h1>
                  </div>
                  <div className='flex justify-between items-center gap-12 font-bold'>
                      <p style={{color:"#25C784"}}>{formatMoney(post.price)}/tháng</p>
                      <p>{post.arcreage}/m<sup>2</sup></p>
                      <p>{post.address}</p>
                  </div>
                  <div>
                      <h3>
                        {post.description}
                      </h3>
                  </div>
                  <div className='flex justify-between'>
                      <div>
                        {post.user.username} ({post.user.phone ? post.user.phone : '123456789'})
                      </div>
                      <div>
                        Email: {post.user.email}
                      </div>
                  </div>
              </div>
          </div>
        ))
      ) : (
        <p>Không có bài đăng nào!</p>
      )}
    </>
  );
};

export default ListPost;
