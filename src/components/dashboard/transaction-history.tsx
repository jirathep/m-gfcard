import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { RedCardIcon } from "./balance-card";

const transactions = [
    { id: 'txn_1', logo: 'https://placehold.co/40x40.png', dataAiHint: 'gourmet market', description: 'Gourmet Market', date: '12:59', amount: -4370.50, type: 'Payment' },
    { id: 'txn_2', logo: 'https://placehold.co/40x40.png', dataAiHint: 'power mall', description: 'Power Mall', date: '11:59', amount: -12990.00, type: 'Payment' },
    { id: 'txn_3', logo: '', dataAiHint: '', description: 'Top-up', date: '10:59', amount: 35000.00, type: 'via Counter Service' },
];

export function TransactionHistory() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Transaction History</h2>
                <Button variant="link" className="text-primary font-semibold">View all</Button>
            </div>
            <div className="text-sm font-medium text-gray-500">Today</div>
            <div className="space-y-3">
                {transactions.map((transaction) => (
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
                ))}
            </div>
        </div>
    );
}
