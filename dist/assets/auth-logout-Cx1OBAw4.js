import{a as u,s as d}from"./auth-C35938Yn.js";const m=document.querySelector(".burger"),y=document.querySelector(".nav-links");m.addEventListener("click",()=>{y.classList.toggle("toggle-nav-bar")});const g=document.querySelector(".search-form");g.addEventListener("submit",t=>t.preventDefault());const c=document.querySelector(".user-profile");c.addEventListener("click",()=>{c.querySelector(".quick-action-btns").classList.toggle("show-quick-action-btns")});const p=()=>{const o=new Date().toLocaleTimeString("en-US"),[n,e,s]=o.split(":").map(a=>a.padStart(2,"0"));return`${n}:${e}:${s}`},S=()=>{const o=new Date().toLocaleDateString("en-US"),[n,e,s]=o.split("/").map(a=>a.padStart(2,"0"));return`${n}/${e}/${s}`},i=()=>{document.querySelector(".time").textContent=`The time is ${p()}, ${new Date().getHours()<12?"Good Morning.":"Good Day."}`,document.querySelector(".date").textContent=`Today's date is ${S()}`};i();setInterval(i,1e3);const r=document.getElementById("url_shortener_form"),h=r.querySelector("#url_input"),q=r.querySelector("#domain"),l=r.querySelector("#alias"),v=r.querySelector(".trim_url_button"),w=r.querySelector(".shortened-url");v.addEventListener("click",t=>{t.preventDefault();const o=h.value,n=q.value,e=l.value;L(o,n,e)});const f="ZCqw0vRmn6gr4QUprrBDoiY9Xw8dcpzEFAyUOJTTaZaPxvJFV6bmStVsNeYD";async function L(t,o="tinyurl.com",n=""){try{const e=await u.post("https://api.tinyurl.com/create",{domain:o,url:t,alias:n},{headers:{Authorization:`Bearer ${f}`}});return w.innerText=e.data.data.tiny_url,e.data.data}catch(e){e.message=="Request failed with status code 422"&&(r.querySelector(".alias-error").classList.add("show-alias-error"),l.classList.add("input-error")),console.log(e.message)}}const D=document.querySelectorAll(".logout");D.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),async function(){const{error:e}=await d.auth.signOut();e?console.error(e):(console.log("signed out successfully"),window.location.href="/login.html")}()})});