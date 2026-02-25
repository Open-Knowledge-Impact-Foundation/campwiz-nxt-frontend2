import { RoundStatus } from "./status";

export interface Round {
    roundId: string;
    campaignId: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: RoundStatus;
    createdAt: string;
    createdById: string;
}
