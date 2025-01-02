import { ReactNode } from 'react'
import Link from 'next/link'
import { Building2, LineChart, Package2, Settings, LogOut } from 'lucide-react'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/corporate/dashboard" className="flex items-center">
                <Building2 className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-green-800">ReElectro Corporate</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/corporate/dashboard/settings" className="p-2 text-gray-500 hover:text-gray-700">
                <Settings className="h-6 w-6" />
              </Link>
              <Link href="/corporate/logout" className="p-2 text-gray-500 hover:text-gray-700">
                <LogOut className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <aside className="w-64 bg-white shadow rounded-lg h-fit">
            <nav className="p-4 space-y-2">
              <Link
                href="/corporate/dashboard"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md"
              >
                <LineChart className="h-5 w-5 mr-3" />
                Overview
              </Link>
              <Link
                href="/corporate/dashboard/recycling"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md"
              >
                <Package2 className="h-5 w-5 mr-3" />
                Recycling Requests
              </Link>
            </nav>
          </aside>

          <div className="flex-1 bg-white shadow rounded-lg p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

