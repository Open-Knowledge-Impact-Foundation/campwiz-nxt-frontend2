export const CampaignType = {
  COMMONS: "COMMONS",
} as const;

export type CampaignType =
  (typeof CampaignType)[keyof typeof CampaignType];