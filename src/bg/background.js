// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
const color = "#3aa757";
chrome.runtime.onInstalled.addListener(() => {
  console.log('installed PromoBlocker');
});
