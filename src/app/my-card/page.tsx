'use client';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { GiftCard } from '@/components/my-card/gift-card';
import { Button } from '@/components/ui/button';
import { getGiftCards, GiftCardData } from '@/lib/gift-card-data';
import { useEffect, useState } from 'react';

export default function MyCardPage() {
  const [giftCards, setGiftCards] = useState<GiftCardData[]>([]);

  useEffect(() => {
    async function loadGiftCards() {
      const cards = await getGiftCards();
      setGiftCards(cards);
    }
    loadGiftCards();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto max-w-md p-4 flex items-center gap-4">
          <Link href="/" className="p-2 -m-2 text-gray-800 hover:bg-gray-200 rounded-full" aria-label="Back to Home">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">บัตรของฉัน ({giftCards.length})</h1>
        </div>
      </header>

      <main className="container mx-auto max-w-md p-4">
        <div className="space-y-6">
          {giftCards.map((card) => (
            <div key={card.id}>
              <Link href={`/my-card/${card.id}`} aria-label={`View details for card ${card.id}`}>
                <GiftCard
                  value={card.value}
                  valueText={card.valueText}
                  thaiText={card.thaiText}
                  imageUrl={card.imageUrl}
                  dataAiHint={card.dataAiHint}
                  isPrimary={card.isPrimary}
                />
              </Link>
              <Button variant="destructive" className="w-full mt-2 hidden">
                Delete
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
