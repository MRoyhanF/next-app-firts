import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();

  // console.log(session, status);
  return (
    <nav className="flex bg-gray-800 font-bold py-2 px-5 justify-between">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-4">
          <Link href="/">
            <li className={`mr-6 ${pathname === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}>Home</li>
          </Link>
          <Link href="/about">
            <li className={`mr-6 ${pathname === "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}>About</li>
          </Link>
          <Link href="/about/profile">
            <li className={`mr-6 ${pathname === "/about/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}>Profile</li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <div className="flex">
            <h4 className="text-white">{session?.user?.fullName}</h4>
            <button className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer" onClick={() => signOut()}>
              Logout
            </button>
          </div>
        ) : (
          <button className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer" onClick={() => signIn()}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
