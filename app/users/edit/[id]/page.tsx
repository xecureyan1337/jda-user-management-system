import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import UserForm from '@/app/components/UserForm'

interface EditUserPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EditUserPage({ params }: EditUserPageProps) {
  const { id } = await params
  
  const user = await prisma.user.findUnique({
    where: { id }
  })

  if (!user) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UserForm user={user} isEditing={true} />
      </div>
    </div>
  )
}