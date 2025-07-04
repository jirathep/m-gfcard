import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
    { id: 'txn_1', description: 'Coffee Shop', date: '2023-10-26', amount: -4.50, type: 'Purchase' },
    { id: 'txn_2', description: 'Top-Up', date: '2023-10-25', amount: 50.00, type: 'Top-up' },
    { id: 'txn_3', description: 'Bookstore', date: '2023-10-24', amount: -15.75, type: 'Purchase' },
    { id: 'txn_4', description: 'Online Subscription', date: '2023-10-22', amount: -9.99, type: 'Purchase' },
    { id: 'txn_5', description: 'Top-Up', date: '2023-10-20', amount: 25.00, type: 'Top-up' },
];

export function TransactionHistory() {
    return (
        <Card className="shadow-lg rounded-xl">
            <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>A record of your recent transactions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[60px]"></TableHead>
                            <TableHead>Details</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow key={transaction.id} className="hover:bg-muted/50">
                                <TableCell>
                                    <div className="flex items-center justify-center">
                                      {transaction.amount > 0 ? 
                                          <ArrowUpCircle className="h-5 w-5 text-chart-2" /> : 
                                          <ArrowDownCircle className="h-5 w-5 text-destructive" />
                                      }
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">{transaction.description}</div>
                                    <div className="text-sm text-muted-foreground">{transaction.type}</div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell text-muted-foreground">{transaction.date}</TableCell>
                                <TableCell className={cn(
                                    "text-right font-semibold tabular-nums",
                                    transaction.amount > 0 ? "text-chart-2" : "text-destructive"
                                )}>
                                    {transaction.amount > 0 ? `+${transaction.amount.toFixed(2)}` : transaction.amount.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
