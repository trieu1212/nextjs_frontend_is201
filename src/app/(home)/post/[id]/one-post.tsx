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
  interface IService {
    id:number;
    name:string;
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
    service: IService;
    images: IImages[];
  }
const OnePost = (props : {id:string}) => {
    const {id} = props
    const [post,setPost] = useState<IPost>()
    useEffect(()=>{
        const getOnePost = async()=>{
            const response = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/posts/${id}`,{
                headers:{
                    'Content-type': 'application/json'
                },
                method: 'GET'
            })
            const data = await response.json()
            const postData = data
            setPost(postData)
        }
        getOnePost()
    },[])
    console.log(post)
  return (
    <>
        <div className='flex justify-center items-center flex-col'>
            <div>
                {post?.name}
            </div>
            <div className='flex gap-1 justify-center items-center'>
                {post?.images && post.images.length>0 && post.images.map((image,index)=>{
                    return(
                        <div key={index}>
                            <Image
                                src={image.imageUrl}
                                alt={`image of ${image.id}`}
                                width={200}
                                height={250}
                            />
                        </div>
                    )
                })}
            </div>
            <div>
                {post?.description}
            </div>
        </div>
    </>
  )
}

export default OnePost