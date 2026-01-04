import { CONFIG } from "./config.js";

const { SPOTIFY_CLIENT_ID, DEFAULT_PLAYLIST_ID } = CONFIG;

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "add-to-playlist",
    title: "Add to Playlist",
    contexts: ["selection", "link"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.linkUrl) {
    console.log("Clicked link:", info.linkUrl);
  } else {
    console.log("Selected text:", info.selectionText);
  }
});