'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx";


export default function Navbar() {

    return (
        <nav className="w-3/12 bg-gray-500 h-screen p-8">
            <Item path="/dashboard" title="Home" />
            <Item path="/dashboard/invoices" title="Invoices" />
            <Item path="/dashboard/customers" title="Customers" />
        </nav>
    )

}

function Item({ path, title }) {
    const currentPath = usePathname();
    return (
        <p  className=" my-3">
            <Link
                href={path}
                className={clsx(
                    "text-white text-center p-2 rounded",
                    {
                        "bg-blue-600": currentPath === path
                    }
                )}>
                {title}
            </Link>
        </p>
    )
}