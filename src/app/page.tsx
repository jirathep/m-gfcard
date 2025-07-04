import { BalanceCard, RedCardIcon } from "@/components/dashboard/balance-card";
import { TransactionHistory } from "@/components/dashboard/transaction-history";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { Copy, QrCode } from "lucide-react";
import Link from "next/link";

const ActionButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center gap-2 text-center w-20">
    <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
      {icon}
    </div>
    <p className="text-sm font-medium text-gray-600">{label}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-gradient-to-br from-primary via-purple-600 to-accent text-white p-6 pb-28 rounded-b-[2.5rem]">
        <div className="container mx-auto max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 text-white/90">Account</h1>
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="font-light text-white/80">Account ID</span>
            <span className="font-semibold tracking-wider">12345 12345 12345</span>
            <Button variant="ghost" size="icon" className="h-6 w-6 text-white/80 hover:bg-white/20 rounded-full">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto max-w-md -mt-24 px-4">
        <div className="flex gap-4 items-stretch mb-6">
          <BalanceCard />
          <div className="flex-shrink-0">
            <Button variant="secondary" className="h-full w-24 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1 bg-white hover:bg-gray-100">
              <QrCode className="h-10 w-10 text-primary" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-8 py-4 mb-4">
          <ActionButton icon={<RedCardIcon withPlus className="scale-125"/>} label="Top up" />
          <Link href="/my-card">
            <ActionButton icon={<RedCardIcon className="scale-125"/>} label="My Card" />
          </Link>
        </div>

        <TransactionHistory />
      </main>

      <Toaster />
    </div>
  );
}
