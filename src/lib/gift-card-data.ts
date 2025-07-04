export interface GiftCardData {
    id: string;
    value: number;
    valueText: string;
    thaiText: string;
    imageUrl: string;
    dataAiHint: string;
    isPrimary?: boolean;
    cardNumber: string;
    importDate: string;
    expiryDate: string;
}

export const giftCards: GiftCardData[] = [
  {
    id: '1',
    value: 1000,
    valueText: "ONE THOUSAND BAHT",
    thaiText: "มูลค่าหนึ่งพันบาท",
    imageUrl: "https://pos.promptnow.com:13443/pos_pn/elephant/mcard/img/1000.png",
    dataAiHint: "flower bouquet",
    isPrimary: true,
    cardNumber: '319000000',
    importDate: '27 พฤษภาคม 2025',
    expiryDate: '27 พฤษภาคม 2026',
  },
  {
    id: '2',
    value: 300,
    valueText: "THREE HUNDRED BAHT",
    thaiText: "มูลค่าสามร้อยบาท",
    imageUrl: "https://pos.promptnow.com:13443/pos_pn/elephant/mcard/img/300.png",
    dataAiHint: "pink lotus",
    cardNumber: '319000001',
    importDate: '28 พฤษภาคม 2025',
    expiryDate: '28 พฤษภาคม 2026',
  },
  {
    id: '3',
    value: 100,
    valueText: "ONE HUNDRED BAHT",
    thaiText: "มูลค่าหนึ่งร้อยบาท",
    imageUrl: "https://pos.promptnow.com:13443/pos_pn/elephant/mcard/img/100.png",
    dataAiHint: "purple bellflower",
    cardNumber: '319000002',
    importDate: '29 พฤษภาคม 2025',
    expiryDate: '29 พฤษภาคม 2026',
  },
];

export function getGiftCardById(id: string): GiftCardData | undefined {
    return giftCards.find(card => card.id === id);
}
