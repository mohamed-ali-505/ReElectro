import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Footer from '@/components/Footer'
import Header from '@/components/Header' 

export default function CorporateLogin() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Corporate Login</CardTitle>
            <CardDescription>
              Access your corporate recycling dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" action="#">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="company@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Link 
              href="/corporate/forgot-password"
              className="text-sm text-green-600 hover:text-green-500"
            >
              Forgot your password?
            </Link>
            <div className="text-sm text-gray-500">
              Don't have a corporate account?{' '}
              <Link href="/corporate/signup" className="text-green-600 hover:text-green-500">
                Sign up here
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

