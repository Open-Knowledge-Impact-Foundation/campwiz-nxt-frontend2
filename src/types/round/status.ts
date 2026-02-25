export const RoundStatus = {
    PENDING: 'PENDING',
    IMPORTING: 'IMPORTING',
    DISTRIBUTING: 'DISTRIBUTING',
    EVALUATING: 'EVALUATING',
    REJECTED: 'REJECTED',
    CANCELLED: 'CANCELLED',
    PAUSED: 'PAUSED',
    SCHEDULED: 'SCHEDULED',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
    ARCHIVED: 'ARCHIVED',
} as const;

export type RoundStatus = typeof RoundStatus[keyof typeof RoundStatus];
