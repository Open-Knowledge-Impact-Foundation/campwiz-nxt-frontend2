export const RoundStatus = {
  PENDING: "PENDING",
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
} as const;

export type RoundStatus =
  (typeof RoundStatus)[keyof typeof RoundStatus];