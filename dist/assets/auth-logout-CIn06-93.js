import{i,g as u,b as l,f as d}from"./auth-CXNqgBkK.js";const g=document.querySelector(".burger"),m=document.querySelector(".nav-links");g.addEventListener("click",()=>{m.classList.toggle("toggle-nav-bar")});const p=document.querySelector(".search-form");p.addEventListener("submit",t=>t.preventDefault());const c=document.querySelector(".user-profile");c.addEventListener("click",()=>{c.querySelector(".quick-action-btns").classList.toggle("show-quick-action-btns")});const S=()=>{const e=new Date().toLocaleTimeString("en-US"),[n,o,r]=e.split(":").map(s=>s.padStart(2,"0"));return`${n}:${o}:${r}`},y=()=>{const e=new Date().toLocaleDateString("en-US"),[n,o,r]=e.split("/").map(s=>s.padStart(2,"0"));return`${n}/${o}/${r}`},a=()=>{document.querySelector(".time").textContent=`The time is ${S()}, ${new Date().getHours()<12?"Good Morning.":"Good Day."}`,document.querySelector(".date").textContent=`Today's date is ${y()}`};a();setInterval(a,1e3);const f=i(d),h=u(f),q=document.querySelectorAll(".logout");q.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),l(h),window.location.href="../index.html"})});