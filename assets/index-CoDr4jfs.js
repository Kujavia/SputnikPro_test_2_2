(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();window.check_mark=function(){const e=document.getElementById("check-mark_button");e.style.display="inline",setTimeout(function(){e.style.display="none"},5e3)};window.showContent_listing=function(){fetch("./src/html/listing.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_newProducts=function(){fetch("./src/html/new_products.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_locks=function(){fetch("./src/html/locks.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_outputAssort=function(){fetch("./src/html/output_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_tender=function(){fetch("./src/html/tender.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_priceChange=function(){fetch("./src/html/price_change.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promoRatio=function(){fetch("./src/html/promo_ratio.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_planner=function(){fetch("./src/html/planner.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_summaryPlan=function(){fetch("./src/html/summary_plan.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.tbRegAssortButton=function(){const t=document.getElementById("regular_assort_method").value,a=document.getElementById("regular_assort__aggregation-time").value,n=document.getElementById("regular_assort__aggregation-geo").value,c=document.getElementById("regular_assort__aggregation-scu").value,i=document.getElementById("regular_assort_period").value;let d;if(t==="ra_not_selected"||a==="not_selected"||n==="not_selected"||c==="not_selected"||i==="not_selected"){const l=document.getElementById("tb_regular_assort_results"),u=l.contentDocument||l.contentWindow.document;u.open(),u.write(`<html>
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
            </html>`),u.close()}else if(t==="ra_moving_average")d="./images/demo_file/test_forecast_csv.csv";else if(t==="ra_weighted_average")d="./images/demo_file/test_forecast_csv2.csv";else if(t==="ra_linear_regression")d="./images/demo_file/test_forecast_csv3.csv";else if(t==="ra_multiple_regression")d="./images/demo_file/test_forecast_csv.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(d,{download:!0,header:!0,complete:function(l){const u=document.getElementById("tb_regular_assort_results"),h=u.contentDocument||u.contentWindow.document;h.open(),h.write(`<html>
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
                            <tr>`),Object.keys(l.data[0]).forEach(p=>{h.write(`<th>${p}</th>`)}),h.write("</tr></thead><tbody>"),l.data.forEach(p=>{h.write("<tr>"),Object.values(p).forEach(w=>{h.write(`<td>${w}</td>`)}),h.write("</tr>")}),h.write("</tbody></table>"),h.write("</body></html>"),h.close()}})};window.loadData=function(){const e=document.getElementById("seasonality_method").value,t=document.getElementById("seasonality_time").value,o=document.getElementById("seasonality_geography").value,a=document.getElementById("seasonality_groupSCU").value;if(e==="not_selected"||t==="not_selected"||o==="not_selected"||a==="not_selected"){document.getElementById("seasonality_chart").innerHTML="Заполните все поля";return}document.getElementById("seasonality_chart").innerHTML="";let r="";if(e==="fluctuation_average"&&t==="week"&&o==="seasonality_geographyСhain"&&a==="groupe1")r="./images/demo_file/test3.xlsx";else if(e==="fluctuation_trend"&&t==="week"&&o==="seasonality_geographyСhain"&&a==="groupe1")r="./images/demo_file/test3.xlsx";else{document.getElementById("seasonality_chart").innerHTML="Выберите корректные параметры";return}fetch(r).then(n=>n.arrayBuffer()).then(n=>{const m=XLSX.read(n,{type:"array"}),c=m.SheetNames[0],s=m.Sheets[c],i=XLSX.utils.sheet_to_json(s,{header:1}),d=[],l={};for(let h=1;h<i.length;h++){const g=i[h];if(g.length===3){const p=g[0],w=g[1],E=parseFloat(g[2]);!d.includes(w)&&w!=="-1"&&d.push(w),l[p]||(l[p]={x:[],y:[],type:"scatter",mode:"lines+markers",name:p}),d.indexOf(w)!==-1&&(l[p].x.push(w),l[p].y.push(E))}}const u=Object.values(l);Plotly.newPlot("seasonality_chart",u,{title:"Сезонность",xaxis:{title:"Неделя",tickmode:"linear",tick0:1,dtick:1,range:[0,53]},yaxis:{title:"Значение",rangemode:"tozero"}})}).catch(n=>{console.error("Ошибка при загрузке файла:",n)})};window.tbPromoRatioPerviewButton=function(){const t=document.getElementById("promoRatio_method").value;let o;if(t==="promoRatio_method_average")o="./images/demo_file/test_forecast_csv.csv";else if(t==="promoRatio_method_mediana")o="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(o,{download:!0,header:!0,complete:function(a){const r=document.getElementById("tb_promoRatio"),n=r.contentDocument||r.contentWindow.document;n.open(),n.write(`<html>
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
                            <tr>`),Object.keys(a.data[0]).forEach(c=>{n.write(`<th>${c}</th>`)}),n.write("</tr></thead><tbody>"),a.data.forEach(c=>{n.write("<tr>"),Object.values(c).forEach(s=>{n.write(`<td>${s}</td>`)}),n.write("</tr>")}),n.write("</tbody></table>"),n.write("</body></html>"),n.close()}})};function k(){document.getElementById("modal").style.display="flex"}function I(){document.getElementById("modal").style.display="none"}function B(){const e=document.querySelectorAll('#modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.tbRegAssortOptimizationButton=k;window.ra_closeModalButton=I;window.ra_saveButton=B;function C(){document.getElementById("promo_modal").style.display="flex"}function S(){document.getElementById("promo_modal").style.display="none"}function P(){const e=document.querySelectorAll('#promo_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.promo_OptimizationButton=C;window.promo_closeModalButton=S;window.promo_saveModalButton=P;window.promo_PreviewButton=function(){const t=document.getElementById("promo_method").value;let o;if(t==="promo_moving__сalculated")o="./images/demo_file/test_forecast_csv.csv";else if(t==="promo_not_selected"){const a=document.getElementById("promo_PreviewIframe"),r=a.contentDocument||a.contentWindow.document;r.open(),r.write(`<html>
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
                  <h5>Выберите коэффициент</h5>
              </body>
              </html>`),r.close();return}else if(t==="promo_weighted__custom")o="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(o,{download:!0,header:!0,complete:function(a){const r=document.getElementById("promo_PreviewIframe"),n=r.contentDocument||r.contentWindow.document;n.open(),n.write(`<html>
                <head>
                    <title>CSV Data</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color:rgb(255, 255, 255);
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
                            <tr>`),Object.keys(a.data[0]).forEach(c=>{n.write(`<th>${c}</th>`)}),n.write("</tr></thead><tbody>"),a.data.forEach(c=>{n.write("<tr>"),Object.values(c).forEach(s=>{n.write(`<td>${s}</td>`)}),n.write("</tr>")}),n.write("</tbody></table>"),n.write("</body></html>"),n.close()}})};function T(){document.getElementById("new_product__modal").style.display="flex"}function M(){document.getElementById("new_product__modal").style.display="none"}function D(){const e=document.querySelectorAll('#new_product__modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.newProductOptimizationButton=T;window.newProductCloseModalButton=M;window.newProductSaveModalButton=D;window.newProduct_PreviewButton=function(){const t=document.getElementById("new_product__aggregation-time").value,a=document.getElementById("new_product__aggregation-geo").value,n=document.getElementById("new_product__aggregation-group").value,c=document.getElementById("new_product__aggregation-parameter").value;let s;if(t!=="not_selected"&&a!=="not_selected"&&n!=="not_selected"&&c!=="not_selected")s="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||a==="not_selected"||n==="not_selected"||c==="not_selected"){const i=document.getElementById("new_product_PreviewIframe"),d=i.contentDocument||i.contentWindow.document;d.open(),d.write(`<html>
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
              </html>`),d.close();return}else if(selectedMethod==="promo_weighted__custom")s="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(s,{download:!0,header:!0,complete:function(i){const d=document.getElementById("new_product_PreviewIframe"),l=d.contentDocument||d.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(i.data[0]).forEach(h=>{l.write(`<th>${h}</th>`)}),l.write("</tr></thead><tbody>"),i.data.forEach(h=>{l.write("<tr>"),Object.values(h).forEach(g=>{l.write(`<td>${g}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};function A(){document.getElementById("summaryPlan_modal").style.display="flex"}function O(){document.getElementById("summaryPlan_modal").style.display="none"}function L(){const e=document.querySelectorAll('#summaryPlan_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.summaryPlan_OptimizationButton=A;window.summaryPlan_closeModalButton=O;window.summaryPlan_saveModalButton=L;window.summaryPlan_PreviewButton=function(){const t=document.getElementById("summary_plan_time").value,a=document.getElementById("summary_plan_geography").value,n=document.getElementById("summary_plan_scu").value,c=document.getElementById("summary_plan_method").value;let s;if(t!=="not_selected"&&a!=="not_selected"&&n!=="not_selected"&&c!=="not_selected")s="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||a==="not_selected"||n==="not_selected"||c==="not_selected"){const i=document.getElementById("summaryPlan_PreviewIframe"),d=i.contentDocument||i.contentWindow.document;d.open(),d.write(`<html>
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
              </html>`),d.close();return}else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(s,{download:!0,header:!0,complete:function(i){const d=document.getElementById("summaryPlan_PreviewIframe"),l=d.contentDocument||d.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(i.data[0]).forEach(h=>{l.write(`<th>${h}</th>`)}),l.write("</tr></thead><tbody>"),i.data.forEach(h=>{l.write("<tr>"),Object.values(h).forEach(g=>{l.write(`<td>${g}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};function N(){v(),document.getElementById("planner_weeklyModal").style.display="block"}function y(e){document.getElementById(e).style.display="none"}function v(){y("planner_weeklyModal"),y("timeModal"),y("checkboxModal")}window.onclick=function(e){e.target.classList.contains("modal")&&v()};function j(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block"),o=t.options[t.selectedIndex].text,a=document.getElementById("planner__scenarioCustom"),r=a.options[a.selectedIndex].text,n=document.getElementById("planner_interval").value,m=document.getElementById("planner_selectedTime").value,c=document.getElementById("planner_selectedStartDate").value,s=document.getElementById("planner_selectedEndDate").value,i=document.getElementById("planner_Iframe"),d=i.contentDocument||i.contentWindow.document;d.body.innerHTML=`        <style>
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
                <td>${r}</td>
                <td>${n} дней</td>
                <td>${c}</td>
                <td>${s}</td>
                <td>${m}</td>
            </tr>
        </table>`,y("planner_weeklyModal")}window.planner_selectScenarioRepeat=N;window.closeModal=y;window.closeAllModals=v;window.saveSettings=j;let f={};function R(){f.intervalNum=document.getElementById("planner_intervalPeriodicity").value,f.dayOfWeekRepeat=document.getElementById("planner_dayOfWeekRepeat").value,f.selectedTime=document.getElementById("planner_selectedTime").value,f.selectedStartDate=document.getElementById("planner_selectedStartDate").value;const e=document.querySelectorAll('input[name="options"]:checked');let t="";e.forEach(o=>{o.value==="never"?t="Никогда":o.value==="number"?t=`Спустя ${document.getElementById("planner_ModalRepetition__times").value} раз`:o.value==="date"&&(t=`Дата:${document.getElementById("dateInput").value}`)}),f.endingInfo=t,closeModal("planner_weeklyModal")}function H(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block").value,o=document.getElementById("planner__scenarioCustom").value,a=` <style>
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
        <tr>
            <td>${e}</td>
            <td>${t}</td>
            <td>${o}</td>
            <td>${f.intervalNum}  дней</td>
            <td>${f.dayOfWeekRepeat}</td>
            <td>${f.selectedTime}</td>
            <td>${f.selectedStartDate}</td>
            <td>${f.endingInfo}</td>
        </tr>
    </table>`,r=document.getElementById("planner_Iframe"),n=r.contentDocument||r.contentWindow.document;n.open(),n.write(a),n.close()}window.saveModalData=R;window.planner_addData=H;window.planner_formRepeatSelect=function(){const e=document.getElementById("planner_intervalRepetition__header"),t=document.querySelector(".planner_visionParagraphDayOfWeek"),o=document.getElementById("planner_dayOfWeekRepeat"),a=document.querySelector(".planner_intervalWrapperDay"),r=e.value;r==="repeat_daily"?(t.style.display="none",o.style.display="none",a.textContent="день"):r==="repeat_weekly"?(t.style.display="block",o.style.display="block",a.textContent="неделя"):r==="repeat_monthly"&&(t.style.display="block",o.style.display="block",a.textContent="месяц")};document.addEventListener("DOMContentLoaded",function(){planner_formRepeatSelect()});window.saveSelectedGlobalParameters=function(){window.check_mark=function(){const c=document.getElementById("check-mark_button");c.style.display="inline",setTimeout(function(){c.style.display="none"},5e3)},window.check_mark();const e={},t=document.getElementById("parameters_aggregation-time"),o=document.getElementById("parameters_aggregation-scu"),a=document.getElementById("parameters_oos-method"),r=document.getElementById("parameters_promo-method"),n=document.getElementById("parameters_spikes-method"),m=document.getElementById("parameters_sales_recovery-method");e["агрегат по времени"]=t.options[t.selectedIndex].text,e["агрегат по позиции"]=o.options[o.selectedIndex].text,e["очистка oos"]=a.options[a.selectedIndex].text,e["очистка от промо"]=r.options[r.selectedIndex].text,e["очистка от выбросов"]=n.options[n.selectedIndex].text,e.восстановление=m.options[m.selectedIndex].text,localStorage.setItem("globalParameters",JSON.stringify(e)),localStorage.setItem("globalParametersNewProducts",JSON.stringify(e)),console.log("Параметры сохранены в двух словарях:",e)};window.saveSelectedGlobalParametersSeasonality=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("seasonality_method"),o=t.options[t.selectedIndex].text;e.сезонность=o,localStorage.setItem("globalParameters",JSON.stringify(e))};window.saveGlobalParametersRegular=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("regular_assort_method"),o=t.options[t.selectedIndex].text;e["методы прогноза"]=o,localStorage.setItem("globalParameters",JSON.stringify(e))};const F="/SputnikPro_test_2_2/images/users/ZilevichElizaveta.jpg",G="/SputnikPro_test_2_2/images/users/TkachevOleg.jpg",W="/SputnikPro_test_2_2/images/users/TolokGalina.jpg",z="/SputnikPro_test_2_2/images/users/question.jpg",_="/SputnikPro_test_2_2/images/users/user1.png";var x,b,J=function(){$.when($("[data-scrollbar=true]").each(function(){generateSlimScroll($(this))})).done(function(){$('[data-scrollbar="true"]').mouseover()})},X=function(){let e=$(".sidebar").attr("data-disable-slide-animation")?0:250;$(".sidebar .nav > .has-sub > a").click(function(){let t=$(this).next(".sub-menu"),o=$(".sidebar .nav > li.has-sub > .sub-menu").not(t);$(".page-sidebar-minified").length===0&&($(o).closest("li").addClass("closing"),$(o).slideUp(e,function(){$(o).closest("li").addClass("closed").removeClass("expand closing")}),$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let a=$(this).closest("li");$(t).is(":visible")?($(a).addClass("expand"),$(a).removeClass("closed")):($(a).addClass("closed"),$(a).removeClass("expand")),$(a).removeClass("expanding closing")}))}),$(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function(){if($(".page-sidebar-minified").length===0){let t=$(this).next(".sub-menu");$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let o=$(this).closest("li");$(t).is(":visible")?($(o).addClass("expand"),$(o).removeClass("closed")):($(o).addClass("closed"),$(o).removeClass("expand")),$(o).removeClass("expanding closing")})}})},q=function(){try{if(typeof Storage<"u"&&typeof localStorage<"u"){let e=window.location.href;e=(e=e.split("?"))[0];let t=localStorage.getItem(e);if(t){t=JSON.parse(t);let o=0;$.when($('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function(){let a=t[o],r=$(this);a&&$.each(a,function(n,m){let c=$('[data-sortable-id="'+m.id+'"]').not('[data-init="true"]');if($(c).length!==0){let s=$(c).clone();$(c).remove(),$(r).append(s),$('[data-sortable-id="'+m.id+'"]').attr("data-init","true")}}),o++})).done(function(){window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))})}}else alert("Your browser is not supported with the local storage")}catch(e){console.log(e)}},V=function(){$(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")},U=function(){$(window).on("scroll",function(){handleCheckScrollClass()}),handleCheckScrollClass()},K=function(){$(document).on("click","#float-sub-menu li.has-sub > a",function(e){let t=$(this).next(".sub-menu"),o=$(t).closest("li"),a=!1,r=!1;$(t).is(":visible")?($(o).addClass("closing"),a=!0):($(o).addClass("expanding"),r=!0),$(t).slideToggle({duration:250,progress:function(){let n=$("#float-sub-menu"),m=$(n).height(),c=$(n).offset(),s=$(n).attr("data-offset-top"),i=$(n).attr("data-menu-offset-top"),d=c.top-$(window).scrollTop(),l=$(window).height();if(a&&s<d&&(d=s<d?s:d,$("#float-sub-menu").css({top:d+"px",bottom:"auto"}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"})),r&&l-d<m){let u=l-i-22;$("#float-sub-menu").css({top:"auto",bottom:0}),$("#float-sub-menu-arrow").css({top:"auto",bottom:u+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:u+"px"})}},complete:function(){$(t).is(":visible")?$(o).addClass("expand"):$(o).addClass("closed"),$(o).removeClass("closing expanding")}})}),$(".sidebar .nav > li.has-sub > a").hover(function(){if($("#page-container").hasClass("page-sidebar-minified")){clearTimeout(x);let e=$(this).closest("li").find(".sub-menu").first();if(b==this&&$("#float-sub-menu").length!==0)return;b=this;let t=$(e).html();if(t){let o=$("#sidebar").offset(),a=$("#page-container").hasClass("page-with-right-sidebar")?$(window).width()-o.left:o.left+60,r=$(e).height(),n=$(this).offset().top-$(window).scrollTop(),m=$("#page-container").hasClass("page-with-right-sidebar")?"auto":a,c=$("#page-container").hasClass("page-with-right-sidebar")?a:"auto",s=$(window).height();if($("#float-sub-menu").length===0?(t='<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="'+n+'" data-menu-offset-top="'+n+'" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">	<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>	<div class="float-sub-menu-line" id="float-sub-menu-line"></div>	<ul class="float-sub-menu">'+t+"</ul></div>",$("#page-container").append(t)):($("#float-sub-menu").attr("data-offset-top",n),$("#float-sub-menu").attr("data-menu-offset-top",n),$(".float-sub-menu").html(t)),r<s-n)$("#float-sub-menu").css({top:n,left:m,bottom:"auto",right:c}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"});else{$("#float-sub-menu").css({bottom:0,top:"auto",left:m,right:c});let i=s-n-21;$("#float-sub-menu-arrow").css({top:"auto",bottom:i+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:i+"px"})}}else $("#float-sub-menu").remove(),b=""}},function(){$("#page-container").hasClass("page-sidebar-minified")&&(x=setTimeout(function(){$("#float-sub-menu").remove(),b=""},250))})},Z=function(){var e;return{init:function(t){t&&(e=t),this.initLocalStorage(),this.initSidebar(),this.initComponent(),this.initThemePanel(),this.initPageLoad(),$(window).trigger("load"),e&&e.ajaxMode&&this.initAjax()},initSidebar:function(){X(),handleMobileSidebarToggle(),handleSidebarMinify(),K()},initSidebarSelection:function(){V()},initComponent:function(){(!e||e&&!e.disableDraggablePanel)&&J(),handleUnlimitedTabsRender(),handlePanelAction(),handleScrollToTopButton(),handleAfterPageLoadAddClass(),U(),$(window).width()>767&&handleTooltipPopoverActivation()},initLocalStorage:function(){(!e||e&&!e.disableLocalStorage)&&q()},initAjax:function(){handleAjaxMode(e),$.ajaxSetup({cache:!0})},scrollTop:function(){$("html, body").animate({scrollTop:$("body").offset().top},0)}}}();window.showContent_parameters=function(){const e=document.getElementById("mainContent");fetch("./src/html/parameters.html").then(t=>{if(!t.ok)throw new Error("Модуль не отвечает");return t.text()}).then(t=>{e.innerHTML=t}).catch(t=>{console.error("Ошибка при загрузке файла:",t),e.innerHTML="Ошибка при загрузке"})};window.showContent_action=function(){fetch("./src/html/action.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_seasonality=function(){fetch("./src/html/seasonality.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_regular_assort=function(){fetch("./src/html/regular_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promo=function(){fetch("./src/html/promo.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.updateUserImage=function(){const e=document.getElementById("header_top_user"),t=document.getElementById("userImage"),o={option1:z,option2:F,option3:_,option4:G,option5:_,option6:W,option7:_},a=e.value;if(t.innerHTML="",a&&o[a]){const r=document.createElement("img");r.src=o[a],r.alt=a,r.style.width="50px",r.style.borderRadius="50px",t.appendChild(r)}};$(document).ready(function(){Z.init(),Highlight.init()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".visible");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(o=>o.classList.remove("actived")),this.classList.add("actived")})})});window.loadAndFilterData=function(){window.saveGlobalParametersRegular=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("regular_assort_method"),o=t.options[t.selectedIndex].text;e["методы прогноза"]=o,localStorage.setItem("globalParameters",JSON.stringify(e))},window.saveGlobalParametersRegular(),window.filterData=function(e){const t=JSON.parse(localStorage.getItem("globalParameters"));return e.filter(o=>Object.keys(t).every(a=>o[a]!==void 0?o[a]===t[a]:!0))},window.displayTable=function(e){const t=document.getElementById("tb_regular_assort_results"),o=t.contentDocument||t.contentWindow.document;o.body.innerHTML="";const a=document.createElement("style");a.textContent=`table {
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
        }`,o.head.appendChild(a);const r=o.createElement("table");if(r.innerHTML="",e.length===0){r.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',o.body.appendChild(r);return}const n=Object.keys(e[0]),m=document.createElement("tr");for(let s=6;s<n.length;s++){const i=document.createElement("th");i.textContent=n[s],m.appendChild(i)}r.appendChild(m);const c=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];e.forEach(s=>{const i=document.createElement("tr");for(let d=6;d<n.length;d++){const l=document.createElement("td");let u=s[n[d]];typeof u=="number"&&(s.МЕРЫ&&c.includes(s.МЕРЫ)?u=(u*100).toFixed(2)+"%":u=u.toFixed(2)),l.textContent=u,i.appendChild(l)}r.appendChild(i)}),o.body.appendChild(r)},fetch("./public/images/demo_file/regAssort3.xlsx").then(e=>{if(!e.ok)throw new Error("Сеть не отвечает");return e.arrayBuffer()}).then(e=>{const t=XLSX.read(e,{type:"array"}),o=t.SheetNames[0],a=t.Sheets[o],r=XLSX.utils.sheet_to_json(a),n=window.filterData(r);window.displayTable(n)}).catch(e=>{console.error("Ошибка загрузки файла:",e)})};window.loadAndFilterDataNewProducts=function(){window.saveGlobalParametersRegularNewProducts=function(){let e=JSON.parse(localStorage.getItem("globalParametersNewProducts"));e||(e={});const t=document.getElementById("new_product__aggregation-geo"),o=document.getElementById("new_product__aggregation-group"),a=document.getElementById("new_product__aggregation-parameter"),r=t.options[t.selectedIndex].text,n=o.options[o.selectedIndex].text,m=a.options[a.selectedIndex].text;e["агрегат по географии"]=r,e["агрегат по позиции"]=n,e["дополнительные показатели"]=m,localStorage.setItem("globalParametersNewProducts",JSON.stringify(e))},window.saveGlobalParametersRegularNewProducts(),window.filterDataNewProducts=function(e){const t=JSON.parse(localStorage.getItem("globalParametersNewProducts"));return e.filter(o=>Object.keys(t).every(a=>o[a]!==void 0?o[a]===t[a]:!0))},window.displayTableNewProducts=function(e){const t=document.getElementById("new_product_PreviewIframe"),o=t.contentDocument||t.contentWindow.document;o.body.innerHTML="";const a=document.createElement("style");a.textContent=`table {
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
      }`,o.head.appendChild(a);const r=o.createElement("table");if(r.innerHTML="",e.length===0){r.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',o.body.appendChild(r);return}const n=Object.keys(e[0]),m=document.createElement("tr");for(let s=3;s<n.length;s++){const i=document.createElement("th");i.textContent=n[s],m.appendChild(i)}r.appendChild(m);const c=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];e.forEach(s=>{const i=document.createElement("tr");for(let d=3;d<n.length;d++){const l=document.createElement("td");let u=s[n[d]];typeof u=="number"&&(s.МЕРЫ&&c.includes(s.МЕРЫ)?u=(u*100).toFixed(2)+"%":u=u.toFixed(2)),l.textContent=u,i.appendChild(l)}r.appendChild(i)}),o.body.appendChild(r)},fetch("   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/newProducts1.xlsx").then(e=>{if(!e.ok)throw new Error("Сеть не отвечает");return e.arrayBuffer()}).then(e=>{const t=XLSX.read(e,{type:"array"}),o=t.SheetNames[0],a=t.Sheets[o],r=XLSX.utils.sheet_to_json(a),n=window.filterDataNewProducts(r);window.displayTableNewProducts(n)}).catch(e=>{console.error("Ошибка загрузки файла:",e)})};
