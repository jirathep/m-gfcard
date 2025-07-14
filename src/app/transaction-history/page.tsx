'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from "@/lib/utils";
import { RedCardIcon } from '@/components/dashboard/balance-card';

interface Transaction {
    id: string;
    logo: string;
    dataAiHint: string;
    description: string;
    date: string;
    amount: number;
    type: string;
}

const TransactionItem = ({ transaction }: { transaction: Transaction }) => (
    <Card className="shadow-sm rounded-2xl hover:shadow-md transition-shadow">
        <CardContent className="p-3 flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                {transaction.logo ? (
                    <Image
                        src={transaction.logo}
                        alt={transaction.description}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                        data-ai-hint={transaction.dataAiHint}
                    />
                ) : (
                    <RedCardIcon withPlus />
                )}
            </div>
            <div className="flex-grow">
                <p className="font-semibold text-gray-800">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.type}</p>
            </div>
            <div className="text-right">
                <p className={cn(
                    "font-bold text-md",
                    transaction.amount > 0 ? "text-chart-2" : "text-destructive"
                )}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    <span className="text-sm font-normal text-gray-500 ml-1">THB</span>
                </p>
                <p className="text-xs text-gray-400">Success, {transaction.date}</p>
            </div>
        </CardContent>
    </Card>
);

const TransactionSkeleton = () => (
    <Card className="shadow-sm rounded-2xl">
        <CardContent className="p-3 flex items-center gap-4">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div className="flex-grow space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="text-right space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-3 w-24" />
            </div>
        </CardContent>
    </Card>
);


export default function TransactionHistoryPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("https://dev2.promptnow.com:21172/transaction-history", { method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ "account-id": "123451234512346" }),cache: 'no-store' });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTransactions(data.transactions || []);
            } catch (error) {
                console.error("Error fetching transaction history:", error);
                setTransactions([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
             <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="container mx-auto max-w-md p-4 flex items-center gap-4">
                    <Link href="/" className="p-2 -m-2 text-gray-800 hover:bg-gray-200 rounded-full" aria-label="Back to Home">
                        <ChevronLeft className="h-6 w-6" />
                    </Link>
                    <h1 className="text-xl font-semibold text-gray-800">Transaction History</h1>
                </div>
            </header>

            <main className="flex-grow container mx-auto max-w-md p-4">
                <div className="space-y-3">
                    {isLoading ? (
                        Array.from({ length: 10 }).map((_, i) => <TransactionSkeleton key={i} />)
                    ) : transactions.length > 0 ? (
                        transactions.map((transaction) => (
                           <TransactionItem key={transaction.id} transaction={transaction} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 py-8">No transactions found.</p>
                    )}
                </div>
            </main>
        </div>
    );
}
