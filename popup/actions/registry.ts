import type { ActionCtx, ActionHandler, ActionId } from "~types/actions"

const registry: {
  "assets.overview": () => Promise<{
    run: (ctx: ActionCtx) => Promise<void> | void
  }>
} = {
  // assets
  "assets.overview": () => import("~action-handlers/assets/overview")
  // "assets.health": () => import("../../actions/assets/health"),
  //
  // // attachments
  // "attachments.recent": () => import("../../actions/attachments/recent"),
  // "attachments.search": () => import("../../actions/attachments/search"),
  //
  // // spareParts
  // "spareParts.inventory": () => import("../../actions/spareParts/inventory"),
  // "spareParts.alerts": () => import("../../actions/spareParts/alerts"),
  //
  // // schedules
  // "schedules.today": () => import("../../actions/schedules/today"),
  // "schedules.upcoming": () => import("../../actions/schedules/upcoming"),
  //
  // // workOrders
  // "workOrders.open": () => import("../../actions/workOrders/open"),
  // "workOrders.completed": () => import("../../actions/workOrders/completed")
}

export async function runAction(
  id: ActionId,
  ctx: ActionCtx = {}
): Promise<void> {
  const loader = registry[id]
  if (!loader) {
    console.warn("No action registered:", id)
    return
  }
  const { run } = await loader()
  await run(ctx)
}
