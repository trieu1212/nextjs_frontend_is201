'use client'
import Link from "next/link";

import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className="p-4" style={{ backgroundColor: "#1266DD" }}>
                <ul className="flex justify-around">
                    <li>
                        <Link href='/' className="text-white">Trang chủ</Link>
                    </li>
                    <li>
                        <Link href='/service' className="text-white">Bảng giá dịch vụ</Link>
                    </li>
                    <li>
                        <Link href='/news' className="text-white">Tin tức</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav