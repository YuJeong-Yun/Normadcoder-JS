const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

h1.addEventListener("onClick", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);


function handleWindowCopy() {
  alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);


function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOD");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

