'use client'
import React from 'react';
import Link from 'next/link';


function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-gray-800 p-4">
            <div className="logo">
                <h1 className="text-white text-2xl font-bold">Expense Tracker</h1>
            </div>
            <div className="flex space-x-4">
                <Link href="/"><p className="text-white">All Users</p></Link>
                <Link href="/add"><p className="text-white">Add Users</p></Link>
            </div>
        </nav>
    )
}

export default Navbar
