import type { ActionHandler } from "~types/actions"

export const run: ActionHandler = async ({ tabId }) => {
  console.log("[Foreground Action - Extension] assets/overview clicked", {
    tabId
  })
  // NOTE: do background jobs by sending messages to background.ts

  // send message to the Chrome extension itself
  chrome.runtime.sendMessage({ type: "ASSETS_OVERVIEW" })

  // send message to the original content page
  chrome.tabs.sendMessage(tabId!, { type: "ASSETS_OVERVIEW" })
}
