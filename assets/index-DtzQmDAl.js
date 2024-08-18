(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function c(){const r=document.getElementById("webheader");r.innerHTML=`
        <nav>
            <div class="header-image-container">
            <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/logo-white.png" alt="Logo"  width="80px">
            </div>
            <ul>
                <li><a href="/production">系列鏡框</a></li>
                <li><a href="/location">門市據點</a></li>
                <li><a href="/myblog">部落格</a></li>
                <li><a href="/questions">常見問題</a></li>
            </ul>
            
        </nav>
    `}function l(){const r=document.getElementById("webfooter");r.innerHTML=`
        <p>&copy; 2024 My Website. All rights reserved.</p>
    `}c();l();
