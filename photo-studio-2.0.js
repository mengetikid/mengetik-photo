/*! Photo Studio by Mengetik.id v2.0 | https://www.mengetik.id */
(function(){
"use strict";
if (window.__PS_LOADED) return; window.__PS_LOADED = 1;
/* ---- boot ---- */
(function(){ var A0 = document.getElementById("ps-app"); if (!A0) return; A0.removeAttribute("style"); A0.innerHTML = "<div class=\"ps-top\">\n  <span class=\"ps-logo\" aria-hidden=\"true\">M</span>\n  <div class=\"ps-ttl\"><b>Photo Studio</b><span id=\"ps-fname\">Editor foto &amp; kolase</span></div>\n  <div class=\"ps-actions\">\n    <button data-act=\"undo\" class=\"ps-ib\" data-ico=\"undo\" title=\"Urungkan (Ctrl+Z)\" aria-label=\"Urungkan\" disabled></button>\n    <button data-act=\"redo\" class=\"ps-ib\" data-ico=\"redo\" title=\"Ulangi (Ctrl+Y)\" aria-label=\"Ulangi\" disabled></button>\n    <button data-act=\"projects\" class=\"ps-hm\" data-ico=\"folder\" title=\"Proyek saya\"><span>Proyek</span></button>\n    <button data-act=\"open\" class=\"ps-pri\" data-ico=\"img\" title=\"Buka foto (Ctrl+O)\"><span>Foto</span></button>\n    <button data-act=\"collage\" data-ico=\"grid\" title=\"Buat kolase\"><span>Kolase</span></button>\n    <button data-act=\"tplstart\" data-ico=\"tpl\" title=\"Template tren 3D\"><span>Template</span></button>\n    <button data-act=\"export\" class=\"ps-exp\" data-ico=\"dl\" title=\"Simpan untuk web (Ctrl+E)\"><span>Simpan</span></button>\n    <button data-act=\"full\" class=\"ps-ib\" data-ico=\"full\" title=\"Layar penuh\" aria-label=\"Layar penuh\"></button>\n  </div>\n</div>\n<div class=\"ps-main\">\n  <div class=\"ps-stagewrap\">\n    <div id=\"ps-back\" hidden><button data-act=\"backcol\" data-ico=\"undo\"><span>Kembali ke Kolase</span></button></div>\n    <div id=\"ps-stage\">\n      <canvas id=\"ps-cv\"></canvas>\n      <div id=\"ps-empty\">\n        <div class=\"ps-hero2\">\n          <h2>Edit foto jadi <em>HD, 3D &amp; estetik</em></h2>\n          <p>Template tren 3D, efek shutter &amp; bokeh dengan AI, kualitas HD, Auto Fix kulit, look Jepang/Korea/Eropa, teks keren, hapus objek, dan kolase untuk Instagram, TikTok, Facebook &amp; Threads.</p>\n          <div class=\"ps-start ps-start3\">\n            <button data-act=\"open\" class=\"ps-big\"><i data-ico=\"img\"></i><b>Edit Foto</b><small>Buka satu foto</small></button>\n            <button data-act=\"newcol\" class=\"ps-big ps-big2\"><i data-ico=\"grid\"></i><b>Buat Kolase</b><small>Pilih beberapa foto</small></button>\n            <button data-act=\"tplstart\" class=\"ps-big ps-big3\"><i data-ico=\"tpl\"></i><b>Template 3D</b><small>Tren 3D &amp; pop-out</small></button>\n          </div>\n          <small class=\"ps-drophint\">atau seret &amp; lepas foto ke sini &middot; semua diproses di perangkat Anda</small>\n          <div id=\"ps-recent\"></div>\n        </div>\n      </div>\n    </div>\n    <div id=\"ps-sbar\" class=\"ps-sbar\" hidden>\n      <button class=\"ps-ib\" data-act=\"zout\" data-ico=\"down\" title=\"Perkecil\" aria-label=\"Perkecil\"></button>\n      <button class=\"ps-zl\" data-act=\"fit\" title=\"Pas layar (0)\"><span id=\"ps-zl\">100%</span></button>\n      <button class=\"ps-ib\" data-act=\"zin\" data-ico=\"up\" title=\"Perbesar\" aria-label=\"Perbesar\"></button>\n      <button class=\"ps-cmp\" data-hold=\"cmp\" data-ico=\"eye\" title=\"Tahan untuk melihat sebelum (\\)\"><span>Sebelum</span></button>\n      <div id=\"ps-cellbar\" hidden></div>\n    </div>\n  </div>\n  <div class=\"ps-side\">\n    <nav id=\"ps-tabs\" class=\"ps-tabs\"></nav>\n    <div id=\"ps-panel\" class=\"ps-panel\"></div>\n  </div>\n</div>\n<input type=\"file\" id=\"ps-file\" accept=\"image/*\" multiple hidden>\n<input type=\"file\" id=\"ps-file1\" accept=\"image/*\" hidden>\n<div id=\"ps-layer\"></div>\n<div id=\"ps-busy\" hidden><div><span></span><b><i></i></b><button type=\"button\" onclick=\"return false\">Batal</button></div></div>\n<div id=\"ps-toast\" role=\"status\" aria-live=\"polite\"></div>\n"; if (!document.getElementById("ps-style")) { var st = document.createElement("style"); st.id = "ps-style"; st.textContent = "#ps-app{--bg:#111316;--pn:#181b1f;--pn2:#1f2328;--pn3:#262b31;--ln:#2d3239;--tx:#eceef1;--mu:#9aa2ac;--a:#ff4f7b;--a2:#ff7a20;--ag:linear-gradient(135deg,#ff4f7b,#ff7a20);--ok:#3ccf7a;position:relative;display:flex;flex-direction:column;width:100%;height:min(90vh,940px);min-height:580px;background:var(--bg);color:var(--tx);font:13px/1.4 system-ui,-apple-system,\"Segoe UI\",Roboto,Arial,sans-serif;border-radius:16px;overflow:hidden;text-align:left;box-shadow:0 24px 60px -28px rgba(0,0,0,.6);-webkit-tap-highlight-color:transparent}#ps-app *,#ps-app *::before,#ps-app *::after{box-sizing:border-box}#ps-app [hidden]{display:none!important}#ps-app button,#ps-app select,#ps-app input,#ps-app textarea{font:inherit;color:inherit;margin:0;letter-spacing:0;text-transform:none;box-shadow:none;max-width:none;line-height:1.25}#ps-app button{cursor:pointer;background:var(--pn2);border:1px solid var(--ln);border-radius:9px;padding:7px 11px;display:inline-flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap}#ps-app button:hover{border-color:#4a525c}#ps-app button:disabled{opacity:.4;cursor:default}#ps-app svg{width:16px;height:16px;stroke:currentColor;stroke-width:1.7;fill:none;stroke-linecap:round;stroke-linejoin:round;flex:0 0 auto}#ps-app select,#ps-app input[type=text],#ps-app input[type=number],#ps-app textarea{background:var(--pn2);border:1px solid var(--ln);border-radius:9px;padding:8px 10px;width:100%;outline:0}#ps-app select:focus,#ps-app input:focus,#ps-app textarea:focus{border-color:var(--a)}#ps-app .ps-go{background:var(--ag);border-color:transparent;color:#fff;font-weight:700}#ps-app .ps-danger{color:#ff8a8a}#ps-app.ps-full{position:fixed;inset:0;z-index:2147483000;height:auto;border-radius:0;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}html.ps-noscroll,html.ps-noscroll body{overflow:hidden!important}/* bar atas */#ps-app .ps-top{display:flex;align-items:center;gap:10px;padding:8px 12px;background:#0c0e10;border-bottom:1px solid var(--ln);flex:0 0 auto}#ps-app .ps-logo{width:30px;height:30px;border-radius:9px;background:#565656;color:#fff;display:flex;align-items:center;justify-content:center;font:700 18px/1 'Mali','Comic Sans MS',cursive;flex:0 0 auto;box-shadow:inset 0 -3px 0 rgba(255,79,123,.9)}#ps-app .ps-ttl{display:flex;flex-direction:column;min-width:0;flex:1 1 auto}#ps-app .ps-ttl b{font-size:14px}#ps-app .ps-ttl span{font-size:11.5px;color:var(--mu);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#ps-app .ps-actions{display:flex;gap:6px;align-items:center}#ps-app .ps-actions button{height:34px;padding:0 12px}#ps-app .ps-ib{padding:0!important;width:34px;height:34px;flex:0 0 auto}#ps-app .ps-ib.on{border-color:var(--a);color:var(--a)}#ps-app .ps-actions .ps-pri{background:var(--pn3);font-weight:600}#ps-app .ps-actions .ps-exp{background:var(--ag);border-color:transparent;color:#fff;font-weight:700}/* utama */#ps-app .ps-main{flex:1 1 auto;display:flex;min-height:0}#ps-app .ps-stagewrap{position:relative;flex:1 1 auto;min-width:0;display:flex;flex-direction:column;background:#0a0b0d}#ps-app #ps-stage{position:relative;flex:1 1 auto;min-height:0;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;background:radial-gradient(circle at 50% 40%,#16191d,#0a0b0d 70%)}#ps-app #ps-cv{position:absolute;inset:0;width:100%;height:100%;display:block;cursor:default}#ps-app.ps-erasing #ps-cv{cursor:none}#ps-app #ps-back{position:absolute;top:10px;left:10px;z-index:3}#ps-app #ps-back button{background:rgba(15,17,20,.88);backdrop-filter:blur(6px);font-weight:600}#ps-app #ps-empty{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:20px;overflow:auto}#ps-app .ps-hero2{max-width:560px;text-align:center}#ps-app .ps-hero2 h2{font-size:26px;line-height:1.2;margin:0 0 8px;color:#fff}#ps-app .ps-hero2 h2 em{font-style:normal;background:var(--ag);-webkit-background-clip:text;background-clip:text;color:transparent}#ps-app .ps-hero2 p{color:var(--mu);margin:0 auto 18px;max-width:470px}#ps-app .ps-start{display:grid;grid-template-columns:1fr 1fr;gap:12px}#ps-app .ps-big{flex-direction:column;gap:4px;padding:18px 12px;border-radius:16px;background:linear-gradient(160deg,#2a2f36,#1c2025);border-color:#353b43}#ps-app .ps-big i svg{width:30px;height:30px;stroke:var(--a)}#ps-app .ps-big2 i svg{stroke:var(--a2)}#ps-app .ps-big b{font-size:16px}#ps-app .ps-big small{color:var(--mu)}#ps-app .ps-drophint{display:block;color:var(--mu);margin-top:12px;font-size:12px}#ps-app #ps-recent{margin-top:20px;text-align:left}#ps-app #ps-recent>b{display:block;margin-bottom:8px;color:var(--mu);font-weight:600}#ps-app #ps-recent>div{display:flex;gap:10px;overflow-x:auto;padding-bottom:6px}#ps-app #ps-recent button{flex-direction:column;padding:6px;width:118px;flex:0 0 auto;align-items:stretch}#ps-app #ps-recent img{width:100%;height:84px;object-fit:cover;border-radius:6px;background:#2a2f36}#ps-app #ps-recent span{font-size:11.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#ps-app.ps-drop #ps-stage::after{content:\"Lepaskan foto di sini\";position:absolute;inset:10px;border:3px dashed var(--a);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;background:rgba(0,0,0,.55);z-index:5}#ps-app .ps-sbar{flex:0 0 auto;display:flex;align-items:center;gap:6px;padding:6px 10px;border-top:1px solid var(--ln);background:#0e1012;overflow-x:auto;scrollbar-width:none}#ps-app .ps-sbar::-webkit-scrollbar{display:none}#ps-app .ps-sbar .ps-ib{width:30px;height:30px}#ps-app .ps-zl{height:30px;min-width:58px;font-variant-numeric:tabular-nums}#ps-app .ps-cmp{height:30px}#ps-app .ps-cmp.on{border-color:var(--a);color:var(--a)}#ps-app #ps-cellbar{display:flex;gap:6px;margin-left:auto}#ps-app #ps-cellbar button{height:30px;padding:0 10px}/* panel samping */#ps-app .ps-side{flex:0 0 360px;display:flex;min-height:0;min-width:0;overflow:hidden;border-left:1px solid var(--ln);background:var(--pn)}#ps-app .ps-tabs{flex:0 0 74px;display:flex;flex-direction:column;gap:2px;padding:8px 6px;border-right:1px solid var(--ln);overflow-y:auto;background:#141619}#ps-app .ps-tabs button{flex-direction:column;gap:4px;padding:9px 2px;border:0;background:transparent;border-radius:10px;color:var(--mu);font-size:10.5px;white-space:normal;text-align:center;line-height:1.15}#ps-app .ps-tabs button svg{width:20px;height:20px}#ps-app .ps-tabs button:hover{background:#1f2328;color:var(--tx)}#ps-app .ps-tabs button.on{background:rgba(255,79,123,.14);color:#fff}#ps-app .ps-tabs button.on svg{stroke:var(--a)}#ps-app .ps-panel{flex:1 1 auto;min-width:0;overflow-x:hidden;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px;overscroll-behavior:contain}#ps-app .ps-panel>*,#ps-app .ps-secb>*,#ps-app .ps-card>*{flex-shrink:0}#ps-app .ps-hint{color:var(--mu);padding:20px 6px;text-align:center}#ps-app .ps-note{color:var(--mu);font-size:12px;margin:0}#ps-app .ps-lb{display:block;color:var(--mu);font-size:11.5px;font-weight:600;margin:2px 0 -4px;text-transform:uppercase;letter-spacing:.03em}#ps-app .ps-card{background:var(--pn2);border:1px solid var(--ln);border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:9px}#ps-app .ps-card>b{display:flex;align-items:center;gap:7px;font-size:14px}#ps-app .ps-card>b svg{stroke:var(--a)}#ps-app .ps-card p{margin:0;color:var(--mu);font-size:12.5px}#ps-app .ps-card small{color:var(--mu);font-size:11px}#ps-app .ps-hero{background:linear-gradient(160deg,rgba(255,79,123,.16),rgba(255,122,32,.08));border-color:rgba(255,79,123,.35)}#ps-app .ps-wide{width:100%;padding:11px;font-weight:600}#ps-app .ps-btn2{display:flex;gap:8px}#ps-app .ps-btn2>button{flex:1 1 0;min-width:0}#ps-app .ps-btn2>button.ps-danger{flex:0 0 auto}#ps-app .ps-btn4{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}#ps-app .ps-btn4 button{height:40px}#ps-app .ps-btn4 svg{width:20px;height:20px}#ps-app .ps-seg{display:flex;gap:6px}#ps-app .ps-seg>.ps-chip{flex:1 1 0;min-width:0}#ps-app .ps-seg4{display:grid;grid-template-columns:1fr 1fr;gap:6px}#ps-app .ps-wrap{flex-wrap:wrap}#ps-app .ps-wrap>.ps-chip{flex:0 0 auto}#ps-app .ps-chip{padding:7px 10px;border-radius:999px;font-size:12.5px;background:var(--pn3)}#ps-app .ps-chip.on{background:rgba(255,79,123,.18);border-color:var(--a);color:#fff;font-weight:600}#ps-app .ps-scrollx{display:flex;gap:6px;min-width:0;max-width:100%;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin}#ps-app .ps-scrollx>*{flex:0 0 auto}/* teks tombol tidak keluar kolom */#ps-app .ps-panel button,#ps-app .ps-sfw-r button{min-width:0;max-width:100%}#ps-app .ps-seg>.ps-chip,#ps-app .ps-seg4>.ps-chip,#ps-app .ps-btn2>button{white-space:normal;text-align:center;line-height:1.2;overflow-wrap:anywhere;padding-left:8px;padding-right:8px}#ps-app .ps-seg>.ps-chip{border-radius:12px;min-height:34px}#ps-app .ps-scrollx>.ps-chip,#ps-app .ps-wrap>.ps-chip{white-space:nowrap}#ps-app .ps-srb{flex-direction:column;gap:2px;padding:9px 6px!important;min-height:54px}#ps-app .ps-srb b{font-size:17px;line-height:1}#ps-app .ps-srb small{font-size:11px;font-weight:600;opacity:.92;color:#fff!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}#ps-app .ps-srb:disabled{background:var(--pn3);color:var(--mu);opacity:1}#ps-app .ps-srb:disabled small{color:var(--mu)!important;white-space:normal}#ps-app .ps-warn{margin:0;font-size:12px;color:#ffc58a;background:rgba(255,122,32,.1);border:1px solid rgba(255,122,32,.3);border-radius:9px;padding:8px 10px}#ps-app .ps-nw{white-space:nowrap}#ps-app .ps-size span{min-width:0;overflow-wrap:anywhere}#ps-app .ps-look span{overflow-wrap:anywhere;max-width:100%}#ps-app .ps-fx span{max-width:100%;font-size:10px;letter-spacing:-.1px;overflow-wrap:normal;word-break:normal;hyphens:auto}#ps-app [data-a=\"res\"]{flex-direction:column;gap:1px}#ps-app [data-a=\"res\"] small{font-size:10.5px;opacity:.75;font-weight:500}/* slider */#ps-app .ps-sl{display:flex;flex-direction:column;gap:2px}#ps-app .ps-sl label{display:flex;justify-content:space-between;font-size:12.5px;color:#cfd4da}#ps-app .ps-sl output{color:var(--mu);font-variant-numeric:tabular-nums}#ps-app input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:24px;background:transparent;padding:0;border:0;touch-action:pan-y}#ps-app input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:4px;background:var(--trk,#3a414a)}#ps-app input[type=range]::-moz-range-track{height:4px;border-radius:4px;background:var(--trk,#3a414a)}#ps-app input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#fff;margin-top:-7px;border:3px solid var(--a);box-shadow:0 1px 4px rgba(0,0,0,.5)}#ps-app input[type=range]::-moz-range-thumb{width:13px;height:13px;border-radius:50%;background:#fff;border:3px solid var(--a)}@media (pointer:coarse){#ps-app input[type=range]{pointer-events:none}#ps-app .ps-sl{touch-action:pan-y;padding:2px 0}#ps-app input[type=range]{height:30px}#ps-app input[type=range]::-webkit-slider-thumb{width:24px;height:24px;margin-top:-10px}#ps-app input[type=range]::-moz-range-thumb{width:18px;height:18px}#ps-app .ps-sl.ps-touch input[type=range]::-webkit-slider-thumb{transform:scale(1.25);box-shadow:0 0 0 6px rgba(255,79,123,.25)}#ps-app .ps-sl.ps-touch label{color:#fff}}#ps-app .ps-ck{display:flex;align-items:center;gap:8px;font-size:12.5px;cursor:pointer}#ps-app .ps-ck input{width:16px;height:16px;accent-color:var(--a)}#ps-app .ps-ckrow{display:flex;flex-wrap:wrap;gap:6px 14px}/* seksi */#ps-app .ps-sec{border:1px solid var(--ln);border-radius:12px;background:var(--pn2)}#ps-app .ps-sec h4{margin:0;padding:11px 12px;font-size:13px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;user-select:none}#ps-app .ps-sec h4 i{display:flex;transition:transform .15s}#ps-app .ps-sec.open h4 i{transform:rotate(180deg)}#ps-app .ps-secb{display:none;padding:0 12px 12px;flex-direction:column;gap:8px}#ps-app .ps-sec.open .ps-secb{display:flex}#ps-app .ps-gr{display:flex;flex-direction:column;gap:2px;padding:6px 0;border-bottom:1px dashed var(--ln)}/* warna */#ps-app .ps-colors{display:flex;flex-wrap:wrap;gap:6px}#ps-app .ps-sw{width:28px;height:28px;border-radius:50%;padding:0;border:2px solid rgba(255,255,255,.18);position:relative;font-size:9px;color:#fff;font-weight:700}#ps-app .ps-sw.on{border-color:#fff;box-shadow:0 0 0 2px var(--a)}#ps-app .ps-swc{display:inline-flex;align-items:center;justify-content:center;background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red);cursor:pointer;overflow:hidden}#ps-app .ps-swc input{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;padding:0;border:0}#ps-app .ps-swblur{background:linear-gradient(135deg,#777,#bbb)!important}#ps-app .ps-hsldots{display:flex;gap:8px;justify-content:space-between}#ps-app .ps-hsldots button{width:26px;height:26px;border-radius:50%;padding:0;border:2px solid transparent}#ps-app .ps-hsldots button.on{border-color:#fff;box-shadow:0 0 0 2px var(--a)}/* look */#ps-app .ps-looks{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}#ps-app .ps-look{flex-direction:column;padding:4px;gap:4px;border-radius:10px;align-items:stretch;white-space:normal}#ps-app .ps-look canvas{width:100%;height:auto;aspect-ratio:4/3;object-fit:cover;border-radius:7px;display:block;background:#2a2f36}#ps-app .ps-look span{font-size:11px;text-align:center;line-height:1.15}#ps-app .ps-look.on{border-color:var(--a);background:rgba(255,79,123,.12)}#ps-app .ps-tray{display:flex;gap:6px;min-width:0;max-width:100%;overflow-x:auto;padding-bottom:4px}#ps-app .ps-th{width:58px;height:58px;padding:0;flex:0 0 auto;overflow:hidden;border-radius:9px;position:relative}#ps-app .ps-th canvas{width:100%;height:100%;display:block;object-fit:cover}#ps-app .ps-th.used::after{content:\"\";position:absolute;right:4px;top:4px;width:9px;height:9px;border-radius:50%;background:var(--ok);box-shadow:0 0 0 2px #000}#ps-app .ps-add{border-style:dashed}#ps-app .ps-add svg{width:22px;height:22px}/* efek cahaya */#ps-app .ps-fxgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}#ps-app .ps-fx{flex-direction:column;padding:6px 2px;gap:4px;font-size:10.5px;white-space:normal;text-align:center;line-height:1.1;position:relative}#ps-app .ps-fx.on{border-color:var(--a);background:rgba(255,79,123,.12)}#ps-app .ps-fx.act::after{content:\"\";position:absolute;right:5px;top:5px;width:7px;height:7px;border-radius:50%;background:var(--a2)}#ps-app .ps-fxi{width:36px;height:36px;border-radius:9px;display:block;background:#333}#ps-app .ps-fx-rays{background:repeating-conic-gradient(from 200deg at 85% 10%,#ffd59a 0 4deg,#3a2f22 4deg 11deg)}#ps-app .ps-fx-haze{background:radial-gradient(circle at 75% 25%,#ffd28a,#ff8a3c 30%,#2a1c14 75%)}#ps-app .ps-fx-flare{background:radial-gradient(circle at 25% 30%,#fff 0 6%,transparent 7%),radial-gradient(circle at 55% 55%,rgba(120,200,255,.8) 0 9%,transparent 10%),radial-gradient(circle at 75% 75%,rgba(255,170,90,.8) 0 6%,transparent 7%),#1b2430}#ps-app .ps-fx-leak{background:radial-gradient(circle at 0 0,#ff6a00,transparent 60%),radial-gradient(circle at 0 100%,#ff2d55,transparent 55%),#2a1d1d}#ps-app .ps-fx-bloom{background:radial-gradient(circle,#fff 0 18%,#ffe9c8 30%,#3b3530 70%)}#ps-app .ps-fx-halo{background:radial-gradient(circle,#fff 0 14%,#ff5a2a 26%,#301612 66%)}#ps-app .ps-fx-dream{background:linear-gradient(135deg,#ffd6e7,#c9d8ff);filter:blur(.4px)}#ps-app .ps-fx-ana{background:linear-gradient(transparent 44%,#6fb2ff 48%,#fff 50%,#6fb2ff 52%,transparent 56%),#141c2a}#ps-app .ps-fx-star{background:linear-gradient(transparent 47%,#fff 50%,transparent 53%),linear-gradient(90deg,transparent 47%,#fff 50%,transparent 53%),radial-gradient(circle,#fff 0 8%,#1a1e2a 30%)}#ps-app .ps-fx-bokeh{background:radial-gradient(circle at 25% 30%,rgba(255,208,138,.9) 0 13%,transparent 14%),radial-gradient(circle at 70% 60%,rgba(255,150,190,.8) 0 17%,transparent 18%),radial-gradient(circle at 45% 80%,rgba(140,190,255,.8) 0 10%,transparent 11%),#16141e}#ps-app .ps-fx-flash{background:radial-gradient(circle at 50% 45%,#fff,#d8e6ff 30%,#20232b 75%)}#ps-app .ps-fx-prism{background:linear-gradient(115deg,#20232b 25%,#ff4d4d 35%,#ffd93d 42%,#4dff88 50%,#4dc3ff 58%,#a64dff 65%,#20232b 75%)}#ps-app .ps-fx-dust{background:radial-gradient(circle at 30% 30%,#ddd 0 3%,transparent 4%),radial-gradient(circle at 70% 60%,#ddd 0 2%,transparent 3%),linear-gradient(90deg,transparent 60%,rgba(220,220,220,.6) 61%,transparent 62%),#4a4136}#ps-app .ps-fx-grain{background:repeating-radial-gradient(circle at 30% 30%,#666 0 1px,#3a3a3a 1px 2px)}#ps-app .ps-fx-vig{background:radial-gradient(circle,#9a9a9a 30%,#141414 80%)}#ps-app .ps-fx-swirl{background:repeating-conic-gradient(from 0deg at 50% 50%,#ff9ad6 0 8deg,#3a2240 8deg 24deg);border-radius:50%!important}#ps-app .ps-fx-sglow{background:radial-gradient(circle at 50% 42%,#fff 0 12%,#ffd9c4 30%,#c98f78 62%,#4a3029 90%)}#ps-app .ps-fx-fog{background:linear-gradient(180deg,#5b6672 0,#9aa7b3 45%,#e8edf2 70%,#cfd6dd)}#ps-app .ps-fx-ca{background:radial-gradient(circle at 46% 50%,rgba(255,0,0,.8) 0 26%,transparent 27%),radial-gradient(circle at 54% 50%,rgba(0,180,255,.8) 0 26%,transparent 27%),#222}/* teks */#ps-app textarea{resize:vertical;min-height:54px;font-size:15px}#ps-app .ps-tpres{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}#ps-app .ps-tpres button{flex-direction:column;padding:4px;gap:3px;align-items:stretch}#ps-app .ps-tpres canvas{width:100%;height:auto;border-radius:6px;display:block}#ps-app .ps-tpres span{font-size:11px;color:var(--mu);text-align:center}#ps-app .ps-fontbtn{justify-content:space-between;width:100%;font-size:17px;padding:9px 12px}#ps-app .ps-fonts{display:flex;flex-direction:column;gap:4px;max-height:300px;overflow-y:auto;border:1px solid var(--ln);border-radius:10px;padding:6px;background:#15181b}#ps-app .ps-fonts b{font-size:11px;color:var(--mu);margin:6px 4px 0;text-transform:uppercase}#ps-app .ps-fonts button{justify-content:flex-start;font-size:18px;border:0;background:transparent;padding:6px 8px}#ps-app .ps-fonts button.on,#ps-app .ps-fonts button:hover{background:rgba(255,79,123,.14)}#ps-app .ps-grads{display:grid;grid-template-columns:repeat(8,1fr);gap:6px}#ps-app .ps-grads button{height:26px;padding:0;border-radius:7px;border:2px solid transparent}#ps-app .ps-grads button.on{border-color:#fff}#ps-app .ps-gstops{display:flex;gap:6px;align-items:center}/* kolase */#ps-app .ps-sizes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}#ps-app .ps-size{justify-content:flex-start;gap:8px;padding:7px;white-space:normal;text-align:left}#ps-app .ps-size i{display:block;width:22px;max-height:30px;border:2px solid var(--mu);border-radius:3px;flex:0 0 auto}#ps-app .ps-size span{font-size:11.5px;line-height:1.2;display:flex;flex-direction:column}#ps-app .ps-size small{color:var(--mu)}#ps-app .ps-size.on{border-color:var(--a);background:rgba(255,79,123,.12)}#ps-app .ps-size.on i{border-color:var(--a)}#ps-app .ps-lays{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}#ps-app .ps-lay{height:76px;padding:6px;color:#aab2bc;flex-direction:column;gap:3px}#ps-app .ps-lay svg{width:auto;height:auto;stroke:none}#ps-app .ps-lay.on{border-color:var(--a);color:var(--a);background:rgba(255,79,123,.1)}#ps-app .ps-layf{height:88px}#ps-app .ps-layf span{font-size:10px;color:var(--mu)}#ps-app .ps-size2{display:flex;gap:6px;align-items:center}#ps-app .ps-size2 input{min-width:0}#ps-app .ps-size2 span{color:var(--mu)}/* dialog */#ps-app #ps-layer{position:absolute;inset:0;pointer-events:none;z-index:20}#ps-app .ps-modal{position:absolute;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:16px;pointer-events:auto;backdrop-filter:blur(3px)}#ps-app .ps-dlg{background:var(--pn);border:1px solid var(--ln);border-radius:16px;padding:16px;max-width:520px;width:100%;max-height:100%;overflow:auto;display:flex;flex-direction:column;gap:12px;box-shadow:0 30px 80px rgba(0,0,0,.6)}#ps-app .ps-dlg h3{margin:0;font-size:16px;display:flex;align-items:center;gap:8px}#ps-app .ps-dlg p{margin:0;color:#c9ced4}#ps-app .ps-small{max-width:400px}#ps-app .ps-dlgbtns{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap}#ps-app .ps-dlg.ps-wide{max-width:640px}#ps-app .ps-dh{display:flex;align-items:center;justify-content:space-between;gap:10px}#ps-app .ps-plist{display:flex;flex-direction:column;gap:6px}#ps-app .ps-pi{display:flex;align-items:center;gap:10px;padding:6px;border:1px solid var(--ln);border-radius:12px;background:var(--pn2)}#ps-app .ps-pi img{width:64px;height:52px;object-fit:cover;border-radius:7px;background:#2a2f36;flex:0 0 auto}#ps-app .ps-pi>div{flex:1 1 auto;min-width:0;display:flex;flex-direction:column}#ps-app .ps-pi b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#ps-app .ps-pi small{color:var(--mu);font-size:11px}/* save for web */#ps-app .ps-dlg.ps-xl{max-width:1180px;height:100%;max-height:860px;padding:12px 14px}#ps-app .ps-sfw{flex:1 1 auto;display:flex;gap:12px;min-height:0}#ps-app .ps-sfw-l{flex:1 1 auto;display:flex;flex-direction:column;gap:8px;min-width:0;min-height:0}#ps-app .ps-sfw-bar{display:flex;gap:6px;align-items:center}#ps-app .ps-sfw-bar select{width:auto}#ps-app .ps-sp{flex:1 1 auto}#ps-app .ps-sfw-view{flex:1 1 auto;display:grid;gap:6px;min-height:240px}#ps-app .ps-sfw-view.n2{grid-template-columns:1fr 1fr}#ps-app .ps-sfw-view.n4{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}#ps-app .ps-pane{position:relative;border:1px solid var(--ln);border-radius:10px;overflow:hidden;background:#1b1e23;min-height:0;touch-action:none}#ps-app .ps-pane canvas{position:absolute;inset:0;width:100%;height:100%;display:block}#ps-app .ps-plabel{position:absolute;left:6px;bottom:6px;right:6px;display:flex;flex-wrap:wrap;gap:2px 8px;background:rgba(10,11,13,.82);padding:5px 8px;border-radius:8px;font-size:11.5px;pointer-events:none}#ps-app .ps-plabel span{color:var(--mu)}#ps-app .ps-sfw-info{color:#cfd4da;font-size:12.5px;min-height:18px}#ps-app .ps-sfw-r{flex:0 0 330px;overflow-y:auto;display:flex;flex-direction:column;gap:9px;padding-right:2px}#ps-app .ps-sticky{position:sticky;bottom:0;background:var(--pn);padding-top:8px;margin-top:auto}/* proses & toast */#ps-app #ps-busy{position:absolute;inset:0;z-index:40;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.55);backdrop-filter:blur(2px)}#ps-app #ps-busy>div{background:var(--pn);border:1px solid var(--ln);border-radius:14px;padding:18px 20px;min-width:260px;max-width:90%;display:flex;flex-direction:column;gap:10px;align-items:center;text-align:center}#ps-app #ps-busy>div::before{content:\"\";width:30px;height:30px;border-radius:50%;border:3px solid #3a414a;border-top-color:var(--a);animation:ps-spin .8s linear infinite}#ps-app #ps-busy b{display:block;width:100%;height:5px;border-radius:5px;background:#2d3239;overflow:hidden}#ps-app #ps-busy i{display:block;height:100%;width:0;background:var(--ag);transition:width .2s}@keyframes ps-spin{to{transform:rotate(360deg)}}#ps-app #ps-toast{position:absolute;left:50%;bottom:22px;transform:translate(-50%,20px);background:#f2f3f5;color:#111;padding:9px 14px;border-radius:10px;font-weight:600;opacity:0;pointer-events:none;transition:.2s;z-index:50;max-width:88%;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.4)}#ps-app #ps-toast.show{opacity:1;transform:translate(-50%,0)}/* tablet & ponsel */@media (max-width:1080px){#ps-app .ps-side{flex-basis:320px}#ps-app .ps-actions button span{display:none}#ps-app .ps-actions button{padding:0;width:34px}}@media (max-width:820px){#ps-app{height:calc(100svh - 70px);min-height:520px;border-radius:12px}#ps-app.ps-full{height:auto}#ps-app .ps-top{padding:6px 8px;gap:6px}#ps-app .ps-ttl span{display:none}#ps-app.ps-nodoc .ps-side{display:none}#ps-app .ps-actions{gap:4px}#ps-app .ps-actions button{height:32px;width:32px}#ps-app .ps-actions .ps-exp{width:auto;padding:0 10px}#ps-app .ps-actions .ps-exp span{display:inline}#ps-app .ps-main{flex-direction:column}#ps-app .ps-side{flex:0 0 auto;flex-direction:column-reverse;border-left:0;border-top:1px solid var(--ln);max-height:44%;min-height:150px}#ps-app .ps-tabs{flex:0 0 auto;flex-direction:row;overflow-x:auto;overflow-y:hidden;border-right:0;border-top:1px solid var(--ln);padding:4px 6px calc(4px + env(safe-area-inset-bottom));scrollbar-width:none}#ps-app .ps-tabs::-webkit-scrollbar{display:none}#ps-app .ps-tabs button{flex:0 0 auto;min-width:66px;padding:6px 4px}#ps-app .ps-panel{padding:10px}#ps-app .ps-hero2 h2{font-size:21px}#ps-app .ps-big{padding:14px 8px}#ps-app .ps-sfw{flex-direction:column;overflow-y:auto}#ps-app .ps-sfw-l{flex:0 0 auto}#ps-app .ps-sfw-view{height:46vh;flex:0 0 auto}#ps-app .ps-sfw-r{flex:0 0 auto;overflow:visible}#ps-app .ps-dlg.ps-xl{padding:10px}#ps-app .ps-modal{padding:8px}#ps-app .ps-fxgrid{grid-template-columns:repeat(4,1fr)}#ps-app .ps-lays{grid-template-columns:repeat(4,1fr)}#ps-app #ps-cellbar button span{display:none}}@media (max-width:440px){#ps-app .ps-ttl{display:none}}@media (max-width:380px){#ps-app .ps-looks{grid-template-columns:repeat(2,1fr)}#ps-app .ps-actions .ps-exp span{display:none}#ps-app .ps-actions .ps-exp{width:32px;padding:0}}#ps-app .ps-bfxgrid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}#ps-app .ps-bfx{flex-direction:column;gap:5px;padding:9px 4px;height:auto;white-space:normal;text-align:center;font-size:11px;line-height:1.15}#ps-app .ps-bfx svg{width:22px;height:22px}#ps-app .ps-bfx.on{border-color:var(--a);background:rgba(255,79,123,.13);color:#fff}#ps-app .ps-aist{font-size:11.5px;color:var(--mu);display:inline-flex;align-items:center;gap:4px;margin-left:auto}#ps-app .ps-aist.ok{color:var(--ok)}#ps-app .ps-aist.busy{color:#ffd23f}#ps-app .ps-aist.busy::before{content:\"\";width:10px;height:10px;border-radius:50%;border:2px solid #5a5f68;border-top-color:#ffd23f;animation:ps-spin .8s linear infinite}#ps-app .ps-ckrow{display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px}#ps-app .ps-3dtog{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--ln);border-radius:12px;background:linear-gradient(135deg,rgba(255,79,123,.12),rgba(255,122,32,.08));cursor:pointer}#ps-app .ps-3dtog input{width:18px;height:18px;accent-color:var(--a);flex:0 0 auto}#ps-app .ps-3dtog b{display:block;font-size:12.5px}#ps-app .ps-3dtog small{display:block;color:var(--mu);font-size:11px}@media (max-width:820px){#ps-app .ps-bfxgrid{grid-template-columns:repeat(5,minmax(0,1fr))}#ps-app .ps-bfx{font-size:10px;padding:7px 2px}}@media (max-width:380px){#ps-app .ps-bfxgrid{grid-template-columns:repeat(3,minmax(0,1fr))}}#ps-app .ps-tpls{display:grid;grid-template-columns:repeat(auto-fill,minmax(132px,1fr));gap:8px}#ps-app .ps-tplb{flex-direction:column;align-items:stretch;gap:4px;padding:6px;white-space:normal;text-align:left;height:auto}#ps-app .ps-tplb canvas{width:100%;height:auto;border-radius:8px;display:block;background:#2a2f36}#ps-app .ps-tplb b{font-size:12px}#ps-app .ps-tplb small{font-size:10.5px;color:var(--mu);line-height:1.25}#ps-app .ps-tplb.on{border-color:var(--a);background:rgba(255,79,123,.12)}#ps-app .ps-ghost{position:absolute;z-index:60;width:72px;height:72px;border-radius:12px;border:2px solid #fff;box-shadow:0 12px 30px rgba(0,0,0,.5);pointer-events:none;object-fit:cover;opacity:.92;transform:rotate(-4deg)}#ps-app .ps-start.ps-start3{grid-template-columns:repeat(3,minmax(0,1fr))}#ps-app .ps-big3{background:linear-gradient(160deg,#3a2430,#22191f);border-color:#5a3346}#ps-app .ps-big3 small{color:#d8a9bc}#ps-app .ps-tray .ps-th[data-drag]{touch-action:pan-x}@media (max-width:600px){#ps-app .ps-start.ps-start3{grid-template-columns:1fr 1fr}#ps-app .ps-start.ps-start3 .ps-big3{grid-column:1/-1}}#ps-app .ps-platnote{display:flex;gap:6px;align-items:flex-start;color:#cfe9d8;background:rgba(60,207,122,.08);border:1px solid rgba(60,207,122,.25);border-radius:9px;padding:7px 9px;margin:0}#ps-app .ps-platnote svg{color:var(--ok);margin-top:1px}#ps-app .ps-ok{color:var(--ok);display:flex;gap:6px;align-items:center;margin:0;font-size:12px}#ps-app .ps-print{display:flex;flex-direction:column;gap:8px}#ps-app .ps-print .ps-chip small{display:block;font-size:10px;color:var(--mu);font-weight:400}#ps-app .ps-print .ps-chip{flex-direction:column;gap:1px;line-height:1.15;padding-top:6px;padding-bottom:6px}#ps-app .ps-big{white-space:normal;text-align:center;min-width:0}#ps-app .ps-big b,#ps-app .ps-big small{display:block;max-width:100%;overflow-wrap:anywhere;line-height:1.3}"; document.head.appendChild(st); } })();
/* ---- b-core.js ---- */
/* ================= DASAR ================= */
const A = document.getElementById('ps-app'); if (!A) return;
const $ = (s, r) => (r || A).querySelector(s), $$ = (s, r) => Array.from((r || A).querySelectorAll(s));
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const clone = o => o == null ? o : JSON.parse(JSON.stringify(o));
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const isMobile = () => window.matchMedia('(max-width:820px)').matches;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const raf = () => new Promise(r => requestAnimationFrame(() => r()));
const CDN = 'https://cdn.jsdelivr.net/npm/';
const LIB = {
  tf: CDN + '@tensorflow/tfjs@4.22.0/dist/tf.min.js',
  sr2: CDN + '@upscalerjs/esrgan-slim@1.0.0/models/x2/model.json',
  sr4: CDN + '@upscalerjs/esrgan-slim@1.0.0/models/x4/model.json',
  jpeg: CDN + '@jsquash/jpeg@1.6.0/encode.js',
  webp: CDN + '@jsquash/webp@1.5.0/encode.js',
  pako: CDN + 'pako@1.0.11/dist/pako.min.js',
  upng: CDN + 'upng-js@2.1.0/UPNG.js',
  zip: CDN + 'jszip@3.10.1/dist/jszip.min.js'
};
const libCache = {};
function loadLib(url, g) {
  if (g && window[g]) return Promise.resolve(window[g]); if (libCache[url]) return libCache[url];
  libCache[url] = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = url; s.async = true; s.crossOrigin = 'anonymous';
    s.onload = () => res(g ? window[g] : true);
    s.onerror = () => { delete libCache[url]; rej(new Error('Gagal memuat pustaka. Periksa koneksi internet.')); };
    document.head.appendChild(s);
  });
  return libCache[url];
}
function loadMod(url) {
  if (libCache[url]) return libCache[url];
  libCache[url] = import(url).catch(e => { delete libCache[url]; throw e; });
  return libCache[url];
}
let toastT = null;
function toast(m, long) { const t = $('#ps-toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), long ? 5200 : 2800); }
function modal(inner, cls) {
  const m = document.createElement('div'); m.className = 'ps-modal';
  m.innerHTML = '<div class="ps-dlg ' + (cls || '') + '" role="dialog" aria-modal="true">' + inner + '</div>';
  $('#ps-layer').appendChild(m);
  m.addEventListener('click', ev => { if (ev.target === m && !m.dataset.sticky || ev.target.closest('[data-close]')) closeModal(m); });
  return m;
}
function closeModal(m) { if (m && m.parentNode) { m.remove(); if (m.onclose) m.onclose(); } }
function ask(title, msg, buttons) {
  return new Promise(res => {
    const m = modal('<h3>' + title + '</h3><p>' + msg + '</p><div class="ps-dlgbtns">' + buttons.map((b, i) => '<button data-i="' + i + '"' + (b.go ? ' class="ps-go"' : b.danger ? ' class="ps-danger"' : '') + '>' + b.label + '</button>').join('') + '</div>', 'ps-small');
    m.onclose = () => res(null);
    m.addEventListener('click', ev => { const b = ev.target.closest('button[data-i]'); if (b) { m.onclose = null; m.remove(); res(buttons[+b.dataset.i].v); } });
  });
}
let busyCancel = null;
function busy(on, text, pct, cancel) {
  const b = $('#ps-busy');
  b.hidden = !on; if (!on) { busyCancel = null; return; }
  b.querySelector('span').textContent = text || 'Memproses\u2026';
  const bar = b.querySelector('i'); bar.style.width = pct == null ? '0' : clamp(pct, 0, 100) + '%'; bar.parentNode.hidden = pct == null;
  if (cancel !== undefined) busyCancel = cancel;
  b.querySelector('button').hidden = !busyCancel;
}
let pickMark = 0;
function download(blob, name) {
  pickMark = Date.now();
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 6000);
}
function fmtKB(n) { return n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(n < 10240 ? 1 : 0).replace('.', ',') + ' KB' : (n / 1048576).toFixed(2).replace('.', ',') + ' MB'; }
function debounce(fn, ms) { let t = 0; return function () { const a = arguments; clearTimeout(t); t = setTimeout(() => fn.apply(null, a), ms); }; }
function mkCanvas(w, h) { const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; }
function canvasBlob(c, type, q) { return new Promise((res, rej) => c.toBlob(b => b ? res(b) : rej(new Error('Gagal membuat gambar')), type || 'image/png', q)); }
function f2h(v) {
  const fb = f2h.fb || (f2h.fb = new Float32Array(1)), ib = f2h.ib || (f2h.ib = new Uint32Array(fb.buffer));
  fb[0] = v; const x = ib[0], s = (x >>> 16) & 0x8000; let e = ((x >>> 23) & 0xff) - 112; const m = x & 0x7fffff;
  if (e <= 0) return s; if (e > 30) return s | 0x7bff;
  const r = (e << 10) + ((m + 0x1000) >> 13); return s | (r > 0x7bff ? 0x7bff : r);
}
const ICO = {
  plus: '<path d="M8 3v10M3 8h10"/>',
  undo: '<path d="M5 4 2 7l3 3"/><path d="M2 7h7.5a4 4 0 0 1 0 8H7"/>',
  redo: '<path d="m11 4 3 3-3 3"/><path d="M14 7H6.5a4 4 0 0 0 0 8H9"/>',
  grid: '<rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/>',
  dl: '<path d="M8 2v8M5 7l3 3 3-3M3 13h10"/>',
  full: '<path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4"/>',
  folder: '<path d="M2 4.5A1.5 1.5 0 0 1 3.5 3H6l1.5 1.5h5A1.5 1.5 0 0 1 14 6v5.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5z"/>',
  hd: '<rect x="1.5" y="3.5" width="13" height="9" rx="2"/><path d="M4.5 6v4M4.5 8h2.5M7 6v4M9.5 6v4h1a2 2 0 0 0 0-4z"/>',
  wand: '<path d="m3 13 7-7M9 3l.6 1.4L11 5l-1.4.6L9 7l-.6-1.4L7 5l1.4-.6zM13 7l.4.9.9.4-.9.4-.4.9-.4-.9-.9-.4.9-.4z"/>',
  color: '<circle cx="8" cy="8" r="6"/><path d="M8 2a6 6 0 0 0 0 12z" fill="currentColor"/>',
  sun: '<circle cx="8" cy="8" r="2.6"/><path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4"/>',
  text: '<path d="M3 4V3h10v1M8 3v10M6 13h4"/>',
  eraser: '<path d="m6 13 7.2-7.2a1.4 1.4 0 0 0 0-2L11.2 1.8a1.4 1.4 0 0 0-2 0L2 9l4 4zM6 13h8M4.5 6.5l5 5"/>',
  crop: '<path d="M4 1v11h11M1 4h11v11"/>',
  x: '<path d="m4 4 8 8M12 4l-8 8"/>',
  check: '<path d="m3 8.5 3 3 7-7"/>',
  eye: '<path d="M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z"/><circle cx="8" cy="8" r="2"/>',
  fit: '<rect x="2.5" y="2.5" width="11" height="11" rx="1.5"/><path d="M5.5 8h5M8 5.5v5"/>',
  img: '<rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><circle cx="5.5" cy="6" r="1.3"/><path d="m2 12 4-4 3 3 2-2 3.5 3.5"/>',
  trash: '<path d="M2.5 4h11M6 4V2.5h4V4M4 4l.7 9.5h6.6L12 4"/>',
  copy: '<rect x="5" y="5" width="8.5" height="8.5" rx="1.3"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5"/>',
  swap: '<path d="M2 5h10l-2.5-2.5M14 11H4l2.5 2.5"/>',
  edit: '<path d="M10.5 2.5 13.5 5.5 5.5 13.5H2.5v-3z"/>',
  rotl: '<path d="M2.5 3v3.5H6"/><path d="M2.9 6.3A5.5 5.5 0 1 1 3 10"/>',
  rotr: '<path d="M13.5 3v3.5H10"/><path d="M13.1 6.3A5.5 5.5 0 1 0 13 10"/>',
  fliph: '<path d="M8 1.5v13M6 4 2 12h4zM10 4l4 8h-4z"/>',
  flipv: '<path d="M1.5 8h13M4 6l8-4v4zM4 10l8 4v-4z"/>',
  share: '<circle cx="12" cy="3.5" r="1.8"/><circle cx="4" cy="8" r="1.8"/><circle cx="12" cy="12.5" r="1.8"/><path d="m5.6 7.1 4.8-2.7M5.6 8.9l4.8 2.7"/>',
  up: '<path d="m4 10 4-4 4 4"/>', down: '<path d="m4 6 4 4 4-4"/>',
  brush: '<path d="M14 2 7 9M5 9.5a2.2 2.2 0 0 0-2.2 2.2c0 1-.8 1.8-1.3 2.3 2.8.4 5.7-.6 5.7-3.1A2.2 2.2 0 0 0 5 9.5z"/>',
  sparkle: '<path d="M8 1.5 9.4 6.6 14.5 8 9.4 9.4 8 14.5 6.6 9.4 1.5 8l5.1-1.4z"/>',
  layers: '<path d="M8 2 14 5.2 8 8.4 2 5.2zM2 8l6 3.2L14 8M2 10.8 8 14l6-3.2"/>',
  link: '<path d="M6.5 9.5l3-3M7 4.5l1.2-1.2a2.8 2.8 0 0 1 4 4L11 8.5M9 11.5l-1.2 1.2a2.8 2.8 0 0 1-4-4L5 7.5"/>',
  zoom: '<circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3.5 3.5M5 7h4M7 5v4"/>'
};
const ic = n => '<svg viewBox="0 0 16 16">' + (ICO[n] || '') + '</svg>';

/* ---------- IndexedDB ---------- */
const DB = (() => {
  let p = null;
  function open() {
    if (p) return p;
    p = new Promise((res, rej) => {
      if (!window.indexedDB) return rej(new Error('no idb'));
      const r = indexedDB.open('mengetik-photo-studio', 1);
      r.onupgradeneeded = () => { r.result.createObjectStore('kv'); };
      r.onsuccess = () => res(r.result); r.onerror = () => { p = null; rej(r.error); };
    });
    return p;
  }
  function tx(mode, fn) {
    return open().then(db => new Promise((res, rej) => {
      const t = db.transaction('kv', mode), s = t.objectStore('kv'); let out;
      const rq = fn(s); if (rq) rq.onsuccess = () => { out = rq.result; };
      t.oncomplete = () => res(out); t.onerror = t.onabort = () => rej(t.error);
    }));
  }
  return {
    get: k => tx('readonly', s => s.get(k)).catch(() => undefined),
    set: (k, v) => tx('readwrite', s => s.put(v, k)),
    del: k => tx('readwrite', s => s.delete(k)).catch(() => {}),
    keys: () => tx('readonly', s => s.getAllKeys()).catch(() => [])
  };
})();


/* ---- c-color.js ---- */
/* ================= WARNA: OKLAB, LUT, LOOK ================= */
const s2l = x => x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
const l2s = x => x <= 0 ? 0 : x <= 0.0031308 ? x * 12.92 : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
const S2L = new Float32Array(256); for (let i = 0; i < 256; i++) S2L[i] = s2l(i / 255);
function lin2ok(r, g, b, o) {
  let l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b, m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b, s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
  l = Math.cbrt(l); m = Math.cbrt(m); s = Math.cbrt(s);
  o[0] = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s;
  o[1] = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s;
  o[2] = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s;
}
function ok2lin(L, a, b, o) {
  let l = L + 0.3963377774 * a + 0.2158037573 * b, m = L - 0.1055613458 * a - 0.0638541728 * b, s = L - 0.0894841775 * a - 1.2914855480 * b;
  l = l * l * l; m = m * m * m; s = s * s * s;
  o[0] = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  o[1] = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  o[2] = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;
}
function hsv2rgb(h, s, v) {
  h = ((h % 360) + 360) % 360 / 60; const i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - s * f), t = v * (1 - s * (1 - f));
  return [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][i % 6];
}
function hex2rgb(hx) { hx = String(hx || '#000').replace('#', ''); if (hx.length === 3) hx = hx.replace(/./g, '$&$&'); const n = parseInt(hx, 16) || 0; return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
const _t3 = [0, 0, 0];
/* arah hue (derajat roda warna biasa) dalam ruang OkLab */
function hueDir(deg) { const c = hsv2rgb(deg, 1, 1); lin2ok(s2l(c[0]), s2l(c[1]), s2l(c[2]), _t3); const n = Math.hypot(_t3[1], _t3[2]) || 1; return [_t3[1] / n, _t3[2] / n]; }
const HSL_KEYS = ['r', 'o', 'y', 'g', 'a', 'b', 'p', 'm'];
const HSL_NAMES = ['Merah', 'Oranye', 'Kuning', 'Hijau', 'Toska', 'Biru', 'Ungu', 'Magenta'];
const HSL_SW = ['#e5413a', '#f28a2e', '#efd23a', '#4cc34a', '#35c6c9', '#3a6ff0', '#8a4cf0', '#e44bc6'];
const HSL_C = [0, 30, 60, 120, 180, 235, 275, 315].map(d => { const v = hueDir(d); return Math.atan2(v[1], v[0]); });
function hueWeights(h, w) {
  for (let i = 0; i < 8; i++) w[i] = 0;
  for (let i = 0; i < 8; i++) {
    const c0 = HSL_C[i], c1 = HSL_C[(i + 1) % 8];
    let span = c1 - c0; while (span <= 0) span += Math.PI * 2;
    let d = h - c0; while (d < 0) d += Math.PI * 2; while (d >= Math.PI * 2) d -= Math.PI * 2;
    if (d <= span) { const t = d / span, s = t * t * (3 - 2 * t); w[i] += 1 - s; w[(i + 1) % 8] += s; return; }
  }
}
/* kurva monoton (Fritsch-Carlson) -> tabel 1024 */
function curveTable(pts) {
  pts = pts.slice().sort((a, b) => a[0] - b[0]); if (pts[0][0] > 0) pts.unshift([0, pts[0][1]]); if (pts[pts.length - 1][0] < 1) pts.push([1, pts[pts.length - 1][1]]);
  const n = pts.length, x = pts.map(p => p[0]), y = pts.map(p => p[1]), d = [], m = [];
  for (let i = 0; i < n - 1; i++) d.push((y[i + 1] - y[i]) / Math.max(1e-6, x[i + 1] - x[i]));
  m[0] = d[0]; m[n - 1] = d[n - 2];
  for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  for (let i = 0; i < n - 1; i++) { if (d[i] === 0) { m[i] = m[i + 1] = 0; continue; } const a = m[i] / d[i], b = m[i + 1] / d[i], s = a * a + b * b; if (s > 9) { const t = 3 / Math.sqrt(s); m[i] = t * a * d[i]; m[i + 1] = t * b * d[i]; } }
  const T = new Float32Array(1025); let k = 0;
  for (let j = 0; j <= 1024; j++) {
    const xv = j / 1024; while (k < n - 2 && xv > x[k + 1]) k++;
    const hh = x[k + 1] - x[k] || 1e-6, t = (xv - x[k]) / hh, t2 = t * t, t3 = t2 * t;
    T[j] = (2 * t3 - 3 * t2 + 1) * y[k] + (t3 - 2 * t2 + t) * hh * m[k] + (-2 * t3 + 3 * t2) * y[k + 1] + (t3 - t2) * hh * m[k + 1];
  }
  return T;
}
const ctab = (T, v) => { v = v <= 0 ? 0 : v >= 1 ? 1 : v; const f = v * 1024, i = f | 0, t = f - i; return i >= 1024 ? T[1024] : T[i] + (T[i + 1] - T[i]) * t; };

/* ----- compile ops -> fungsi (rgb sRGB in/out, dalam array) ----- */
function compileOps(ops) {
  const fns = [];
  const L3 = [0, 0, 0], R3 = [0, 0, 0], W8 = new Float32Array(8);
  for (const op of ops || []) {
    if (!op) continue;
    if (op.wb && (op.wb[0] || op.wb[1])) {
      const t = op.wb[0], ti = op.wb[1] || 0; let gr = 1 + 0.22 * t, gg = 1 - 0.14 * ti, gb = 1 - 0.22 * t; const n = 0.2126 * gr + 0.7152 * gg + 0.0722 * gb; gr /= n; gg /= n; gb /= n;
      fns.push(c => { c[0] = l2s(s2l(c[0]) * gr); c[1] = l2s(s2l(c[1]) * gg); c[2] = l2s(s2l(c[2]) * gb); });
    }
    if (op.exp) { const k = Math.pow(2, op.exp); fns.push(c => { for (let i = 0; i < 3; i++) { const v = s2l(c[i]) * k; c[i] = l2s(v > 0.8 ? 0.8 + 0.2 * (1 - Math.exp(-(v - 0.8) / 0.2)) : v); } }); }
    if (op.curve) {
      const tm = op.curve.l ? curveTable(op.curve.l) : null, tr = op.curve.r ? curveTable(op.curve.r) : null, tg = op.curve.g ? curveTable(op.curve.g) : null, tb = op.curve.b ? curveTable(op.curve.b) : null;
      fns.push(c => { if (tm) { c[0] = ctab(tm, c[0]); c[1] = ctab(tm, c[1]); c[2] = ctab(tm, c[2]); } if (tr) c[0] = ctab(tr, c[0]); if (tg) c[1] = ctab(tg, c[1]); if (tb) c[2] = ctab(tb, c[2]); });
    }
    const tone = op.tone;
    const sat = op.sat || 0, vib = op.vib || 0, hsl = op.hsl, split = op.split, mono = op.mono, chr = op.chroma, match = op.match;
    const needOk = (tone && (tone.con || tone.fade || tone.crush || tone.gamma || tone.hi)) || sat || vib || hsl || split || mono || chr || match;
    if (!needOk) continue;
    const con = tone ? tone.con || 0 : 0, fade = tone ? tone.fade || 0 : 0, crush = tone ? tone.crush || 0 : 0, gam = tone ? tone.gamma || 0 : 0, hiR = tone ? tone.hi || 0 : 0;
    const H = hsl ? HSL_KEYS.map(k => hsl[k] || [0, 0, 0]) : null;
    const hasH = H && H.some(v => v[0] || v[1] || v[2]);
    let sp = null;
    if (split) {
      const f = (v) => v && v[1] ? (d => [d[0] * v[1] * 0.05, d[1] * v[1] * 0.05])(hueDir(v[0])) : [0, 0];
      sp = { sh: f(split.sh), mid: f(split.mid), hi: f(split.hi), bal: split.bal || 0 };
    }
    let mt = null; if (mono) { const d = mono.tone && mono.tone[1] ? hueDir(mono.tone[0]) : [0, 0]; mt = [d[0] * (mono.tone ? mono.tone[1] : 0) * 0.08, d[1] * (mono.tone ? mono.tone[1] : 0) * 0.08]; }
    fns.push(c => {
      lin2ok(s2l(c[0]), s2l(c[1]), s2l(c[2]), L3);
      let L = L3[0], a = L3[1], b = L3[2];
      let C = Math.hypot(a, b), h = Math.atan2(b, a);
      /* tone */
      if (con) { const x = L < 0 ? 0 : L > 1 ? 1 : L; const s = x * x * (3 - 2 * x); L = x + (s - x) * con * 1.25; if (con < 0) L = x + (s - x) * con * 1.0; }
      if (gam) L = Math.pow(Math.max(0, L), Math.pow(2, -gam));
      if (hiR) { const t = Math.max(0, L - 0.65) / 0.35; L -= hiR * 0.12 * t * t; }
      if (crush) { L = Math.max(0, (L - crush * 0.08) / (1 - crush * 0.08)); }
      if (fade) L = fade * 0.14 + L * (1 - fade * 0.14 - fade * 0.04);
      /* chroma */
      if (mono) { C = 0; a = 0; b = 0; }
      else {
        if (hasH) {
          hueWeights(h, W8); let dh = 0, ds = 0, dl = 0;
          for (let i = 0; i < 8; i++) if (W8[i]) { dh += W8[i] * H[i][0]; ds += W8[i] * H[i][1]; dl += W8[i] * H[i][2]; }
          const cw = Math.min(1, C / 0.06);
          h += dh * 0.5 * cw; C *= Math.max(0, 1 + ds); L += dl * 0.16 * cw * (L < 0.5 ? L * 2 : 1);
        }
        if (vib) { const sk = Math.exp(-Math.pow((h - 0.85) / 0.45, 2)); const k = vib * (1 - Math.min(1, C / 0.22)) * (1 - 0.5 * sk); C *= Math.max(0, 1 + k * 1.1); }
        if (sat) C *= Math.max(0, 1 + sat);
        if (chr) { const lw = 1 - Math.min(1, L / 0.35), hw = Math.max(0, L - 0.7) / 0.3; C *= 1 - (chr.sh || 0) * lw * 0.8 - (chr.hi || 0) * hw * 0.8; if (C < 0) C = 0; }
        a = C * Math.cos(h); b = C * Math.sin(h);
      }
      if (sp) {
        const x = Math.max(0, Math.min(1, L)), bal = sp.bal * 0.25;
        const ws = Math.max(0, 1 - x / (0.55 + bal)), wh = Math.max(0, (x - 0.45 - bal) / (0.55 - bal)), wm = Math.max(0, 1 - Math.abs(x - 0.5) * 2.2);
        a += sp.sh[0] * ws + sp.hi[0] * wh + sp.mid[0] * wm; b += sp.sh[1] * ws + sp.hi[1] * wh + sp.mid[1] * wm;
      }
      if (mt) { const w = Math.sin(Math.PI * Math.max(0, Math.min(1, L))); a += mt[0] * w; b += mt[1] * w; }
      if (match) {
        const m = match, k = m.amt;
        const nL = m.keep ? L : m.mu[0] + (L - m.tmu[0]) * m.rs[0];
        const na = m.mu[1] + (a - m.tmu[1]) * m.rs[1], nb = m.mu[2] + (b - m.tmu[2]) * m.rs[2];
        L += (nL - L) * k; a += (na - a) * k; b += (nb - b) * k;
      }
      /* kembali, dengan kompresi gamut ringan */
      for (let it = 0; it < 4; it++) {
        ok2lin(L, a, b, R3);
        if (R3[0] >= -0.002 && R3[1] >= -0.002 && R3[2] >= -0.002 && R3[0] <= 1.002 && R3[1] <= 1.002 && R3[2] <= 1.002) break;
        if (L >= 1 || L <= 0) break; a *= 0.85; b *= 0.85;
      }
      c[0] = l2s(R3[0]); c[1] = l2s(R3[1]); c[2] = l2s(R3[2]);
    });
  }
  return fns;
}
function runFns(fns, c) { for (let i = 0; i < fns.length; i++) fns[i](c); for (let i = 0; i < 3; i++) c[i] = c[i] < 0 ? 0 : c[i] > 1 ? 1 : c[i]; }

/* ops dari parameter pengguna (bagian global yang masuk LUT) */
function userOps(p) {
  return [{ tone: { con: p.con, fade: p.fade }, sat: p.sat, vib: p.vib, hsl: p.hsl, split: p.grade && (p.grade.sh[1] || p.grade.hi[1] || p.grade.mid[1]) ? p.grade : null }];
}
function matchOp(p) {
  const m = p.match; if (!m || !m.amt || !m.ref) return null;
  const rs = [0, 1, 2].map(i => clamp(m.ref.sd[i] / Math.max(1e-4, m.tgt.sd[i]), i ? 0.4 : 0.6, i ? 2.2 : 1.6));
  return { match: { mu: m.ref.mu, tmu: m.tgt.mu, rs, amt: m.amt, keep: m.keep } };
}
const lutCache = { key: '', data: null };
function buildLUT(p, N) {
  N = N || 33;
  const look = LOOKS_BY_ID[p.look && p.look.id];
  const key = N + JSON.stringify([p.con, p.fade, p.sat, p.vib, p.hsl, p.grade, p.look, p.match && [p.match.amt, p.match.keep, p.match.ref && p.match.ref.mu, p.match.tgt && p.match.tgt.mu]]);
  if (lutCache.key === key) return lutCache.data;
  const fu = compileOps(userOps(p));
  const fl = look && p.look.amt ? compileOps(look.ops) : null, la = p.look ? p.look.amt : 0;
  const mo = matchOp(p), fm = mo ? compileOps([mo]) : null;
  const out = new Uint16Array(N * N * N * 4), c = [0, 0, 0], c0 = [0, 0, 0];
  let o = 0;
  for (let bi = 0; bi < N; bi++) for (let gi = 0; gi < N; gi++) for (let ri = 0; ri < N; ri++) {
    c[0] = ri / (N - 1); c[1] = gi / (N - 1); c[2] = bi / (N - 1);
    runFns(fu, c);
    if (fl) { c0[0] = c[0]; c0[1] = c[1]; c0[2] = c[2]; runFns(fl, c); for (let i = 0; i < 3; i++) c[i] = c0[i] + (c[i] - c0[i]) * la; }
    if (fm) runFns(fm, c);
    out[o++] = f2h(c[0]); out[o++] = f2h(c[1]); out[o++] = f2h(c[2]); out[o++] = 0x3c00;
  }
  lutCache.key = key; lutCache.data = { N, data: out, key };
  return lutCache.data;
}
/* evaluasi ops pada piksel ImageData (untuk thumbnail look & statistik) */
function applyOpsPixels(src, dst, ops, amt) {
  const f = compileOps(ops), c = [0, 0, 0], d = src.data, o = dst.data;
  for (let i = 0; i < d.length; i += 4) {
    c[0] = d[i] / 255; c[1] = d[i + 1] / 255; c[2] = d[i + 2] / 255;
    const r = c[0], g = c[1], b = c[2];
    runFns(f, c);
    if (amt != null && amt < 1) { c[0] = r + (c[0] - r) * amt; c[1] = g + (c[1] - g) * amt; c[2] = b + (c[2] - b) * amt; }
    o[i] = c[0] * 255 + 0.5; o[i + 1] = c[1] * 255 + 0.5; o[i + 2] = c[2] * 255 + 0.5; o[i + 3] = 255;
  }
}
/* statistik OkLab untuk Match Color */
function labStats(id) {
  const d = id.data, o = [0, 0, 0]; let n = 0; const s = [0, 0, 0], q = [0, 0, 0];
  for (let i = 0; i < d.length; i += 16) {
    lin2ok(S2L[d[i]], S2L[d[i + 1]], S2L[d[i + 2]], o);
    for (let k = 0; k < 3; k++) { s[k] += o[k]; q[k] += o[k] * o[k]; } n++;
  }
  const mu = s.map(v => v / n), sd = q.map((v, k) => Math.sqrt(Math.max(1e-8, v / n - mu[k] * mu[k])));
  return { mu, sd };
}

/* ================= LOOK / COLOR GRADING ================= */
const LOOK_CATS = [['nat', 'Natural'], ['jp', 'Jepang'], ['kr', 'Korea'], ['eu', 'Eropa'], ['film', 'Film'], ['cine', 'Sinematik'], ['wed', 'Wedding'], ['night', 'Malam'], ['bw', 'Hitam Putih']];
const LOOKS = [
  { id: 'natpro', cat: 'nat', name: 'Natural Pro', ops: [{ tone: { con: 0.12, fade: 0.02 }, vib: 0.18, hsl: { o: [0, -0.05, 0.05], g: [0.1, -0.15, 0], b: [-0.04, 0.08, 0] } }] },
  { id: 'clean', cat: 'nat', name: 'Bersih Cerah', ops: [{ exp: 0.18 }, { tone: { con: 0.08, fade: 0.03 }, sat: -0.05, vib: 0.1, hsl: { o: [0, -0.1, 0.08] }, split: { hi: [50, 0.4] } }] },
  { id: 'warmsoft', cat: 'nat', name: 'Hangat Lembut', ops: [{ wb: [0.25, 0.03] }, { tone: { con: -0.05, fade: 0.06 }, vib: 0.05, split: { sh: [30, 0.8] } }] },
  { id: 'coolclean', cat: 'nat', name: 'Sejuk Bersih', ops: [{ wb: [-0.2, 0] }, { tone: { con: 0.1 }, sat: -0.05, split: { sh: [210, 0.7] } }] },
  { id: 'vivid', cat: 'nat', name: 'Vivid Pop', ops: [{ tone: { con: 0.25 }, vib: 0.35, sat: 0.1 }] },
  { id: 'jpairy', cat: 'jp', name: 'Japan Airy', ops: [{ exp: 0.25, wb: [-0.1, -0.05] }, { tone: { con: -0.18, fade: 0.1 }, sat: -0.15, hsl: { g: [0.25, -0.3, 0.1], y: [0.15, -0.2, 0.05], b: [-0.05, -0.1, 0.1], o: [0, -0.1, 0.08] }, split: { sh: [180, 1.1], hi: [40, 0.4] } }] },
  { id: 'chrome', cat: 'jp', name: 'Classic Chrome', ops: [{ tone: { con: 0.18, fade: 0.03 }, sat: -0.25, hsl: { r: [0, -0.1, -0.05], b: [0.05, -0.15, -0.1], g: [0.1, -0.2, -0.05] }, split: { sh: [200, 0.7], hi: [45, 0.5] }, chroma: { sh: 0.3 } }] },
  { id: 'pro400h', cat: 'jp', name: 'Pro 400H', ops: [{ exp: 0.1, wb: [-0.05, -0.08] }, { tone: { con: -0.05, fade: 0.08 }, hsl: { g: [0.2, -0.1, 0.05], o: [0, -0.08, 0.05], b: [-0.1, 0, 0] }, split: { sh: [160, 0.9], hi: [30, 0.45] } }] },
  { id: 'tokyo', cat: 'jp', name: 'Tokyo Night', ops: [{ wb: [-0.2, 0.1] }, { tone: { con: 0.15, fade: 0.04 }, vib: 0.1, split: { sh: [200, 1.5], hi: [320, 0.7] }, hsl: { o: [0, 0, 0.05], y: [-0.3, -0.2, 0], b: [0.05, 0.2, 0], p: [0, 0.2, 0] } }] },
  { id: 'kyoto', cat: 'jp', name: 'Kyoto Matcha', ops: [{ wb: [0.1, -0.08] }, { tone: { con: -0.05, fade: 0.07 }, sat: -0.1, hsl: { g: [-0.15, -0.25, 0.05], y: [-0.1, -0.1, 0.05] }, split: { hi: [60, 0.5], sh: [150, 0.5] } }] },
  { id: 'superia', cat: 'jp', name: 'Film Jepang', ops: [{ tone: { con: 0.08, fade: 0.06 }, split: { sh: [170, 0.9] }, hsl: { g: [0.15, 0.05, 0], r: [0.05, 0.05, 0] } }, { curve: { b: [[0, 0.03], [0.5, 0.5], [1, 0.97]] } }] },
  { id: 'krpink', cat: 'kr', name: 'Korean Soft', ops: [{ exp: 0.2, wb: [0, 0.08] }, { tone: { con: -0.12, fade: 0.08 }, sat: -0.1, split: { hi: [340, 0.5], sh: [300, 0.35] }, hsl: { o: [0.02, -0.12, 0.1] } }] },
  { id: 'seoul', cat: 'kr', name: 'Seoul Cafe', ops: [{ wb: [0.15, 0.02] }, { tone: { con: -0.08, fade: 0.1 }, sat: -0.12, split: { hi: [45, 0.7], sh: [30, 0.45] } }] },
  { id: 'krclear', cat: 'kr', name: 'Glass Skin', ops: [{ exp: 0.22, wb: [-0.06, 0.04] }, { tone: { con: -0.06, fade: 0.04, hi: 0.3 }, sat: -0.06, hsl: { o: [0.03, -0.18, 0.14], r: [0, -0.1, 0.05] }, split: { hi: [330, 0.25] } }] },
  { id: 'paris', cat: 'eu', name: 'Paris Golden', ops: [{ wb: [0.2, 0.04] }, { tone: { con: 0.1, fade: 0.04 }, split: { hi: [45, 0.9], sh: [220, 0.45] }, hsl: { b: [-0.05, -0.15, 0], g: [-0.1, -0.2, 0] } }] },
  { id: 'nordic', cat: 'eu', name: 'Nordic Cool', ops: [{ wb: [-0.18, 0] }, { tone: { con: 0.05, fade: 0.06 }, sat: -0.25, split: { sh: [210, 0.9], hi: [200, 0.25] } }] },
  { id: 'medi', cat: 'eu', name: 'Mediterania', ops: [{ tone: { con: 0.15 }, vib: 0.25, hsl: { b: [-0.05, 0.2, -0.05], a: [0.05, 0.2, 0], o: [0, 0.1, 0.05] }, split: { hi: [40, 0.5] } }] },
  { id: 'tuscany', cat: 'eu', name: 'Tuscany', ops: [{ wb: [0.3, 0.05] }, { tone: { con: 0.12, fade: 0.05 }, hsl: { g: [-0.2, -0.15, 0], y: [-0.05, 0.1, 0] }, split: { hi: [40, 0.9], sh: [25, 0.5] } }] },
  { id: 'london', cat: 'eu', name: 'London Moody', ops: [{ exp: -0.15 }, { tone: { con: 0.2, fade: 0.08 }, sat: -0.3, split: { sh: [200, 1.0], hi: [40, 0.35] }, chroma: { hi: 0.3 } }] },
  { id: 'alpine', cat: 'eu', name: 'Swiss Alpine', ops: [{ exp: 0.1, wb: [-0.08, 0] }, { tone: { con: 0.12 }, vib: 0.15, hsl: { b: [0, 0.15, -0.08], g: [0.05, 0.05, 0] } }] },
  { id: 'portra', cat: 'film', name: 'Portra 400', ops: [{ wb: [0.08, 0.02] }, { tone: { con: 0.04, fade: 0.05 }, sat: -0.05, hsl: { o: [0.02, -0.05, 0.06], g: [0.12, -0.15, 0], b: [-0.05, -0.1, 0] }, split: { sh: [190, 0.45], hi: [40, 0.45] } }, { curve: { r: [[0, 0.02], [1, 1]], b: [[0, 0.04], [1, 0.97]] } }] },
  { id: 'gold200', cat: 'film', name: 'Kodak Gold', ops: [{ wb: [0.22, 0.02] }, { tone: { con: 0.12, fade: 0.05 }, sat: 0.08, hsl: { y: [0, 0.15, 0], g: [-0.1, -0.1, 0] }, split: { hi: [50, 0.9] } }] },
  { id: 'cinestill', cat: 'film', name: 'Cinestill 800T', ops: [{ wb: [-0.35, 0.05] }, { tone: { con: 0.12, fade: 0.06 }, split: { sh: [190, 1.1], hi: [25, 0.5] }, hsl: { o: [0, 0, 0.05], r: [0.05, 0.1, 0] } }] },
  { id: 'polaroid', cat: 'film', name: 'Polaroid', ops: [{ wb: [0.05, 0.06] }, { tone: { con: -0.1, fade: 0.15 }, sat: -0.15, split: { sh: [180, 1.0], hi: [50, 0.9] } }] },
  { id: 'y2k', cat: 'film', name: 'Y2K Flash', ops: [{ exp: 0.1, wb: [-0.15, 0] }, { tone: { con: 0.3 }, sat: -0.05, split: { sh: [230, 0.9] } }] },
  { id: 'disposable', cat: 'film', name: 'Kamera Sekali Pakai', ops: [{ wb: [0.12, -0.06] }, { tone: { con: 0.2, fade: 0.1 }, sat: 0.05, hsl: { g: [0.1, 0.1, 0], y: [0, 0.15, 0] }, split: { sh: [150, 0.7], hi: [55, 0.6] } }] },
  { id: 'teal', cat: 'cine', name: 'Teal & Orange', ops: [{ tone: { con: 0.18, fade: 0.03 }, split: { sh: [190, 1.6], hi: [35, 0.9] }, hsl: { o: [0, 0.15, 0.05], y: [-0.15, 0, 0], g: [0.3, -0.3, -0.05], b: [-0.1, 0.1, -0.05], a: [0.05, 0.1, 0] } }] },
  { id: 'moody', cat: 'cine', name: 'Moody Dark', ops: [{ exp: -0.2 }, { tone: { con: 0.15, fade: 0.1 }, sat: -0.25, split: { sh: [200, 0.9] }, hsl: { g: [0.1, -0.4, -0.1], o: [0, -0.05, 0] } }] },
  { id: 'dune', cat: 'cine', name: 'Desert Dune', ops: [{ wb: [0.25, 0] }, { tone: { con: 0.08, fade: 0.06 }, sat: -0.1, hsl: { b: [0.1, -0.4, 0.05], g: [-0.2, -0.4, 0] }, split: { hi: [35, 0.9], sh: [30, 0.7] } }] },
  { id: 'pastel', cat: 'cine', name: 'Pastel Dream', ops: [{ exp: 0.2 }, { tone: { con: -0.2, fade: 0.12 }, sat: -0.1, split: { sh: [280, 0.5], hi: [50, 0.45] } }] },
  { id: 'bleach', cat: 'cine', name: 'Bleach Bypass', ops: [{ tone: { con: 0.35 }, sat: -0.45, chroma: { hi: 0.2 } }] },
  { id: 'ivory', cat: 'wed', name: 'Wedding Ivory', ops: [{ exp: 0.15, wb: [0.1, 0.03] }, { tone: { con: -0.06, fade: 0.05 }, sat: -0.08, hsl: { o: [0, -0.1, 0.08], g: [0.1, -0.3, 0] }, split: { hi: [45, 0.5] } }] },
  { id: 'fineart', cat: 'wed', name: 'Fine Art', ops: [{ exp: 0.2 }, { tone: { con: -0.15, fade: 0.08 }, sat: -0.15, hsl: { g: [0.2, -0.35, 0.08], o: [0, -0.08, 0.1], b: [0, -0.2, 0.1] }, split: { sh: [30, 0.45], hi: [40, 0.35] } }] },
  { id: 'romance', cat: 'wed', name: 'Romantis Rose', ops: [{ exp: 0.1, wb: [0.05, 0.1] }, { tone: { con: -0.04, fade: 0.06 }, sat: -0.05, split: { hi: [345, 0.6], sh: [320, 0.4] }, hsl: { r: [0.05, -0.05, 0.05], o: [0, -0.08, 0.08] } }] },
  { id: 'neon', cat: 'night', name: 'Neon Night', ops: [{ tone: { con: 0.2, fade: 0.03 }, vib: 0.3, split: { sh: [220, 1.3], hi: [320, 0.5] }, hsl: { p: [0, 0.2, 0], m: [0, 0.2, 0], b: [0, 0.2, 0] } }] },
  { id: 'streetgold', cat: 'night', name: 'Street Gold', ops: [{ wb: [0.15, 0] }, { tone: { con: 0.18, fade: 0.05 }, split: { sh: [200, 1.3], hi: [40, 1.0] }, hsl: { y: [-0.05, 0.1, 0], o: [0, 0.1, 0.05], g: [0.2, -0.3, 0] } }] },
  { id: 'bluehour', cat: 'night', name: 'Blue Hour', ops: [{ wb: [-0.25, 0.04] }, { tone: { con: 0.1, fade: 0.04 }, vib: 0.15, split: { sh: [225, 1.0], hi: [35, 0.4] } }] },
  { id: 'hp5', cat: 'bw', name: 'Ilford HP5', ops: [{ mono: {} }, { tone: { con: 0.25, fade: 0.04 } }] },
  { id: 'bwsoft', cat: 'bw', name: 'Mono Lembut', ops: [{ mono: { tone: [35, 0.4] } }, { tone: { con: -0.05, fade: 0.1 } }] },
  { id: 'noir', cat: 'bw', name: 'Noir', ops: [{ mono: {} }, { tone: { con: 0.45, crush: 0.4 } }] }
];
const LOOKS_BY_ID = {}; LOOKS.forEach(l => { LOOKS_BY_ID[l.id] = l; });

/* ================= ANALISIS OTOMATIS ================= */
function analyzePixels(id) {
  const d = id.data, n = d.length / 4, lum = new Float32Array(n);
  let sr = 0, sg = 0, sb = 0, sw = 0, skin = 0, mn = 0;
  for (let i = 0, j = 0; i < d.length; i += 4, j++) {
    const R = d[i], G = d[i + 1], B = d[i + 2];
    const r = S2L[R], g = S2L[G], b = S2L[B], L = 0.2126 * r + 0.7152 * g + 0.0722 * b; lum[j] = L;
    const mx = Math.max(r, g, b), mi = Math.min(r, g, b), s = mx > 0 ? (mx - mi) / mx : 0;
    if (L > 0.02 && L < 0.85 && s < 0.6) { const w = 1 - s; sr += r * w; sg += g * w; sb += b * w; sw += w; }
    const cb = -0.1687 * R - 0.3313 * G + 0.5 * B, cr = 0.5 * R - 0.4187 * G - 0.0813 * B, Y = 0.299 * R + 0.587 * G + 0.114 * B;
    if (cr > 8 && cr < 45 && cb > -50 && cb < -2 && Y > 45) skin++;
    mn += Math.min(R, G, B) / 255;
  }
  const s = Array.from(lum).sort((a, b) => a - b), q = f => s[Math.min(n - 1, Math.floor(f * n))];
  let lg = 0, lg2 = 0; for (let j = 0; j < n; j++) { const v = Math.log2(lum[j] + 1e-4); lg += v; lg2 += v * v; }
  lg /= n; const lsd = Math.sqrt(Math.max(0, lg2 / n - lg * lg));
  return { p01: q(0.01), p05: q(0.05), p25: q(0.25), p50: q(0.5), p95: q(0.95), p995: q(0.995), mean: lum.reduce((a, b) => a + b, 0) / n, lsd, wb: sw ? [sr / sw, sg / sw, sb / sw] : [1, 1, 1], skin: skin / n, minc: mn / n };
}
function autoParams(st, mode) {
  const M = { bal: { tgt: 0.18, k: 0.7, loc: 0.3, sh: 1, wb: 0.6 }, full: { tgt: 0.21, k: 0.85, loc: 0.6, sh: 1.5, wb: 0.6 }, night: { tgt: 0.1, k: 0.55, loc: 0.3, sh: 1.1, wb: 0.25 }, back: { tgt: 0.2, k: 0.6, loc: 0.75, sh: 1.8, wb: 0.5 } }[mode] || {};
  const o = {};
  const mid = Math.max(1e-3, mode === 'back' ? st.p25 * 1.6 : (st.p50 * 0.6 + st.mean * 0.4));
  o.exp = clamp(Math.log2(M.tgt / mid) * M.k, -1.5, 2.2);
  const g = Math.pow(2, o.exp), hi = st.p995 * g, lo = st.p05 * g;
  o.hi = hi > 0.9 ? -clamp(Math.log2(hi / 0.9) * 0.5 + 0.15, 0, 0.9) : 0;
  o.sh = lo < 0.03 ? clamp(Math.log2(0.03 / Math.max(lo, 1e-4)) * 0.14 * M.sh, 0, 0.9) : 0;
  const dr = Math.log2(Math.max(st.p995, 1e-3) / Math.max(st.p05, 1e-4));
  o.local = clamp(M.loc * clamp((dr - 4) / 5, 0.25, 1.2), 0, 1);
  const w = st.wb, rb = (w[2] - w[0]) / Math.max(1e-4, w[0] + w[2]), gm = ((w[0] + w[2]) / 2 - w[1]) / Math.max(1e-4, w[1]);
  o.temp = clamp(rb * 2.2, -0.7, 0.7) * M.wb; o.tint = clamp(-gm * 1.6, -0.5, 0.5) * M.wb;
  o.con = st.lsd < 1.3 ? 0.14 : st.lsd > 2.4 ? -0.06 : 0.06;
  o.vib = mode === 'night' ? 0.1 : 0.16;
  o.dehaze = st.p01 > 0.04 && st.minc > 0.25 ? clamp((st.p01 - 0.04) * 4, 0, 0.35) : 0;
  o.bl = st.p01 * g > 0.03 ? -clamp((st.p01 * g - 0.03) * 6, 0, 0.5) : 0;
  o.wh = hi < 0.75 ? clamp((0.75 - hi) * 1.2, 0, 0.5) : 0;
  if (mode === 'night') { o.nr = 0.35; o.nrC = 0.5; }
  return o;
}


/* ---- d-gl.js ---- */
/* ================= MESIN WEBGL2 ================= */
const VS = '#version 300 es\nin vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const FS_COPY = `#version 300 es
precision highp float;uniform sampler2D t;uniform vec2 sz;out vec4 o;
void main(){o=vec4(texture(t,gl_FragCoord.xy/sz).rgb,1.);}`;
const FS_BLUR = `#version 300 es
precision highp float;uniform sampler2D t;uniform vec2 sz,dir;uniform float sig;out vec4 o;
void main(){vec2 uv=gl_FragCoord.xy/sz;vec3 a=texture(t,uv).rgb;float ws=1.;int R=int(ceil(sig*2.5));
for(int i=1;i<64;i++){if(i>R)break;float fi=float(i);float w=exp(-fi*fi/(2.*sig*sig));a+=(texture(t,uv+dir*fi/sz).rgb+texture(t,uv-dir*fi/sz).rgb)*w;ws+=2.*w;}
o=vec4(a/ws,1.);}`;
const FS_BRIGHT = `#version 300 es
precision highp float;uniform sampler2D t;uniform vec2 sz;uniform float ex,thr;out vec4 o;
vec3 s2l(vec3 c){return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(.04045,c));}
vec3 l2s(vec3 c){c=max(c,0.);return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));}
void main(){vec3 l=s2l(texture(t,gl_FragCoord.xy/sz).rgb)*ex;float L=dot(l,vec3(.2126,.7152,.0722));
float k=smoothstep(thr,thr+.25,L);o=vec4(l2s(min(l*k,vec3(1.))),1.);}`;
const FS_MAIN = `#version 300 es
precision highp float;precision highp sampler3D;
uniform sampler2D uSrc,uBs,uBm,uBl,uLo,uBr0,uBr1,uBr2,uBrH;uniform sampler3D uLut;
uniform mat3 uMap;uniform vec2 uOut,uTx;uniform float uTop,uSS,uAsp,uOrig;
uniform vec4 uA,uB,uC,uD,uE;uniform vec3 uWb,uAir;
uniform vec4 uR0,uR1,uR2,uL0,uL1,uL2,uG,uF0,uF1,uF2,uF3,uK0,uK1,uFl,uN0,uN1,uN2,uS0,uS1,uFg0,uFg1,uSk;
out vec4 o;
const vec3 LW=vec3(.2126,.7152,.0722);
float lum(vec3 c){return dot(c,LW);}
vec3 s2l(vec3 c){c=clamp(c,0.,1.);return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(.04045,c));}
vec3 l2s(vec3 c){c=max(c,0.);return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));}
float h12(vec2 p){vec3 p3=fract(vec3(p.xyx)*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}
vec3 h32(vec2 p){vec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));p3+=dot(p3,p3.yxz+33.33);return fract((p3.xxy+p3.yzz)*p3.zyx);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h12(i),h12(i+vec2(1,0)),f.x),mix(h12(i+vec2(0,1)),h12(i+vec2(1,1)),f.x),f.y);}
float np(float x,float P){float i=floor(x),f=fract(x);f=f*f*(3.-2.*f);return mix(h12(vec2(mod(i,P),7.3)),h12(vec2(mod(i+1.,P),7.3)),f);}
vec2 mp(vec2 on){return (uMap*vec3(on,1.)).xy;}
vec3 hue3(float h){return clamp(abs(mod(h*6.+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.);}
vec3 scr(vec3 a,vec3 b){return 1.-(1.-a)*(1.-b);}
void main(){
 vec2 fc=vec2(gl_FragCoord.x,uTop-gl_FragCoord.y);vec2 on=fc/uOut;vec2 su=mp(on);
 vec2 asp=vec2(uAsp,1.)/max(uAsp,1.);
 vec3 c;
 if(uN1.y>0.){vec2 d=(on-.5)*uN1.y*.012;vec2 ds=(uMap*vec3(d,0.)).xy;c=vec3(texture(uSrc,su+ds).r,texture(uSrc,su).g,texture(uSrc,su-ds).b);}
 else c=texture(uSrc,su).rgb;
 if(uS0.x>0.){vec2 ce=uS0.yz;vec2 sa=vec2(uAsp,1.)/max(uAsp,1.);vec2 d=(on-ce)*sa;float r=length(d);
  if(uS1.x<.5){float w=smoothstep(uS0.w*.45,uS0.w*.45+.5,r);float ang=uS0.x*w*.55;vec3 ac=vec3(0.);float jt=h12(fc)-.5;
   for(int i=0;i<32;i++){float t=((float(i)+jt)/31.-.5)*ang;vec2 rd=vec2(cos(t)*d.x-sin(t)*d.y,sin(t)*d.x+cos(t)*d.y);ac+=texture(uSrc,mp(ce+rd/sa)).rgb;}c=mix(c,ac/32.,smoothstep(0.,.05,w));}
  else{float t=uS0.x*2.6*pow(1.-smoothstep(0.,uS0.w+.15,r),2.);vec2 rd=vec2(cos(t)*d.x-sin(t)*d.y,sin(t)*d.x+cos(t)*d.y);su=mp(ce+rd/sa);c=texture(uSrc,su).rgb;}}
 if(uOrig>.5){o=vec4(c,1.);return;}
 vec3 c0=c;float L0=lum(c0);
 /* ---- detail: NR, deblock, sharpen, texture ---- */
 float nr=uD.x,shp=uC.w,tx=uC.z,db=uD.z;
 if(nr>0.||shp!=0.||tx!=0.||db>0.){
  vec3 ac=c0,gs=c0;float ws=1.,gw=1.,v=0.;float sg=.02+nr*.1;
  for(int j=-2;j<=2;j++)for(int i=-2;i<=2;i++){if(i==0&&j==0)continue;
   vec3 s=texture(uSrc,su+vec2(i,j)*uTx*uSS).rgb;float g=exp(-float(i*i+j*j)/3.);float dl=lum(s)-L0;
   float w=g*exp(-dl*dl/(sg*sg));ac+=s*w;ws+=w;gs+=s*g;gw+=g;v+=dl*dl*g;}
  vec3 bil=ac/ws,gb=gs/gw;v/=gw-1.;
  c=mix(c0,bil,clamp(nr*1.15,0.,1.));
  if(db>0.){float fl=exp(-v*900.);c=mix(c,gb,db*fl*.85);}
  float hp=L0-lum(gb);
  c+=hp*(shp*1.6+tx*.9)*(1.-.5*smoothstep(.1,.25,abs(hp)));
 }
 vec3 bs=texture(uBs,su).rgb;
 if(uD.y>0.){c=mix(c,vec3(lum(c))+(bs-vec3(lum(bs))),uD.y);}
 /* ---- kulit ---- */
 float yb=dot(bs,vec3(.299,.587,.114)),cb=dot(bs,vec3(-.1687,-.3313,.5)),cr=dot(bs,vec3(.5,-.4187,-.0813));
 float skin=smoothstep(.03,.06,cr)*(1.-smoothstep(.16,.21,cr))*smoothstep(-.24,-.19,cb)*(1.-smoothstep(-.045,-.02,cb))*smoothstep(.12,.25,yb);
 float skin0=skin;skin*=step(.5,uE.x);
 if(skin>0.&&uD.w>0.){vec3 dd=c-bs;float ew=exp(-dot(dd,dd)*60.);c=mix(c,bs+(c0-bs)*.25,skin*uD.w*ew);}
 /* ---- linear: eksposur, WB ---- */
 vec3 l=s2l(c)*exp2(uA.x)*uWb;
 /* ---- tone lokal ---- */
 float Lp=max(lum(l),1e-5),lp=log2(Lp);
 float gk=exp2(uA.x)*lum(uWb);
 float bm=log2(max(lum(s2l(texture(uBm,su).rgb))*gk,1e-5)),bl=log2(max(lum(s2l(texture(uBl,su).rgb))*gk,1e-5)),bsl=log2(max(lum(s2l(bs))*gk,1e-5));
 float base=mix(bl,bm,.6);base=mix(lp,base,exp(-(lp-base)*(lp-base)/3.));
 float det=lp-base;
 float nb=base;
 nb+=uB.y*1.7*(1.-smoothstep(-7.,-1.8,base));
 nb+=uB.x*1.5*smoothstep(-3.2,.3,base);
 nb=mix(nb,-2.47+(nb+2.47)*(1.-.55*uA.w),1.);
 float dS=lp-mix(lp,bsl,exp(-(lp-bsl)*(lp-bsl)/2.));
 float nl=nb+det*(1.+uA.w*.25)+dS*uC.x*1.4;
 l*=exp2(nl-lp);
 /* putih / hitam + bahu highlight */
 float Ll=lum(l);
 if(uB.z!=0.)l*=1.+uB.z*.45*smoothstep(.25,1.,Ll);
 if(uB.w!=0.)l=max(l+uB.w*.025*(1.-smoothstep(0.,.25,Ll)),0.);
 Ll=lum(l);if(Ll>.8){float nL=.8+.2*(1.-exp(-(Ll-.8)/.2));l*=nL/Ll;}
 c=l2s(l);
 /* dehaze */
 if(uC.y!=0.){vec3 m=texture(uBm,su).rgb;float dk=min(min(m.r,m.g),m.b);
  if(uC.y>0.){float t=max(1.-uC.y*.9*dk/max(min(min(uAir.r,uAir.g),uAir.b),.3),.25);c=(c-uAir)/t+uAir;c=mix(vec3(lum(c)),c,1.+uC.y*.15);}
  else c=mix(c,uAir,-uC.y*.45);}
 c=clamp(c,0.,1.);
 /* LUT */
 c=texture(uLut,c*(32./33.)+.5/33.).rgb;
 /* kulit tone */
 if(skin>0.&&uE.y>0.){float k=skin*uE.y;vec3 g=vec3(lum(c));
  vec3 d;if(uE.x<1.5){d=mix(g,c,.92);d+=(1.-d)*.05;d.b+=.008;c=mix(c,d,k*.85);}
  else{d=mix(g,c,.8);d+=(1.-d)*.17;d+=vec3(0.,-.004,.014);c=mix(c,d,k);}}
 if(uSk.x>0.){vec3 g=texture(uLut,clamp(texture(uLo,su).rgb,0.,1.)*(32./33.)+.5/33.).rgb;vec3 b=mix(c,g,.5);vec3 bl=vec3(clamp(lum(b)*1.15+.14,0.,1.));
  vec3 sl=mix(2.*b*bl+b*b*(1.-2.*bl),sqrt(max(b,0.))*(2.*bl-1.)+2.*b*(1.-bl),step(.5,bl));float k=uSk.x*(skin0*.8+.2);
  c=mix(c,sl,min(1.,k*1.15));c=mix(c,c+(1.-c)*vec3(.1,.085,.08),k);c=clamp(c,0.,1.);}
 /* ---- efek cahaya (linear) ---- */
 l=s2l(c);
 vec2 src=uR0.xy;vec2 dd=(on-src)*asp;float rr=length(dd);
 if(uR0.z>0.){
  vec3 rc=uR1.rgb;
  if(uR2.y>0.){vec2 st=(on-src)*(uR0.w*.9+.1)/40.;vec2 pp=on;float dc=1.;vec3 ac=vec3(0.);
   for(int i=0;i<40;i++){pp-=st;ac+=s2l(texture(uBr1,mp(pp)).rgb)*dc;dc*=.965;}
   l+=ac/40.*uR2.y*uR0.z*3.*mix(vec3(1.),rc,.6);}
  if(uR2.x>0.){float a=atan(dd.y,dd.x);float N=uR2.z;float t=(a/6.2832+.5)*N;
   float b=np(t,N)*.65+np(t*2.,N*2.)*.35;b=smoothstep(.62-uR2.w*.35,.95,b);
   float fall=exp(-rr/(uR0.w*.8+.05));
   l+=rc*uR0.z*(b*fall*uR2.x*1.1+exp(-rr/(.04+.08*uR0.w))*.55);}
 }
 if(uG.w>0.){float s=uF2.w*.6+.08;l=scr(l,uF2.rgb*uG.w*exp(-rr*rr/(s*s))*1.1);}
 if(uF0.y>0.){vec2 ax=(vec2(.5)-src);vec3 fl=vec3(0.);
  for(int i=0;i<6;i++){float fi=float(i);float k=.35+fi*.38;vec2 gp=src+ax*k*2.;float rad=.015+.045*h12(vec2(fi,3.));
   float dg=length((on-gp)*asp);vec3 gc=hue3(fract(.08+fi*.17))*.6+.4;fl+=gc*smoothstep(rad,rad*.6,dg)*(.10+.08*h12(vec2(fi,9.)));
   fl+=gc*exp(-abs(dg-rad*1.6)*90.)*.04;}
  float hz=exp(-abs(dd.y)*90.)*exp(-abs(dd.x)*2.5);
  fl+=uF3.rgb*(hz*.5+exp(-rr*18.)*.8);
  l+=fl*uF0.y;}
 if(uG.x>0.){l+=(s2l(texture(uBr2,su).rgb)*3.+s2l(texture(uBr1,su).rgb)*1.2)*uG.x;}
 if(uG.y>0.){vec3 b1=s2l(texture(uBr1,su).rgb),b0=s2l(texture(uBr0,su).rgb);float hl=lum(max(b1-b0*.6,0.));l+=vec3(1.,.28,.1)*hl*uG.y*8.;}
 if(uG.z>0.){vec3 lo=s2l(texture(uLo,su).rgb);l=mix(l,scr(l,lo),uG.z*.9);l+=s2l(texture(uBr2,su).rgb)*uG.z*1.2;l=mix(l,vec3(lum(l)),uG.z*.1);}
 if(uF0.x>0.){float hs=lum(s2l(texture(uBrH,su).rgb));l+=vec3(.3,.55,1.)*hs*uF0.x*30.;}
 if(uF0.z>0.){float nd=floor(uF0.w*.5+.1);vec3 ac=vec3(0.);float ln=uF1.w*.12+.02;
  for(int k=0;k<4;k++){if(float(k)>=nd)break;float an=uF1.x+3.14159*float(k)/nd;vec2 dv=vec2(cos(an),sin(an))/asp;
   for(int j=1;j<=12;j++){float t=float(j)/12.;float w=(1.-t)*(1.-t);
    ac+=(s2l(texture(uBr0,mp(on+dv*t*ln)).rgb)+s2l(texture(uBr0,mp(on-dv*t*ln)).rgb))*w;}}
  l+=ac*uF0.z*.8;}
 if(uK0.x>0.){vec3 ac=vec3(0.);
  for(int ly=0;ly<2;ly++){float sc=(uK0.y*.12+.04)*(1.+float(ly)*.9);vec2 gp=on*vec2(uAsp,1.)/sc;vec2 id=floor(gp);
   for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){vec2 cid=id+vec2(i,j);vec3 hh=h32(cid+uK0.w*17.+float(ly)*31.);
    if(hh.x>uK0.z)continue;vec2 ce=cid+vec2(h12(cid*1.7+uK0.w),h12(cid*2.3+uK0.w+5.));float rad=.22+.3*hh.y;float d=length(gp-ce);
    float disc=smoothstep(rad,rad*.82,d)*(.65+.35*smoothstep(rad*.4,rad*.95,d));
    vec3 bc=uK1.w<.5?s2l(texture(uLo,mp(ce*sc/vec2(uAsp,1.))).rgb)*1.6+.05:mix(uK1.rgb,hue3(hh.z),.15);
    ac+=disc*bc*(.35+.65*hh.z);}}
  l=scr(l,ac*uK0.x*.75);}
 if(uFl.x>0.){vec2 fd=(on-uFl.yz)*asp;float f=exp(-dot(fd,fd)*3.2);l*=mix(1.,.5+1.05*f,uFl.x);l+=f*uFl.x*.05;}
 if(uL0.x>0.){vec2 dv=vec2(cos(uL0.y),sin(uL0.y));vec2 p0=.5+dv*.62,p1=.5+vec2(cos(uL0.y+.9),sin(uL0.y+.9))*.7;float s2=uL0.z*uL0.z*.35+.02;
  vec2 d0=(on-p0)*asp,d1=(on-p1)*asp;vec3 lk=uL1.rgb*exp(-dot(d0,d0)/s2)+uL2.rgb*exp(-dot(d1,d1)/(s2*.7));
  lk+=mix(uL1.rgb,uL2.rgb,.5)*exp(-abs(dot(on-p0,vec2(-dv.y,dv.x)))*9.)*.25*exp(-length(d0)*2.);
  l=scr(l,clamp(lk,0.,1.)*uL0.x);}
 if(uN1.z>0.){vec2 nv=vec2(cos(uN2.x),sin(uN2.x));float t=dot((on-vec2(uN1.w,.5))*asp,nv)/(uN2.y*.5+.04);
  if(abs(t)<1.){float al=pow(1.-t*t,2.)*(.6+.4*vn(on*vec2(4.,30.)+uN2.z));l=scr(l,hue3(t*.42+.45)*al*uN1.z*.55);}}
 if(uN1.x>0.){float ds=0.;vec2 gp=on*vec2(uAsp,1.)*90.;vec2 id=floor(gp);float hh=h12(id+uN2.z);
  if(hh>.993){vec2 ce=id+h32(id).xy;ds+=smoothstep(.5,.0,length(gp-ce))*(.5+.5*h12(id*3.));}
  for(int i=0;i<3;i++){float xp=h12(vec2(float(i),uN2.z+3.));if(h12(vec2(float(i),uN2.z))<.5){float ln=exp(-abs(on.x-xp-sin(on.y*3.+float(i))*.01)*uOut.x*.9);ds+=ln*.3*step(.55,vn(vec2(float(i)*9.,on.y*4.)));}}
  l=mix(l,vec3(.92,.9,.86),clamp(ds,0.,1.)*uN1.x*.8);}
 if(uFg0.x>0.){vec2 q=on*vec2(uAsp,1.)*(1.2+uFg0.w*5.);float n=vn(q+uFg1.w*7.)*.5+vn(q*2.1+3.+uFg1.w)*.3+vn(q*4.3+7.)*.2;
  float hg=smoothstep(uFg0.y-uFg0.z*.5,uFg0.y+uFg0.z*.5,on.y);float f=clamp(hg*(.75+1.1*(n-.5)),0.,1.)*uFg0.x;
  vec3 fc=s2l(uFg1.rgb)*clamp(.3+1.1*lum(s2l(texture(uLo,su).rgb)),0.,1.);l=mix(l,fc,f*.7);l=mix(l,vec3(lum(l)),f*.15);}
 c=l2s(l);
 /* grain */
 if(uN0.x>0.){vec2 gp=on*vec2(uAsp,1.)*(1400./(uN0.y*3.+.6));float g=vn(gp)*.65+vn(gp*2.1+9.)*.35-.5;float Lc=lum(c);
  c+=g*uN0.x*.22*(.25+3.*Lc*(1.-Lc));}
 /* vignette */
 if(uN0.z!=0.){vec2 vd=(on-.5)*2.;float st=.2+uN0.w*.6;float f=smoothstep(st,st+.85,length(vd*vec2(1.,1.)));
  if(uN0.z>0.)c*=1.-uN0.z*f*.85;else c=mix(c,vec3(1.),-uN0.z*f*.7);}
 o=vec4(clamp(c,0.,1.),1.);
}`;


/* ---------- V2.0: efek latar (shutter/panning, zoom, putar, bokeh) dengan objek tetap tajam ---------- */
const GLSL_H = `#version 300 es
precision highp float;out vec4 o;const vec3 LW=vec3(.2126,.7152,.0722);
vec3 s2l(vec3 c){c=clamp(c,0.,1.);return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(.04045,c));}
vec3 l2s(vec3 c){c=max(c,0.);return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));}
`;
const FS_BXPREP = GLSL_H + `uniform sampler2D uS,uM;uniform mat3 uMap;uniform vec2 sz;uniform vec4 uP;uniform float uInv;
void main(){vec2 uv=gl_FragCoord.xy/sz;vec3 c=s2l(texture(uS,uv).rgb);float L=dot(c,LW);
c*=1.+uP.x*7.*smoothstep(uP.y,1.,L);
float m=texture(uM,(uMap*vec3(uv,1.)).xy).a;if(uInv>.5)m=1.-m;
float w=1.-smoothstep(uP.z,uP.w,m);o=vec4(c*w,w);}`;
const FS_C4 = GLSL_H + `uniform sampler2D uT;uniform vec2 sz;void main(){o=texture(uT,gl_FragCoord.xy/sz);}`;
const FS_PPTOP = GLSL_H + `uniform sampler2D uT;uniform vec2 sz;void main(){vec4 l=texture(uT,gl_FragCoord.xy/sz);o=vec4(l.rgb/max(l.a,1e-5),1.);}`;
const FS_PPUP = GLSL_H + `uniform sampler2D uL,uU;uniform vec2 sz;void main(){vec2 uv=gl_FragCoord.xy/sz;vec4 l=texture(uL,uv);vec3 u=texture(uU,uv).rgb;o=vec4(l.rgb+(1.-clamp(l.a,0.,1.))*u,1.);}`;
const FS_BX = GLSL_H + `uniform sampler2D uT;uniform vec2 sz;uniform int uMode;uniform vec4 uQ;
void main(){vec2 uv=gl_FragCoord.xy/sz;vec4 a=vec4(0.);
if(uMode==1){for(int i=0;i<24;i++){float t=(float(i)+.5)/24.-.5;a+=texture(uT,uv+uQ.xy*t);}a/=24.;}
else if(uMode==2){vec2 c=uQ.xy;for(int i=0;i<24;i++){float t=(float(i)+.5)/24.;a+=texture(uT,c+(uv-c)*(1.-uQ.z*t));}a/=24.;}
else if(uMode==3){vec2 c=uQ.xy;vec2 d=(uv-c)*vec2(uQ.w,1.);for(int i=0;i<24;i++){float t=((float(i)+.5)/24.-.5)*uQ.z;float cs=cos(t),sn=sin(t);vec2 r=vec2(d.x*cs-d.y*sn,d.x*sn+d.y*cs);a+=texture(uT,c+r/vec2(uQ.w,1.));}a/=24.;}
else{for(int i=0;i<64;i++){float fi=float(i)+.5;float r=sqrt(fi/64.);float g=fi*2.39996323;a+=texture(uT,uv+vec2(cos(g),sin(g))*r*uQ.xy);}a/=64.;}
o=a;}`;
const FS_BXCOMP = GLSL_H + `uniform sampler2D uS,uB,uF,uM;uniform mat3 uMap;uniform vec2 uOut;uniform float uTop,uInv;uniform vec4 uC;uniform vec4 uC2;
void main(){vec2 fc=vec2(gl_FragCoord.x,uTop-gl_FragCoord.y);vec2 on=fc/uOut;
vec3 s=texture(uS,on).rgb;vec4 bb=texture(uB,on);vec3 b=(bb.rgb+texture(uF,on).rgb*.03)/(bb.a+.03)*exp2(uC.z);float L=dot(b,LW);b=max(mix(vec3(L),b,uC.w),0.);
b=b/(1.+max(dot(b,LW)-1.,0.)*.35);vec3 bs=l2s(b);
float m=texture(uM,(uMap*vec3(on,1.)).xy).a;if(uInv>.5)m=1.-m;float k=smoothstep(uC.x,uC.y,m);
o=vec4(mix(bs,s,k),1.);}`;
const GL = (() => {
  let cv = null, gl = null, P = {}, buf = null, maxTex = 4096, lutTex = null, lutKey = '', lost = false, cbf = false;
  const cache = new Map(); /* img.id -> entry */
  function init() {
    cv = document.createElement('canvas'); cv.width = cv.height = 4;
    gl = cv.getContext('webgl2', { alpha: false, antialias: false, depth: false, stencil: false, premultipliedAlpha: false, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
    if (!gl) return false;
    cv.addEventListener('webglcontextlost', e => { e.preventDefault(); lost = true; });
    cv.addEventListener('webglcontextrestored', () => { lost = false; setup(); });
    return setup();
  }
  function setup() {
    maxTex = Math.min(gl.getParameter(gl.MAX_TEXTURE_SIZE), 16384);
    cache.clear(); lutTex = null; lutKey = '';
    const mk = fs => {
      const p = gl.createProgram();
      for (const [t, s] of [[gl.VERTEX_SHADER, VS], [gl.FRAGMENT_SHADER, fs]]) { const sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh); if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error('shader: ' + gl.getShaderInfoLog(sh)); gl.attachShader(p, sh); }
      gl.bindAttribLocation(p, 0, 'p'); gl.linkProgram(p); if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error('link: ' + gl.getProgramInfoLog(p));
      p.u = {}; return p;
    };
    P.copy = mk(FS_COPY); P.blur = mk(FS_BLUR); P.bright = mk(FS_BRIGHT); P.main = mk(FS_MAIN); P.bxprep = mk(FS_BXPREP); P.c4 = mk(FS_C4); P.pptop = mk(FS_PPTOP); P.ppup = mk(FS_PPUP); P.bx = mk(FS_BX); P.bxcomp = mk(FS_BXCOMP); cbf = !!gl.getExtension('EXT_color_buffer_float');
    buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    return true;
  }
  const U = (p, n) => p.u[n] !== undefined ? p.u[n] : (p.u[n] = gl.getUniformLocation(p, n));
  function tex(w, h, src, mip) {
    const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
    if (src) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE, src);
    else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    if (mip) gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mip ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    t.w = w; t.h = h; return t;
  }
  function target(w, h) { const t = tex(w, h, null, false); t.fb = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, t.fb); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0); return t; }
  function del(t) { if (!t) return; if (t.fb) gl.deleteFramebuffer(t.fb); gl.deleteTexture(t); }
  function pass(p, dst, binds, set) {
    gl.useProgram(p);
    let u = 0; for (const k in binds) { gl.activeTexture(gl.TEXTURE0 + u); const b = binds[k]; if (b && b.is3d) gl.bindTexture(gl.TEXTURE_3D, b.t); else gl.bindTexture(gl.TEXTURE_2D, b); gl.uniform1i(U(p, k), u); u++; }
    if (set) set(n => U(p, n));
    if (dst) { gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fb); gl.viewport(0, 0, dst.w, dst.h); } else gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  function down(srcT, w, h) { const d = target(w, h); pass(P.copy, d, { t: srcT }, u => gl.uniform2f(u('sz'), w, h)); return d; }
  function blur(srcT, sig) {
    const a = target(srcT.w, srcT.h), b = target(srcT.w, srcT.h);
    pass(P.blur, a, { t: srcT }, u => { gl.uniform2f(u('sz'), a.w, a.h); gl.uniform2f(u('dir'), 1, 0); gl.uniform1f(u('sig'), sig); });
    pass(P.blur, b, { t: a }, u => { gl.uniform2f(u('sz'), b.w, b.h); gl.uniform2f(u('dir'), 0, 1); gl.uniform1f(u('sig'), sig); });
    del(a); return b;
  }
  function blurDir(srcT, sig, dx, dy) { const a = target(srcT.w, srcT.h); pass(P.blur, a, { t: srcT }, u => { gl.uniform2f(u('sz'), a.w, a.h); gl.uniform2f(u('dir'), dx, dy); gl.uniform1f(u('sig'), sig); }); return a; }
  const fitSz = (w, h, m) => { const s = Math.min(1, m / Math.max(w, h)); return [Math.max(1, Math.round(w * s)), Math.max(1, Math.round(h * s))]; };
  function freeEntry(e) { ['src', 'full', 'lo0', 'lo', 'bs', 'bm', 'bl', 'br0', 'br1', 'br2', 'brh'].forEach(k => { del(e[k]); e[k] = null; }); }
  /* siapkan tekstur pratinjau + proxy blur untuk gambar */
  function prep(img) {
    let e = cache.get(img.id);
    if (e && e.ver === img.ver) { cache.delete(img.id); cache.set(img.id, e); return e; }
    if (e) freeEntry(e);
    e = { ver: img.ver, brKey: '' };
    const rt = rtOf(img); const bmp = rt.prev || rt.base;
    e.src = tex(bmp.width, bmp.height, bmp, true);
    let [w, h] = fitSz(bmp.width, bmp.height, 512); e.lo0 = down(e.src, w, h); e.lo = blur(e.lo0, 3);
    [w, h] = fitSz(bmp.width, bmp.height, 1024); const s1 = down(e.src, w, h); e.bs = blur(s1, 1.6); del(s1);
    [w, h] = fitSz(bmp.width, bmp.height, 256); const m1 = down(e.lo0, w, h); e.bm = blur(m1, 2.2); del(m1);
    [w, h] = fitSz(bmp.width, bmp.height, 64); const b1 = down(e.bm, w, h); e.bl = blur(b1, 2); del(b1);
    cache.set(img.id, e);
    /* LRU */
    while (cache.size > 8) { const k = cache.keys().next().value; freeEntry(cache.get(k)); cache.delete(k); }
    return e;
  }
  function prepBright(e, ex, thr) {
    const key = ex.toFixed(3) + ':' + thr.toFixed(3); if (e.brKey === key) return;
    ['br0', 'br1', 'br2', 'brh'].forEach(k => { del(e[k]); e[k] = null; });
    const w = e.lo0.w, h = e.lo0.h;
    const b = target(w, h); pass(P.bright, b, { t: e.lo0 }, u => { gl.uniform2f(u('sz'), w, h); gl.uniform1f(u('ex'), ex); gl.uniform1f(u('thr'), thr); });
    e.br0 = blur(b, 0.8); e.br1 = blur(b, 5);
    const [w2, h2] = fitSz(w, h, 160); const d2 = down(b, w2, h2); e.br2 = blur(d2, 6); del(d2);
    const hs = target(w, Math.max(1, Math.round(h / 2))); pass(P.copy, hs, { t: b }, u => gl.uniform2f(u('sz'), hs.w, hs.h));
    e.brh = blurDir(hs, 40, 1, 0); del(hs); del(b);
    e.brKey = key;
  }
  function lut(p, fast) {
    const L = buildLUT(p, fast ? 17 : 33);
    if (lutTex && lutKey === L.key) return lutTex;
    if (!lutTex) { lutTex = { is3d: true, t: gl.createTexture() }; }
    gl.bindTexture(gl.TEXTURE_3D, lutTex.t);
    gl.texImage3D(gl.TEXTURE_3D, 0, gl.RGBA16F, L.N, L.N, L.N, 0, gl.RGBA, gl.HALF_FLOAT, L.data);
    for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_3D, k, v);
    lutTex.N = L.N; lutKey = L.key; return lutTex;
  }
  function wbGain(t, ti) { let r = 1 + 0.25 * t, g = 1 - 0.15 * ti, b = 1 - 0.25 * t; if (t < 0) { r = 1 + 0.2 * t; b = 1 - 0.32 * t; } const n = 0.2126 * r + 0.7152 * g + 0.0722 * b; return [r / n, g / n, b / n]; }
  const rgb1 = hx => hex2rgb(hx).map(v => s2l(v / 255));
  const LEAK = [['#ff6a00', '#ff2d55'], ['#ff5c8a', '#ffb36b'], ['#ff3d7f', '#ffd23f'], ['#2d8cff', '#7a5cff'], ['#ff4fd8', '#3fd4ff'], ['#ffb000', '#ff7a00'], ['#ff2a2a', '#ff9a3c']];

  function targetF(w, h) {
    const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
    if (cbf) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null); else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    t.w = w; t.h = h; t.fb = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, t.fb); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0); return t;
  }
  function fpass(p, dst, binds, set) { pass(p, dst, binds, u => { gl.uniform2f(u('sz'), dst.w, dst.h); if (set) set(u); }); }
  /* efek latar pada kanvas hasil render (dst), masker di ruang sumber, mm = matriks output->sumber */
  function bfx(dst, maskCv, mm, b) {
    const W = dst.width, H = dst.height; if (W > maxTex || H > maxTex || !maskCv) return false;
    const S = tex(W, H, dst, false), M = tex(maskCv.width, maskCv.height, maskCv, false);
    const k = Math.min(1, 1600 / Math.max(W, H)), ww = Math.max(8, Math.round(W * k)), wh = Math.max(8, Math.round(H * k));
    const amt = clamp(b.amt == null ? 0.5 : b.amt, 0, 1), inv = b.inv ? 1 : 0;
    const A0 = targetF(ww, wh);
    fpass(P.bxprep, A0, { uS: S, uM: M }, u => { gl.uniformMatrix3fv(u('uMap'), false, mm); gl.uniform4f(u('uP'), b.light || 0, 0.62, 0.03, 0.4); gl.uniform1f(u('uInv'), inv); });
    /* push-pull: isi area objek dengan warna latar di sekitarnya */
    const lv = [A0]; while (Math.max(lv[lv.length - 1].w, lv[lv.length - 1].h) > 8) { const p = lv[lv.length - 1], d = targetF(Math.max(1, Math.ceil(p.w / 2)), Math.max(1, Math.ceil(p.h / 2))); fpass(P.c4, d, { uT: p }); lv.push(d); }
    let U = targetF(lv[lv.length - 1].w, lv[lv.length - 1].h); fpass(P.pptop, U, { uT: lv[lv.length - 1] });
    for (let i = lv.length - 2; i >= 0; i--) { const t = targetF(lv[i].w, lv[i].h); fpass(P.ppup, t, { uL: lv[i], uU: U }); del(U); U = t; }
    lv.slice(1).forEach(del);
    /* blur latar */
    const mode = { motion: 1, zoom: 2, spin: 3, lens: 4 }[b.mode] || 1, asp = ww / wh, LS = Math.max(ww, wh);
    const runs = [];
    if (mode === 1) { const Lpx = amt * 0.22 * LS, a = (b.ang || 0) * Math.PI / 180, nx = Math.cos(a) * Lpx / ww, ny = Math.sin(a) * Lpx / wh; runs.push([nx, ny], [nx / 24, ny / 24], [nx / 576, ny / 576]); }
    else if (mode === 2) { const z = amt * 0.42; runs.push(z, z / 24, z / 400); }
    else if (mode === 3) { const g = amt * 0.75; runs.push(g, g / 24, g / 400); }
    else { const R = amt * 0.045 * LS; runs.push(R, R / 3.2); }
    let cur = A0;
    for (const q of runs) {
      const t = targetF(ww, wh);
      fpass(P.bx, t, { uT: cur }, u => {
        gl.uniform1i(u('uMode'), mode);
        if (mode === 1) gl.uniform4f(u('uQ'), q[0], q[1], 0, 0);
        else if (mode === 2 || mode === 3) gl.uniform4f(u('uQ'), b.cx == null ? 0.5 : b.cx, b.cy == null ? 0.5 : b.cy, q, asp);
        else gl.uniform4f(u('uQ'), q / ww, q / wh, 0, 0);
      });
      del(cur); cur = t;
    }
    /* komposit penuh (strip) */
    const ctx = dst.getContext('2d'), stripH = Math.max(16, Math.min(H, maxTex, Math.floor(16e6 / W)));
    for (let y0 = 0; y0 < H; y0 += stripH) {
      const sh = Math.min(stripH, H - y0); if (cv.width !== W || cv.height !== sh) { cv.width = W; cv.height = sh; }
      pass(P.bxcomp, null, { uS: S, uB: cur, uF: U, uM: M }, u => {
        gl.viewport(0, 0, W, sh); gl.uniformMatrix3fv(u('uMap'), false, mm); gl.uniform2f(u('uOut'), W, H); gl.uniform1f(u('uTop'), y0 + sh); gl.uniform1f(u('uInv'), inv);
        gl.uniform4f(u('uC'), 0.18, 0.62, b.dim || 0, 1 + (b.sat || 0)); gl.uniform4f(u('uC2'), 1, 0, 0, 0);
      });
      ctx.drawImage(cv, 0, y0);
    }
    del(cur); del(U); del(S); del(M);
    return true;
  }
  /* render gambar -> canvas 2D (dst) */
  function render(img, p, W, H, o) {
    o = o || {};
    if (lost) throw new Error('GPU sedang dipulihkan');
    const e = prep(img);
    let srcT = e.src, tmpFull = null; const rb = rtOf(img).base;
    if (o.full && rb && (rb.width > e.src.w + 1)) {
      if (rb.width <= maxTex && rb.height <= maxTex) { tmpFull = tex(rb.width, rb.height, rb, true); srcT = tmpFull; }
    }
    const fx = p.fx, ex = Math.pow(2, p.exp || 0);
    const needBr = fx.rays.a && fx.rays.scat || fx.bloom.a || fx.halo.a || fx.ana.a || fx.star.a;
    if (needBr) prepBright(e, ex, fx.thr == null ? 0.62 : fx.thr);
    const LT = lut(p, o.fast);
    const m = o.map || cropMap(img), mm = m.m;
    const dst = o.dst || mkCanvas(W, H); if (dst.width !== W || dst.height !== H) { dst.width = W; dst.height = H; }
    const ctx = dst.getContext('2d');
    const stripH = Math.max(16, Math.min(H, maxTex, Math.floor(16e6 / W)));
    const srcPerOut = (srcT.w * m.sw) / W;
    const wb = wbGain(p.temp || 0, p.tint || 0);
    const air = rtOf(img).air || [0.85, 0.87, 0.9];
    const asp = W / H;
    const binds = { uSrc: srcT, uBs: e.bs, uBm: e.bm, uBl: e.bl, uLo: e.lo, uBr0: e.br0 || e.lo, uBr1: e.br1 || e.lo, uBr2: e.br2 || e.lo, uBrH: e.brh || e.lo, uLut: LT };
    const sk = p.skin || {};
    const lk = LEAK[fx.leak.pal | 0] || LEAK[0], src = fx.src || { x: 0.75, y: 0.2 };
    for (let y0 = 0; y0 < H; y0 += stripH) {
      const sh = Math.min(stripH, H - y0);
      if (cv.width !== W || cv.height !== sh) { cv.width = W; cv.height = sh; }
      gl.useProgram(P.main);
      pass(P.main, null, binds, u => {
        gl.viewport(0, 0, W, sh);
        gl.uniformMatrix3fv(u('uMap'), false, mm);
        gl.uniform2f(u('uOut'), W, H); gl.uniform2f(u('uTx'), 1 / srcT.w, 1 / srcT.h);
        gl.uniform1f(u('uTop'), y0 + sh); gl.uniform1f(u('uSS'), Math.max(1, srcPerOut * 0.8)); gl.uniform1f(u('uAsp'), asp); gl.uniform1f(u('uOrig'), o.orig ? 1 : 0);
        gl.uniform4f(u('uA'), p.exp || 0, 0, 0, p.local || 0);
        gl.uniform4f(u('uB'), p.hi || 0, p.sh || 0, p.wh || 0, p.bl || 0);
        gl.uniform4f(u('uC'), p.clar || 0, p.dehaze || 0, p.tex || 0, p.sharp || 0);
        gl.uniform4f(u('uD'), p.nr || 0, p.nrC || 0, p.deblock || 0, sk.mode ? sk.smooth || 0 : 0);
        gl.uniform4f(u('uE'), sk.mode || 0, sk.mode ? sk.amt || 0 : 0, 1, 0);
        gl.uniform3fv(u('uWb'), wb); gl.uniform3fv(u('uAir'), air);
        const R = fx.rays, rc = rgb1(R.col);
        gl.uniform4f(u('uR0'), src.x, src.y, R.a, R.len); gl.uniform4f(u('uR1'), rc[0] * 1.2, rc[1] * 1.2, rc[2] * 1.2, 0); gl.uniform4f(u('uR2'), R.beams, R.scat, Math.round(R.n), R.soft);
        const c1 = rgb1(lk[0]), c2 = rgb1(lk[1]);
        gl.uniform4f(u('uL0'), fx.leak.a, fx.leak.ang * Math.PI / 180, fx.leak.size, 0); gl.uniform4f(u('uL1'), c1[0], c1[1], c1[2], 0); gl.uniform4f(u('uL2'), c2[0], c2[1], c2[2], 0);
        gl.uniform4f(u('uG'), fx.bloom.a, fx.halo.a, fx.dream.a, fx.haze.a);
        gl.uniform4f(u('uF0'), fx.ana.a, fx.flare.a, fx.star.a, fx.star.n);
        const fc = rgb1(fx.flare.col), hc = rgb1(fx.haze.col);
        gl.uniform4f(u('uF1'), fx.star.rot * Math.PI / 180, 0, 0, fx.star.len); gl.uniform4f(u('uF3'), fc[0], fc[1], fc[2], 0);
        gl.uniform4f(u('uF2'), hc[0], hc[1], hc[2], fx.haze.size);
        const bc = rgb1(fx.bokeh.col);
        gl.uniform4f(u('uK0'), fx.bokeh.a, fx.bokeh.size, fx.bokeh.den, fx.bokeh.seed || 1); gl.uniform4f(u('uK1'), bc[0], bc[1], bc[2], fx.bokeh.mode || 0);
        gl.uniform4f(u('uFl'), fx.flash.a, fx.flash.x, fx.flash.y, 0);
        gl.uniform4f(u('uN0'), fx.grain.a, fx.grain.size, fx.vig.a, fx.vig.mid);
        const sw = fx.swirl || {}, fg = fx.fog || {}, fgc = hex2rgb(fg.col || '#e8edf2');
        gl.uniform4f(u('uS0'), sw.a || 0, sw.x == null ? 0.5 : sw.x, sw.y == null ? 0.5 : sw.y, sw.r == null ? 0.35 : sw.r); gl.uniform4f(u('uS1'), sw.mode || 0, 0, 0, 0);
        gl.uniform4f(u('uFg0'), fg.a || 0, fg.pos == null ? 0.35 : fg.pos, fg.spread == null ? 0.4 : fg.spread, fg.scale == null ? 0.5 : fg.scale); gl.uniform4f(u('uFg1'), fgc[0] / 255, fgc[1] / 255, fgc[2] / 255, fg.seed || 1);
        gl.uniform4f(u('uSk'), (fx.sglow && fx.sglow.a) || 0, 0, 0, 0);
        gl.uniform4f(u('uN1'), fx.dust.a, fx.ca.a, fx.prism.a, fx.prism.pos);
        gl.uniform4f(u('uN2'), fx.prism.ang * Math.PI / 180, fx.prism.w, fx.dust.seed || 3, 0);
      });
      if (y0 === 0 && o.dbg) o.dbg(gl);
      ctx.drawImage(cv, 0, y0);
    }
    if (tmpFull) del(tmpFull);
    if (p.bfx && p.bfx.mode && !o.orig && !o.noBfx && typeof maskReady === 'function') { const mk = maskReady(img); if (mk) bfx(dst, mk.cv, mm, p.bfx); }
    return dst;
  }
  return {
    init, render, prep, bfx, get maxTex() { return maxTex; }, get ok() { return !!gl && !lost; },
    drop(id) { const e = cache.get(id); if (e) { freeEntry(e); cache.delete(id); } },
    clear() { for (const e of cache.values()) freeEntry(e); cache.clear(); }
  };
})();

/* peta output (0..1) -> sumber (0..1) untuk crop/rotasi/flip/luruskan */
function cropOut(img) {
  const c = img.crop, bw = img.bw, bh = img.bh, odd = c.r90 & 1, OW = odd ? bh : bw, OH = odd ? bw : bh;
  return { OW, OH, W: Math.max(1, Math.round(c.w * OW)), H: Math.max(1, Math.round(c.h * OH)) };
}
function cropMap(img, noCrop) {
  const c = noCrop ? { x: 0, y: 0, w: 1, h: 1, r90: img.crop.r90, fh: img.crop.fh, fv: img.crop.fv, ang: 0 } : img.crop;
  const bw = img.bw, bh = img.bh, odd = c.r90 & 1, OW = odd ? bh : bw, OH = odd ? bw : bh;
  const W = c.w * OW, H = c.h * OH, cx = (c.x + c.w / 2) * OW, cy = (c.y + c.h / 2) * OH;
  const a = (c.ang || 0) * Math.PI / 180, ca = Math.cos(a), sa = Math.sin(a);
  /* skala isi otomatis supaya sudut tidak kosong */
  let k = 1;
  if (a) for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    const px = sx * W / 2, py = sy * H / 2, rx = ca * px - sa * py, ry = sa * px + ca * py;
    k = Math.max(k, Math.abs(rx) / Math.max(1, Math.min(cx, OW - cx)), Math.abs(ry) / Math.max(1, Math.min(cy, OH - cy)));
  }
  const f = (u, v) => {
    const px = (u - 0.5) * W, py = (v - 0.5) * H;
    let ou = (cx + (ca * px - sa * py) / k) / OW, ov = (cy + (sa * px + ca * py) / k) / OH;
    if (c.fh) ou = 1 - ou; if (c.fv) ov = 1 - ov;
    const r = c.r90 & 3;
    return r === 0 ? [ou, ov] : r === 1 ? [ov, 1 - ou] : r === 2 ? [1 - ou, 1 - ov] : [1 - ov, ou];
  };
  const o = f(0, 0), x = f(1, 0), y = f(0, 1);
  /* mat3 kolom-mayor: kolom0 = d/du, kolom1 = d/dv, kolom2 = translasi */
  const m = [x[0] - o[0], x[1] - o[1], 0, y[0] - o[0], y[1] - o[1], 0, o[0], o[1], 1];
  const sw = Math.hypot(m[0], m[1]);
  return { m, f, k, W: Math.round(W), H: Math.round(H), sw };
}


/* ---- e-doc.js ---- */
/* ================= DOKUMEN, RIWAYAT, PENYIMPANAN ================= */
const DEF_FX = {
  thr: 0.62, src: { x: 0.78, y: 0.18 },
  rays: { a: 0, len: 0.6, beams: 0.7, scat: 0.5, n: 16, soft: 0.5, col: '#ffd59a' },
  flare: { a: 0, col: '#ffc890' }, haze: { a: 0, size: 0.5, col: '#ffb36b' },
  leak: { a: 0, ang: -35, size: 0.55, pal: 0 }, bloom: { a: 0 }, halo: { a: 0 }, dream: { a: 0 }, ana: { a: 0 },
  star: { a: 0, n: 6, len: 0.5, rot: 15 }, bokeh: { a: 0, size: 0.5, den: 0.35, mode: 0, col: '#ffd08a', seed: 1 },
  flash: { a: 0, x: 0.5, y: 0.42 }, prism: { a: 0, pos: 0.2, ang: 75, w: 0.3 }, dust: { a: 0, seed: 3 },
  grain: { a: 0, size: 0.35 }, vig: { a: 0, mid: 0.5 }, ca: { a: 0 },
  swirl: { a: 0, x: 0.5, y: 0.5, r: 0.35, mode: 0 }, fog: { a: 0, pos: 0.35, spread: 0.4, scale: 0.5, col: '#e8edf2', seed: 1 }, sglow: { a: 0 }
};
const DEF_P = {
  exp: 0, temp: 0, tint: 0, local: 0, hi: 0, sh: 0, wh: 0, bl: 0, clar: 0, dehaze: 0, tex: 0, sharp: 0, nr: 0, nrC: 0, deblock: 0,
  con: 0, fade: 0, sat: 0, vib: 0,
  hsl: { r: [0, 0, 0], o: [0, 0, 0], y: [0, 0, 0], g: [0, 0, 0], a: [0, 0, 0], b: [0, 0, 0], p: [0, 0, 0], m: [0, 0, 0] },
  grade: { sh: [210, 0], mid: [30, 0], hi: [40, 0], bal: 0 },
  skin: { mode: 0, amt: 0.5, smooth: 0.3 },
  look: { id: '', amt: 0.8 }, match: null, auto: null, fx: DEF_FX,
  bfx: { mode: '', amt: 0.5, ang: 0, light: 0.3, dim: 0, sat: 0, cx: 0.5, cy: 0.5, inv: 0 }
};
const DEF_CROP = { x: 0, y: 0, w: 1, h: 1, r90: 0, fh: 0, fv: 0, ang: 0, ratio: 'free' };
function getPath(o, k) { return k.split('.').reduce((a, s) => a == null ? a : a[s], o); }
function setPath(o, k, v) { const ks = k.split('.'); let a = o; for (let i = 0; i < ks.length - 1; i++) { if (a[ks[i]] == null) a[ks[i]] = {}; a = a[ks[i]]; } a[ks[ks.length - 1]] = v; }
/* lengkapi param lama dengan default baru */
function fillDef(o, d) { for (const k in d) { if (o[k] === undefined) o[k] = clone(d[k]); else if (d[k] && typeof d[k] === 'object' && !Array.isArray(d[k]) && o[k] && typeof o[k] === 'object') fillDef(o[k], d[k]); } return o; }

let doc = null;
const BMP = new Map();  /* kunci blob -> runtime {base, prev, small, st, air} */
const rtOf = img => BMP.get(img.baseKey || img.srcKey) || {};
const curImg = () => doc && doc.imgs.find(i => i.id === doc.cur) || null;
const imgById = id => doc && doc.imgs.find(i => i.id === id) || null;
const texts = () => !doc ? [] : doc.mode === 'collage' ? doc.texts : (curImg() ? curImg().texts : []);

function deviceCap(forCollage) {
  const mem = navigator.deviceMemory || 4, mob = isMobile() || /Android|iPhone|iPad/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  let dim = mob ? (mem >= 8 ? 6144 : 4096) : 8192, pix = mob ? (mem >= 8 ? 36e6 : 16e6) : 48e6;
  if (forCollage) { dim = Math.min(dim, mob ? 2560 : 3200); pix = Math.min(pix, mob ? 6e6 : 10e6); }
  dim = Math.min(dim, GL.maxTex || 4096);
  return { dim, pix };
}
function fitDims(w, h, cap) {
  let s = Math.min(1, cap.dim / Math.max(w, h)); if (w * h * s * s > cap.pix) s = Math.sqrt(cap.pix / (w * h));
  return [Math.max(1, Math.round(w * s)), Math.max(1, Math.round(h * s))];
}
const IS_IOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const IS_MOB = () => IS_IOS || isMobile() || /Android/i.test(navigator.userAgent);
const MAX_AREA = 16e6; /* batas aman kanvas iOS Safari */
function freeCanvas(c) { if (c && c.getContext && c.width) { c.width = c.height = 0; } }
/* perkecil bertahap (setengah-setengah) agar halus & hemat memori */
function scaleTo(src, sw, sh, tw, th) {
  let cur = src, cw = sw, ch = sh;
  while (cw > tw * 2 || ch > th * 2 || cw * ch > MAX_AREA) {
    let nw = Math.max(tw, Math.round(cw / 2)), nh = Math.max(th, Math.round(ch / 2));
    if (nw * nh > MAX_AREA) { const k = Math.sqrt(MAX_AREA / (nw * nh)); nw = Math.max(tw, Math.floor(nw * k)); nh = Math.max(th, Math.floor(nh * k)); }
    if (nw >= cw && nh >= ch) break;
    const c = mkCanvas(nw, nh), x = c.getContext('2d'); x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high'; x.drawImage(cur, 0, 0, nw, nh);
    if (cur !== src) freeCanvas(cur); cur = c; cw = nw; ch = nh;
  }
  if (cur !== src && cw === tw && ch === th) return cur;
  const c = mkCanvas(tw, th), x = c.getContext('2d'); x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high'; x.drawImage(cur, 0, 0, tw, th);
  if (cur !== src) freeCanvas(cur);
  return c;
}
async function resizeBitmap(src, w, h) { if (src.width === w && src.height === h) return src; return scaleTo(src, src.width, src.height, w, h); }
function loadImgEl(blob) {
  return new Promise((res, rej) => {
    const u = URL.createObjectURL(blob), im = new Image();
    const t = setTimeout(() => { im.onload = im.onerror = null; im.src = ''; URL.revokeObjectURL(u); rej(new Error('Waktu habis memuat foto (file terlalu besar?)')); }, 60000);
    im.onload = () => { clearTimeout(t); res({ im, u }); };
    im.onerror = () => { clearTimeout(t); URL.revokeObjectURL(u); rej(new Error('Format foto tidak didukung browser ini')); };
    im.decoding = 'async'; im.src = u;
  });
}
/* decode + langsung perkecil ke batas perangkat -> kanvas */
async function decodeFit(blob, cap) {
  let src = null, w = 0, h = 0, done = () => {};
  if (!IS_IOS && window.createImageBitmap) {
    try { const b = await createImageBitmap(blob, { imageOrientation: 'from-image' }); src = b; w = b.width; h = b.height; done = () => { if (b.close) b.close(); }; } catch (e) { src = null; }
  }
  if (!src) { const r = await loadImgEl(blob); src = r.im; w = r.im.naturalWidth; h = r.im.naturalHeight; done = () => { r.im.src = ''; URL.revokeObjectURL(r.u); }; }
  if (!w || !h) { done(); throw new Error('Foto tidak bisa dibaca'); }
  const [tw, th] = cap ? fitDims(w, h, cap) : [w, h];
  try { await raf(); const c = scaleTo(src, w, h, tw, th); return { canvas: c, ow: w, oh: h }; }
  finally { done(); }
}
async function decodeBlob(blob) { return (await decodeFit(blob, { dim: 4096, pix: MAX_AREA })).canvas; }
const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);
async function storeBlob(key, blob) { try { await withTimeout(DB.set('b:' + key, blob), 20000); return true; } catch (e) { console.warn('simpan foto gagal', e); return false; } }
function smallData(src, m) {
  const s = Math.min(1, (m || 256) / Math.max(src.width, src.height)), c = mkCanvas(src.width * s, src.height * s), x = c.getContext('2d', { willReadFrequently: true });
  x.imageSmoothingQuality = 'high'; x.drawImage(src, 0, 0, c.width, c.height); return x.getImageData(0, 0, c.width, c.height);
}
function airOf(id) {
  const d = id.data, n = d.length / 4, arr = new Float32Array(n);
  for (let i = 0; i < n; i++) arr[i] = Math.min(d[i * 4], d[i * 4 + 1], d[i * 4 + 2]);
  const thr = Float32Array.from(arr).sort()[Math.floor(n * 0.995)];
  let r = 0, g = 0, b = 0, k = 0;
  for (let i = 0; i < n; i++) if (arr[i] >= thr) { r += d[i * 4]; g += d[i * 4 + 1]; b += d[i * 4 + 2]; k++; }
  return k ? [r / k / 255, g / k / 255, b / k / 255].map(v => Math.max(0.55, v)) : [0.85, 0.87, 0.9];
}
async function makeRT(bmp) {
  const rt = { base: bmp };
  const [pw, ph] = fitDims(bmp.width, bmp.height, { dim: 2048, pix: 4.2e6 });
  rt.prev = (pw < bmp.width) ? scaleTo(bmp, bmp.width, bmp.height, pw, ph) : bmp;
  rt.small = smallData(rt.prev, 256); rt.st = analyzePixels(rt.small); rt.air = airOf(rt.small);
  return rt;
}
async function ensureRT(img) {
  const k = img.baseKey || img.srcKey; if (BMP.has(k)) return BMP.get(k);
  const blob = await DB.get('b:' + k); if (!blob) throw new Error('Data foto tidak ditemukan');
  const cap = img.baseKey ? { dim: 16384, pix: 1e9 } : deviceCap(doc && doc.mode === 'collage');
  const d = await decodeFit(blob, cap);
  const rt = await makeRT(d.canvas); BMP.set(k, rt);
  if (img.bw !== rt.base.width || img.bh !== rt.base.height) { img.bw = rt.base.width; img.bh = rt.base.height; }
  return rt;
}
let warnedStore = false;
async function importFile(file, forCollage) {
  const d = await decodeFit(file, deviceCap(forCollage));
  const c = d.canvas, w = c.width, h = c.height, key = uid();
  /* di ponsel simpan versi yang sudah diperkecil (JPEG 95%) agar ringan & stabil di Safari */
  let blob = file;
  if (IS_MOB() || file.size > 25e6 || !/jpe?g|png|webp/i.test(file.type || '')) { try { blob = await canvasBlob(c, 'image/jpeg', 0.95); } catch (e) { blob = file; } }
  else if (IS_IOS) { try { blob = new Blob([await file.arrayBuffer()], { type: file.type }); } catch (e) {} }
  if (!(await storeBlob(key, blob)) && !warnedStore) { warnedStore = true; toast('Penyimpanan perangkat penuh/terbatas: foto tetap bisa diedit tetapi mungkin tidak tersimpan di Proyek.', true); }
  const rt = await makeRT(c); BMP.set(key, rt);
  const img = { id: uid(), name: (file.name || 'foto').replace(/\.[^.]+$/, ''), ow: d.ow, oh: d.oh, bw: w, bh: h, ver: uid(), srcKey: key, baseKey: '', p: clone(DEF_P), crop: clone(DEF_CROP), texts: [] };
  if (doc) { doc.blobs = doc.blobs || []; doc.blobs.push(key); }
  return img;
}
async function setBase(img, canvas, label) {
  const key = uid();
  const blob = IS_MOB() ? await canvasBlob(canvas, 'image/jpeg', 0.97) : await canvasBlob(canvas, 'image/png');
  await storeBlob(key, blob);
  const bmp = canvas;
  BMP.set(key, await makeRT(bmp));
  img.baseKey = key; img.bw = bmp.width; img.bh = bmp.height; img.ver = uid();
  doc.blobs = doc.blobs || []; doc.blobs.push(key);
  commit(label || 'Ubah foto');
}
/* ambil piksel penuh base sebagai canvas */
function baseCanvas(img) { const rt = rtOf(img), c = mkCanvas(rt.base.width, rt.base.height); c.getContext('2d', { willReadFrequently: true }).drawImage(rt.base, 0, 0); return c; }

function defCollage() { return { size: 'ig45', W: 1080, H: 1350, slides: 1, res: 1080, lay: '', cells: [], gap: 14, margin: 14, radius: 0, bg: { t: 'c', c: '#ffffff', c2: '#ffd1e3', ang: 135 }, shadow: 0, frame: 0, seed: 1 }; }
function newDoc(mode) {
  const d = new Date();
  return { id: uid(), name: (mode === 'collage' ? 'Kolase ' : 'Foto ') + d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) + ' ' + d.toTimeString().slice(0, 5), mode, imgs: [], cur: null, texts: [], col: defCollage(), blobs: [], created: Date.now(), updated: Date.now(), v: 1 };
}

/* ---------- riwayat ---------- */
const HIS = { st: [], i: -1, lbl: [] };
const ser = d => JSON.stringify(d, (k, v) => k.charAt(0) === '_' ? undefined : v);
function resetHistory() { HIS.st = [ser(doc)]; HIS.lbl = ['Mulai']; HIS.i = 0; updUndo(); }
function commit(label) {
  if (!doc) return;
  const s = ser(doc); if (HIS.st[HIS.i] === s) return;
  HIS.st = HIS.st.slice(0, HIS.i + 1); HIS.lbl = HIS.lbl.slice(0, HIS.i + 1);
  HIS.st.push(s); HIS.lbl.push(label || ''); if (HIS.st.length > 80) { HIS.st.shift(); HIS.lbl.shift(); }
  HIS.i = HIS.st.length - 1; updUndo(); saveSoon();
}
async function restoreSnap(s) {
  const d = JSON.parse(s);
  for (const im of d.imgs) { im.p = fillDef(im.p, DEF_P); try { await ensureRT(im); } catch (e) {} }
  const keepSel = doc && doc.id === d.id; doc = d; if (!keepSel) SEL.clear();
  afterDocChange(); saveSoon();
}
async function undo() { if (HIS.i <= 0) return; HIS.i--; await restoreSnap(HIS.st[HIS.i]); updUndo(); toast('Diurungkan: ' + (HIS.lbl[HIS.i + 1] || 'perubahan')); }
async function redo() { if (HIS.i >= HIS.st.length - 1) return; HIS.i++; await restoreSnap(HIS.st[HIS.i]); updUndo(); }
function updUndo() { const u = $('[data-act="undo"]'), r = $('[data-act="redo"]'); if (u) u.disabled = HIS.i <= 0; if (r) r.disabled = HIS.i >= HIS.st.length - 1; }

/* ---------- simpan proyek ---------- */
let saveT = 0, saving = null;
function saveSoon() { clearTimeout(saveT); saveT = setTimeout(saveNow, 900); }
async function saveNow() {
  if (!doc || !doc.imgs.length) return;
  clearTimeout(saveT); doc.updated = Date.now();
  const s = ser(doc), id = doc.id, name = doc.name, mode = doc.mode, n = doc.imgs.length;
  saving = (async () => {
    try {
      await DB.set('p:' + id, s);
      let thumb = null; try { thumb = await canvasBlob(composeThumb(240), 'image/jpeg', 0.8); } catch (e) {}
      if (thumb) await DB.set('t:' + id, thumb);
      const idx = (await DB.get('idx')) || []; const i = idx.findIndex(x => x.id === id);
      const rec = { id, name, mode, n, updated: Date.now() }; if (i >= 0) idx[i] = rec; else idx.unshift(rec);
      idx.sort((a, b) => b.updated - a.updated); await DB.set('idx', idx); await DB.set('last', id);
    } catch (e) { console.warn('simpan gagal', e); }
  })();
  return saving;
}
async function openProject(id) {
  const s = await DB.get('p:' + id); if (!s) { toast('Proyek tidak ditemukan'); return false; }
  busy(true, 'Membuka proyek\u2026');
  try {
    const d = JSON.parse(s);
    doc = d;
    for (const im of d.imgs) { im.p = fillDef(im.p, DEF_P); im.crop = fillDef(im.crop || {}, DEF_CROP); im.texts = im.texts || []; await ensureRT(im); }
    d.col = fillDef(d.col || {}, defCollage()); d.texts = d.texts || [];
    SEL.clear(); resetHistory(); afterDocChange(true); await DB.set('last', id);
    return true;
  } catch (e) { toast('Gagal membuka: ' + e.message, true); return false; }
  finally { busy(false); }
}
async function deleteProject(id) {
  const s = await DB.get('p:' + id);
  if (s) { try { const d = JSON.parse(s); const keep = new Set(); const idx0 = (await DB.get('idx')) || [];
    for (const r of idx0) if (r.id !== id) { const o = await DB.get('p:' + r.id); if (o) try { (JSON.parse(o).blobs || []).forEach(k => keep.add(k)); } catch (e) {} }
    for (const k of d.blobs || []) if (!keep.has(k)) await DB.del('b:' + k); } catch (e) {} }
  await DB.del('p:' + id); await DB.del('t:' + id);
  const idx = ((await DB.get('idx')) || []).filter(x => x.id !== id); await DB.set('idx', idx);
}


/* ---- f-collage.js ---- */
/* ================= KOLASE, TEKS, KOMPOSISI ================= */
const SIZES = [
  ['Instagram', [['ig45', 'Feed Potret 4:5', 1080, 1350], ['ig34', 'Feed 3:4', 1080, 1440], ['ig11', 'Feed Kotak 1:1', 1080, 1080], ['igst', 'Story / Reels 9:16', 1080, 1920], ['igls', 'Lanskap 1.91:1', 1080, 566], ['igc2', 'Carousel Panorama 2 slide', 2160, 1350, 2], ['igc3', 'Carousel Panorama 3 slide', 3240, 1350, 3], ['igc4', 'Carousel Panorama 4 slide', 4320, 1350, 4], ['igc5', 'Carousel Panorama 5 slide', 5400, 1350, 5]]],
  ['TikTok', [['tt916', 'Foto / Video 9:16', 1080, 1920], ['tt34', 'Carousel Foto 3:4', 1080, 1440], ['tt11', 'Kotak 1:1', 1080, 1080], ['ttc3', 'Carousel Panorama 3 slide 9:16', 3240, 1920, 3]]],
  ['Facebook', [['fb45', 'Post Potret 4:5', 1080, 1350], ['fb11', 'Post Kotak 1:1', 1080, 1080], ['fbls', 'Post Lanskap 1.91:1', 1200, 630], ['fbst', 'Story 9:16', 1080, 1920], ['fbcv', 'Sampul Halaman', 1640, 624], ['fbev', 'Sampul Acara', 1920, 1005]]],
  ['Threads', [['th45', 'Post Potret 4:5', 1080, 1350], ['th11', 'Post Kotak 1:1', 1080, 1080], ['th916', 'Potret Tinggi 9:16', 1080, 1920], ['thc3', 'Carousel Panorama 3 slide', 3240, 1350, 3]]],
  ['Lainnya', [['x169', 'X / Twitter 16:9', 1600, 900], ['pin23', 'Pinterest 2:3', 1000, 1500], ['yt', 'Thumbnail YouTube', 1280, 720], ['wa', 'Status WhatsApp', 1080, 1920], ['r4', 'Cetak 4R (4x6)', 1200, 1800], ['a4', 'Cetak A4', 2480, 3508]]]
];
const SIZE_BY = {}; SIZES.forEach(g => g[1].forEach(s => { SIZE_BY[s[0]] = { id: s[0], g: g[0], name: s[1], W: s[2], H: s[3], slides: s[4] || 1 }; }));

/* ----- tata letak ----- */
function RL(rows) { const T = rows.reduce((a, r) => a + r[0], 0); let y = 0; const out = []; for (const [h, cols] of rows) { const S = cols.reduce((a, b) => a + b, 0); let x = 0; for (const w of cols) { out.push([x / S, y / T, w / S, h / T]); x += w; } y += h; } return out; }
function CL(cols) { const T = cols.reduce((a, c) => a + c[0], 0); let x = 0; const out = []; for (const [w, rows] of cols) { const S = rows.reduce((a, b) => a + b, 0); let y = 0; for (const h of rows) { out.push([x / T, y / S, w / T, h / S]); y += h; } x += w; } return out; }
const rep = (n, v) => Array(n).fill(v);
const T3 = 1 / 3;
const LAYOUTS = [];
function L_(id, cells, k) { LAYOUTS.push({ id, n: cells.length, cells, k: k || 'grid' }); }
L_('1', RL([[1, [1]]]));
L_('2v', RL([[1, [1, 1]]])); L_('2h', RL([[1, [1]], [1, [1]]])); L_('2a', RL([[1, [2, 1]]])); L_('2b', RL([[2, [1]], [1, [1]]]));
L_('3c', RL([[1, [1, 1, 1]]])); L_('3r', RL([[1, [1]], [1, [1]], [1, [1]]])); L_('3a', CL([[2, [1]], [1, [1, 1]]])); L_('3b', RL([[2, [1]], [1, [1, 1]]])); L_('3d', RL([[1, [1, 1]], [2, [1]]])); L_('3e', CL([[1, [1, 1]], [2, [1]]]));
L_('4g', RL([[1, [1, 1]], [1, [1, 1]]])); L_('4c', RL([[1, [1, 1, 1, 1]]])); L_('4r', RL(rep(4, [1, [1]]))); L_('4a', RL([[2, [1]], [1, [1, 1, 1]]])); L_('4b', CL([[2, [1]], [1, [1, 1, 1]]])); L_('4m', RL([[1, [1, 2]], [1, [2, 1]]])); L_('4s', [[0, 0, 0.42, 1], [0.42, 0, 0.33, 0.5], [0.42, 0.5, 0.33, 0.5], [0.75, 0, 0.25, 1]]);
L_('5v', RL([[1, [1, 1, 1, 1, 1]]])); L_('5r', RL(rep(5, [1, [1]]))); L_('5a', RL([[1, [1, 1]], [1, [1, 1, 1]]])); L_('5b', RL([[1, [1, 1, 1]], [1, [1, 1]]])); L_('5c', CL([[1.3, [1]], [1, [1, 1]], [1, [1, 1]]])); L_('5d', RL([[2, [1]], [1, [1, 1, 1, 1]]])); L_('5e', CL([[1, [1, 1]], [1, [1]], [1, [1, 1]]]));
L_('6v', RL([[1, [1, 1, 1, 1, 1, 1]]])); L_('6r', RL(rep(6, [1, [1]]))); L_('6a', RL(rep(3, [1, [1, 1]]))); L_('6b', RL([[1, [1, 1, 1]], [1, [1, 1, 1]]])); L_('6c', [[0, 0, 2 * T3, 2 * T3], [2 * T3, 0, T3, T3], [2 * T3, T3, T3, T3], [0, 2 * T3, T3, T3], [T3, 2 * T3, T3, T3], [2 * T3, 2 * T3, T3, T3]]); L_('6d', RL([[2, [1, 1]], [1, [1, 1, 1, 1]]]));
L_('7a', RL([[1, [1, 1, 1]], [1, [1]], [1, [1, 1, 1]]])); L_('7b', RL([[2, [1]], [1, [1, 1, 1]], [1, [1, 1, 1]]]));
L_('8a', RL([[1, [1, 1, 1, 1]], [1, [1, 1, 1, 1]]])); L_('8b', RL(rep(4, [1, [1, 1]]))); L_('8c', RL([[2, [1, 1]], [1, [1, 1, 1]], [1, [1, 1, 1]]]));
L_('9a', RL(rep(3, [1, [1, 1, 1]]))); L_('9b', RL([[1, [1, 1, 1, 1]], [1.5, [1]], [1, [1, 1, 1, 1]]]));
L_('10a', RL([[1, [1, 1, 1, 1, 1]], [1, [1, 1, 1, 1, 1]]])); L_('12a', RL(rep(4, [1, [1, 1, 1]]))); L_('12b', RL(rep(3, [1, [1, 1, 1, 1]])));
/* gaya bebas (tren) dibuat dinamis sesuai jumlah foto */
const FREE_STYLES = [['dump', 'Photo Dump'], ['film', 'Film Strip'], ['stack', 'Tumpuk Kartu'], ['pola', 'Polaroid']];
function rnd(seed) { let s = (seed * 9301 + 49297) % 233280; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
function freeCells(kind, n, asp, seed) {
  const r = rnd(seed || 1), out = [];
  if (kind === 'film') { const g = 0.035; for (let i = 0; i < n; i++) out.push([0.14, g + i * (1 - g) / n, 0.72, (1 - g) / n - g, 0]); return out; }
  if (kind === 'pola') { const cols = Math.max(1, Math.round(Math.sqrt(n * asp))), rows = Math.ceil(n / cols); for (let i = 0; i < n; i++) { const cx = i % cols, cy = Math.floor(i / cols); out.push([0.06 + cx * 0.88 / cols + 0.015, 0.05 + cy * 0.9 / rows + 0.015, 0.88 / cols - 0.03, 0.9 / rows - 0.03, (r() - 0.5) * 4]); } return out; }
  if (kind === 'stack') { for (let i = 0; i < n; i++) { const t = n === 1 ? 0.5 : i / (n - 1); const w = 0.62, h = 0.62 * asp * 0.95; out.push([0.08 + t * (0.92 - w - 0.08), 0.12 + t * (0.88 - Math.min(0.7, h) - 0.12), w, Math.min(0.7, h), (r() - 0.5) * 14]); } return out; }
  const cols = Math.max(1, Math.round(Math.sqrt(n * asp * 0.9))), rows = Math.ceil(n / cols);
  for (let i = 0; i < n; i++) {
    const cx = i % cols, cy = Math.floor(i / cols), rowN = cy === rows - 1 ? n - cy * cols : cols;
    const cw = 1 / cols, ch = 1 / rows, w = Math.min(0.58, cw * 1.06), h = Math.min(0.58, ch * 1.02);
    const ox = (cols - rowN) * cw / 2;
    out.push([clamp(ox + cx * cw + (cw - w) / 2 + (r() - 0.5) * cw * 0.18, 0.01, 0.99 - w), clamp(cy * ch + (ch - h) / 2 + (r() - 0.5) * ch * 0.18, 0.01, 0.99 - h), w, h, (r() - 0.5) * 16]);
  }
  return out;
}
function layoutOf(col) {
  if (col.lay && col.lay.charAt(0) === '~') { const k = col.lay.slice(1); return { id: col.lay, k, cells: freeCells(k, Math.max(1, col.cells.length), col.W / col.H, col.seed) }; }
  return LAYOUTS.find(l => l.id === col.lay) || LAYOUTS[0];
}
function layoutsFor(n) { const a = LAYOUTS.filter(l => l.n === n); return a; }
function bestLayout(n) { const l = LAYOUTS.find(x => x.n === n && !/^[56][vr]$/.test(x.id)) || LAYOUTS.filter(x => x.n <= n).pop(); return l ? l.id : '1'; }
/* kotak sel dalam piksel */
function cellRects(col, W, H) {
  const L = layoutOf(col), k = W / 1080, out = [];
  if (L.k !== 'grid') {
    for (const c of L.cells) out.push({ x: c[0] * W, y: c[1] * H, w: c[2] * W, h: c[3] * H, rot: (c[4] || 0) * Math.PI / 180, frame: L.k === 'film' ? 0 : 1, k: L.k });
    return out;
  }
  const m = col.margin * k, g = col.gap * k, iw = W - 2 * m, ih = H - 2 * m, e = 1e-4;
  for (const c of L.cells) {
    let x0 = m + c[0] * iw, y0 = m + c[1] * ih, x1 = m + (c[0] + c[2]) * iw, y1 = m + (c[1] + c[3]) * ih;
    if (c[0] > e) x0 += g / 2; if (c[0] + c[2] < 1 - e) x1 -= g / 2; if (c[1] > e) y0 += g / 2; if (c[1] + c[3] < 1 - e) y1 -= g / 2;
    out.push({ x: x0, y: y0, w: Math.max(1, x1 - x0), h: Math.max(1, y1 - y0), rot: 0, frame: col.frame, k: 'grid' });
  }
  return out;
}
function frameInner(r) { if (!r.frame) return { x: -r.w / 2, y: -r.h / 2, w: r.w, h: r.h }; const p = Math.min(r.w, r.h) * 0.05, pb = r.k === 'grid' ? p : Math.min(r.w, r.h) * 0.16; return { x: -r.w / 2 + p, y: -r.h / 2 + p, w: r.w - 2 * p, h: r.h - p - pb }; }
function rrect(ctx, x, y, w, h, r) { r = Math.max(0, Math.min(r, w / 2, h / 2)); ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
/* geometri gambar dalam sel (cover + zoom + geser) */
function cellImgGeom(cell, im, iw, ih) {
  const o = cropOut(im), s = Math.max(iw / o.W, ih / o.H) * (cell.z || 1), dw = o.W * s, dh = o.H * s;
  const px = clamp(cell.px || 0, -1, 1), py = clamp(cell.py || 0, -1, 1);
  return { dw, dh, x: (iw - dw) / 2 - px * (dw - iw) / 2, y: (ih - dh) / 2 - py * (dh - ih) / 2 };
}
function drawBg(ctx, col, W, H, get) {
  const b = col.bg || {}, L = layoutOf(col);
  if (L.k === 'film') { ctx.fillStyle = '#111'; ctx.fillRect(0, 0, W, H); return; }
  if (b.t === 'g') { const a = (b.ang || 0) * Math.PI / 180, cx = W / 2, cy = H / 2, d = (Math.abs(W * Math.cos(a)) + Math.abs(H * Math.sin(a))) / 2; const g = ctx.createLinearGradient(cx - Math.cos(a) * d, cy - Math.sin(a) * d, cx + Math.cos(a) * d, cy + Math.sin(a) * d); g.addColorStop(0, b.c); g.addColorStop(1, b.c2); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); return; }
  if (b.t === 'blur') {
    const c0 = col.cells.find(c => c.img && imgById(c.img));
    if (c0) { const im = imgById(c0.img), o = cropOut(im), sm = mkCanvas(48, 48 * o.H / o.W), src = get(im, Math.max(64, Math.round(160)), Math.max(64, Math.round(160 * o.H / o.W))); const x = sm.getContext('2d'); x.drawImage(src, 0, 0, sm.width, sm.height); const s = Math.max(W / sm.width, H / sm.height); ctx.save(); ctx.imageSmoothingQuality = 'high'; ctx.drawImage(sm, (W - sm.width * s) / 2, (H - sm.height * s) / 2, sm.width * s, sm.height * s); ctx.fillStyle = 'rgba(0,0,0,' + (b.dim == null ? 0.12 : b.dim) + ')'; ctx.fillRect(0, 0, W, H); ctx.restore(); return; }
  }
  ctx.fillStyle = b.c || '#fff'; ctx.fillRect(0, 0, W, H);
}
function drawFilm(ctx, W, H) {
  const k = W / 1080, hw = 26 * k, hh = 36 * k, gap = 30 * k; ctx.fillStyle = '#f2efe6';
  for (const x of [0.05 * W, 0.95 * W - hw]) for (let y = gap / 2; y < H; y += hh + gap) { rrect(ctx, x, y, hw, hh, 5 * k); ctx.fill(); }
}
function drawCollage(ctx, col, W, H, get, o) {
  o = o || {};
  drawBg(ctx, col, W, H, get);
  const rs = cellRects(col, W, H), k = W / 1080, L = layoutOf(col);
  if (L.k === 'film') drawFilm(ctx, W, H);
  rs.forEach((r, i) => {
    const cell = col.cells[i] || {}, im = cell.img && imgById(cell.img);
    ctx.save(); ctx.translate(r.x + r.w / 2, r.y + r.h / 2); ctx.rotate(r.rot);
    const rad = r.frame ? 2 * k : col.radius * k;
    if (r.frame || col.shadow) { ctx.save(); ctx.shadowColor = 'rgba(0,0,0,' + (r.k === 'grid' ? 0.22 * (col.shadow || 0.6) : 0.3) + ')'; ctx.shadowBlur = 26 * k * ctxScale(ctx); ctx.shadowOffsetY = 8 * k * ctxScale(ctx); ctx.fillStyle = r.frame ? (col.frameC || '#fffdf8') : '#fff'; rrect(ctx, -r.w / 2, -r.h / 2, r.w, r.h, rad); ctx.fill(); ctx.restore(); }
    const f = frameInner(r);
    ctx.save(); rrect(ctx, f.x, f.y, f.w, f.h, r.frame ? 0 : rad); ctx.clip();
    if (im && rtOf(im).base) { const gm = cellImgGeom(cell, im, f.w, f.h); const src = get(im, gm.dw, gm.dh); ctx.drawImage(src, f.x + gm.x, f.y + gm.y, gm.dw, gm.dh); }
    else if (o.preview) { ctx.fillStyle = '#e9eaee'; ctx.fillRect(f.x, f.y, f.w, f.h); ctx.strokeStyle = '#a3a8b3'; ctx.lineWidth = 3 * k; const s = Math.min(f.w, f.h) * 0.12; ctx.beginPath(); ctx.moveTo(f.x + f.w / 2 - s, f.y + f.h / 2); ctx.lineTo(f.x + f.w / 2 + s, f.y + f.h / 2); ctx.moveTo(f.x + f.w / 2, f.y + f.h / 2 - s); ctx.lineTo(f.x + f.w / 2, f.y + f.h / 2 + s); ctx.stroke(); }
    ctx.restore(); ctx.restore();
    r.inner = f;
  });
  return rs;
}

/* ----- FONT ----- */
const FONTS = [
  ['Montserrat', '400;700;900', 'Sans'], ['Poppins', '400;600;800', 'Sans'], ['Inter', '400;700;900', 'Sans'], ['Plus Jakarta Sans', '400;700;800', 'Sans'], ['DM Sans', '400;700', 'Sans'], ['Outfit', '400;700;900', 'Sans'],
  ['Space Grotesk', '400;700', 'Sans'], ['Roboto', '400;700;900', 'Sans'], ['Open Sans', '400;700;800', 'Sans'], ['Lato', '400;700;900', 'Sans'], ['Nunito', '400;800', 'Sans'], ['Raleway', '400;700;900', 'Sans'],
  ['Bebas Neue', '400', 'Display'], ['Anton', '400', 'Display'], ['Oswald', '400;700', 'Display'], ['Syne', '400;800', 'Display'], ['Unbounded', '400;800', 'Display'], ['Righteous', '400', 'Display'], ['Monoton', '400', 'Display'], ['Lobster', '400', 'Display'],
  ['Playfair Display', '400;700;900', 'Serif'], ['Cormorant Garamond', '400;700', 'Serif'], ['Bodoni Moda', '400;700', 'Serif'], ['Libre Bodoni', '400;700', 'Serif'], ['GFS Didot', '400', 'Serif'], ['Playfair Display SC', '400;700;900', 'Serif'], ['Instrument Serif', '400', 'Serif'], ['Cinzel', '400;700', 'Serif'], ['Lora', '400;700', 'Serif'],
  ['Pacifico', '400', 'Script'], ['Dancing Script', '400;700', 'Script'], ['Great Vibes', '400', 'Script'], ['Caveat', '400;700', 'Script'], ['Permanent Marker', '400', 'Script']
];
const FONT_BY = {}; FONTS.forEach(f => { FONT_BY[f[0]] = f; });
const fontLoaded = {};
function fontURL(list) { return 'https://fonts.googleapis.com/css2?' + list.map(f => 'family=' + f[0].replace(/ /g, '+') + (f[1] !== '400' ? ':wght@' + f[1] : '')).join('&') + '&display=swap'; }
function injectFontCSS(list) {
  const need = list.filter(f => !fontLoaded[f[0]]); if (!need.length) return;
  need.forEach(f => { fontLoaded[f[0]] = 1; });
  const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = fontURL(need); document.head.appendChild(l);
}
function fontWeight(name, want) { const f = FONT_BY[name]; if (!f) return want; const ws = f[1].split(';').map(Number); let best = ws[0]; for (const w of ws) if (Math.abs(w - want) < Math.abs(best - want)) best = w; return best; }
async function ensureFont(name, w) {
  const f = FONT_BY[name]; if (!f) return; injectFontCSS([f]);
  try { await Promise.race([document.fonts.load(fontWeight(name, w || 400) + ' 40px "' + name + '"'), sleep(4000)]); } catch (e) {}
}
async function ensureFonts(list) { const u = {}; list.forEach(L => { u[L.font + '|' + L.w] = L; }); await Promise.all(Object.values(u).map(L => ensureFont(L.font, L.w))); }

/* ----- TEKS ----- */
const GRADS = [
  ['Instagram', ['#feda75', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5']], ['Sunset', ['#ff512f', '#f09819']], ['Emas', ['#bf953f', '#fcf6ba', '#b38728', '#fbf5b7', '#aa771c']],
  ['Chrome', ['#f5f5f5', '#8a8a8a', '#ffffff', '#5a5a5a']], ['Laut', ['#00c6ff', '#0072ff']], ['Neon', ['#f72585', '#7209b7', '#3a0ca3']], ['Peach', ['#ffecd2', '#fcb69f']],
  ['Mint', ['#a8ff78', '#78ffd6']], ['Api', ['#f12711', '#f5af19']], ['Rose Gold', ['#b76e79', '#f4d6c6', '#b76e79']], ['Holo', ['#a1c4fd', '#c2e9fb', '#fbc2eb', '#a6c1ee']], ['Senja', ['#2b1055', '#d53369', '#ffc371']],
  ['Pelangi', ['#ff3b3b', '#ffb03b', '#ffe93b', '#3bff6a', '#3bc8ff', '#8a3bff']], ['Matcha', ['#d4fc79', '#96e6a1']], ['Perak', ['#e0e0e0', '#ffffff', '#9e9e9e']], ['Malam', ['#141e30', '#243b55']]
];
const COLORS = ['#ffffff', '#111111', '#ff3d7f', '#ff7a20', '#ffd23f', '#2ecc71', '#1abc9c', '#1580ad', '#4a33b2', '#8e44ad', '#e33a10', '#f4e3c3', '#c9a227', '#7f8c8d'];
function defText(t) {
  return { id: uid(), t: t || 'Ketik teks', font: 'Montserrat', w: 800, it: 0, up: 0, size: 0.09, x: 0.5, y: 0.5, rot: 0, al: 'center', ls: 0, lh: 1.12, op: 1, blend: 'source-over',
    fill: { t: 's', c: '#ffffff', g: ['#ff512f', '#f09819'], ang: 90 }, st: { w: 0, c: '#000000' }, sh: { a: 0.5, c: '#000000', b: 0.25, x: 0, y: 0.06 }, glow: { a: 0, c: '#ff3df0' },
    ex: { a: 0, c: '#1b1b1b', ang: 45 }, bg: { a: 0, c: '#000000', op: 0.55, pad: 0.35, r: 0.3 }, curve: 0 };
}
const TEXT_PRESETS = [
  ['Minimal', { font: 'Montserrat', w: 700, up: 1, ls: 0.25, fill: { t: 's', c: '#ffffff' }, sh: { a: 0.35, c: '#000000', b: 0.3, x: 0, y: 0.04 }, glow: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Neon Pink', { font: 'Monoton', w: 400, fill: { t: 's', c: '#ffe6fb' }, glow: { a: 1, c: '#ff2bd6' }, sh: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Emas Mewah', { font: 'Cinzel', w: 700, up: 1, ls: 0.12, fill: { t: 'g', g: GRADS[2][1], ang: 90 }, sh: { a: 0.6, c: '#000000', b: 0.2, x: 0.02, y: 0.05 }, glow: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Retro 3D', { font: 'Righteous', w: 400, fill: { t: 'g', g: ['#ffd23f', '#ff7a20'], ang: 90 }, ex: { a: 0.12, c: '#7a1d4f', ang: 45 }, st: { w: 0.04, c: '#7a1d4f' }, sh: { a: 0 }, glow: { a: 0 }, bg: { a: 0 } }],
  ['Gradasi IG', { font: 'Poppins', w: 800, fill: { t: 'g', g: GRADS[0][1], ang: 0 }, sh: { a: 0.3, c: '#000000', b: 0.25, x: 0, y: 0.04 }, glow: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Wedding', { font: 'Great Vibes', w: 400, fill: { t: 's', c: '#ffffff' }, glow: { a: 0.5, c: '#ffffff' }, sh: { a: 0.3, c: '#5a3d2b', b: 0.3, x: 0, y: 0.03 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Travel Bold', { font: 'Bebas Neue', w: 400, up: 1, ls: 0.06, fill: { t: 's', c: '#ffffff' }, st: { w: 0 }, sh: { a: 0.5, c: '#000000', b: 0.15, x: 0, y: 0.05 }, glow: { a: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Label Kotak', { font: 'Plus Jakarta Sans', w: 800, fill: { t: 's', c: '#ffffff' }, bg: { a: 1, c: '#ff3d7f', op: 1, pad: 0.4, r: 0.25 }, sh: { a: 0 }, glow: { a: 0 }, st: { w: 0 }, ex: { a: 0 } }],
  ['Outline', { font: 'Anton', w: 400, up: 1, fill: { t: 's', c: 'rgba(0,0,0,0)' }, st: { w: 0.05, c: '#ffffff' }, sh: { a: 0 }, glow: { a: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Editorial', { font: 'Instrument Serif', w: 400, it: 1, fill: { t: 's', c: '#ffffff' }, sh: { a: 0.25, c: '#000000', b: 0.35, x: 0, y: 0.03 }, glow: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Komik Pop', { font: 'Permanent Marker', w: 400, fill: { t: 's', c: '#ffd23f' }, st: { w: 0.07, c: '#111111' }, ex: { a: 0.06, c: '#111111', ang: 60 }, sh: { a: 0 }, glow: { a: 0 }, bg: { a: 0 } }],
  ['Chrome Y2K', { font: 'Unbounded', w: 800, fill: { t: 'g', g: GRADS[3][1], ang: 90 }, st: { w: 0.025, c: '#2a2a2a' }, sh: { a: 0.4, c: '#000000', b: 0.2, x: 0, y: 0.05 }, glow: { a: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Api', { font: 'Oswald', w: 700, up: 1, fill: { t: 'g', g: GRADS[8][1], ang: 90 }, glow: { a: 0.6, c: '#ff5a00' }, sh: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Script Manis', { font: 'Pacifico', w: 400, fill: { t: 'g', g: GRADS[6][1], ang: 90 }, st: { w: 0.03, c: '#ffffff' }, sh: { a: 0.35, c: '#b04a5a', b: 0.2, x: 0, y: 0.05 }, glow: { a: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Holo', { font: 'Syne', w: 800, fill: { t: 'g', g: GRADS[10][1], ang: 30 }, glow: { a: 0.35, c: '#c2e9fb' }, sh: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Vogue Didot', { font: 'GFS Didot', w: 400, up: 1, ls: 0.18, fill: { t: 's', c: '#ffffff' }, sh: { a: 0.3, c: '#000000', b: 0.3, x: 0, y: 0.03 }, glow: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Bodoni Elegan', { font: 'Libre Bodoni', w: 700, it: 1, fill: { t: 's', c: '#f6efe4' }, sh: { a: 0.35, c: '#000000', b: 0.25, x: 0, y: 0.04 }, glow: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }],
  ['Tulisan Tangan', { font: 'Caveat', w: 700, fill: { t: 's', c: '#ffffff' }, sh: { a: 0.35, c: '#000000', b: 0.2, x: 0, y: 0.03 }, glow: { a: 0 }, st: { w: 0 }, ex: { a: 0 }, bg: { a: 0 } }]
];
function fontStr(L, px) { return (L.it ? 'italic ' : '') + fontWeight(L.font, L.w) + ' ' + px.toFixed(2) + 'px "' + L.font + '", ' + (FONT_BY[L.font] && FONT_BY[L.font][2] === 'Serif' ? 'Georgia, serif' : FONT_BY[L.font] && FONT_BY[L.font][2] === 'Script' ? 'cursive' : 'system-ui, sans-serif'); }
function textLayout(ctx, L, W) {
  const fs = Math.max(2, L.size * W); ctx.font = fontStr(L, fs);
  const raw = String(L.t || ' '), str = L.up ? raw.toUpperCase() : raw, lines = str.split('\n'), ls = (L.ls || 0) * fs;
  const glyphs = lines.map(s => { const a = Array.from(s); const ws = a.map(ch => ctx.measureText(ch).width); const tw = ws.reduce((x, y) => x + y, 0) + ls * Math.max(0, a.length - 1); const whole = ls ? tw : ctx.measureText(s).width; return { s, a, ws, w: whole }; });
  const lh = fs * (L.lh || 1.12), w = Math.max(1, ...glyphs.map(g => g.w)), h = lh * lines.length;
  return { fs, ls, lh, w, h, lines: glyphs };
}
function drawTextLayer(ctx, L, W, H) {
  let lay = textLayout(ctx, L, W);
  if (L.fitW && lay.w > L.fitW * W) { const L2 = Object.assign({}, L, { size: L.size * L.fitW * W / lay.w }); lay = textLayout(ctx, L2, W); }
  const fs = lay.fs, cv = L.curve || 0;
  ctx.save();
  L._ox = L.anc === 'l' ? lay.w / 2 : L.anc === 'r' ? -lay.w / 2 : 0;
  ctx.translate(L.x * W + L._ox, L.y * H); ctx.rotate((L.rot || 0) * Math.PI / 180);
  ctx.globalAlpha = L.op == null ? 1 : L.op; ctx.globalCompositeOperation = L.blend || 'source-over';
  ctx.font = fontStr(L, fs); ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.lineJoin = 'round'; ctx.miterLimit = 2;
  const y0 = -lay.h / 2 + lay.lh / 2;
  const R = cv ? fs * 2.2 / Math.abs(cv) * Math.max(1, lay.w / fs / 3) : 0;
  /* kumpulan posisi glyph */
  function each(fn) {
    lay.lines.forEach((g, li) => {
      const y = y0 + li * lay.lh;
      let x = L.al === 'left' ? -lay.w / 2 : L.al === 'right' ? lay.w / 2 - g.w : -g.w / 2;
      if (!cv && !lay.ls) { fn(g.s, x, y, 0); return; }
      if (!cv) { for (let i = 0; i < g.a.length; i++) { fn(g.a[i], x, y, 0); x += g.ws[i] + lay.ls; } return; }
      const sgn = cv > 0 ? 1 : -1, cy = y + sgn * R;
      for (let i = 0; i < g.a.length; i++) {
        const mid = x + g.ws[i] / 2, ang = mid / R;
        const px = Math.sin(ang) * R, py = cy - sgn * Math.cos(ang) * R;
        fn(g.a[i], px - g.ws[i] / 2 * Math.cos(ang), py - g.ws[i] / 2 * Math.sin(ang) * sgn, ang * sgn);
        x += g.ws[i] + lay.ls;
      }
    });
  }
  const put = (draw) => each((s, x, y, a) => { if (a) { ctx.save(); ctx.translate(x, y); ctx.rotate(a); draw(s, 0, 0); ctx.restore(); } else draw(s, x, y); });
  const bx = { x: -lay.w / 2, y: -lay.h / 2, w: lay.w, h: lay.h + (cv ? R * (1 - Math.cos(lay.w / 2 / R)) : 0) };
  if (cv) { bx.y = cv > 0 ? -lay.h / 2 : -lay.h / 2 - (bx.h - lay.h); }
  /* latar */
  if (L.bg && L.bg.a) { const p = (L.bg.pad || 0.3) * fs; ctx.save(); ctx.globalAlpha *= L.bg.op == null ? 1 : L.bg.op; ctx.fillStyle = L.bg.c; rrect(ctx, bx.x - p, bx.y - p * 0.7, bx.w + 2 * p, bx.h + p * 1.4, (L.bg.r || 0) * fs); ctx.fill(); ctx.restore(); }
  /* isi */
  let fill = L.fill.c;
  if (L.fill.t === 'g') { const a = (L.fill.ang || 0) * Math.PI / 180, d = (Math.abs(bx.w * Math.cos(a)) + Math.abs(bx.h * Math.sin(a))) / 2, cx = bx.x + bx.w / 2, cy = bx.y + bx.h / 2; const g = ctx.createLinearGradient(cx - Math.cos(a) * d, cy - Math.sin(a) * d, cx + Math.cos(a) * d, cy + Math.sin(a) * d); const cs = L.fill.g || ['#fff', '#000']; cs.forEach((c, i) => g.addColorStop(cs.length === 1 ? 0 : i / (cs.length - 1), c)); fill = g; }
  /* 3D extrude */
  if (L.ex && L.ex.a) { const n = Math.max(2, Math.round(L.ex.a * fs / 1.5)), a = (L.ex.ang || 45) * Math.PI / 180, dx = Math.cos(a) * L.ex.a * fs / n, dy = Math.sin(a) * L.ex.a * fs / n; ctx.fillStyle = L.ex.c; ctx.strokeStyle = L.ex.c; ctx.lineWidth = (L.st && L.st.w ? L.st.w * fs * 2 : 0); for (let i = n; i >= 1; i--) put((s, x, y) => { ctx.fillText(s, x + dx * i, y + dy * i); if (ctx.lineWidth) ctx.strokeText(s, x + dx * i, y + dy * i); }); }
  /* bayangan */
  if (L.sh && L.sh.a) { ctx.save(); ctx.shadowColor = hexA(L.sh.c, L.sh.a); ctx.shadowBlur = (L.sh.b || 0) * fs; ctx.shadowOffsetX = (L.sh.x || 0) * fs * ctxScale(ctx); ctx.shadowOffsetY = (L.sh.y || 0) * fs * ctxScale(ctx); ctx.shadowBlur *= ctxScale(ctx); ctx.fillStyle = L.sh.c; if (L.st && L.st.w) { ctx.strokeStyle = L.sh.c; ctx.lineWidth = L.st.w * fs * 2; put((s, x, y) => ctx.strokeText(s, x, y)); } else put((s, x, y) => ctx.fillText(s, x, y)); ctx.restore(); }
  /* glow / neon */
  if (L.glow && L.glow.a) { ctx.save(); ctx.shadowColor = L.glow.c; ctx.fillStyle = L.glow.c; for (const k of [0.6, 0.3, 0.12]) { ctx.shadowBlur = fs * k * L.glow.a * ctxScale(ctx); put((s, x, y) => ctx.fillText(s, x, y)); } ctx.restore(); }
  /* garis tepi */
  if (L.st && L.st.w) { ctx.strokeStyle = L.st.c; ctx.lineWidth = L.st.w * fs * 2; put((s, x, y) => ctx.strokeText(s, x, y)); }
  ctx.fillStyle = fill; put((s, x, y) => ctx.fillText(s, x, y));
  ctx.restore();
  L._bb = { w: bx.w + (L.bg && L.bg.a ? 2 * (L.bg.pad || 0.3) * fs : 0), h: bx.h + (L.bg && L.bg.a ? 1.4 * (L.bg.pad || 0.3) * fs : 0), cy: (bx.y + bx.h / 2), W, H };
}
function ctxScale(ctx) { const m = ctx.getTransform(); return Math.hypot(m.a, m.b); }
function hexA(hx, a) { const c = hex2rgb(hx); return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + clamp(a, 0, 1) + ')'; }
function drawTexts(ctx, list, W, H) { for (const L of list || []) drawTextLayer(ctx, L, W, H); }

/* ----- ukuran dokumen & komposisi ----- */
function docDims(exp) {
  if (!doc) return [1080, 1080];
  if (doc.mode === 'collage') { const k = exp ? (doc.col.res || 1080) / 1080 : 1; return [Math.round(doc.col.W * k), Math.round(doc.col.H * k)]; }
  const im = curImg(); if (!im) return [1080, 1080]; const o = cropOut(im); return [o.W, o.H];
}
/* render terproses dengan cache (pratinjau) */
const PC = new Map();
function procKey(im, w, h, o) { return im.ver + '|' + w + 'x' + h + '|' + (o && o.orig ? 'o' : '') + JSON.stringify(im.p) + JSON.stringify(im.crop); }
function getProc(im, w, h, o) {
  w = Math.max(1, Math.round(w)); h = Math.max(1, Math.round(h));
  const key = procKey(im, w, h, o), c = PC.get(im.id + (o && o.orig ? 'o' : '') + (o && o.slot || ''));
  if (c && c.key === key) return c.cv;
  const cv = GL.render(im, im.p, w, h, { dst: c && c.cv, orig: o && o.orig, fast: o && o.fast });
  PC.set(im.id + (o && o.orig ? 'o' : '') + (o && o.slot || ''), { key, cv });
  return cv;
}
function composeThumb(m) {
  const [W, H] = docDims(), s = m / Math.max(W, H), c = mkCanvas(W * s, H * s), x = c.getContext('2d');
  x.scale(s, s); composeInto(x, W, H, { preview: false, get: (im, w, h) => getProc(im, Math.min(w, w * s * 2), Math.min(h, h * s * 2), { slot: 't' }) });
  return c;
}
function composeInto(ctx, W, H, o) {
  if (doc.mode === 'collage') { const rs = drawCollage(ctx, doc.col, W, H, o.get, o); drawTexts(ctx, doc.texts, W, H); return rs; }
  const im = curImg(); if (!im) return;
  const src = o.get(im, W, H); ctx.drawImage(src, 0, 0, W, H);
  drawLayered(ctx, im.texts, W, H, () => { const c = cutOut(im, src, src.width, src.height, 'p'); if (c) ctx.drawImage(c, 0, 0, W, H); });
}
/* teks di belakang objek: teks 'behind' -> potongan objek -> teks lain */
function drawLayered(ctx, list, W, H, drawCut) {
  list = list || []; const back = list.filter(t => t.behind);
  if (!back.length) { drawTexts(ctx, list, W, H); return; }
  drawTexts(ctx, back, W, H); drawCut(); drawTexts(ctx, list.filter(t => !t.behind), W, H);
}
/* render final resolusi penuh */
async function renderFinal() {
  const [W, H] = docDims(true);
  await ensureFonts(texts());
  const c = mkCanvas(W, H), ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high';
  const tmp = new Map();
  composeInto(ctx, W, H, { preview: false, get: (im, w, h) => {
    const o = cropOut(im); const s = Math.min(1.0, Math.max(w / o.W, h / o.H)); const rw = Math.max(1, Math.round(doc.mode === 'collage' ? Math.min(o.W, w * 1.0) : W)), rh = Math.max(1, Math.round(doc.mode === 'collage' ? rw * o.H / o.W : H));
    const k = im.id + rw; if (tmp.has(k)) return tmp.get(k);
    const cv = GL.render(im, im.p, rw, rh, { full: true }); tmp.set(k, cv); return cv; } });
  return c;
}


/* ---- g-stage.js ---- */
/* ================= STAGE: TAMPILAN & INTERAKSI ================= */
const SEL = { text: null, cell: -1, clear() { this.text = null; this.cell = -1; } };
const V = { z: 1, ox: 0, oy: 0, fit: true, dpr: 1, cw: 0, ch: 0 };
const ST = { tool: 'auto', compare: false, drag: false, swapFrom: -1, brush: 60, erase: 1, cropView: false };
let cv = null, cx = null, drawQ = false, lastRects = [];
function stageInit() {
  cv = $('#ps-cv'); cx = cv.getContext('2d');
  new ResizeObserver(() => { V.fit && (V.fit = true); requestDraw(); }).observe($('#ps-stage'));
  bindPointer();
}
function requestDraw() { if (drawQ) return; drawQ = true; requestAnimationFrame(() => { drawQ = false; try { draw(); } catch (e) { console.error(e); } }); }
function viewDims() {
  if (doc && doc.mode === 'photo' && ST.tool === 'crop' && curImg()) { const m = cropMap(curImg(), true); return [m.W, m.H]; }
  return docDims();
}
function fitView(W, H) {
  const pad = isMobile() ? 14 : 28, s = Math.min((V.cw - pad * 2) / W, (V.ch - pad * 2) / H);
  V.z = s > 0 ? s : 1; V.ox = (V.cw - W * V.z) / 2; V.oy = (V.ch - H * V.z) / 2;
}
function setZoom(z, px, py) {
  const [W, H] = viewDims(); z = clamp(z, 0.02, 8);
  if (px == null) { px = V.cw / 2; py = V.ch / 2; }
  const dx = (px - V.ox) / V.z, dy = (py - V.oy) / V.z;
  V.z = z; V.ox = px - dx * z; V.oy = py - dy * z; V.fit = false;
  const zl = $('#ps-zl'); if (zl) zl.textContent = Math.round(z * 100) + '%';
  requestDraw();
}
const cropCache = { key: '', cv: null };
function getter(pz) {
  return (im, w, h) => {
    let s = Math.min(1, pz); const cap = 2600 / Math.max(w * s, h * s); if (cap < 1) s *= cap;
    return getProc(im, w * s, h * s, { orig: ST.compare, fast: ST.drag });
  };
}
function draw() {
  const st = $('#ps-stage'), r = st.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2.5);
  V.cw = r.width; V.ch = r.height; V.dpr = dpr;
  const bw = Math.round(r.width * dpr), bh = Math.round(r.height * dpr);
  if (cv.width !== bw || cv.height !== bh) { cv.width = bw; cv.height = bh; }
  cx.setTransform(1, 0, 0, 1, 0, 0); cx.clearRect(0, 0, bw, bh);
  const has = doc && (doc.mode === 'collage' || curImg());
  $('#ps-empty').hidden = !!has; $('#ps-sbar').hidden = !has; A.classList.toggle('ps-nodoc', !has);
  if (!has) return;
  const [W, H] = viewDims();
  if (V.fit) fitView(W, H);
  const zl = $('#ps-zl'); if (zl) zl.textContent = Math.round(V.z * 100) + '%';
  const z = V.z * dpr;
  cx.setTransform(z, 0, 0, z, V.ox * dpr, V.oy * dpr);
  cx.save(); cx.shadowColor = 'rgba(0,0,0,.5)'; cx.shadowBlur = 24 * dpr; cx.fillStyle = '#000'; cx.fillRect(0, 0, W, H); cx.restore();
  cx.imageSmoothingQuality = 'high';
  if (doc.mode === 'photo' && ST.tool === 'crop') {
    const im = curImg(), m = cropMap(im, true); let s = Math.min(1, z); const cap = 2400 / Math.max(W * s, H * s); if (cap < 1) s *= cap;
    const rw = Math.round(W * s), rh = Math.round(H * s), key = im.ver + rw + 'x' + rh + JSON.stringify(im.p) + im.crop.r90 + im.crop.fh + im.crop.fv;
    if (cropCache.key !== key) { cropCache.cv = GL.render(im, im.p, rw, rh, { map: m, dst: cropCache.cv, fast: ST.drag }); cropCache.key = key; }
    cx.drawImage(cropCache.cv, 0, 0, W, H);
    drawCropOverlay(W, H);
    return;
  }
  lastRects = composeInto(cx, W, H, { preview: true, get: getter(z) }) || [];
  drawOverlays(W, H);
}
function lw(px) { return px / V.z; }
function drawOverlays(W, H) {
  const c = cx;
  /* sel kolase */
  if (doc.mode === 'collage' && SEL.cell >= 0 && lastRects[SEL.cell]) {
    const r = lastRects[SEL.cell]; c.save(); c.translate(r.x + r.w / 2, r.y + r.h / 2); c.rotate(r.rot);
    c.strokeStyle = ST.swapFrom >= 0 ? '#ffd23f' : '#ff4f7b'; c.lineWidth = lw(3); c.setLineDash([lw(10), lw(6)]); c.strokeRect(-r.w / 2, -r.h / 2, r.w, r.h); c.restore();
  }
  /* teks terpilih */
  const L = SEL.text && texts().find(t => t.id === SEL.text);
  if (L && L._bb) {
    const b = L._bb; c.save(); c.translate(L.x * W + (L._ox || 0), L.y * H); c.rotate((L.rot || 0) * Math.PI / 180);
    const pad = lw(8), x0 = -b.w / 2 - pad, y0 = b.cy - b.h / 2 - pad, w = b.w + pad * 2, h = b.h + pad * 2;
    c.strokeStyle = '#fff'; c.lineWidth = lw(1.5); c.setLineDash([lw(6), lw(4)]); c.strokeRect(x0, y0, w, h); c.setLineDash([]);
    c.strokeStyle = 'rgba(0,0,0,.5)'; c.lineWidth = lw(0.8); c.strokeRect(x0 - lw(1), y0 - lw(1), w + lw(2), h + lw(2));
    const hr = lw(9);
    c.fillStyle = '#fff'; c.strokeStyle = '#ff4f7b'; c.lineWidth = lw(2.5);
    c.beginPath(); c.arc(x0 + w, y0 + h, hr, 0, 7); c.fill(); c.stroke();
    c.beginPath(); c.moveTo(0, y0); c.lineTo(0, y0 - lw(26)); c.strokeStyle = '#fff'; c.lineWidth = lw(1.5); c.stroke();
    c.beginPath(); c.arc(0, y0 - lw(30), hr, 0, 7); c.fillStyle = '#fff'; c.fill(); c.strokeStyle = '#ff4f7b'; c.lineWidth = lw(2.5); c.stroke();
    c.restore();
  }
  if (doc.mode !== 'photo') return;
  const im = curImg();
  /* titik sumber cahaya */
  if (ST.tool === 'light') {
    const fx = im.p.fx;
    if (fx.rays.a || fx.flare.a || fx.haze.a) handleDot(fx.src.x * W, fx.src.y * H, '#ffd23f', 'sun');
    if (fx.flash.a) handleDot(fx.flash.x * W, fx.flash.y * H, '#7fd3ff', 'flash');
    if (fx.swirl && fx.swirl.a) handleDot(fx.swirl.x * W, fx.swirl.y * H, '#ff7ad9', 'swirl');
  }
  if (ST.tool === 'focus') drawFocusOverlay(W, H);
  /* masker hapus objek */
  if (ST.tool === 'erase') {
    const mk = im._mask;
    if (mk) {
      c.save();
      const T = maskToDoc(im, W, H, mk); c.transform(T[0], T[1], T[2], T[3], T[4], T[5]);
      c.globalAlpha = 0.55; c.drawImage(mk, 0, 0); c.restore();
    }
    if (ST.hover) { c.beginPath(); c.arc(ST.hover[0], ST.hover[1], lw(ST.brush / 2), 0, 7); c.strokeStyle = '#fff'; c.lineWidth = lw(1.5); c.stroke(); c.strokeStyle = 'rgba(0,0,0,.6)'; c.lineWidth = lw(0.7); c.stroke(); }
  }
}
function handleDot(x, y, col) {
  const c = cx, r = lw(13);
  c.save(); c.beginPath(); c.arc(x, y, r, 0, 7); c.fillStyle = 'rgba(0,0,0,.35)'; c.fill(); c.lineWidth = lw(3); c.strokeStyle = col; c.stroke();
  c.beginPath(); c.arc(x, y, lw(4), 0, 7); c.fillStyle = col; c.fill();
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; c.beginPath(); c.moveTo(x + Math.cos(a) * r * 1.25, y + Math.sin(a) * r * 1.25); c.lineTo(x + Math.cos(a) * r * 1.6, y + Math.sin(a) * r * 1.6); c.lineWidth = lw(2); c.strokeStyle = col; c.stroke(); }
  c.restore();
}
/* matriks transform piksel masker -> piksel dokumen */
function inv2x3(m) { const [a, b, c, d, e, f] = m, det = a * d - b * c; return [d / det, -b / det, -c / det, a / det, (c * f - d * e) / det, (b * e - a * f) / det]; }
function maskToDoc(im, W, H, mk) {
  const mm = cropMap(im).m; /* doc norm -> base norm: [a b c d e f] dengan x'=a*u+c*v+e */
  const A = [mm[0], mm[1], mm[3], mm[4], mm[6], mm[7]], I = inv2x3(A);
  /* mask px -> base norm (1/mw,1/mh) -> doc norm (I) -> doc px (W,H) */
  const sx = 1 / mk.width, sy = 1 / mk.height;
  return [I[0] * sx * W, I[1] * sx * H, I[2] * sy * W, I[3] * sy * H, I[4] * W, I[5] * H];
}
/* ----- overlay crop ----- */
function cropRectPx(im, W, H) { const c = im.crop; return { x: c.x * W, y: c.y * H, w: c.w * W, h: c.h * H }; }
function drawCropOverlay(W, H) {
  const im = curImg(), r = cropRectPx(im, W, H), c = cx, a = (im.crop.ang || 0) * Math.PI / 180, k = cropMap(im).k;
  c.save(); c.fillStyle = 'rgba(0,0,0,.55)'; c.beginPath(); c.rect(0, 0, W, H);
  c.translate(r.x + r.w / 2, r.y + r.h / 2); c.rotate(a); const w = r.w / k, h = r.h / k; c.rect(w / 2, -h / 2, -w, h); c.fill('evenodd');
  c.strokeStyle = '#fff'; c.lineWidth = lw(1.5); c.strokeRect(-w / 2, -h / 2, w, h);
  c.strokeStyle = 'rgba(255,255,255,.4)'; c.lineWidth = lw(1);
  for (const t of [1 / 3, 2 / 3]) { c.beginPath(); c.moveTo(-w / 2 + w * t, -h / 2); c.lineTo(-w / 2 + w * t, h / 2); c.moveTo(-w / 2, -h / 2 + h * t); c.lineTo(w / 2, -h / 2 + h * t); c.stroke(); }
  c.restore();
  c.save(); c.strokeStyle = '#fff'; c.lineWidth = lw(4); const L = lw(18);
  for (const [px, py, sx, sy] of [[r.x, r.y, 1, 1], [r.x + r.w, r.y, -1, 1], [r.x, r.y + r.h, 1, -1], [r.x + r.w, r.y + r.h, -1, -1]]) { c.beginPath(); c.moveTo(px, py + sy * L); c.lineTo(px, py); c.lineTo(px + sx * L, py); c.stroke(); }
  c.restore();
}
const RATIOS = [['free', 'Bebas'], ['orig', 'Asli'], ['1:1', '1:1'], ['4:5', '4:5'], ['3:4', '3:4'], ['9:16', '9:16'], ['16:9', '16:9'], ['4:3', '4:3'], ['2:3', '2:3'], ['3:2', '3:2'], ['1.91:1', '1.91:1']];
function ratioVal(im, id) { if (id === 'free') return 0; if (id === 'orig') { const o = cropMap(im, true); return o.W / o.H; } const [a, b] = id.split(':').map(Number); return a / b; }
function applyRatio(im, id) {
  const m = cropMap(im, true), W = m.W, H = m.H, r = ratioVal(im, id); im.crop.ratio = id;
  if (!r) return;
  let w = W, h = w / r; if (h > H) { h = H; w = h * r; }
  im.crop.w = w / W; im.crop.h = h / H; im.crop.x = (1 - im.crop.w) / 2; im.crop.y = (1 - im.crop.h) / 2;
}

/* ----- pointer ----- */
const PTR = new Map(); let G = null;
function toDoc(e) { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left - V.ox) / V.z, (e.clientY - r.top - V.oy) / V.z]; }
function hitText(px, py) {
  const [W, H] = docDims(), list = texts();
  for (let i = list.length - 1; i >= 0; i--) {
    const L = list[i], b = L._bb; if (!b) continue;
    const a = -(L.rot || 0) * Math.PI / 180, dx = px - L.x * W - (L._ox || 0), dy = py - L.y * H, x = dx * Math.cos(a) - dy * Math.sin(a), y = dx * Math.sin(a) + dy * Math.cos(a);
    const pad = lw(10);
    if (Math.abs(x) <= b.w / 2 + pad && Math.abs(y - b.cy) <= b.h / 2 + pad) return { L, x, y };
  }
  return null;
}
function textHandle(L, px, py) {
  const [W, H] = docDims(), b = L._bb; if (!b) return null;
  const a = -(L.rot || 0) * Math.PI / 180, dx = px - L.x * W - (L._ox || 0), dy = py - L.y * H, x = dx * Math.cos(a) - dy * Math.sin(a), y = dx * Math.sin(a) + dy * Math.cos(a);
  const pad = lw(8), x1 = b.w / 2 + pad, y0 = b.cy - b.h / 2 - pad, y1 = b.cy + b.h / 2 + pad, hr = lw(18);
  if (Math.hypot(x - x1, y - y1) < hr) return 'scale';
  if (Math.hypot(x, y - (y0 - lw(30))) < hr) return 'rot';
  return null;
}
function hitCell(px, py) {
  for (let i = lastRects.length - 1; i >= 0; i--) {
    const r = lastRects[i], a = -r.rot, dx = px - (r.x + r.w / 2), dy = py - (r.y + r.h / 2), x = dx * Math.cos(a) - dy * Math.sin(a), y = dx * Math.sin(a) + dy * Math.cos(a);
    if (Math.abs(x) <= r.w / 2 && Math.abs(y) <= r.h / 2) return i;
  }
  return -1;
}
function cropHit(px, py) {
  const im = curImg(), [W, H] = viewDims(), r = cropRectPx(im, W, H), t = lw(22);
  const nx = Math.abs(px - r.x) < t ? 'l' : Math.abs(px - r.x - r.w) < t ? 'r' : '', ny = Math.abs(py - r.y) < t ? 't' : Math.abs(py - r.y - r.h) < t ? 'b' : '';
  const inX = px > r.x - t && px < r.x + r.w + t, inY = py > r.y - t && py < r.y + r.h + t;
  if (inX && inY && (nx || ny)) return nx + ny;
  if (px > r.x && px < r.x + r.w && py > r.y && py < r.y + r.h) return 'move';
  return '';
}
function bindPointer() {
  cv.addEventListener('pointerdown', e => {
    if (!doc) return;
    cv.setPointerCapture(e.pointerId); PTR.set(e.pointerId, [e.clientX, e.clientY]);
    if (PTR.size === 2) { startPinch(); return; }
    if (PTR.size > 2) return;
    const [px, py] = toDoc(e), [W, H] = docDims(); ST.drag = true;
    G = { t: 'none', sx: e.clientX, sy: e.clientY, px, py, moved: false, ox: V.ox, oy: V.oy };
    if (doc.mode === 'photo' && ST.tool === 'erase') { G.t = 'paint'; paintAt(px, py, true); return; }
    if (doc.mode === 'photo' && ST.tool === 'focus' && focusDown(px, py)) return;
    if (doc.mode === 'photo' && ST.tool === 'crop') { const h = cropHit(px, py); if (h) { G.t = 'crop'; G.h = h; G.c0 = clone(curImg().crop); return; } G.t = 'pan'; return; }
    if (doc.mode === 'photo' && ST.tool === 'light') {
      const fx = curImg().p.fx, near = (x, y) => Math.hypot(px - x * W, py - y * H) < lw(30);
      if ((fx.rays.a || fx.flare.a || fx.haze.a) && near(fx.src.x, fx.src.y)) { G.t = 'light'; G.k = 'src'; return; }
      if (fx.flash.a && near(fx.flash.x, fx.flash.y)) { G.t = 'light'; G.k = 'flash'; return; }
      if (fx.swirl && fx.swirl.a && near(fx.swirl.x, fx.swirl.y)) { G.t = 'light'; G.k = 'swirl'; return; }
    }
    const sl = SEL.text && texts().find(t => t.id === SEL.text);
    if (sl) { const h = textHandle(sl, px, py); if (h) { G.t = 't' + h; G.L = sl; G.L0 = clone(sl); return; } }
    const ht = hitText(px, py);
    if (ht) { if (SEL.text !== ht.L.id) { SEL.text = ht.L.id; SEL.cell = -1; onSelChange(); } G.t = 'tmove'; G.L = ht.L; G.L0 = clone(ht.L); return; }
    if (doc.mode === 'collage') {
      const i = hitCell(px, py);
      if (i >= 0) {
        if (ST.swapFrom >= 0 && ST.swapFrom !== i) { swapCells(ST.swapFrom, i); ST.swapFrom = -1; G.t = 'none'; return; }
        const was = SEL.cell; SEL.cell = i; SEL.text = null; if (was !== i) onSelChange();
        const cell = doc.col.cells[i]; if (cell && cell.img) { G.t = 'cpan'; G.i = i; G.c0 = clone(cell); }
        requestDraw(); return;
      }
      if (SEL.cell >= 0 || SEL.text) { SEL.clear(); onSelChange(); }
    } else if (SEL.text) { SEL.text = null; onSelChange(); }
    G.t = 'pan';
  });
  cv.addEventListener('pointermove', e => {
    if (PTR.has(e.pointerId)) PTR.set(e.pointerId, [e.clientX, e.clientY]);
    if (doc && doc.mode === 'photo' && (ST.tool === 'erase' || ST.tool === 'focus' && (UI.mtool === 'add' || UI.mtool === 'sub'))) { ST.hover = toDoc(e); if (!G) requestDraw(); }
    if (G && G.t === 'pinch') { movePinch(); return; }
    if (!G || PTR.size !== 1) return;
    const [px, py] = toDoc(e), [W, H] = docDims(), dx = px - G.px, dy = py - G.py;
    if (Math.abs(e.clientX - G.sx) + Math.abs(e.clientY - G.sy) > 3) G.moved = true;
    switch (G.t) {
      case 'paint': paintAt(px, py); break;
      case 'pan': if (!G.moved) return; V.ox = G.ox + (e.clientX - G.sx); V.oy = G.oy + (e.clientY - G.sy); V.fit = false; break;
      case 'light': { const p = curImg().p.fx, o = G.k === 'src' ? p.src : G.k === 'swirl' ? p.swirl : p.flash; o.x = clamp(px / W, -0.2, 1.2); o.y = clamp(py / H, -0.2, 1.2); break; }
      case 'tmove': { if (!G.moved) return; let nx = G.L0.x + dx / W, ny = G.L0.y + dy / H; const sn = 0.012; if (Math.abs(nx - 0.5) < sn) nx = 0.5; if (Math.abs(ny - 0.5) < sn) ny = 0.5; G.L.x = nx; G.L.y = ny; break; }
      case 'tscale': { const c0 = [G.L0.x * W + (G.L._ox || 0), G.L0.y * H], d0 = Math.hypot(G.px - c0[0], G.py - c0[1]), d1 = Math.hypot(px - c0[0], py - c0[1]); G.L.size = clamp(G.L0.size * d1 / Math.max(1, d0), 0.008, 1.5); syncTextPanel(); break; }
      case 'trot': { const c0 = [G.L0.x * W + (G.L._ox || 0), G.L0.y * H]; let a = Math.atan2(py - c0[1], px - c0[0]) * 180 / Math.PI + 90; a = Math.round(a); for (const s of [0, 90, 180, -90, -180, 270]) if (Math.abs(a - s) < 4) a = s; G.L.rot = ((a + 540) % 360) - 180; syncTextPanel(); break; }
      case 'cpan': { const cell = doc.col.cells[G.i], r = lastRects[G.i], im = imgById(cell.img); if (!r || !im) return; const f = r.inner || r; const gm = cellImgGeom(G.c0, im, f.w, f.h); const a = -r.rot, rx = dx * Math.cos(a) - dy * Math.sin(a), ry = dx * Math.sin(a) + dy * Math.cos(a);
        cell.px = gm.dw > f.w + 0.5 ? clamp(G.c0.px - rx * 2 / (gm.dw - f.w), -1, 1) : 0; cell.py = gm.dh > f.h + 0.5 ? clamp(G.c0.py - ry * 2 / (gm.dh - f.h), -1, 1) : 0; break; }
      case 'crop': cropDrag(px, py); break;
      case 'mpaint': case 'fcenter': focusMove(px, py); break;
      default: return;
    }
    requestDraw();
  });
  const up = e => {
    PTR.delete(e.pointerId);
    if (G && G.t === 'pinch') { if (PTR.size === 0) { ST.drag = false; if (G.cell >= 0) commit('Zoom foto'); G = null; requestDraw(); } return; }
    if (!G) return;
    const g = G; G = null; ST.drag = false;
    if (g.t === 'paint') { ST.stroke = null; updEraseUI(); }
    else if (g.t === 'light') { commit('Posisi cahaya'); }
    else if (g.t.charAt(0) === 't' && g.t !== 'tmove' || g.t === 'tmove' && g.moved) commit('Ubah teks');
    else if (g.t === 'cpan' && g.moved) commit('Geser foto');
    else if (g.t === 'crop') commit('Potong');
    else if (g.t === 'mpaint' || g.t === 'fcenter') focusUp(g);
    requestDraw();
  };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('pointerleave', () => { if (ST.hover) { ST.hover = null; requestDraw(); } });
  cv.addEventListener('wheel', e => {
    if (!doc) return; e.preventDefault();
    const [px, py] = toDoc(e);
    if (doc.mode === 'collage' && SEL.cell >= 0 && hitCell(px, py) === SEL.cell) {
      const c = doc.col.cells[SEL.cell]; if (c && c.img) { c.z = clamp((c.z || 1) * Math.exp(-e.deltaY * 0.0015), 1, 6); requestDraw(); commitSoon('Zoom foto'); return; }
    }
    const r = cv.getBoundingClientRect(); setZoom(V.z * Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0015)), e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });
  cv.addEventListener('dblclick', e => {
    if (!doc) return; const [px, py] = toDoc(e), ht = hitText(px, py);
    if (ht) { SEL.text = ht.L.id; setTool('text'); setTimeout(() => { const ta = $('#ps-ttext'); if (ta) { ta.focus(); ta.select(); } }, 50); return; }
    if (doc.mode === 'collage') { const i = hitCell(px, py); if (i >= 0 && doc.col.cells[i] && doc.col.cells[i].img) { editCellPhoto(i); return; } if (i >= 0) { pickForCell(i); return; } }
    if (V.fit) { const r = cv.getBoundingClientRect(); setZoom(1 / V.dpr * V.dpr, e.clientX - r.left, e.clientY - r.top); } else { V.fit = true; requestDraw(); }
  });
}
const commitSoon = debounce(l => commit(l), 500);
function startPinch() {
  const [a, b] = Array.from(PTR.values());
  G = { t: 'pinch', d0: Math.hypot(a[0] - b[0], a[1] - b[1]), m0: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], z0: V.z, ox: V.ox, oy: V.oy, cell: -1 };
  if (doc.mode === 'collage' && SEL.cell >= 0) { const c = doc.col.cells[SEL.cell]; const r = cv.getBoundingClientRect(); const dp = [(G.m0[0] - r.left - V.ox) / V.z, (G.m0[1] - r.top - V.oy) / V.z]; if (c && c.img && hitCell(dp[0], dp[1]) === SEL.cell) { G.cell = SEL.cell; G.cz = c.z || 1; } }
  const sl = SEL.text && texts().find(t => t.id === SEL.text); if (sl && G.cell < 0) { G.L = sl; G.s0 = sl.size; G.r0 = sl.rot || 0; G.a0 = Math.atan2(b[1] - a[1], b[0] - a[0]); }
}
function movePinch() {
  const [a, b] = Array.from(PTR.values()); if (!b) return;
  const d = Math.hypot(a[0] - b[0], a[1] - b[1]), m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], k = d / Math.max(1, G.d0);
  if (G.cell >= 0) { doc.col.cells[G.cell].z = clamp(G.cz * k, 1, 6); requestDraw(); return; }
  if (G.L) { G.L.size = clamp(G.s0 * k, 0.008, 1.5); G.L.rot = G.r0 + (Math.atan2(b[1] - a[1], b[0] - a[0]) - G.a0) * 180 / Math.PI; syncTextPanel(); requestDraw(); return; }
  const r = cv.getBoundingClientRect(), z = clamp(G.z0 * k, 0.02, 8);
  const px = G.m0[0] - r.left, py = G.m0[1] - r.top, dx = (px - G.ox) / G.z0, dy = (py - G.oy) / G.z0;
  V.z = z; V.ox = m[0] - r.left - dx * z; V.oy = m[1] - r.top - dy * z; V.fit = false; requestDraw();
}
function cropDrag(px, py) {
  const im = curImg(), [W, H] = viewDims(), c0 = G.c0, c = im.crop, rv = ratioVal(im, c.ratio || 'free');
  const dx = (px - G.px) / W, dy = (py - G.py) / H, mn = 0.04;
  if (G.h === 'move') { c.x = clamp(c0.x + dx, 0, 1 - c0.w); c.y = clamp(c0.y + dy, 0, 1 - c0.h); return; }
  let x0 = c0.x, y0 = c0.y, x1 = c0.x + c0.w, y1 = c0.y + c0.h;
  if (G.h.includes('l')) x0 = clamp(x0 + dx, 0, x1 - mn); if (G.h.includes('r')) x1 = clamp(x1 + dx, x0 + mn, 1);
  if (G.h.includes('t')) y0 = clamp(y0 + dy, 0, y1 - mn); if (G.h.includes('b')) y1 = clamp(y1 + dy, y0 + mn, 1);
  if (rv) {
    let w = (x1 - x0) * W, h = (y1 - y0) * H;
    if (G.h === 't' || G.h === 'b') w = h * rv; else h = w / rv;
    if (w > W) { w = W; h = w / rv; } if (h > H) { h = H; w = h * rv; }
    const nw = w / W, nh = h / H;
    if (G.h.includes('l')) x0 = x1 - nw; else if (G.h.includes('r')) x1 = x0 + nw; else { const cxm = (c0.x + c0.w / 2); x0 = cxm - nw / 2; x1 = x0 + nw; }
    if (G.h.includes('t')) y0 = y1 - nh; else if (G.h.includes('b')) y1 = y0 + nh; else { const cym = (c0.y + c0.h / 2); y0 = cym - nh / 2; y1 = y0 + nh; }
    if (x0 < 0) { x1 -= x0; x0 = 0; } if (x1 > 1) { x0 -= x1 - 1; x1 = 1; } if (y0 < 0) { y1 -= y0; y0 = 0; } if (y1 > 1) { y0 -= y1 - 1; y1 = 1; }
  }
  c.x = x0; c.y = y0; c.w = x1 - x0; c.h = y1 - y0;
}
/* ----- kuas hapus objek ----- */
function ensureMask(im) {
  if (im._mask && im._maskVer === im.ver) return im._mask;
  const s = Math.min(1, 2048 / Math.max(im.bw, im.bh)); im._mask = mkCanvas(im.bw * s, im.bh * s); im._mask.getContext('2d', { willReadFrequently: true }); im._maskVer = im.ver; im._mask.scale = s; return im._mask;
}
function paintAt(px, py, start) {
  const im = curImg(), mk = ensureMask(im), [W, H] = docDims(), m = cropMap(im);
  const b = m.f(px / W, py / H), x = b[0] * mk.width, y = b[1] * mk.height;
  const b2 = m.f((px + ST.brush / 2 / V.z) / W, py / H), rad = Math.hypot(b2[0] * mk.width - x, b2[1] * mk.height - y);
  const c = mk.getContext('2d'); c.globalCompositeOperation = ST.erase ? 'source-over' : 'destination-out'; c.fillStyle = '#ff2d55'; c.strokeStyle = '#ff2d55'; c.lineCap = 'round'; c.lineWidth = rad * 2;
  if (start || !ST.stroke) { c.beginPath(); c.arc(x, y, rad, 0, 7); c.fill(); }
  else { c.beginPath(); c.moveTo(ST.stroke[0], ST.stroke[1]); c.lineTo(x, y); c.stroke(); }
  ST.stroke = [x, y]; ST.hover = [px, py]; im._maskDirty = true; requestDraw();
}


/* ---- h-tools.js ---- */
/* ================= ALAT: WORKER, ENHANCE AI, AUTO, MATCH, HAPUS OBJEK ================= */
const W_SRC = "/* Worker Photo Studio: inpaint (PatchMatch), resize, kuantisasi PNG-8, encoder PNG */\n'use strict';\nlet curId = 0;\nconst prog = (p) => postMessage({ id: curId, prog: p });\nself.onmessage = async e => {\n  const m = e.data; curId = m.id;\n  try {\n    if (m.op === 'inpaint') { const out = inpaint(m); postMessage({ id: m.id, ok: true, data: out }, [out.buffer]); }\n    else if (m.op === 'resize') { const out = resize(m.data, m.sw, m.sh, m.dw, m.dh, m.k); postMessage({ id: m.id, ok: true, data: out }, [out.buffer]); }\n    else if (m.op === 'png') { const out = await encodePNG(m); postMessage({ id: m.id, ok: true, data: out }, [out]); }\n    else if (m.op === 'png8') { const q = quantize(m.data, m.w, m.h, m.colors, m.dither, m.method, m.trans); const out = await encodePNG({ w: m.w, h: m.h, idx: q.idx, pal: q.pal, meta: m.meta }); postMessage({ id: m.id, ok: true, data: out, ncol: q.n }, [out]); }\n    else if (m.op === 'classicup') { const out = classicUp(m.data, m.sw, m.sh, m.dw, m.dh); postMessage({ id: m.id, ok: true, data: out }, [out.buffer]); }\n  } catch (err) { postMessage({ id: m.id, ok: false, err: String(err && err.message || err) }); }\n};\n\n/* ================= INPAINT ================= */\nfunction rngF(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }\nfunction inpaint(m) {\n  const { w, h, rgba, mask } = m, PR = 3, rnd = rngF(12345);\n  const lv = [];\n  const I0 = new Float32Array(w * h * 3); for (let i = 0, j = 0; i < w * h; i++, j += 4) { I0[i * 3] = rgba[j] / 255; I0[i * 3 + 1] = rgba[j + 1] / 255; I0[i * 3 + 2] = rgba[j + 2] / 255; }\n  lv.push({ w, h, I: I0, M: Uint8Array.from(mask, v => v ? 1 : 0) });\n  while (Math.max(lv[lv.length - 1].w, lv[lv.length - 1].h) > 72 && Math.min(lv[lv.length - 1].w, lv[lv.length - 1].h) > 24) lv.push(downLevel(lv[lv.length - 1]));\n  let prev = null; const NL = lv.length; let step = 0, total = 0;\n  for (let l = NL - 1; l >= 0; l--) total += l === NL - 1 ? 14 : l === 0 ? 4 : 6;\n  for (let l = NL - 1; l >= 0; l--) {\n    const P = lv[l]; prepLevel(P, PR);\n    if (!P.valid.length) { diffuse(P); continue; }\n    if (!prev) { diffuse(P); P.nnf = new Int32Array(P.T.length); P.D = new Float32Array(P.T.length); for (let k = 0; k < P.T.length; k++) { P.nnf[k] = P.valid[(rnd() * P.valid.length) | 0]; P.D[k] = dist(P, P.T[k], P.nnf[k], 1e30, PR); } }\n    else { upImage(prev, P); upNNF(prev, P, rnd, PR); }\n    const iters = l === NL - 1 ? 14 : l === 0 ? 4 : 6;\n    for (let it = 0; it < iters; it++) { pmPass(P, it, rnd, PR); vote(P, PR); prog(++step / total); }\n    prev = P;\n  }\n  const out = new Uint8ClampedArray(rgba.length); const I = lv[0].I, M = lv[0].M;\n  for (let i = 0, j = 0; i < w * h; i++, j += 4) {\n    if (M[i]) { out[j] = I[i * 3] * 255 + 0.5; out[j + 1] = I[i * 3 + 1] * 255 + 0.5; out[j + 2] = I[i * 3 + 2] * 255 + 0.5; }\n    else { out[j] = rgba[j]; out[j + 1] = rgba[j + 1]; out[j + 2] = rgba[j + 2]; }\n    out[j + 3] = 255;\n  }\n  return out;\n}\nfunction downLevel(P) {\n  const w = Math.max(1, P.w >> 1), h = Math.max(1, P.h >> 1), I = new Float32Array(w * h * 3), M = new Uint8Array(w * h);\n  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {\n    let r = 0, g = 0, b = 0, n = 0, hole = 0;\n    for (let dy = 0; dy < 2; dy++) for (let dx = 0; dx < 2; dx++) { const sx = Math.min(P.w - 1, x * 2 + dx), sy = Math.min(P.h - 1, y * 2 + dy), i = sy * P.w + sx; if (P.M[i]) hole = 1; else { r += P.I[i * 3]; g += P.I[i * 3 + 1]; b += P.I[i * 3 + 2]; n++; } }\n    const o = y * w + x; M[o] = hole; if (n) { I[o * 3] = r / n; I[o * 3 + 1] = g / n; I[o * 3 + 2] = b / n; }\n  }\n  return { w, h, I, M };\n}\nfunction prepLevel(P, PR) {\n  const { w, h, M } = P, S = new Int32Array((w + 1) * (h + 1));\n  for (let y = 0; y < h; y++) { let row = 0; for (let x = 0; x < w; x++) { row += M[y * w + x]; S[(y + 1) * (w + 1) + x + 1] = S[y * (w + 1) + x + 1] + row; } }\n  const box = (x0, y0, x1, y1) => { x0 = Math.max(0, x0); y0 = Math.max(0, y0); x1 = Math.min(w - 1, x1); y1 = Math.min(h - 1, y1); return S[(y1 + 1) * (w + 1) + x1 + 1] - S[y0 * (w + 1) + x1 + 1] - S[(y1 + 1) * (w + 1) + x0] + S[y0 * (w + 1) + x0]; };\n  const ok = new Uint8Array(w * h), valid = [], T = [], tpos = new Int32Array(w * h).fill(-1), holes = [];\n  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {\n    const i = y * w + x, s = box(x - PR, y - PR, x + PR, y + PR);\n    if (x >= PR && y >= PR && x < w - PR && y < h - PR && s === 0) { ok[i] = 1; valid.push(i); }\n    if (s > 0) { tpos[i] = T.length; T.push(i); }\n    if (M[i]) holes.push(i);\n  }\n  P.ok = ok; P.valid = Int32Array.from(valid); P.T = Int32Array.from(T); P.tpos = tpos; P.holes = Int32Array.from(holes);\n}\nfunction dist(P, t, s, best, PR) {\n  const w = P.w, h = P.h, I = P.I, tx = t % w, ty = (t / w) | 0, sx = s % w, sy = (s / w) | 0; let d = 0;\n  for (let dy = -PR; dy <= PR; dy++) {\n    const yt = ty + dy; if (yt < 0 || yt >= h) continue; const ys = sy + dy, rt = yt * w, rs = ys * w;\n    for (let dx = -PR; dx <= PR; dx++) {\n      const xt = tx + dx; if (xt < 0 || xt >= w) continue;\n      const it = (rt + xt) * 3, is = (rs + sx + dx) * 3;\n      const a = I[it] - I[is], b = I[it + 1] - I[is + 1], c = I[it + 2] - I[is + 2]; d += a * a + b * b + c * c;\n    }\n    if (d >= best) return d;\n  }\n  return d;\n}\nfunction pmPass(P, it, rnd, PR) {\n  const { w, h, T, tpos, ok, nnf, D } = P, n = T.length, fw = (it & 1) === 0, dir = fw ? 1 : -1;\n  const R0 = Math.max(w, h);\n  for (let q = 0; q < n; q++) {\n    const k = fw ? q : n - 1 - q, t = T[k], tx = t % w, ty = (t / w) | 0;\n    let best = D[k], bs = nnf[k];\n    /* propagasi */\n    const nx = tx - dir, ny = ty - dir;\n    if (nx >= 0 && nx < w) { const kn = tpos[ty * w + nx]; if (kn >= 0) { const c = nnf[kn], cx = c % w + dir; if (cx >= 0 && cx < w) { const s = c + dir; if (ok[s] && s !== bs) { const d = dist(P, t, s, best, PR); if (d < best) { best = d; bs = s; } } } } }\n    if (ny >= 0 && ny < h) { const kn = tpos[ny * w + tx]; if (kn >= 0) { const c = nnf[kn], cy = ((c / w) | 0) + dir; if (cy >= 0 && cy < h) { const s = c + dir * w; if (ok[s] && s !== bs) { const d = dist(P, t, s, best, PR); if (d < best) { best = d; bs = s; } } } } }\n    /* pencarian acak */\n    const bx = bs % w, by = (bs / w) | 0;\n    for (let r = R0; r >= 1; r >>= 1) {\n      const sx = Math.min(w - 1, Math.max(0, bx + Math.round((rnd() * 2 - 1) * r))), sy = Math.min(h - 1, Math.max(0, by + Math.round((rnd() * 2 - 1) * r))), s = sy * w + sx;\n      if (!ok[s] || s === bs) continue; const d = dist(P, t, s, best, PR); if (d < best) { best = d; bs = s; }\n    }\n    nnf[k] = bs; D[k] = best;\n  }\n}\nfunction vote(P, PR) {\n  const { w, h, I, M, T, nnf, D, holes } = P, acc = P.acc || (P.acc = new Float32Array(w * h * 3)), ws = P.ws || (P.ws = new Float32Array(w * h));\n  for (const p of holes) { acc[p * 3] = acc[p * 3 + 1] = acc[p * 3 + 2] = 0; ws[p] = 0; }\n  const N = (2 * PR + 1) * (2 * PR + 1), sig = N * 0.003;\n  for (let k = 0; k < T.length; k++) {\n    const t = T[k], s = nnf[k], tx = t % w, ty = (t / w) | 0, sx = s % w, sy = (s / w) | 0, wg = 1 / (1 + D[k] / sig);\n    for (let dy = -PR; dy <= PR; dy++) {\n      const yt = ty + dy; if (yt < 0 || yt >= h) continue;\n      for (let dx = -PR; dx <= PR; dx++) {\n        const xt = tx + dx; if (xt < 0 || xt >= w) continue; const p = yt * w + xt; if (!M[p]) continue;\n        const q = ((sy + dy) * w + sx + dx) * 3; acc[p * 3] += I[q] * wg; acc[p * 3 + 1] += I[q + 1] * wg; acc[p * 3 + 2] += I[q + 2] * wg; ws[p] += wg;\n      }\n    }\n  }\n  for (const p of holes) if (ws[p] > 0) { I[p * 3] = acc[p * 3] / ws[p]; I[p * 3 + 1] = acc[p * 3 + 1] / ws[p]; I[p * 3 + 2] = acc[p * 3 + 2] / ws[p]; }\n}\nfunction diffuse(P) {\n  const { w, h, I, M } = P, filled = Uint8Array.from(M, v => v ? 0 : 1); let left = P.holes ? P.holes.length : M.reduce((a, b) => a + b, 0), guard = 0;\n  while (left > 0 && guard++ < w + h) {\n    const upd = [];\n    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {\n      const i = y * w + x; if (filled[i]) continue; let r = 0, g = 0, b = 0, n = 0;\n      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue; const j = yy * w + xx; if (filled[j]) { r += I[j * 3]; g += I[j * 3 + 1]; b += I[j * 3 + 2]; n++; } }\n      if (n) upd.push(i, r / n, g / n, b / n);\n    }\n    if (!upd.length) break;\n    for (let k = 0; k < upd.length; k += 4) { const i = upd[k]; I[i * 3] = upd[k + 1]; I[i * 3 + 1] = upd[k + 2]; I[i * 3 + 2] = upd[k + 3]; filled[i] = 1; left--; }\n  }\n}\nfunction upImage(C, P) {\n  const { w, h, I, M } = P;\n  for (const p of P.holes) {\n    const x = p % w, y = (p / w) | 0, fx = Math.min(C.w - 1.001, Math.max(0, (x + 0.5) / 2 - 0.5)), fy = Math.min(C.h - 1.001, Math.max(0, (y + 0.5) / 2 - 0.5));\n    const x0 = Math.floor(fx), y0 = Math.floor(fy), ax = fx - x0, ay = fy - y0, x1 = Math.min(C.w - 1, x0 + 1), y1 = Math.min(C.h - 1, y0 + 1);\n    for (let c = 0; c < 3; c++) I[p * 3 + c] = (C.I[(y0 * C.w + x0) * 3 + c] * (1 - ax) + C.I[(y0 * C.w + x1) * 3 + c] * ax) * (1 - ay) + (C.I[(y1 * C.w + x0) * 3 + c] * (1 - ax) + C.I[(y1 * C.w + x1) * 3 + c] * ax) * ay;\n  }\n}\nfunction upNNF(C, P, rnd, PR) {\n  const { w, h, T, ok, valid } = P, n = T.length; P.nnf = new Int32Array(n); P.D = new Float32Array(n);\n  for (let k = 0; k < n; k++) {\n    const t = T[k], x = t % w, y = (t / w) | 0, cx = Math.min(C.w - 1, x >> 1), cy = Math.min(C.h - 1, y >> 1), kc = C.tpos[cy * C.w + cx];\n    let s = -1;\n    if (kc >= 0) { const cs = C.nnf[kc], sx = Math.min(w - 1, (cs % C.w) * 2 + (x & 1)), sy = Math.min(h - 1, ((cs / C.w) | 0) * 2 + (y & 1)); const ss = sy * w + sx; if (ok[ss]) s = ss; }\n    if (s < 0) s = valid[(rnd() * valid.length) | 0];\n    P.nnf[k] = s; P.D[k] = dist(P, t, s, 1e30, PR);\n  }\n}\n\n/* ================= RESIZE ================= */\nconst KERN = {\n  lanczos3: [3, x => { if (x === 0) return 1; if (x <= -3 || x >= 3) return 0; const p = Math.PI * x; return 3 * Math.sin(p) * Math.sin(p / 3) / (p * p); }],\n  mitchell: [2, x => { x = Math.abs(x); const B = 1 / 3, C = 1 / 3; if (x < 1) return ((12 - 9 * B - 6 * C) * x * x * x + (-18 + 12 * B + 6 * C) * x * x + (6 - 2 * B)) / 6; if (x < 2) return ((-B - 6 * C) * x * x * x + (6 * B + 30 * C) * x * x + (-12 * B - 48 * C) * x + (8 * B + 24 * C)) / 6; return 0; }],\n  catmull: [2, x => { x = Math.abs(x); if (x < 1) return 1.5 * x * x * x - 2.5 * x * x + 1; if (x < 2) return -0.5 * x * x * x + 2.5 * x * x - 4 * x + 2; return 0; }],\n  bilinear: [1, x => { x = Math.abs(x); return x < 1 ? 1 - x : 0; }]\n};\nfunction weights(sn, dn, K) {\n  const sc = sn / dn, fs = Math.max(1, sc), sup = K[0] * fs, out = [];\n  for (let i = 0; i < dn; i++) {\n    const c = (i + 0.5) * sc, a = Math.max(0, Math.floor(c - sup)), b = Math.min(sn - 1, Math.ceil(c + sup)), ws = []; let t = 0;\n    for (let j = a; j <= b; j++) { const v = K[1]((j + 0.5 - c) / fs); ws.push(v); t += v; }\n    out.push([a, Float32Array.from(ws, v => v / (t || 1))]);\n  }\n  return out;\n}\nfunction resize(src, sw, sh, dw, dh, k) {\n  if (k === 'nearest') { const o = new Uint8ClampedArray(dw * dh * 4); for (let y = 0; y < dh; y++) { const sy = Math.min(sh - 1, Math.floor((y + 0.5) * sh / dh)); for (let x = 0; x < dw; x++) { const sx = Math.min(sw - 1, Math.floor((x + 0.5) * sw / dw)), i = (sy * sw + sx) * 4, j = (y * dw + x) * 4; o[j] = src[i]; o[j + 1] = src[i + 1]; o[j + 2] = src[i + 2]; o[j + 3] = src[i + 3]; } } return o; }\n  const K = KERN[k === 'sharper' ? 'lanczos3' : k === 'smoother' ? 'mitchell' : k] || KERN.lanczos3;\n  const wx = weights(sw, dw, K), wy = weights(sh, dh, K), tmp = new Float32Array(dw * sh * 4);\n  for (let y = 0; y < sh; y++) for (let x = 0; x < dw; x++) {\n    const [a, ws] = wx[x]; let r = 0, g = 0, b = 0, al = 0;\n    for (let j = 0; j < ws.length; j++) { const i = (y * sw + a + j) * 4, A = src[i + 3] / 255, w = ws[j]; r += src[i] * A * w; g += src[i + 1] * A * w; b += src[i + 2] * A * w; al += A * w; }\n    const o = (y * dw + x) * 4; tmp[o] = r; tmp[o + 1] = g; tmp[o + 2] = b; tmp[o + 3] = al;\n  }\n  const out = new Uint8ClampedArray(dw * dh * 4);\n  for (let x = 0; x < dw; x++) for (let y = 0; y < dh; y++) {\n    const [a, ws] = wy[y]; let r = 0, g = 0, b = 0, al = 0;\n    for (let j = 0; j < ws.length; j++) { const i = ((a + j) * dw + x) * 4, w = ws[j]; r += tmp[i] * w; g += tmp[i + 1] * w; b += tmp[i + 2] * w; al += tmp[i + 3] * w; }\n    const o = (y * dw + x) * 4, A = al > 1e-4 ? al : 1; out[o] = r / A; out[o + 1] = g / A; out[o + 2] = b / A; out[o + 3] = al * 255;\n  }\n  if (k === 'sharper' && dw < sw) unsharp(out, dw, dh, 0.3);\n  return out;\n}\nfunction unsharp(px, w, h, amt) {\n  const L = new Float32Array(w * h); for (let i = 0; i < w * h; i++) L[i] = px[i * 4] * 0.299 + px[i * 4 + 1] * 0.587 + px[i * 4 + 2] * 0.114;\n  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {\n    const i = y * w + x, b = (L[i - 1] + L[i + 1] + L[i - w] + L[i + w]) * 0.125 + (L[i - w - 1] + L[i - w + 1] + L[i + w - 1] + L[i + w + 1]) * 0.0625 + L[i] * 0.25;\n    const d = (L[i] - b) * amt; px[i * 4] += d; px[i * 4 + 1] += d; px[i * 4 + 2] += d;\n  }\n}\n/* upscale klasik: lanczos + penajaman tepi adaptif */\nfunction classicUp(src, sw, sh, dw, dh) {\n  const o = resize(src, sw, sh, dw, dh, 'lanczos3');\n  const w = dw, h = dh, L = new Float32Array(w * h); for (let i = 0; i < w * h; i++) L[i] = o[i * 4] * 0.299 + o[i * 4 + 1] * 0.587 + o[i * 4 + 2] * 0.114;\n  const r = Math.max(1, Math.round(dw / sw)), out = o;\n  for (let y = r; y < h - r; y++) for (let x = r; x < w - r; x++) {\n    const i = y * w + x; const b = (L[i - r] + L[i + r] + L[i - r * w] + L[i + r * w]) * 0.25;\n    const gx = L[i + 1] - L[i - 1], gy = L[i + w] - L[i - w], g = Math.min(1, Math.hypot(gx, gy) / 30);\n    const d = (L[i] - b) * 0.6 * g; out[i * 4] += d; out[i * 4 + 1] += d; out[i * 4 + 2] += d;\n  }\n  return out;\n}\n\n/* ================= PNG-8 ================= */\nfunction quantize(rgba, w, h, colors, dither, method, trans) {\n  colors = Math.max(2, Math.min(256, colors | 0));\n  const n = w * h, hasT = trans && (() => { for (let i = 3; i < rgba.length; i += 4) if (rgba[i] < 128) return true; return false; })();\n  const nc = hasT ? colors - 1 : colors;\n  /* histogram 5 bit */\n  const H = new Uint32Array(32768), SR = new Float64Array(32768), SG = new Float64Array(32768), SB = new Float64Array(32768);\n  for (let i = 0; i < n; i++) { const j = i * 4; if (hasT && rgba[j + 3] < 128) continue; const k = ((rgba[j] >> 3) << 10) | ((rgba[j + 1] >> 3) << 5) | (rgba[j + 2] >> 3); H[k]++; SR[k] += rgba[j]; SG[k] += rgba[j + 1]; SB[k] += rgba[j + 2]; }\n  const bins = []; for (let k = 0; k < 32768; k++) if (H[k]) bins.push([SR[k] / H[k], SG[k] / H[k], SB[k] / H[k], H[k], k]);\n  const wch = method === 'sel' ? [1.0, 1.15, 0.85] : method === 'adapt' ? [1, 1, 1] : [0.85, 1.25, 0.6];\n  let pal;\n  if (bins.length <= nc) pal = bins.map(b => [b[0], b[1], b[2]]);\n  else {\n    let boxes = [bins];\n    while (boxes.length < nc) {\n      let bi = -1, bs = -1, ax = 0;\n      boxes.forEach((B, i) => { if (B.length < 2) return; let s = 0; const mn = [1e9, 1e9, 1e9], mx = [-1, -1, -1], cnt = B.reduce((a, b) => a + b[3], 0);\n        for (const b of B) for (let c = 0; c < 3; c++) { if (b[c] < mn[c]) mn[c] = b[c]; if (b[c] > mx[c]) mx[c] = b[c]; }\n        for (let c = 0; c < 3; c++) { const r = (mx[c] - mn[c]) * wch[c]; const sc = r * Math.sqrt(cnt); if (sc > s) { s = sc; if (s > bs) { bs = s; bi = i; ax = c; } } } });\n      if (bi < 0) break;\n      const B = boxes[bi].sort((a, b) => a[ax] - b[ax]), tot = B.reduce((a, b) => a + b[3], 0); let acc = 0, cut = 1;\n      for (let i = 0; i < B.length; i++) { acc += B[i][3]; if (acc >= tot / 2) { cut = Math.max(1, Math.min(B.length - 1, i + 1)); break; } }\n      boxes.splice(bi, 1, B.slice(0, cut), B.slice(cut));\n    }\n    pal = boxes.map(B => { let r = 0, g = 0, b = 0, c = 0; for (const x of B) { r += x[0] * x[3]; g += x[1] * x[3]; b += x[2] * x[3]; c += x[3]; } return [r / c, g / c, b / c]; });\n    /* k-means penyempurna */\n    for (let it = 0; it < 4; it++) {\n      const acc = pal.map(() => [0, 0, 0, 0]);\n      for (const b of bins) { let bi = 0, bd = 1e18; for (let i = 0; i < pal.length; i++) { const p = pal[i], dr = (b[0] - p[0]) * wch[0], dg = (b[1] - p[1]) * wch[1], db = (b[2] - p[2]) * wch[2], d = dr * dr + dg * dg + db * db; if (d < bd) { bd = d; bi = i; } } const a = acc[bi]; a[0] += b[0] * b[3]; a[1] += b[1] * b[3]; a[2] += b[2] * b[3]; a[3] += b[3]; }\n      pal = pal.map((p, i) => acc[i][3] ? [acc[i][0] / acc[i][3], acc[i][1] / acc[i][3], acc[i][2] / acc[i][3]] : p);\n    }\n  }\n  pal = pal.map(p => p.map(v => Math.max(0, Math.min(255, Math.round(v)))));\n  const np = pal.length, cache = new Int16Array(262144).fill(-1);\n  const near = (r, g, b) => { const k = ((r >> 2) << 12) | ((g >> 2) << 6) | (b >> 2); let v = cache[k]; if (v >= 0) return v; let bd = 1e18; for (let i = 0; i < np; i++) { const p = pal[i], dr = (r - p[0]) * wch[0], dg = (g - p[1]) * wch[1], db = (b - p[2]) * wch[2], d = dr * dr + dg * dg + db * db; if (d < bd) { bd = d; v = i; } } cache[k] = v; return v; };\n  const idx = new Uint8Array(n), tI = hasT ? np : -1, E = dither > 0 ? new Float32Array((w + 2) * 2 * 3) : null;\n  for (let y = 0; y < h; y++) {\n    if (E) { const cur = (y & 1) * (w + 2) * 3, nx = ((y + 1) & 1) * (w + 2) * 3; E.fill(0, nx, nx + (w + 2) * 3); }\n    for (let x = 0; x < w; x++) {\n      const i = y * w + x, j = i * 4;\n      if (hasT && rgba[j + 3] < 128) { idx[i] = tI; continue; }\n      let r = rgba[j], g = rgba[j + 1], b = rgba[j + 2];\n      if (E) { const e = ((y & 1) * (w + 2) + x + 1) * 3; r = Math.max(0, Math.min(255, r + E[e])); g = Math.max(0, Math.min(255, g + E[e + 1])); b = Math.max(0, Math.min(255, b + E[e + 2])); }\n      const k = near(r | 0, g | 0, b | 0); idx[i] = k;\n      if (E) {\n        const p = pal[k], er = (r - p[0]) * dither, eg = (g - p[1]) * dither, eb = (b - p[2]) * dither, cur = ((y & 1) * (w + 2) + x + 1) * 3, nx = (((y + 1) & 1) * (w + 2) + x + 1) * 3;\n        const add = (o, f) => { E[o] += er * f; E[o + 1] += eg * f; E[o + 2] += eb * f; };\n        add(cur + 3, 7 / 16); add(nx - 3, 3 / 16); add(nx, 5 / 16); add(nx + 3, 1 / 16);\n      }\n    }\n  }\n  const P = new Uint8Array((np + (hasT ? 1 : 0)) * 4);\n  pal.forEach((p, i) => { P[i * 4] = p[0]; P[i * 4 + 1] = p[1]; P[i * 4 + 2] = p[2]; P[i * 4 + 3] = 255; });\n  if (hasT) { P[np * 4 + 3] = 0; }\n  return { idx, pal: P, n: np + (hasT ? 1 : 0) };\n}\n\n/* ================= ENCODER PNG ================= */\nconst CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();\nfunction crc32(buf) { let c = 0xffffffff; for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }\nfunction chunk(type, data) {\n  const b = new Uint8Array(12 + data.length), dv = new DataView(b.buffer); dv.setUint32(0, data.length);\n  for (let i = 0; i < 4; i++) b[4 + i] = type.charCodeAt(i); b.set(data, 8); dv.setUint32(8 + data.length, crc32(b.subarray(4, 8 + data.length))); return b;\n}\nasync function deflate(raw) {\n  if (typeof CompressionStream !== 'undefined') {\n    const cs = new CompressionStream('deflate'), s = new Blob([raw]).stream().pipeThrough(cs); return new Uint8Array(await new Response(s).arrayBuffer());\n  }\n  throw new Error('Browser tidak mendukung kompresi PNG');\n}\nasync function encodePNG(m) {\n  const { w, h } = m; let bpp, ctype, raw;\n  if (m.idx) {\n    const n = m.pal.length / 4, bits = n <= 2 ? 1 : n <= 4 ? 2 : n <= 16 ? 4 : 8, rb = Math.ceil(w * bits / 8);\n    raw = new Uint8Array((rb + 1) * h); ctype = 3;\n    for (let y = 0; y < h; y++) { const o = y * (rb + 1); raw[o] = 0; for (let x = 0; x < w; x++) { const v = m.idx[y * w + x]; if (bits === 8) raw[o + 1 + x] = v; else { const bp = x * bits; raw[o + 1 + (bp >> 3)] |= v << (8 - bits - (bp & 7)); } } }\n    m.bits = bits;\n  } else {\n    const d = m.rgba, alpha = m.alpha; bpp = alpha ? 4 : 3; ctype = alpha ? 6 : 2; const rb = w * bpp;\n    const px = new Uint8Array(rb * h); for (let i = 0, j = 0; i < w * h; i++) { px[j++] = d[i * 4]; px[j++] = d[i * 4 + 1]; px[j++] = d[i * 4 + 2]; if (alpha) px[j++] = d[i * 4 + 3]; }\n    raw = new Uint8Array((rb + 1) * h); const tmp = [0, 1, 2, 3, 4].map(() => new Uint8Array(rb));\n    for (let y = 0; y < h; y++) {\n      const cur = px.subarray(y * rb, (y + 1) * rb), up = y ? px.subarray((y - 1) * rb, y * rb) : null; let best = 0, bs = Infinity;\n      for (let f = 0; f < 5; f++) {\n        const t = tmp[f]; let s = 0;\n        for (let i = 0; i < rb; i++) { const a = i >= bpp ? cur[i - bpp] : 0, b = up ? up[i] : 0, c = up && i >= bpp ? up[i - bpp] : 0; let v;\n          if (f === 0) v = cur[i]; else if (f === 1) v = cur[i] - a; else if (f === 2) v = cur[i] - b; else if (f === 3) v = cur[i] - ((a + b) >> 1); else { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v = cur[i] - (pa <= pb && pa <= pc ? a : pb <= pc ? b : c); }\n          t[i] = v & 255; s += t[i] < 128 ? t[i] : 256 - t[i]; }\n        if (s < bs) { bs = s; best = f; }\n      }\n      raw[y * (rb + 1)] = best; raw.set(tmp[best], y * (rb + 1) + 1);\n    }\n  }\n  const ihdr = new Uint8Array(13), dv = new DataView(ihdr.buffer); dv.setUint32(0, w); dv.setUint32(4, h); ihdr[8] = m.idx ? m.bits : 8; ihdr[9] = ctype; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;\n  const parts = [new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('sRGB', new Uint8Array([0]))];\n  if (m.idx) {\n    const n = m.pal.length / 4, pl = new Uint8Array(n * 3); let lastA = -1; for (let i = 0; i < n; i++) { pl[i * 3] = m.pal[i * 4]; pl[i * 3 + 1] = m.pal[i * 4 + 1]; pl[i * 3 + 2] = m.pal[i * 4 + 2]; if (m.pal[i * 4 + 3] < 255) lastA = i; }\n    parts.push(chunk('PLTE', pl)); if (lastA >= 0) { const t = new Uint8Array(lastA + 1); for (let i = 0; i <= lastA; i++) t[i] = m.pal[i * 4 + 3]; parts.push(chunk('tRNS', t)); }\n  }\n  if (m.meta) for (const k in m.meta) if (m.meta[k]) { const s = k + '\\0' + String(m.meta[k]).replace(/[^\\x20-\\x7e]/g, '?'); parts.push(chunk('tEXt', Uint8Array.from(s, c => c.charCodeAt(0)))); }\n  parts.push(chunk('IDAT', await deflate(raw)), chunk('IEND', new Uint8Array(0)));\n  const tot = parts.reduce((a, b) => a + b.length, 0), out = new Uint8Array(tot); let o = 0; for (const p of parts) { out.set(p, o); o += p.length; }\n  return out.buffer;\n}\n";
let WK = null; const WQ = new Map(); let WID = 0;
function worker() {
  if (WK) return WK;
  WK = new Worker(URL.createObjectURL(new Blob([W_SRC], { type: 'text/javascript' })));
  WK.onmessage = e => { const m = e.data, q = WQ.get(m.id); if (!q) return; if (m.prog != null) { if (q.onp) q.onp(m.prog); return; } WQ.delete(m.id); if (m.ok) q.res(m); else q.rej(new Error(m.err)); };
  WK.onerror = e => { for (const q of WQ.values()) q.rej(new Error('Worker gagal: ' + (e.message || ''))); WQ.clear(); WK = null; };
  return WK;
}
function wcall(msg, transfer, onp) { return new Promise((res, rej) => { const id = ++WID; WQ.set(id, { res, rej, onp }); worker().postMessage(Object.assign({ id }, msg), transfer || []); }); }
function killWorker() { if (WK) { WK.terminate(); WK = null; } for (const q of WQ.values()) q.rej(new Error('Dibatalkan')); WQ.clear(); }
const CANCEL = new Error('Dibatalkan');

/* ----- Super resolusi AI (ESRGAN-slim via TensorFlow.js) ----- */
const SR = { models: {}, cancel: false };
async function aiUpscale(img, scale, engine) {
  const rt = rtOf(img), sw = rt.base.width, sh = rt.base.height, dw = sw * scale, dh = sh * scale, cap = deviceCap(false);
  if (dw > cap.dim || dh > cap.dim || dw * dh > cap.pix) {
    const mx = Math.floor(Math.min(cap.dim / Math.max(sw, sh), Math.sqrt(cap.pix / (sw * sh))) * 10) / 10;
    toast(mx >= 1.2 ? 'Foto sudah besar: maksimal ' + mx.toString().replace('.', ',') + 'x di perangkat ini. Gunakan 2x atau ' + 'perkecil dulu.' : 'Resolusi foto sudah maksimal untuk perangkat ini (' + sw + '\u00d7' + sh + ').', true);
    return;
  }
  SR.cancel = false;
  const cancel = () => { SR.cancel = true; killWorker(); };
  try {
    let out;
    if (engine === 'fast') {
      busy(true, 'Memperbesar ' + scale + 'x\u2026', 5, cancel);
      const c = baseCanvas(img), id = c.getContext('2d').getImageData(0, 0, sw, sh);
      const r = await wcall({ op: 'classicup', data: id.data, sw, sh, dw, dh }, [id.data.buffer]);
      out = mkCanvas(dw, dh); out.getContext('2d').putImageData(new ImageData(r.data, dw, dh), 0, 0);
    } else {
      busy(true, 'Memuat mesin AI\u2026', 2, cancel);
      const tf = await loadLib(LIB.tf, 'tf');
      try { await tf.setBackend('webgl'); } catch (e) {} await tf.ready();
      if (SR.cancel) throw CANCEL;
      busy(true, 'Mengunduh model AI ' + scale + 'x\u2026', 6, cancel);
      const model = SR.models[scale] || (SR.models[scale] = await tf.loadLayersModel(scale === 4 ? LIB.sr4 : LIB.sr2));
      const src = baseCanvas(img), sx = src.getContext('2d');
      out = mkCanvas(dw, dh); const ox = out.getContext('2d');
      const T = scale === 4 ? 96 : 128, PAD = 10, nx = Math.ceil(sw / T), ny = Math.ceil(sh / T), tot = nx * ny; let k = 0;
      const tc = mkCanvas(T + PAD * 2, T + PAD * 2), tcx = tc.getContext('2d', { willReadFrequently: true });
      for (let ty = 0; ty < ny; ty++) for (let tx = 0; tx < nx; tx++) {
        if (SR.cancel) throw CANCEL;
        const x0 = tx * T, y0 = ty * T, x1 = Math.min(sw, x0 + T), y1 = Math.min(sh, y0 + T);
        const px0 = Math.max(0, x0 - PAD), py0 = Math.max(0, y0 - PAD), px1 = Math.min(sw, x1 + PAD), py1 = Math.min(sh, y1 + PAD), pw = px1 - px0, ph = py1 - py0;
        const id = sx.getImageData(px0, py0, pw, ph);
        const y = tf.tidy(() => { const t = tf.browser.fromPixels(id).toFloat().expandDims(0); return model.predict(t).clipByValue(0, 255).squeeze(); });
        const arr = await y.data(); y.dispose();
        const ow = pw * scale, oh = ph * scale, cw = (x1 - x0) * scale, ch = (y1 - y0) * scale, cx0 = (x0 - px0) * scale, cy0 = (y0 - py0) * scale;
        const o = new ImageData(cw, ch), d = o.data;
        for (let yy = 0; yy < ch; yy++) for (let xx = 0; xx < cw; xx++) { const si = ((yy + cy0) * ow + xx + cx0) * 3, di = (yy * cw + xx) * 4; d[di] = arr[si]; d[di + 1] = arr[si + 1]; d[di + 2] = arr[si + 2]; d[di + 3] = 255; }
        ox.putImageData(o, x0 * scale, y0 * scale);
        k++; busy(true, 'AI memperjelas detail\u2026 ' + Math.round(k / tot * 100) + '%', 8 + k / tot * 88);
        if (k % 4 === 0) await raf();
      }
      void tc; void tcx;
    }
    busy(true, 'Menyimpan hasil\u2026', 97);
    await setBase(img, out, (engine === 'fast' ? 'Perbesar ' : 'Super Resolusi AI ') + scale + 'x');
    GL.drop(img.id); afterDocChange(); toast('Selesai: ' + dw + '\u00d7' + dh + ' piksel');
  } catch (e) {
    if (e === CANCEL || SR.cancel) toast('Dibatalkan'); else { console.error(e); toast('Gagal: ' + e.message, true); }
  } finally { busy(false); }
}
/* ----- perjelas otomatis: estimasi noise & blok JPEG ----- */
function autoDetail(img) {
  const rt = rtOf(img), id = smallData(rt.prev, 1024), d = id.data, w = id.width, h = id.height, L = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) L[i] = d[i * 4] * 0.299 + d[i * 4 + 1] * 0.587 + d[i * 4 + 2] * 0.114;
  let s = 0, n = 0, bv = 0, bn = 0, iv = 0, inn = 0;
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x, v = L[i - w - 1] - 2 * L[i - w] + L[i - w + 1] - 2 * L[i - 1] + 4 * L[i] - 2 * L[i + 1] + L[i + w - 1] - 2 * L[i + w] + L[i + w + 1];
    s += Math.abs(v); n++;
    const dh = Math.abs(L[i] - L[i - 1]); if (x % 8 === 0) { bv += dh; bn++; } else { iv += dh; inn++; }
  }
  const sigma = Math.sqrt(Math.PI / 2) * s / (6 * n), block = (bv / Math.max(1, bn)) / Math.max(0.01, iv / Math.max(1, inn));
  const p = img.p, big = Math.max(img.bw, img.bh) >= 1800;
  p.nr = clamp((sigma - 1.8) / 9, 0, 0.6); p.nrC = clamp(sigma / 7, 0.15, 0.6); p.deblock = w === rt.prev.width && block > 1.12 ? clamp((block - 1.05) * 1.5, 0, 0.6) : (block > 1.15 ? 0.3 : 0);
  p.sharp = clamp(0.42 - p.nr * 0.35 + (big ? 0.05 : 0), 0.15, 0.6); p.tex = clamp(0.22 - p.nr * 0.2, 0, 0.3); p.clar = 0.14; if (!p.dehaze && rt.st.p01 > 0.05) p.dehaze = 0.12;
  return { sigma, block };
}
/* ----- Auto Fix ----- */
const AUTO_KEYS = ['exp', 'hi', 'sh', 'local', 'temp', 'tint', 'con', 'vib', 'dehaze', 'bl', 'wh', 'nr', 'nrC'];
function applyAuto(img, mode, skin, int) {
  const p = img.p, prev = p.auto;
  /* hapus kontribusi auto sebelumnya */
  if (prev && prev.d) for (const k of AUTO_KEYS) if (prev.d[k]) p[k] = (p[k] || 0) - prev.d[k] * prev.int;
  const a = autoParams(rtOf(img).st, mode), d = {};
  for (const k of AUTO_KEYS) { d[k] = a[k] || 0; p[k] = clamp((p[k] || 0) + d[k] * int, -3, 3); }
  p.auto = { mode, skin, int, d };
  if (skin === 'normal') { p.skin.mode = 1; p.skin.amt = 0.6; p.skin.smooth = Math.max(p.skin.smooth, 0.2); }
  else if (skin === 'bright') { p.skin.mode = 2; p.skin.amt = 0.65; p.skin.smooth = Math.max(p.skin.smooth, 0.35); }
  else if (skin === 'off') p.skin.mode = 0;
}
function autoAgain(img, int) { const a = img.p.auto; if (!a) return; applyAuto(img, a.mode, a.skin, int); }
/* ----- Match Color ----- */
function statsOfRender(img, p) { const c = GL.render(img, p, 200, Math.max(1, Math.round(200 * cropOut(img).H / cropOut(img).W)), {}); return labStats(c.getContext('2d').getImageData(0, 0, c.width, c.height)); }
function setMatchRef(img, refData) {
  const p0 = clone(img.p); p0.match = null;
  const tgt = statsOfRender(img, p0), ref = labStats(refData);
  img.p.match = { ref, tgt, amt: img.p.match ? img.p.match.amt : 0.8, keep: img.p.match ? img.p.match.keep : false };
}
function naturalPro(img) {
  applyAuto(img, 'bal', img.p.auto ? img.p.auto.skin : 'keep', 0.8);
  img.p.look = { id: 'natpro', amt: 0.85 };
}

/* ----- Hapus objek ----- */
async function runErase(img) {
  const mk = img._mask; if (!mk) { toast('Sapukan kuas pada objek yang ingin dihapus'); return; }
  const md = mk.getContext('2d').getImageData(0, 0, mk.width, mk.height).data;
  let x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1;
  for (let y = 0; y < mk.height; y++) for (let x = 0; x < mk.width; x++) if (md[(y * mk.width + x) * 4 + 3] > 20) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  if (x1 < 0) { toast('Sapukan kuas pada objek yang ingin dihapus'); return; }
  const bw = img.bw, bh = img.bh, ms = mk.width / bw;
  const bx0 = x0 / ms, by0 = y0 / ms, bx1 = (x1 + 1) / ms, by1 = (y1 + 1) / ms, ow = bx1 - bx0, oh = by1 - by0;
  const dil = Math.max(2, Math.round(Math.max(bw, bh) * 0.003)), mar = Math.max(ow, oh) * 0.9 + 48;
  const R = { x: Math.max(0, Math.floor(bx0 - mar)), y: Math.max(0, Math.floor(by0 - mar)) }; R.w = Math.min(bw, Math.ceil(bx1 + mar)) - R.x; R.h = Math.min(bh, Math.ceil(by1 + mar)) - R.y;
  const hq = ST.eraseHQ !== false, f = Math.min(1, (hq ? 1300 : 800) / Math.max(R.w, R.h)), rw = Math.max(8, Math.round(R.w * f)), rh = Math.max(8, Math.round(R.h * f));
  const base = baseCanvas(img), rc = mkCanvas(rw, rh), rx = rc.getContext('2d', { willReadFrequently: true });
  rx.imageSmoothingQuality = 'high'; rx.drawImage(base, R.x, R.y, R.w, R.h, 0, 0, rw, rh);
  const rgba = rx.getImageData(0, 0, rw, rh).data;
  const mc = mkCanvas(rw, rh), mx = mc.getContext('2d', { willReadFrequently: true }); mx.drawImage(mk, R.x * ms, R.y * ms, R.w * ms, R.h * ms, 0, 0, rw, rh);
  const ma = mx.getImageData(0, 0, rw, rh).data, M = new Uint8Array(rw * rh);
  const dr = Math.max(1, Math.round(dil * f));
  for (let i = 0; i < rw * rh; i++) M[i] = ma[i * 4 + 3] > 20 ? 1 : 0;
  const M2 = dilate(M, rw, rh, dr);
  const cancel = () => killWorker();
  busy(true, 'Menghapus objek\u2026', 0, cancel);
  try {
    const r = await wcall({ op: 'inpaint', w: rw, h: rh, rgba, mask: M2 }, [rgba.buffer], p => busy(true, 'Menghapus objek\u2026 ' + Math.round(p * 100) + '%', p * 100));
    const oc = mkCanvas(rw, rh); oc.getContext('2d').putImageData(new ImageData(r.data, rw, rh), 0, 0);
    /* masker lembut untuk tempel */
    const fm = mkCanvas(rw, rh), fx = fm.getContext('2d'), fid = fx.createImageData(rw, rh);
    for (let i = 0; i < rw * rh; i++) { fid.data[i * 4 + 3] = M2[i] ? 255 : 0; }
    fx.putImageData(fid, 0, 0);
    const big = mkCanvas(R.w, R.h), bx = big.getContext('2d'); bx.imageSmoothingQuality = 'high';
    bx.drawImage(oc, 0, 0, R.w, R.h);
    const fm2 = mkCanvas(R.w, R.h), f2 = fm2.getContext('2d'); try { f2.filter = 'blur(' + Math.max(1, dil * 0.8) + 'px)'; } catch (e) {} f2.drawImage(fm, 0, 0, R.w, R.h);
    bx.globalCompositeOperation = 'destination-in'; bx.drawImage(fm2, 0, 0);
    base.getContext('2d').drawImage(big, R.x, R.y);
    busy(true, 'Menyimpan\u2026', 100);
    img._mask = null;
    await setBase(img, base, 'Hapus objek');
    afterDocChange(); toast('Objek dihapus. Ulangi sapuan bila masih ada sisa.');
  } catch (e) { toast(e.message === 'Dibatalkan' ? 'Dibatalkan' : 'Gagal: ' + e.message, true); }
  finally { busy(false); updEraseUI(); }
}
function dilate(M, w, h, r) {
  if (r <= 0) return M; const T = new Uint8Array(w * h), O = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) { let last = -1e9; for (let x = 0; x < w; x++) { if (M[y * w + x]) last = x; if (x - last <= r) T[y * w + x] = 1; } last = 1e9; for (let x = w - 1; x >= 0; x--) { if (M[y * w + x]) last = x; if (last - x <= r) T[y * w + x] = 1; } }
  for (let x = 0; x < w; x++) { let last = -1e9; for (let y = 0; y < h; y++) { if (T[y * w + x]) last = y; if (y - last <= r) O[y * w + x] = 1; } last = 1e9; for (let y = h - 1; y >= 0; y--) { if (T[y * w + x]) last = y; if (last - y <= r) O[y * w + x] = 1; } }
  return O;
}


/* ---- i-ui.js ---- */
/* ================= UI: TAB & PANEL ================= */
const TABS_P = [['hd', 'Kualitas HD', 'hd'], ['auto', 'Auto Fix', 'wand'], ['color', 'Warna', 'color'], ['light', 'Cahaya', 'sun'], ['focus', 'Fokus AI', 'focus'], ['text', 'Teks', 'text'], ['erase', 'Hapus Objek', 'eraser'], ['crop', 'Potong', 'crop']];
const TABS_C = [['col', 'Kolase', 'grid'], ['layout', 'Tata Letak', 'layers'], ['text', 'Teks', 'text']];
const UI = { lookCat: 'nat', fx: 'rays', hsl: 0, sizeG: 'Instagram', allLay: false, fontOpen: false, sec: {} };
const selText = () => SEL.text && texts().find(t => t.id === SEL.text) || null;
function rootOf(pre) { return pre === 'p' ? (curImg() || {}).p : pre === 't' ? selText() : pre === 'c' ? doc && doc.col : pre === 'cr' ? (curImg() || {}).crop : pre === 's' ? ST : null; }
function splitK(k) { const i = k.indexOf(':'); return [k.slice(0, i), k.slice(i + 1)]; }
function valOf(k) { const [pre, path] = splitK(k), r = rootOf(pre); return r ? getPath(r, path) : 0; }
function setVal(k, v) { const [pre, path] = splitK(k), r = rootOf(pre); if (r) setPath(r, path, v); }
function fmtV(v, f) {
  v = +v || 0;
  if (f === 'ev') return (v > 0 ? '+' : '') + v.toFixed(2).replace('.', ',');
  if (f === 'deg') return Math.round(v) + '\u00b0';
  if (f === 'int') return String(Math.round(v));
  if (f === 'px') return Math.round(v) + ' px';
  if (f === 'pct') return Math.round(v * 100) + '%';
  if (f === 'x') return v.toFixed(2).replace('.', ',');
  const r = Math.round(v * 100); return (r > 0 ? '+' : '') + r;
}
function sl(label, k, min, max, step, o) {
  o = o || {}; const v = valOf(k);
  return '<div class="ps-sl' + (o.cls ? ' ' + o.cls : '') + '" data-row="' + k + '"><label><span>' + label + '</span><output>' + fmtV(v, o.fmt) + '</output></label><input type="range" min="' + min + '" max="' + max + '" step="' + (step || 0.01) + '" value="' + (v == null ? 0 : v) + '" data-k="' + k + '" data-def="' + (o.def != null ? o.def : 0) + '" data-fmt="' + (o.fmt || '') + '" data-lbl="' + esc(label) + '"' + (o.grad ? ' style="--trk:' + o.grad + '"' : '') + '></div>';
}
function sec(id, title, body, open) {
  const o = UI.sec[id] != null ? UI.sec[id] : open !== false;
  return '<section class="ps-sec' + (o ? ' open' : '') + '" data-sec="' + id + '"><h4 data-a="sec" data-id="' + id + '">' + title + '<i>' + ic('down') + '</i></h4><div class="ps-secb">' + body + '</div></section>';
}
const chip = (label, a, attrs, on) => '<button class="ps-chip' + (on ? ' on' : '') + '" data-a="' + a + '" ' + (attrs || '') + '>' + label + '</button>';
function colorRow(k, list, custom) {
  const v = String(valOf(k) || '').toLowerCase();
  return '<div class="ps-colors">' + list.map(c => '<button class="ps-sw' + (v === c.toLowerCase() ? ' on' : '') + '" style="background:' + c + '" data-a="setc" data-k="' + k + '" data-v="' + c + '" title="' + c + '"></button>').join('') + (custom !== false ? '<label class="ps-sw ps-swc" title="Warna lain"><input type="color" data-kc="' + k + '" value="' + (/^#[0-9a-f]{6}$/i.test(v) ? v : '#ffffff') + '"></label>' : '') + '</div>';
}
function setTabs() {
  const tabs = doc && doc.mode === 'collage' ? TABS_C : TABS_P;
  if (!tabs.find(t => t[0] === ST.tool)) ST.tool = tabs[0][0];
  $('#ps-tabs').innerHTML = tabs.map(t => '<button data-tool="' + t[0] + '" class="' + (t[0] === ST.tool ? 'on' : '') + '">' + ic(t[2]) + '<span>' + t[1] + '</span></button>').join('');
}
function setTool(t) {
  const prev = ST.tool; ST.tool = t;
  if (prev === 'crop' || t === 'crop') { V.fit = true; if (prev === 'crop') commit('Potong'); }
  setTabs(); renderPanel(); requestDraw();
  A.classList.toggle('ps-erasing', t === 'erase');
}
function renderPanel() {
  const P = $('#ps-panel'), st = P.scrollTop;
  if (!doc || (doc.mode === 'photo' && !curImg())) { P.innerHTML = '<div class="ps-hint">Buka foto untuk mulai mengedit, atau buat kolase dari beberapa foto.</div>'; return; }
  const f = PANELS[ST.tool]; P.innerHTML = f ? f() : '';
  P.scrollTop = st;
  const post = POST[ST.tool]; if (post) post();
}
function syncPanel() {
  $$('#ps-panel input[type=range][data-k]').forEach(r => { const v = valOf(r.dataset.k); if (v != null && +r.value !== +v) r.value = v; const o = r.parentNode.querySelector('output'); if (o) o.textContent = fmtV(v, r.dataset.fmt); });
}
function syncTextPanel() { if (ST.tool === 'text') syncPanel(); }
function onSelChange() {
  if (SEL.text && ST.tool !== 'text') setTool('text');
  else if (ST.tool === 'text') renderPanel();
  updCellBar(); requestDraw();
}
function afterDocChange(fresh) {
  PC.clear(); cropCache.key = '';
  $('#ps-fname').textContent = doc ? doc.name : 'Editor foto & kolase';
  $('#ps-back').hidden = !(doc && doc.mode === 'photo' && doc.back);
  if (fresh) V.fit = true;
  setTabs(); renderPanel(); updCellBar(); requestDraw(); updUndo();
}

/* ---------- PANEL ---------- */
const PANELS = {};
const POST = {};
function srButtons(w, h) {
  const cap = deviceCap(false), ok = k => w * k <= cap.dim && h * k <= cap.dim && w * h * k * k <= cap.pix, f = n => n.toLocaleString('id-ID');
  const b = k => '<button class="ps-go ps-srb" data-a="sr" data-v="' + k + '"' + (ok(k) ? '' : ' disabled') + '><b>' + k + 'x</b><small>' + (ok(k) ? f(w * k) + ' \u00d7 ' + f(h * k) : 'Melebihi batas perangkat') + '</small></button>';
  return '<div class="ps-btn2">' + b(2) + b(4) + '</div>' + (ok(2) ? '' : '<p class="ps-warn">Foto sudah sangat besar (' + f(w) + ' \u00d7 ' + f(h) + ' px). Pakai <b>Perjelas Otomatis</b> untuk menajamkan detail tanpa memperbesar.</p>');
}
PANELS.hd = () => {
  const im = curImg(), w = im.bw, h = im.bh, eng = UI.srEng || 'ai';
  return '<div class="ps-card ps-hero"><b>' + ic('sparkle') + ' Super Resolusi</b><p>Perbesar &amp; pertajam detail dengan AI. Ukuran sekarang <b class="ps-nw">' + w + '\u00d7' + h + '</b>.</p>' +
    '<div class="ps-seg">' + chip('AI Terbaik', 'sreng', 'data-v="ai"', eng === 'ai') + chip('Cepat', 'sreng', 'data-v="fast"', eng === 'fast') + '</div>' +
    srButtons(w, h) +
    '<small>Model AI \u00b11 MB diunduh sekali, proses berjalan di perangkat Anda.</small></div>' +
    '<button class="ps-wide" data-a="autodetail">' + ic('wand') + ' Perjelas Otomatis (HD)</button>' +
    sec('det', 'Detail &amp; Ketajaman', sl('Ketajaman', 'p:sharp', 0, 1.5) + sl('Detail Tekstur', 'p:tex', -1, 1.5) + sl('Kejernihan', 'p:clar', -1, 1.5) + sl('Dehaze', 'p:dehaze', -1, 1)) +
    sec('nr', 'Bersihkan Noise', sl('Reduksi Noise', 'p:nr', 0, 1) + sl('Noise Warna', 'p:nrC', 0, 1) + sl('Halus JPEG / Blok', 'p:deblock', 0, 1));
};
PANELS.auto = () => {
  const p = curImg().p, a = p.auto || {}, sk = p.skin.mode === 2 ? 'bright' : p.skin.mode === 1 ? 'normal' : 'off';
  const M = [['bal', 'Seimbang'], ['full', 'Terang Penuh'], ['back', 'Backlight'], ['night', 'Malam']];
  return '<div class="ps-card"><b>' + ic('wand') + ' Auto Fix</b><p>Foto gelap, kontras, atau melawan cahaya jadi jelas semua objeknya.</p><div class="ps-seg ps-seg4">' + M.map(m => chip(m[1], 'auto', 'data-v="' + m[0] + '"', a.mode === m[0])).join('') + '</div>' +
    '<label class="ps-lb">Warna kulit</label><div class="ps-seg">' + chip('Asli', 'skin', 'data-v="off"', sk === 'off') + chip('Kulit Normal', 'skin', 'data-v="normal"', sk === 'normal') + chip('Putih Bersih', 'skin', 'data-v="bright"', sk === 'bright') + '</div>' +
    (a.mode ? sl('Intensitas Auto', 'p:auto.int', 0, 1.5, 0.01, { fmt: 'pct', def: 1 }) : '') + '</div>' +
    sec('light', 'Cahaya', sl('Eksposur', 'p:exp', -3, 3, 0.01, { fmt: 'ev' }) + sl('Kontras', 'p:con', -1, 1) + sl('Highlight', 'p:hi', -1, 1) + sl('Bayangan', 'p:sh', -1, 1) + sl('Putih', 'p:wh', -1, 1) + sl('Hitam', 'p:bl', -1, 1) + sl('HDR Lokal', 'p:local', 0, 1)) +
    sec('skin', 'Kulit &amp; Wajah', (p.skin.mode ? '' : '<p class="ps-note">Pilih "Kulit Normal" atau "Putih Bersih" untuk mengaktifkan.</p>') + sl('Kekuatan Warna Kulit', 'p:skin.amt', 0, 1, 0.01, { def: 0.5 }) + sl('Haluskan Kulit', 'p:skin.smooth', 0, 1, 0.01, { def: 0.3 }));
};
PANELS.color = () => {
  const p = curImg().p, m = p.match;
  const cats = LOOK_CATS.map(c => chip(c[1], 'lookcat', 'data-v="' + c[0] + '"', UI.lookCat === c[0])).join('');
  const looks = LOOKS.filter(l => l.cat === UI.lookCat).map(l => '<button class="ps-look' + (p.look.id === l.id ? ' on' : '') + '" data-a="look" data-v="' + l.id + '"><canvas width="96" height="72" data-lk="' + l.id + '"></canvas><span>' + l.name + '</span></button>').join('');
  const others = doc.imgs.filter(i => i.id !== curImg().id);
  const hk = HSL_KEYS[UI.hsl];
  return '<button class="ps-wide ps-go" data-a="natpro">' + ic('sparkle') + ' Warna Natural Profesional</button>' +
    sec('looks', 'Look &amp; Color Grading', '<div class="ps-scrollx">' + cats + '</div><div class="ps-looks">' + '<button class="ps-look' + (!p.look.id ? ' on' : '') + '" data-a="look" data-v=""><canvas width="96" height="72" data-lk=""></canvas><span>Asli</span></button>' + looks + '</div>' + (p.look.id ? sl('Kekuatan Look', 'p:look.amt', 0, 1.2, 0.01, { fmt: 'pct', def: 0.8 }) : '')) +
    sec('match', 'Cocokkan Warna', '<p class="ps-note">Tiru warna dari foto referensi (mis. foto favorit dari Instagram).</p><div class="ps-btn2"><button data-a="matchfile">' + ic('img') + ' Pilih Foto Referensi</button>' + (m ? '<button data-a="matchoff">' + ic('x') + ' Hapus</button>' : '') + '</div>' +
      (others.length ? '<div class="ps-tray">' + others.map(o => '<button class="ps-th" data-a="matchimg" data-v="' + o.id + '"><canvas data-th="' + o.id + '"></canvas></button>').join('') + '</div>' : '') +
      (m ? sl('Kekuatan', 'p:match.amt', 0, 1, 0.01, { fmt: 'pct', def: 0.8 }) + '<label class="ps-ck"><input type="checkbox" data-ck="p:match.keep"' + (m.keep ? ' checked' : '') + '> Pertahankan kecerahan asli</label>' : ''), !!m) +
    sec('basic', 'Warna Dasar', sl('Suhu', 'p:temp', -1, 1, 0.01, { grad: 'linear-gradient(90deg,#3a7bd5,#ddd,#f5a623)' }) + sl('Tint', 'p:tint', -1, 1, 0.01, { grad: 'linear-gradient(90deg,#3ecf5a,#ddd,#d63ad6)' }) + sl('Vibrance', 'p:vib', -1, 1) + sl('Saturasi', 'p:sat', -1, 1) + sl('Fade / Matte', 'p:fade', 0, 1)) +
    sec('grade', 'Color Grading 3 Arah', ['sh', 'mid', 'hi'].map((k, i) => '<div class="ps-gr"><b>' + ['Bayangan', 'Midtone', 'Highlight'][i] + '</b>' + sl('Hue', 'p:grade.' + k + '.0', 0, 360, 1, { fmt: 'deg', def: [210, 30, 40][i], cls: 'ps-hue', grad: 'linear-gradient(90deg,#f33,#ff3,#3f3,#3ff,#33f,#f3f,#f33)' }) + sl('Saturasi', 'p:grade.' + k + '.1', 0, 2, 0.01, { fmt: 'pct' }) + '</div>').join('') + sl('Balance', 'p:grade.bal', -1, 1), false) +
    sec('hsl', 'Campuran Warna (HSL)', '<div class="ps-hsldots">' + HSL_SW.map((c, i) => '<button style="background:' + c + '" class="' + (i === UI.hsl ? 'on' : '') + '" data-a="hsl" data-v="' + i + '" title="' + HSL_NAMES[i] + '"></button>').join('') + '</div><b class="ps-lb">' + HSL_NAMES[UI.hsl] + '</b>' + sl('Hue', 'p:hsl.' + hk + '.0', -1, 1) + sl('Saturasi', 'p:hsl.' + hk + '.1', -1, 1) + sl('Luminans', 'p:hsl.' + hk + '.2', -1, 1), false);
};
POST.color = () => {
  const im = curImg(), p0 = clone(im.p); p0.look = { id: '', amt: 0 }; p0.fx = clone(DEF_FX);
  const o = cropOut(im), h = Math.round(96 * Math.min(1.4, o.H / o.W));
  let base;
  try { const c = GL.render(im, p0, 96, h, {}); base = c.getContext('2d').getImageData(0, 0, 96, h); } catch (e) { return; }
  $$('#ps-panel canvas[data-lk]').forEach(cv => {
    cv.height = h; const L = LOOKS_BY_ID[cv.dataset.lk], dst = new ImageData(96, h);
    if (L) applyOpsPixels(base, dst, L.ops, 1); else dst.data.set(base.data);
    cv.getContext('2d').putImageData(dst, 0, 0);
  });
  drawThumbs();
};
function drawThumbs() {
  $$('#ps-panel canvas[data-th]').forEach(cv => {
    const im = imgById(cv.dataset.th), rt = im && rtOf(im); if (!rt || !rt.small) return;
    const s = rt.small, c = mkCanvas(s.width, s.height); c.getContext('2d').putImageData(s, 0, 0);
    const k = Math.max(72 / s.width, 72 / s.height); cv.width = 72; cv.height = 72; const x = cv.getContext('2d'); x.drawImage(c, (72 - s.width * k) / 2, (72 - s.height * k) / 2, s.width * k, s.height * k);
  });
}
/* ----- efek cahaya ----- */
const FXC = ['#ffd59a', '#fff3d6', '#ffb15a', '#ff8a5c', '#ff6fa8', '#cfe6ff', '#9fd0ff', '#d9b3ff'];
const FX_LIST = [
  ['rays', 'Raylight', 'Sinar matahari / god rays', [['a', 'Kekuatan', 0, 1.5], ['beams', 'Sinar', 0, 1.5], ['scat', 'Cahaya dari highlight', 0, 1.5], ['len', 'Panjang', 0.05, 1.5], ['n', 'Jumlah sinar', 4, 40, 1, 'int'], ['soft', 'Kelembutan', 0, 1]], 'col'],
  ['haze', 'Sun Glow', 'Cahaya hangat dari sumber', [['a', 'Kekuatan', 0, 1.5], ['size', 'Ukuran', 0.05, 1.5]], 'col'],
  ['flare', 'Lens Flare', 'Pantulan lensa', [['a', 'Kekuatan', 0, 1.5]], 'col'],
  ['leak', 'Light Leak', 'Bocoran cahaya film', [['a', 'Kekuatan', 0, 1.2], ['ang', 'Arah', -180, 180, 1, 'deg'], ['size', 'Ukuran', 0.1, 1.5]], 'pal'],
  ['bloom', 'Bloom', 'Highlight berpendar', [['a', 'Kekuatan', 0, 1.5]]],
  ['halo', 'Halation', 'Pendar merah ala Cinestill', [['a', 'Kekuatan', 0, 1.5]]],
  ['dream', 'Dreamy', 'Lembut seperti mimpi', [['a', 'Kekuatan', 0, 1]]],
  ['ana', 'Anamorphic', 'Garis flare sinematik', [['a', 'Kekuatan', 0, 1.5]]],
  ['star', 'Star Filter', 'Bintang di lampu malam', [['a', 'Kekuatan', 0, 2], ['n', 'Jumlah sudut', 4, 8, 2, 'int'], ['len', 'Panjang', 0.1, 2], ['rot', 'Rotasi', 0, 90, 1, 'deg']]],
  ['bokeh', 'Bokeh', 'Lingkaran cahaya', [['a', 'Kekuatan', 0, 1.5], ['size', 'Ukuran', 0.05, 1.5], ['den', 'Kepadatan', 0.05, 0.9], ['seed', 'Acak posisi', 1, 60, 1, 'int']], 'bokeh'],
  ['flash', 'Flash Y2K', 'Kilat kamera saku', [['a', 'Kekuatan', 0, 1]]],
  ['prism', 'Prisma', 'Pelangi dari kaca', [['a', 'Kekuatan', 0, 1.5], ['pos', 'Posisi', 0, 1], ['ang', 'Sudut', 0, 180, 1, 'deg'], ['w', 'Lebar', 0.05, 1]]],
  ['dust', 'Debu Film', 'Debu & goresan', [['a', 'Kekuatan', 0, 1], ['seed', 'Acak', 1, 60, 1, 'int']]],
  ['grain', 'Grain', 'Butiran film', [['a', 'Kekuatan', 0, 1], ['size', 'Ukuran', 0, 1]]],
  ['vig', 'Vignette', 'Gelap/terang tepi', [['a', 'Kekuatan', -1, 1], ['mid', 'Titik tengah', 0, 1]]],
  ['ca', 'Aberasi', 'Pinggiran warna lensa', [['a', 'Kekuatan', 0, 1]]],
  ['swirl', 'Swirl', 'Pusaran / swirly bokeh, fokus tetap di tengah', [['a', 'Kekuatan', 0, 1.5], ['r', 'Area tajam', 0, 1], ['x', 'Posisi X', 0, 1], ['y', 'Posisi Y', 0, 1]], 'swirl'],
  ['sglow', 'Softlight Kulit', 'Kulit lembut bercahaya (glow) ala beauty', [['a', 'Kekuatan', 0, 1]]],
  ['fog', 'Kabut', 'Kabut / mist atmosferik', [['a', 'Kepadatan', 0, 1.2], ['pos', 'Batas kabut', 0, 1], ['spread', 'Kelembutan', 0.05, 1], ['scale', 'Ukuran awan', 0, 1], ['seed', 'Acak', 1, 60, 1, 'int']], 'fog']
];
const LEAK_NAMES = ['Hangat', 'Rose', 'Sunset', 'Biru', 'Pelangi', 'Emas', 'Merah'];
const FX_RECIPES = [
  ['Golden Hour', { src: { x: 0.82, y: 0.12 }, rays: { a: 0.8, beams: 0.6, scat: 0.6, len: 0.7, col: '#ffcf8a' }, haze: { a: 0.4, size: 0.55, col: '#ffb36b' }, leak: { a: 0.2, pal: 5 } }],
  ['Sinar Jendela', { src: { x: 0.08, y: 0.04 }, rays: { a: 1, beams: 1.1, scat: 0.2, len: 1.1, n: 9, soft: 0.25, col: '#fff1d0' }, haze: { a: 0.2, col: '#fff1d0' } }],
  ['Wedding Dreamy', { dream: { a: 0.5 }, bloom: { a: 0.35 }, leak: { a: 0.2, pal: 1 }, haze: { a: 0.25, col: '#fff1e0' }, grain: { a: 0.1 } }],
  ['Night Street', { star: { a: 0.5, n: 6 }, ana: { a: 0.35 }, halo: { a: 0.35 }, bloom: { a: 0.3 } }],
  ['Bokeh Malam', { bokeh: { a: 0.7, mode: 0, size: 0.55, den: 0.35 }, bloom: { a: 0.25 } }],
  ['Fairy Lights', { bokeh: { a: 0.75, mode: 1, col: '#ffd08a', size: 0.3, den: 0.5 }, star: { a: 0.25, n: 4 } }],
  ['Analog Film', { grain: { a: 0.45, size: 0.45 }, dust: { a: 0.5 }, leak: { a: 0.45, pal: 0, ang: -30 }, halo: { a: 0.25 }, vig: { a: 0.25 } }],
  ['Y2K Flash', { flash: { a: 0.7 }, grain: { a: 0.25 }, vig: { a: 0.3 }, bloom: { a: 0.15 } }],
  ['Sinematik', { ana: { a: 0.45 }, halo: { a: 0.3 }, vig: { a: 0.35 }, grain: { a: 0.15 } }],
  ['Sunset Leak', { leak: { a: 0.7, pal: 2, ang: 20, size: 0.7 }, haze: { a: 0.3, col: '#ff8a5c' } }],
  ['Prisma Pelangi', { prism: { a: 0.7, pos: 0.15 }, leak: { a: 0.2, pal: 4 } }],
  ['Swirly Bokeh', { swirl: { a: 0.8, r: 0.4, mode: 0 }, bloom: { a: 0.2 }, vig: { a: 0.3 } }],
  ['Glow Kulit', { sglow: { a: 0.6 }, bloom: { a: 0.15 }, haze: { a: 0.15, col: '#fff1e0' } }],
  ['Pagi Berkabut', { fog: { a: 0.7, pos: 0.4, spread: 0.6 }, haze: { a: 0.3, col: '#ffe1b8' }, rays: { a: 0.4, beams: 0.8, scat: 0.2 } }]
];
PANELS.light = () => {
  const fx = curImg().p.fx, cur = FX_LIST.find(f => f[0] === UI.fx) || FX_LIST[0], o = fx[cur[0]];
  let ctl = cur[3].map(s => sl(s[1], 'p:fx.' + cur[0] + '.' + s[0], s[2], s[3], s[4] || 0.01, { fmt: s[5] || (s[0] === 'a' ? 'pct' : ''), def: getPath(DEF_FX, cur[0] + '.' + s[0]) })).join('');
  if (cur[4] === 'col') ctl += '<label class="ps-lb">Warna cahaya</label>' + colorRow('p:fx.' + cur[0] + '.col', FXC);
  if (cur[4] === 'pal') ctl += '<label class="ps-lb">Palet</label><div class="ps-seg ps-wrap">' + LEAK_NAMES.map((n, i) => chip(n, 'leakpal', 'data-v="' + i + '"', (o.pal | 0) === i)).join('') + '</div>';
  if (cur[4] === 'swirl') ctl += '<label class="ps-lb">Mode</label><div class="ps-seg">' + chip('Blur Putar', 'swmode', 'data-v="0"', !o.mode) + chip('Pusaran (Twirl)', 'swmode', 'data-v="1"', o.mode == 1) + '</div>';
  if (cur[4] === 'fog') ctl += '<label class="ps-lb">Warna kabut</label>' + colorRow('p:fx.fog.col', ['#e8edf2', '#ffffff', '#f4e6d4', '#ffd9b8', '#d6e4ff', '#b9c6d6', '#e6d7ff']);
  if (cur[4] === 'bokeh') ctl += '<label class="ps-lb">Warna bokeh</label><div class="ps-seg">' + chip('Dari foto', 'bokehm', 'data-v="0"', !o.mode) + chip('Pilih warna', 'bokehm', 'data-v="1"', o.mode == 1) + '</div>' + (o.mode == 1 ? colorRow('p:fx.bokeh.col', FXC) : '');
  const pos = ['rays', 'haze', 'flare', 'flash', 'swirl'].includes(cur[0]);
  return '<label class="ps-lb">Resep tren 2024\u20132026</label><div class="ps-scrollx">' + FX_RECIPES.map((r, i) => chip(r[0], 'recipe', 'data-v="' + i + '"')).join('') + chip(ic('x') + ' Reset', 'fxreset', '') + '</div>' +
    '<div class="ps-fxgrid">' + FX_LIST.map(f => '<button class="ps-fx' + (f[0] === cur[0] ? ' on' : '') + (fx[f[0]].a ? ' act' : '') + '" data-a="fxsel" data-v="' + f[0] + '"><i class="ps-fxi ps-fx-' + f[0] + '"></i><span>' + f[1] + '</span></button>').join('') + '</div>' +
    '<div class="ps-card"><b>' + cur[1] + '</b><p>' + cur[2] + (pos ? (cur[0] === 'swirl' ? ' \u2014 seret titik merah muda di foto untuk memindah pusat fokus.' : ' \u2014 seret ikon \u2600 di foto untuk memindah sumber cahaya.') : '') + '</p>' + ctl + '</div>' +
    sec('thr', 'Lanjutan', sl('Ambang highlight', 'p:fx.thr', 0.2, 0.95, 0.01, { fmt: 'pct', def: 0.62 }), false);
};
/* ----- teks ----- */
PANELS.text = () => {
  const L = selText();
  let h = '<div class="ps-btn2"><button class="ps-go" data-a="addtext">' + ic('plus') + ' Tambah Teks</button>' + (L ? '<button data-a="dup">' + ic('copy') + ' Duplikat</button><button class="ps-danger" data-a="deltext">' + ic('trash') + '</button>' : '') + '</div>';
  h += '<label class="ps-lb">Gaya cepat</label><div class="ps-tpres">' + TEXT_PRESETS.map((t, i) => '<button data-a="tpreset" data-v="' + i + '"><canvas width="132" height="56" data-tp="' + i + '"></canvas><span>' + t[0] + '</span></button>').join('') + '</div>';
  if (!L) return h + '<p class="ps-note">Ketuk teks di foto untuk mengedit. Seret untuk memindah, tarik titik pojok untuk ukuran dan titik atas untuk memutar.</p>';
  h += '<textarea id="ps-ttext" rows="2" placeholder="Ketik teks">' + esc(L.t) + '</textarea>';
  h += '<label class="ps-3dtog"><input type="checkbox" data-ck="t:behind"' + (L.behind ? ' checked' : '') + '><span><b>Teks di belakang objek (3D)</b><small>AI mendeteksi objek lalu menaruhnya di depan teks, seperti poster &quot;THIS IS KENYA&quot;.</small></span></label>';
  h += '<button class="ps-fontbtn" data-a="fonts" style="font-family:\'' + L.font + '\'">' + esc(L.font) + '<i>' + ic('down') + '</i></button>';
  if (UI.fontOpen) h += '<div class="ps-fonts">' + ['Sans', 'Display', 'Serif', 'Script'].map(g => '<b>' + g + '</b>' + FONTS.filter(f => f[2] === g).map(f => '<button data-a="font" data-v="' + f[0] + '" class="' + (f[0] === L.font ? 'on' : '') + '" style="font-family:\'' + f[0] + '\'">' + f[0] + '</button>').join('')).join('') + '</div>';
  h += '<div class="ps-seg ps-wrap">' + chip('<b>B</b>', 'tw', '', L.w >= 600) + chip('<i>I</i>', 'tit', '', L.it) + chip('AA', 'tup', '', L.up) + chip('Kiri', 'tal', 'data-v="left"', L.al === 'left') + chip('Tengah', 'tal', 'data-v="center"', L.al === 'center') + chip('Kanan', 'tal', 'data-v="right"', L.al === 'right') + '</div>';
  h += sl('Ukuran', 't:size', 0.01, 0.5, 0.001, { fmt: 'pct', def: 0.09 }) + sl('Jarak huruf', 't:ls', -0.1, 1, 0.01, { fmt: 'x' }) + sl('Jarak baris', 't:lh', 0.7, 2.2, 0.01, { fmt: 'x', def: 1.12 }) + sl('Lengkung', 't:curve', -1, 1, 0.01) + sl('Rotasi', 't:rot', -180, 180, 1, { fmt: 'deg' }) + sl('Opasitas', 't:op', 0, 1, 0.01, { fmt: 'pct', def: 1 });
  const g = L.fill.t === 'g';
  h += sec('tfill', 'Warna &amp; Gradasi', '<div class="ps-seg">' + chip('Warna', 'tfill', 'data-v="s"', !g) + chip('Gradasi', 'tfill', 'data-v="g"', g) + '</div>' +
    (g ? '<div class="ps-grads">' + GRADS.map((q, i) => '<button data-a="tgrad" data-v="' + i + '" title="' + q[0] + '" style="background:linear-gradient(90deg,' + q[1].join(',') + ')" class="' + (JSON.stringify(L.fill.g) === JSON.stringify(q[1]) ? 'on' : '') + '"></button>').join('') + '</div>' +
      '<div class="ps-gstops">' + L.fill.g.map((c, i) => '<label class="ps-sw ps-swc" style="background:' + c + '"><input type="color" data-kc="t:fill.g.' + i + '" value="' + c + '"></label>').join('') + (L.fill.g.length < 5 ? '<button class="ps-chip" data-a="gadd">+ warna</button>' : '') + (L.fill.g.length > 2 ? '<button class="ps-chip" data-a="gdel">\u2212</button>' : '') + '</div>' + sl('Arah gradasi', 't:fill.ang', 0, 360, 1, { fmt: 'deg', def: 90 })
      : colorRow('t:fill.c', COLORS)));
  h += sec('tst', 'Garis Tepi', sl('Tebal', 't:st.w', 0, 0.2, 0.002, { fmt: 'pct' }) + colorRow('t:st.c', COLORS), !!L.st.w);
  h += sec('tsh', 'Bayangan', sl('Kekuatan', 't:sh.a', 0, 1, 0.01, { fmt: 'pct' }) + sl('Blur', 't:sh.b', 0, 1, 0.01, { fmt: 'pct' }) + sl('Geser X', 't:sh.x', -0.3, 0.3, 0.005) + sl('Geser Y', 't:sh.y', -0.3, 0.3, 0.005) + colorRow('t:sh.c', COLORS), !!L.sh.a);
  h += sec('tgl', 'Glow / Neon', sl('Kekuatan', 't:glow.a', 0, 1.5, 0.01, { fmt: 'pct' }) + colorRow('t:glow.c', ['#ff2bd6', '#2be4ff', '#ffe02b', '#39ff6a', '#ff3b3b', '#ffffff', '#9d4dff']), !!L.glow.a);
  h += sec('tex', 'Efek 3D', sl('Kedalaman', 't:ex.a', 0, 0.3, 0.002, { fmt: 'pct' }) + sl('Arah', 't:ex.ang', 0, 360, 1, { fmt: 'deg', def: 45 }) + colorRow('t:ex.c', COLORS), !!L.ex.a);
  h += sec('tbg', 'Latar Teks', '<label class="ps-ck"><input type="checkbox" data-ck="t:bg.a"' + (L.bg.a ? ' checked' : '') + '> Tampilkan kotak latar</label>' + sl('Opasitas', 't:bg.op', 0, 1, 0.01, { fmt: 'pct', def: 0.55 }) + sl('Jarak dalam', 't:bg.pad', 0, 1.2, 0.01, { fmt: 'x', def: 0.35 }) + sl('Sudut', 't:bg.r', 0, 1, 0.01, { fmt: 'x', def: 0.3 }) + colorRow('t:bg.c', COLORS), !!L.bg.a);
  h += sec('tbl', 'Campuran &amp; Urutan', '<select data-sel="t:blend"><option value="source-over">Normal</option><option value="screen">Screen</option><option value="overlay">Overlay</option><option value="soft-light">Soft Light</option><option value="multiply">Multiply</option><option value="difference">Difference</option></select><div class="ps-btn2"><button data-a="tfront">' + ic('up') + ' Ke depan</button><button data-a="tback">' + ic('down') + ' Ke belakang</button></div>', false);
  return h;
};
POST.text = () => {
  $$('#ps-panel canvas[data-tp]').forEach(cv => {
    drawPreset(cv);
  });
  const L = selText(); const s = $('#ps-panel select[data-sel]'); if (s && L) s.value = L.blend || 'source-over';
  const fl = []; TEXT_PRESETS.forEach(t => fl.push({ font: t[1].font, w: t[1].w || 400 })); if (L) fl.push(L); if (UI.fontOpen) injectFontCSS(FONTS);
  ensureFonts(fl).then(() => { if (ST.tool === 'text' && !POST.text.busy) { POST.text.busy = 1; $$('#ps-panel canvas[data-tp]').forEach(drawPreset); POST.text.busy = 0; requestDraw(); } });
};
function drawPreset(cv) {
  const T = TEXT_PRESETS[+cv.dataset.tp], L = Object.assign(defText('Aa Teks'), clone(T[1])); L.x = 0.5; L.y = 0.5; L.size = 0.2;
  const x = cv.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height); x.fillStyle = '#3a3f48'; x.fillRect(0, 0, cv.width, cv.height);
  const lay = textLayout(x, L, cv.width), wmax = cv.width * 0.86, hmax = cv.height * 0.7; const k = Math.min(1, wmax / Math.max(1, lay.w + (L.st.w || 0) * lay.fs * 2), hmax / lay.h); L.size *= k;
  drawTextLayer(x, L, cv.width, cv.height);
}
/* ----- hapus objek ----- */
PANELS.erase = () => '<div class="ps-card"><b>' + ic('eraser') + ' Hapus Objek</b><p>Sapukan kuas pada orang, tulisan, kabel, atau benda yang ingin dihilangkan, lalu tekan <b>Hapus</b>. Area akan diisi otomatis dari sekitarnya.</p>' +
  '<div class="ps-seg">' + chip(ic('brush') + ' Kuas', 'emode', 'data-v="1"', ST.erase) + chip(ic('eraser') + ' Penghapus', 'emode', 'data-v="0"', !ST.erase) + '</div>' +
  sl('Ukuran kuas', 's:brush', 8, 240, 1, { fmt: 'px', def: 60 }) +
  '<div class="ps-seg">' + chip('Cepat', 'ehq', 'data-v="0"', ST.eraseHQ === false) + chip('Detail', 'ehq', 'data-v="1"', ST.eraseHQ !== false) + '</div>' +
  '<div class="ps-btn2"><button class="ps-go" data-a="erase" id="ps-erbtn">' + ic('sparkle') + ' Hapus</button><button data-a="eclear">' + ic('x') + ' Bersihkan Sapuan</button></div></div>' +
  '<p class="ps-note">Tips: sapu sedikit melebihi objek termasuk bayangannya. Ulangi untuk sisa yang masih terlihat.</p>';
function updEraseUI() { const b = $('#ps-erbtn'); if (b) b.disabled = !(curImg() && curImg()._mask); }
/* ----- potong ----- */
PANELS.crop = () => {
  const c = curImg().crop;
  return '<label class="ps-lb">Rasio</label><div class="ps-seg ps-wrap">' + RATIOS.map(r => chip(r[1], 'ratio', 'data-v="' + r[0] + '"', (c.ratio || 'free') === r[0])).join('') + '</div>' +
    '<div class="ps-btn4"><button data-a="rot" data-v="-1" title="Putar kiri">' + ic('rotl') + '</button><button data-a="rot" data-v="1" title="Putar kanan">' + ic('rotr') + '</button><button data-a="flip" data-v="h" title="Balik horizontal">' + ic('fliph') + '</button><button data-a="flip" data-v="v" title="Balik vertikal">' + ic('flipv') + '</button></div>' +
    sl('Luruskan', 'cr:ang', -45, 45, 0.1, { fmt: 'deg' }) +
    '<div class="ps-btn2"><button data-a="cropreset">' + ic('x') + ' Reset</button><button class="ps-go" data-a="cropdone">' + ic('check') + ' Selesai</button></div>';
};
/* ----- kolase ----- */
const BG_PRE = [['c', '#ffffff'], ['c', '#111111'], ['c', '#f4ede1'], ['c', '#ffe3ec'], ['c', '#e3f0ff'], ['c', '#e8f5e9'], ['c', '#1580ad'], ['c', '#ff4f7b'], ['g', '#feda75', '#d62976'], ['g', '#ff512f', '#f09819'], ['g', '#a1c4fd', '#fbc2eb'], ['g', '#141e30', '#243b55'], ['g', '#d4fc79', '#96e6a1'], ['blur']];
PANELS.col = () => {
  const c = doc.col, sz = SIZE_BY[c.size] || SIZE_BY.ig45;
  const groups = SIZES.map(g => chip(g[0], 'sizeg', 'data-v="' + g[0] + '"', UI.sizeG === g[0])).join('');
  const list = (SIZES.find(g => g[0] === UI.sizeG) || SIZES[0])[1].map(s => '<button class="ps-size' + (c.size === s[0] ? ' on' : '') + '" data-a="size" data-v="' + s[0] + '"><i style="aspect-ratio:' + s[2] + '/' + s[3] + '"></i><span>' + s[1] + '<small>' + s[2] + '\u00d7' + s[3] + '</small></span></button>').join('');
  const L = layoutOf(c);
  return '<div class="ps-card"><b>' + ic('img') + ' Foto (' + doc.imgs.length + ')</b><div class="ps-tray">' + doc.imgs.map(o => '<button class="ps-th' + (c.cells.some(x => x.img === o.id) ? ' used' : '') + '" data-a="trayimg" data-v="' + o.id + '"><canvas data-th="' + o.id + '"></canvas></button>').join('') + '<button class="ps-th ps-add" data-a="addphotos">' + ic('plus') + '</button></div>' +
    '<p class="ps-note">' + (SEL.cell >= 0 ? 'Ketuk foto di atas untuk mengisi kotak terpilih.' : 'Ketuk kotak di kanvas untuk memilih, seret untuk menggeser foto, cubit/scroll untuk zoom.') + '</p></div>' +
    sec('size', 'Ukuran: ' + sz.g + ' ' + sz.name, '<div class="ps-scrollx">' + groups + '</div><div class="ps-sizes">' + list + '</div><label class="ps-lb">Resolusi ekspor</label><div class="ps-seg">' + [[1080, '<b>1080</b><small>Standar</small>'], [1440, '<b>1440</b><small>HD</small>'], [2160, '<b>2160</b><small>Ultra</small>']].map(r => chip(r[1], 'res', 'data-v="' + r[0] + '"', c.res === r[0])).join('') + '</div>' + (sz.slides > 1 ? '<p class="ps-note">Carousel panorama: hasil ekspor otomatis dipotong menjadi ' + sz.slides + ' slide yang menyambung mulus.</p>' : '')) +
    sec('bg', 'Latar', '<div class="ps-colors">' + BG_PRE.map((b, i) => '<button class="ps-sw' + (b[0] === 'blur' ? ' ps-swblur' : '') + '" data-a="bg" data-v="' + i + '" style="background:' + (b[0] === 'g' ? 'linear-gradient(135deg,' + b[1] + ',' + b[2] + ')' : b[0] === 'blur' ? '#888' : b[1]) + '" title="' + (b[0] === 'blur' ? 'Blur foto' : b[1]) + '">' + (b[0] === 'blur' ? 'Blur' : '') + '</button>').join('') + '<label class="ps-sw ps-swc"><input type="color" data-kc="c:bg.c" value="' + (c.bg.c || '#ffffff') + '"></label></div>') +
    sec('sp', 'Jarak &amp; Bingkai', (L.k === 'grid' ? sl('Jarak antar foto', 'c:gap', 0, 80, 1, { fmt: 'px', def: 14 }) + sl('Tepi luar', 'c:margin', 0, 160, 1, { fmt: 'px', def: 14 }) + sl('Sudut membulat', 'c:radius', 0, 120, 1, { fmt: 'px' }) + sl('Bayangan', 'c:shadow', 0, 1, 0.01, { fmt: 'pct' }) + '<label class="ps-ck"><input type="checkbox" data-ck="c:frame"' + (c.frame ? ' checked' : '') + '> Bingkai putih (polaroid)</label>' : '<p class="ps-note">Gaya bebas: susunan acak seperti foto tercetak.</p><button class="ps-wide" data-a="reseed">' + ic('swap') + ' Acak Ulang Susunan</button>'));
};
POST.col = () => drawThumbs();
function layoutSVG(cells, asp, k) {
  const W = 60, H = Math.round(60 / Math.max(0.35, Math.min(2.8, asp)));
  const g = k === 'grid' ? 2 : 0;
  return '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" style="width:auto;height:auto;max-width:60px;max-height:60px">' + (k === 'film' ? '<rect width="' + W + '" height="' + H + '" fill="#222"/>' : '') + cells.map(c => { const x = c[0] * W + g / 2, y = c[1] * H + g / 2, w = c[2] * W - g, h = c[3] * H - g; return '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + Math.max(1, w).toFixed(1) + '" height="' + Math.max(1, h).toFixed(1) + '" rx="1.5" ' + (c[4] ? 'transform="rotate(' + c[4] + ' ' + (x + w / 2).toFixed(1) + ' ' + (y + h / 2).toFixed(1) + ')" ' : '') + 'fill="currentColor" fill-opacity=".85"' + (k !== 'grid' && k !== 'film' ? ' stroke="#fff" stroke-width="1.5"' : '') + '/>'; }).join('') + '</svg>';
}
PANELS.layout = () => {
  const c = doc.col, n = Math.max(1, UI.layN || c.cells.length || doc.imgs.length || 1), asp = c.W / c.H;
  const counts = []; for (let i = 1; i <= 12; i++) if (LAYOUTS.some(l => l.n === i)) counts.push(i);
  return '<label class="ps-lb">Jumlah foto</label><div class="ps-scrollx">' + counts.map(i => chip(String(i), 'layn', 'data-v="' + i + '"', i === n)).join('') + '</div>' +
    '<div class="ps-lays">' + layoutsFor(n).map(l => '<button class="ps-lay' + (c.lay === l.id ? ' on' : '') + '" data-a="lay" data-v="' + l.id + '">' + layoutSVG(l.cells, asp, 'grid') + '</button>').join('') + '</div>' +
    '<label class="ps-lb">Gaya tren (bebas)</label><div class="ps-lays">' + FREE_STYLES.map(f => '<button class="ps-lay ps-layf' + (c.lay === '~' + f[0] ? ' on' : '') + '" data-a="lay" data-v="~' + f[0] + '">' + layoutSVG(freeCells(f[0], n, asp, c.seed), asp, f[0]) + '<span>' + f[1] + '</span></button>').join('') + '</div>';
};
/* ----- bar sel kolase ----- */
function updCellBar() {
  const b = $('#ps-cellbar'); if (!b) return;
  const show = doc && doc.mode === 'collage' && SEL.cell >= 0;
  b.hidden = !show; if (!show) return;
  const cell = doc.col.cells[SEL.cell] || {};
  b.innerHTML = '<button data-a="cellpick">' + ic('img') + '<span>' + (cell.img ? 'Ganti' : 'Isi Foto') + '</span></button>' + (cell.img ? '<button data-a="celledit">' + ic('edit') + '<span>Edit Foto</span></button><button data-a="cellswap">' + ic('swap') + '<span>Tukar</span></button><button data-a="cellfit">' + ic('fit') + '<span>Pas</span></button><button data-a="cellclear">' + ic('x') + '<span>Kosongkan</span></button>' : '');
}


/* ---- j-actions.js ---- */
/* ================= AKSI & EVENT ================= */
let FILEMODE = null;
function pickFiles(mode, multiple) {
  FILEMODE = mode; const f = $(multiple ? '#ps-file' : '#ps-file1'); f.value = ''; pickMark = Date.now(); f.click();
}
async function importMany(files, forCollage) {
  const out = []; let i = 0;
  for (const f of files) {
    i++; busy(true, 'Memuat foto ' + i + '/' + files.length + '\u2026', (i - 0.6) / files.length * 100);
    await raf(); await sleep(30);
    try { out.push(await withTimeout(importFile(f, forCollage), 90000)); }
    catch (e) { toast((f.name || 'Foto') + ': ' + (e.message === 'timeout' ? 'terlalu lama dimuat, dilewati' : e.message), true); }
    busy(true, 'Memuat foto ' + i + '/' + files.length + '\u2026', i / files.length * 100);
    await sleep(IS_MOB() ? 120 : 10);
  }
  busy(false); return out;
}
async function newPhotoDoc(file) {
  await saveNow();
  const d = newDoc('photo'), prevDoc = doc; doc = d;
  const [img] = await importMany([file], false);
  if (!img) { doc = prevDoc; return; }
  d.imgs.push(img); d.cur = img.id; d.name = img.name || d.name; d.blobs = [img.srcKey];
  SEL.clear(); ST.tool = 'auto'; resetHistory(); afterDocChange(true); saveSoon();
}
async function newCollageDoc(files, seedImgs) {
  await saveNow();
  const prevDoc = doc, d = newDoc('collage'); doc = d;
  const imgs = (seedImgs || []).map(i => { const c = clone(Object.assign({}, i, { _mask: undefined })); c.id = uid(); return c; });
  imgs.forEach(i => { d.blobs.push(i.srcKey); if (i.baseKey) d.blobs.push(i.baseKey); });
  if (files && files.length) imgs.push(...await importMany(files, true));
  if (!imgs.length && files && files.length) { doc = prevDoc; return; }
  d.imgs = imgs; d.cur = imgs[0] ? imgs[0].id : null;
  setLayout(bestLayout(Math.max(1, imgs.length)));
  SEL.clear(); ST.tool = imgs.length ? 'layout' : 'col'; resetHistory(); afterDocChange(true); saveSoon();
}
async function addPhotos(files) {
  const imgs = await importMany(files, true); if (!imgs.length) return;
  doc.imgs.push(...imgs);
  const c = doc.col, empty = c.cells.filter(x => !x.img).length, L = layoutOf(c);
  if (empty < imgs.length) {
    const want = c.cells.filter(x => x.img).length + imgs.length;
    if (L.k !== 'grid') setLayout(c.lay, want); else if (LAYOUTS.some(l => l.n === want)) setLayout(bestLayout(want)); else assignUnused();
  } else assignUnused();
  commit('Tambah foto'); afterDocChange();
}
function setLayout(id, n) {
  const c = doc.col; c.lay = id;
  const want = id.charAt(0) === '~' ? Math.max(1, n || c.cells.length || doc.imgs.length) : (LAYOUTS.find(l => l.id === id) || LAYOUTS[0]).n;
  while (c.cells.length < want) c.cells.push({ img: null, z: 1, px: 0, py: 0 });
  if (c.cells.length > want) { /* pindahkan foto yang terpotong ke sel kosong */ c.cells.length = want; }
  assignUnused(); UI.layN = want;
}
function assignUnused() {
  const c = doc.col, used = new Set(c.cells.map(x => x.img).filter(Boolean)), free = doc.imgs.filter(i => !used.has(i.id));
  for (const cell of c.cells) if (!cell.img && free.length) { cell.img = free.shift().id; cell.z = 1; cell.px = cell.py = 0; }
}
function swapCells(a, b) { const c = doc.col.cells, t = c[a]; c[a] = c[b]; c[b] = t; SEL.cell = b; commit('Tukar foto'); updCellBar(); requestDraw(); toast('Foto ditukar'); }
function editCellPhoto(i) { const cell = doc.col.cells[i]; if (!cell || !cell.img) return; doc.mode = 'photo'; doc.back = true; doc.cur = cell.img; SEL.clear(); ST.tool = 'auto'; afterDocChange(true); }
function backToCollage() { doc.mode = 'collage'; doc.back = false; SEL.clear(); ST.tool = 'col'; commit('Edit foto kolase'); afterDocChange(true); }
function pickForCell(i) { SEL.cell = i; pickFiles({ t: 'cell', i }, false); }

async function onFiles(files, mode) {
  files = Array.from(files || []).filter(f => /^image\//.test(f.type) || /\.(jpe?g|png|webp|heic|heif|avif|gif|bmp)$/i.test(f.name));
  if (!files.length) return;
  if (mode && mode.t === 'cell') {
    const [img] = await importMany([files[0]], true); if (!img) return;
    doc.imgs.push(img); const cell = doc.col.cells[mode.i]; if (cell) { cell.img = img.id; cell.z = 1; cell.px = cell.py = 0; }
    commit('Ganti foto'); afterDocChange(); return;
  }
  if (mode && mode.t === 'match') {
    try { const b = await decodeBlob(files[0]); const id = smallData(b, 256); setMatchRef(curImg(), id); commit('Cocokkan warna'); renderPanel(); requestDraw(); toast('Warna referensi diterapkan'); } catch (e) { toast('Gagal: ' + e.message, true); }
    return;
  }
  if (mode && mode.t === 'add' || doc && doc.mode === 'collage' && !(mode && (mode.t === 'new' || mode.t === 'collage'))) { if (!doc || doc.mode !== 'collage') return newCollageDoc(files); return addPhotos(files); }
  if (mode && mode.t === 'collage') return newCollageDoc(files);
  if (files.length > 1) {
    const v = await ask('Buka ' + files.length + ' foto', 'Mau dibuat kolase atau edit foto pertama saja?', [{ label: 'Edit 1 foto', v: 'one' }, { label: 'Buat Kolase', v: 'col', go: true }]);
    if (v === 'col') return newCollageDoc(files); if (v === 'one') return newPhotoDoc(files[0]); return;
  }
  return newPhotoDoc(files[0]);
}

/* ---------- aksi tombol ---------- */
const ACT = {
  undo: () => undo(), redo: () => redo(),
  open: () => pickFiles({ t: 'new' }, true),
  collage: async () => {
    if (doc && doc.mode === 'photo' && curImg()) {
      const v = await ask('Buat Kolase', 'Sertakan foto yang sedang diedit ke kolase baru?', [{ label: 'Kolase kosong', v: 'empty' }, { label: 'Ya, sertakan', v: 'with', go: true }]);
      if (!v) return; if (v === 'with') { await newCollageDoc([], [curImg()]); pickFiles({ t: 'add' }, true); return; }
    }
    pickFiles({ t: 'collage' }, true);
  },
  newcol: () => { closeAllModals(); pickFiles({ t: 'collage' }, true); },
  newphoto: () => { closeAllModals(); pickFiles({ t: 'new' }, true); },
  export: () => { if (!doc || (doc.mode === 'photo' && !curImg())) { toast('Belum ada foto'); return; } openExport(); },
  projects: () => openProjects(),
  full: () => toggleFull(),
  backcol: () => backToCollage(),
  fit: () => { V.fit = true; requestDraw(); },
  z100: () => setZoom(1 / V.dpr),
  zin: () => setZoom(V.z * 1.25), zout: () => setZoom(V.z / 1.25),
  sec: b => { const s = b.closest('.ps-sec'); s.classList.toggle('open'); UI.sec[b.dataset.id] = s.classList.contains('open'); },
  /* HD */
  sreng: b => { UI.srEng = b.dataset.v; renderPanel(); },
  sr: b => aiUpscale(curImg(), +b.dataset.v, UI.srEng || 'ai'),
  autodetail: () => { const r = autoDetail(curImg()); commit('Perjelas otomatis'); renderPanel(); requestDraw(); toast('Detail HD diterapkan (noise \u2248 ' + r.sigma.toFixed(1).replace('.', ',') + ')'); },
  /* auto */
  auto: b => { const im = curImg(), a = im.p.auto; applyAuto(im, b.dataset.v, a ? a.skin : 'keep', a ? a.int : 1); commit('Auto Fix'); renderPanel(); requestDraw(); },
  skin: b => { const im = curImg(), v = b.dataset.v; if (im.p.auto) im.p.auto.skin = v; if (v === 'off') im.p.skin.mode = 0; else { im.p.skin.mode = v === 'bright' ? 2 : 1; im.p.skin.amt = v === 'bright' ? 0.65 : 0.6; im.p.skin.smooth = Math.max(im.p.skin.smooth, v === 'bright' ? 0.35 : 0.2); } commit('Warna kulit'); renderPanel(); requestDraw(); },
  /* warna */
  natpro: () => { naturalPro(curImg()); commit('Warna natural'); renderPanel(); requestDraw(); },
  lookcat: b => { UI.lookCat = b.dataset.v; renderPanel(); },
  look: b => { const p = curImg().p; p.look = { id: b.dataset.v, amt: p.look.amt || 0.8 }; commit('Look'); renderPanel(); requestDraw(); },
  matchfile: () => pickFiles({ t: 'match' }, false),
  matchimg: b => { const o = imgById(b.dataset.v); if (!o) return; const c = GL.render(o, o.p, 200, Math.max(1, Math.round(200 * cropOut(o).H / cropOut(o).W)), {}); setMatchRef(curImg(), c.getContext('2d').getImageData(0, 0, c.width, c.height)); commit('Cocokkan warna'); renderPanel(); requestDraw(); },
  matchoff: () => { curImg().p.match = null; commit('Hapus cocokkan warna'); renderPanel(); requestDraw(); },
  hsl: b => { UI.hsl = +b.dataset.v; renderPanel(); },
  /* cahaya */
  fxsel: b => { UI.fx = b.dataset.v; const o = curImg().p.fx[UI.fx]; if (!o.a) { o.a = UI.fx === 'vig' ? 0.35 : UI.fx === 'grain' ? 0.3 : UI.fx === 'dream' ? 0.4 : UI.fx === 'sglow' ? 0.5 : 0.6; commit('Efek ' + UI.fx); requestDraw(); } renderPanel(); },
  recipe: b => { const r = FX_RECIPES[+b.dataset.v], p = curImg().p, src = p.fx.src; p.fx = clone(DEF_FX); p.fx.src = src; for (const k in r[1]) p.fx[k] = Object.assign({}, p.fx[k], r[1][k]); const first = Object.keys(r[1]).find(k => k !== 'src'); if (first) UI.fx = first; commit('Resep ' + r[0]); renderPanel(); requestDraw(); },
  fxreset: () => { const p = curImg().p; p.fx = clone(DEF_FX); commit('Reset efek'); renderPanel(); requestDraw(); },
  leakpal: b => { curImg().p.fx.leak.pal = +b.dataset.v; if (!curImg().p.fx.leak.a) curImg().p.fx.leak.a = 0.6; commit('Palet leak'); renderPanel(); requestDraw(); },
  swmode: b => { curImg().p.fx.swirl.mode = +b.dataset.v; commit('Mode swirl'); renderPanel(); requestDraw(); },
  bokehm: b => { curImg().p.fx.bokeh.mode = +b.dataset.v; commit('Warna bokeh'); renderPanel(); requestDraw(); },
  setc: b => { setVal(b.dataset.k, b.dataset.v); commit('Warna'); renderPanel(); requestDraw(); },
  /* teks */
  addtext: () => { const L = defText(); const prev = selText(); if (prev) Object.assign(L, clone(Object.assign({}, prev, { id: L.id, t: 'Ketik teks', y: clamp(prev.y + 0.12, 0.08, 0.92) }))); texts().push(L); SEL.text = L.id; SEL.cell = -1; commit('Tambah teks'); renderPanel(); requestDraw(); setTimeout(() => { const t = $('#ps-ttext'); if (t) { t.focus(); t.select(); } }, 60); },
  dup: () => { const L = selText(); if (!L) return; const c = clone(L); c.id = uid(); c.x = clamp(c.x + 0.03, 0, 1); c.y = clamp(c.y + 0.03, 0, 1); texts().push(c); SEL.text = c.id; commit('Duplikat teks'); renderPanel(); requestDraw(); },
  deltext: () => { const t = texts(), i = t.findIndex(x => x.id === SEL.text); if (i >= 0) { t.splice(i, 1); SEL.text = null; commit('Hapus teks'); renderPanel(); requestDraw(); } },
  tpreset: async b => { const T = TEXT_PRESETS[+b.dataset.v]; let L = selText(); if (!L) { L = defText(T[0]); texts().push(L); SEL.text = L.id; } const keep = { id: L.id, t: L.t, x: L.x, y: L.y, size: L.size, rot: L.rot, al: L.al }; Object.assign(L, defText(), clone(T[1]), keep); await ensureFont(L.font, L.w); commit('Gaya teks'); renderPanel(); requestDraw(); },
  fonts: () => { UI.fontOpen = !UI.fontOpen; if (UI.fontOpen) injectFontCSS(FONTS); renderPanel(); },
  font: async b => { const L = selText(); if (!L) return; L.font = b.dataset.v; L.w = fontWeight(L.font, L.w); UI.fontOpen = false; await ensureFont(L.font, L.w); commit('Font'); renderPanel(); requestDraw(); },
  tw: () => { const L = selText(); L.w = L.w >= 600 ? fontWeight(L.font, 400) : fontWeight(L.font, 800); ensureFont(L.font, L.w).then(requestDraw); commit('Tebal'); renderPanel(); requestDraw(); },
  tit: () => { const L = selText(); L.it = L.it ? 0 : 1; commit('Miring'); renderPanel(); requestDraw(); },
  tup: () => { const L = selText(); L.up = L.up ? 0 : 1; commit('Kapital'); renderPanel(); requestDraw(); },
  tal: b => { selText().al = b.dataset.v; commit('Rata'); renderPanel(); requestDraw(); },
  tfill: b => { selText().fill.t = b.dataset.v; commit('Isi teks'); renderPanel(); requestDraw(); },
  tgrad: b => { selText().fill.g = clone(GRADS[+b.dataset.v][1]); commit('Gradasi'); renderPanel(); requestDraw(); },
  gadd: () => { const g = selText().fill.g; g.push(g[g.length - 1]); commit('Gradasi'); renderPanel(); },
  gdel: () => { selText().fill.g.pop(); commit('Gradasi'); renderPanel(); requestDraw(); },
  tfront: () => { const t = texts(), i = t.findIndex(x => x.id === SEL.text); if (i >= 0 && i < t.length - 1) { t.push(t.splice(i, 1)[0]); commit('Urutan'); requestDraw(); } },
  tback: () => { const t = texts(), i = t.findIndex(x => x.id === SEL.text); if (i > 0) { t.unshift(t.splice(i, 1)[0]); commit('Urutan'); requestDraw(); } },
  /* hapus objek */
  emode: b => { ST.erase = +b.dataset.v; renderPanel(); },
  ehq: b => { ST.eraseHQ = b.dataset.v === '1'; renderPanel(); },
  erase: () => runErase(curImg()),
  eclear: () => { curImg()._mask = null; updEraseUI(); requestDraw(); },
  /* potong */
  ratio: b => { applyRatio(curImg(), b.dataset.v); renderPanel(); requestDraw(); },
  rot: b => { const c = curImg().crop; c.r90 = (c.r90 + (+b.dataset.v) + 4) % 4; const x = c.x, y = c.y, w = c.w, h = c.h; if (+b.dataset.v > 0) { c.x = 1 - y - h; c.y = x; } else { c.x = y; c.y = 1 - x - w; } c.w = h; c.h = w; if (c.ratio && c.ratio !== 'free') applyRatio(curImg(), c.ratio); commit('Putar'); requestDraw(); },
  flip: b => { const c = curImg().crop; if (b.dataset.v === 'h') { c.fh = c.fh ? 0 : 1; c.x = 1 - c.x - c.w; } else { c.fv = c.fv ? 0 : 1; c.y = 1 - c.y - c.h; } commit('Balik'); requestDraw(); },
  cropreset: () => { curImg().crop = clone(DEF_CROP); commit('Reset potong'); renderPanel(); requestDraw(); },
  cropdone: () => setTool(doc.back ? 'auto' : 'auto'),
  /* kolase */
  sizeg: b => { UI.sizeG = b.dataset.v; renderPanel(); },
  size: b => { const s = SIZE_BY[b.dataset.v], c = doc.col; c.size = s.id; c.W = s.W; c.H = s.H; c.slides = s.slides; if (c.lay.charAt(0) === '~') setLayout(c.lay, c.cells.length); V.fit = true; commit('Ukuran kolase'); renderPanel(); requestDraw(); },
  res: b => { doc.col.res = +b.dataset.v; commit('Resolusi'); renderPanel(); },
  bg: b => { const p = BG_PRE[+b.dataset.v], c = doc.col; c.bg = p[0] === 'blur' ? { t: 'blur', c: c.bg.c } : p[0] === 'g' ? { t: 'g', c: p[1], c2: p[2], ang: 135 } : { t: 'c', c: p[1] }; commit('Latar'); renderPanel(); requestDraw(); },
  reseed: () => { doc.col.seed = (doc.col.seed || 1) + 1; commit('Acak susunan'); requestDraw(); },
  layn: b => { const n = +b.dataset.v; UI.layN = n; const c = doc.col; if (c.lay.charAt(0) === '~') setLayout(c.lay, n); else { const l = layoutsFor(n)[0]; if (l) setLayout(l.id); } commit('Jumlah foto'); renderPanel(); requestDraw(); },
  lay: b => { setLayout(b.dataset.v, UI.layN); commit('Tata letak'); renderPanel(); requestDraw(); },
  trayimg: b => { const id = b.dataset.v, c = doc.col; let i = SEL.cell; if (i < 0) i = c.cells.findIndex(x => !x.img); if (i < 0) { toast('Pilih kotak di kanvas dulu'); return; } const cell = c.cells[i]; const j = c.cells.findIndex(x => x.img === id); if (j >= 0 && j !== i) { c.cells[j] = { img: cell.img, z: 1, px: 0, py: 0 }; } c.cells[i] = { img: id, z: 1, px: 0, py: 0 }; SEL.cell = i; commit('Isi foto'); renderPanel(); updCellBar(); requestDraw(); },
  addphotos: () => pickFiles({ t: 'add' }, true),
  cellpick: () => pickForCell(SEL.cell),
  celledit: () => editCellPhoto(SEL.cell),
  cellswap: () => { ST.swapFrom = SEL.cell; toast('Ketuk kotak lain untuk menukar'); requestDraw(); },
  cellfit: () => { const c = doc.col.cells[SEL.cell]; if (c) { c.z = 1; c.px = c.py = 0; commit('Pas foto'); requestDraw(); } },
  cellclear: () => { const c = doc.col.cells[SEL.cell]; if (c) { c.img = null; commit('Kosongkan'); updCellBar(); renderPanel(); requestDraw(); } }
};
function closeAllModals() { $$('#ps-layer .ps-modal').forEach(m => closeModal(m)); }
let fullOn = false;
function toggleFull(on) {
  fullOn = on == null ? !fullOn : on; A.classList.toggle('ps-full', fullOn); document.documentElement.classList.toggle('ps-noscroll', fullOn);
  V.fit = true; requestDraw();
}

/* ---------- slider ramah sentuh: hanya bergerak bila tombol bulat (thumb) yang disentuh lalu digeser ke samping ---------- */
function bindTouchSliders() {
  let T = null;
  const isTouch = e => e.pointerType === 'touch' || e.pointerType === 'pen';
  A.addEventListener('pointerdown', e => {
    if (!isTouch(e)) return;
    const row = e.target.closest('.ps-sl'); if (!row) return; const r = row.querySelector('input[type=range]'); if (!r || r.disabled) return;
    const rc = r.getBoundingClientRect(), min = +r.min, max = +r.max, v = +r.value, th = 22, fr = (v - min) / ((max - min) || 1), tx = rc.left + th / 2 + fr * (rc.width - th);
    const nearThumb = Math.abs(e.clientX - tx) <= 30 && e.clientY >= rc.top - 18 && e.clientY <= rc.bottom + 18;
    if (!nearThumb) return;
    T = { r, row, id: e.pointerId, x: e.clientX, y: e.clientY, v0: v, min, max, step: +r.step || 0.01, w: Math.max(40, rc.width - th), on: false, dead: false };
    row.classList.add('ps-touch');
  }, true);
  A.addEventListener('pointermove', e => {
    if (!T || e.pointerId !== T.id || T.dead) return;
    const dx = e.clientX - T.x, dy = e.clientY - T.y;
    if (!T.on) {
      if (Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) { T.dead = true; T.row.classList.remove('ps-touch'); return; }
      if (Math.abs(dx) < 6) return;
      T.on = true; try { T.row.setPointerCapture(e.pointerId); } catch (er) {}
    }
    e.preventDefault();
    let v = T.v0 + dx / T.w * (T.max - T.min); v = Math.round((v - T.min) / T.step) * T.step + T.min; v = clamp(v, T.min, T.max);
    if (+T.r.value !== v) { T.r.value = v; T.r.dispatchEvent(new Event('input', { bubbles: true })); }
  }, { passive: false, capture: true });
  const end = e => {
    if (!T || e.pointerId !== T.id) return; const t = T; T = null; t.row.classList.remove('ps-touch');
    if (t.on && +t.r.value !== t.v0) t.r.dispatchEvent(new Event('change', { bubbles: true }));
  };
  A.addEventListener('pointerup', end, true); A.addEventListener('pointercancel', end, true);
}
/* ---------- binding ---------- */
function bindUI() {
  bindTouchSliders();
  A.addEventListener('click', e => {
    const t = e.target.closest('[data-tool]'); if (t && A.contains(t)) { setTool(t.dataset.tool); return; }
    const b = e.target.closest('[data-act],[data-a]'); if (!b || !A.contains(b) || b.disabled) return;
    const k = b.dataset.act || b.dataset.a; if (ACT[k]) ACT[k](b, e);
  });
  const P = $('#ps-panel');
  P.addEventListener('input', e => {
    const r = e.target;
    if (r.matches('input[type=range][data-k]')) {
      const v = +r.value; setVal(r.dataset.k, v); const o = r.parentNode.querySelector('output'); if (o) o.textContent = fmtV(v, r.dataset.fmt);
      if (r.dataset.k === 'p:auto.int') { autoAgain(curImg(), v); }
      ST.drag = true; requestDraw(); clearTimeout(r._t); r._t = setTimeout(() => { ST.drag = false; requestDraw(); }, 250); return;
    }
    if (r.matches('input[type=color][data-kc]')) { setVal(r.dataset.kc, r.value); r.parentNode.style.background = r.value; requestDraw(); return; }
    if (r.id === 'ps-ttext') { const L = selText(); if (L) { L.t = r.value; requestDraw(); commitSoon('Ketik teks'); } }
  });
  P.addEventListener('change', e => {
    const r = e.target;
    if (r.matches('input[type=range][data-k]')) { ST.drag = false; commit(r.dataset.lbl || 'Ubah'); if (r.dataset.k === 'cr:ang') requestDraw(); requestDraw(); return; }
    if (r.matches('input[type=color][data-kc]')) { commit('Warna'); renderPanel(); return; }
    if (r.matches('input[type=checkbox][data-ck]')) { setVal(r.dataset.ck, r.checked ? 1 : 0); if (r.dataset.ck === 'p:match.keep') setVal(r.dataset.ck, r.checked); commit('Ubah'); renderPanel(); requestDraw(); return; }
    if (r.matches('select[data-sel]')) { setVal(r.dataset.sel, r.value); commit('Ubah'); requestDraw(); }
  });
  P.addEventListener('dblclick', e => {
    const row = e.target.closest('.ps-sl'); if (!row) return; const r = row.querySelector('input'); const d = +r.dataset.def;
    setVal(r.dataset.k, d); r.value = d; row.querySelector('output').textContent = fmtV(d, r.dataset.fmt); if (r.dataset.k === 'p:auto.int') autoAgain(curImg(), d); commit('Reset ' + (r.dataset.lbl || '')); requestDraw();
  });
  for (const id of ['#ps-file', '#ps-file1']) $(id).addEventListener('change', e => { const m = FILEMODE; FILEMODE = null; onFiles(e.target.files, m); });
  /* bandingkan (tahan) */
  const cmp = $('[data-hold="cmp"]');
  const on = e => { e.preventDefault(); ST.compare = true; cmp.classList.add('on'); requestDraw(); }, off = () => { if (!ST.compare) return; ST.compare = false; cmp.classList.remove('on'); requestDraw(); };
  cmp.addEventListener('pointerdown', on); cmp.addEventListener('pointerup', off); cmp.addEventListener('pointerleave', off); cmp.addEventListener('pointercancel', off);
  cmp.addEventListener('contextmenu', e => e.preventDefault());
  /* seret & lepas */
  A.addEventListener('dragover', e => { if (e.dataTransfer && Array.from(e.dataTransfer.types || []).includes('Files')) { e.preventDefault(); A.classList.add('ps-drop'); } });
  A.addEventListener('dragleave', e => { if (e.target === A || !A.contains(e.relatedTarget)) A.classList.remove('ps-drop'); });
  A.addEventListener('drop', e => { if (!e.dataTransfer || !e.dataTransfer.files.length) return; e.preventDefault(); A.classList.remove('ps-drop'); onFiles(e.dataTransfer.files, doc && doc.mode === 'collage' ? { t: 'add' } : null); });
  /* tempel dari clipboard */
  document.addEventListener('paste', e => { if (!A.isConnected || e.target.closest && e.target.closest('textarea,input')) return; const fs = Array.from(e.clipboardData && e.clipboardData.files || []); if (fs.length) onFiles(fs, doc && doc.mode === 'collage' ? { t: 'add' } : null); });
  /* keyboard */
  document.addEventListener('keydown', e => {
    if (!A.isConnected || A.offsetParent === null && !fullOn) return;
    const tg = e.target, typing = tg && (tg.tagName === 'TEXTAREA' || tg.tagName === 'INPUT' && tg.type === 'text' || tg.isContentEditable);
    const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
    if (mod && k === 'z' && !typing) { e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
    if (mod && k === 'y' && !typing) { e.preventDefault(); redo(); return; }
    if (mod && k === 'e') { e.preventDefault(); ACT.export(); return; }
    if (mod && k === 'o') { e.preventDefault(); ACT.open(); return; }
    if (typing) return;
    if ((k === 'delete' || k === 'backspace') && SEL.text) { e.preventDefault(); ACT.deltext(); return; }
    if (k === 'escape') { if ($('#ps-layer .ps-modal')) return; if (SEL.text || SEL.cell >= 0) { SEL.clear(); ST.swapFrom = -1; onSelChange(); } else if (fullOn) toggleFull(false); return; }
    if (k === '\\' && !ST.compare) { ST.compare = true; requestDraw(); }
    if (k === '0' && !mod) { V.fit = true; requestDraw(); }
  });
  document.addEventListener('keyup', e => { if (e.key === '\\' && ST.compare) { ST.compare = false; requestDraw(); } });
}

/* ---------- proyek ---------- */
async function openProjects() {
  await saveNow();
  const idx = (await DB.get('idx')) || [];
  const m = modal('<div class="ps-dh"><h3>' + ic('folder') + ' Proyek Saya</h3><button class="ps-ib" data-close>' + ic('x') + '</button></div><div class="ps-btn2"><button class="ps-go" data-a="newphoto">' + ic('img') + ' Edit Foto Baru</button><button class="ps-go" data-a="newcol">' + ic('grid') + ' Kolase Baru</button></div>' +
    (idx.length ? '<div class="ps-plist">' + idx.map(p => '<div class="ps-pi" data-id="' + p.id + '"><img alt="" data-tid="' + p.id + '"><div><b>' + esc(p.name) + '</b><small>' + (p.mode === 'collage' ? 'Kolase' : 'Foto') + ' \u00b7 ' + p.n + ' foto \u00b7 ' + new Date(p.updated).toLocaleString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) + '</small></div><button data-p="open">Buka</button><button class="ps-ib" data-p="ren" title="Ganti nama">' + ic('edit') + '</button><button class="ps-ib ps-danger" data-p="del" title="Hapus">' + ic('trash') + '</button></div>').join('') + '</div>' : '<p class="ps-note">Belum ada proyek. Semua hasil edit tersimpan otomatis di perangkat ini.</p>') +
    '<p class="ps-note">Proyek disimpan di browser perangkat ini (IndexedDB), tidak diunggah ke server.</p>', 'ps-wide');
  const urls = [];
  m.querySelectorAll('img[data-tid]').forEach(async im => { const b = await DB.get('t:' + im.dataset.tid); if (b) { const u = URL.createObjectURL(b); urls.push(u); im.src = u; } });
  m.onclose = () => urls.forEach(u => URL.revokeObjectURL(u));
  m.addEventListener('click', async e => {
    const a = e.target.closest('[data-a]'); if (a && ACT[a.dataset.a]) { closeModal(m); ACT[a.dataset.a](a); return; }
    const b = e.target.closest('[data-p]'); if (!b) return; const id = b.closest('[data-id]').dataset.id;
    if (b.dataset.p === 'open') { closeModal(m); await openProject(id); }
    else if (b.dataset.p === 'ren') { const it = idx.find(x => x.id === id); const n = prompt('Nama proyek:', it.name); if (n && n.trim()) { it.name = n.trim(); await DB.set('idx', idx); const s = await DB.get('p:' + id); if (s) { const d = JSON.parse(s); d.name = it.name; await DB.set('p:' + id, JSON.stringify(d)); } if (doc && doc.id === id) { doc.name = it.name; $('#ps-fname').textContent = doc.name; } b.closest('.ps-pi').querySelector('b').textContent = it.name; } }
    else if (b.dataset.p === 'del') { const ok = await ask('Hapus proyek?', 'Proyek dan fotonya akan dihapus dari perangkat ini.', [{ label: 'Batal', v: 0 }, { label: 'Hapus', v: 1, danger: true }]); if (ok) { await deleteProject(id); b.closest('.ps-pi').remove(); if (doc && doc.id === id) { doc = null; afterDocChange(true); renderRecent(); } } }
  });
}
async function renderRecent() {
  const box = $('#ps-recent'); if (!box) return;
  const idx = ((await DB.get('idx')) || []).slice(0, 6);
  box.innerHTML = idx.length ? '<b>Lanjutkan proyek</b><div>' + idx.map(p => '<button data-rid="' + p.id + '"><img alt="" data-tid="' + p.id + '"><span>' + esc(p.name) + '</span></button>').join('') + '</div>' : '';
  box.querySelectorAll('img[data-tid]').forEach(async im => { const b = await DB.get('t:' + im.dataset.tid); if (b) im.src = URL.createObjectURL(b); });
  box.onclick = e => { const b = e.target.closest('[data-rid]'); if (b) openProject(b.dataset.rid); };
}


/* ---- k-export.js ---- */
/* ================= SIMPAN UNTUK WEB (gaya "Save for Web Legacy") ================= */
const EXP_DEF = { fmt: 'jpeg', q: 90, prog: true, opt: true, blur: 0, sub: '420', trellis: false, colors: 128, dither: 0.8, method: 'perc', trans: true, wq: 85, wl: false, wsharp: true, wm: 6, rs: 'sharper', meta: 'copy', copy: '', author: '', view: '2up', zoom: 'fit', plat: '' };
const EXP_PRESETS = [
  ['JPEG Maksimum', { fmt: 'jpeg', q: 100, sub: '444' }], ['JPEG Sangat Tinggi', { fmt: 'jpeg', q: 90, sub: '420' }], ['JPEG Tinggi', { fmt: 'jpeg', q: 80 }], ['JPEG Sedang', { fmt: 'jpeg', q: 60 }], ['JPEG Rendah', { fmt: 'jpeg', q: 35 }],
  ['PNG-24', { fmt: 'png' }], ['PNG-8 256 Dithered', { fmt: 'png8', colors: 256, dither: 1 }], ['PNG-8 128 Dithered', { fmt: 'png8', colors: 128, dither: 0.8 }], ['PNG-8 64 Dithered', { fmt: 'png8', colors: 64, dither: 0.8 }], ['PNG-8 32 Tanpa Dither', { fmt: 'png8', colors: 32, dither: 0 }],
  ['WebP Tinggi', { fmt: 'webp', wq: 85, wl: false }], ['WebP Sedang', { fmt: 'webp', wq: 70, wl: false }], ['WebP Lossless', { fmt: 'webp', wl: true }]
];
const PLAT = [
  ['ig', 'Instagram', { fmt: 'jpeg', q: 92, sub: '420', prog: true }, 1080], ['ighd', 'Instagram HD', { fmt: 'jpeg', q: 92, sub: '420', prog: true }, 1440],
  ['tt', 'TikTok', { fmt: 'jpeg', q: 90, sub: '420' }, 1080], ['fb', 'Facebook', { fmt: 'jpeg', q: 88, sub: '420', prog: true }, 2048], ['th', 'Threads', { fmt: 'jpeg', q: 90 }, 1440],
  ['wa', 'WhatsApp', { fmt: 'jpeg', q: 85 }, 1600], ['web', 'Web / Blog', { fmt: 'webp', wq: 80, wl: false }, 1600], ['print', 'Cetak', { fmt: 'jpeg', q: 100, sub: '444', prog: false }, 0]
];
const SFW = { full: null, set: null, w: 0, h: 0, lock: true, srcKey: '', src: null, res: [], seq: 0, pan: [0.5, 0.5], m: null };
async function openExport() {
  busy(true, 'Menyiapkan gambar resolusi penuh\u2026');
  try { await raf(); SFW.full = await renderFinal(); }
  catch (e) { busy(false); toast('Gagal menyiapkan: ' + e.message, true); return; }
  busy(false);
  SFW.set = Object.assign({}, EXP_DEF, (await DB.get('expset')) || {});
  SFW.w = SFW.full.width; SFW.h = SFW.full.height; SFW.lock = true; SFW.srcKey = ''; SFW.res = []; SFW.pan = [0.5, 0.5];
  const m = modal('<div class="ps-dh"><h3>' + ic('dl') + ' Simpan untuk Web</h3><button class="ps-ib" data-close>' + ic('x') + '</button></div><div class="ps-sfw"><div class="ps-sfw-l"><div class="ps-sfw-bar" id="sfw-tabs"></div><div class="ps-sfw-view" id="sfw-view"></div><div class="ps-sfw-info" id="sfw-info"></div></div><div class="ps-sfw-r" id="sfw-ctl"></div></div>', 'ps-xl');
  m.dataset.sticky = '1'; SFW.m = m;
  m.onclose = () => { SFW.full = null; SFW.src = null; SFW.res = []; SFW.m = null; };
  renderSFW(); scheduleEnc();
  m.addEventListener('click', sfwClick);
  m.addEventListener('input', sfwInput);
  m.addEventListener('change', sfwInput);
  bindSfwPan(m);
}
const S_ = () => SFW.set;
function sfwCtl() {
  const s = S_(), f = s.fmt, ex = (l, k, min, max, st, fmt) => '<div class="ps-sl"><label><span>' + l + '</span><output>' + (fmt ? fmt(s[k]) : s[k]) + '</output></label><input type="range" min="' + min + '" max="' + max + '" step="' + st + '" value="' + s[k] + '" data-e="' + k + '"></div>';
  const ck = (l, k) => '<label class="ps-ck"><input type="checkbox" data-e="' + k + '"' + (s[k] ? ' checked' : '') + '> ' + l + '</label>';
  const slides = doc.mode === 'collage' ? (doc.col.slides || 1) : 1;
  let h = '<label class="ps-lb">Platform</label><div class="ps-seg ps-wrap">' + PLAT.map(p => chip(p[1], 'plat', 'data-v="' + p[0] + '"', s.plat === p[0])).join('') + '</div>';
  h += '<label class="ps-lb">Preset</label><select data-e="preset"><option value="">\u2014 Pilih preset \u2014</option>' + EXP_PRESETS.map((p, i) => '<option value="' + i + '">' + p[0] + '</option>').join('') + '</select>';
  h += '<div class="ps-seg">' + [['jpeg', 'JPEG'], ['png8', 'PNG-8'], ['png', 'PNG-24'], ['webp', 'WebP']].map(x => chip(x[1], 'efmt', 'data-v="' + x[0] + '"', f === x[0])).join('') + '</div>';
  if (f === 'jpeg') {
    h += ex('Kualitas', 'q', 0, 100, 1, v => v + ' \u2022 ' + (v >= 95 ? 'Maksimum' : v >= 80 ? 'Sangat Tinggi' : v >= 60 ? 'Tinggi' : v >= 30 ? 'Sedang' : 'Rendah'));
    h += '<div class="ps-ckrow">' + ck('Progresif', 'prog') + ck('Dioptimalkan', 'opt') + ck('Trellis (lebih kecil)', 'trellis') + '</div>';
    h += '<label class="ps-lb">Subsampling warna</label><div class="ps-seg">' + chip('4:2:0 (kecil)', 'esub', 'data-v="420"', s.sub === '420') + chip('4:4:4 (warna penuh)', 'esub', 'data-v="444"', s.sub === '444') + '</div>';
    h += ex('Blur halus', 'blur', 0, 100, 1);
  } else if (f === 'png8') {
    h += '<label class="ps-lb">Algoritma reduksi warna</label><select data-e="method"><option value="perc"' + (s.method === 'perc' ? ' selected' : '') + '>Perseptual</option><option value="sel"' + (s.method === 'sel' ? ' selected' : '') + '>Selektif</option><option value="adapt"' + (s.method === 'adapt' ? ' selected' : '') + '>Adaptif</option></select>';
    h += '<label class="ps-lb">Jumlah warna</label><select data-e="colors">' + [2, 4, 8, 16, 32, 64, 128, 256].map(n => '<option' + (n === s.colors ? ' selected' : '') + '>' + n + '</option>').join('') + '</select>';
    h += ex('Dither', 'dither', 0, 1, 0.01, v => Math.round(v * 100) + '%');
  } else if (f === 'webp') {
    h += ck('Lossless (tanpa kompresi rugi)', 'wl');
    if (!s.wl) h += ex('Kualitas', 'wq', 0, 100, 1) + ck('Sharp YUV (tepi warna tajam)', 'wsharp');
    h += ex('Usaha kompresi', 'wm', 0, 6, 1, v => v + (v >= 6 ? ' (terbaik)' : v <= 2 ? ' (cepat)' : ''));
  } else h += '<p class="ps-note">PNG-24: tanpa kehilangan kualitas, filter baris adaptif untuk ukuran file terkecil.</p>';
  h += '<label class="ps-lb">Ukuran gambar' + (slides > 1 ? ' (total ' + slides + ' slide)' : '') + '</label><div class="ps-size2"><input type="number" min="1" data-e="w" value="' + SFW.w + '"><button class="ps-ib' + (SFW.lock ? ' on' : '') + '" data-a="elock" title="Kunci rasio">' + ic('link') + '</button><input type="number" min="1" data-e="h" value="' + SFW.h + '"><input type="number" min="1" max="400" data-e="pct" value="' + Math.round(SFW.w / SFW.full.width * 1000) / 10 + '"><span>%</span></div>';
  h += '<select data-e="rs">' + [['sharper', 'Bicubic Sharper (perkecil)'], ['lanczos3', 'Lanczos (tajam)'], ['catmull', 'Bicubic'], ['smoother', 'Bicubic Smoother (perbesar)'], ['bilinear', 'Bilinear'], ['nearest', 'Nearest Neighbor']].map(o => '<option value="' + o[0] + '"' + (s.rs === o[0] ? ' selected' : '') + '>' + o[1] + '</option>').join('') + '</select>';
  h += '<label class="ps-lb">Metadata</label><select data-e="meta"><option value="none"' + (s.meta === 'none' ? ' selected' : '') + '>Tidak ada</option><option value="copy"' + (s.meta === 'copy' ? ' selected' : '') + '>Hak cipta</option><option value="all"' + (s.meta === 'all' ? ' selected' : '') + '>Hak cipta &amp; info kontak</option></select>';
  if (s.meta !== 'none') h += '<input type="text" data-e="copy" placeholder="\u00a9 Nama / brand Anda" value="' + esc(s.copy) + '">' + (s.meta === 'all' ? '<input type="text" data-e="author" placeholder="Pembuat / kontak (mis. @akun)" value="' + esc(s.author) + '">' : '');
  if (f === 'jpeg' || f === 'webp' && !s.wl) h += '<label class="ps-lb">Optimalkan ke ukuran file</label><div class="ps-size2"><input type="number" min="5" data-e="tkb" placeholder="mis. 500" value="' + (s.tkb || '') + '"><span>KB</span><button data-a="etarget">Optimalkan</button></div>';
  h += '<p class="ps-note">Profil warna: sRGB (standar web). Instagram menampilkan maks. lebar 1080\u20131440 px; unggah sesuai ukuran ini agar tidak dikompres ulang berlebihan.</p>';
  const share = !!(navigator.canShare && window.File);
  h += '<div class="ps-btn2 ps-sticky"><button data-close>Batal</button>' + (share ? '<button data-a="eshare">' + ic('share') + ' Bagikan</button>' : '') + '<button class="ps-go" data-a="esave">' + ic('dl') + ' Simpan</button></div>';
  return h;
}
function renderSFW() {
  const m = SFW.m; if (!m) return; const s = S_();
  m.querySelector('#sfw-tabs').innerHTML = [['orig', 'Asli'], ['opt', 'Optimal'], ['2up', '2-Up'], ['4up', '4-Up']].map(t => chip(t[1], 'eview', 'data-v="' + t[0] + '"', s.view === t[0])).join('') + '<span class="ps-sp"></span><select data-e="zoom">' + [['fit', 'Pas'], ['0.5', '50%'], ['1', '100%'], ['2', '200%']].map(z => '<option value="' + z[0] + '"' + (s.zoom === z[0] ? ' selected' : '') + '>' + z[1] + '</option>').join('') + '</select>';
  const st = m.querySelector('#sfw-ctl').scrollTop; m.querySelector('#sfw-ctl').innerHTML = sfwCtl(); m.querySelector('#sfw-ctl').scrollTop = st;
  buildPanes();
}
function variants() {
  const s = S_(), v = [{ orig: 1, label: 'Asli' }, { set: Object.assign({}, s), label: 'Optimal' }];
  if (s.view === '4up') {
    if (s.fmt === 'jpeg') { v.push({ set: Object.assign({}, s, { q: Math.max(5, Math.round(s.q * 0.75)) }) }, { set: Object.assign({}, s, { q: Math.max(5, Math.round(s.q * 0.5)) }) }); }
    else if (s.fmt === 'webp') { v.push({ set: Object.assign({}, s, { wl: false, wq: Math.max(5, Math.round((s.wl ? 90 : s.wq) * 0.75)) }) }, { set: Object.assign({}, s, { fmt: 'jpeg', q: 85 }) }); }
    else if (s.fmt === 'png8') { v.push({ set: Object.assign({}, s, { colors: Math.max(2, s.colors / 2) }) }, { set: Object.assign({}, s, { colors: Math.max(2, s.colors / 4) }) }); }
    else v.push({ set: Object.assign({}, s, { fmt: 'jpeg', q: 92 }) }, { set: Object.assign({}, s, { fmt: 'webp', wq: 90, wl: false }) });
  }
  return v;
}
function buildPanes() {
  const s = S_(), view = SFW.m.querySelector('#sfw-view'), vs = variants();
  const show = s.view === 'orig' ? [vs[0]] : s.view === 'opt' ? [vs[1]] : s.view === '2up' ? vs.slice(0, 2) : vs;
  view.className = 'ps-sfw-view n' + show.length;
  view.innerHTML = show.map((v, i) => '<div class="ps-pane" data-i="' + vs.indexOf(v) + '"><canvas></canvas><div class="ps-plabel">' + (v.orig ? 'Asli' : '\u2026') + '</div></div>').join('');
  SFW.vars = vs; drawPanes();
}
function setLabel(i, txt) { const p = SFW.m && SFW.m.querySelector('.ps-pane[data-i="' + i + '"] .ps-plabel'); if (p) p.innerHTML = txt; }
function drawPanes() {
  if (!SFW.m) return; const s = S_();
  SFW.m.querySelectorAll('.ps-pane').forEach(p => {
    const i = +p.dataset.i, v = SFW.vars[i], cv = p.querySelector('canvas'), r = p.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.max(1, Math.round(r.width * dpr)); cv.height = Math.max(1, Math.round(r.height * dpr));
    const x = cv.getContext('2d'); x.fillStyle = '#1b1e23'; x.fillRect(0, 0, cv.width, cv.height);
    const img = v.orig ? (SFW.src || SFW.full) : (SFW.res[i] && SFW.res[i].bmp);
    if (!img) return;
    const iw = SFW.w, ih = SFW.h, z = s.zoom === 'fit' ? Math.min(cv.width / iw, cv.height / ih) : +s.zoom * dpr;
    const dw = iw * z, dh = ih * z, ox = dw <= cv.width ? (cv.width - dw) / 2 : -(dw - cv.width) * SFW.pan[0], oy = dh <= cv.height ? (cv.height - dh) / 2 : -(dh - cv.height) * SFW.pan[1];
    x.imageSmoothingEnabled = z < 1; x.imageSmoothingQuality = 'high'; x.drawImage(img, ox, oy, dw, dh);
  });
  for (let i = 0; i < (SFW.vars || []).length; i++) {
    const v = SFW.vars[i];
    if (v.orig) setLabel(i, '<b>Asli</b><span>' + SFW.full.width + '\u00d7' + SFW.full.height + '</span>');
    else if (SFW.res[i] && SFW.res[i].size) setLabel(i, '<b>' + fmtName(v.set) + '</b><span>' + fmtKB(SFW.res[i].size) + ' \u00b7 ' + dlTime(SFW.res[i].size) + '</span>');
  }
  const info = SFW.m.querySelector('#sfw-info'), r1 = SFW.res[1];
  info.innerHTML = r1 && r1.size ? '<b>' + fmtName(S_()) + '</b> \u00b7 ' + SFW.w + '\u00d7' + SFW.h + ' px \u00b7 <b>' + fmtKB(r1.size) + '</b> \u00b7 ' + dlTime(r1.size) + (r1.ncol ? ' \u00b7 ' + r1.ncol + ' warna' : '') : 'Mengompres\u2026';
}
function fmtName(s) { return s.fmt === 'jpeg' ? 'JPEG ' + s.q : s.fmt === 'webp' ? (s.wl ? 'WebP Lossless' : 'WebP ' + s.wq) : s.fmt === 'png8' ? 'PNG-8 ' + s.colors + (s.dither ? ' dither' : '') : 'PNG-24'; }
function dlTime(b) { const t4 = b * 8 / 10e6, t3 = b * 8 / 1.5e6; const f = t => t < 1 ? t.toFixed(1).replace('.', ',') + ' dtk' : Math.round(t) + ' dtk'; return f(t4) + ' @ 4G \u00b7 ' + f(t3) + ' @ 3G'; }
/* ----- sumber yang sudah diubah ukuran ----- */
async function srcData() {
  const s = S_(), W = SFW.w, H = SFW.h, key = W + 'x' + H + s.rs;
  if (SFW.srcKey === key && SFW.srcData) return SFW.srcData;
  const f = SFW.full, fd = f.getContext('2d').getImageData(0, 0, f.width, f.height);
  let id;
  if (W === f.width && H === f.height) id = fd;
  else { const r = await wcall({ op: 'resize', data: fd.data, sw: f.width, sh: f.height, dw: W, dh: H, k: s.rs }, [fd.data.buffer]); id = new ImageData(r.data, W, H); }
  const c = mkCanvas(W, H); c.getContext('2d').putImageData(id, 0, 0);
  SFW.srcKey = key; SFW.srcData = id; SFW.src = c; return id;
}
async function encodeWith(id, s) {
  const meta = s.meta === 'none' ? null : { copy: s.copy, author: s.meta === 'all' ? s.author : '' };
  if (s.fmt === 'jpeg') {
    let buf;
    try {
      const mod = await loadMod(LIB.jpeg);
      buf = await mod.default(id, { quality: s.q, progressive: !!s.prog, baseline: false, optimize_coding: s.opt !== false, smoothing: s.blur | 0, auto_subsample: false, chroma_subsample: s.sub === '444' ? 1 : 2, separate_chroma_quality: false, chroma_quality: s.q, trellis_multipass: !!s.trellis, trellis_opt_zero: !!s.trellis, trellis_opt_table: !!s.trellis, trellis_loops: s.trellis ? 2 : 1, quant_table: 3 });
    } catch (e) { console.warn('mozjpeg gagal, pakai encoder browser', e); const c = mkCanvas(id.width, id.height); c.getContext('2d').putImageData(id, 0, 0); buf = await (await canvasBlob(c, 'image/jpeg', s.q / 100)).arrayBuffer(); }
    return new Blob([withExif(new Uint8Array(buf), meta)], { type: 'image/jpeg' });
  }
  if (s.fmt === 'webp') {
    try {
      const mod = await loadMod(LIB.webp);
      const buf = await mod.default(id, { quality: s.wl ? 100 : s.wq, lossless: s.wl ? 1 : 0, method: s.wm, use_sharp_yuv: s.wsharp ? 1 : 0, exact: s.wl ? 1 : 0 });
      return new Blob([buf], { type: 'image/webp' });
    } catch (e) { const c = mkCanvas(id.width, id.height); c.getContext('2d').putImageData(id, 0, 0); return canvasBlob(c, 'image/webp', s.wl ? 1 : s.wq / 100); }
  }
  const pm = meta ? { Copyright: meta.copy, Author: meta.author, Software: 'Mengetik Photo Studio' } : null;
  if (s.fmt === 'png8') { const d = new Uint8ClampedArray(id.data); const r = await wcall({ op: 'png8', w: id.width, h: id.height, data: d, colors: +s.colors, dither: +s.dither, method: s.method, trans: s.trans, meta: pm }, [d.buffer]); const b = new Blob([r.data], { type: 'image/png' }); b.ncol = r.ncol; return b; }
  const d = new Uint8ClampedArray(id.data); let alpha = false; for (let i = 3; i < d.length; i += 4) if (d[i] < 255) { alpha = true; break; }
  const r = await wcall({ op: 'png', w: id.width, h: id.height, rgba: d, alpha, meta: pm }, [d.buffer]); return new Blob([r.data], { type: 'image/png' });
}
/* EXIF minimal: Artist, Copyright, Software */
function withExif(jpg, meta) {
  if (!meta || !(meta.copy || meta.author) || jpg[0] !== 0xff || jpg[1] !== 0xd8) return jpg;
  const ents = [[0x0131, 'Mengetik Photo Studio']]; if (meta.author) ents.push([0x013b, meta.author]); if (meta.copy) ents.push([0x8298, meta.copy]);
  ents.sort((a, b) => a[0] - b[0]);
  const enc = s => { const a = Array.from(String(s).replace(/[^\x20-\x7e\u00a9]/g, '?'), c => c.charCodeAt(0) & 255); a.push(0); return a; };
  const n = ents.length, ifdLen = 2 + n * 12 + 4; let dataOff = 8 + ifdLen; const tiff = [0x49, 0x49, 0x2a, 0, 8, 0, 0, 0], data = [];
  const u16 = v => [v & 255, (v >> 8) & 255], u32 = v => [v & 255, (v >> 8) & 255, (v >> 16) & 255, (v >>> 24) & 255];
  const ifd = [...u16(n)];
  for (const [tag, val] of ents) { const b = enc(val); ifd.push(...u16(tag), ...u16(2), ...u32(b.length)); if (b.length <= 4) { while (b.length < 4) b.push(0); ifd.push(...b); } else { ifd.push(...u32(dataOff + data.length)); data.push(...b); if (data.length & 1) data.push(0); } }
  ifd.push(0, 0, 0, 0);
  const body = [0x45, 0x78, 0x69, 0x66, 0, 0, ...tiff, ...ifd, ...data], len = body.length + 2;
  const seg = new Uint8Array([0xff, 0xe1, (len >> 8) & 255, len & 255, ...body]);
  let at = 2; if (jpg[2] === 0xff && jpg[3] === 0xe0) at = 4 + (jpg[4] << 8 | jpg[5]);
  const out = new Uint8Array(jpg.length + seg.length); out.set(jpg.subarray(0, at)); out.set(seg, at); out.set(jpg.subarray(at), at + seg.length); return out;
}
let encT = 0;
function scheduleEnc() { clearTimeout(encT); SFW.seq++; SFW.res = []; if (SFW.m) drawPanes(); encT = setTimeout(runEnc, 280); const i = SFW.m && SFW.m.querySelector('#sfw-info'); if (i) i.textContent = 'Mengompres\u2026'; }
async function runEnc() {
  if (!SFW.m) return; const seq = ++SFW.seq;
  try {
    const id = await srcData(); if (seq !== SFW.seq) return;
    drawPanes();
    const vs = SFW.vars;
    for (let i = 1; i < vs.length; i++) {
      const b = await encodeWith(id, vs[i].set); if (seq !== SFW.seq || !SFW.m) return;
      let bmp = null; try { bmp = await createImageBitmap(b); } catch (e) {}
      SFW.res[i] = { blob: b, size: b.size, bmp, ncol: b.ncol }; drawPanes();
    }
  } catch (e) { console.error(e); toast('Gagal mengompres: ' + e.message, true); }
}
function sfwSave() { DB.set('expset', S_()); }
function sfwClick(e) {
  const b = e.target.closest('[data-a]'); if (!b) return; const s = S_(), a = b.dataset.a;
  if (a === 'eview') { s.view = b.dataset.v; renderSFW(); scheduleEnc(); }
  else if (a === 'efmt') { s.fmt = b.dataset.v; s.plat = ''; renderSFW(); scheduleEnc(); }
  else if (a === 'esub') { s.sub = b.dataset.v; renderSFW(); scheduleEnc(); }
  else if (a === 'elock') { SFW.lock = !SFW.lock; b.classList.toggle('on', SFW.lock); }
  else if (a === 'plat') {
    const p = PLAT.find(x => x[0] === b.dataset.v); Object.assign(s, p[2]); s.plat = p[0];
    const f = SFW.full, slides = doc.mode === 'collage' ? doc.col.slides || 1 : 1, maxW = p[3] * slides;
    if (p[3] && f.width > maxW) { SFW.w = maxW; SFW.h = Math.round(f.height * maxW / f.width); } else { SFW.w = f.width; SFW.h = f.height; }
    renderSFW(); scheduleEnc();
  }
  else if (a === 'etarget') targetSize();
  else if (a === 'esave') doSave(false);
  else if (a === 'eshare') doSave(true);
}
function sfwInput(e) {
  const r = e.target, k = r.dataset && r.dataset.e; if (!k) return; const s = S_(), live = e.type === 'input';
  if (k === 'preset') { if (r.value === '' || e.type !== 'change') return; Object.assign(s, EXP_PRESETS[+r.value][1]); s.plat = ''; renderSFW(); scheduleEnc(); return; }
  if (k === 'zoom') { s.zoom = r.value; SFW.pan = [0.5, 0.5]; drawPanes(); return; }
  if (k === 'w' || k === 'h' || k === 'pct') {
    if (live) return; const f = SFW.full, v = Math.max(1, +r.value || 1);
    if (k === 'pct') { SFW.w = Math.max(1, Math.round(f.width * v / 100)); SFW.h = Math.max(1, Math.round(f.height * v / 100)); }
    else if (k === 'w') { SFW.w = Math.min(16384, v); if (SFW.lock) SFW.h = Math.max(1, Math.round(SFW.w * f.height / f.width)); }
    else { SFW.h = Math.min(16384, v); if (SFW.lock) SFW.w = Math.max(1, Math.round(SFW.h * f.width / f.height)); }
    s.plat = ''; renderSFW(); scheduleEnc(); return;
  }
  if (r.type === 'checkbox') s[k] = r.checked;
  else if (r.type === 'range') { s[k] = +r.value; const o = r.parentNode.querySelector('output'); if (o) o.textContent = k === 'dither' ? Math.round(s[k] * 100) + '%' : s[k]; if (live) { scheduleEnc(); return; } }
  else if (k === 'tkb') { s.tkb = +r.value || 0; return; }
  else s[k] = r.tagName === 'SELECT' && /^\d+$/.test(r.value) && k === 'colors' ? +r.value : r.value;
  if (e.type === 'change') { if (r.type !== 'range') s.plat = s.plat; if (r.type === 'checkbox' || r.tagName === 'SELECT') renderSFW(); scheduleEnc(); }
}
function bindSfwPan(m) {
  let d = null;
  m.addEventListener('pointerdown', e => { const p = e.target.closest('.ps-pane'); if (!p || S_().zoom === 'fit') return; d = { x: e.clientX, y: e.clientY, p0: SFW.pan.slice(), r: p.getBoundingClientRect() }; p.setPointerCapture(e.pointerId); });
  m.addEventListener('pointermove', e => { if (!d) return; const z = +S_().zoom, iw = SFW.w * z, ih = SFW.h * z; SFW.pan[0] = clamp(d.p0[0] - (e.clientX - d.x) / Math.max(1, iw - d.r.width), 0, 1); SFW.pan[1] = clamp(d.p0[1] - (e.clientY - d.y) / Math.max(1, ih - d.r.height), 0, 1); drawPanes(); });
  m.addEventListener('pointerup', () => { d = null; });
  window.addEventListener('resize', () => { if (SFW.m) drawPanes(); });
}
async function targetSize() {
  const s = S_(), t = (s.tkb || 0) * 1024; if (!t) { toast('Isi target ukuran dalam KB'); return; }
  busy(true, 'Mencari kualitas terbaik \u2264 ' + s.tkb + ' KB\u2026');
  try {
    const id = await srcData(), key = s.fmt === 'webp' ? 'wq' : 'q'; let lo = 5, hi = 100, best = null;
    if (s.fmt === 'webp') s.wl = false;
    for (let i = 0; i < 7; i++) { const mid = Math.round((lo + hi) / 2); const b = await encodeWith(id, Object.assign({}, s, { [key]: mid })); if (b.size <= t) { best = mid; lo = mid + 1; } else hi = mid - 1; if (lo > hi) break; }
    if (best == null) { toast('Tidak tercapai pada ukuran ini. Kecilkan dimensi gambar.', true); best = 5; }
    s[key] = best; renderSFW(); scheduleEnc(); toast('Kualitas diatur ke ' + best);
  } finally { busy(false); }
}
function fileBase() { return (doc.name || 'foto').replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').toLowerCase() || 'foto'; }
async function doSave(share) {
  const s = S_(); sfwSave();
  busy(true, 'Menyimpan\u2026');
  try {
    const id = await srcData(), ext = s.fmt === 'jpeg' ? 'jpg' : s.fmt === 'webp' ? 'webp' : 'png';
    const slides = doc.mode === 'collage' ? doc.col.slides || 1 : 1, files = [];
    if (slides > 1) {
      const c = SFW.src, sw = Math.floor(c.width / slides);
      for (let i = 0; i < slides; i++) { busy(true, 'Slide ' + (i + 1) + '/' + slides + '\u2026'); const x0 = Math.round(i * c.width / slides), x1 = Math.round((i + 1) * c.width / slides); const t = mkCanvas(x1 - x0, c.height); t.getContext('2d').drawImage(c, -x0, 0); const b = await encodeWith(t.getContext('2d').getImageData(0, 0, t.width, t.height), s); files.push(new File([b], fileBase() + '-' + (i + 1) + '.' + ext, { type: b.type })); void sw; }
    } else {
      const r = SFW.res[1]; const b = r && r.blob && r.size ? r.blob : await encodeWith(id, s); files.push(new File([b], fileBase() + '.' + ext, { type: b.type }));
    }
    if (share) {
      if (navigator.canShare && navigator.canShare({ files })) { busy(false); try { await navigator.share({ files, title: doc.name }); } catch (e) { if (e.name !== 'AbortError') toast('Gagal berbagi: ' + e.message); } return; }
      toast('Perangkat ini tidak mendukung berbagi file, file diunduh.');
    }
    if (files.length === 1) download(files[0], files[0].name);
    else {
      try { const JSZip = await loadLib(LIB.zip, 'JSZip'); const z = new JSZip(); files.forEach(f => z.file(f.name, f)); download(await z.generateAsync({ type: 'blob' }), fileBase() + '-carousel.zip'); }
      catch (e) { for (const f of files) { download(f, f.name); await sleep(400); } }
    }
    toast('Tersimpan: ' + files.map(f => f.name).join(', ') + ' (' + fmtKB(files.reduce((a, f) => a + f.size, 0)) + ')', true);
  } catch (e) { toast('Gagal menyimpan: ' + e.message, true); }
  finally { busy(false); }
}


/* ---- x-ai.js ---- */
/* ================= V2.0 AI MASKER OBJEK (di perangkat: MediaPipe + U2-Net ONNX) =================
   Dipakai untuk: efek latar (shutter/zoom/bokeh), teks di belakang objek, template 3D pop-out.
   Model diunduh sekali lalu disimpan di Cache Storage (dipakai bersama Raw Edit & Video Studio). */
const AI_VER = '0.10.35', ORT_VER = '1.22.0';
const AI_LIB = ['https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@' + AI_VER, 'https://unpkg.com/@mediapipe/tasks-vision@' + AI_VER];
const ORT_LIB = ['https://cdn.jsdelivr.net/npm/onnxruntime-web@' + ORT_VER + '/dist/', 'https://unpkg.com/onnxruntime-web@' + ORT_VER + '/dist/'];
const AI_URL = {
  seg: ['https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/latest/selfie_multiclass_256x256.tflite', 'https://cdn.jsdelivr.net/gh/mengetikid/mengetik-raw@main/models/selfie_multiclass_256x256.tflite'],
  inter: ['https://storage.googleapis.com/mediapipe-models/interactive_segmenter/magic_touch/float32/latest/magic_touch.tflite', 'https://cdn.jsdelivr.net/gh/mengetikid/mengetik-video@main/models/magic_touch.tflite'],
  u2: ['https://cdn.jsdelivr.net/npm/@rmbg/model-u2netp@0.0.1/u2netp.onnx', 'https://unpkg.com/@rmbg/model-u2netp@0.0.1/u2netp.onnx']
};
const AIV = { lib: null, fs: null, seg: null, inter: null, ort: null, u2: null, segP: null, interP: null, ortP: null, u2P: null, interFail: false, u2q: null };
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
let AI_BUSY = 0; /* >0 saat dipanggil dari aksi pengguna: tampilkan progres */
function aiNote(t, pct) { if (AI_BUSY) busy(true, t, pct); }
async function aiFetch(urls, label) {
  let cache = null; try { cache = window.caches ? await caches.open('mengetik-ai-v1') : null; } catch (e) { cache = null; }
  if (cache) { try { const hit = await cache.match(urls[0]); if (hit) return new Uint8Array(await hit.arrayBuffer()); } catch (e) {} }
  let lastErr = null;
  for (const u of urls) {
    try {
      const r = await fetch(u, { mode: 'cors' }); if (!r.ok) throw new Error('HTTP ' + r.status);
      const tot = +r.headers.get('content-length') || 0, rd = r.body && r.body.getReader ? r.body.getReader() : null; let buf = null;
      if (rd && tot) { const out = new Uint8Array(tot); let got = 0; for (;;) { const { done, value } = await rd.read(); if (done) break; if (got + value.length > out.length) { buf = null; break; } out.set(value, got); got += value.length; aiNote('Mengunduh AI ' + label + '\u2026 ' + Math.round(got / tot * 100) + '%', got / tot * 100); } if (got === tot) buf = out; }
      if (!buf) buf = new Uint8Array(await (await fetch(u, { mode: 'cors' })).arrayBuffer());
      if (cache) { try { await cache.put(urls[0], new Response(buf.slice(), { headers: { 'Content-Type': 'application/octet-stream' } })); } catch (e) {} }
      return buf;
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error('Unduh model AI gagal. Periksa koneksi internet.');
}
async function aiLib() {
  if (AIV.lib) return AIV.lib; let lib = null, base = '';
  for (const b of AI_LIB) { try { lib = await import(b + '/vision_bundle.mjs'); base = b; break; } catch (e) { console.warn('mp lib', e); } }
  if (!lib) throw new Error('Pustaka AI tidak termuat. Periksa koneksi internet.');
  AIV.fs = await lib.FilesetResolver.forVisionTasks(base + '/wasm'); AIV.lib = lib; return lib;
}
function aiLoadSeg() {
  if (AIV.seg) return Promise.resolve(true); if (AIV.segP) return AIV.segP;
  AIV.segP = (async () => {
    aiNote('Menyiapkan AI di perangkat\u2026', 5); const lib = await aiLib();
    const buf = await aiFetch(AI_URL.seg, 'deteksi orang');
    AIV.seg = await lib.ImageSegmenter.createFromOptions(AIV.fs, { baseOptions: { modelAssetBuffer: buf, delegate: 'CPU' }, runningMode: 'IMAGE', outputCategoryMask: false, outputConfidenceMasks: true });
    return true;
  })();
  AIV.segP.catch(e => { AIV.segP = null; console.warn('seg', e); });
  return AIV.segP;
}
function aiLoadInter() {
  if (AIV.inter) return Promise.resolve(true); if (AIV.interFail) return Promise.reject(new Error('inter')); if (AIV.interP) return AIV.interP;
  AIV.interP = (async () => {
    const lib = await aiLib(); const buf = await aiFetch(AI_URL.inter, 'pilih objek');
    AIV.inter = await lib.InteractiveSegmenter.createFromOptions(AIV.fs, { baseOptions: { modelAssetBuffer: buf, delegate: 'CPU' }, outputCategoryMask: false, outputConfidenceMasks: true }); return true;
  })();
  AIV.interP.catch(e => { AIV.interP = null; AIV.inter = null; AIV.interFail = true; console.warn('inter', e); });
  return AIV.interP;
}
async function aiLoadORT() {
  if (AIV.ort) return AIV.ort; if (AIV.ortP) return AIV.ortP;
  AIV.ortP = (async () => {
    let ort = null, base = '';
    for (const b of ORT_LIB) { try { ort = await import(b + 'ort.wasm.min.mjs'); base = b; break; } catch (e) { console.warn('ort', e); } }
    if (!ort) throw new Error('Mesin AI (ONNX) tidak termuat. Periksa koneksi internet.');
    ort.env.wasm.wasmPaths = base; ort.env.wasm.numThreads = self.crossOriginIsolated ? Math.min(4, navigator.hardwareConcurrency || 2) : 1;
    AIV.ort = ort; return ort;
  })();
  AIV.ortP.catch(() => { AIV.ortP = null; });
  return AIV.ortP;
}
function aiLoadU2() {
  if (AIV.u2) return Promise.resolve(true); if (AIV.u2P) return AIV.u2P;
  AIV.u2P = (async () => { aiNote('Menyiapkan AI deteksi objek\u2026', 8); const ort = await aiLoadORT(); const buf = await aiFetch(AI_URL.u2, 'deteksi objek'); AIV.u2 = await ort.InferenceSession.create(buf, { executionProviders: ['wasm'] }); return true; })();
  AIV.u2P.catch(e => { AIV.u2P = null; console.warn('u2', e); });
  return AIV.u2P;
}
function u2Run(feeds) { const pr = (AIV.u2q || Promise.resolve()).then(() => AIV.u2.run(feeds)); AIV.u2q = pr.catch(() => {}); return pr; }

/* ---------- utilitas raster ---------- */
function aiBox(a, w, h, r, out) {
  out = out || new Float32Array(w * h); const I = new Float64Array((w + 1) * (h + 1));
  for (let y = 0; y < h; y++) { let row = 0; for (let x = 0; x < w; x++) { row += a[y * w + x]; I[(y + 1) * (w + 1) + x + 1] = I[y * (w + 1) + x + 1] + row; } }
  for (let y = 0; y < h; y++) { const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1); for (let x = 0; x < w; x++) { const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1); out[y * w + x] = (I[y1 * (w + 1) + x1] - I[y0 * (w + 1) + x1] - I[y1 * (w + 1) + x0] + I[y0 * (w + 1) + x0]) / ((x1 - x0) * (y1 - y0)); } }
  return out;
}
function aiBlur(a, w, h, r) { if (r < 1) return a; const b = aiBox(a, w, h, r); return aiBox(b, w, h, r, a); }
function aiGuided(I, p, w, h, r, eps) {
  const n = w * h, Ip = new Float32Array(n), II = new Float32Array(n);
  for (let i = 0; i < n; i++) { Ip[i] = I[i] * p[i]; II[i] = I[i] * I[i]; }
  const mI = aiBox(I, w, h, r), mp = aiBox(p, w, h, r), mIp = aiBox(Ip, w, h, r), mII = aiBox(II, w, h, r), a = new Float32Array(n), b = new Float32Array(n);
  for (let i = 0; i < n; i++) { const v = mII[i] - mI[i] * mI[i], cv = mIp[i] - mI[i] * mp[i]; a[i] = cv / (v + eps); b[i] = mp[i] - a[i] * mI[i]; }
  const ma = aiBox(a, w, h, r), mb = aiBox(b, w, h, r), q = new Float32Array(n);
  for (let i = 0; i < n; i++) q[i] = clamp(ma[i] * I[i] + mb[i], 0, 1);
  return q;
}
function aiResample(src, sw, sh, w, h) {
  const o = new Float32Array(w * h);
  for (let y = 0; y < h; y++) { const fy = clamp((y + 0.5) / h * sh - 0.5, 0, sh - 1), y0 = Math.floor(fy), y1 = Math.min(sh - 1, y0 + 1), ty = fy - y0;
    for (let x = 0; x < w; x++) { const fx = clamp((x + 0.5) / w * sw - 0.5, 0, sw - 1), x0 = Math.floor(fx), x1 = Math.min(sw - 1, x0 + 1), tx = fx - x0;
      o[y * w + x] = (src[y0 * sw + x0] * (1 - tx) + src[y0 * sw + x1] * tx) * (1 - ty) + (src[y1 * sw + x0] * (1 - tx) + src[y1 * sw + x1] * tx) * ty; } }
  return o;
}
/* komponen terhubung (nilai > thr) */
function aiComps(m, w, h, thr) {
  const n = w * h, lab = new Int32Array(n), q = new Int32Array(n), comps = []; let id = 0;
  for (let i = 0; i < n; i++) { if (m[i] <= thr || lab[i]) continue; id++; let h0 = 0, t0 = 1, sx = 0, sy = 0; q[0] = i; lab[i] = id;
    while (h0 < t0) { const j = q[h0++], x = j % w, y = (j / w) | 0; sx += x; sy += y; for (const k of [x > 0 ? j - 1 : -1, x < w - 1 ? j + 1 : -1, y > 0 ? j - w : -1, y < h - 1 ? j + w : -1]) if (k >= 0 && !lab[k] && m[k] > thr) { lab[k] = id; q[t0++] = k; } }
    comps.push({ id, n: t0, cx: sx / t0 / w, cy: sy / t0 / h }); }
  return { lab, comps };
}

/* ---------- entri kerja AI per foto (sumber, sebelum crop) ---------- */
const AIE = new Map();
function aiKey(img) { return img.baseKey || img.srcKey; }
function aiEntry(img) {
  const k = aiKey(img); let e = AIE.get(k); if (e) return e;
  const rt = rtOf(img), src = rt.prev || rt.base; if (!src) return null;
  const L = 1280, s = Math.min(1, L / Math.max(src.width, src.height)), w = Math.max(16, Math.round(src.width * s)), h = Math.max(16, Math.round(src.height * s));
  const c = mkCanvas(w, h), x = c.getContext('2d', { willReadFrequently: true }); x.imageSmoothingQuality = 'high'; x.drawImage(src, 0, 0, w, h);
  const id = x.getImageData(0, 0, w, h), px = id.data, n = w * h, G = new Float32Array(n), Lk = new Float32Array(n);
  for (let i = 0; i < n; i++) { G[i] = (0.299 * px[i * 4] + 0.587 * px[i * 4 + 1] + 0.114 * px[i * 4 + 2]) / 255; Lk[i] = Math.cbrt(Math.max(1e-6, 0.2126 * s2l(px[i * 4] / 255) + 0.7152 * s2l(px[i * 4 + 1] / 255) + 0.0722 * s2l(px[i * 4 + 2] / 255))); }
  e = { key: k, w, h, px, G, L: Lk, img: id, cv: c, raw: {} };
  AIE.set(k, e); while (AIE.size > 6) AIE.delete(AIE.keys().next().value);
  return e;
}
/* orang (MediaPipe multiclass, gambar penuh + 4 ubin agar orang kecil & tepi rambut tetap detail) */
async function aiPersonRaw(e) {
  if (e.raw.pr) return e.raw.pr; await aiLoadSeg();
  const W = e.w, H = e.h, n = W * H, acc = new Float32Array(n), ws = new Float32Array(n);
  const run = (rx, ry, rw, rh, wt) => {
    let src = e.cv; if (rx || ry || rw !== W || rh !== H) { src = mkCanvas(rw, rh); src.getContext('2d').drawImage(e.cv, rx, ry, rw, rh, 0, 0, rw, rh); }
    const res = AIV.seg.segment(src), cm = res.confidenceMasks || []; const mk = cm[0]; if (!mk) return;
    const f = mk.getAsFloat32Array(), arr = mk.width === rw && mk.height === rh ? f : aiResample(f, mk.width, mk.height, rw, rh);
    const fth = (v, n0, lo, hi) => { const ee = Math.max(4, n0 * 0.14); let a = 1; if (!lo) a *= Math.min(1, v / ee); if (!hi) a *= Math.min(1, (n0 - 1 - v) / ee); return Math.max(0, a); };
    for (let y = 0; y < rh; y++) for (let x = 0; x < rw; x++) { const gi = (ry + y) * W + rx + x, w0 = wt * fth(x, rw, rx === 0, rx + rw >= W) * fth(y, rh, ry === 0, ry + rh >= H); acc[gi] += (1 - arr[y * rw + x]) * w0; ws[gi] += w0; }
    cm.forEach(m => { try { m.close(); } catch (er) {} });
  };
  run(0, 0, W, H, 0.55);
  const full = new Float32Array(n); for (let i = 0; i < n; i++) full[i] = acc[i] / Math.max(1e-4, ws[i]);
  if (Math.max(W, H) >= 500) { const tw = Math.round(W * 0.62), th = Math.round(H * 0.62); for (const q of [[0, 0], [W - tw, 0], [0, H - th], [W - tw, H - th]]) run(q[0], q[1], tw, th, 1); }
  const P = new Float32Array(n); for (let i = 0; i < n; i++) P[i] = acc[i] / Math.max(1e-4, ws[i]);
  /* ubin hanya memperhalus tepi, tidak boleh 'menemukan' orang baru di tekstur */
  const gr = Math.max(3, Math.round(Math.max(W, H) / 45)), near = aiBox(aiBox(full, W, H, gr), W, H, gr);
  for (let i = 0; i < n; i++) P[i] *= sstep(0.004, 0.035, Math.max(near[i], full[i]));
  /* validasi: buang bagian 'orang' tanpa tepi tegas (gunung, kabut, rumput) */
  const Lb = aiBlur(Float32Array.from(e.L), W, H, 2), { lab, comps } = aiComps(P, W, H, 0.5), drop = new Uint8Array(comps.length + 1);
  const bsum = new Float64Array(comps.length + 1), bn = new Float64Array(comps.length + 1);
  for (let y = 2; y < H - 2; y++) for (let x = 2; x < W - 2; x++) { const j = y * W + x, id = lab[j]; if (!id) continue; if (lab[j - 1] === id && lab[j + 1] === id && lab[j - W] === id && lab[j + W] === id) continue; bsum[id] += Math.abs(Lb[j + 2] - Lb[j - 2]) + Math.abs(Lb[j + 2 * W] - Lb[j - 2 * W]); bn[id]++; }
  for (const c of comps) { const edge = bn[c.id] ? bsum[c.id] / bn[c.id] : 0, area = c.n / n; if (edge < 0.03 || (edge < 0.07 && area > 0.2) || c.n < n * 0.0004) drop[c.id] = 1; }
  for (let i = 0; i < n; i++) if (lab[i] && drop[lab[i]]) P[i] = 0;
  for (let i = 0; i < n; i++) if (!lab[i] && P[i] > 0) { /* ekor lembut di sekitar komponen yang dibuang */ }
  e.raw.pr = P; return P;
}
async function aiPerson(e) {
  if (e.raw.pg) return e.raw.pg; const P = await aiPersonRaw(e), W = e.w, H = e.h;
  const g = aiGuided(e.G, P, W, H, Math.max(3, Math.round(Math.max(W, H) / 110)), 2e-4);
  for (let i = 0; i < g.length; i++) g[i] = sstep(0.22, 0.78, g[i]);
  e.raw.pg = g; return g;
}
/* objek utama (saliency U2-Net) */
async function aiSalient(e) {
  if (e.raw.sal) return e.raw.sal; await aiLoadU2();
  const ort = AIV.ort, W = e.w, H = e.h, px = e.px, S = 320, inp = new Float32Array(3 * S * S), mean = [0.485, 0.456, 0.406], std = [0.229, 0.224, 0.225];
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) { const sx = Math.min(W - 1, Math.floor((x + 0.5) / S * W)), sy = Math.min(H - 1, Math.floor((y + 0.5) / S * H)), o = (sy * W + sx) * 4; for (let c = 0; c < 3; c++) inp[c * S * S + y * S + x] = (px[o + c] / 255 - mean[c]) / std[c]; }
  const name = AIV.u2.inputNames[0], out = await u2Run({ [name]: new ort.Tensor('float32', inp, [1, 3, S, S]) }), d = out[AIV.u2.outputNames[0]].data;
  let mn = 1e9, mx = -1e9; for (let i = 0; i < S * S; i++) { if (d[i] < mn) mn = d[i]; if (d[i] > mx) mx = d[i]; }
  const nm = new Float32Array(S * S); for (let i = 0; i < nm.length; i++) nm[i] = (d[i] - mn) / Math.max(1e-6, mx - mn);
  let m = aiResample(nm, S, S, W, H); for (let i = 0; i < m.length; i++) m[i] = sstep(0.25, 0.7, m[i]);
  m = aiGuided(e.G, m, W, H, Math.max(3, Math.round(Math.max(W, H) / 130)), 4e-4);
  for (let i = 0; i < m.length; i++) m[i] = sstep(0.2, 0.8, m[i]);
  /* simpan hanya komponen besar (buang bercak kecil jauh dari objek utama) */
  const { lab, comps } = aiComps(m, W, H, 0.5); if (comps.length > 1) { const big = Math.max(...comps.map(c => c.n)); const keep = new Uint8Array(comps.length + 1); comps.forEach(c => { if (c.n >= big * 0.12) keep[c.id] = 1; }); const kf = new Float32Array(m.length); for (let i = 0; i < m.length; i++) kf[i] = lab[i] && keep[lab[i]] ? 1 : 0; aiBlur(kf, W, H, Math.max(2, Math.round(W / 90))); for (let i = 0; i < m.length; i++) if (!(lab[i] && keep[lab[i]])) m[i] *= sstep(0.05, 0.5, kf[i]); }
  e.raw.sal = m; return m;
}
/* subjek otomatis = orang + objek menonjol yang menempel/di dekat orang; bila tidak ada orang = objek menonjol */
async function aiSubject(e) {
  if (e.raw.subj) return e.raw.subj; const W = e.w, H = e.h, n = W * H;
  let per = null; try { per = await aiPerson(e); } catch (er) { console.warn(er); }
  let sal = null; try { sal = await aiSalient(e); } catch (er) { console.warn(er); }
  let pa = 0; if (per) for (let i = 0; i < n; i++) pa += per[i];
  let m;
  if (per && pa > n * 0.004) {
    m = Float32Array.from(per);
    if (sal) { const pb = new Float32Array(n); for (let i = 0; i < n; i++) pb[i] = per[i] > 0.5 ? 1 : 0; const near = aiBlur(pb, W, H, Math.max(4, Math.round(Math.max(W, H) / 22))); for (let i = 0; i < n; i++) { const v = sal[i] * sstep(0.02, 0.2, near[i]); if (v > m[i]) m[i] = v; } }
  } else m = sal ? Float32Array.from(sal) : new Float32Array(n);
  e.raw.subj = m; return m;
}
/* pilih objek dengan ketukan: orang (komponen) atau saliency di jendela sekitar titik */
async function aiObjSal(e, p) {
  await aiLoadU2(); const ort = AIV.ort, W = e.w, H = e.h, px = e.px, S = 320;
  const once = async frac => {
    const win = Math.round(Math.min(Math.max(W, H) * frac, Math.min(W, H) * (frac > 0.9 ? 1 : 0.98))), wx = Math.min(win, W), wy = Math.min(win, H);
    const x0 = clamp(Math.round(p[0] * W - wx / 2), 0, W - wx), y0 = clamp(Math.round(p[1] * H - wy / 2), 0, H - wy);
    const inp = new Float32Array(3 * S * S), mean = [0.485, 0.456, 0.406], std = [0.229, 0.224, 0.225];
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) { const sx = Math.min(W - 1, x0 + Math.floor((x + 0.5) / S * wx)), sy = Math.min(H - 1, y0 + Math.floor((y + 0.5) / S * wy)), o = (sy * W + sx) * 4; for (let c = 0; c < 3; c++) inp[c * S * S + y * S + x] = (px[o + c] / 255 - mean[c]) / std[c]; }
    const name = AIV.u2.inputNames[0], out = await u2Run({ [name]: new ort.Tensor('float32', inp, [1, 3, S, S]) }), d = out[AIV.u2.outputNames[0]].data;
    let mn = 1e9, mx = -1e9; for (let i = 0; i < S * S; i++) { if (d[i] < mn) mn = d[i]; if (d[i] > mx) mx = d[i]; }
    const sal = new Float32Array(S * S); for (let i = 0; i < sal.length; i++) sal[i] = (d[i] - mn) / Math.max(1e-6, mx - mn);
    const tx = Math.round((p[0] * W - x0) / wx * S), ty = Math.round((p[1] * H - y0) / wy * S); let s0 = -1, bd = 1e9; const rr = 16;
    for (let y = Math.max(0, ty - rr); y <= Math.min(S - 1, ty + rr); y++) for (let x = Math.max(0, tx - rr); x <= Math.min(S - 1, tx + rr); x++) { const i = y * S + x, dd = (x - tx) ** 2 + (y - ty) ** 2 - sal[i] * 60; if (sal[i] > 0.22 && dd < bd) { bd = dd; s0 = i; } }
    if (s0 < 0) return null;
    const thr = Math.max(0.12, Math.min(0.45, sal[s0] * 0.45)), cm = new Uint8Array(S * S), q = new Int32Array(S * S); let qh = 0, qt = 0, tl = 0, tr = 0, tt = 0, tb = 0; q[qt++] = s0; cm[s0] = 1;
    while (qh < qt) { const j = q[qh++], x = j % S, y = (j / S) | 0; if (x === 0) tl = 1; if (x === S - 1) tr = 1; if (y === 0) tt = 1; if (y === S - 1) tb = 1; for (const k of [x > 0 ? j - 1 : -1, x < S - 1 ? j + 1 : -1, y > 0 ? j - S : -1, y < S - 1 ? j + S : -1]) if (k >= 0 && !cm[k] && sal[k] > thr) { cm[k] = 1; q[qt++] = k; } }
    const cut = (tl && x0 > 0) || (tr && x0 + wx < W) || (tt && y0 > 0) || (tb && y0 + wy < H);
    const loc = new Float32Array(S * S); for (let i = 0; i < loc.length; i++) loc[i] = cm[i] ? sstep(thr, Math.min(1, thr + 0.35), sal[i]) : 0;
    return { loc, x0, y0, wx, wy, cut, area: qt / (S * S) };
  };
  let r = null; for (const f of [0.25, 0.45, 0.75, 1.0]) { const t = await once(f); if (t) r = t; if (!t || !t.cut || t.area > 0.6) break; }
  const full = new Float32Array(W * H); if (!r) return full;
  const up = aiResample(r.loc, S, S, r.wx, r.wy);
  for (let y = 0; y < r.wy; y++) for (let x = 0; x < r.wx; x++) full[(r.y0 + y) * W + r.x0 + x] = up[y * r.wx + x];
  /* tutup celah sempit (penumpang, tiang) */
  const rc = Math.max(3, Math.round(W / 50)), bin = new Float32Array(W * H); for (let i = 0; i < bin.length; i++) bin[i] = full[i] > 0.4 ? 1 : 0;
  const d1 = aiBlur(Float32Array.from(bin), W, H, rc); for (let i = 0; i < d1.length; i++) d1[i] = d1[i] > 0.08 ? 1 : 0;
  const e1 = aiBlur(Float32Array.from(d1), W, H, rc); for (let i = 0; i < e1.length; i++) if (e1[i] > 0.92) full[i] = Math.max(full[i], sstep(0.92, 0.99, e1[i]));
  return aiGuided(e.G, full, W, H, Math.max(2, Math.round(W / 200)), 0.001);
}
async function aiTap(e, p) {
  const key = 'tap:' + Math.round(p[0] * 400) + ',' + Math.round(p[1] * 400) + ',' + p[2]; if (e.raw[key]) return e.raw[key];
  const W = e.w, H = e.h, n = W * H; let out = null;
  /* 1. magic touch (bila tersedia) */
  if (!AIV.interFail) { try { await aiLoadInter(); const r = AIV.inter.segment(e.img, { keypoint: { x: clamp(p[0], 0, 1), y: clamp(p[1], 0, 1) } }), cm = r.confidenceMasks || [], mk = cm[cm.length > 1 ? 1 : 0]; if (mk) { const f = mk.getAsFloat32Array(); out = mk.width === W && mk.height === H ? Float32Array.from(f) : aiResample(f, mk.width, mk.height, W, H); const ki = Math.min(H - 1, Math.floor(p[1] * H)) * W + Math.min(W - 1, Math.floor(p[0] * W)); if (out[ki] < 0.5 && cm.length === 1) out = out.map(v => 1 - v); cm.forEach(x => { try { x.close(); } catch (er) {} }); out = aiGuided(e.G, out, W, H, Math.max(2, Math.round(W / 220)), 0.001); } } catch (er) { out = null; } }
  /* 2. orang yang diketuk -> seluruh orang itu */
  if (!out) { try { const per = await aiPerson(e); const x0 = Math.min(W - 1, Math.floor(p[0] * W)), y0 = Math.min(H - 1, Math.floor(p[1] * H)); let s0 = -1, bd = 1e9; const rr = Math.max(3, Math.round(W / 60)); for (let y = Math.max(0, y0 - rr); y <= Math.min(H - 1, y0 + rr); y++) for (let x = Math.max(0, x0 - rr); x <= Math.min(W - 1, x0 + rr); x++) { const i = y * W + x, d = (x - x0) ** 2 + (y - y0) ** 2; if (per[i] > 0.5 && d < bd) { bd = d; s0 = i; } }
    if (s0 >= 0) { const cm = new Float32Array(n), q = new Int32Array(n); let qh = 0, qt = 0; q[qt++] = s0; cm[s0] = 1; while (qh < qt) { const j = q[qh++], x = j % W, y = (j / W) | 0; for (const k of [x > 0 ? j - 1 : -1, x < W - 1 ? j + 1 : -1, y > 0 ? j - W : -1, y < H - 1 ? j + W : -1]) if (k >= 0 && !cm[k] && per[k] > 0.35) { cm[k] = 1; q[qt++] = k; } } aiBlur(cm, W, H, 2); out = new Float32Array(n); for (let i = 0; i < n; i++) out[i] = per[i] * sstep(0.05, 0.4, cm[i]); } } catch (er) { console.warn(er); } }
  /* 3. benda: saliency di jendela sekitar titik */
  if (!out) out = await aiObjSal(e, p);
  e.raw[key] = out; return out;
}

/* ---------- masker akhir per foto ---------- */
const DEF_AIM = { mode: 'auto', pts: [], strokes: [], grow: 0, feather: 0.15 };
function aimOf(img) { if (!img.aim) img.aim = clone(DEF_AIM); return fillDef(img.aim, DEF_AIM); }
function aimSig(img) { const a = aimOf(img); return aiKey(img) + '|' + a.mode + '|' + JSON.stringify(a.pts) + '|' + a.strokes.length + ':' + a.strokes.reduce((s, x) => s + x.p.length, 0) + '|' + a.grow + '|' + a.feather; }
const MK = new Map(); /* aiKey -> {sig, cv, f} */
const MKP = new Map(); /* sig -> promise */
function brushInto(m, W, H, strokes) {
  for (const st of strokes || []) {
    const R = Math.max(1, st.r * Math.max(W, H)), inner = R * 0.55, P = st.p;
    const stamp = (u, v) => { const cx = u * W, cy = v * H, x0 = Math.max(0, Math.floor(cx - R)), x1 = Math.min(W - 1, Math.ceil(cx + R)), y0 = Math.max(0, Math.floor(cy - R)), y1 = Math.min(H - 1, Math.ceil(cy + R));
      for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) { const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy); if (d > R) continue; const a = d <= inner ? 1 : 1 - sstep(inner, R, d), i = y * W + x; m[i] = st.m > 0 ? Math.max(m[i], a) : m[i] * (1 - a); } };
    for (let k = 0; k < P.length; k += 2) { if (k === 0) { stamp(P[0], P[1]); continue; } const u0 = P[k - 2], v0 = P[k - 1], u1 = P[k], v1 = P[k + 1], ns = Math.max(1, Math.ceil(Math.hypot((u1 - u0) * W, (v1 - v0) * H) / Math.max(1, R * 0.3))); for (let j = 1; j <= ns; j++) stamp(u0 + (u1 - u0) * j / ns, v0 + (v1 - v0) * j / ns); }
  }
  return m;
}
async function computeMask(img) {
  const e = aiEntry(img); if (!e) throw new Error('Foto belum siap');
  const a = aimOf(img), W = e.w, H = e.h, n = W * H; let m;
  if (a.mode === 'none') m = new Float32Array(n);
  else if (a.mode === 'person') m = Float32Array.from(await aiPerson(e));
  else if (a.mode === 'tap') { m = new Float32Array(n); for (const p of a.pts.filter(p => p[2] > 0)) { const t = await aiTap(e, p); for (let i = 0; i < n; i++) if (t[i] > m[i]) m[i] = t[i]; } for (const p of a.pts.filter(p => p[2] < 0)) { const t = await aiTap(e, p); for (let i = 0; i < n; i++) m[i] *= 1 - t[i] * 0.95; } }
  else m = Float32Array.from(await aiSubject(e));
  m = brushInto(m, W, H, a.strokes);
  const g = a.grow || 0; if (g) { const r = Math.max(1, Math.round(Math.abs(g) * Math.max(W, H) * 0.02)); const b = aiBlur(Float32Array.from(m), W, H, r); for (let i = 0; i < n; i++) m[i] = g > 0 ? sstep(0.02, 0.5, b[i]) : sstep(0.5, 0.98, b[i]); }
  const f = a.feather || 0; if (f > 0.01) aiBlur(m, W, H, Math.max(1, Math.round(f * Math.max(W, H) * 0.006)));
  const cv = mkCanvas(W, H), x = cv.getContext('2d'), id = x.createImageData(W, H);
  for (let i = 0; i < n; i++) { id.data[i * 4] = id.data[i * 4 + 1] = id.data[i * 4 + 2] = 255; id.data[i * 4 + 3] = Math.round(clamp(m[i], 0, 1) * 255); }
  x.putImageData(id, 0, 0);
  return { cv, f: m, w: W, h: H };
}
/* sinkron: masker siap pakai atau null (memulai perhitungan di latar) */
function maskReady(img) {
  const sig = aimSig(img), c = MK.get(aiKey(img));
  if (c && c.sig === sig) return c;
  if (!MKP.has(sig)) {
    const pr = computeMask(img).then(r => { MK.set(aiKey(img), Object.assign(r, { sig })); MKP.delete(sig); PC.clear(); CUT.clear(); requestDraw(); if (typeof onMaskReady === 'function') onMaskReady(img); return r; })
      .catch(er => { MKP.delete(sig); console.warn('mask', er); if (!MASK_WARN++) toast('AI objek tidak bisa dimuat: ' + (er && er.message || 'jaringan'), true); });
    MKP.set(sig, pr);
  }
  return c && c.stale !== false ? c : null;
}
let MASK_WARN = 0;
async function maskWait(img, withBusy) {
  const sig = aimSig(img), c = MK.get(aiKey(img)); if (c && c.sig === sig) return c;
  if (withBusy) { AI_BUSY++; busy(true, 'AI memisahkan objek dari latar\u2026', 30); }
  try { maskReady(img); const r = await MKP.get(sig); return r || MK.get(aiKey(img)); }
  finally { if (withBusy) { AI_BUSY--; if (!AI_BUSY) busy(false); } }
}
function maskPending(img) { return MKP.has(aimSig(img)); }
/* masker dalam ruang output (sudah dipotong/diputar) ukuran W x H */
function maskOut(img, W, H) {
  const r = maskReady(img); if (!r) return null;
  const c = mkCanvas(W, H), x = c.getContext('2d'), T = maskToDoc(img, W, H, r.cv);
  x.imageSmoothingQuality = 'high'; x.setTransform(T[0], T[1], T[2], T[3], T[4], T[5]); x.drawImage(r.cv, 0, 0);
  return c;
}
/* potongan objek (foto terproses x masker) untuk teks-di-belakang & pop-out */
const CUT = new Map();
function cutOut(img, src, W, H, slot) {
  W = Math.max(1, Math.round(W)); H = Math.max(1, Math.round(H));
  const r = maskReady(img); if (!r) return null;
  const k = (slot || '') + img.id, key = r.sig + '|' + W + 'x' + H + '|' + (src.__v || '') + '|' + procKey(img, src.width, src.height, {});
  const c0 = CUT.get(k); if (c0 && c0.key === key) return c0.cv;
  const m = maskOut(img, W, H), cv = c0 && c0.cv && c0.cv.width === W && c0.cv.height === H ? c0.cv : mkCanvas(W, H), x = cv.getContext('2d');
  x.globalCompositeOperation = 'source-over'; x.clearRect(0, 0, W, H); x.imageSmoothingQuality = 'high'; x.drawImage(src, 0, 0, W, H);
  x.globalCompositeOperation = 'destination-in'; x.drawImage(m, 0, 0); x.globalCompositeOperation = 'source-over';
  CUT.set(k, { key, cv }); if (CUT.size > 24) CUT.delete(CUT.keys().next().value);
  return cv;
}

/* ---- x-export.js ---- */
/* ================= V2.0 DETAIL PRO & SIMPAN KUALITAS MAKSIMAL (media sosial & cetak) ================= */
LIB.sr2p = CDN + '@upscalerjs/esrgan-medium@1.0.0/models/x2/model.json';
LIB.sr4p = CDN + '@upscalerjs/esrgan-medium@1.0.0/models/x4/model.json';
/* AI Pro: model ESRGAN medium (lebih banyak detail, \u00b12,7 MB) */
const _aiUpscale0 = aiUpscale;
aiUpscale = async function (img, scale, engine) {
  if (engine !== 'pro') return _aiUpscale0(img, scale, engine);
  const s2 = LIB.sr2, s4 = LIB.sr4, m = SR.models; LIB.sr2 = LIB.sr2p; LIB.sr4 = LIB.sr4p; SR.models = SR.pmodels || (SR.pmodels = {});
  try { return await _aiUpscale0(img, scale, 'ai'); } finally { LIB.sr2 = s2; LIB.sr4 = s4; SR.models = m; }
};
const _hd0 = PANELS.hd;
PANELS.hd = () => {
  const h = _hd0(), eng = UI.srEng || 'ai';
  return h.replace(/<div class="ps-seg">.*?<\/div>/, '<div class="ps-seg">' + chip('AI Pro', 'sreng', 'data-v="pro"', eng === 'pro') + chip('AI Cepat', 'sreng', 'data-v="ai"', eng === 'ai') + chip('Tanpa AI', 'sreng', 'data-v="fast"', eng === 'fast') + '</div>')
    .replace('Model AI \u00b11 MB diunduh sekali, proses berjalan di perangkat Anda.', eng === 'pro' ? 'AI Pro: detail paling tajam (rambut, daun, tekstur kain). Model \u00b13 MB diunduh sekali; prosesnya lebih lama.' : 'Model AI \u00b11 MB diunduh sekali, proses berjalan di perangkat Anda.') +
    '<div class="ps-card"><b>' + ic('sparkle') + ' Detail Pro</b><p>Satu ketukan: bersihkan noise &amp; blok JPEG, lalu pertajam detail halus tanpa halo. Cocok sebelum unggah atau cetak.</p><button class="ps-wide ps-go" data-a="detailpro">' + ic('wand') + ' Terapkan Detail Pro</button></div>';
};
ACT.detailpro = () => {
  const im = curImg(), r = autoDetail(im), p = im.p;
  p.sharp = clamp(p.sharp + 0.12, 0, 1.2); p.tex = clamp(p.tex + 0.12, -1, 1.2); p.clar = clamp(Math.max(p.clar, 0.18), -1, 1.5);
  commit('Detail Pro'); renderPanel(); requestDraw(); toast('Detail Pro diterapkan (noise \u2248 ' + r.sigma.toFixed(1).replace('.', ',') + ')');
};

/* ---------- penajaman output (setelah ubah ukuran) ---------- */
function outSharpen(id, amt, rad) {
  if (!(amt > 0) || id.width * id.height > 64e6) return id;
  const w = id.width, h = id.height, d = id.data, n = w * h, L = new Float32Array(n);
  for (let i = 0; i < n; i++) L[i] = d[i * 4] * 0.299 + d[i * 4 + 1] * 0.587 + d[i * 4 + 2] * 0.114;
  const sig = Math.max(0.4, rad), R = Math.ceil(sig * 2.5), k = []; let ks = 0; for (let i = -R; i <= R; i++) { const v = Math.exp(-i * i / (2 * sig * sig)); k.push(v); ks += v; } for (let i = 0; i < k.length; i++) k[i] /= ks;
  const T = new Float32Array(n), B = new Float32Array(n);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { let s = 0; for (let j = -R; j <= R; j++) s += L[y * w + clamp(x + j, 0, w - 1)] * k[j + R]; T[y * w + x] = s; }
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { let s = 0; for (let j = -R; j <= R; j++) s += T[clamp(y + j, 0, h - 1) * w + x] * k[j + R]; B[y * w + x] = s; }
  const o = new Uint8ClampedArray(d.length);
  for (let i = 0; i < n; i++) {
    let df = L[i] - B[i]; const ad = Math.abs(df); if (ad < 1.2) df = 0; else df *= Math.min(1, (ad - 1.2) / 3); /* ambang: noise halus tidak ikut ditajamkan */
    df = df * amt; const lim = 28; df = Math.max(-lim, Math.min(lim, df)); /* batas: tidak ada halo putih/hitam */
    o[i * 4] = d[i * 4] + df; o[i * 4 + 1] = d[i * 4 + 1] + df; o[i * 4 + 2] = d[i * 4 + 2] + df; o[i * 4 + 3] = d[i * 4 + 3];
  }
  return new ImageData(o, w, h);
}
Object.assign(EXP_DEF, { osh: 'auto', dpi: 72, paper: '', pdpi: 300 });
/* preset platform: ukuran yang TIDAK diperkecil ulang oleh platform + kualitas yang tidak dikompres ulang berlebihan */
PLAT.length = 0;
PLAT.push(
  ['ig', 'Instagram', { fmt: 'jpeg', q: 95, sub: '420', prog: false, osh: 'auto' }, 1080, 'Lebar 1080 px, sRGB, JPEG kualitas tinggi. Rasio terbaik 4:5 (1080\u00d71350) atau 3:4 (1080\u00d71440).'],
  ['ighd', 'Instagram HD', { fmt: 'jpeg', q: 95, sub: '420', prog: false, osh: 'auto' }, 1440, 'Lebar 1440 px: Instagram menyimpan versi HD untuk layar tajam. Aktifkan "Unggah dengan kualitas tertinggi" di Pengaturan \u2192 Penggunaan data Instagram.'],
  ['tt', 'TikTok', { fmt: 'jpeg', q: 95, sub: '420', osh: 'auto' }, 1080, 'Foto/carousel 1080\u00d71920 (9:16) atau 1080\u00d71440 (3:4).'],
  ['fb', 'Facebook', { fmt: 'jpeg', q: 92, sub: '420', prog: true, osh: 'auto' }, 2048, 'Sisi terpanjang 2048 px. Aktifkan "Unggah foto HD" di aplikasi Facebook.'],
  ['th', 'Threads', { fmt: 'jpeg', q: 95, sub: '420', osh: 'auto' }, 1440, 'Lebar 1440 px untuk tampilan tajam.'],
  ['x', 'X / Twitter', { fmt: 'jpeg', q: 92, sub: '420', osh: 'auto' }, 4096, 'Maks. 4096 px. Di bawah 5 MB agar tidak dikompres ulang.'],
  ['wa', 'WhatsApp HD', { fmt: 'jpeg', q: 92, osh: 'auto' }, 2560, 'Kirim dengan opsi HD di WhatsApp.'],
  ['web', 'Web / Blog', { fmt: 'webp', wq: 82, wl: false, osh: 'auto' }, 1600, 'WebP ringan untuk situs (cepat dimuat, bagus untuk SEO).'],
  ['print', 'Cetak', { fmt: 'jpeg', q: 100, sub: '444', prog: false, osh: 'print' }, 0, 'Pilih ukuran kertas &amp; DPI di bawah.']
);
const PAPERS = [['4r', '4R (10,2\u00d715,2 cm)', 10.2, 15.2], ['5r', '5R (12,7\u00d717,8 cm)', 12.7, 17.8], ['8r', '8R (20,3\u00d725,4 cm)', 20.3, 25.4], ['10r', '10R (25,4\u00d730,5 cm)', 25.4, 30.5], ['a4', 'A4 (21\u00d729,7 cm)', 21, 29.7], ['a3', 'A3 (29,7\u00d742 cm)', 29.7, 42], ['a2', 'A2 (42\u00d759,4 cm)', 42, 59.4], ['a1', 'A1 Poster (59,4\u00d784,1 cm)', 59.4, 84.1], ['b1', 'Banner 60\u00d7160 cm', 60, 160], ['b2', 'Baliho 100\u00d7200 cm', 100, 200]];
function paperPx(pid, dpi, aspect) {
  const P = PAPERS.find(x => x[0] === pid); if (!P) return null; const a = P[2], b = P[3]; let wcm, hcm;
  if (aspect >= 1) { wcm = Math.max(a, b); hcm = Math.min(a, b); } else { wcm = Math.min(a, b); hcm = Math.max(a, b); }
  /* isi kertas penuh mengikuti rasio foto (sisi terpanjang foto = sisi terpanjang kertas yang muat) */
  const k = Math.min(wcm / aspect, hcm); const pw = k * aspect, ph = k;
  return { w: Math.round(pw / 2.54 * dpi), h: Math.round(ph / 2.54 * dpi), wcm: pw, hcm: ph };
}
const _sfwCtl0 = sfwCtl;
sfwCtl = function () {
  let h = _sfwCtl0(); const s = S_(), pl = PLAT.find(p => p[0] === s.plat);
  if (pl && pl[4]) h = h.replace('<label class="ps-lb">Preset</label>', '<p class="ps-note ps-platnote">' + ic('check') + ' ' + pl[4] + '</p><label class="ps-lb">Preset</label>');
  let add = '<label class="ps-lb">Penajaman output</label><div class="ps-seg ps-wrap">' + [['off', 'Mati'], ['auto', 'Layar (otomatis)'], ['high', 'Layar kuat'], ['print', 'Cetak']].map(o => chip(o[1], 'eosh', 'data-v="' + o[0] + '"', s.osh === o[0])).join('') + '</div>';
  if (s.plat === 'print' || s.paper) {
    const asp = SFW.full.width / SFW.full.height, pp = s.paper ? paperPx(s.paper, s.pdpi, asp) : null;
    add += '<div class="ps-card ps-print"><b>' + ic('print') + ' Ukuran Cetak</b><select data-e="paper"><option value="">\u2014 Pilih ukuran kertas \u2014</option>' + PAPERS.map(p => '<option value="' + p[0] + '"' + (s.paper === p[0] ? ' selected' : '') + '>' + p[1] + '</option>').join('') + '</select>' +
      '<div class="ps-seg">' + [[150, '150 DPI<small>Baliho/jarak jauh</small>'], [200, '200 DPI<small>Poster</small>'], [300, '300 DPI<small>Foto tajam</small>']].map(d => chip(d[1], 'epdpi', 'data-v="' + d[0] + '"', +s.pdpi === d[0])).join('') + '</div>';
    if (pp) {
      const have = Math.min(SFW.full.width / pp.w, SFW.full.height / pp.h), ok = have >= 0.98, dpiReal = Math.round(s.pdpi * Math.min(1, have));
      add += '<p class="ps-note">' + pp.wcm.toFixed(1).replace('.', ',') + ' \u00d7 ' + pp.hcm.toFixed(1).replace('.', ',') + ' cm @ ' + s.pdpi + ' DPI = <b>' + pp.w + ' \u00d7 ' + pp.h + ' px</b>.</p>' +
        (ok ? '<p class="ps-ok">' + ic('check') + ' Resolusi foto cukup untuk ukuran ini.</p>' : '<p class="ps-warn">Foto Anda ' + SFW.full.width + '\u00d7' + SFW.full.height + ' px hanya setara \u00b1' + dpiReal + ' DPI pada ukuran ini.' + (doc.mode === 'photo' ? ' Perbesar dengan <b>AI Pro</b> dulu agar detail tetap tajam.' : ' Naikkan resolusi template ke 2160 atau pilih ukuran lebih kecil.') + '</p>' + (doc.mode === 'photo' ? '<button class="ps-wide ps-go" data-a="eupai">' + ic('sparkle') + ' Perbesar dengan AI Pro lalu kembali ke sini</button>' : ''));
    }
    add += '</div>';
  }
  return h.replace('<label class="ps-lb">Metadata</label>', add + '<label class="ps-lb">Metadata</label>');
};
const _sfwClick0 = sfwClick;
sfwClick = function (e) {
  const b = e.target.closest('[data-a]'); if (!b) return _sfwClick0(e); const s = S_(), a = b.dataset.a;
  if (a === 'eosh') { s.osh = b.dataset.v; SFW.srcKey = ''; renderSFW(); scheduleEnc(); return; }
  if (a === 'epdpi') { s.pdpi = +b.dataset.v; applyPaper(); renderSFW(); scheduleEnc(); return; }
  if (a === 'eupai') { const im = curImg(); closeAllModals(); const sc = (() => { const pp = paperPx(s.paper, s.pdpi, SFW.full ? SFW.full.width / SFW.full.height : 1); if (!pp) return 2; const need = Math.max(pp.w / im.bw, pp.h / im.bh); return need > 2.05 ? 4 : 2; })(); aiUpscale(im, sc, 'pro').then(() => openExport()); return; }
  if (a === 'plat') { const r = _sfwClick0(e); if (b.dataset.v !== 'print') { s.paper = ''; } else if (!s.paper) { s.paper = 'a4'; applyPaper(); renderSFW(); scheduleEnc(); } SFW.srcKey = ''; return r; }
  return _sfwClick0(e);
};
function applyPaper() {
  const s = S_(); if (!s.paper || !SFW.full) return; const pp = paperPx(s.paper, s.pdpi, SFW.full.width / SFW.full.height); if (!pp) return;
  SFW.w = pp.w; SFW.h = pp.h; s.dpi = s.pdpi; s.rs = pp.w > SFW.full.width ? 'smoother' : 'sharper'; SFW.srcKey = '';
}
const _sfwInput0 = sfwInput;
sfwInput = function (e) {
  const r = e.target; if (r && r.dataset && r.dataset.e === 'paper') { if (e.type !== 'change') return; const s = S_(); s.paper = r.value; if (s.paper) { s.plat = 'print'; Object.assign(s, PLAT.find(p => p[0] === 'print')[2]); applyPaper(); } renderSFW(); scheduleEnc(); return; }
  return _sfwInput0(e);
};
/* sumber: ubah ukuran -> penajaman output */
const _srcData0 = srcData;
srcData = async function () {
  const s = S_(), key = SFW.w + 'x' + SFW.h + s.rs + '|' + s.osh;
  if (SFW.srcKey === key && SFW.srcData) return SFW.srcData;
  SFW.srcKey = ''; const id0 = await _srcData0(); SFW.srcKey = '';
  const f = SFW.full, sc = id0.width / f.width; let amt = 0, rad = 0.6;
  if (s.osh === 'auto') { amt = sc < 0.98 ? clamp(0.35 + (1 - sc) * 0.6, 0.35, 0.8) : 0.18; rad = 0.55; }
  else if (s.osh === 'high') { amt = sc < 0.98 ? 0.95 : 0.45; rad = 0.6; }
  else if (s.osh === 'print') { amt = 0.6 * Math.min(1.4, Math.max(0.6, (s.pdpi || 300) / 300)); rad = Math.max(0.8, (s.pdpi || 300) / 300 * 1.2); }
  const id = amt > 0 ? outSharpen(id0, amt, rad) : id0;
  if (id.width !== SFW.w || id.height !== SFW.h) return id; /* ukuran sudah berubah: hasil lama dibuang */
  const c = mkCanvas(id.width, id.height); c.getContext('2d').putImageData(id, 0, 0);
  SFW.srcKey = key; SFW.srcData = id; SFW.src = c; return id;
};
/* DPI di file: JFIF (JPEG) & pHYs (PNG) */
function setJpegDpi(u8, dpi) {
  if (u8[0] !== 0xff || u8[1] !== 0xd8) return u8;
  if (u8[2] === 0xff && u8[3] === 0xe0 && u8[6] === 0x4a && u8[7] === 0x46 && u8[8] === 0x49 && u8[9] === 0x46) { u8[13] = 1; u8[14] = dpi >> 8; u8[15] = dpi & 255; u8[16] = dpi >> 8; u8[17] = dpi & 255; return u8; }
  const app0 = new Uint8Array([0xff, 0xe0, 0, 16, 0x4a, 0x46, 0x49, 0x46, 0, 1, 1, 1, dpi >> 8, dpi & 255, dpi >> 8, dpi & 255, 0, 0]);
  const o = new Uint8Array(u8.length + app0.length); o.set(u8.subarray(0, 2)); o.set(app0, 2); o.set(u8.subarray(2), 2 + app0.length); return o;
}
function setPngDpi(u8, dpi) {
  if (u8[1] !== 0x50 || u8[2] !== 0x4e) return u8; const ppm = Math.round(dpi / 0.0254);
  const data = new Uint8Array(9), dv = new DataView(data.buffer); dv.setUint32(0, ppm); dv.setUint32(4, ppm); data[8] = 1;
  const typ = [0x70, 0x48, 0x59, 0x73], c = new Uint8Array(21), cd = new DataView(c.buffer); cd.setUint32(0, 9); c.set(typ, 4); c.set(data, 8);
  let crc = 0xffffffff; for (let i = 4; i < 17; i++) { crc ^= c[i]; for (let k = 0; k < 8; k++) crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1; } cd.setUint32(17, (crc ^ 0xffffffff) >>> 0);
  const at = 8 + 25; const o = new Uint8Array(u8.length + 21); o.set(u8.subarray(0, at)); o.set(c, at); o.set(u8.subarray(at), at + 21); return o;
}
const _encodeWith0 = encodeWith;
encodeWith = async function (id, s) {
  const b = await _encodeWith0(id, s), dpi = s.paper ? (s.pdpi || 300) : (s.dpi || 72);
  if (s.fmt === 'jpeg') { const u = setJpegDpi(new Uint8Array(await b.arrayBuffer()), dpi); return new Blob([u], { type: 'image/jpeg' }); }
  if (s.fmt === 'png' || s.fmt === 'png8') { const u = setPngDpi(new Uint8Array(await b.arrayBuffer()), dpi), nb = new Blob([u], { type: 'image/png' }); nb.ncol = b.ncol; return nb; }
  return b;
};

/* ---- x-focus.js ---- */
/* ================= V2.0 FOKUS AI: masker objek + efek latar (shutter/panning, zoom, putar, bokeh) ================= */
Object.assign(ICO, {
  focus: '<circle cx="8" cy="8" r="2.4"/><path d="M2 5V3a1 1 0 0 1 1-1h2M11 2h2a1 1 0 0 1 1 1v2M14 11v2a1 1 0 0 1-1 1h-2M5 14H3a1 1 0 0 1-1-1v-2"/>',
  tap: '<path d="M6.5 8V3.5a1.2 1.2 0 0 1 2.4 0V7l3.2.6a1.5 1.5 0 0 1 1.2 1.7l-.6 3.6a2 2 0 0 1-2 1.6H8a2 2 0 0 1-1.6-.8L3.8 10.4a1.1 1.1 0 0 1 1.6-1.5z"/>',
  minus: '<path d="M3 8h10"/>',
  motion: '<path d="M1.5 6h5M1 9h4M2.5 12h3"/><circle cx="10.5" cy="8.5" r="3.5"/>',
  zoomb: '<circle cx="8" cy="8" r="1.6"/><path d="M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M3.4 3.4l2 2M10.6 10.6l2 2M3.4 12.6l2-2M10.6 5.4l2-2"/>',
  spin: '<path d="M13 8a5 5 0 1 1-2-4"/><path d="M11.5 1.5 11 4l2.5.5"/><circle cx="8" cy="8" r="1.4"/>',
  lens: '<circle cx="5" cy="6" r="2.2"/><circle cx="11" cy="5" r="1.6"/><circle cx="10" cy="11" r="2.6"/><circle cx="4.5" cy="12" r="1.2"/>',
  tpl: '<rect x="2" y="2" width="12" height="12" rx="2"/><path d="M2 6.5h12M6.5 6.5V14"/>',
  print: '<path d="M4 6V2h8v4M4 12H2.5A1 1 0 0 1 1.5 11V7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H12"/><path d="M4 9.5h8V14H4z"/>',
  hand: '<path d="M5 8V3.6a1 1 0 0 1 2 0V7M7 6.5V2.8a1 1 0 0 1 2 0v3.7M9 6.5V3.6a1 1 0 0 1 2 0V8M11 6.5a1 1 0 0 1 2 0V10a4 4 0 0 1-4 4H8.5a4 4 0 0 1-3.2-1.6L3 9.4a1 1 0 0 1 1.6-1.2L5 8.8"/>'
});
const BFX_MODES = [['', 'Tanpa', 'x', 'Latar asli'], ['motion', 'Shutter / Panning', 'motion', 'Latar bergerak cepat, objek tajam (efek panning kamera)'], ['zoom', 'Zoom Burst', 'zoomb', 'Latar memancar dari titik pusat'], ['spin', 'Putar', 'spin', 'Latar berputar mengelilingi titik pusat'], ['lens', 'Bokeh Lensa', 'lens', 'Latar blur seperti lensa f/1.4, lampu jadi bulatan']];
const BFX_RECIPES = [
  ['Panning Mobil Malam', { mode: 'motion', amt: 0.6, ang: 0, light: 0.7, dim: -0.1, sat: 0.15 }],
  ['Panning Siang', { mode: 'motion', amt: 0.45, ang: 0, light: 0.1, dim: 0, sat: 0 }],
  ['Pelari / Sepeda', { mode: 'motion', amt: 0.5, ang: -8, light: 0.25, dim: -0.05, sat: 0 }],
  ['Zoom Burst Kota', { mode: 'zoom', amt: 0.55, light: 0.6, dim: -0.1, sat: 0.1 }],
  ['Potret Bokeh', { mode: 'lens', amt: 0.55, light: 0.55, dim: -0.05, sat: 0 }],
  ['Bokeh Lampu Malam', { mode: 'lens', amt: 0.8, light: 1, dim: -0.2, sat: 0.2 }],
  ['Pusaran Dinamis', { mode: 'spin', amt: 0.4, light: 0.4, dim: -0.1, sat: 0.1 }],
  ['Latar Hitam Putih', { mode: 'lens', amt: 0.25, light: 0.2, dim: -0.15, sat: -1 }]
];
const AIM_MODES = [['auto', 'Objek Utama', 'focus'], ['person', 'Semua Orang', 'hand'], ['tap', 'Ketuk Objek', 'tap'], ['none', 'Kuas Saja', 'brush']];
UI.mtool = ''; UI.showMask = false;
function aiStatus(im) { const r = MK.get(aiKey(im)), sig = aimSig(im); if (maskPending(im)) return '<span class="ps-aist busy">AI mendeteksi objek\u2026</span>'; if (r && r.sig === sig) return '<span class="ps-aist ok">' + ic('check') + ' Masker siap</span>'; return '<span class="ps-aist">Masker belum dihitung</span>'; }
PANELS.focus = () => {
  const im = curImg(), a = aimOf(im), b = im.p.bfx, cur = BFX_MODES.find(m => m[0] === (b.mode || '')) || BFX_MODES[0];
  const tools = (a.mode === 'tap' ? chip(ic('plus') + ' Ketuk tambah', 'mtool', 'data-v="tap+"', UI.mtool === 'tap+') + chip(ic('minus') + ' Ketuk kurangi', 'mtool', 'data-v="tap-"', UI.mtool === 'tap-') : '') +
    chip(ic('brush') + ' Kuas tambah', 'mtool', 'data-v="add"', UI.mtool === 'add') + chip(ic('eraser') + ' Kuas kurangi', 'mtool', 'data-v="sub"', UI.mtool === 'sub');
  let h = '<div class="ps-card"><b>' + ic('focus') + ' Masker Objek AI</b><p>AI memisahkan objek (orang, hewan, kendaraan, benda) dari latar. Rapikan dengan kuas bila perlu.</p>' +
    '<div class="ps-seg ps-seg4">' + AIM_MODES.map(m => chip(ic(m[2]) + ' ' + m[1], 'aimode', 'data-v="' + m[0] + '"', a.mode === m[0])).join('') + '</div>' +
    '<label class="ps-lb">Rapikan di foto</label><div class="ps-seg ps-wrap">' + tools + '</div>' +
    (UI.mtool === 'add' || UI.mtool === 'sub' ? sl('Ukuran kuas', 's:brush', 8, 240, 1, { fmt: 'px', def: 60 }) : '') +
    (a.mode === 'tap' && !a.pts.length ? '<p class="ps-note">Ketuk objek di foto untuk memilihnya. Ketuk lagi untuk menambah objek lain.</p>' : '') +
    '<div class="ps-ckrow"><label class="ps-ck"><input type="checkbox" data-ui="showMask"' + (UI.showMask ? ' checked' : '') + '> Lihat area objek</label>' + aiStatus(im) + '</div>' +
    sl('Perluas / persempit', 'm:grow', -1, 1, 0.01, { def: 0 }) + sl('Haluskan tepi', 'm:feather', 0, 1, 0.01, { fmt: 'pct', def: 0.15 }) +
    '<div class="ps-btn2"><button data-a="aimcalc">' + ic('sparkle') + ' Deteksi Ulang</button><button data-a="aimreset">' + ic('x') + ' Reset Rapikan</button></div></div>';
  h += '<div class="ps-card"><b>' + ic('motion') + ' Efek Latar</b><p>Objek tetap tajam, latar diberi efek kamera profesional.</p>' +
    '<div class="ps-bfxgrid">' + BFX_MODES.map(m => '<button class="ps-bfx' + ((b.mode || '') === m[0] ? ' on' : '') + '" data-a="bfxmode" data-v="' + m[0] + '">' + ic(m[2]) + '<span>' + m[1] + '</span></button>').join('') + '</div>' +
    (b.mode ? '<p class="ps-note">' + cur[3] + (b.mode === 'zoom' || b.mode === 'spin' ? ' \u2014 seret titik pusat di foto.' : '') + '</p>' + sl('Kekuatan', 'p:bfx.amt', 0, 1, 0.01, { fmt: 'pct', def: 0.5 }) +
      (b.mode === 'motion' ? sl('Arah gerak', 'p:bfx.ang', -90, 90, 1, { fmt: 'deg', def: 0 }) : '') +
      sl(b.mode === 'lens' ? 'Lampu jadi bokeh' : 'Lampu jadi garis cahaya', 'p:bfx.light', 0, 1, 0.01, { fmt: 'pct', def: 0.3 }) +
      sl('Terang latar', 'p:bfx.dim', -1, 0.6, 0.01, { def: 0 }) + sl('Warna latar', 'p:bfx.sat', -1, 1, 0.01, { def: 0 }) +
      '<label class="ps-ck"><input type="checkbox" data-ck="p:bfx.inv"' + (b.inv ? ' checked' : '') + '> Balik: objek yang diberi efek, latar tetap tajam</label>' : '') + '</div>' +
    '<label class="ps-lb">Resep cepat</label><div class="ps-scrollx">' + BFX_RECIPES.map((r, i) => chip(r[0], 'bfxrec', 'data-v="' + i + '"')).join('') + '</div>';
  return h;
};
POST.focus = () => { const im = curImg(); if (im) maskReady(im); };
/* nilai masker (m:) tersambung ke slider umum */
const _rootOf0 = rootOf;
rootOf = function (pre) { if (pre === 'm') { const im = curImg(); return im ? aimOf(im) : null; } return _rootOf0(pre); };
function onMaskReady() { if (ST.tool === 'focus' && doc && doc.mode === 'photo') { const s = $('#ps-panel .ps-aist'); if (s) s.outerHTML = aiStatus(curImg()); } }
Object.assign(ACT, {
  aimode: async b => { const im = curImg(), a = aimOf(im); a.mode = b.dataset.v; if (a.mode === 'tap') { UI.mtool = 'tap+'; } else if (UI.mtool.startsWith('tap')) UI.mtool = ''; if (a.mode === 'none') UI.mtool = 'add'; commit('Mode masker'); renderPanel(); if (a.mode !== 'tap') { await maskWait(im, true); renderPanel(); } requestDraw(); },
  mtool: b => { UI.mtool = UI.mtool === b.dataset.v ? '' : b.dataset.v; renderPanel(); requestDraw(); },
  aimcalc: async () => { const im = curImg(); const e = AIE.get(aiKey(im)); if (e) e.raw = {}; MK.delete(aiKey(im)); await maskWait(im, true); renderPanel(); requestDraw(); },
  aimreset: () => { const a = aimOf(curImg()); a.strokes = []; a.pts = []; a.grow = 0; a.feather = 0.15; commit('Reset masker'); renderPanel(); requestDraw(); },
  bfxmode: async b => { const im = curImg(), p = im.p.bfx; p.mode = b.dataset.v; commit('Efek latar'); renderPanel(); if (p.mode && !maskReady(im)) { await maskWait(im, true); renderPanel(); } requestDraw(); },
  bfxrec: async b => { const r = BFX_RECIPES[+b.dataset.v], im = curImg(); Object.assign(im.p.bfx, { cx: 0.5, cy: 0.5, inv: 0 }, clone(r[1])); commit('Resep ' + r[0]); renderPanel(); if (!maskReady(im)) { await maskWait(im, true); renderPanel(); } requestDraw(); }
});
/* checkbox UI (bukan dokumen) */
document.addEventListener('change', e => { const t = e.target; if (t && t.dataset && t.dataset.ui && A.contains(t)) { UI[t.dataset.ui] = t.checked; requestDraw(); } }, true);

/* ---------- interaksi di kanvas ---------- */
function focusDown(px, py) {
  const im = curImg(), a = aimOf(im), b = im.p.bfx, [W, H] = docDims(), m = cropMap(im);
  if ((b.mode === 'zoom' || b.mode === 'spin') && Math.hypot(px - b.cx * W, py - b.cy * H) < lw(30) && !UI.mtool) { G.t = 'fcenter'; return true; }
  if (UI.mtool === 'tap+' || UI.mtool === 'tap-') {
    const s = m.f(px / W, py / H); if (s[0] < 0 || s[1] < 0 || s[0] > 1 || s[1] > 1) return true;
    a.pts.push([Math.round(s[0] * 1e4) / 1e4, Math.round(s[1] * 1e4) / 1e4, UI.mtool === 'tap+' ? 1 : -1]); commit('Pilih objek'); G.t = 'none';
    maskWait(im, true).then(() => { renderPanel(); requestDraw(); }); return true;
  }
  if (UI.mtool === 'add' || UI.mtool === 'sub') {
    const s = m.f(px / W, py / H), s2 = m.f((px + ST.brush / 2 / V.z) / W, py / H), r = Math.hypot((s2[0] - s[0]) * im.bw, (s2[1] - s[1]) * im.bh) / Math.max(im.bw, im.bh);
    G.t = 'mpaint'; G.st = { m: UI.mtool === 'add' ? 1 : -1, r: Math.round(r * 1e4) / 1e4, p: [Math.round(s[0] * 1e4) / 1e4, Math.round(s[1] * 1e4) / 1e4] }; a.strokes.push(G.st); ST.hover = [px, py]; requestDraw(); return true;
  }
  return false;
}
function focusMove(px, py) {
  const im = curImg(), [W, H] = docDims();
  if (G.t === 'fcenter') { const b = im.p.bfx; b.cx = clamp(px / W, 0, 1); b.cy = clamp(py / H, 0, 1); return; }
  if (G.t === 'mpaint') { const s = cropMap(im).f(px / W, py / H), p = G.st.p; if (Math.hypot((s[0] - p[p.length - 2]) * im.bw, (s[1] - p[p.length - 1]) * im.bh) / Math.max(im.bw, im.bh) > G.st.r * 0.3) p.push(Math.round(s[0] * 1e4) / 1e4, Math.round(s[1] * 1e4) / 1e4); ST.hover = [px, py]; }
}
function focusUp(g) {
  if (g.t === 'fcenter') commit('Titik pusat efek');
  else if (g.t === 'mpaint') { commit('Rapikan masker'); maskReady(curImg()); }
}
const MKTINT = { key: '', cv: null };
function drawFocusOverlay(W, H) {
  const im = curImg(), c = cx, b = im.p.bfx; maskReady(im);
  if (UI.showMask || UI.mtool) {
    const r = MK.get(aiKey(im));
    if (r) {
      if (MKTINT.key !== r.sig) { const t = mkCanvas(r.w, r.h), x = t.getContext('2d'); x.fillStyle = '#ff2d6f'; x.fillRect(0, 0, r.w, r.h); x.globalCompositeOperation = 'destination-in'; x.drawImage(r.cv, 0, 0); MKTINT.key = r.sig; MKTINT.cv = t; }
      c.save(); const T = maskToDoc(im, W, H, r.cv); c.transform(T[0], T[1], T[2], T[3], T[4], T[5]); c.globalAlpha = 0.5; c.drawImage(MKTINT.cv, 0, 0); c.restore();
    }
    /* goresan yang belum dihitung ulang */
    const a = aimOf(im), m = cropMap(im), A2 = [m.m[0], m.m[1], m.m[3], m.m[4], m.m[6], m.m[7]], I = inv2x3(A2);
    if (G && G.t === 'mpaint') { const st = G.st; c.save(); c.fillStyle = st.m > 0 ? 'rgba(255,45,111,.45)' : 'rgba(40,180,255,.45)'; const R = st.r * Math.max(im.bw, im.bh) * W / (im.bw * Math.max(m.sw, 1e-6)); for (let k = 0; k < st.p.length; k += 2) { const u = st.p[k], v = st.p[k + 1], x = (I[0] * u + I[2] * v + I[4]) * W, y = (I[1] * u + I[3] * v + I[5]) * H; c.beginPath(); c.arc(x, y, R, 0, 7); c.fill(); } c.restore(); }
    void a;
  }
  if ((b.mode === 'zoom' || b.mode === 'spin') && !UI.mtool) handleDot(b.cx * W, b.cy * H, '#7fd3ff');
  if ((UI.mtool === 'add' || UI.mtool === 'sub') && ST.hover) { c.beginPath(); c.arc(ST.hover[0], ST.hover[1], lw(ST.brush / 2), 0, 7); c.strokeStyle = '#fff'; c.lineWidth = lw(1.5); c.stroke(); c.strokeStyle = 'rgba(0,0,0,.6)'; c.lineWidth = lw(0.7); c.stroke(); }
  /* titik ketuk */
  if (aimOf(im).mode === 'tap') { const m = cropMap(im), A2 = [m.m[0], m.m[1], m.m[3], m.m[4], m.m[6], m.m[7]], I = inv2x3(A2); for (const p of aimOf(im).pts) { const x = (I[0] * p[0] + I[2] * p[1] + I[4]) * W, y = (I[1] * p[0] + I[3] * p[1] + I[5]) * H; c.save(); c.beginPath(); c.arc(x, y, lw(11), 0, 7); c.fillStyle = p[2] > 0 ? '#20c060' : '#ff4f7b'; c.fill(); c.lineWidth = lw(2.5); c.strokeStyle = '#fff'; c.stroke(); c.fillStyle = '#fff'; c.font = 'bold ' + lw(14) + 'px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(p[2] > 0 ? '+' : '\u2212', x, y + lw(1)); c.restore(); } }
  if (maskPending(im) && (b.mode || UI.showMask)) { c.save(); c.font = '600 ' + lw(13) + 'px system-ui'; const t = 'AI mendeteksi objek\u2026', tw = c.measureText(t).width; c.fillStyle = 'rgba(0,0,0,.6)'; rrect(c, W / 2 - tw / 2 - lw(12), lw(12), tw + lw(24), lw(30), lw(15)); c.fill(); c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(t, W / 2, lw(27)); c.restore(); }
}
/* aktifkan teks-di-belakang: siapkan masker dengan progres */
document.addEventListener('change', e => {
  const t = e.target; if (!t || !t.dataset || t.dataset.ck !== 't:behind' || !t.checked || !A.contains(t) || !doc) return;
  const list = doc.mode === 'photo' ? [curImg()] : (typeof tplCutImgs === 'function' ? tplCutImgs() : []);
  setTimeout(async () => { for (const im of list.filter(Boolean)) await maskWait(im, true); requestDraw(); }, 30);
});

/* ---- x-tpl.js ---- */
/* ================= V2.0 TEMPLATE TREN 3D (seret foto ke slot) =================
   Slot: x,y,w,h (0..1), r = radius (rel. lebar), rot (derajat), pop = objek keluar bingkai, cut = objek di depan teks,
   ref = tampilkan foto dari slot lain, frame = polaroid, bd = garis tepi putih, glass = kilau kaca, fx = efek latar otomatis */
const T_ = (o) => Object.assign({ x: 0, y: 0, w: 1, h: 1, r: 0, rot: 0 }, o);
const TX = (t, o) => Object.assign(defText(t), { sh: { a: 0, c: '#000000', b: 0.25, x: 0, y: 0.04 } }, o);
const WEA = (y, title, time, cond, temp, hl) => [
  TX(title, { font: 'Plus Jakarta Sans', w: 800, size: 0.056, x: 0.205, y: y + 0.042, anc: 'l', al: 'left', sh: { a: 0.25, c: '#000000', b: 0.3, x: 0, y: 0.02 } }),
  TX(time, { font: 'Plus Jakarta Sans', w: 400, size: 0.028, x: 0.205, y: y + 0.084, anc: 'l', al: 'left' }),
  TX(cond, { font: 'Plus Jakarta Sans', w: 400, size: 0.029, x: 0.205, y: y + 0.168, anc: 'l', al: 'left' }),
  TX(temp, { font: 'Inter', w: 400, size: 0.1, x: 0.835, y: y + 0.062, anc: 'r', al: 'right', ls: -0.02 }),
  TX(hl, { font: 'Plus Jakarta Sans', w: 400, size: 0.026, x: 0.835, y: y + 0.168, anc: 'r', al: 'right' })
];
const TPLS = [
  { id: 'weather', name: 'Kartu Cuaca 3D', desc: 'Widget kaca + orang keluar kartu', size: 'ig45', n: 4, bg: { t: 'c', c: '#dfe6ee' },
    slots: [T_({ role: 'Latar' }), T_({ x: 0.145, y: 0.205, w: 0.73, h: 0.19, r: 0.045, pop: 1, glass: 1, role: 'Kartu 1' }), T_({ x: 0.145, y: 0.445, w: 0.73, h: 0.19, r: 0.045, pop: 1, glass: 1, role: 'Kartu 2' }), T_({ x: 0.145, y: 0.685, w: 0.73, h: 0.19, r: 0.045, pop: 1, glass: 1, role: 'Kartu 3' })],
    texts: () => [...WEA(0.205, 'Penanjakan', '05:45', 'Clear Sky', '12\u00b0', 'H:18\u00b0 L:8\u00b0'), ...WEA(0.445, 'Bromo Crater', '07:20', 'Cloudy', '16\u00b0', 'H:22\u00b0 L:12\u00b0'), ...WEA(0.685, 'Seruni Point', '08:15', 'Sunny', '18\u00b0', 'H:24\u00b0 L:13\u00b0')] },
  { id: 'behind', name: 'Teks di Belakang', desc: 'Judul besar tertutup objek', size: 'ig45', n: 1, bg: { t: 'c', c: '#111111' },
    slots: [T_({ cut: 1, role: 'Foto' })],
    texts: () => [TX('THIS IS', { font: 'Cormorant Garamond', w: 700, up: 1, ls: 0.18, size: 0.07, x: 0.105, y: 0.475, anc: 'l', al: 'left', sh: { a: 0.35, c: '#000000', b: 0.3, x: 0, y: 0.02 } }),
      TX('KENYA', { font: 'Bebas Neue', w: 400, up: 1, ls: 0.22, size: 0.34, fitW: 0.9, x: 0.5, y: 0.66, behind: 1, fill: { t: 'g', g: ['#ffffff', '#f2f2f2', '#8c9097'], ang: 90 }, sh: { a: 0.25, c: '#000000', b: 0.25, x: 0, y: 0.02 } })] },
  { id: 'split', name: 'Siang & Malam', desc: 'Dua suasana saling bertukar', size: 'ig34', n: 2, bg: { t: 'c', c: '#000000' },
    slots: [T_({ w: 0.5, role: 'Foto 1' }), T_({ x: 0.5, w: 0.5, role: 'Foto 2' }), T_({ x: 0.23, y: 0.3, w: 0.27, h: 0.4, ref: 1, sh: 1 }), T_({ x: 0.5, y: 0.3, w: 0.27, h: 0.4, ref: 0, sh: 1 })],
    texts: () => [] },
  { id: 'popframe', name: 'Pop-Out Bingkai', desc: 'Objek keluar dari bingkai foto', size: 'ig45', n: 1, bg: { t: 'blur', c: '#f4ede1', dim: 0.35 },
    slots: [T_({ x: 0.13, y: 0.22, w: 0.74, h: 0.52, r: 0.04, pop: 1, bd: 1, role: 'Foto' })],
    texts: () => [TX('Weekend Escape', { font: 'Playfair Display', w: 700, it: 1, size: 0.085, fitW: 0.86, x: 0.5, y: 0.83, sh: { a: 0.45, c: '#000000', b: 0.35, x: 0, y: 0.03 } }), TX('mengetik.id', { font: 'Montserrat', w: 700, up: 1, ls: 0.4, size: 0.026, x: 0.5, y: 0.9 })] },
  { id: 'polaroid', name: 'Polaroid 3D', desc: 'Foto cetak miring, objek menyembul', size: 'ig45', n: 1, bg: { t: 'g', c: '#ffd1e3', c2: '#a1c4fd', ang: 135 },
    slots: [T_({ x: 0.15, y: 0.17, w: 0.7, h: 0.64, rot: -4, frame: 1, pop: 1, role: 'Foto' })],
    texts: () => [TX('summer memories', { font: 'Caveat', w: 700, size: 0.07, fitW: 0.6, x: 0.515, y: 0.765, rot: -4, fill: { t: 's', c: '#3a2f2a' } })] },
  { id: 'mag', name: 'Sampul Majalah', desc: 'Judul di belakang kepala', size: 'ig45', n: 1, bg: { t: 'c', c: '#111111' },
    slots: [T_({ cut: 1, role: 'Foto' })],
    texts: () => [TX('MENGETIK', { font: 'GFS Didot', w: 400, up: 1, ls: 0.06, size: 0.21, fitW: 0.9, x: 0.5, y: 0.13, behind: 1, sh: { a: 0.2, c: '#000000', b: 0.3, x: 0, y: 0.02 } }),
      TX('EDISI SPESIAL', { font: 'Montserrat', w: 800, up: 1, ls: 0.35, size: 0.026, x: 0.07, y: 0.235, anc: 'l', al: 'left' }),
      TX('Cerita Perjalanan\nyang Tak Terlupakan', { font: 'Playfair Display', w: 700, size: 0.052, x: 0.07, y: 0.82, anc: 'l', al: 'left', lh: 1.05, sh: { a: 0.45, c: '#000000', b: 0.35, x: 0, y: 0.03 } }),
      TX('VOL. 01  \u2022  2026', { font: 'Montserrat', w: 700, up: 1, ls: 0.25, size: 0.022, x: 0.07, y: 0.91, anc: 'l', al: 'left' })] },
  { id: 'shutter', name: 'Shutter Kota', desc: 'Panning: objek tajam, latar melesat', size: 'igst', n: 1, bg: { t: 'c', c: '#000000' },
    slots: [T_({ fx: 'motion', role: 'Foto' })],
    texts: () => [TX('NIGHT RIDE', { font: 'Anton', w: 400, up: 1, ls: 0.12, size: 0.13, fitW: 0.86, x: 0.5, y: 0.13, sh: { a: 0.5, c: '#000000', b: 0.35, x: 0, y: 0.03 } }), TX('tokyo \u2022 shinjuku', { font: 'Montserrat', w: 600, ls: 0.3, size: 0.028, x: 0.5, y: 0.19 })] },
  { id: 'duo', name: 'Kartu Ganda 3D', desc: 'Dua kartu kaca, orang menyembul', size: 'igst', n: 3, bg: { t: 'blur', c: '#dfe6ee', dim: 0.15 },
    slots: [T_({ role: 'Latar' }), T_({ x: 0.1, y: 0.27, w: 0.8, h: 0.22, r: 0.05, pop: 1, glass: 1, role: 'Kartu 1' }), T_({ x: 0.1, y: 0.58, w: 0.8, h: 0.22, r: 0.05, pop: 1, glass: 1, role: 'Kartu 2' })],
    texts: () => [TX('Trip Bareng', { font: 'Plus Jakarta Sans', w: 800, size: 0.075, fitW: 0.86, x: 0.5, y: 0.13, sh: { a: 0.35, c: '#000000', b: 0.3, x: 0, y: 0.02 } }), TX('Hari 1', { font: 'Plus Jakarta Sans', w: 700, size: 0.04, x: 0.15, y: 0.46, anc: 'l', al: 'left' }), TX('Hari 2', { font: 'Plus Jakarta Sans', w: 700, size: 0.04, x: 0.15, y: 0.77, anc: 'l', al: 'left' })] }
];
const TPL_BY = {}; TPLS.forEach(t => { TPL_BY[t.id] = t; });
const isTpl = () => !!(doc && doc.mode === 'collage' && doc.col.tpl && TPL_BY[doc.col.tpl]);
/* layout & sel */
const _layoutOf0 = layoutOf;
layoutOf = function (col) { const T = col.tpl && TPL_BY[col.tpl]; if (T) return { id: 'tpl:' + T.id, k: 'tpl', n: T.slots.length, cells: T.slots.map(s => [s.x, s.y, s.w, s.h, s.rot]) }; return _layoutOf0(col); };
const _cellRects0 = cellRects;
cellRects = function (col, W, H) {
  const T = col.tpl && TPL_BY[col.tpl]; if (!T) return _cellRects0(col, W, H);
  /* tepi dibulatkan ke piksel (tanpa garis tipis di sambungan); slot tanpa sudut membulat sedikit ditumpuk */
  const px = (a, b) => [Math.floor(a + 1e-6), Math.ceil(b - 1e-6)];
  return T.slots.map(s => { const [x0, x1] = px(s.x * W, (s.x + s.w) * W), [y0, y1] = px(s.y * H, (s.y + s.h) * H); return { x: x0, y: y0, w: x1 - x0, h: y1 - y0, s }; }).map(o => { const s = o.s; return ({ x: o.x, y: o.y, w: o.w, h: o.h, rot: (s.rot || 0) * Math.PI / 180, frame: s.frame ? 1 : 0, k: s.frame ? 'pola' : 'tpl', rad: (s.r || 0) * W, s }); });
};
const _frameInner0 = frameInner;
frameInner = function (r) { if (r.k === 'tpl') return { x: -r.w / 2, y: -r.h / 2, w: r.w, h: r.h }; return _frameInner0(r); };
/* sinkron sel referensi (Siang & Malam) */
function tplSync(col) { const T = col.tpl && TPL_BY[col.tpl]; if (!T) return; T.slots.forEach((s, i) => { const c = col.cells[i]; if (!c) return; c.ref = s.ref == null ? undefined : s.ref; if (s.ref != null) c.img = (col.cells[s.ref] || {}).img || null; }); }
const _assignUnused0 = assignUnused;
assignUnused = function () {
  const c = doc.col; if (!c.tpl) return _assignUnused0();
  tplSync(c); const used = new Set(c.cells.filter(x => x.ref == null).map(x => x.img).filter(Boolean)), free = doc.imgs.filter(i => !used.has(i.id));
  for (const cell of c.cells) if (cell.ref == null && !cell.img && free.length) { cell.img = free.shift().id; cell.z = 1; cell.px = cell.py = 0; tplCellFx(c, c.cells.indexOf(cell)); }
  tplSync(c);
};
function tplCellFx(col, i) {
  const T = TPL_BY[col.tpl], s = T && T.slots[i], cell = col.cells[i], im = cell && cell.img && imgById(cell.img); if (!s || !im) return;
  if (s.fx === 'motion' && !(im.p.bfx && im.p.bfx.mode)) Object.assign(im.p.bfx, { mode: 'motion', amt: 0.6, ang: 0, light: 0.7, dim: -0.1, sat: 0.15, cx: 0.5, cy: 0.5, inv: 0 });
}
/* gambar template */
const _drawCollage0 = drawCollage;
drawCollage = function (ctx, col, W, H, get, o) {
  const T = col.tpl && TPL_BY[col.tpl]; if (!T) return _drawCollage0(ctx, col, W, H, get, o);
  o = o || {}; tplSync(col);
  drawBg(ctx, col, W, H, get);
  const rs = cellRects(col, W, H), k = W / 1080;
  rs.forEach((r, i) => {
    const s = r.s, cell = col.cells[i] || {}, im = cell.img && imgById(cell.img);
    ctx.save(); ctx.translate(r.x + r.w / 2, r.y + r.h / 2); ctx.rotate(r.rot);
    const f = frameInner(r), rad = r.frame ? 2 * k : r.rad;
    if (r.frame || s.glass || s.bd || s.sh) { ctx.save(); ctx.shadowColor = 'rgba(0,0,0,' + (s.glass ? 0.28 : 0.35) + ')'; ctx.shadowBlur = 34 * k * ctxScale(ctx); ctx.shadowOffsetY = 12 * k * ctxScale(ctx); ctx.fillStyle = r.frame ? '#fffdf8' : s.glass || s.bd ? '#ffffff' : '#000000'; rrect(ctx, -r.w / 2, -r.h / 2, r.w, r.h, rad); ctx.fill(); ctx.restore(); }
    ctx.save(); rrect(ctx, f.x, f.y, f.w, f.h, r.frame ? 0 : rad); ctx.clip();
    let geo = null;
    if (im && rtOf(im).base) { const gm = cellImgGeom(cell, im, f.w, f.h); const src = get(im, gm.dw, gm.dh); ctx.drawImage(src, f.x + gm.x, f.y + gm.y, gm.dw, gm.dh); geo = { gm, src }; }
    else tplPlaceholder(ctx, f, i, k, o.thumb);
    if (s.glass) { const g = ctx.createLinearGradient(f.x, f.y, f.x + f.w * 0.6, f.y + f.h); g.addColorStop(0, 'rgba(255,255,255,.22)'); g.addColorStop(0.45, 'rgba(255,255,255,.04)'); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(f.x, f.y, f.w, f.h); ctx.fillStyle = 'rgba(20,24,30,.12)'; ctx.fillRect(f.x, f.y, f.w, f.h); }
    ctx.restore();
    if (s.glass) { ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 2.2 * k; rrect(ctx, -r.w / 2 + 1.1 * k, -r.h / 2 + 1.1 * k, r.w - 2.2 * k, r.h - 2.2 * k, Math.max(0, rad - 1.1 * k)); ctx.stroke(); ctx.restore(); }
    if (s.bd) { ctx.save(); ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 12 * k; rrect(ctx, -r.w / 2, -r.h / 2, r.w, r.h, rad); ctx.stroke(); ctx.restore(); }
    ctx.restore();
    r.inner = f; r.geo = geo; r.im = im;
  });
  return rs;
};
function tplPlaceholder(ctx, f, i, k, thumb) {
  const pal = [['#9fc4e8', '#e9dcc8'], ['#f3c6a8', '#c7d8f0'], ['#b9d9c6', '#f1e3c5'], ['#d4c4ef', '#f6d4dc']][i % 4];
  const g = ctx.createLinearGradient(f.x, f.y, f.x, f.y + f.h); g.addColorStop(0, pal[0]); g.addColorStop(1, pal[1]); ctx.fillStyle = g; ctx.fillRect(f.x, f.y, f.w, f.h);
  if (thumb) return;
  const s = Math.min(f.w, f.h); ctx.fillStyle = 'rgba(255,255,255,.85)'; ctx.beginPath(); ctx.arc(f.x + f.w / 2, f.y + f.h / 2, s * 0.13, 0, 7); ctx.fill();
  ctx.strokeStyle = '#6d7380'; ctx.lineWidth = Math.max(2, s * 0.014); const q = s * 0.055; ctx.beginPath(); ctx.moveTo(f.x + f.w / 2 - q, f.y + f.h / 2); ctx.lineTo(f.x + f.w / 2 + q, f.y + f.h / 2); ctx.moveTo(f.x + f.w / 2, f.y + f.h / 2 - q); ctx.lineTo(f.x + f.w / 2, f.y + f.h / 2 + q); ctx.stroke();
}
/* lapisan 3D: potongan objek di atas kartu (pop) / di depan teks (cut) */
function tplCuts(ctx, rs, W, H) {
  const k = W / 1080;
  rs.forEach(r => {
    const s = r.s; if (!s || !(s.pop || s.cut) || !r.geo || !r.im) return;
    const c = cutOut(r.im, r.geo.src, r.geo.src.width, r.geo.src.height, 'tc' + Math.round(r.x) + '_' + Math.round(r.y)); if (!c) return;
    const f = r.inner, gm = r.geo.gm;
    ctx.save(); ctx.translate(r.x + r.w / 2, r.y + r.h / 2); ctx.rotate(r.rot);
    if (s.pop) { /* hanya bagian yang keluar ke atas & sedikit ke samping */
      const ext = r.h * 0.75, sx = r.w * 0.06; ctx.beginPath(); ctx.rect(f.x - sx, f.y - ext, f.w + sx * 2, ext + f.h * 0.5); ctx.clip();
      ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.28)'; ctx.shadowBlur = 18 * k * ctxScale(ctx); ctx.shadowOffsetY = 6 * k * ctxScale(ctx);
      ctx.drawImage(c, f.x + gm.x, f.y + gm.y, gm.dw, gm.dh); ctx.restore();
    } else { ctx.beginPath(); ctx.rect(f.x, f.y, f.w, f.h); ctx.clip(); ctx.drawImage(c, f.x + gm.x, f.y + gm.y, gm.dw, gm.dh); }
    ctx.restore();
  });
}
/* komposisi kolase/template: teks 'behind' di bawah potongan objek */
const _composeInto0 = composeInto;
composeInto = function (ctx, W, H, o) {
  if (!(doc.mode === 'collage' && doc.col.tpl)) return _composeInto0(ctx, W, H, o);
  const rs = drawCollage(ctx, doc.col, W, H, o.get, o);
  const back = doc.texts.filter(t => t.behind), front = doc.texts.filter(t => !t.behind);
  drawTexts(ctx, back, W, H); tplCuts(ctx, rs, W, H); drawTexts(ctx, front, W, H);
  return rs;
};
function tplCutImgs() { if (!isTpl()) return []; const T = TPL_BY[doc.col.tpl]; return doc.col.cells.map((c, i) => (T.slots[i] && (T.slots[i].pop || T.slots[i].cut || T.slots[i].fx) && c.img) ? imgById(c.img) : null).filter(Boolean); }
/* masker siap untuk ekspor */
const _openExport0 = openExport;
openExport = async function () {
  const list = isTpl() ? tplCutImgs() : (doc && doc.mode === 'photo' && curImg() && (curImg().texts.some(t => t.behind) || (curImg().p.bfx && curImg().p.bfx.mode)) ? [curImg()] : []);
  for (const im of list) { try { await maskWait(im, true); } catch (e) {} }
  return _openExport0();
};

/* ---------- dokumen template baru ---------- */
async function newTemplateDoc(id, files) {
  const T = TPL_BY[id]; if (!T) return;
  await saveNow();
  const prevDoc = doc, d = newDoc('collage'); doc = d;
  const sz = SIZE_BY[T.size] || SIZE_BY.ig45;
  Object.assign(d.col, { size: sz.id, W: sz.W, H: sz.H, slides: 1, tpl: T.id, lay: 'tpl:' + T.id, bg: clone(T.bg), gap: 0, margin: 0, radius: 0, shadow: 0, frame: 0, res: 1440 });
  d.col.cells = T.slots.map(s => ({ img: null, z: 1, px: 0, py: 0, ref: s.ref == null ? undefined : s.ref }));
  d.texts = T.texts().map(t => Object.assign(t, { id: uid() })); d.name = T.name + ' ' + d.name.replace(/^Kolase /, '');
  if (files && files.length) { const imgs = await importMany(files, true); if (!imgs.length && prevDoc) { doc = prevDoc; return; } d.imgs.push(...imgs); }
  assignUnused();
  SEL.clear(); ST.tool = 'tpl'; resetHistory(); afterDocChange(true); saveSoon();
  ensureFonts(d.texts).then(requestDraw);
  if (d.imgs.length) { const pend = tplCutImgs(); for (const im of pend) { try { await maskWait(im, true); } catch (e) {} } requestDraw(); if (ST.tool === 'tpl') renderPanel(); }
}
function applyTemplate(id) {
  const T = TPL_BY[id], c = doc.col; if (!T) return;
  const old = c.cells.filter(x => x.ref == null && x.img).map(x => x.img);
  const sz = SIZE_BY[T.size] || SIZE_BY.ig45;
  Object.assign(c, { size: sz.id, W: sz.W, H: sz.H, slides: 1, tpl: T.id, lay: 'tpl:' + T.id, bg: clone(T.bg), gap: 0, margin: 0, radius: 0, shadow: 0, frame: 0 });
  c.cells = T.slots.map(s => ({ img: null, z: 1, px: 0, py: 0, ref: s.ref == null ? undefined : s.ref }));
  let j = 0; c.cells.forEach((cell, i) => { if (cell.ref == null && j < old.length) { cell.img = old[j++]; tplCellFx(c, i); } });
  doc.texts = T.texts().map(t => Object.assign(t, { id: uid() }));
  assignUnused(); V.fit = true; commit('Template ' + T.name); afterDocChange(true);
  ensureFonts(doc.texts).then(requestDraw);
  const pend = tplCutImgs(); if (pend.length) (async () => { for (const im of pend) { try { await maskWait(im, true); } catch (e) {} } requestDraw(); if (ST.tool === 'tpl') renderPanel(); })();
}

/* ---------- panel ---------- */
const TABS_T = [['tpl', 'Template', 'tpl'], ['text', 'Teks', 'text']];
const _setTabs0 = setTabs;
setTabs = function () {
  if (!isTpl()) return _setTabs0();
  if (!TABS_T.find(t => t[0] === ST.tool)) ST.tool = TABS_T[0][0];
  $('#ps-tabs').innerHTML = TABS_T.map(t => '<button data-tool="' + t[0] + '" class="' + (t[0] === ST.tool ? 'on' : '') + '">' + ic(t[2]) + '<span>' + t[1] + '</span></button>').join('');
};
function tplGallery(cur, act) {
  return '<div class="ps-tpls">' + TPLS.map(t => '<button class="ps-tplb' + (t.id === cur ? ' on' : '') + '" data-a="' + (act || 'tplnew') + '" data-v="' + t.id + '"><canvas data-tplc="' + t.id + '"></canvas><b>' + t.name + '</b><small>' + t.desc + ' \u00b7 ' + t.n + ' foto</small></button>').join('') + '</div>';
}
PANELS.tpl = () => {
  const c = doc.col, T = TPL_BY[c.tpl], used = new Set(c.cells.filter(x => x.ref == null).map(x => x.img));
  const fillable = T.slots.map((s, i) => [s, i]).filter(x => x[0].ref == null), empty = fillable.filter(x => !c.cells[x[1]].img).length;
  return '<div class="ps-card"><b>' + ic('img') + ' Foto (' + doc.imgs.length + ')</b><div class="ps-tray">' + doc.imgs.map(o => '<button class="ps-th' + (used.has(o.id) ? ' used' : '') + '" data-a="trayimg" data-drag="' + o.id + '" data-v="' + o.id + '"><canvas data-th="' + o.id + '"></canvas></button>').join('') + '<button class="ps-th ps-add" data-a="addphotos">' + ic('plus') + '</button></div>' +
    '<p class="ps-note">' + (empty ? '<b>' + empty + ' slot kosong.</b> ' : '') + 'Seret foto dari baris ini ke slot di kanvas, atau ketuk slot lalu ketuk foto. Seret di dalam slot untuk menggeser, cubit/scroll untuk zoom.</p></div>' +
    '<div class="ps-card"><b>' + ic('layers') + ' Efek 3D</b><p>Objek dipisahkan otomatis oleh AI. Bila ada bagian yang kurang pas, pilih slot lalu <b>Edit Foto \u2192 Fokus AI</b> untuk merapikan masker.</p>' +
    '<div class="ps-ckrow"><span class="ps-aist' + (tplCutImgs().some(maskPending) ? ' busy">AI memisahkan objek\u2026' : (tplCutImgs().length ? ' ok">' + ic('check') + ' Objek siap' : '">Belum ada foto')) + '</span></div></div>' +
    sec('tplg', 'Ganti Template (foto tetap)', tplGallery(c.tpl, 'tplset'), false) +
    sec('bg', 'Latar', '<div class="ps-colors">' + BG_PRE.map((b, i) => '<button class="ps-sw' + (b[0] === 'blur' ? ' ps-swblur' : '') + '" data-a="bg" data-v="' + i + '" style="background:' + (b[0] === 'g' ? 'linear-gradient(135deg,' + b[1] + ',' + b[2] + ')' : b[0] === 'blur' ? '#888' : b[1]) + '">' + (b[0] === 'blur' ? 'Blur' : '') + '</button>').join('') + '<label class="ps-sw ps-swc"><input type="color" data-kc="c:bg.c" value="' + (c.bg.c || '#ffffff') + '"></label></div>', false) +
    sec('res', 'Resolusi', '<div class="ps-seg">' + [[1080, '<b>1080</b><small>Standar</small>'], [1440, '<b>1440</b><small>HD</small>'], [2160, '<b>2160</b><small>Ultra / Cetak</small>']].map(r => chip(r[1], 'res', 'data-v="' + r[0] + '"', c.res === r[0])).join('') + '</div>', false);
};
POST.tpl = () => { drawThumbs(); drawTplThumbs(); };
function drawTplThumbs() {
  $$('canvas[data-tplc]').forEach(cv => {
    const T = TPL_BY[cv.dataset.tplc], sz = SIZE_BY[T.size] || SIZE_BY.ig45, w = 120, h = Math.round(w * sz.H / sz.W);
    cv.width = w; cv.height = h; const x = cv.getContext('2d'), s = w / sz.W;
    const col = Object.assign(defCollage(), { W: sz.W, H: sz.H, tpl: T.id, bg: clone(T.bg), cells: T.slots.map(sl => ({ img: null, ref: sl.ref })) });
    x.save(); x.scale(s, s); drawCollage(x, col, sz.W, sz.H, () => null, { thumb: true });
    const tx = T.texts(); drawTexts(x, tx, sz.W, sz.H);
    x.restore();
  });
}
Object.assign(ACT, {
  tplstart: () => { closeAllModals(); openTplPicker(); },
  tplnew: b => { closeAllModals(); UI.tplPick = b.dataset.v; pickFiles({ t: 'tpl', id: b.dataset.v }, true); },
  tplset: b => applyTemplate(b.dataset.v)
});
function openTplPicker() {
  const m = modal('<div class="ps-dh"><h3>' + ic('tpl') + ' Template Tren 3D</h3><button class="ps-ib" data-close>' + ic('x') + '</button></div><p>Pilih template, lalu pilih foto. AI otomatis memisahkan objek agar tampak 3D.</p>' + tplGallery('') +
    '<p class="ps-note">Semua proses berjalan di perangkat Anda. Saat pertama dipakai, model AI (\u00b18 MB) diunduh sekali.</p>', 'ps-wide');
  injectFontCSS(FONTS.filter(f => /Plus Jakarta|Inter|Bebas|Cormorant|Playfair|Montserrat|Caveat|GFS Didot|Anton/.test(f[0])));
  drawTplThumbs(); setTimeout(drawTplThumbs, 1200);
  m.addEventListener('click', e => { const a = e.target.closest('[data-a]'); if (a && ACT[a.dataset.a]) { closeModal(m); ACT[a.dataset.a](a); } });
}
/* pilih file untuk template */
const _onFiles0 = onFiles;
onFiles = async function (files, mode) {
  if (mode && mode.t === 'tpl') { const fs = Array.from(files || []).filter(f => /^image\//.test(f.type) || /\.(jpe?g|png|webp|heic|heif|avif)$/i.test(f.name)); if (!fs.length) return; return newTemplateDoc(mode.id, fs); }
  return _onFiles0(files, mode);
};
/* tambah foto ke template: isi slot kosong, jangan ubah tata letak */
const _addPhotos0 = addPhotos;
addPhotos = async function (files) {
  if (!isTpl()) return _addPhotos0(files);
  const imgs = await importMany(files, true); if (!imgs.length) return;
  doc.imgs.push(...imgs); assignUnused(); commit('Tambah foto'); afterDocChange();
  for (const im of tplCutImgs()) maskReady(im);
};
/* isi slot (ketuk foto di baris) + efek otomatis */
const _trayimg0 = ACT.trayimg;
ACT.trayimg = b => { if (!isTpl()) return _trayimg0(b); tplPut(b.dataset.v, SEL.cell); };
function tplPut(id, i) {
  const c = doc.col; if (i == null || i < 0 || (c.cells[i] && c.cells[i].ref != null)) i = c.cells.findIndex(x => x.ref == null && !x.img);
  if (i < 0) { toast('Pilih slot di kanvas dulu'); return; }
  const j = c.cells.findIndex(x => x.ref == null && x.img === id), cell = c.cells[i];
  if (j >= 0 && j !== i) c.cells[j] = Object.assign(c.cells[j], { img: cell.img, z: 1, px: 0, py: 0 });
  c.cells[i] = Object.assign(cell, { img: id, z: 1, px: 0, py: 0 }); tplCellFx(c, i); tplSync(c);
  SEL.cell = i; commit('Isi slot'); renderPanel(); updCellBar(); requestDraw();
  const im = imgById(id); if (im && tplCutImgs().includes(im)) maskReady(im);
}
/* klik pada slot referensi -> pilih slot sumber */
const _hitCell0 = hitCell;
hitCell = function (px, py) { const i = _hitCell0(px, py); return i; };

/* ---------- seret foto dari baris ke slot (mouse & sentuh) ---------- */
(function bindTrayDrag() {
  let D = null;
  A.addEventListener('pointerdown', e => {
    const b = e.target.closest('[data-drag]'); if (!b || !doc || doc.mode !== 'collage') return;
    D = { id: b.dataset.drag, x: e.clientX, y: e.clientY, pid: e.pointerId, on: false, ghost: null, src: b };
  });
  A.addEventListener('pointermove', e => {
    if (!D || e.pointerId !== D.pid) return;
    if (!D.on) { if (Math.hypot(e.clientX - D.x, e.clientY - D.y) < 10) return; if (e.pointerType === 'touch' && Math.abs(e.clientY - D.y) < Math.abs(e.clientX - D.x) * 0.7 && !(e.clientY < D.y - 10)) { /* geser horizontal = scroll baris */ D = null; return; }
      D.on = true; const g = document.createElement('canvas'), s = D.src.querySelector('canvas'); g.width = s ? s.width : 72; g.height = s ? s.height : 72; if (s) g.getContext('2d').drawImage(s, 0, 0);
      g.className = 'ps-ghost'; A.appendChild(g); D.ghost = g; try { D.src.setPointerCapture(e.pointerId); } catch (er) {} }
    e.preventDefault(); const r = A.getBoundingClientRect(); D.ghost.style.left = (e.clientX - r.left - 36) + 'px'; D.ghost.style.top = (e.clientY - r.top - 36) + 'px';
    const cr = cv.getBoundingClientRect(); if (e.clientX >= cr.left && e.clientX <= cr.right && e.clientY >= cr.top && e.clientY <= cr.bottom) { const p = [(e.clientX - cr.left - V.ox) / V.z, (e.clientY - cr.top - V.oy) / V.z], i = hitCell(p[0], p[1]); if (i !== ST.dropCell) { ST.dropCell = i; requestDraw(); } } else if (ST.dropCell != null) { ST.dropCell = null; requestDraw(); }
  }, { passive: false });
  const end = e => {
    if (!D || e.pointerId !== D.pid) return; const d = D; D = null;
    if (d.ghost) d.ghost.remove();
    if (!d.on) return;
    const i = ST.dropCell; ST.dropCell = null; requestDraw();
    if (i != null && i >= 0) { if (isTpl()) tplPut(d.id, i); else { SEL.cell = i; _trayimg0({ dataset: { v: d.id } }); } }
    A.__noClick = Date.now();
  };
  A.addEventListener('pointerup', end); A.addEventListener('pointercancel', end);
  A.addEventListener('click', e => { if (A.__noClick && Date.now() - A.__noClick < 300 && e.target.closest('[data-drag]')) { e.stopPropagation(); e.preventDefault(); } }, true);
})();
/* sorot slot tujuan saat menyeret */
const _drawOverlays0 = drawOverlays;
drawOverlays = function (W, H) {
  _drawOverlays0(W, H);
  if (doc && doc.mode === 'collage' && ST.dropCell != null && ST.dropCell >= 0 && lastRects[ST.dropCell]) { const r = lastRects[ST.dropCell], c = cx; c.save(); c.translate(r.x + r.w / 2, r.y + r.h / 2); c.rotate(r.rot); c.fillStyle = 'rgba(255,79,123,.18)'; c.fillRect(-r.w / 2, -r.h / 2, r.w, r.h); c.strokeStyle = '#ff4f7b'; c.lineWidth = lw(4); c.strokeRect(-r.w / 2, -r.h / 2, r.w, r.h); c.restore(); }
  if (isTpl() && tplCutImgs().some(maskPending)) { const c = cx; c.save(); c.font = '600 ' + lw(13) + 'px system-ui'; const t = 'AI memisahkan objek\u2026', tw = c.measureText(t).width; c.fillStyle = 'rgba(0,0,0,.6)'; rrect(c, W / 2 - tw / 2 - lw(12), lw(12), tw + lw(24), lw(30), lw(15)); c.fill(); c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(t, W / 2, lw(27)); c.restore(); }
};
/* file dari OS dijatuhkan tepat di slot */
A.addEventListener('drop', e => {
  if (!isTpl() || !e.dataTransfer || !e.dataTransfer.files.length) return;
  const cr = cv.getBoundingClientRect(); if (e.clientX < cr.left || e.clientX > cr.right || e.clientY < cr.top || e.clientY > cr.bottom) return;
  const p = [(e.clientX - cr.left - V.ox) / V.z, (e.clientY - cr.top - V.oy) / V.z], i = hitCell(p[0], p[1]); if (i < 0) return;
  e.preventDefault(); e.stopImmediatePropagation(); A.classList.remove('ps-drop');
  (async () => { const [img] = await importMany([e.dataTransfer.files[0]], true); if (!img) return; doc.imgs.push(img); tplPut(img.id, i); })();
}, true);

/* ---- z-init.js ---- */
/* ================= MULAI ================= */
(async function init() {
  let glOk = false;
  try { glOk = GL.init(); } catch (e) { console.error(e); }
  if (!glOk) { $('#ps-empty').innerHTML = '<div class="ps-hero2"><h2>Browser tidak didukung</h2><p>Photo Studio membutuhkan WebGL2. Gunakan Chrome, Edge, Firefox, atau Safari versi terbaru.</p></div>'; return; }
  stageInit(); bindUI(); setTabs(); renderPanel(); requestDraw();
  /* sisipkan ikon ke tombol statis */
  $$('[data-ico]').forEach(el => { el.insertAdjacentHTML('afterbegin', ic(el.dataset.ico)); });
  renderRecent();
  if (/pstest/.test(location.search + location.hash)) window.__ps = { get doc() { return doc; }, GL, renderFinal, commit, requestDraw, renderPanel, cropOut, LOOKS, DEF_P, DEF_FX, clone, applyAuto, autoDetail, curImg, ST, SEL, V, afterDocChange, setTool, texts, defText, ensureFonts, mkCanvas, wcall };
  $('#ps-busy button').addEventListener('click', () => { if (busyCancel) busyCancel(); });
  window.addEventListener('beforeunload', () => { if (doc) saveNow(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && doc) saveNow(); });
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
})();


})();
