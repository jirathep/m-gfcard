import { BalanceCard, RedCardIcon } from "@/components/dashboard/balance-card";
import { TransactionHistory } from "@/components/dashboard/transaction-history";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { QrCode } from "lucide-react";
import Link from "next/link";
import { AccountHeader } from "@/components/dashboard/account-header";

const ActionButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center gap-2 text-center w-20">
    <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
      {icon}
    </div>
    <p className="text-sm font-medium text-gray-600">{label}</p>
  </div>
);

interface AccountData {
  "account-id": string;
  balance: number;
  datetime: string;
}

async function getAccountData(): Promise<AccountData> {
  try {
    const response = await fetch("https://pos.promptnow.com:13443/pos_pn/elephant/mcard/account.php", { cache: 'no-store' });
    if (!response.ok) {
        console.error('Failed to fetch account data, status:', response.status);
        return { "account-id": 'Loading...', balance: 0, datetime: '...' };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching account data:", error);
    return { "account-id": 'Error', balance: 0, datetime: 'unavailable' };
  }
}


export default async function Home() {
  const accountData = await getAccountData();
  const accountId = accountData?.['account-id'] || 'N/A';
  const balance = accountData?.balance || 0;
  const lastUpdated = accountData?.datetime || '';

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-gradient-to-br from-primary via-purple-600 to-accent text-white p-6 pb-28 rounded-b-[2.5rem]">
        <AccountHeader accountId={accountId} />
      </header>
      
      <main className="container mx-auto max-w-md -mt-24 px-4">
        <div className="flex gap-4 items-stretch mb-6">
          <BalanceCard balance={balance} lastUpdated={lastUpdated} />
          <div className="flex-shrink-0">
            <Button variant="secondary" className="h-full w-24 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1 bg-white hover:bg-gray-100">
              <QrCode className="h-12 w-12 text-primary" />
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
