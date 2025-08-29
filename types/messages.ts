export type Msg = { type: "ASSETS_OVERVIEW"; payload?: {} }

export type MsgResponse =
  | { ok: true; data?: unknown }
  | { ok: false; error: string }
