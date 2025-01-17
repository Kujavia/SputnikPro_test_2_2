(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();window.check_mark=function(){const e=document.getElementById("check-mark_button");e.style.display="inline",setTimeout(function(){e.style.display="none"},5e3)};window.showContent_listing=function(){fetch("./src/html/listing.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_newProducts=function(){fetch("./src/html/new_products.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_locks=function(){fetch("./src/html/locks.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_outputAssort=function(){fetch("./src/html/output_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_tender=function(){fetch("./src/html/tender.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_priceChange=function(){fetch("./src/html/price_change.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promoRatio=function(){fetch("./src/html/promo_ratio.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_planner=function(){fetch("./src/html/planner.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_summaryPlan=function(){fetch("./src/html/summary_plan.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.tbRegAssortButton=function(){const t=document.getElementById("regular_assort_method").value,n=document.getElementById("regular_assort__aggregation-time").value,r=document.getElementById("regular_assort__aggregation-geo").value,m=document.getElementById("regular_assort__aggregation-scu").value,l=document.getElementById("regular_assort_period").value;let s;if(t==="ra_not_selected"||n==="not_selected"||r==="not_selected"||m==="not_selected"||l==="not_selected"){const i=document.getElementById("tb_regular_assort_results"),u=i.contentDocument||i.contentWindow.document;u.open(),u.write(`<html>
            <head>
                <title>Сообщение</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color:rgb(255, 255, 255);
                        text-align: start;
                        padding: 20px;
                    }
                    h1 {
                        color: #ff0000;/* Цвет текста сообщения */
                    }
                </style>
            </head>
            <body>
                <h5>Заполните все поля</h5>
            </body>
            </html>`),u.close()}else if(t==="ra_moving_average")s="./images/demo_file/test_forecast_csv.csv";else if(t==="ra_weighted_average")s="./images/demo_file/test_forecast_csv2.csv";else if(t==="ra_linear_regression")s="./images/demo_file/test_forecast_csv3.csv";else if(t==="ra_multiple_regression")s="./images/demo_file/test_forecast_csv.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(s,{download:!0,header:!0,complete:function(i){const u=document.getElementById("tb_regular_assort_results"),c=u.contentDocument||u.contentWindow.document;c.open(),c.write(`<html>
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
                            <tr>`),Object.keys(i.data[0]).forEach(p=>{c.write(`<th>${p}</th>`)}),c.write("</tr></thead><tbody>"),i.data.forEach(p=>{c.write("<tr>"),Object.values(p).forEach(w=>{c.write(`<td>${w}</td>`)}),c.write("</tr>")}),c.write("</tbody></table>"),c.write("</body></html>"),c.close()}})};window.loadDataSeasonality=function(){window.saveSelectedGlobalParametersSeasonality=function(){let r=JSON.parse(localStorage.getItem("globalParameters"));r||(r={});const d=document.getElementById("seasonality_method"),m=d.options[d.selectedIndex].text;r.сезонность=m,localStorage.setItem("globalParameters",JSON.stringify(r))},window.saveSelectedGlobalParametersSeasonality();const e=document.getElementById("seasonality_method").value,t=document.getElementById("seasonality_time").value,o=document.getElementById("seasonality_geography").value,n=document.getElementById("seasonality_groupSCU").value;if(e==="not_selected"||t==="not_selected"||o==="not_selected"||n==="not_selected"){document.getElementById("seasonality_chart").innerHTML="Заполните все поля";return}document.getElementById("seasonality_chart").innerHTML="";let a="";if(e==="fluctuation_average"&&t==="week"&&o==="seasonality_geographyСhain"&&n==="groupe1")a="./images/demo_file/seasonalityAvg.xlsx";else if(e==="fluctuation_trend"&&t==="week"&&o==="seasonality_geographyСhain"&&n==="groupe1")a="./images/demo_file/seasonalityTrend.xlsx";else{document.getElementById("seasonality_chart").innerHTML="Выберите корректные параметры";return}fetch(a).then(r=>r.arrayBuffer()).then(r=>{const d=XLSX.read(r,{type:"array"}),m=d.SheetNames[0],h=d.Sheets[m],l=XLSX.utils.sheet_to_json(h,{header:1}),s=[],i={};for(let c=1;c<l.length;c++){const f=l[c];if(f.length===3){const p=f[0],w=f[1],E=parseFloat(f[2]);!s.includes(w)&&w!=="-1"&&s.push(w),i[p]||(i[p]={x:[],y:[],type:"scatter",mode:"lines+markers",name:p}),s.indexOf(w)!==-1&&(i[p].x.push(w),i[p].y.push(E))}}const u=Object.values(i);Plotly.newPlot("seasonality_chart",u,{title:"Сезонность",xaxis:{title:"Неделя",tickmode:"linear",tick0:1,dtick:1,range:[0,53]},yaxis:{title:"Значение",rangemode:"tozero"}})}).catch(r=>{console.error("Ошибка при загрузке файла:",r)})};window.tbPromoRatioPerviewButton=function(){let e=JSON.parse(localStorage.getItem("globalParametersPromo"));e||(e={});const t=document.getElementById("promoRatio_method"),o=t.options[t.selectedIndex].text;e["метод агрегации"]=o,localStorage.setItem("globalParametersPromo",JSON.stringify(e))};function S(){document.getElementById("modal").style.display="flex"}function I(){document.getElementById("modal").style.display="none"}function k(){const e=document.querySelectorAll('#modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.tbRegAssortOptimizationButton=S;window.ra_closeModalButton=I;window.ra_saveButton=k;function P(){document.getElementById("promo_modal").style.display="flex"}function B(){document.getElementById("promo_modal").style.display="none"}function C(){const e=document.querySelectorAll('#promo_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.promo_OptimizationButton=P;window.promo_closeModalButton=B;window.promo_saveModalButton=C;function T(){document.getElementById("new_product__modal").style.display="flex"}function M(){document.getElementById("new_product__modal").style.display="none"}function D(){const e=document.querySelectorAll('#new_product__modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.newProductOptimizationButton=T;window.newProductCloseModalButton=M;window.newProductSaveModalButton=D;window.newProduct_PreviewButton=function(){const t=document.getElementById("new_product__aggregation-time").value,n=document.getElementById("new_product__aggregation-geo").value,r=document.getElementById("new_product__aggregation-group").value,m=document.getElementById("new_product__aggregation-parameter").value;let h;if(t!=="not_selected"&&n!=="not_selected"&&r!=="not_selected"&&m!=="not_selected")h="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||n==="not_selected"||r==="not_selected"||m==="not_selected"){const l=document.getElementById("new_product_PreviewIframe"),s=l.contentDocument||l.contentWindow.document;s.open(),s.write(`<html>
              <head>
                  <title>Сообщение</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          background-color: #f4f4f4;
                          text-align: start;
                          padding: 20px;
                      }
                      h1 {
                          color: #ff0000;/* Цвет текста сообщения */
                      }
                  </style>
              </head>
              <body>
                  <h5>Расчёт не произведен. Выберите все параметры</h5>
              </body>
              </html>`),s.close();return}else if(selectedMethod==="promo_weighted__custom")h="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(h,{download:!0,header:!0,complete:function(l){const s=document.getElementById("new_product_PreviewIframe"),i=s.contentDocument||s.contentWindow.document;i.open(),i.write(`<html>
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
                            <tr>`),Object.keys(l.data[0]).forEach(c=>{i.write(`<th>${c}</th>`)}),i.write("</tr></thead><tbody>"),l.data.forEach(c=>{i.write("<tr>"),Object.values(c).forEach(f=>{i.write(`<td>${f}</td>`)}),i.write("</tr>")}),i.write("</tbody></table>"),i.write("</body></html>"),i.close()}})};function A(){document.getElementById("summaryPlan_modal").style.display="flex"}function O(){document.getElementById("summaryPlan_modal").style.display="none"}function L(){const e=document.querySelectorAll('#summaryPlan_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.summaryPlan_OptimizationButton=A;window.summaryPlan_closeModalButton=O;window.summaryPlan_saveModalButton=L;window.summaryPlan_PreviewButton=function(){const t=document.getElementById("summary_plan_time").value,n=document.getElementById("summary_plan_geography").value,r=document.getElementById("summary_plan_scu").value,m=document.getElementById("summary_plan_method").value;let h;if(t!=="not_selected"&&n!=="not_selected"&&r!=="not_selected"&&m!=="not_selected")h="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||n==="not_selected"||r==="not_selected"||m==="not_selected"){const l=document.getElementById("summaryPlan_PreviewIframe"),s=l.contentDocument||l.contentWindow.document;s.open(),s.write(`<html>
              <head>
                  <title>Сообщение</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          background-color:rgb(255, 255, 255);
                          text-align: start;
                          padding: 20px;
                      }
                      h1 {
                          color: #ff0000;/* Цвет текста сообщения */
                      }
                  </style>
              </head>
              <body>
                  <h5>Выберите все параметры</h5>
              </body>
              </html>`),s.close();return}else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(h,{download:!0,header:!0,complete:function(l){const s=document.getElementById("summaryPlan_PreviewIframe"),i=s.contentDocument||s.contentWindow.document;i.open(),i.write(`<html>
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
                            <tr>`),Object.keys(l.data[0]).forEach(c=>{i.write(`<th>${c}</th>`)}),i.write("</tr></thead><tbody>"),l.data.forEach(c=>{i.write("<tr>"),Object.values(c).forEach(f=>{i.write(`<td>${f}</td>`)}),i.write("</tr>")}),i.write("</tbody></table>"),i.write("</body></html>"),i.close()}})};function N(){x(),document.getElementById("planner_weeklyModal").style.display="block"}function y(e){document.getElementById(e).style.display="none"}function x(){y("planner_weeklyModal"),y("timeModal"),y("checkboxModal")}window.onclick=function(e){e.target.classList.contains("modal")&&x()};function j(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block"),o=t.options[t.selectedIndex].text,n=document.getElementById("planner__scenarioCustom"),a=n.options[n.selectedIndex].text,r=document.getElementById("planner_interval").value,d=document.getElementById("planner_selectedTime").value,m=document.getElementById("planner_selectedStartDate").value,h=document.getElementById("planner_selectedEndDate").value,l=document.getElementById("planner_Iframe"),s=l.contentDocument||l.contentWindow.document;s.body.innerHTML=`        <style>
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
                font-family: Arial, sans-serif;
            }
            th, td {
                padding: 10px;
                text-align: left;
                border-bottom: 1px solid #ddd;
            }
            th {
                background-color: #f2f2f2;
            }
            tr:hover {
                background-color: #f5f5f5;
            }
        </style>
        <h3>Выбранные значения:</h3>
        <table>
            <tr>
                <th>Наименование</th>
                <th>Блок</th>
                <th>Сценарий</th>
                <th>Интервал повторений</th>
                <th>Дата начала</th>
                <th>Дата окончания</th>
                <th>Время</th>
            </tr>
            <tr>
                <td>${e}</td>
                <td>${o}</td>
                <td>${a}</td>
                <td>${r} дней</td>
                <td>${m}</td>
                <td>${h}</td>
                <td>${d}</td>
            </tr>
        </table>`,y("planner_weeklyModal")}window.planner_selectScenarioRepeat=N;window.closeModal=y;window.closeAllModals=x;window.saveSettings=j;let g={};function H(){g.intervalNum=document.getElementById("planner_intervalPeriodicity").value,g.dayOfWeekRepeat=document.getElementById("planner_dayOfWeekRepeat").value,g.selectedTime=document.getElementById("planner_selectedTime").value,g.selectedStartDate=document.getElementById("planner_selectedStartDate").value;const e=document.querySelectorAll('input[name="options"]:checked');let t="";e.forEach(o=>{o.value==="never"?t="Никогда":o.value==="number"?t=`Спустя ${document.getElementById("planner_ModalRepetition__times").value} раз`:o.value==="date"&&(t=`Дата:${document.getElementById("dateInput").value}`)}),g.endingInfo=t,closeModal("planner_weeklyModal")}function F(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block").value,o=document.getElementById("planner__scenarioCustom").value,n=`<tr>
            <td>${e}</td>
            <td>${t}</td>
            <td>${o}</td>
            <td>${g.intervalNum} дней</td>
            <td>${g.dayOfWeekRepeat}</td>
            <td>${g.selectedTime}</td>
            <td>${g.selectedStartDate}</td>
            <td>${g.endingInfo}</td>
        </tr>`,a=document.getElementById("planner_Iframe"),r=a.contentDocument||a.contentWindow.document;let d=r.querySelector("table");if(d)(d.querySelector("tbody")||d.createTBody()).insertAdjacentHTML("beforeend",n);else{const m=`<style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                    font-family: Arial, sans-serif;
                    font-size:10px;
                }
                th, td {
                    padding: 10px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
                th {
                    background-color: #f2f2f2;
                }
                tr:hover {
                    background-color: #f5f5f5;
                }
            </style>
            <h5>Выбранные значения:</h5>
            <table>
                <tr>
                    <th>Наименование</th>
                    <th>Блок</th>
                    <th>Сценарий</th>
                    <th>Интервал повторений</th>
                    <th>Дни повторения</th>
                    <th>Время запуска</th>
                    <th>Дата начала</th>
                    <th>Дата окончания</th>
                </tr>
                ${n}
            </table>`;r.open(),r.write(m),r.close()}}window.saveModalData=H;window.planner_addData=F;window.planner_formRepeatSelect=function(){const e=document.getElementById("planner_intervalRepetition__header"),t=document.querySelector(".planner_visionParagraphDayOfWeek"),o=document.getElementById("planner_dayOfWeekRepeat"),n=document.querySelector(".planner_intervalWrapperDay"),a=e.value;a==="repeat_daily"?(t.style.display="none",o.style.display="none",n.textContent="день"):a==="repeat_weekly"?(t.style.display="block",o.style.display="block",n.textContent="неделя"):a==="repeat_monthly"&&(t.style.display="block",o.style.display="block",n.textContent="месяц")};document.addEventListener("DOMContentLoaded",function(){planner_formRepeatSelect()});window.saveSelectedGlobalParameters=function(){window.check_mark=function(){const m=document.getElementById("check-mark_button");m.style.display="inline",setTimeout(function(){m.style.display="none"},5e3)},window.check_mark();const e={},t=document.getElementById("parameters_aggregation-time"),o=document.getElementById("parameters_aggregation-scu"),n=document.getElementById("parameters_oos-method"),a=document.getElementById("parameters_promo-method"),r=document.getElementById("parameters_spikes-method"),d=document.getElementById("parameters_sales_recovery-method");e["агрегат по времени"]=t.options[t.selectedIndex].text,e["агрегат по позиции"]=o.options[o.selectedIndex].text,e["очистка oos"]=n.options[n.selectedIndex].text,e["очистка от промо"]=a.options[a.selectedIndex].text,e["очистка от выбросов"]=r.options[r.selectedIndex].text,e.восстановление=d.options[d.selectedIndex].text,localStorage.setItem("globalParameters",JSON.stringify(e)),localStorage.setItem("globalParametersNewProducts",JSON.stringify(e)),localStorage.setItem("globalParametersPromo",JSON.stringify(e)),localStorage.setItem("globalParametersSummaryPlan",JSON.stringify(e)),console.log("Параметры сохранены в двух словарях:",e)};window.saveSelectedGlobalParametersSeasonality=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("seasonality_method"),o=t.options[t.selectedIndex].text;e.сезонность=o,localStorage.setItem("globalParameters",JSON.stringify(e))};window.saveGlobalParametersRegular=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("regular_assort_method"),o=t.options[t.selectedIndex].text;e["методы прогноза"]=o,localStorage.setItem("globalParameters",JSON.stringify(e))};const G="/SputnikPro_test_2_2/images/users/ZilevichElizaveta.jpg",R="/SputnikPro_test_2_2/images/users/TkachevOleg.jpg",W="/SputnikPro_test_2_2/images/users/TolokGalina.jpg",J="/SputnikPro_test_2_2/images/users/question.jpg",_="/SputnikPro_test_2_2/images/users/user1.png";var v,b,z=function(){$.when($("[data-scrollbar=true]").each(function(){generateSlimScroll($(this))})).done(function(){$('[data-scrollbar="true"]').mouseover()})},X=function(){let e=$(".sidebar").attr("data-disable-slide-animation")?0:250;$(".sidebar .nav > .has-sub > a").click(function(){let t=$(this).next(".sub-menu"),o=$(".sidebar .nav > li.has-sub > .sub-menu").not(t);$(".page-sidebar-minified").length===0&&($(o).closest("li").addClass("closing"),$(o).slideUp(e,function(){$(o).closest("li").addClass("closed").removeClass("expand closing")}),$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let n=$(this).closest("li");$(t).is(":visible")?($(n).addClass("expand"),$(n).removeClass("closed")):($(n).addClass("closed"),$(n).removeClass("expand")),$(n).removeClass("expanding closing")}))}),$(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function(){if($(".page-sidebar-minified").length===0){let t=$(this).next(".sub-menu");$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let o=$(this).closest("li");$(t).is(":visible")?($(o).addClass("expand"),$(o).removeClass("closed")):($(o).addClass("closed"),$(o).removeClass("expand")),$(o).removeClass("expanding closing")})}})},q=function(){try{if(typeof Storage<"u"&&typeof localStorage<"u"){let e=window.location.href;e=(e=e.split("?"))[0];let t=localStorage.getItem(e);if(t){t=JSON.parse(t);let o=0;$.when($('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function(){let n=t[o],a=$(this);n&&$.each(n,function(r,d){let m=$('[data-sortable-id="'+d.id+'"]').not('[data-init="true"]');if($(m).length!==0){let h=$(m).clone();$(m).remove(),$(a).append(h),$('[data-sortable-id="'+d.id+'"]').attr("data-init","true")}}),o++})).done(function(){window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))})}}else alert("Your browser is not supported with the local storage")}catch(e){console.log(e)}},V=function(){$(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")},U=function(){$(window).on("scroll",function(){handleCheckScrollClass()}),handleCheckScrollClass()},K=function(){$(document).on("click","#float-sub-menu li.has-sub > a",function(e){let t=$(this).next(".sub-menu"),o=$(t).closest("li"),n=!1,a=!1;$(t).is(":visible")?($(o).addClass("closing"),n=!0):($(o).addClass("expanding"),a=!0),$(t).slideToggle({duration:250,progress:function(){let r=$("#float-sub-menu"),d=$(r).height(),m=$(r).offset(),h=$(r).attr("data-offset-top"),l=$(r).attr("data-menu-offset-top"),s=m.top-$(window).scrollTop(),i=$(window).height();if(n&&h<s&&(s=h<s?h:s,$("#float-sub-menu").css({top:s+"px",bottom:"auto"}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"})),a&&i-s<d){let u=i-l-22;$("#float-sub-menu").css({top:"auto",bottom:0}),$("#float-sub-menu-arrow").css({top:"auto",bottom:u+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:u+"px"})}},complete:function(){$(t).is(":visible")?$(o).addClass("expand"):$(o).addClass("closed"),$(o).removeClass("closing expanding")}})}),$(".sidebar .nav > li.has-sub > a").hover(function(){if($("#page-container").hasClass("page-sidebar-minified")){clearTimeout(v);let e=$(this).closest("li").find(".sub-menu").first();if(b==this&&$("#float-sub-menu").length!==0)return;b=this;let t=$(e).html();if(t){let o=$("#sidebar").offset(),n=$("#page-container").hasClass("page-with-right-sidebar")?$(window).width()-o.left:o.left+60,a=$(e).height(),r=$(this).offset().top-$(window).scrollTop(),d=$("#page-container").hasClass("page-with-right-sidebar")?"auto":n,m=$("#page-container").hasClass("page-with-right-sidebar")?n:"auto",h=$(window).height();if($("#float-sub-menu").length===0?(t='<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="'+r+'" data-menu-offset-top="'+r+'" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">	<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>	<div class="float-sub-menu-line" id="float-sub-menu-line"></div>	<ul class="float-sub-menu">'+t+"</ul></div>",$("#page-container").append(t)):($("#float-sub-menu").attr("data-offset-top",r),$("#float-sub-menu").attr("data-menu-offset-top",r),$(".float-sub-menu").html(t)),a<h-r)$("#float-sub-menu").css({top:r,left:d,bottom:"auto",right:m}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"});else{$("#float-sub-menu").css({bottom:0,top:"auto",left:d,right:m});let l=h-r-21;$("#float-sub-menu-arrow").css({top:"auto",bottom:l+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:l+"px"})}}else $("#float-sub-menu").remove(),b=""}},function(){$("#page-container").hasClass("page-sidebar-minified")&&(v=setTimeout(function(){$("#float-sub-menu").remove(),b=""},250))})},Z=function(){var e;return{init:function(t){t&&(e=t),this.initLocalStorage(),this.initSidebar(),this.initComponent(),this.initThemePanel(),this.initPageLoad(),$(window).trigger("load"),e&&e.ajaxMode&&this.initAjax()},initSidebar:function(){X(),handleMobileSidebarToggle(),handleSidebarMinify(),K()},initSidebarSelection:function(){V()},initComponent:function(){(!e||e&&!e.disableDraggablePanel)&&z(),handleUnlimitedTabsRender(),handlePanelAction(),handleScrollToTopButton(),handleAfterPageLoadAddClass(),U(),$(window).width()>767&&handleTooltipPopoverActivation()},initLocalStorage:function(){(!e||e&&!e.disableLocalStorage)&&q()},initAjax:function(){handleAjaxMode(e),$.ajaxSetup({cache:!0})},scrollTop:function(){$("html, body").animate({scrollTop:$("body").offset().top},0)}}}();window.showContent_parameters=function(){const e=document.getElementById("mainContent");fetch("./src/html/parameters.html").then(t=>{if(!t.ok)throw new Error("Модуль не отвечает");return t.text()}).then(t=>{e.innerHTML=t}).catch(t=>{console.error("Ошибка при загрузке файла:",t),e.innerHTML="Ошибка при загрузке"})};window.showContent_action=function(){fetch("./src/html/action.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_seasonality=function(){fetch("./src/html/seasonality.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_regular_assort=function(){fetch("./src/html/regular_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promo=function(){fetch("./src/html/promo.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.updateUserImage=function(){const e=document.getElementById("header_top_user"),t=document.getElementById("userImage"),o={option1:J,option2:G,option3:_,option4:R,option5:_,option6:W,option7:_},n=e.value;if(t.innerHTML="",n&&o[n]){const a=document.createElement("img");a.src=o[n],a.alt=n,a.style.width="50px",a.style.borderRadius="50px",t.appendChild(a)}};$(document).ready(function(){Z.init(),Highlight.init()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".visible");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(o=>o.classList.remove("actived")),this.classList.add("actived")})})});window.loadAndFilterData=function(){window.saveGlobalParametersRegular=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("regular_assort_method"),o=t.options[t.selectedIndex].text;e["методы прогноза"]=o,localStorage.setItem("globalParameters",JSON.stringify(e))},window.saveGlobalParametersRegular(),window.filterData=function(e){const t=JSON.parse(localStorage.getItem("globalParameters"));return e.filter(o=>Object.keys(t).every(n=>o[n]!==void 0?o[n]===t[n]:!0))},window.displayTable=function(e){const t=document.getElementById("tb_regular_assort_results"),o=t.contentDocument||t.contentWindow.document;o.body.innerHTML="";const n=document.createElement("style");n.textContent=`table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 0px;
            font-size: 12px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 5px;
            text-align: left;
            width: 5px;
        }
        th {
            background-color:rgb(36, 76, 223);
            color: white; 
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tr:hover {
            background-color: #ddd;
        }
            td:first-child {
        font-weight: bold;`,o.head.appendChild(n);const a=o.createElement("table");if(a.innerHTML="",e.length===0){a.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',o.body.appendChild(a);return}const r=["WAPE, %","BIAS, %","Кол-во позиций с прогнозом","Всего позиций с продажами","Доля, %","недопрогноз, %","перепрогноз, %","Объем прогноза, шт","Объем продаж, шт","Доля, %2"];e.sort((l,s)=>{const i=r.indexOf(l.МЕРЫ),u=r.indexOf(s.МЕРЫ);return i-u});const d=Object.keys(e[0]),m=document.createElement("tr");for(let l=6;l<d.length;l++){const s=document.createElement("th");s.textContent=d[l],m.appendChild(s)}a.appendChild(m);const h=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];e.forEach(l=>{const s=document.createElement("tr");for(let i=6;i<d.length;i++){const u=document.createElement("td");let c=l[d[i]];typeof c=="number"&&(l.МЕРЫ&&h.includes(l.МЕРЫ)?c=(c*100).toFixed(0)+"%":c=c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})),u.textContent=c,s.appendChild(u)}a.appendChild(s)}),o.body.appendChild(a)},fetch("   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/regAssort3.xlsx").then(e=>{if(!e.ok)throw new Error("Сеть не отвечает");return e.arrayBuffer()}).then(e=>{const t=XLSX.read(e,{type:"array"}),o=t.SheetNames[0],n=t.Sheets[o],a=XLSX.utils.sheet_to_json(n),r=window.filterData(a);window.displayTable(r)}).catch(e=>{console.error("Ошибка загрузки файла:",e)})};window.loadAndFilterDataNewProducts=function(){window.saveGlobalParametersRegularNewProducts=function(){let e=JSON.parse(localStorage.getItem("globalParametersNewProducts"));e||(e={});const t=document.getElementById("new_product__aggregation-geo"),o=document.getElementById("new_product__aggregation-group"),n=document.getElementById("new_product__aggregation-parameter"),a=t.options[t.selectedIndex].text,r=o.options[o.selectedIndex].text,d=n.options[n.selectedIndex].text;e["агрегат по географии"]=a,e["агрегат по позиции"]=r,e["дополнительные показатели"]=d,localStorage.setItem("globalParametersNewProducts",JSON.stringify(e))},window.saveGlobalParametersRegularNewProducts(),window.filterDataNewProducts=function(e){const t=JSON.parse(localStorage.getItem("globalParametersNewProducts"));return e.filter(o=>Object.keys(t).every(n=>o[n]!==void 0?o[n]===t[n]:!0))},window.displayTableNewProducts=function(e){const t=document.getElementById("new_product_PreviewIframe"),o=t.contentDocument||t.contentWindow.document;o.body.innerHTML="";const n=document.createElement("style");n.textContent=`table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 0px;
          font-size: 12px;
      }
      th, td {
          border: 1px solid #ddd;
          padding: 5px;
          text-align: left;
          width: 5px;
      }
      th {
          background-color:rgb(36, 76, 223);
          color: white; 
      }
      tr:nth-child(even) {
          background-color: #f2f2f2;
      }
      tr:hover {
          background-color: #ddd;
      }
           td:first-child {
        font-weight: bold;`,o.head.appendChild(n);const a=o.createElement("table");if(a.innerHTML="",e.length===0){a.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',o.body.appendChild(a);return}const r=["WAPE, %","BIAS, %","Кол-во позиций с прогнозом","Всего позиций с продажами","Доля, %","недопрогноз, %","перепрогноз, %","Объем прогноза, шт","Объем продаж, шт","Доля, %2"];e.sort((l,s)=>{const i=r.indexOf(l.МЕРЫ),u=r.indexOf(s.МЕРЫ);return i-u});const d=Object.keys(e[0]),m=document.createElement("tr");for(let l=3;l<d.length;l++){const s=document.createElement("th");s.textContent=d[l],m.appendChild(s)}a.appendChild(m);const h=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];e.forEach(l=>{const s=document.createElement("tr");for(let i=3;i<d.length;i++){const u=document.createElement("td");let c=l[d[i]];typeof c=="number"&&(l.МЕРЫ&&h.includes(l.МЕРЫ)?c=(c*100).toFixed(0)+"%":c=c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})),u.textContent=c,s.appendChild(u)}a.appendChild(s)}),o.body.appendChild(a)},fetch("   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/newProducts1.xlsx").then(e=>{if(!e.ok)throw new Error("Сеть не отвечает");return e.arrayBuffer()}).then(e=>{const t=XLSX.read(e,{type:"array"}),o=t.SheetNames[0],n=t.Sheets[o],a=XLSX.utils.sheet_to_json(n),r=window.filterDataNewProducts(a);window.displayTableNewProducts(r)}).catch(e=>{console.error("Ошибка загрузки файла:",e)})};window.loadAndFilterDataPromo=function(){window.saveGlobalParametersPromo=function(){let e=JSON.parse(localStorage.getItem("globalParametersPromo"));e||(e={});const t=document.getElementById("promo_method"),o=t.options[t.selectedIndex].text;e["выбор коэффициентов"]=o,localStorage.setItem("globalParametersPromo",JSON.stringify(e))},window.saveGlobalParametersPromo(),window.filterDataPromo=function(e){const t=JSON.parse(localStorage.getItem("globalParametersPromo"));return e.filter(o=>Object.keys(t).every(n=>o[n]!==void 0?o[n]===t[n]:!0))},window.displayTablePromo=function(e){const t=document.getElementById("promo_PreviewIframe"),o=t.contentDocument||t.contentWindow.document;o.body.innerHTML="";const n=document.createElement("style");n.textContent=`table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 0px;
          font-size: 12px;
      }
      th, td {
          border: 1px solid #ddd;
          padding: 5px;
          text-align: left;
          width: 5px;
      }
      th {
          background-color:rgb(36, 76, 223);
          color: white; 
      }
      tr:nth-child(even) {
          background-color: #f2f2f2;
      }
      tr:hover {
          background-color: #ddd;
      }
           td:first-child {
        font-weight: bold;`,o.head.appendChild(n);const a=o.createElement("table");if(a.innerHTML="",e.length===0){a.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',o.body.appendChild(a);return}const r=["WAPE, %","BIAS, %","Кол-во позиций с прогнозом","Всего позиций с продажами","Доля, %","недопрогноз, %","перепрогноз, %","Объем прогноза, шт","Объем продаж, шт","Доля, %2"];e.sort((l,s)=>{const i=r.indexOf(l.МЕРЫ),u=r.indexOf(s.МЕРЫ);return i-u});const d=Object.keys(e[0]),m=document.createElement("tr");for(let l=2;l<d.length;l++){const s=document.createElement("th");s.textContent=d[l],m.appendChild(s)}a.appendChild(m);const h=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];e.forEach(l=>{const s=document.createElement("tr");for(let i=2;i<d.length;i++){const u=document.createElement("td");let c=l[d[i]];typeof c=="number"&&(l.МЕРЫ&&h.includes(l.МЕРЫ)?c=(c*100).toFixed(0)+"%":c=c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})),u.textContent=c,s.appendChild(u)}a.appendChild(s)}),o.body.appendChild(a)},fetch("   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/promo.xlsx").then(e=>{if(!e.ok)throw new Error("Сеть не отвечает");return e.arrayBuffer()}).then(e=>{const t=XLSX.read(e,{type:"array"}),o=t.SheetNames[0],n=t.Sheets[o],a=XLSX.utils.sheet_to_json(n),r=window.filterDataPromo(a);window.displayTablePromo(r)}).catch(e=>{console.error("Ошибка загрузки файла:",e)})};window.loadAndFilterDataSummaryPlan=function(){window.saveGlobalParametersSummaryPlan=function(){let e=JSON.parse(localStorage.getItem("globalParametersSummaryPlan"));e||(e={}),e["регулярный ассортимент"]=document.getElementById("summary_plan__regAssort").checked?"true":"false",e.промо=document.getElementById("summary_plan__promo").checked?"true":"false",e.новинки=document.getElementById("summary_plan__newsProducts").checked?"true":"false",e["учёт каннибализации"]=document.getElementById("summary_plan__cannibalization").checked?"true":"false",localStorage.setItem("globalParametersSummaryPlan",JSON.stringify(e))},window.saveGlobalParametersSummaryPlan(),window.filterDataSummaryPlan=function(e){const t=JSON.parse(localStorage.getItem("globalParametersSummaryPlan"));return e.filter(o=>Object.keys(t).every(n=>o[n]!==void 0?o[n]===t[n]:!0))},window.displayTableSummaryPlan=function(e){const t=document.getElementById("summaryPlan_PreviewIframe"),o=t.contentDocument||t.contentWindow.document;o.body.innerHTML="";const n=document.createElement("style");n.textContent=`table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 0px;
          font-size: 12px;
      }
      th, td {
          border: 1px solid #ddd;
          padding: 5px;
          text-align: left;
          width: 5px;
      }
      th {
          background-color:rgb(36, 76, 223);
          color: white; 
      }
      tr:nth-child(even) {
          background-color: #f2f2f2;
      }
      tr:hover {
          background-color: #ddd;
      }
           td:first-child {
        font-weight: bold;`,o.head.appendChild(n);const a=o.createElement("table");if(a.innerHTML="",e.length===0){a.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',o.body.appendChild(a);return}const r=["WAPE, %","BIAS, %","Кол-во позиций с прогнозом","Всего позиций с продажами","Доля, %","недопрогноз, %","перепрогноз, %","Объем прогноза, шт","Объем продаж, шт","Доля, %2"];e.sort((l,s)=>{const i=r.indexOf(l.МЕРЫ),u=r.indexOf(s.МЕРЫ);return i-u});const d=Object.keys(e[0]),m=document.createElement("tr");for(let l=4;l<d.length;l++){const s=document.createElement("th");s.textContent=d[l],m.appendChild(s)}a.appendChild(m);const h=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];e.forEach(l=>{const s=document.createElement("tr");for(let i=4;i<d.length;i++){const u=document.createElement("td");let c=l[d[i]];typeof c=="number"&&(l.МЕРЫ&&h.includes(l.МЕРЫ)?c=(c*100).toFixed(0)+"%":c=c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})),u.textContent=c,s.appendChild(u)}a.appendChild(s)}),o.body.appendChild(a)},fetch("   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/summaryPlan.xlsx").then(e=>{if(!e.ok)throw new Error("Сеть не отвечает");return e.arrayBuffer()}).then(e=>{const t=XLSX.read(e,{type:"array"}),o=t.SheetNames[0],n=t.Sheets[o],a=XLSX.utils.sheet_to_json(n),r=window.filterDataSummaryPlan(a);window.displayTableSummaryPlan(r)}).catch(e=>{console.error("Ошибка загрузки файла:",e)})};
