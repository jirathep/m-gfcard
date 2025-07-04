import { BalanceCard } from "@/components/dashboard/balance-card";
import { PaymentMethods } from "@/components/dashboard/payment-methods";
import { TransactionHistory } from "@/components/dashboard/transaction-history";
import { Wallet } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Wallet className="h-6 w-6 text-primary" />
              <span className="font-bold">MeGiftcard</span>
            </a>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <BalanceCard />
            <TransactionHistory />
          </div>
          <div className="lg:col-span-1">
            <PaymentMethods />
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
