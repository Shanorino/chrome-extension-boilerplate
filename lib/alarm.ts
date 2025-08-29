export type LogCtx = { section?: string; action?: string; label?: string }

export function logRandomMessage(ctx: LogCtx = {}) {
  const parts = [ctx.section, ctx.action || ctx.label].filter(Boolean)
  const pretty = parts.length ? parts.join(" / ") : "(unknown)"
  const msg = `Clicked: ${pretty}`
  console.log(msg)
  return msg
}
