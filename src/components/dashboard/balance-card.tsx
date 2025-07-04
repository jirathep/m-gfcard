import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TopUpDialog } from "./top-up-dialog";
import { Wallet } from "lucide-react";

export function BalanceCard() {
    const currentBalance = 123.45;

    return (
        <Card className="shadow-lg rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                    <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                    <CardDescription>Available funds in your account</CardDescription>
                </div>
                <Wallet className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold">${currentBalance.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground pt-1">This is your active gift card balance.</p>
                <div className="mt-6">
                    <TopUpDialog />
                </div>
            </CardContent>
        </Card>
    );
}
