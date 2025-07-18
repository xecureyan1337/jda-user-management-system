import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import UserList from '@/app/components/UserList'

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 underline">Users Management</h1>
          <Link href="/users/create" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Add New User
          </Link>
        </div>

        <UserList users={users} />
      </div>
    </div>
  )
}