import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

export const RedCardIcon = ({ withPlus = false, className = '' }: { withPlus?: boolean, className?: string }) => (
    <div className={`relative inline-block ${className}`}>
        <div className="w-8 h-6 rounded border-2 border-red-500 bg-red-50 p-0.5 flex flex-col justify-between">
            <div className="h-1 bg-red-200 rounded-sm"></div>
            <div className="flex justify-end items-center gap-0.5">
                <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                <div className="w-1 h-1 bg-red-400 rounded-full"></div>
            </div>
        </div>
        {withPlus && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full border-2 border-white">
                <span>+</span>
            </div>
        )}
    </div>
);


export function BalanceCard({ balance }: { balance: number }) {
    const currentBalance = balance;

    return (
        <Card className="shadow-lg rounded-2xl w-full">
            <CardContent className="p-4">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow">
                      <RedCardIcon />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">My Balance</p>
                        <p className="text-2xl font-bold text-gray-800">
                            <span className="text-xl font-normal mr-1">฿</span>{currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
                    <RefreshCw className="h-3 w-3" />
                    <span>Last updated today, 13:59</span>
                </div>
            </CardContent>
        </Card>
    );
}
