"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Plus, CheckCircle, Loader2 } from "lucide-react";

const topUpSchema = z.object({
  amount: z.coerce.number().min(5, { message: "Amount must be at least $5." }).max(500, { message: "Amount cannot exceed $500." }),
});

export function TopUpDialog() {
  const [open, setOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof topUpSchema>>({
    resolver: zodResolver(topUpSchema),
    defaultValues: {
      amount: 20,
    },
  });

  async function onSubmit(values: z.infer<typeof topUpSchema>) {
    setIsProcessing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsProcessing(false);
    setIsSuccess(true);

    toast({
      title: "Success!",
      description: `Your balance has been increased by $${values.amount.toFixed(2)}.`,
    });
    
    // Reset form and close dialog after a delay
    setTimeout(() => {
      setOpen(false);
      // Brief delay before resetting state to avoid UI flicker while dialog closes
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 300);
    }, 1500);
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      if (!isOpen) {
        setIsSuccess(false);
        setIsProcessing(false);
        form.reset();
      }
    }}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" /> Top-Up Balance
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Add Funds</DialogTitle>
              <DialogDescription>
                Enter the amount you'd like to add to your balance.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount ($)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit" disabled={isProcessing} className="w-full mt-4 bg-accent hover:bg-accent/90">
                    {isProcessing ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    {isProcessing ? "Processing..." : "Add Funds"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 animate-in fade-in-0 zoom-in-75" />
            <h2 className="mt-4 text-2xl font-bold">Top-Up Successful!</h2>
            <p className="mt-2 text-muted-foreground">
              Your balance has been updated.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
