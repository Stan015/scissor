import axios from "axios";

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

// shorten url function
const urlShortenerForm = document.getElementById("url_shortener_form");
const newURLInput = urlShortenerForm.querySelector("#url_input");
const chosenDomain = urlShortenerForm.querySelector("#domain");
const linkAliasInput = urlShortenerForm.querySelector("#alias");
const trimURLBtn = urlShortenerForm.querySelector(".trim_url_button");
const shortenedURL = urlShortenerForm.querySelector(".shortened-url");

trimURLBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const linkToShorten = newURLInput.value;
  const domain = chosenDomain.value;
  const linkAlias = linkAliasInput.value;
  shortenURL(linkToShorten, domain, linkAlias);
});

const TINYURL_API_TOKEN = import.meta.env.VITE_TINYURL_TOKEN;

async function shortenURL(link, domain = "tinyurl.com", alias = "") {
  try {
    const response = await axios.post(
      "https://api.tinyurl.com/create",
      {
        domain: domain,
        url: link,
        alias: alias,
      },
      {
        headers: {
          Authorization: `Bearer ${TINYURL_API_TOKEN}`,
        },
      }
    );

    shortenedURL.innerText = response.data.data.tiny_url;
    return response.data.data;
  } catch (error) {
    if (error.message == "Request failed with status code 422") {
      const aliasErrorDisplay = urlShortenerForm.querySelector(".alias-error");

      aliasErrorDisplay.classList.add("show-alias-error");
      linkAliasInput.classList.add("input-error");
    }
    console.log(error.message);
  }
}
//
