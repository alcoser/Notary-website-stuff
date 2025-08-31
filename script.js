document.addEventListener("DOMContentLoaded", function () {
  const callButton = document.getElementById("call-now");
  const directionsButton = document.getElementById("get-directions");

  if (callButton) {
    callButton.addEventListener("click", function () {
      if (typeof gtag === 'function') {
        gtag("event", "call_now_click", {event_category: "engagement",event_label: "Call Now Button"});
      }
    });
  }

  if (directionsButton) {
    directionsButton.addEventListener("click", function () {
      if (typeof gtag === 'function') {
        gtag("event", "directions_click", {event_category: "engagement",event_label: "Get Directions Link"});
      }
    });
  }
});