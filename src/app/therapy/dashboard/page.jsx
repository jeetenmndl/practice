
import Layout from '@/components/section/Layout'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

export default async function PsychiatristPage() {
    const user = await currentUser();
    console.log(user.id)

  return (
    <Layout title="Psychiatrist Dashboard">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Welcome, Doctor!</h2>
          <div className="mt-5">
            <Link href="/therapy/session" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Join Video Call
            </Link>
          </div>
        </div>
      </div>
      </Layout>
  )
}

