console.log('injected reddit.js');
const getParentsUntil = (el, selector) => {
    let parents = [],
    _el = el.parentNode;
    while (_el && typeof _el.matches === "function") {
        parents.unshift(_el);
        if (_el.matches(selector)){ return parents;}
        else{ _el = _el.parentNode;}
    }
    return [];
};


function clearAd() {
  console.info("DOM loaded");
  let el = document.querySelector("i.icon-premium_fill");
  premAd = getParentsUntil(el, '[data-testid="frontpage-sidebar"]');
  if(premAd.length > 1){
    let ad = premAd[1];
    ad.style.display = "none";
  }
  console.log(premAd);
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` has already fired
  clearAd();
}