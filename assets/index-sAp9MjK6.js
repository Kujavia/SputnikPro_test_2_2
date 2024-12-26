(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();window.check_mark=function(){const e=document.getElementById("check-mark_button");e.style.display="inline",setTimeout(function(){e.style.display="none"},5e3)};window.showContent_listing=function(){fetch("./src/html/listing.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_newProducts=function(){fetch("./src/html/new_products.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_locks=function(){fetch("./src/html/locks.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_outputAssort=function(){fetch("./src/html/output_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_tender=function(){fetch("./src/html/tender.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_priceChange=function(){fetch("./src/html/price_change.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promoRatio=function(){fetch("./src/html/promo_ratio.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_planner=function(){fetch("./src/html/planner.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};const E="/SputnikPro_test_2_2/images/chart_regAssort.png";window.tb_regular_assort__chart=function(){const e=document.getElementById("tb_regular_assort_chart"),t=E,o=e.contentDocument||e.contentWindow.document;o.open(),o.write(`<html>
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
        </html>`),o.close()};window.showContent_summaryPlan=function(){fetch("./src/html/summary_plan.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.tbRegAssortButton=function(){const t=document.getElementById("regular_assort_method").value,a=document.getElementById("regular_assort__aggregation-time").value,n=document.getElementById("regular_assort__aggregation-geo").value,i=document.getElementById("regular_assort__aggregation-scu").value,c=document.getElementById("regular_assort_period").value;let s;if(t==="ra_not_selected"||a==="not_selected"||n==="not_selected"||i==="not_selected"||c==="not_selected"){const l=document.getElementById("tb_regular_assort_results"),h=l.contentDocument||l.contentWindow.document;h.open(),h.write(`<html>
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
                            <tr>`),Object.keys(l.data[0]).forEach(g=>{m.write(`<th>${g}</th>`)}),m.write("</tr></thead><tbody>"),l.data.forEach(g=>{m.write("<tr>"),Object.values(g).forEach(w=>{m.write(`<td>${w}</td>`)}),m.write("</tr>")}),m.write("</tbody></table>"),m.write("</body></html>"),m.close()}})};window.loadData=function(){const e=document.getElementById("seasonality_method").value,t=document.getElementById("seasonality_time").value,o=document.getElementById("seasonality_geography").value,a=document.getElementById("seasonality_groupSCU").value;if(e==="not_selected"||t==="not_selected"||o==="not_selected"||a==="not_selected"){document.getElementById("seasonality_chart").innerHTML="Заполните все поля";return}document.getElementById("seasonality_chart").innerHTML="";let r="";if(e==="fluctuation_average"&&t==="week"&&o==="all"&&a==="groupe1")r="./images/demo_file/test3.xlsx";else if(e==="fluctuation_trend"&&t==="week"&&o==="all"&&a==="groupe1")r="./images/demo_file/test4.xlsx";else{document.getElementById("seasonality_chart").innerHTML="Выберите корректные параметры";return}fetch(r).then(n=>n.arrayBuffer()).then(n=>{const u=XLSX.read(n,{type:"array"}),i=u.SheetNames[0],d=u.Sheets[i],c=XLSX.utils.sheet_to_json(d,{header:1}),s=[],l={};for(let m=1;m<c.length;m++){const p=c[m];if(p.length===3){const g=p[0],w=p[1],k=parseFloat(p[2]);!s.includes(w)&&w!=="-1"&&s.push(w),l[g]||(l[g]={x:[],y:[],type:"scatter",mode:"lines+markers",name:g}),s.indexOf(w)!==-1&&(l[g].x.push(w),l[g].y.push(k))}}const h=Object.values(l);Plotly.newPlot("seasonality_chart",h,{title:"Сезонность",xaxis:{title:"Неделя",tickmode:"linear",tick0:1,dtick:1,range:[0,53]},yaxis:{title:"Значение",rangemode:"tozero"}})}).catch(n=>{console.error("Ошибка при загрузке файла:",n)})};window.tbPromoRatioPerviewButton=function(){const t=document.getElementById("promoRatio_method").value;let o;if(t==="promoRatio_method_average")o="./images/demo_file/test_forecast_csv.csv";else if(t==="promoRatio_method_mediana")o="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",t);return}Papa.parse(o,{download:!0,header:!0,complete:function(a){const r=document.getElementById("tb_promoRatio"),n=r.contentDocument||r.contentWindow.document;n.open(),n.write(`<html>
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
                            <tr>`),Object.keys(a.data[0]).forEach(i=>{n.write(`<th>${i}</th>`)}),n.write("</tr></thead><tbody>"),a.data.forEach(i=>{n.write("<tr>"),Object.values(i).forEach(d=>{n.write(`<td>${d}</td>`)}),n.write("</tr>")}),n.write("</tbody></table>"),n.write("</body></html>"),n.close()}})};function B(){document.getElementById("modal").style.display="flex"}function I(){document.getElementById("modal").style.display="none"}function C(){const e=document.querySelectorAll('#modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.tbRegAssortOptimizationButton=B;window.ra_closeModalButton=I;window.ra_saveButton=C;function S(){document.getElementById("promo_modal").style.display="flex"}function T(){document.getElementById("promo_modal").style.display="none"}function P(){const e=document.querySelectorAll('#promo_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.promo_OptimizationButton=S;window.promo_closeModalButton=T;window.promo_saveModalButton=P;window.promo_PreviewButton=function(){const t=document.getElementById("promo_method").value;let o;if(t==="promo_moving__сalculated")o="./images/demo_file/test_forecast_csv.csv";else if(t==="promo_not_selected"){const a=document.getElementById("promo_PreviewIframe"),r=a.contentDocument||a.contentWindow.document;r.open(),r.write(`<html>
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
                            <tr>`),Object.keys(a.data[0]).forEach(i=>{n.write(`<th>${i}</th>`)}),n.write("</tr></thead><tbody>"),a.data.forEach(i=>{n.write("<tr>"),Object.values(i).forEach(d=>{n.write(`<td>${d}</td>`)}),n.write("</tr>")}),n.write("</tbody></table>"),n.write("</body></html>"),n.close()}})};function M(){document.getElementById("new_product__modal").style.display="flex"}function D(){document.getElementById("new_product__modal").style.display="none"}function A(){const e=document.querySelectorAll('#new_product__modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.newProductOptimizationButton=M;window.newProductCloseModalButton=D;window.newProductSaveModalButton=A;window.newProduct_PreviewButton=function(){const t=document.getElementById("new_product__aggregation-time").value,a=document.getElementById("new_product__aggregation-geo").value,n=document.getElementById("new_product__aggregation-group").value,i=document.getElementById("new_product__aggregation-parameter").value;let d;if(t!=="not_selected"&&a!=="not_selected"&&n!=="not_selected"&&i!=="not_selected")d="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||a==="not_selected"||n==="not_selected"||i==="not_selected"){const c=document.getElementById("new_product_PreviewIframe"),s=c.contentDocument||c.contentWindow.document;s.open(),s.write(`<html>
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
              </html>`),s.close();return}else if(selectedMethod==="promo_weighted__custom")d="./images/demo_file/test_forecast_csv2.csv";else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(d,{download:!0,header:!0,complete:function(c){const s=document.getElementById("new_product_PreviewIframe"),l=s.contentDocument||s.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(c.data[0]).forEach(m=>{l.write(`<th>${m}</th>`)}),l.write("</tr></thead><tbody>"),c.data.forEach(m=>{l.write("<tr>"),Object.values(m).forEach(p=>{l.write(`<td>${p}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};function O(){document.getElementById("summaryPlan_modal").style.display="flex"}function L(){document.getElementById("summaryPlan_modal").style.display="none"}function N(){const e=document.querySelectorAll('#summaryPlan_modalContent input[type="checkbox"]'),t=[];e.forEach(o=>{o.checked&&t.push(o.name)})}window.summaryPlan_OptimizationButton=O;window.summaryPlan_closeModalButton=L;window.summaryPlan_saveModalButton=N;window.summaryPlan_PreviewButton=function(){const t=document.getElementById("summary_plan_time").value,a=document.getElementById("summary_plan_geography").value,n=document.getElementById("summary_plan_scu").value,i=document.getElementById("summary_plan_method").value;let d;if(t!=="not_selected"&&a!=="not_selected"&&n!=="not_selected"&&i!=="not_selected")d="./images/demo_file/test_forecast_csv.csv";else if(t==="not_selected"||a==="not_selected"||n==="not_selected"||i==="not_selected"){const c=document.getElementById("summaryPlan_PreviewIframe"),s=c.contentDocument||c.contentWindow.document;s.open(),s.write(`<html>
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
              </html>`),s.close();return}else{console.warn("Неизвестный метод прогнозирования:",selectedMethod);return}Papa.parse(d,{download:!0,header:!0,complete:function(c){const s=document.getElementById("summaryPlan_PreviewIframe"),l=s.contentDocument||s.contentWindow.document;l.open(),l.write(`<html>
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
                            <tr>`),Object.keys(c.data[0]).forEach(m=>{l.write(`<th>${m}</th>`)}),l.write("</tr></thead><tbody>"),c.data.forEach(m=>{l.write("<tr>"),Object.values(m).forEach(p=>{l.write(`<td>${p}</td>`)}),l.write("</tr>")}),l.write("</tbody></table>"),l.write("</body></html>"),l.close()}})};function j(){v(),document.getElementById("planner_weeklyModal").style.display="block"}function y(e){document.getElementById(e).style.display="none"}function v(){y("planner_weeklyModal"),y("timeModal"),y("checkboxModal")}window.onclick=function(e){e.target.classList.contains("modal")&&v()};function H(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block"),o=t.options[t.selectedIndex].text,a=document.getElementById("planner__scenarioCustom"),r=a.options[a.selectedIndex].text,n=document.getElementById("planner_interval").value,u=document.getElementById("planner_selectedTime").value,i=document.getElementById("planner_selectedStartDate").value,d=document.getElementById("planner_selectedEndDate").value,c=document.getElementById("planner_Iframe"),s=c.contentDocument||c.contentWindow.document;s.body.innerHTML=`        <style>
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
                <td>${i}</td>
                <td>${d}</td>
                <td>${u}</td>
            </tr>
        </table>`,y("planner_weeklyModal")}window.planner_selectScenarioRepeat=j;window.closeModal=y;window.closeAllModals=v;window.saveSettings=H;let f={};function z(){f.intervalNum=document.getElementById("planner_intervalPeriodicity").value,f.dayOfWeekRepeat=document.getElementById("planner_dayOfWeekRepeat").value,f.selectedTime=document.getElementById("planner_selectedTime").value,f.selectedStartDate=document.getElementById("planner_selectedStartDate").value;const e=document.querySelectorAll('input[name="options"]:checked');let t="";e.forEach(o=>{o.value==="never"?t="Никогда":o.value==="number"?t=`Спустя ${document.getElementById("planner_ModalRepetition__times").value} раз`:o.value==="date"&&(t=`Дата:${document.getElementById("dateInput").value}`)}),f.endingInfo=t,closeModal("planner_weeklyModal")}function R(){const e=document.getElementById("planner__scenarioName").value,t=document.getElementById("planner__block").value,o=document.getElementById("planner__scenarioCustom").value,a=` <style>
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
    </table>`,r=document.getElementById("planner_Iframe"),n=r.contentDocument||r.contentWindow.document;n.open(),n.write(a),n.close()}window.saveModalData=z;window.planner_addData=R;window.planner_formRepeatSelect=function(){const e=document.getElementById("planner_intervalRepetition__header"),t=document.querySelector(".planner_visionParagraphDayOfWeek"),o=document.getElementById("planner_dayOfWeekRepeat"),a=document.querySelector(".planner_intervalWrapperDay"),r=e.value;r==="repeat_daily"?(t.style.display="none",o.style.display="none",a.textContent="день"):r==="repeat_weekly"?(t.style.display="block",o.style.display="block",a.textContent="неделя"):r==="repeat_monthly"&&(t.style.display="block",o.style.display="block",a.textContent="месяц")};document.addEventListener("DOMContentLoaded",function(){planner_formRepeatSelect()});const W="/SputnikPro_test_2_2/images/users/ZilevichElizaveta.jpg",F="/SputnikPro_test_2_2/images/users/TkachevOleg.jpg",G="/SputnikPro_test_2_2/images/users/TolokGalina.jpg",q="/SputnikPro_test_2_2/images/users/question.jpg",b="/SputnikPro_test_2_2/images/users/user1.png";var x,_,U=function(){$.when($("[data-scrollbar=true]").each(function(){generateSlimScroll($(this))})).done(function(){$('[data-scrollbar="true"]').mouseover()})},V=function(){let e=$(".sidebar").attr("data-disable-slide-animation")?0:250;$(".sidebar .nav > .has-sub > a").click(function(){let t=$(this).next(".sub-menu"),o=$(".sidebar .nav > li.has-sub > .sub-menu").not(t);$(".page-sidebar-minified").length===0&&($(o).closest("li").addClass("closing"),$(o).slideUp(e,function(){$(o).closest("li").addClass("closed").removeClass("expand closing")}),$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let a=$(this).closest("li");$(t).is(":visible")?($(a).addClass("expand"),$(a).removeClass("closed")):($(a).addClass("closed"),$(a).removeClass("expand")),$(a).removeClass("expanding closing")}))}),$(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function(){if($(".page-sidebar-minified").length===0){let t=$(this).next(".sub-menu");$(t).is(":visible")?$(t).closest("li").addClass("closing").removeClass("expand"):$(t).closest("li").addClass("expanding").removeClass("closed"),$(t).slideToggle(e,function(){let o=$(this).closest("li");$(t).is(":visible")?($(o).addClass("expand"),$(o).removeClass("closed")):($(o).addClass("closed"),$(o).removeClass("expand")),$(o).removeClass("expanding closing")})}})},X=function(){try{if(typeof Storage<"u"&&typeof localStorage<"u"){let e=window.location.href;e=(e=e.split("?"))[0];let t=localStorage.getItem(e);if(t){t=JSON.parse(t);let o=0;$.when($('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function(){let a=t[o],r=$(this);a&&$.each(a,function(n,u){let i=$('[data-sortable-id="'+u.id+'"]').not('[data-init="true"]');if($(i).length!==0){let d=$(i).clone();$(i).remove(),$(r).append(d),$('[data-sortable-id="'+u.id+'"]').attr("data-init","true")}}),o++})).done(function(){window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))})}}else alert("Your browser is not supported with the local storage")}catch(e){console.log(e)}},Z=function(){$(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")},J=function(){$(window).on("scroll",function(){handleCheckScrollClass()}),handleCheckScrollClass()},K=function(){$(document).on("click","#float-sub-menu li.has-sub > a",function(e){let t=$(this).next(".sub-menu"),o=$(t).closest("li"),a=!1,r=!1;$(t).is(":visible")?($(o).addClass("closing"),a=!0):($(o).addClass("expanding"),r=!0),$(t).slideToggle({duration:250,progress:function(){let n=$("#float-sub-menu"),u=$(n).height(),i=$(n).offset(),d=$(n).attr("data-offset-top"),c=$(n).attr("data-menu-offset-top"),s=i.top-$(window).scrollTop(),l=$(window).height();if(a&&d<s&&(s=d<s?d:s,$("#float-sub-menu").css({top:s+"px",bottom:"auto"}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"})),r&&l-s<u){let h=l-c-22;$("#float-sub-menu").css({top:"auto",bottom:0}),$("#float-sub-menu-arrow").css({top:"auto",bottom:h+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:h+"px"})}},complete:function(){$(t).is(":visible")?$(o).addClass("expand"):$(o).addClass("closed"),$(o).removeClass("closing expanding")}})}),$(".sidebar .nav > li.has-sub > a").hover(function(){if($("#page-container").hasClass("page-sidebar-minified")){clearTimeout(x);let e=$(this).closest("li").find(".sub-menu").first();if(_==this&&$("#float-sub-menu").length!==0)return;_=this;let t=$(e).html();if(t){let o=$("#sidebar").offset(),a=$("#page-container").hasClass("page-with-right-sidebar")?$(window).width()-o.left:o.left+60,r=$(e).height(),n=$(this).offset().top-$(window).scrollTop(),u=$("#page-container").hasClass("page-with-right-sidebar")?"auto":a,i=$("#page-container").hasClass("page-with-right-sidebar")?a:"auto",d=$(window).height();if($("#float-sub-menu").length===0?(t='<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="'+n+'" data-menu-offset-top="'+n+'" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">	<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>	<div class="float-sub-menu-line" id="float-sub-menu-line"></div>	<ul class="float-sub-menu">'+t+"</ul></div>",$("#page-container").append(t)):($("#float-sub-menu").attr("data-offset-top",n),$("#float-sub-menu").attr("data-menu-offset-top",n),$(".float-sub-menu").html(t)),r<d-n)$("#float-sub-menu").css({top:n,left:u,bottom:"auto",right:i}),$("#float-sub-menu-arrow").css({top:"20px",bottom:"auto"}),$("#float-sub-menu-line").css({top:"20px",bottom:"auto"});else{$("#float-sub-menu").css({bottom:0,top:"auto",left:u,right:i});let c=d-n-21;$("#float-sub-menu-arrow").css({top:"auto",bottom:c+"px"}),$("#float-sub-menu-line").css({top:"20px",bottom:c+"px"})}}else $("#float-sub-menu").remove(),_=""}},function(){$("#page-container").hasClass("page-sidebar-minified")&&(x=setTimeout(function(){$("#float-sub-menu").remove(),_=""},250))})},Y=function(){var e;return{init:function(t){t&&(e=t),this.initLocalStorage(),this.initSidebar(),this.initComponent(),this.initThemePanel(),this.initPageLoad(),$(window).trigger("load"),e&&e.ajaxMode&&this.initAjax()},initSidebar:function(){V(),handleMobileSidebarToggle(),handleSidebarMinify(),K()},initSidebarSelection:function(){Z()},initComponent:function(){(!e||e&&!e.disableDraggablePanel)&&U(),handleUnlimitedTabsRender(),handlePanelAction(),handleScrollToTopButton(),handleAfterPageLoadAddClass(),J(),$(window).width()>767&&handleTooltipPopoverActivation()},initLocalStorage:function(){(!e||e&&!e.disableLocalStorage)&&X()},initAjax:function(){handleAjaxMode(e),$.ajaxSetup({cache:!0})},scrollTop:function(){$("html, body").animate({scrollTop:$("body").offset().top},0)}}}();window.showContent_parameters=function(){const e=document.getElementById("mainContent");fetch("./src/html/parameters.html").then(t=>{if(!t.ok)throw new Error("Модуль не отвечает");return t.text()}).then(t=>{e.innerHTML=t}).catch(t=>{console.error("Ошибка при загрузке файла:",t),e.innerHTML="Ошибка при загрузке"})};window.showContent_action=function(){fetch("./src/html/action.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_seasonality=function(){fetch("./src/html/seasonality.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_regular_assort=function(){fetch("./src/html/regular_assort.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.showContent_promo=function(){fetch("./src/html/promo.html").then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.text()}).then(e=>{document.getElementById("mainContent").innerHTML=e}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)})};window.updateUserImage=function(){const e=document.getElementById("header_top_user"),t=document.getElementById("userImage"),o={option1:q,option2:W,option3:b,option4:F,option5:b,option6:G,option7:b},a=e.value;if(t.innerHTML="",a&&o[a]){const r=document.createElement("img");r.src=o[a],r.alt=a,r.style.width="50px",r.style.borderRadius="50px",t.appendChild(r)}};$(document).ready(function(){Y.init(),Highlight.init()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".visible");e.forEach(t=>{t.addEventListener("click",function(){e.forEach(o=>o.classList.remove("actived")),this.classList.add("actived")})})});
