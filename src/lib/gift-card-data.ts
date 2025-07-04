export interface GiftCardData {
    id: string;
    value: number;
    valueText: string;
    thaiText: string;
    imageUrl: string;
    dataAiHint: string;
    isPrimary?: boolean;
}

export const giftCards: GiftCardData[] = [
  {
    id: '1',
    value: 1000,
    valueText: "ONE THOUSAND BAHT",
    thaiText: "มูลค่าหนึ่งพันบาท",
    imageUrl: "https://placehold.co/600x380.png",
    dataAiHint: "flower bouquet",
    isPrimary: true,
  },
  {
    id: '2',
    value: 300,
    valueText: "THREE HUNDRED BAHT",
    thaiText: "มูลค่าสามร้อยบาท",
    imageUrl: "https://placehold.co/600x380.png",
    dataAiHint: "pink lotus",
  },
  {
    id: '3',
    value: 100,
    valueText: "ONE HUNDRED BAHT",
    thaiText: "มูลค่าหนึ่งร้อยบาท",
    imageUrl: "https://placehold.co/600x380.png",
    dataAiHint: "purple bellflower",
  },
];

export function getGiftCardById(id: string): GiftCardData | undefined {
    return giftCards.find(card => card.id === id);
}
