export const CampaignType = {
    WIKI_LOVES_FOLKLORE: 'WIKI_LOVES_FOLKLORE',
    WIKI_LOVES_MONUMENTS: 'WIKI_LOVES_MONUMENTS',
    WIKI_LOVES_EARTH: 'WIKI_LOVES_EARTH',
    OTHERS: 'OTHERS',
} as const;

export type CampaignType = typeof CampaignType[keyof typeof CampaignType];
