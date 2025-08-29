import type { Msg } from "~types/messages"

chrome.runtime.onMessage.addListener((msg: Msg, _sender, sendResponse) => {
  ;(async () => {
    try {
      // NOTE: Capture the message and do heavy work (like download, notify user, call external APIs...) in background
      switch (msg.type) {
        case "ASSETS_OVERVIEW":
          console.log("[Background Action] assets/overview clicked")
          sendResponse({ ok: true, data: { message: "test response" } })
          break
        default:
          sendResponse({ ok: false, error: "Unknown message type" })
      }
    } catch (e: any) {
      sendResponse({ ok: false, error: String(e?.message ?? e) })
    }
  })()
  return true // <-- keep the message channel open for the async sendResponse
})
