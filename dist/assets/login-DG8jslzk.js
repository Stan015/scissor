import{s as n}from"./auth-C35938Yn.js";import"./script-Ck4EPaoA.js";const o=document.querySelector("#login_form");o.addEventListener("submit",e=>{e.preventDefault();const t=o.querySelector("#login-email").value,i=o.querySelector("#login-password").value;(async function(){await n.auth.signInWithPassword({email:t,password:i})})()});const a=o.querySelector(".google");a.addEventListener("click",()=>{(async function(){await n.auth.signInWithOAuth({provider:"google"})})()});const s=o.querySelector(".facebook");s.addEventListener("click",()=>{(async function(){await n.auth.signInWithOAuth({provider:"facebook"})})()});
