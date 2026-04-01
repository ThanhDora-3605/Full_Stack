"use client";

import { useRouter } from "next/navigation";


export default function Button() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }
    return (
        <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleClick}>
                click me
            </button>
        </div>
    );
}
