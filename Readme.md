# PromoBlocker-ChromeExt
Quick, light weight way to block promo content on twitter.com feeds and Feedly (because they mesh too well with normal content) in Google Chrome.


## Twitter.com timeline promoted tweets
Add css via your favorite extension `div[data-testid="placementTracking"] article { display : none!important }`

## Feedly sponsored ads
Alternate method: Update `/etc/hosts` (hosts file) and add `127.0.0.1 srv.buysellads.com`

