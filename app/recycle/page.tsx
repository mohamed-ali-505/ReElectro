'use client'
import { Coupon } from "@/components/DiscountCoupons"; 
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiscountCoupons from '@/components/DiscountCoupons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function RecyclePage() {
  const [wantsCoupon, setWantsCoupon] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<null | Coupon>(null); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted', { wantsCoupon, selectedCoupon });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Recycling Request</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" required />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" required />
            </div>
            <div>
              <Label htmlFor="items">Items to be recycled</Label>
              <Textarea id="items" required value={''} onChange={() => {}} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="wantsCoupon" checked={wantsCoupon} onCheckedChange={(checked) => setWantsCoupon(checked as boolean)} />
              <Label htmlFor="wantsCoupon">I would like to receive a discount coupon</Label>
            </div>
            {wantsCoupon && (
              <DiscountCoupons onSelect={setSelectedCoupon} /> 
            )}
            <Button type="submit" className="w-full">Submit Request</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}