import{i as d,g,s as u,G as r,a as l,F as i,b as m,f as h}from"./auth-BlFnYq-u.js";const p=d(h),c=g(p),s=document.querySelector("#login_form");s.addEventListener("submit",n=>{n.preventDefault();const e=s.querySelector("#login-email").value,o=s.querySelector("#login-password").value;u(c,e,o).then(t=>{const a=t.user;window.location.href="index.html",console.log(a)}).catch(t=>{console.log(t)})});const f=s.querySelector(".google");f.addEventListener("click",()=>{const n=new r;l(c,n).then(e=>{r.credentialFromResult(e).accessToken;const t=e.user;console.log(t),window.location.href="index.html"}).catch(e=>{const o=e.code,t=e.message,a=e.customData.email;console.log(o,t,a)})});const v=s.querySelector(".facebook");v.addEventListener("click",()=>{const n=new i;l(c,n).then(e=>{const o=i.credentialFromResult(e);o.accessToken,o.secret,e.user,window.location.href="index.html"}).catch(e=>{const o=e.code,t=e.message;console.log(o,t)})});const w=document.querySelector(".logout");w.addEventListener("click",n=>{n.preventDefault(),m(c)});
