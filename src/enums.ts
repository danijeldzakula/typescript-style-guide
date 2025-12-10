export const EStatus = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
} as const;

export type TStatus = (typeof EStatus)[keyof typeof EStatus];
