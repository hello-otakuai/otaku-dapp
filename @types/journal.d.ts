interface TradeLog {
    token: string;
    amount: number;
    profit: number; // SIGNED
    motive: "news" | "pattern" | "influencer" | "sentiment" | "others";
    category: string[]; // "Memes", "L1" "AI Memes"
    comment: string;
}
