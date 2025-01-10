(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();window.check_mark=function(){const e=document.getElementById("check-mark_button");e.style.display="inline",setTimeout(function(){e.style.display="none"},5e3)};window.showContent_listing=function(){fetch("./src/html/listing.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_newProducts=function(){fetch("./src/html/new_products.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_locks=function(){fetch("./src/html/locks.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_outputAssort=function(){fetch("./src/html/output_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_tender=function(){fetch("./src/html/tender.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_priceChange=function(){fetch("./src/html/price_change.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promoRatio=function(){fetch("./src/html/promo_ratio.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_planner=function(){fetch("./src/html/planner.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};const k="/SputnikPro_test_2_2/images/chart_regAssort.png";window.tb_regular_assort__chart=function(){const e=document.getElementById("tb_regular_assort_chart"),t=k,o=e.contentDocument||e.contentWindow.document;o.open(),o.write(`<html>
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
        </html>`),o.close()};window.showContent_summaryPlan=function(){fetch("./src/html/summary_plan.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.tbRegAssortButton=function(){const t=document.getElementById("regular_assort_method").value,a=document.getElementById("regular_assort__aggregation-time").value,n=document.getElementById("regular_assort__aggregation-geo").value,c=document.getElementById("regular_assort__aggregation-scu").value,i=document.getElementById("regular_assort_period").value;let s;if(t==="ra_not_selected"||a==="not_selected"||n==="not_selected"||c==="not_selected"||i==="not_selected"){const l=document.getElementById("tb_regular_assort_results"),h=l.contentDocument||l.contentWindow.document;h.open(),h.write(`<html>
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
            </html>`),h.close()}else if(t==="ra_moving_average")s="./images/demo_file/test_forecast_csv.csv";else if(t==="ra_weighted_average")s="./images/demo_file/test_forecast_csv2.csv";else if(t==="ra_linear_regression")s="./images/demo_file/test_forecast_csv3.csv";else if(t==="ra_multiple_regression")s="./images/demo_file/test_forecast_csv.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(s,{download:!0,header:!0,complete:function(l){const h=document.getElementById("tb_regular_assort_results"),m=h.contentDocument||h.contentWindow.document;m.open(),m.write(`<html>
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
                            <tr>`),Object.keys(l.data[0]).forEach(p=>{m.write(`<th>${p}</th>`)}),m.write("</tr></thead><tbody>"),l.data.forEach(p=>{m.write("<tr>"),Object.values(p).forEach(w=>{m.write(`<td>${w}</td>`)}),m.write("</tr>")}),m.write("</tbody></table>"),m.write("</body></html>"),m.close()}})};window.loadData=function(){const e=document.getElementById("seasonality_method").value,t=document.getElementById("seasonality_time").value,o=document.getElementById("seasonality_geography").value,a=document.getElementById("seasonality_groupSCU").value;if(e==="not_selected"||t==="not_selected"||o==="not_selected"||a==="not_selected"){document.getElementById("seasonality_chart").innerHTML="Заполните все поля";return}document.getElementById("seasonality_chart").innerHTML="";let r="";if(e==="fluctuation_average"&&t==="week"&&o==="all"&&a==="groupe1")r="./images/demo_file/test3.xlsx";else if(e==="fluctuation_trend"&&t==="week"&&o==="all"&&a==="groupe1")r="./images/demo_file/test4.xlsx";else{document.getElementById("seasonality_chart").innerHTML="Выберите корректные параметры";return}fetch(r).then(n=>n.arrayBuffer()).then(n=>{const d=XLSX.read(n,{type:"array"}),c=d.SheetNames[0],u=d.Sheets[c],i=XLSX.utils.sheet_to_json(u,{header:1}),s=[],l={};for(let m=1;m<i.length;m++){const g=i[m];if(g.length===3){const p=g[0],w=g[1],E=parseFloat(g[2]);!s.includes(w)&&w!=="-1"&&s.push(w),l[p]||(l[p]={x:[],y:[],type:"scatter",mode:"lines+markers",name:p}),s.indexOf(w)!==-1&&(l[p].x.push(w),l[p].y.push(E))}}const h=Object.values(l);Plotly.newPlot("seasonality_chart",h,{title:"Сезонность",xaxis:{title:"Неделя",tickmode:"linear",tick0:1,dtick:1,range:[0,53]},yaxis:{title:"Значение",rangemode:"tozero"}})}).catch(n=>{console.error("Ошибка при загрузке файла:",n)})};window.tbPromoRatioPerviewButton=function(){const t=document.getElementById("promoRatio_method").value;let o;if(t==="promoRatio_method_average")o="./images/demo_file/test_forecast_csv.csv";else if(t==="promoRatio_method_mediana")o="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(o,{download:!0,header:!0,complete:function(a){const r=document.getElementById("tb_promoRatio"),n=r.contentDocument||r.contentWindow.document;n.open(),n.write(`<html>
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
                            <tr>`),Object.keys(a.data[0]).forEach(c=>{n.write(`<th>${c}</th>`)}),n.write("</tr></thead><tbody>"),a.data.forEach(c=>{n.write("<tr>"),Object.values(c).forEach(u=>{n.write(`<td>${u}</td>`)}),n.write("</tr>")}),n.write("</tbody></table>"),n.write("</body></html>"),n.close()}})};function I(){document.getElementById("modal").style.display="flex"}function B(){document.getElementById("modal").style.display="none"}function C(){const e=document.querySelectorAll('#modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.tbRegAssortOptimizationButton=I;window.ra_closeModalButton=B;window.ra_saveButton=C;function S(){document.getElementById("promo_modal").style.display="flex"}function P(){document.getElementById("promo_modal").style.display="none"}function T(){const e=document.querySelectorAll('#promo_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.promo_OptimizationButton=S;window.promo_closeModalButton=P;window.promo_saveModalButton=T;window.promo_PreviewButton=function(){const t=document.getElementById("promo_method").value;let o;if(t==="promo_moving__сalculated")o="./images/demo_file/test_forecast_csv.csv";else if(t==="promo_not_selected"){const a=document.getElementById("promo_PreviewIframe"),r=a.contentDocument||a.contentWindow.document;r.open(),r.write(`<html>
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
                            <tr>`),Object.keys(a.data[0]).forEach(c=>{n.write(`<th>${c}</th>`)}),n.write("</tr></thead><tbody>"),a.data.forEach(c=>{n.write("<tr>"),Object.values(c).forEach(u=>{n.write(`<td>${u}</td>`)}),n.write("</tr>")}),n.write("</tbody></table>"),n.write("</body></html>"),n.close()}})};function M(){document.getElementById("new_product__modal").style.display="flex"}function D(){document.getElementById("new_product__modal").style.display="none"}function A(){const e=document.querySelectorAll('#new_product__modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.newProductOptimizationButton=M;window.newProductCloseModalButton=D;window.newProductSaveModalButton=A;window.newProduct_PreviewButton=function(){const t=document.getElementById("new_product__aggregation-time").value,a=document.getElementById("new_product__aggregation-geo").value,n=document.getElementById("new_product__aggregation-group").value,c=document.getElementById("new_product__aggregation-parameter").value;let u;if(t!=="not_selected"&&a!=="not_selected"&&n!=="not_selected"&&c!=="not_selected")u="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||a==="not_selected"||n==="not_selected"||c==="not_selected"){const i=document.getElementById("new_product_PreviewIframe"),s=i.contentDocument||i.contentWindow.document;s.open(),s.write(`<html>
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
              </html>`),s.close();return}else if(selectedMethod==="promo_weighted__custom")u="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(u,{download:!0,header:!0,complete:function(i){const s=document.getElementById("new_product_PreviewIframe"),l=s.contentDocument||s.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(i.data[0]).forEach(m=>{l.write(`<th>${m}</th>`)}),l.write("</tr></thead><tbody>"),i.data.forEach(m=>{l.write("<tr>"),Object.values(m).forEach(g=>{l.write(`<td>${g}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};function O(){document.getElementById("summaryPlan_modal").style.display="flex"}function L(){document.getElementById("summaryPlan_modal").style.display="none"}function N(){const e=document.querySelectorAll('#summaryPlan_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.summaryPlan_OptimizationButton=O;window.summaryPlan_closeModalButton=L;window.summaryPlan_saveModalButton=N;window.summaryPlan_PreviewButton=function(){const t=document.getElementById("summary_plan_time").value,a=document.getElementById("summary_plan_geography").value,n=document.getElementById("summary_plan_scu").value,c=document.getElementById("summary_plan_method").value;let u;if(t!=="not_selected"&&a!=="not_selected"&&n!=="not_selected"&&c!=="not_selected")u="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||a==="not_selected"||n==="not_selected"||c==="not_selected"){const i=document.getElementById("summaryPlan_PreviewIframe"),s=i.contentDocument||i.contentWindow.document;s.open(),s.write(`<html>
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
              </html>`),s.close();return}else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(u,{download:!0,header:!0,complete:function(i){const s=document.getElementById("summaryPlan_PreviewIframe"),l=s.contentDocument||s.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(i.data[0]).forEach(m=>{l.write(`<th>${m}</th>`)}),l.write("</tr></thead><tbody>"),i.data.forEach(m=>{l.write("<tr>"),Object.values(m).forEach(g=>{l.write(`<td>${g}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};function j(){v(),document.getElementById("planner_weeklyModal").style.display="block"}function y(e){document.getElementById(e).style.display="none"}function v(){y("planner_weeklyModal"),y("timeModal"),y("checkboxModal")}window.onclick=function(e){e.target.classList.contains("modal")&&v()};function R(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block"),o=t.options[t.selectedIndex].text,a=document.getElementById("planner__scenarioCustom"),r=a.options[a.selectedIndex].text,n=document.getElementById("planner_interval").value,d=document.getElementById("planner_selectedTime").value,c=document.getElementById("planner_selectedStartDate").value,u=document.getElementById("planner_selectedEndDate").value,i=document.getElementById("planner_Iframe"),s=i.contentDocument||i.contentWindow.document;s.body.innerHTML=`        <style>
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
                <td>${u}</td>
                <td>${d}</td>
            </tr>
        </table>`,y("planner_weeklyModal")}window.planner_selectScenarioRepeat=j;window.closeModal=y;window.closeAllModals=v;window.saveSettings=R;let f={};function H(){f.intervalNum=document.getElementById("planner_intervalPeriodicity").value,f.dayOfWeekRepeat=document.getElementById("planner_dayOfWeekRepeat").value,f.selectedTime=document.getElementById("planner_selectedTime").value,f.selectedStartDate=document.getElementById("planner_selectedStartDate").value;const e=document.querySelectorAll('input[name="options"]:checked');let t="";e.forEach(o=>{o.value==="never"?t="Никогда":o.value==="number"?t=`Спустя ${document.getElementById("planner_ModalRepetition__times").value} раз`:o.value==="date"&&(t=`Дата:${document.getElementById("dateInput").value}`)}),f.endingInfo=t,closeModal("planner_weeklyModal")}function F(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block").value,o=document.getElementById("planner__scenarioCustom").value,a=` <style>
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
    </table>`,r=document.getElementById("planner_Iframe"),n=r.contentDocument||r.contentWindow.document;n.open(),n.write(a),n.close()}window.saveModalData=H;window.planner_addData=F;window.planner_formRepeatSelect=function(){const e=document.getElementById("planner_intervalRepetition__header"),t=document.querySelector(".planner_visionParagraphDayOfWeek"),o=document.getElementById("planner_dayOfWeekRepeat"),a=document.querySelector(".planner_intervalWrapperDay"),r=e.value;r==="repeat_daily"?(t.style.display="none",o.style.display="none",a.textContent="день"):r==="repeat_weekly"?(t.style.display="block",o.style.display="block",a.textContent="неделя"):r==="repeat_monthly"&&(t.style.display="block",o.style.display="block",a.textContent="месяц")};document.addEventListener("DOMContentLoaded",function(){planner_formRepeatSelect()});window.saveSelectedGlobalParameters=function(){const e={},t=document.getElementById("parameters_aggregation-time"),o=document.getElementById("parameters_aggregation-scu"),a=document.getElementById("parameters_oos-method"),r=document.getElementById("parameters_promo-method"),n=document.getElementById("parameters_spikes-method"),d=document.getElementById("parameters_sales_recovery-method");e.timeAggregation=t.options[t.selectedIndex].text,e.skuAggregation=o.options[o.selectedIndex].text,e["очистка oos"]=a.options[a.selectedIndex].text,e["очистка от промо"]=r.options[r.selectedIndex].text,e["очистка от выбросов"]=n.options[n.selectedIndex].text,e.восстановление=d.options[d.selectedIndex].text,localStorage.setItem("globalParameters",JSON.stringify(e)),console.log("Параметры сохранены:",e)};window.saveSelectedGlobalParametersSeasonality=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("seasonality_method"),o=t.options[t.selectedIndex].text;e.сезонность=o,localStorage.setItem("globalParameters",JSON.stringify(e))};window.saveGlobalParametersRegular=function(){let e=JSON.parse(localStorage.getItem("globalParameters"));e||(e={});const t=document.getElementById("regular_assort_method"),o=t.options[t.selectedIndex].text;e["методы прогноза"]=o,localStorage.setItem("globalParameters",JSON.stringify(e))};const W="/SputnikPro_test_2_2/images/users/ZilevichElizaveta.jpg",z="/SputnikPro_test_2_2/images/users/TkachevOleg.jpg",G="/SputnikPro_test_2_2/images/users/TolokGalina.jpg",q="/SputnikPro_test_2_2/images/users/question.jpg",_="/SputnikPro_test_2_2/images/users/user1.png";var x,b,J=function(){$.when($("[data-scrollbar=true]").each(function(){generateSlimScroll($(this))})).done(function(){$('[data-scrollbar="true"]').mouseover()})},V=function(){let e=$(".sidebar").attr("data-disable-slide-animation")?0:250;$(".sidebar .nav > .has-sub > a").click(function(){let t=$(this).next(".sub-menu"),o=$(".sidebar .nav > li.has-sub > .sub-menu").not(t);$(".page-sidebar-minified").length===0&&($(o).closest("li").addClass("closing"),$(o).slideUp(e,function(){$(o).closest("li").addClass("closed").removeClass("expand closing")}),$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let a=$(this).closest("li");$(t).is(":visible")?($(a).addClass("expand"),$(a).removeClass("closed")):($(a).addClass("closed"),$(a).removeClass("expand")),$(a).removeClass("expanding closing")}))}),$(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function(){if($(".page-sidebar-minified").length===0){let t=$(this).next(".sub-menu");$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let o=$(this).closest("li");$(t).is(":visible")?($(o).addClass("expand"),$(o).removeClass("closed")):($(o).addClass("closed"),$(o).removeClass("expand")),$(o).removeClass("expanding closing")})}})},X=function(){try{if(typeof Storage<"u"&&typeof localStorage<"u"){let e=window.location.href;e=(e=e.split("?"))[0];let t=localStorage.getItem(e);if(t){t=JSON.parse(t);let o=0;$.when($('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function(){let a=t[o],r=$(this);a&&$.each(a,function(n,d){let c=$('[data-sortable-id="'+d.id+'"]').not('[data-init="true"]');if($(c).length!==0){let u=$(c).clone();$(c).remove(),$(r).append(u),$('[data-sortable-id="'+d.id+'"]').attr("data-init","true")}}),o++})).done(function(){window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))})}}else alert("Your browser is not supported with the local storage")}catch(e){console.log(e)}},U=function(){$(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")},Z=function(){$(window).on("scroll",function(){handleCheckScrollClass()}),handleCheckScrollClass()},K=function(){$(document).on("click","#float-sub-menu li.has-sub > a",function(e){let t=$(this).next(".sub-menu"),o=$(t).closest("li"),a=!1,r=!1;$(t).is(":visible")?($(o).addClass("closing"),a=!0):($(o).addClass("expanding"),r=!0),$(t).slideToggle({duration:250,progress:function(){let n=$("#float-sub-menu"),d=$(n).height(),c=$(n).offset(),u=$(n).attr("data-offset-top"),i=$(n).attr("data-menu-offset-top"),s=c.top-$(window).scrollTop(),l=$(window).height();if(a&&u<s&&(s=u<s?u:s,$("#float-sub-menu").css({top:s+"px",bottom:"auto"}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"})),r&&l-s<d){let h=l-i-22;$("#float-sub-menu").css({top:"auto",bottom:0}),$("#float-sub-menu-arrow").css({top:"auto",bottom:h+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:h+"px"})}},complete:function(){$(t).is(":visible")?$(o).addClass("expand"):$(o).addClass("closed"),$(o).removeClass("closing expanding")}})}),$(".sidebar .nav > li.has-sub > a").hover(function(){if($("#page-container").hasClass("page-sidebar-minified")){clearTimeout(x);let e=$(this).closest("li").find(".sub-menu").first();if(b==this&&$("#float-sub-menu").length!==0)return;b=this;let t=$(e).html();if(t){let o=$("#sidebar").offset(),a=$("#page-container").hasClass("page-with-right-sidebar")?$(window).width()-o.left:o.left+60,r=$(e).height(),n=$(this).offset().top-$(window).scrollTop(),d=$("#page-container").hasClass("page-with-right-sidebar")?"auto":a,c=$("#page-container").hasClass("page-with-right-sidebar")?a:"auto",u=$(window).height();if($("#float-sub-menu").length===0?(t='<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="'+n+'" data-menu-offset-top="'+n+'" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">	<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>	<div class="float-sub-menu-line" id="float-sub-menu-line"></div>	<ul class="float-sub-menu">'+t+"</ul></div>",$("#page-container").append(t)):($("#float-sub-menu").attr("data-offset-top",n),$("#float-sub-menu").attr("data-menu-offset-top",n),$(".float-sub-menu").html(t)),r<u-n)$("#float-sub-menu").css({top:n,left:d,bottom:"auto",right:c}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"});else{$("#float-sub-menu").css({bottom:0,top:"auto",left:d,right:c});let i=u-n-21;$("#float-sub-menu-arrow").css({top:"auto",bottom:i+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:i+"px"})}}else $("#float-sub-menu").remove(),b=""}},function(){$("#page-container").hasClass("page-sidebar-minified")&&(x=setTimeout(function(){$("#float-sub-menu").remove(),b=""},250))})},Y=function(){var e;return{init:function(t){t&&(e=t),this.initLocalStorage(),this.initSidebar(),this.initComponent(),this.initThemePanel(),this.initPageLoad(),$(window).trigger("load"),e&&e.ajaxMode&&this.initAjax()},initSidebar:function(){V(),handleMobileSidebarToggle(),handleSidebarMinify(),K()},initSidebarSelection:function(){U()},initComponent:function(){(!e||e&&!e.disableDraggablePanel)&&J(),handleUnlimitedTabsRender(),handlePanelAction(),handleScrollToTopButton(),handleAfterPageLoadAddClass(),Z(),$(window).width()>767&&handleTooltipPopoverActivation()},initLocalStorage:function(){(!e||e&&!e.disableLocalStorage)&&X()},initAjax:function(){handleAjaxMode(e),$.ajaxSetup({cache:!0})},scrollTop:function(){$("html, body").animate({scrollTop:$("body").offset().top},0)}}}();window.showContent_parameters=function(){const e=document.getElementById("mainContent");fetch("./src/html/parameters.html").then(t=>{if(!t.ok)throw new Error("Модуль не отвечает");return t.text()}).then(t=>{e.innerHTML=t}).catch(t=>{console.error("Ошибка при загрузке файла:",t),e.innerHTML="Ошибка при загрузке"})};window.showContent_action=function(){fetch("./src/html/action.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_seasonality=function(){fetch("./src/html/seasonality.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_regular_assort=function(){fetch("./src/html/regular_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promo=function(){fetch("./src/html/promo.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.updateUserImage=function(){const e=document.getElementById("header_top_user"),t=document.getElementById("userImage"),o={option1:q,option2:W,option3:_,option4:z,option5:_,option6:G,option7:_},a=e.value;if(t.innerHTML="",a&&o[a]){const r=document.createElement("img");r.src=o[a],r.alt=a,r.style.width="50px",r.style.borderRadius="50px",t.appendChild(r)}};$(document).ready(function(){Y.init(),Highlight.init()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".visible");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(o=>o.classList.remove("actived")),this.classList.add("actived")})})});window.loadAndFilterData=function(){window.saveGlobalParametersRegular=function(){let t=JSON.parse(localStorage.getItem("globalParameters"));t||(t={});const o=document.getElementById("regular_assort_method"),a=o.options[o.selectedIndex].text;t["методы прогноза"]=a,localStorage.setItem("globalParameters",JSON.stringify(t))},window.saveGlobalParametersRegular(),window.filterData=function(t){const o=JSON.parse(localStorage.getItem("globalParameters"));return t.filter(a=>Object.keys(o).every(r=>a[r]!==void 0?a[r]===o[r]:!0))},window.displayTable=function(t){const o=document.getElementById("tb_regular_assort_results"),a=o.contentDocument||o.contentWindow.document;a.body.innerHTML="";const r=document.createElement("style");r.textContent=`table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tr:hover {
            background-color: #ddd;
        }`,a.head.appendChild(r);const n=a.createElement("table");if(n.innerHTML="",t.length===0){n.innerHTML='<tr><td colspan="100%">Нет данных для отображения</td></tr>',a.body.appendChild(n);return}const d=Object.keys(t[0]),c=document.createElement("tr");for(let i=6;i<d.length;i++){const s=document.createElement("th");s.textContent=d[i],c.appendChild(s)}n.appendChild(c);const u=["WAPE, %","BIAS, %","Доля, %","Доля, %2","недопрогноз, %","перепрогноз, %"];t.forEach(i=>{const s=document.createElement("tr");for(let l=6;l<d.length;l++){const h=document.createElement("td");let m=i[d[l]];typeof m=="number"&&(i.МЕРЫ&&u.includes(i.МЕРЫ)?m=(m*100).toFixed(2)+"%":m=m.toFixed(2)),h.textContent=m,s.appendChild(h)}n.appendChild(s)}),a.body.appendChild(n)},fetch("./public/images/demo_file/reg_assort2.xlsx").then(t=>{if(!t.ok)throw new Error("Сеть не отвечает");return t.arrayBuffer()}).then(t=>{const o=XLSX.read(t,{type:"array"}),a=o.SheetNames[0],r=o.Sheets[a],n=XLSX.utils.sheet_to_json(r),d=window.filterData(n);window.displayTable(d)}).catch(t=>{console.error("Ошибка загрузки файла:",t)})};
