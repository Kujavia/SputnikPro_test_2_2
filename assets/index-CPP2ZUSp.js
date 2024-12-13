(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();window.check_mark=function(){const e=document.getElementById("check-mark_button");e.style.display="inline",setTimeout(function(){e.style.display="none"},5e3)};window.showContent_listing=function(){fetch("./src/html/listing.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_newProducts=function(){fetch("./src/html/new_products.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_locks=function(){fetch("./src/html/locks.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_outputAssort=function(){fetch("./src/html/output_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_tender=function(){fetch("./src/html/tender.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_priceChange=function(){fetch("./src/html/price_change.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promoRatio=function(){fetch("./src/html/promo_ratio.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};const w="/SputnikPro_test_2_2/images/chart_regAssort.png";window.tb_regular_assort__chart=function(){const e=document.getElementById("tb_regular_assort_chart"),t=w,n=e.contentDocument||e.contentWindow.document;n.open(),n.write(`<html>
            <head>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        justify-content: start;
                        align-items: start;
                        height: 100vh;
                    }
                    img {
                        min-width: 100%;
                        min-height: 120%;
                    }
                </style>
            </head>
            <body>
                <img src="${t}" alt="Image" />
            </body>
        </html>`),n.close()};window.showContent_summaryPlan=function(){fetch("./src/html/summary_plan.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.tbRegAssortButton=function(){const t=document.getElementById("regular_assort_method").value;let n;if(t==="ra_moving_average")n="./images/demo_file/test_forecast_csv.csv";else if(t==="ra_not_selected")n="./images/demo_file/test_forecast_csv_nf.csv";else if(t==="ra_weighted_average")n="./images/demo_file/test_forecast_csv2.csv";else if(t==="ra_linear_regression")n="./images/demo_file/test_forecast_csv3.csv";else if(t==="ra_multiple_regression")n="./images/demo_file/test_forecast_csv.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(n,{download:!0,header:!0,complete:function(s){const a=document.getElementById("tb_regular_assort_results"),o=a.contentDocument||a.contentWindow.document;o.open(),o.write(`<html>
                <head>
                    <title>CSV Data</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 0px;
                            font-size: 12px;
                        }
                        th {
                            background-color: #4CAF50; /* Цвет фона заголовков */
                            font-size: 14px;
                            color: white; /* Цвет текста заголовков */
                            padding: 10px;
                        }
                        td {
                            border: 1px solid #ddd; /* Цвет границ ячеек */
                            padding: 8px;
                        }
                        tr:nth-child(even) {
                            background-color: #f2f2f2; /* Цвет фона четных строк */
                        }
                        tr:hover {
                            background-color: #ddd; /* Цвет фона строки при наведении */
                        }
                    </style>
                </head>
                <body>
                    <table>
                        <thead>
                            <tr>`),Object.keys(s.data[0]).forEach(r=>{o.write(`<th>${r}</th>`)}),o.write("</tr></thead><tbody>"),s.data.forEach(r=>{o.write("<tr>"),Object.values(r).forEach(l=>{o.write(`<td>${l}</td>`)}),o.write("</tr>")}),o.write("</tbody></table>"),o.write("</body></html>"),o.close()}})};window.tbSeasonalityPreview=function(){const t=document.getElementById("seasonality_method").value;let n;if(t==="fluctuation_trend")n="./images/demo_file/test_forecast_csv.csv";else if(t==="fluctuation_average")n="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(n,{download:!0,header:!0,complete:function(s){const a=document.getElementById("tb_seasonality"),o=a.contentDocument||a.contentWindow.document;o.open(),o.write(`<html>
                <head>
                    <title>CSV Data</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 0px;
                            font-size: 12px;
                        }
                        th {
                            background-color:  rgb(163, 210, 242); /* Цвет фона заголовков */
                            font-size: 14px;
                            color: white; /* Цвет текста заголовков */
                            padding: 10px;
                        }
                        td {
                            border: 1px solid #ddd; /* Цвет границ ячеек */
                            padding: 8px;
                        }
                        tr:nth-child(even) {
                            background-color: #f2f2f2; /* Цвет фона четных строк */
                        }
                        tr:hover {
                            background-color: #ddd; /* Цвет фона строки при наведении */
                        }
                    </style>
                </head>
                <body>
                    <table>
                        <thead>
                            <tr>`),Object.keys(s.data[0]).forEach(r=>{o.write(`<th>${r}</th>`)}),o.write("</tr></thead><tbody>"),s.data.forEach(r=>{o.write("<tr>"),Object.values(r).forEach(l=>{o.write(`<td>${l}</td>`)}),o.write("</tr>")}),o.write("</tbody></table>"),o.write("</body></html>"),o.close()}})};window.tbPromoRatioPerviewButton=function(){const t=document.getElementById("promoRatio_method").value;let n;if(t==="promoRatio_method_average")n="./images/demo_file/test_forecast_csv.csv";else if(t==="promoRatio_method_mediana")n="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(n,{download:!0,header:!0,complete:function(s){const a=document.getElementById("tb_promoRatio"),o=a.contentDocument||a.contentWindow.document;o.open(),o.write(`<html>
                <head>
                    <title>CSV Data</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 0px;
                            font-size: 12px;
                        }
                        th {
                            background-color: #4CAF50; /* Цвет фона заголовков */
                            font-size: 14px;
                            color: white; /* Цвет текста заголовков */
                            padding: 10px;
                        }
                        td {
                            border: 1px solid #ddd; /* Цвет границ ячеек */
                            padding: 8px;
                        }
                        tr:nth-child(even) {
                            background-color: #f2f2f2; /* Цвет фона четных строк */
                        }
                        tr:hover {
                            background-color: #ddd; /* Цвет фона строки при наведении */
                        }
                    </style>
                </head>
                <body>
                    <table>
                        <thead>
                            <tr>`),Object.keys(s.data[0]).forEach(r=>{o.write(`<th>${r}</th>`)}),o.write("</tr></thead><tbody>"),s.data.forEach(r=>{o.write("<tr>"),Object.values(r).forEach(l=>{o.write(`<td>${l}</td>`)}),o.write("</tr>")}),o.write("</tbody></table>"),o.write("</body></html>"),o.close()}})};function b(){document.getElementById("modal").style.display="flex"}function g(){document.getElementById("modal").style.display="none"}function y(){const e=document.querySelectorAll('#modalContent input[type="checkbox"]'),t=[];e.forEach(n=>{n.checked&&t.push(n.name)})}window.tbRegAssortOptimizationButton=b;window.ra_closeModalButton=g;window.ra_saveButton=y;const _="/SputnikPro_test_2_2/images/users/ZilevichElizaveta.jpg",v="/SputnikPro_test_2_2/images/users/TkachevOleg.jpg",x="/SputnikPro_test_2_2/images/users/TolokGalina.jpg",C="/SputnikPro_test_2_2/images/users/question.jpg",f="/SputnikPro_test_2_2/images/users/user1.png";var p,u,k=function(){$.when($("[data-scrollbar=true]").each(function(){generateSlimScroll($(this))})).done(function(){$('[data-scrollbar="true"]').mouseover()})},T=function(){let e=$(".sidebar").attr("data-disable-slide-animation")?0:250;$(".sidebar .nav > .has-sub > a").click(function(){let t=$(this).next(".sub-menu"),n=$(".sidebar .nav > li.has-sub > .sub-menu").not(t);$(".page-sidebar-minified").length===0&&($(n).closest("li").addClass("closing"),$(n).slideUp(e,function(){$(n).closest("li").addClass("closed").removeClass("expand closing")}),$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let s=$(this).closest("li");$(t).is(":visible")?($(s).addClass("expand"),$(s).removeClass("closed")):($(s).addClass("closed"),$(s).removeClass("expand")),$(s).removeClass("expanding closing")}))}),$(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function(){if($(".page-sidebar-minified").length===0){let t=$(this).next(".sub-menu");$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let n=$(this).closest("li");$(t).is(":visible")?($(n).addClass("expand"),$(n).removeClass("closed")):($(n).addClass("closed"),$(n).removeClass("expand")),$(n).removeClass("expanding closing")})}})},E=function(){try{if(typeof Storage<"u"&&typeof localStorage<"u"){let e=window.location.href;e=(e=e.split("?"))[0];let t=localStorage.getItem(e);if(t){t=JSON.parse(t);let n=0;$.when($('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function(){let s=t[n],a=$(this);s&&$.each(s,function(o,i){let r=$('[data-sortable-id="'+i.id+'"]').not('[data-init="true"]');if($(r).length!==0){let l=$(r).clone();$(r).remove(),$(a).append(l),$('[data-sortable-id="'+i.id+'"]').attr("data-init","true")}}),n++})).done(function(){window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))})}}else alert("Your browser is not supported with the local storage")}catch(e){console.log(e)}},S=function(){$(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")},M=function(){$(window).on("scroll",function(){handleCheckScrollClass()}),handleCheckScrollClass()},B=function(){$(document).on("click","#float-sub-menu li.has-sub > a",function(e){let t=$(this).next(".sub-menu"),n=$(t).closest("li"),s=!1,a=!1;$(t).is(":visible")?($(n).addClass("closing"),s=!0):($(n).addClass("expanding"),a=!0),$(t).slideToggle({duration:250,progress:function(){let o=$("#float-sub-menu"),i=$(o).height(),r=$(o).offset(),l=$(o).attr("data-offset-top"),d=$(o).attr("data-menu-offset-top"),c=r.top-$(window).scrollTop(),h=$(window).height();if(s&&l<c&&(c=l<c?l:c,$("#float-sub-menu").css({top:c+"px",bottom:"auto"}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"})),a&&h-c<i){let m=h-d-22;$("#float-sub-menu").css({top:"auto",bottom:0}),$("#float-sub-menu-arrow").css({top:"auto",bottom:m+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:m+"px"})}},complete:function(){$(t).is(":visible")?$(n).addClass("expand"):$(n).addClass("closed"),$(n).removeClass("closing expanding")}})}),$(".sidebar .nav > li.has-sub > a").hover(function(){if($("#page-container").hasClass("page-sidebar-minified")){clearTimeout(p);let e=$(this).closest("li").find(".sub-menu").first();if(u==this&&$("#float-sub-menu").length!==0)return;u=this;let t=$(e).html();if(t){let n=$("#sidebar").offset(),s=$("#page-container").hasClass("page-with-right-sidebar")?$(window).width()-n.left:n.left+60,a=$(e).height(),o=$(this).offset().top-$(window).scrollTop(),i=$("#page-container").hasClass("page-with-right-sidebar")?"auto":s,r=$("#page-container").hasClass("page-with-right-sidebar")?s:"auto",l=$(window).height();if($("#float-sub-menu").length===0?(t='<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="'+o+'" data-menu-offset-top="'+o+'" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">	<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>	<div class="float-sub-menu-line" id="float-sub-menu-line"></div>	<ul class="float-sub-menu">'+t+"</ul></div>",$("#page-container").append(t)):($("#float-sub-menu").attr("data-offset-top",o),$("#float-sub-menu").attr("data-menu-offset-top",o),$(".float-sub-menu").html(t)),a<l-o)$("#float-sub-menu").css({top:o,left:i,bottom:"auto",right:r}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"});else{$("#float-sub-menu").css({bottom:0,top:"auto",left:i,right:r});let d=l-o-21;$("#float-sub-menu-arrow").css({top:"auto",bottom:d+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:d+"px"})}}else $("#float-sub-menu").remove(),u=""}},function(){$("#page-container").hasClass("page-sidebar-minified")&&(p=setTimeout(function(){$("#float-sub-menu").remove(),u=""},250))})},I=function(){var e;return{init:function(t){t&&(e=t),this.initLocalStorage(),this.initSidebar(),this.initComponent(),this.initThemePanel(),this.initPageLoad(),$(window).trigger("load"),e&&e.ajaxMode&&this.initAjax()},initSidebar:function(){T(),handleMobileSidebarToggle(),handleSidebarMinify(),B()},initSidebarSelection:function(){S()},initComponent:function(){(!e||e&&!e.disableDraggablePanel)&&k(),handleUnlimitedTabsRender(),handlePanelAction(),handleScrollToTopButton(),handleAfterPageLoadAddClass(),M(),$(window).width()>767&&handleTooltipPopoverActivation()},initLocalStorage:function(){(!e||e&&!e.disableLocalStorage)&&E()},initAjax:function(){handleAjaxMode(e),$.ajaxSetup({cache:!0})},scrollTop:function(){$("html, body").animate({scrollTop:$("body").offset().top},0)}}}();window.showContent_parameters=function(){const e=document.getElementById("mainContent");fetch("./src/html/parameters.html").then(t=>{if(!t.ok)throw new Error("Модуль не отвечает");return t.text()}).then(t=>{e.innerHTML=t}).catch(t=>{console.error("Ошибка при загрузке файла:",t),e.innerHTML="Ошибка при загрузке"})};window.showContent_action=function(){fetch("./src/html/action.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_seasonality=function(){fetch("./src/html/seasonality.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_regular_assort=function(){fetch("./src/html/regular_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promo=function(){fetch("./src/html/promo.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.updateUserImage=function(){const e=document.getElementById("header_top_user"),t=document.getElementById("userImage"),n={option1:C,option2:_,option3:f,option4:v,option5:f,option6:x},s=e.value;if(t.innerHTML="",s&&n[s]){const a=document.createElement("img");a.src=n[s],a.alt=s,a.style.width="50px",a.style.borderRadius="50px",t.appendChild(a)}};$(document).ready(function(){I.init(),Highlight.init()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".visible");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(n=>n.classList.remove("actived")),this.classList.add("actived")})})});
