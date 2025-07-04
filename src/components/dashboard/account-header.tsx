'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy, Check } from 'lucide-react';

interface AccountHeaderProps {
  accountId: string;
}

export function AccountHeader({ accountId }: AccountHeaderProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    if (accountId && accountId !== 'N/A' && accountId !== 'Loading...' && accountId !== 'Error') {
      navigator.clipboard.writeText(accountId);
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: "Account ID copied to clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="container mx-auto max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4 text-white/90">Account</h1>
      <div className="flex items-center justify-center gap-2 text-lg">
        <span className="font-light text-white/80">Account ID</span>
        <span className="font-semibold tracking-wider">{accountId}</span>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-6 w-6 text-white/80 hover:bg-white/20 rounded-full" 
          onClick={handleCopy} 
          disabled={!accountId || accountId === 'N/A' || accountId === 'Loading...' || accountId === 'Error'}
        >
          {isCopied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
