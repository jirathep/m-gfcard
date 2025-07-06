'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export function TopUpConfirmationDialog() {
  const router = useRouter();

  const handleConfirm = () => {
    // In a real app, you might trigger an API call for the top-up here.
    // For this request, we just navigate to the home page as requested.
    router.push('/');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="w-full h-12 text-lg font-bold rounded-full bg-red-600 hover:bg-red-700">
          เติมเงินเข้าสู่ Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>ยืนยันการเติมเงิน</AlertDialogTitle>
          <AlertDialogDescription>
            คุณต้องการใช้บัตรกิฟท์การ์ด เพื่อเติมเงิน ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>ไม่ใช่</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>ใช่</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
