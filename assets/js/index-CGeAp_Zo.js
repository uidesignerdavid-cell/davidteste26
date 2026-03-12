(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();

var Jl={exports:{}},ir={},eu={exports:{}},Re={};

// ... (todo o código React permanece igual)

class fy{
    constructor(e,t){
        this.username=e;
        this.password=t;
        this.baseUrl="https://api.allorigins.win/raw?url=";
    }
    
    async testConnection(){
        try {
            const url=encodeURIComponent("https://corsproxy.io/player_api.php?username="+this.username+"&password="+this.password);
            const response=await fetch(this.baseUrl+url);
            const data=await response.json();
            return !!(data&&data.user_info);
        } catch {
            return false;
        }
    }
    
    async getLiveCategories(){
        const url=encodeURIComponent("https://corsproxy.io/player_api.php?username="+this.username+"&password="+this.password+"&action=get_live_categories");
        const response=await fetch(this.baseUrl+url);
        return await response.json();
    }
    
    async getLiveChannels(){
        const url=encodeURIComponent("https://corsproxy.io/player_api.php?username="+this.username+"&password="+this.password+"&action=get_live_streams");
        const response=await fetch(this.baseUrl+url);
        const data=await response.json();
        return data.map(n=>({
            id:n.stream_id,
            name:n.name,
            logo:n.stream_icon,
            category:n.category_id,
            url:"https://corsproxy.io/"+this.username+"/"+this.password+"/"+n.stream_id+".m3u8"
        }));
    }
}

// ... (restante do código IndexedDB, React, etc. permanece igual)
