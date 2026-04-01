"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className="bg-white shadow-lg rounded-xl p-5 mb-8 flex justify-center items-center">
            <ul className="flex flex-row justify-center items-center gap-6">
                <li>
                    <Link
                        href="/"
                        className={`text-gray-700 font-semibold hover:text-blue-600 px-4 py-2 transition-colors duration-200 rounded-md hover:bg-blue-50 ${pathname === '/' ? 'text-blue-600 bg-blue-50' : ''}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={`text-gray-700 font-semibold hover:text-purple-600 px-4 py-2 transition-colors duration-200 rounded-md hover:bg-purple-50 ${pathname === '/about' ? 'text-purple-600 bg-purple-50' : ''}`}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/products"
                        className={`text-gray-700 font-semibold hover:text-pink-600 px-4 py-2 transition-colors duration-200 rounded-md hover:bg-pink-50 ${pathname === '/products' ? 'text-pink-600 bg-pink-50' : ''}`}
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link
                        href="/posts"
                        className={`text-gray-700 font-semibold hover:text-green-600 px-4 py-2 transition-colors duration-200 rounded-md hover:bg-green-50 ${pathname === '/posts' ? 'text-green-600 bg-green-50' : ''}`}
                    >
                        Posts
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
