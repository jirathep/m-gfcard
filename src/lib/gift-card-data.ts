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

const API_URL = "https://pos.promptnow.com:13443/pos_pn/elephant/mcard/gift-card-data.php";

export async function getGiftCards(): Promise<GiftCardData[]> {
    try {
        const response = await fetch(API_URL, { cache: 'no-store' });
        if (!response.ok) {
            console.error('Failed to fetch gift cards, status:', response.status);
            return [];
        }
        const data = await response.json();
        return data.cards || [];
    } catch (error) {
        console.error("Error fetching gift cards:", error);
        return [];
    }
}

export async function getGiftCardById(id: string): Promise<GiftCardData | undefined> {
    const cards = await getGiftCards();
    return cards.find(card => card.id === id);
}
