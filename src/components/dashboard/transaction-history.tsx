'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { RedCardIcon } from "./balance-card";
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

interface Transaction {
    id: string;
    logo: string;
    dataAiHint: string;
    description: string;
    date: string;
    amount: number;
    type: string;
}

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

export function TransactionHistory() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("https://dev2.promptnow.com:21172/transaction-history", { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTransactions(data.transactions || []);
            } catch (error) {
                console.error("Error fetching transaction history:", error);
                setTransactions([]); // Set to empty array on error
            } finally {
                setIsLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Transaction History</h2>
                <Link href="/transaction-history">
                    <Button variant="link" className="text-primary font-semibold">View all</Button>
                </Link>
            </div>
            <div className="text-sm font-medium text-gray-500">Today</div>
            <div className="space-y-3">
                {isLoading ? (
                    <>
                        <TransactionSkeleton />
                        <TransactionSkeleton />
                        <TransactionSkeleton />
                        <TransactionSkeleton />
                        <TransactionSkeleton />
                    </>
                ) : (
                    transactions.slice(0, 5).map((transaction) => (
                        <Card key={transaction.id} className="shadow-sm rounded-2xl hover:shadow-md transition-shadow">
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
                    ))
                )}
            </div>
        </div>
    );
}
