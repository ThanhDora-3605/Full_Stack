"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InputFiler() {
    const [keyword, setKeyword] = useState("");
    const router = useRouter();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
        router.push(`/products?status=${e.target.value}`);
    }

    const handleSearch = () => {
        console.log(keyword);
    }

    return (
        <div>
            <input type="text" className="border border-gray-300 rounded-md p-2" placeholder="Search" value={keyword} onChange={onChange} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSearch}>Search</button>
        </div>
    )
}
