import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getGiftCardById } from '@/lib/gift-card-data';
import { GiftCard } from '@/components/my-card/gift-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { notFound } from 'next/navigation';

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center text-sm">
    <p className="text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800">{value}</p>
  </div>
);

export default async function CardDetailPage({ params }: { params: { id: string } }) {
  const card = await getGiftCardById(params.id);

  if (!card) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto max-w-md p-4 flex items-center gap-4">
          <Link href="/my-card" className="p-2 -m-2 text-gray-800 hover:bg-gray-200 rounded-full">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">รายละเอียดบัตร</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto max-w-md p-4 space-y-6 pb-28">
        <GiftCard
          value={card.value}
          valueText={card.valueText}
          thaiText={card.thaiText}
          imageUrl={card.imageUrl}
          dataAiHint={card.dataAiHint}
          isPrimary={card.isPrimary}
        />
        
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <div className="text-center">
              <p className="text-gray-500 text-sm">มูลค่า</p>
              <p className="text-3xl font-bold text-destructive">
                {card.value.toLocaleString('en-US')} <span className="text-lg font-normal text-gray-800">บาท</span>
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <DetailRow label="GIFT CARD NO" value={card.cardNumber} />
              <DetailRow label="วันที่นำเข้า" value={card.importDate} />
              <DetailRow label="วันหมดอายุ" value={card.expiryDate} />
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
         <div className="container mx-auto max-w-md p-4">
           <Button variant="destructive" className="w-full h-12 text-lg font-bold rounded-full bg-red-600 hover:bg-red-700">
            เติมเงินเข้าสู่ Account
           </Button>
         </div>
      </footer>

      <Toaster />
    </div>
  );
}
