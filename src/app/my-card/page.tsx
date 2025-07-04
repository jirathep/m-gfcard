import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { GiftCard } from '@/components/my-card/gift-card';

const giftCards = [
  {
    value: 1000,
    valueText: "ONE THOUSAND BAHT",
    thaiText: "มูลค่าหนึ่งพันบาท",
    imageUrl: "https://placehold.co/600x380.png",
    dataAiHint: "flower bouquet",
    isPrimary: true,
  },
  {
    value: 300,
    valueText: "THREE HUNDRED BAHT",
    thaiText: "มูลค่าสามร้อยบาท",
    imageUrl: "https://placehold.co/600x380.png",
    dataAiHint: "pink lotus",
  },
  {
    value: 100,
    valueText: "ONE HUNDRED BAHT",
    thaiText: "มูลค่าหนึ่งร้อยบาท",
    imageUrl: "https://placehold.co/600x380.png",
    dataAiHint: "purple bellflower",
  },
];

export default function MyCardPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto max-w-md p-4 flex items-center gap-4">
          <Link href="/" className="p-2 -m-2 text-gray-800 hover:bg-gray-200 rounded-full">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">บัตรของฉัน ({giftCards.length})</h1>
        </div>
      </header>

      <main className="container mx-auto max-w-md p-4">
        <div className="space-y-4">
          {giftCards.map((card, index) => (
            <GiftCard
              key={index}
              value={card.value}
              valueText={card.valueText}
              thaiText={card.thaiText}
              imageUrl={card.imageUrl}
              dataAiHint={card.dataAiHint}
              isPrimary={card.isPrimary}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
