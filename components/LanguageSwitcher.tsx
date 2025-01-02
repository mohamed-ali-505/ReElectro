'use client'

import { Button } from "@/components/ui/button"
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="text-gray-700 hover:bg-transparent hover:text-gray-900"
    >
      <Globe className="h-5 w-5 mr-2" />
      العربية
    </Button>
  )
}

