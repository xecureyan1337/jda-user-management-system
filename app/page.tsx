import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 selection:bg-amber-400">
            Welcome to User Management System
          </h1>
          <p className="text-xl text-gray-600 mb-12 selection:bg-red-400 selection:text-white">
            A simple CRUD application built with Next.js, TypeScript, and Tailwind CSS
          </p>
          
          <div className="space-y-4">
            <Link
              href="/users"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Manage Users
            </Link>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Create</h3>
                <p className="text-gray-600">Add new users to the system</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Read</h3>
                <p className="text-gray-600">View all users in a table format</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Update</h3>
                <p className="text-gray-600">Edit existing user information</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete</h3>
                <p className="text-gray-600">Remove users from the system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}