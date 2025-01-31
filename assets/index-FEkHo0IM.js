(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();window.check_mark=function(){const e=document.getElementById("check-mark_button");e.style.display="inline",setTimeout(function(){e.style.display="none"},5e3)};window.showContent_listing=function(){fetch("./src/html/listing.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_newProducts=function(){fetch("./src/html/new_products.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_locks=function(){fetch("./src/html/locks.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_outputAssort=function(){fetch("./src/html/output_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_tender=function(){fetch("./src/html/tender.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_priceChange=function(){fetch("./src/html/price_change.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promoRatio=function(){fetch("./src/html/promo_ratio.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_planner=function(){fetch("./src/html/planner.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_summaryPlan=function(){fetch("./src/html/summary_plan.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.tbRegAssortButton=function(){const t=document.getElementById("regular_assort_method").value,n=document.getElementById("regular_assort__aggregation-time").value,r=document.getElementById("regular_assort__aggregation-geo").value,m=document.getElementById("regular_assort__aggregation-scu").value,s=document.getElementById("regular_assort_period").value;let i;if(t==="ra_not_selected"||n==="not_selected"||r==="not_selected"||m==="not_selected"||s==="not_selected"){const l=document.getElementById("tb_regular_assort_results"),h=l.contentDocument||l.contentWindow.document;h.open(),h.write(`<html>
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
            </html>`),h.close()}else if(t==="ra_moving_average")i="./images/demo_file/test_forecast_csv.csv";else if(t==="ra_weighted_average")i="./images/demo_file/test_forecast_csv2.csv";else if(t==="ra_linear_regression")i="./images/demo_file/test_forecast_csv3.csv";else if(t==="ra_multiple_regression")i="./images/demo_file/test_forecast_csv.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(i,{download:!0,header:!0,complete:function(l){const h=document.getElementById("tb_regular_assort_results"),c=h.contentDocument||h.contentWindow.document;c.open(),c.write(`<html>
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
                            <tr>`),Object.keys(l.data[0]).forEach(f=>{c.write(`<th>${f}</th>`)}),c.write("</tr></thead><tbody>"),l.data.forEach(f=>{c.write("<tr>"),Object.values(f).forEach(y=>{c.write(`<td>${y}</td>`)}),c.write("</tr>")}),c.write("</tbody></table>"),c.write("</body></html>"),c.close()}})};window.loadDataSeasonality=function(){window.saveSelectedGlobalParametersSeasonality=function(){let r=JSON.parse(localStorage.getItem("globalParameters"));r||(r={});const d=document.getElementById("seasonality_method"),m=d.options[d.selectedIndex].text;r.сезонность=m,localStorage.setItem("globalParameters",JSON.stringify(r))},window.saveSelectedGlobalParametersSeasonality();const e=document.getElementById("seasonality_method").value,t=document.getElementById("seasonality_time").value,o=document.getElementById("seasonality_geography").value,n=document.getElementById("seasonality_groupSCU").value;if(e==="not_selected"||t==="not_selected"||o==="not_selected"||n==="not_selected"){document.getElementById("seasonality_chart").innerHTML="Заполните все поля";return}document.getElementById("seasonality_chart").innerHTML="";let a="";if(e==="fluctuation_average"&&t==="week"&&o==="seasonality_geographyСhain"&&n==="groupe1")a="./images/demo_file/seasonalityAvg.xlsx";else if(e==="fluctuation_trend"&&t==="week"&&o==="seasonality_geographyСhain"&&n==="groupe1")a="./images/demo_file/seasonalityTrend.xlsx";else{document.getElementById("seasonality_chart").innerHTML="Выберите корректные параметры";return}fetch(a).then(r=>r.arrayBuffer()).then(r=>{const d=XLSX.read(r,{type:"array"}),m=d.SheetNames[0],u=d.Sheets[m],s=XLSX.utils.sheet_to_json(u,{header:1}),i=[],l={};for(let c=1;c<s.length;c++){const p=s[c];if(p.length===3){const f=p[0],y=p[1],E=parseFloat(p[2]);!i.includes(y)&&y!=="-1"&&i.push(y),l[f]||(l[f]={x:[],y:[],type:"scatter",mode:"lines+markers",name:f}),i.indexOf(y)!==-1&&(l[f].x.push(y),l[f].y.push(E))}}const h=Object.values(l);Plotly.newPlot("seasonality_chart",h,{title:"Сезонность",xaxis:{title:"Неделя",tickmode:"linear",tick0:1,dtick:1,range:[0,53]},yaxis:{title:"Значение",rangemode:"tozero"}})}).catch(r=>{console.error("Ошибка при загрузке файла:",r)})};window.tbPromoRatioPerviewButton=function(){let e=JSON.parse(localStorage.getItem("globalParametersPromo"));e||(e={});const t=document.getElementById("promoRatio_method"),o=t.options[t.selectedIndex].text;e["метод агрегации"]=o,localStorage.setItem("globalParametersPromo",JSON.stringify(e))};function S(){document.getElementById("modal").style.display="flex"}function I(){document.getElementById("modal").style.display="none"}function k(){const e=document.querySelectorAll('#modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.tbRegAssortOptimizationButton=S;window.ra_closeModalButton=I;window.ra_saveButton=k;function P(){document.getElementById("promo_modal").style.display="flex"}function B(){document.getElementById("promo_modal").style.display="none"}function C(){const e=document.querySelectorAll('#promo_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.promo_OptimizationButton=P;window.promo_closeModalButton=B;window.promo_saveModalButton=C;function M(){document.getElementById("new_product__modal").style.display="flex"}function T(){document.getElementById("new_product__modal").style.display="none"}function A(){const e=document.querySelectorAll('#new_product__modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.newProductOptimizationButton=M;window.newProductCloseModalButton=T;window.newProductSaveModalButton=A;window.newProduct_PreviewButton=function(){const t=document.getElementById("new_product__aggregation-time").value,n=document.getElementById("new_product__aggregation-geo").value,r=document.getElementById("new_product__aggregation-group").value,m=document.getElementById("new_product__aggregation-parameter").value;let u;if(t!=="not_selected"&&n!=="not_selected"&&r!=="not_selected"&&m!=="not_selected")u="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||n==="not_selected"||r==="not_selected"||m==="not_selected"){const s=document.getElementById("new_product_PreviewIframe"),i=s.contentDocument||s.contentWindow.document;i.open(),i.write(`<html>
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
              </html>`),i.close();return}else if(selectedMethod==="promo_weighted__custom")u="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(u,{download:!0,header:!0,complete:function(s){const i=document.getElementById("new_product_PreviewIframe"),l=i.contentDocument||i.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(s.data[0]).forEach(c=>{l.write(`<th>${c}</th>`)}),l.write("</tr></thead><tbody>"),s.data.forEach(c=>{l.write("<tr>"),Object.values(c).forEach(p=>{l.write(`<td>${p}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};function O(){document.getElementById("summaryPlan_modal").style.display="flex"}function D(){document.getElementById("summaryPlan_modal").style.display="none"}function L(){const e=document.querySelectorAll('#summaryPlan_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.summaryPlan_OptimizationButton=O;window.summaryPlan_closeModalButton=D;window.summaryPlan_saveModalButton=L;window.summaryPlan_PreviewButton=function(){const t=document.getElementById("summary_plan_time").value,n=document.getElementById("summary_plan_geography").value,r=document.getElementById("summary_plan_scu").value,m=document.getElementById("summary_plan_method").value;let u;if(t!=="not_selected"&&n!=="not_selected"&&r!=="not_selected"&&m!=="not_selected")u="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||n==="not_selected"||r==="not_selected"||m==="not_selected"){const s=document.getElementById("summaryPlan_PreviewIframe"),i=s.contentDocument||s.contentWindow.document;i.open(),i.write(`<html>
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
              </html>`),i.close();return}else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(u,{download:!0,header:!0,complete:function(s){const i=document.getElementById("summaryPlan_PreviewIframe"),l=i.contentDocument||i.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(s.data[0]).forEach(c=>{l.write(`<th>${c}</th>`)}),l.write("</tr></thead><tbody>"),s.data.forEach(c=>{l.write("<tr>"),Object.values(c).forEach(p=>{l.write(`<td>${p}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};function N(){x(),document.getElementById("planner_weeklyModal").style.display="block",document.getElementById("planner_intervalRepetition__header");const e=document.querySelector(".planner_visionParagraphDayOfWeek"),t=document.getElementById("planner_dayOfWeekRepeat");document.querySelector(".planner_intervalWrapperDay");const o=document.getElementById("dayAndWeekMonth"),n=document.getElementById("planner_dayNumber");n.style.display="none",o.style.display="none",e.style.display="none",t.style.display="none"}function w(e){document.getElementById(e).style.display="none"}function x(){w("planner_weeklyModal"),w("timeModal"),w("checkboxModal")}window.onclick=function(e){e.target.classList.contains("modal")&&x()};function W(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block"),o=t.options[t.selectedIndex].text,n=document.getElementById("planner__scenarioCustom"),a=n.options[n.selectedIndex].text,r=document.getElementById("planner_interval").value,d=document.getElementById("planner_selectedTime").value,m=document.getElementById("planner_selectedStartDate").value,u=document.getElementById("planner_selectedEndDate").value,s=document.getElementById("planner_intervalRepetition__header").value;document.getElementById("planner_dayNumber").value,console.log();const i=document.getElementById("planner_Iframe"),l=i.contentDocument||i.contentWindow.document;l.body.innerHTML=`        <style>
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
                <th>Период повторений</th>
                <th>Интервал повторений</th>
                <th>Дата начала</th>
                <th>Дата окончания</th>
                <th>Время</th>
            </tr>
            <tr>
                <td>${e}</td>
                <td>${o}</td>
                <td>${a}</td>
                <td>${s}</td>
                <td>${r} дней</td>
                <td>${m}</td>
                <td>${u}</td>
                <td>${d}</td>
            </tr>
        </table>`,w("planner_weeklyModal")}window.planner_selectScenarioRepeat=N;window.closeModal=w;window.closeAllModals=x;window.saveSettings=W;let g={};function R(){g.intervalNum=document.getElementById("planner_intervalPeriodicity").value,g.dayOfWeekRepeat=document.getElementById("planner_dayOfWeekRepeat").value,g.selectedTime=document.getElementById("planner_selectedTime").value,g.selectedStartDate=document.getElementById("planner_selectedStartDate").value,g.dayOfWeekMonthRepeat=document.getElementById("planner_dayNumber").value,g.dayOfWeekMonthRepeatAttribute=document.getElementById("dayAndWeekMonth").value;const e=document.querySelectorAll('input[name="options"]:checked');let t="";e.forEach(o=>{o.value==="never"?t="Никогда":o.value==="number"?t=`Спустя ${document.getElementById("planner_ModalRepetition__times").value} раз`:o.value==="date"&&(t=`Дата:${document.getElementById("dateInput").value}`)}),g.endingInfo=t,closeModal("planner_weeklyModal")}function j(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block").value,o=document.getElementById("planner__scenarioCustom").value,n=document.getElementById("planner_intervalRepetition__header").value;let a=g.dayOfWeekRepeat;n==="monthly"&&(a=`${g.dayOfWeekMonthRepeat} ${g.dayOfWeekMonthRepeatAttribute}`,console.log(g.dayOfWeekMonthRepeat));const r=`<tr>
            <td>${e}</td>
            <td>${t}</td>
            <td>${o}</td>
            <td>${n}</td>
            <td>${g.intervalNum}</td>
            <td>${a}</td>
            <td>${g.selectedTime}</td>
            <td>${g.selectedStartDate}</td>
            <td>${g.endingInfo}</td>
        </tr>`,d=document.getElementById("planner_Iframe"),m=d.contentDocument||d.contentWindow.document;let u=m.querySelector("table");if(u)(u.querySelector("tbody")||u.createTBody()).insertAdjacentHTML("beforeend",r);else{const s=`<style>
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
            <table>
                <tr>
                    <th>Наименование</th>
                    <th>Блок</th>
                    <th>Сценарий</th>
                    <th>Период повторений</th>
                    <th>Интервал</th>
                    <th>Повторение</th>
                    <th>Время</th>
                    <th>Начало</th>
                    <th>Окончание</th>
                </tr>
                ${r}
            </table>`;m.open(),m.write(s),m.close()}}window.saveModalData=R;window.planner_addData=j;window.planner_formRepeatSelect=function(){const e=document.getElementById("planner_intervalRepetition__header"),t=document.querySelector(".planner_visionParagraphDayOfWeek"),o=document.getElementById("planner_dayOfWeekRepeat"),n=document.querySelector(".planner_intervalWrapperDay"),a=document.getElementById("dayAndWeekMonth"),r=document.getElementById("planner_dayNumber"),d=document.getElementById("empty"),m=document.querySelector(".select_ModalPlannerMonthlyDay"),u=e.value;u==="monthly"?(t.style.display="block",o.style.display="none",n.textContent="месяц",a.style.display="block",r.style.display="block",m.style.display="flex",d.style.display="none"):u==="weekly"?(t.style.display="block",o.style.display="block",n.textContent="неделя",a.style.display="none",r.style.display="none",m.style.display="none",d.style.display="none"):u==="daily"&&(t.style.display="none",o.style.display="none",n.textContent="день",a.style.display="none",r.style.display="none",m.style.display="none")};window.saveSelectedGlobalParameters=function(){window.check_mark=function(){const m=document.getElementById("check-mark_button");m.style.display="inline",setTimeout(function(){m.style.display="none"},5e3)},window.check_mark();const e={},t=document.getElementById("parameters_aggregation-time"),o=document.getElementById("parameters_aggregation-scu"),n=document.getElementById("parameters_oos-method"),a=document.getElementById("parameters_promo-method"),r=document.getElementById("parameters_spikes-method"),d=document.getElementById("parameters_sales_recovery-method");e["агрегат по времени"]=t.options[t.selectedIndex].text,e["агрегат по позиции"]=o.options[o.selectedIndex].text,e["очистка oos"]=n.options[n.selectedIndex].text,e["очистка от промо"]=a.options[a.selectedIndex].text,e["очистка от выбросов"]=r.options[r.selectedIndex].text,e.восстановление=d.options[d.selectedIndex].text,localStorage.setItem("globalParameters",JSON.stringify(e)),localStorage.setItem("globalParametersNewProducts",JSON.stringify(e)),localStorage.setItem("globalParametersPromo",JSON.stringify(e)),localStorage.setItem("globalParametersSummaryPlan",JSON.stringify(e)),console.log("Параметры сохранены в двух словарях:",e)};window.saveSelectedGlobalParametersSeasonality=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("seasonality_method"),o=t.options[t.selectedIndex].text;e.сезонность=o,localStorage.setItem("globalParameters",JSON.stringify(e))};window.saveGlobalParametersRegular=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("regular_assort_method"),o=t.options[t.selectedIndex].text;e["методы прогноза"]=o,localStorage.setItem("globalParameters",JSON.stringify(e))};const H="/SputnikPro_test_2_2/images/users/ZilevichElizaveta.jpg",F="/SputnikPro_test_2_2/images/users/TkachevOleg.jpg",G="/SputnikPro_test_2_2/images/users/TolokGalina.jpg",z="/SputnikPro_test_2_2/images/users/question.jpg",_="/SputnikPro_test_2_2/images/users/user1.png";var v,b,J=function(){$.when($("[data-scrollbar=true]").each(function(){generateSlimScroll($(this))})).done(function(){$('[data-scrollbar="true"]').mouseover()})},X=function(){let e=$(".sidebar").attr("data-disable-slide-animation")?0:250;$(".sidebar .nav > .has-sub > a").click(function(){let t=$(this).next(".sub-menu"),o=$(".sidebar .nav > li.has-sub > .sub-menu").not(t);$(".page-sidebar-minified").length===0&&($(o).closest("li").addClass("closing"),$(o).slideUp(e,function(){$(o).closest("li").addClass("closed").removeClass("expand closing")}),$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let n=$(this).closest("li");$(t).is(":visible")?($(n).addClass("expand"),$(n).removeClass("closed")):($(n).addClass("closed"),$(n).removeClass("expand")),$(n).removeClass("expanding closing")}))}),$(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function(){if($(".page-sidebar-minified").length===0){let t=$(this).next(".sub-menu");$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let o=$(this).closest("li");$(t).is(":visible")?($(o).addClass("expand"),$(o).removeClass("closed")):($(o).addClass("closed"),$(o).removeClass("expand")),$(o).removeClass("expanding closing")})}})},q=function(){try{if(typeof Storage<"u"&&typeof localStorage<"u"){let e=window.location.href;e=(e=e.split("?"))[0];let t=localStorage.getItem(e);if(t){t=JSON.parse(t);let o=0;$.when($('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function(){let n=t[o],a=$(this);n&&$.each(n,function(r,d){let m=$('[data-sortable-id="'+d.id+'"]').not('[data-init="true"]');if($(m).length!==0){let u=$(m).clone();$(m).remove(),$(a).append(u),$('[data-sortable-id="'+d.id+'"]').attr("data-init","true")}}),o++})).done(function(){window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))})}}else alert("Your browser is not supported with the local storage")}catch(e){console.log(e)}},V=function(){$(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")},U=function(){$(window).on("scroll",function(){handleCheckScrollClass()}),handleCheckScrollClass()},K=function(){$(document).on("click","#float-sub-menu li.has-sub > a",function(e){let t=$(this).next(".sub-menu"),o=$(t).closest("li"),n=!1,a=!1;$(t).is(":visible")?($(o).addClass("closing"),n=!0):($(o).addClass("expanding"),a=!0),$(t).slideToggle({duration:250,progress:function(){let r=$("#float-sub-menu"),d=$(r).height(),m=$(r).offset(),u=$(r).attr("data-offset-top"),s=$(r).attr("data-menu-offset-top"),i=m.top-$(window).scrollTop(),l=$(window).height();if(n&&u<i&&(i=u<i?u:i,$("#float-sub-menu").css({top:i+"px",bottom:"auto"}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"})),a&&l-i<d){let h=l-s-22;$("#float-sub-menu").css({top:"auto",bottom:0}),$("#float-sub-menu-arrow").css({top:"auto",bottom:h+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:h+"px"})}},complete:function(){$(t).is(":visible")?$(o).addClass("expand"):$(o).addClass("closed"),$(o).removeClass("closing expanding")}})}),$(".sidebar .nav > li.has-sub > a").hover(function(){if($("#page-container").hasClass("page-sidebar-minified")){clearTimeout(v);let e=$(this).closest("li").find(".sub-menu").first();if(b==this&&$("#float-sub-menu").length!==0)return;b=this;let t=$(e).html();if(t){let o=$("#sidebar").offset(),n=$("#page-container").hasClass("page-with-right-sidebar")?$(window).width()-o.left:o.left+60,a=$(e).height(),r=$(this).offset().top-$(window).scrollTop(),d=$("#page-container").hasClass("page-with-right-sidebar")?"auto":n,m=$("#page-container").hasClass("page-with-right-sidebar")?n:"auto",u=$(window).height();if($("#float-sub-menu").length===0?(t='<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="'+r+'" data-menu-offset-top="'+r+'" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">	<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>	<div class="float-sub-menu-line" id="float-sub-menu-line"></div>	<ul class="float-sub-menu">'+t+"</ul></div>",$("#page-container").append(t)):($("#float-sub-menu").attr("data-offset-top",r),$("#float-sub-menu").attr("data-menu-offset-top",r),$(".float-sub-menu").html(t)),a<u-r)$("#float-sub-menu").css({top:r,left:d,bottom:"auto",right:m}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"});else{$("#float-sub-menu").css({bottom:0,top:"auto",left:d,right:m});let s=u-r-21;$("#float-sub-menu-arrow").css({top:"auto",bottom:s+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:s+"px"})}}else $("#float-sub-menu").remove(),b=""}},function(){$("#page-container").hasClass("page-sidebar-minified")&&(v=setTimeout(function(){$("#float-sub-menu").remove(),b=""},250))})},Z=function(){var e;return{init:function(t){t&&(e=t),this.initLocalStorage(),this.initSidebar(),this.initComponent(),this.initThemePanel(),this.initPageLoad(),$(window).trigger("load"),e&&e.ajaxMode&&this.initAjax()},initSidebar:function(){X(),handleMobileSidebarToggle(),handleSidebarMinify(),K()},initSidebarSelection:function(){V()},initComponent:function(){(!e||e&&!e.disableDraggablePanel)&&J(),handleUnlimitedTabsRender(),handlePanelAction(),handleScrollToTopButton(),handleAfterPageLoadAddClass(),U(),$(window).width()>767&&handleTooltipPopoverActivation()},initLocalStorage:function(){(!e||e&&!e.disableLocalStorage)&&q()},initAjax:function(){handleAjaxMode(e),$.ajaxSetup({cache:!0})},scrollTop:function(){$("html, body").animate({scrollTop:$("body").offset().top},0)}}}();window.showContent_parameters=function(){const e=document.getElementById("mainContent");fetch("./src/html/parameters.html").then(t=>{if(!t.ok)throw new Error("Модуль не отвечает");return t.text()}).then(t=>{e.innerHTML=t}).catch(t=>{console.error("Ошибка при загрузке файла:",t),e.innerHTML="Ошибка при загрузке"})};window.showContent_action=function(){fetch("./src/html/action.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_seasonality=function(){fetch("./src/html/seasonality.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_regular_assort=function(){fetch("./src/html/regular_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promo=function(){fetch("./src/html/promo.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.updateUserImage=function(){const e=document.getElementById("header_top_user"),t=document.getElementById("userImage"),o={option1:z,option2:H,option3:_,option4:F,option5:_,option6:G,option7:_},n=e.value;if(t.innerHTML="",n&&o[n]){const a=document.createElement("img");a.src=o[n],a.alt=n,a.style.width="50px",a.style.borderRadius="50px",t.appendChild(a)}};$(document).ready(function(){Z.init(),Highlight.init()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".visible");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(o=>o.classList.remove("actived")),this.classList.add("actived")})})});window.loadAndFilterData=function(){window.saveGlobalParametersRegular=function(){let o=JSON.parse(localStorage.getItem("globalParameters"));o||(o={});const n=document.getElementById("regular_assort_method"),a=n.options[n.selectedIndex].text;o["методы прогноза"]=a,localStorage.setItem("globalParameters",JSON.stringify(o))},window.saveGlobalParametersRegular();const e=JSON.parse(localStorage.getItem("globalParameters")),t=document.getElementById("tb_regular_assort_results");if(!e||!e["очистка от выбросов"]){t.contentDocument.body.innerHTML="<p>Выберите глобальные параметры</p>";return}if(!e.сезонность){t.contentDocument.body.innerHTML="<p>Выберите метод расчета сезонности</p>";return}window.filterData=function(o){const n=JSON.parse(localStorage.getItem("globalParameters"));return o.filter(a=>Object.keys(n).every(r=>a[r]!==void 0?a[r].toString().toLowerCase()===n[r].toString().toLowerCase():!0))},window.displayTable=function(o){const n=document.getElementById("tb_regular_assort_results"),a=n.contentDocument||n.contentWindow.document;a.body.innerHTML="";const r=document.createElement("style");r.textContent=`table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 0px;
      font-size: 12px;
      font-size: 16px;
      font-family: 'Arial', sans-serif; 
  }
  th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
      width: auto;
  }
  th {
      background-color:rgb(36, 76, 223);
      color: white; 
      font-family: 'Arial', sans-serif;
  }
  tr:nth-child(even) {
      background-color: #f2f2f2;
  }
  tr:hover {
      background-color: #ddd;
  }
       td:first-child {
    font-weight: bold;
    font-family: 'Arial', sans-serif;`,a.head.appendChild(r);const d=a.createElement("table");if(d.innerHTML="",o.length===0){d.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',a.body.appendChild(d);return}const m=["WAPE, %","BIAS, %","Кол-во позиций с прогнозом","Всего позиций с продажами","Доля, %","недопрогноз, %","перепрогноз, %","Объем прогноза, шт","Объем продаж, шт","Доля, %2"];o.sort((l,h)=>{const c=m.indexOf(l.МЕРЫ),p=m.indexOf(h.МЕРЫ);return c-p});const u=Object.keys(o[0]),s=document.createElement("tr");for(let l=6;l<u.length;l++){const h=document.createElement("th");h.textContent=u[l],s.appendChild(h)}d.appendChild(s);const i=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];o.forEach(l=>{const h=document.createElement("tr");for(let c=6;c<u.length;c++){const p=document.createElement("td");let f=l[u[c]];typeof f=="number"&&(l.МЕРЫ&&i.includes(l.МЕРЫ)?f=(f*100).toFixed(0)+"%":f=f.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})),p.textContent=f,h.appendChild(p)}d.appendChild(h)}),a.body.appendChild(d)},fetch("   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/regAssort3.xlsx").then(o=>{if(!o.ok)throw new Error("Сеть не отвечает");return o.arrayBuffer()}).then(o=>{const n=XLSX.read(o,{type:"array"}),a=n.SheetNames[0],r=n.Sheets[a],d=XLSX.utils.sheet_to_json(r),m=window.filterData(d);window.displayTable(m)}).catch(o=>{console.error("Ошибка загрузки файла:",o)})};window.loadAndFilterDataNewProducts=function(){window.saveGlobalParametersRegularNewProducts=function(){let e=JSON.parse(localStorage.getItem("globalParametersNewProducts"));e||(e={});const t=document.getElementById("new_product__aggregation-geo"),o=document.getElementById("new_product__aggregation-group"),n=document.getElementById("new_product__aggregation-parameter"),a=t.options[t.selectedIndex].text,r=o.options[o.selectedIndex].text,d=n.options[n.selectedIndex].text;e["агрегат по географии"]=a,e["агрегат по позиции"]=r,e["дополнительные показатели"]=d,localStorage.setItem("globalParametersNewProducts",JSON.stringify(e))},window.saveGlobalParametersRegularNewProducts(),window.filterDataNewProducts=function(e){const t=JSON.parse(localStorage.getItem("globalParametersNewProducts"));return e.filter(o=>Object.keys(t).every(n=>o[n]!==void 0?o[n].toString().toLowerCase()===t[n].toString().toLowerCase():!0))},window.displayTableNewProducts=function(e){const t=document.getElementById("new_product_PreviewIframe"),o=t.contentDocument||t.contentWindow.document;o.body.innerHTML="";const n=document.createElement("style");n.textContent=`table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0px;
    font-size: 12px;
    font-size: 16px;
    font-family: 'Arial', sans-serif; 
}
th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    width: auto;
}
th {
    background-color:rgb(36, 76, 223);
    color: white; 
    font-family: 'Arial', sans-serif;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}
tr:hover {
    background-color: #ddd;
}
     td:first-child {
  font-weight: bold;
  font-family: 'Arial', sans-serif;`,o.head.appendChild(n);const a=o.createElement("table");if(a.innerHTML="",e.length===0){a.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',o.body.appendChild(a);return}const r=["WAPE, %","BIAS, %","Кол-во позиций с прогнозом","Всего позиций с продажами","Доля, %","недопрогноз, %","перепрогноз, %","Объем прогноза, шт","Объем продаж, шт","Доля, %2"];e.sort((s,i)=>{const l=r.indexOf(s.МЕРЫ),h=r.indexOf(i.МЕРЫ);return l-h});const d=Object.keys(e[0]),m=document.createElement("tr");for(let s=3;s<d.length;s++){const i=document.createElement("th");i.textContent=d[s],m.appendChild(i)}a.appendChild(m);const u=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];e.forEach(s=>{const i=document.createElement("tr");for(let l=3;l<d.length;l++){const h=document.createElement("td");let c=s[d[l]];typeof c=="number"&&(s.МЕРЫ&&u.includes(s.МЕРЫ)?c=(c*100).toFixed(0)+"%":c=c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})),h.textContent=c,i.appendChild(h)}a.appendChild(i)}),o.body.appendChild(a)},fetch("   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/newProducts1.xlsx").then(e=>{if(!e.ok)throw new Error("Сеть не отвечает");return e.arrayBuffer()}).then(e=>{const t=XLSX.read(e,{type:"array"}),o=t.SheetNames[0],n=t.Sheets[o],a=XLSX.utils.sheet_to_json(n),r=window.filterDataNewProducts(a);window.displayTableNewProducts(r)}).catch(e=>{console.error("Ошибка загрузки файла:",e)})};window.loadAndFilterDataPromo=function(){window.saveGlobalParametersPromo=function(){let e=JSON.parse(localStorage.getItem("globalParametersPromo"));e||(e={});const t=document.getElementById("promo_method"),o=t.options[t.selectedIndex].text;e["выбор коэффициентов"]=o,localStorage.setItem("globalParametersPromo",JSON.stringify(e))},window.saveGlobalParametersPromo(),window.filterDataPromo=function(e){const t=JSON.parse(localStorage.getItem("globalParametersPromo"));return e.filter(o=>Object.keys(t).every(n=>o[n]!==void 0?o[n].toString().toLowerCase()===t[n].toString().toLowerCase():!0))},window.displayTablePromo=function(e){const t=document.getElementById("promo_PreviewIframe"),o=t.contentDocument||t.contentWindow.document;o.body.innerHTML="";const n=document.createElement("style");n.textContent=`table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0px;
    font-size: 12px;
    font-size: 16px;
    font-family: 'Arial', sans-serif; 
}
th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    width: auto;
}
th {
    background-color:rgb(36, 76, 223);
    color: white; 
    font-family: 'Arial', sans-serif;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}
tr:hover {
    background-color: #ddd;
}
     td:first-child {
  font-weight: bold;
  font-family: 'Arial', sans-serif;`,o.head.appendChild(n);const a=o.createElement("table");if(a.innerHTML="",e.length===0){a.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',o.body.appendChild(a);return}const r=["WAPE, %","BIAS, %","Кол-во позиций с прогнозом","Всего позиций с продажами","Доля, %","недопрогноз, %","перепрогноз, %","Объем прогноза, шт","Объем продаж, шт","Доля, %2"];e.sort((s,i)=>{const l=r.indexOf(s.МЕРЫ),h=r.indexOf(i.МЕРЫ);return l-h});const d=Object.keys(e[0]),m=document.createElement("tr");for(let s=2;s<d.length;s++){const i=document.createElement("th");i.textContent=d[s],m.appendChild(i)}a.appendChild(m);const u=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];e.forEach(s=>{const i=document.createElement("tr");for(let l=2;l<d.length;l++){const h=document.createElement("td");let c=s[d[l]];typeof c=="number"&&(s.МЕРЫ&&u.includes(s.МЕРЫ)?c=(c*100).toFixed(0)+"%":c=c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})),h.textContent=c,i.appendChild(h)}a.appendChild(i)}),o.body.appendChild(a)},fetch("   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/promo.xlsx").then(e=>{if(!e.ok)throw new Error("Сеть не отвечает");return e.arrayBuffer()}).then(e=>{const t=XLSX.read(e,{type:"array"}),o=t.SheetNames[0],n=t.Sheets[o],a=XLSX.utils.sheet_to_json(n),r=window.filterDataPromo(a);window.displayTablePromo(r)}).catch(e=>{console.error("Ошибка загрузки файла:",e)})};window.loadAndFilterDataSummaryPlan=function(){window.saveGlobalParametersSummaryPlan=function(){let e=JSON.parse(localStorage.getItem("globalParametersSummaryPlan"));e||(e={}),e["регулярный ассортимент"]=document.getElementById("summary_plan__regAssort").checked?"true":"false",e.промо=document.getElementById("summary_plan__promo").checked?"true":"false",e.новинки=document.getElementById("summary_plan__newsProducts").checked?"true":"false",e["учёт каннибализации"]=document.getElementById("summary_plan__cannibalization").checked?"true":"false",localStorage.setItem("globalParametersSummaryPlan",JSON.stringify(e))},window.saveGlobalParametersSummaryPlan(),window.filterDataSummaryPlan=function(e){const t=JSON.parse(localStorage.getItem("globalParametersSummaryPlan"));return e.filter(o=>Object.keys(t).every(n=>o[n]!==void 0?o[n].toString().toLowerCase()===t[n].toString().toLowerCase():!0))},window.displayTableSummaryPlan=function(e){const t=document.getElementById("summaryPlan_PreviewIframe"),o=t.contentDocument||t.contentWindow.document;o.body.innerHTML="";const n=document.createElement("style");n.textContent=`table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 0px;
          font-size: 12px;
          font-size: 16px;
          font-family: 'Arial', sans-serif; 
      }
      th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
          width: auto;
      }
      th {
          background-color:rgb(36, 76, 223);
          color: white; 
          font-family: 'Arial', sans-serif;
      }
      tr:nth-child(even) {
          background-color: #f2f2f2;
      }
      tr:hover {
          background-color: #ddd;
      }
           td:first-child {
        font-weight: bold;
        font-family: 'Arial', sans-serif;`,o.head.appendChild(n);const a=o.createElement("table");if(a.innerHTML="",e.length===0){a.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',o.body.appendChild(a);return}const r=["WAPE, %","BIAS, %","Кол-во позиций с прогнозом","Всего позиций с продажами","Доля, %","недопрогноз, %","перепрогноз, %","Объем прогноза, шт","Объем продаж, шт","Доля, %2"];e.sort((s,i)=>{const l=r.indexOf(s.МЕРЫ),h=r.indexOf(i.МЕРЫ);return l-h});const d=Object.keys(e[0]),m=document.createElement("tr");for(let s=4;s<d.length;s++){const i=document.createElement("th");i.textContent=d[s],m.appendChild(i)}a.appendChild(m);const u=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];e.forEach(s=>{const i=document.createElement("tr");for(let l=4;l<d.length;l++){const h=document.createElement("td");let c=s[d[l]];typeof c=="number"&&(s.МЕРЫ&&u.includes(s.МЕРЫ)?c=(c*100).toFixed(0)+"%":c=c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})),h.textContent=c,i.appendChild(h)}a.appendChild(i)}),o.body.appendChild(a)},fetch("   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/summaryPlan.xlsx").then(e=>{if(!e.ok)throw new Error("Сеть не отвечает");return e.arrayBuffer()}).then(e=>{const t=XLSX.read(e,{type:"array"}),o=t.SheetNames[0],n=t.Sheets[o],a=XLSX.utils.sheet_to_json(n),r=window.filterDataSummaryPlan(a);window.displayTableSummaryPlan(r)}).catch(e=>{console.error("Ошибка загрузки файла:",e)})};
