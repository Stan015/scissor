import{a as u}from"./auth-C35938Yn.js";function d(){const s=document.querySelector(".burger"),e=document.querySelectorAll(".burger_dash"),o=document.querySelector(".mobile_nav");s.addEventListener("click",t=>{t.stopPropagation(),e[0].classList.toggle("burger_first_dash"),e[1].classList.toggle("burger_second_dash"),e[2].classList.toggle("burger_third_dash"),o.classList.toggle("show_mobile_nav")}),document.documentElement.addEventListener("click",()=>{o.classList.contains("show_mobile_nav")&&o.classList.remove("show_mobile_nav"),e[0].classList.contains("burger_first_dash")&&e[0].classList.remove("burger_first_dash"),e[1].classList.contains("burger_second_dash")&&e[1].classList.remove("burger_second_dash"),e[2].classList.contains("burger_third_dash")&&e[2].classList.remove("burger_third_dash")})}d();function _(){const s=document.querySelectorAll(".faq_list_item");s.forEach(e=>{const o=e.querySelector(".faq_list_item p"),t=e.querySelector(".vertical_line");e.addEventListener("click",i=>{i.stopPropagation(),s.forEach(r=>{if(r!==e){const a=r.querySelector(".faq_list_item p"),c=r.querySelector(".vertical_line");a.classList.remove("faq_details"),c.style.transform="rotate(0deg)",c.style.animation="rotateHorizontal 400ms ease"}}),o.classList.toggle("faq_details"),o.style.animation="faqDetailsAnimation 400ms ease",t.style.transform=t.style.transform==="rotate(90deg)"?"rotate(0deg)":"rotate(90deg)",t.style.animation="none",t.offsetWidth,t.style.animation="rotateVertical 400ms ease"})}),document.documentElement.addEventListener("click",e=>{e.target.classList.contains("faq_list_item")||s.forEach(t=>{const i=t.querySelector(".faq_list_item p"),r=t.querySelector(".vertical_line");i.classList.remove("faq_details"),r.style.transform="rotate(0deg)",r.style.animation="rotateHorizontal 400ms ease"})})}_();function m(){const s=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting?r.target.classList.add("bottom_to_top"):r.target.classList.remove("bottom_to_top")})});s.observe(document.querySelector(".first_section h2")),s.observe(document.querySelector(".first_section div")),s.observe(document.querySelector(".choose_scissor")),s.observe(document.querySelectorAll(".list_item")[2]),s.observe(document.querySelectorAll(".list_item")[3]),s.observe(document.querySelector(".professional_price")),s.observe(document.querySelector(".socials_div")),s.observe(document.querySelectorAll(".ftr_list_div div")[5]),s.observe(document.querySelectorAll(".ftr_list_div div")[6]);const e=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting?r.target.classList.add("left_to_right"):r.target.classList.remove("left_to_right")})});e.observe(document.querySelectorAll(".list_item")[0]),e.observe(document.querySelector(".child_1")),e.observe(document.querySelector(".team_price")),e.observe(document.querySelectorAll(".buttons_div button")[0]),e.observe(document.querySelector(".faq_section h2")),e.observe(document.querySelectorAll(".ftr_list_div div")[0]),e.observe(document.querySelectorAll(".ftr_list_div div")[4]);const o=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting?r.target.classList.add("right_to_left"):r.target.classList.remove("right_to_left")})});o.observe(document.querySelectorAll(".list_item")[1]),o.observe(document.querySelector(".basic_price")),o.observe(document.querySelectorAll(".buttons_div button")[1]),o.observe(document.querySelectorAll(".ftr_list_div div")[3]),o.observe(document.querySelector(".ftr_second_child"));const t=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting?r.target.classList.add("appear"):r.target.classList.remove("appear")})});t.observe(document.querySelector("#url_shortener_form")),t.observe(document.querySelectorAll(".ftr_list_div div")[1]),t.observe(document.querySelectorAll(".ftr_list_div div")[2])}m();const l=document.getElementById("url_shortener_form"),v=l.querySelector("#url_input"),f=l.querySelector("#domain"),n=l.querySelector("#alias"),b=l.querySelector(".trim_url_button"),g=l.querySelector(".shortened-url");b.addEventListener("click",s=>{s.preventDefault();const e=v.value,o=f.value,t=n.value;y(e,o,t)});const q="ZCqw0vRmn6gr4QUprrBDoiY9Xw8dcpzEFAyUOJTTaZaPxvJFV6bmStVsNeYD";async function y(s,e="tinyurl.com",o=""){try{const t=await u.post("https://api.tinyurl.com/create",{domain:e,url:s,alias:o},{headers:{Authorization:`Bearer ${q}`}});return g.innerText=t.data.data.tiny_url,t.data.data}catch(t){t.message=="Request failed with status code 422"&&(l.querySelector(".alias-error").classList.add("show-alias-error"),n.classList.add("input-error")),console.log(t.message)}}
