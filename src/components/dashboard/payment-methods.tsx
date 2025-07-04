import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus } from "lucide-react";

const cards = [
    { type: 'Visa', last4: '4242', expiry: '12/26' },
    { type: 'Mastercard', last4: '5555', expiry: '08/25' },
];

const MastercardIcon = () => (
  <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
    <rect width="36" height="24" rx="4" fill="#F8F9FA"/>
    <circle cx="13" cy="12" r="7" fill="#EB001B"/>
    <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
    <path d="M19.4382 12C19.4382 15.2531 16.5355 17.8333 13 17.8333C9.46445 17.8333 6.56177 15.2531 6.56177 12C6.56177 8.74686 9.46445 6.16667 13 6.16667C16.5355 6.16667 19.4382 8.74686 19.4382 12Z" fill="#FF5F00"/>
  </svg>
);

const VisaIcon = () => (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
      <rect width="36" height="24" rx="4" fill="#142688"/>
      <path d="M22.603 16.912H25.91V7.087H22.603V16.912ZM14.12 7.087L10.395 14.537L9.93 12.352C9.722 11.332 9.475 10.51 8.718 10.15L6.96 9.382V7.087H11.53L12.365 11.662L15.935 7.087H14.12ZM28.91 7.252C28.32 7.087 27.562 6.962 26.882 6.962C25.043 6.962 23.49 7.78 23.49 9.68C23.49 10.978 24.325 11.707 25.16 12.13L25.485 12.29C26.075 12.58 26.322 12.83 26.322 13.29C26.322 13.9 25.682 14.188 25.043 14.188C24.053 14.188 23.49 13.978 23.015 13.768L22.643 14.652C23.117 14.862 24.132 15.032 25.24 15.032C27.47 15.032 29.023 13.89 29.023 12.21C29.023 10.027 26.435 9.858 26.435 9.17C26.435 8.79 26.73 8.44 27.245 8.362C27.432 8.322 28.113 8.322 28.91 8.482V7.252Z" fill="white"/>
    </svg>
)

export function PaymentMethods() {
    const getCardIcon = (type: string) => {
        if (type === 'Visa') return <VisaIcon />;
        if (type === 'Mastercard') return <MastercardIcon />;
        return <CreditCard className="h-8 w-8 text-muted-foreground" />;
    };

    return (
        <Card className="shadow-lg rounded-xl">
            <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Your linked payment cards.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {cards.map((card, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4">
                            {getCardIcon(card.type)}
                            <div>
                                <p className="font-semibold">{card.type} ending in {card.last4}</p>
                                <p className="text-sm text-muted-foreground">Expires {card.expiry}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Card
                </Button>
            </CardContent>
        </Card>
    );
}
