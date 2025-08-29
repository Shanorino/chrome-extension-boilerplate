export type SectionKey =
  | "assets"
  | "attachments"
  | "spareParts"
  | "schedules"
  | "workOrders"
export type ActionKey =
  | "overview"
  | "health"
  | "recent"
  | "search"
  | "inventory"
  | "alerts"
  | "today"
  | "upcoming"
  | "open"
  | "completed"

export type ActionId = `${SectionKey}.${ActionKey}`

export type ActionCtx = {
  tabId?: number
  // add anything you need later: selected item id, org name, etc.
}

export type ActionHandler = (ctx: ActionCtx) => Promise<void> | void

export const toActionId = (section: SectionKey, action: ActionKey): ActionId =>
  `${section}.${action}`
