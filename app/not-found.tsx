import React from 'react'
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>

      <p className="mt-4 text-xl text-gray-600 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
      >
        ← Go back to Home
      </Link>
    </div>
  )
}

export default NotFound