export const config = {
  matches: ["https://*.connectavo.com/*"]
}

export default function main() {
  console.log("[Plasmo] connectavo content script loaded")
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.type === "ASSETS_OVERVIEW") {
    console.log("[Foreground Action - Content] assets/overview clicked")
    // here the original content can be changed by manipulating DOM
    // document.body.style.background = "yellow"
    sendResponse({ ok: true })
  }
  return true
})
