import Link from "next/link"

export default function AboutLayout ({children} :{children: React.ReactNode}) {
    return (
        <>
            <nav className="fixed left-0 top-10 z-10 h-screen w-60 bg-gray-800">
                <ul className="text-cyan-300 p-4 ">
                    <Link href="/">
                        <li className="mt-4 cursor-pointer">Home</li>
                    </Link>
                    <Link href="/about">
                        <li className="mt-4 cursor-pointer">About</li>
                    </Link>
                    <Link href="/about/profile">
                        <li className="mt-4 cursor-pointer">Profile</li>
                    </Link>
                </ul>
            </nav>
            <div>{children}</div>
        </>
    )
}