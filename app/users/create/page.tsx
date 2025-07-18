import UserForm from '@/app/components/UserForm'

export default async function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Users Management</h1>
        
        {/* Tampilkan form untuk tambah user */}
        <UserForm />

      </div>
    </div>
  )
}