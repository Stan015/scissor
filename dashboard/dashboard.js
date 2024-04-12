// toggle burger menu
const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navBar.classList.toggle("toggle-nav-bar");
});
//

// prevent default on search bar
const search = document.querySelector(".search-form");
search.addEventListener("submit", (e) => e.preventDefault());
//

// profile icon
const profileBox = document.querySelector(".user-profile");
profileBox.addEventListener("click", () => {
  profileBox
    .querySelector(".quick-action-btns")
    .classList.toggle("show-quick-action-btns");
});
//

// real time and date update
const getCurrentTime = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US");
  const [hours, minutes, seconds] = timeString
    .split(":")
    .map((part) => part.padStart(2, "0"));

  return `${hours}:${minutes}:${seconds}`;
};

const getCurrentDate = () => {
  const now = new Date();
  const dateString = now.toLocaleDateString("en-US");
  const [day, month, year] = dateString
    .split("/")
    .map((part) => part.padStart(2, "0"));
  return `${day}/${month}/${year}`;
};

const updateTime = () => {
  document.querySelector(
    ".time"
  ).textContent = `The time is ${getCurrentTime()}, ${
    new Date().getHours() < 12 ? "Good Morning." : "Good Day."
  }`;
  document.querySelector(
    ".date"
  ).textContent = `Today's date is ${getCurrentDate()}`;
};

updateTime();
setInterval(updateTime, 1000);
//

