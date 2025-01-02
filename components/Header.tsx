import Link from 'next/link'
import { Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  return (
    <header className="w-full bg-green-50/50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Top Navigation */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-green-800">ReElectro</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/features" className="text-sm text-gray-700 hover:text-gray-900">
                Features
              </Link>
              <Link href="/process" className="text-sm text-gray-700 hover:text-gray-900">
                Our Process
              </Link>
              <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900">
                About Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/recycle">
              <Button className="bg-green-600 hover:bg-green-700">
                Recycle Now
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Corporate Buttons */}
        <div className="flex justify-center space-x-4 py-4 border-t border-gray-100">
          <Link href="/corporate/login">
            <Button 
              variant="outline" 
              className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            >
              Corporate Login
            </Button>
          </Link>
          <Link href="/corporate/signup">
            <Button className="bg-gray-900 hover:bg-gray-800">
              Corporate Signup
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

