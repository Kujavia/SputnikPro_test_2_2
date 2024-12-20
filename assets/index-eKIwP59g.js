(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();window.check_mark=function(){const e=document.getElementById("check-mark_button");e.style.display="inline",setTimeout(function(){e.style.display="none"},5e3)};window.showContent_listing=function(){fetch("./src/html/listing.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_newProducts=function(){fetch("./src/html/new_products.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_locks=function(){fetch("./src/html/locks.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_outputAssort=function(){fetch("./src/html/output_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_tender=function(){fetch("./src/html/tender.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_priceChange=function(){fetch("./src/html/price_change.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promoRatio=function(){fetch("./src/html/promo_ratio.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_planner=function(){fetch("./src/html/planner.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};const k="/SputnikPro_test_2_2/images/chart_regAssort.png";window.tb_regular_assort__chart=function(){const e=document.getElementById("tb_regular_assort_chart"),t=k,n=e.contentDocument||e.contentWindow.document;n.open(),n.write(`<html>
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
        </html>`),n.close()};window.showContent_summaryPlan=function(){fetch("./src/html/summary_plan.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.tbRegAssortButton=function(){const t=document.getElementById("regular_assort_method").value,a=document.getElementById("regular_assort__aggregation-time").value,o=document.getElementById("regular_assort__aggregation-geo").value,i=document.getElementById("regular_assort__aggregation-group").value,d=document.getElementById("regular_assort__aggregation-scu").value,l=document.getElementById("regular_assort_period").value;let h;if(t==="ra_not_selected"||a==="not_selected"||o==="not_selected"||i==="not_selected"||d==="not_selected"||l==="not_selected"){const m=document.getElementById("tb_regular_assort_results"),g=m.contentDocument||m.contentWindow.document;g.open(),g.write(`<html>
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
            </html>`),g.close()}else if(t==="ra_moving_average")h="./images/demo_file/test_forecast_csv.csv";else if(t==="ra_weighted_average")h="./images/demo_file/test_forecast_csv2.csv";else if(t==="ra_linear_regression")h="./images/demo_file/test_forecast_csv3.csv";else if(t==="ra_multiple_regression")h="./images/demo_file/test_forecast_csv.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(h,{download:!0,header:!0,complete:function(m){const g=document.getElementById("tb_regular_assort_results"),f=g.contentDocument||g.contentWindow.document;f.open(),f.write(`<html>
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
                            <tr>`),Object.keys(m.data[0]).forEach(b=>{f.write(`<th>${b}</th>`)}),f.write("</tr></thead><tbody>"),m.data.forEach(b=>{f.write("<tr>"),Object.values(b).forEach(E=>{f.write(`<td>${E}</td>`)}),f.write("</tr>")}),f.write("</tbody></table>"),f.write("</body></html>"),f.close()}})};window.tbSeasonalityPreview=function(){const t=document.getElementById("seasonality_method").value,a=document.getElementById("seasonality_time").value,o=document.getElementById("seasonality_geography").value,i=document.getElementById("seasonality_groupSCU").value;let c;if(t==="not_selected"||a==="not_selected"||o==="not_selected"||i==="not_selected"){const d=document.getElementById("tb_seasonality"),s=d.contentDocument||d.contentWindow.document;s.open(),s.write(`<html>
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
            </html>`),s.close()}else if(t==="fluctuation_trend")c="./images/demo_file/test_forecast_csv.csv";else if(t==="fluctuation_average")c="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(c,{download:!0,header:!0,complete:function(d){const s=document.getElementById("tb_seasonality"),l=s.contentDocument||s.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(d.data[0]).forEach(m=>{l.write(`<th>${m}</th>`)}),l.write("</tr></thead><tbody>"),d.data.forEach(m=>{l.write("<tr>"),Object.values(m).forEach(g=>{l.write(`<td>${g}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};window.tbPromoRatioPerviewButton=function(){const t=document.getElementById("promoRatio_method").value;let n;if(t==="promoRatio_method_average")n="./images/demo_file/test_forecast_csv.csv";else if(t==="promoRatio_method_mediana")n="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(n,{download:!0,header:!0,complete:function(a){const r=document.getElementById("tb_promoRatio"),o=r.contentDocument||r.contentWindow.document;o.open(),o.write(`<html>
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
                            <tr>`),Object.keys(a.data[0]).forEach(i=>{o.write(`<th>${i}</th>`)}),o.write("</tr></thead><tbody>"),a.data.forEach(i=>{o.write("<tr>"),Object.values(i).forEach(c=>{o.write(`<td>${c}</td>`)}),o.write("</tr>")}),o.write("</tbody></table>"),o.write("</body></html>"),o.close()}})};function B(){document.getElementById("modal").style.display="flex"}function C(){document.getElementById("modal").style.display="none"}function I(){const e=document.querySelectorAll('#modalContent input[type="checkbox"]'),t=[];e.forEach(n=>{n.checked&&t.push(n.name)})}window.tbRegAssortOptimizationButton=B;window.ra_closeModalButton=C;window.ra_saveButton=I;function S(){document.getElementById("promo_modal").style.display="flex"}function T(){document.getElementById("promo_modal").style.display="none"}function P(){const e=document.querySelectorAll('#promo_modalContent input[type="checkbox"]'),t=[];e.forEach(n=>{n.checked&&t.push(n.name)})}window.promo_OptimizationButton=S;window.promo_closeModalButton=T;window.promo_saveModalButton=P;window.promo_PreviewButton=function(){const t=document.getElementById("promo_method").value;let n;if(t==="promo_moving__сalculated")n="./images/demo_file/test_forecast_csv.csv";else if(t==="promo_not_selected"){const a=document.getElementById("promo_PreviewIframe"),r=a.contentDocument||a.contentWindow.document;r.open(),r.write(`<html>
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
                  <h5>Выберите коэффициент</h5>
              </body>
              </html>`),r.close();return}else if(t==="promo_weighted__custom")n="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(n,{download:!0,header:!0,complete:function(a){const r=document.getElementById("promo_PreviewIframe"),o=r.contentDocument||r.contentWindow.document;o.open(),o.write(`<html>
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
                            <tr>`),Object.keys(a.data[0]).forEach(i=>{o.write(`<th>${i}</th>`)}),o.write("</tr></thead><tbody>"),a.data.forEach(i=>{o.write("<tr>"),Object.values(i).forEach(c=>{o.write(`<td>${c}</td>`)}),o.write("</tr>")}),o.write("</tbody></table>"),o.write("</body></html>"),o.close()}})};function M(){document.getElementById("new_product__modal").style.display="flex"}function A(){document.getElementById("new_product__modal").style.display="none"}function D(){const e=document.querySelectorAll('#new_product__modalContent input[type="checkbox"]'),t=[];e.forEach(n=>{n.checked&&t.push(n.name)})}window.newProductOptimizationButton=M;window.newProductCloseModalButton=A;window.newProductSaveModalButton=D;window.newProduct_PreviewButton=function(){const t=document.getElementById("new_product__aggregation-time").value,a=document.getElementById("new_product__aggregation-geo").value,o=document.getElementById("new_product__aggregation-group").value,i=document.getElementById("new_product__aggregation-parameter").value;let c;if(t!=="not_selected"&&a!=="not_selected"&&o!=="not_selected"&&i!=="not_selected")c="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||a==="not_selected"||o==="not_selected"||i==="not_selected"){const d=document.getElementById("new_product_PreviewIframe"),s=d.contentDocument||d.contentWindow.document;s.open(),s.write(`<html>
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
              </html>`),s.close();return}else if(selectedMethod==="promo_weighted__custom")c="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(c,{download:!0,header:!0,complete:function(d){const s=document.getElementById("new_product_PreviewIframe"),l=s.contentDocument||s.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(d.data[0]).forEach(m=>{l.write(`<th>${m}</th>`)}),l.write("</tr></thead><tbody>"),d.data.forEach(m=>{l.write("<tr>"),Object.values(m).forEach(g=>{l.write(`<td>${g}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};function L(){document.getElementById("summaryPlan_modal").style.display="flex"}function O(){document.getElementById("summaryPlan_modal").style.display="none"}function j(){const e=document.querySelectorAll('#summaryPlan_modalContent input[type="checkbox"]'),t=[];e.forEach(n=>{n.checked&&t.push(n.name)})}window.summaryPlan_OptimizationButton=L;window.summaryPlan_closeModalButton=O;window.summaryPlan_saveModalButton=j;window.summaryPlan_PreviewButton=function(){const t=document.getElementById("summary_plan_time").value,a=document.getElementById("summary_plan_geography").value,o=document.getElementById("summary_plan_groupSCU").value,i=document.getElementById("summary_plan_scu").value,d=document.getElementById("summary_plan_method").value;let s;if(t!=="not_selected"&&a!=="not_selected"&&o!=="not_selected"&&i!=="not_selected"&&d!=="not_selected")s="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||a==="not_selected"||o==="not_selected"||i==="not_selected"||d==="not_selected"){const l=document.getElementById("summaryPlan_PreviewIframe"),h=l.contentDocument||l.contentWindow.document;h.open(),h.write(`<html>
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
              </html>`),h.close();return}else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(s,{download:!0,header:!0,complete:function(l){const h=document.getElementById("summaryPlan_PreviewIframe"),m=h.contentDocument||h.contentWindow.document;m.open(),m.write(`<html>
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
                            <tr>`),Object.keys(l.data[0]).forEach(f=>{m.write(`<th>${f}</th>`)}),m.write("</tr></thead><tbody>"),l.data.forEach(f=>{m.write("<tr>"),Object.values(f).forEach(_=>{m.write(`<td>${_}</td>`)}),m.write("</tr>")}),m.write("</tbody></table>"),m.write("</body></html>"),m.close()}})};function z(){y(),document.getElementById("planner_weeklyModal").style.display="block"}function p(e){document.getElementById(e).style.display="none"}function y(){p("planner_weeklyModal"),p("timeModal"),p("checkboxModal")}window.onclick=function(e){e.target.classList.contains("modal")&&y()};function H(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block"),n=t.options[t.selectedIndex].text,a=document.getElementById("planner__scenarioCustom"),r=a.options[a.selectedIndex].text,o=document.getElementById("planner_interval").value,u=document.getElementById("planner_selectedTime").value,i=document.getElementById("planner_selectedStartDate").value,c=document.getElementById("planner_selectedEndDate").value,d=document.getElementById("planner_Iframe"),s=d.contentDocument||d.contentWindow.document;s.body.innerHTML=`        <style>
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
                <td>${n}</td>
                <td>${r}</td>
                <td>${o} дней</td>
                <td>${i}</td>
                <td>${c}</td>
                <td>${u}</td>
            </tr>
        </table>`,p("planner_weeklyModal")}window.planner_selectScenarioRepeat=z;window.closeModal=p;window.closeAllModals=y;window.saveSettings=H;window.planner_saveButton=function(){const t=document.getElementById("planner__block").value,a=document.getElementById("planner__scenarioCustom").value,o=document.getElementById("planner__scenarioRepeat").value,u=document.getElementById("planner_dayOfWeekRepeat").value,i=document.getElementById("planner_selectedTime").value,c=document.getElementById("planner_selectedStartDate").value,d=document.getElementById("planner_selectedEndDate").value;if(t==="not_selected"||a==="not_selected"||o==="not_selected"){const s=document.getElementById("planner_Iframe"),l=s.contentDocument||s.contentWindow.document;l.open(),l.write(`<html>
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
              </html>`),l.close();return}else{const s=document.getElementById("planner_Iframe");s.contentDocument||s.contentWindow.document,frameDocument.body.innerHTML=`<h3>Выбранные значения:</h3>
        <table border="1">
            <tr>
                <th>День недели</th>
                <th>Время</th>
                <th>Дата начала</th>
                <th>Дата окончания</th>
            </tr>
            <tr>
            <td>${u}</td>
                <td>${u}</td>
                <td>${i}</td>
                <td>${c}</td>
                <td>${d}</td>
            </tr>
        </table>`;return}};const N="/SputnikPro_test_2_2/images/users/ZilevichElizaveta.jpg",G="/SputnikPro_test_2_2/images/users/TkachevOleg.jpg",R="/SputnikPro_test_2_2/images/users/TolokGalina.jpg",F="/SputnikPro_test_2_2/images/users/question.jpg",v="/SputnikPro_test_2_2/images/users/user1.png";var x,w,W=function(){$.when($("[data-scrollbar=true]").each(function(){generateSlimScroll($(this))})).done(function(){$('[data-scrollbar="true"]').mouseover()})},q=function(){let e=$(".sidebar").attr("data-disable-slide-animation")?0:250;$(".sidebar .nav > .has-sub > a").click(function(){let t=$(this).next(".sub-menu"),n=$(".sidebar .nav > li.has-sub > .sub-menu").not(t);$(".page-sidebar-minified").length===0&&($(n).closest("li").addClass("closing"),$(n).slideUp(e,function(){$(n).closest("li").addClass("closed").removeClass("expand closing")}),$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let a=$(this).closest("li");$(t).is(":visible")?($(a).addClass("expand"),$(a).removeClass("closed")):($(a).addClass("closed"),$(a).removeClass("expand")),$(a).removeClass("expanding closing")}))}),$(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function(){if($(".page-sidebar-minified").length===0){let t=$(this).next(".sub-menu");$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let n=$(this).closest("li");$(t).is(":visible")?($(n).addClass("expand"),$(n).removeClass("closed")):($(n).addClass("closed"),$(n).removeClass("expand")),$(n).removeClass("expanding closing")})}})},U=function(){try{if(typeof Storage<"u"&&typeof localStorage<"u"){let e=window.location.href;e=(e=e.split("?"))[0];let t=localStorage.getItem(e);if(t){t=JSON.parse(t);let n=0;$.when($('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function(){let a=t[n],r=$(this);a&&$.each(a,function(o,u){let i=$('[data-sortable-id="'+u.id+'"]').not('[data-init="true"]');if($(i).length!==0){let c=$(i).clone();$(i).remove(),$(r).append(c),$('[data-sortable-id="'+u.id+'"]').attr("data-init","true")}}),n++})).done(function(){window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))})}}else alert("Your browser is not supported with the local storage")}catch(e){console.log(e)}},V=function(){$(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")},Z=function(){$(window).on("scroll",function(){handleCheckScrollClass()}),handleCheckScrollClass()},J=function(){$(document).on("click","#float-sub-menu li.has-sub > a",function(e){let t=$(this).next(".sub-menu"),n=$(t).closest("li"),a=!1,r=!1;$(t).is(":visible")?($(n).addClass("closing"),a=!0):($(n).addClass("expanding"),r=!0),$(t).slideToggle({duration:250,progress:function(){let o=$("#float-sub-menu"),u=$(o).height(),i=$(o).offset(),c=$(o).attr("data-offset-top"),d=$(o).attr("data-menu-offset-top"),s=i.top-$(window).scrollTop(),l=$(window).height();if(a&&c<s&&(s=c<s?c:s,$("#float-sub-menu").css({top:s+"px",bottom:"auto"}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"})),r&&l-s<u){let h=l-d-22;$("#float-sub-menu").css({top:"auto",bottom:0}),$("#float-sub-menu-arrow").css({top:"auto",bottom:h+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:h+"px"})}},complete:function(){$(t).is(":visible")?$(n).addClass("expand"):$(n).addClass("closed"),$(n).removeClass("closing expanding")}})}),$(".sidebar .nav > li.has-sub > a").hover(function(){if($("#page-container").hasClass("page-sidebar-minified")){clearTimeout(x);let e=$(this).closest("li").find(".sub-menu").first();if(w==this&&$("#float-sub-menu").length!==0)return;w=this;let t=$(e).html();if(t){let n=$("#sidebar").offset(),a=$("#page-container").hasClass("page-with-right-sidebar")?$(window).width()-n.left:n.left+60,r=$(e).height(),o=$(this).offset().top-$(window).scrollTop(),u=$("#page-container").hasClass("page-with-right-sidebar")?"auto":a,i=$("#page-container").hasClass("page-with-right-sidebar")?a:"auto",c=$(window).height();if($("#float-sub-menu").length===0?(t='<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="'+o+'" data-menu-offset-top="'+o+'" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">	<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>	<div class="float-sub-menu-line" id="float-sub-menu-line"></div>	<ul class="float-sub-menu">'+t+"</ul></div>",$("#page-container").append(t)):($("#float-sub-menu").attr("data-offset-top",o),$("#float-sub-menu").attr("data-menu-offset-top",o),$(".float-sub-menu").html(t)),r<c-o)$("#float-sub-menu").css({top:o,left:u,bottom:"auto",right:i}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"});else{$("#float-sub-menu").css({bottom:0,top:"auto",left:u,right:i});let d=c-o-21;$("#float-sub-menu-arrow").css({top:"auto",bottom:d+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:d+"px"})}}else $("#float-sub-menu").remove(),w=""}},function(){$("#page-container").hasClass("page-sidebar-minified")&&(x=setTimeout(function(){$("#float-sub-menu").remove(),w=""},250))})},K=function(){var e;return{init:function(t){t&&(e=t),this.initLocalStorage(),this.initSidebar(),this.initComponent(),this.initThemePanel(),this.initPageLoad(),$(window).trigger("load"),e&&e.ajaxMode&&this.initAjax()},initSidebar:function(){q(),handleMobileSidebarToggle(),handleSidebarMinify(),J()},initSidebarSelection:function(){V()},initComponent:function(){(!e||e&&!e.disableDraggablePanel)&&W(),handleUnlimitedTabsRender(),handlePanelAction(),handleScrollToTopButton(),handleAfterPageLoadAddClass(),Z(),$(window).width()>767&&handleTooltipPopoverActivation()},initLocalStorage:function(){(!e||e&&!e.disableLocalStorage)&&U()},initAjax:function(){handleAjaxMode(e),$.ajaxSetup({cache:!0})},scrollTop:function(){$("html, body").animate({scrollTop:$("body").offset().top},0)}}}();window.showContent_parameters=function(){const e=document.getElementById("mainContent");fetch("./src/html/parameters.html").then(t=>{if(!t.ok)throw new Error("Модуль не отвечает");return t.text()}).then(t=>{e.innerHTML=t}).catch(t=>{console.error("Ошибка при загрузке файла:",t),e.innerHTML="Ошибка при загрузке"})};window.showContent_action=function(){fetch("./src/html/action.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_seasonality=function(){fetch("./src/html/seasonality.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_regular_assort=function(){fetch("./src/html/regular_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promo=function(){fetch("./src/html/promo.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.updateUserImage=function(){const e=document.getElementById("header_top_user"),t=document.getElementById("userImage"),n={option1:F,option2:N,option3:v,option4:G,option5:v,option6:R},a=e.value;if(t.innerHTML="",a&&n[a]){const r=document.createElement("img");r.src=n[a],r.alt=a,r.style.width="50px",r.style.borderRadius="50px",t.appendChild(r)}};$(document).ready(function(){K.init(),Highlight.init()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".visible");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(n=>n.classList.remove("actived")),this.classList.add("actived")})})});
