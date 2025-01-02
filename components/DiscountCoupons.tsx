import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface Coupon {
  id: number;
  name: string;
  address: string;
  specialization: string;
  phoneNumber: string;
  discountPercentage: number;
}

const coupons: Coupon[] = [
  { id: 1, name: "إسلام جابر ماهر", address: "المنصورة", specialization: "طب أسنان", phoneNumber: "01223925202", discountPercentage: 25 },
  { id: 2, name: "سعد محمد الحسيني", address: "طلخا", specialization: "طب الأطفال وحديثي الولادة", phoneNumber: "01005264482", discountPercentage: 30 },
  { id: 3, name: "محمد فتحي الزناتي", address: "البرامون", specialization: "باطنة - كبد - سكر", phoneNumber: "01011562676", discountPercentage: 20 },
  { id: 4, name: "محمد الخطيب", address: "المنصورة", specialization: "جراحة العظام والكسور والعمود الفقري", phoneNumber: "01090043408", discountPercentage: 35 },
  { id: 5, name: "إلهام السيد العشري", address: "المنصورة", specialization: "طب الأطفال وحديثي الولادة", phoneNumber: "01006688684", discountPercentage: 15 },
  { id: 6, name: "أسامة أبو السعد صقر", address: "طلخا", specialization: "دكتوراة التوليد وامراض النساء", phoneNumber: "01012052428", discountPercentage: 40 },
  { id: 7, name: "بيولاب", address: "البرامون", specialization: "جميع أنواع التحاليل", phoneNumber: "01098018120", discountPercentage: 45 },
  { id: 8, name: "الفا للتحاليل الطبية", address: "البرامون", specialization: "جميع أنواع التحاليل", phoneNumber: "01200413678", discountPercentage: 10 },
  { id: 9, name: "الرواد للتحاليل الطبية", address: "الدنابيق", specialization: "جميع أنواع التحاليل", phoneNumber: "01223496658", discountPercentage: 50 },
  { id: 10, name: "حياة لاب", address: "طلخا", specialization: "جميع أنواع التحاليل", phoneNumber: "01060571533", discountPercentage: 30 },
];

export default function DiscountCoupons({ onSelect }: { onSelect: (coupon: Coupon | null) => void }) {
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  const handleSelect = (coupon: Coupon | null) => {
    setSelectedCoupon(coupon);
    onSelect(coupon);
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Select a discount coupon:</h3>
      <RadioGroup onValueChange={(value:string) => {
        const selected = coupons.find((c) => c.id === parseInt(value!));
        handleSelect(selected || null);
      }}>
        <div className="space-y-4">
          {coupons.map((coupon) => (
            <div key={coupon.id} className="flex items-center space-x-2">
              <RadioGroupItem value={coupon.id.toString()} id={`coupon-${coupon.id}`} />
              <Label htmlFor={`coupon-${coupon.id}`} className="flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-right">{coupon.name} - {coupon.specialization}</span>
                  <span className="font-semibold text-green-600">{coupon.discountPercentage}% discount</span>
                </div>
                <div className="text-sm text-gray-500 text-right">{coupon.address} - {coupon.phoneNumber}</div>
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
      {selectedCoupon && (
        <div className="mt-4 p-4 bg-green-50 rounded-md">
          <p className="font-semibold">Selected coupon:</p>
          <p className="text-right">{selectedCoupon.name} - {selectedCoupon.discountPercentage}% discount</p>
        </div>
      )}
      <Button 
        className="mt-4" 
        variant="outline" 
        onClick={() => { setSelectedCoupon(null); onSelect(null); }}
      >
        Clear Selection
      </Button>
    </div>
  );
}