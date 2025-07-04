import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getGiftCardById } from '@/lib/gift-card-data';
import { GiftCard } from '@/components/my-card/gift-card';
import { TopUpDialog } from '@/components/dashboard/top-up-dialog';
import { PaymentMethods } from '@/components/dashboard/payment-methods';
import { TransactionHistory } from '@/components/dashboard/transaction-history';
import { Toaster } from '@/components/ui/toaster';
import { notFound } from 'next/navigation';

export default function CardDetailPage({ params }: { params: { id: string } }) {
  const card = getGiftCardById(params.id);

  if (!card) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto max-w-md p-4 flex items-center gap-4">
          <Link href="/my-card" className="p-2 -m-2 text-gray-800 hover:bg-gray-200 rounded-full">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">Card Details</h1>
        </div>
      </header>

      <main className="container mx-auto max-w-md p-4 space-y-6 pb-10">
        <GiftCard
          value={card.value}
          valueText={card.valueText}
          thaiText={card.thaiText}
          imageUrl={card.imageUrl}
          dataAiHint={card.dataAiHint}
          isPrimary={card.isPrimary}
        />
        
        <TopUpDialog />
        
        <PaymentMethods />
        <TransactionHistory />
      </main>
      <Toaster />
    </div>
  );
}
