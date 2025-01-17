let modalData = {};

function saveModalData() {
    modalData.intervalNum = document.getElementById('planner_intervalPeriodicity').value;
    modalData.dayOfWeekRepeat = document.getElementById('planner_dayOfWeekRepeat').value;
    modalData.selectedTime = document.getElementById('planner_selectedTime').value;
    modalData.selectedStartDate = document.getElementById('planner_selectedStartDate').value;

    const endingOptions = document.querySelectorAll('input[name="options"]:checked');
    let endingInfo = '';
    endingOptions.forEach(option => {
        if (option.value === 'never') {
            endingInfo = 'Никогда';
        } else if (option.value === 'number') {
            const times = document.getElementById('planner_ModalRepetition__times').value;
            endingInfo = `Спустя ${times} раз`;
        } else if (option.value === 'date') {
            const endDate = document.getElementById('dateInput').value;
            endingInfo = `Дата:${endDate}`;
        }
    });
    
    modalData.endingInfo = endingInfo;
    closeModal('planner_weeklyModal');
}

// function planner_addData() {
//     const scenarioName = document.getElementById('planner__scenarioName').value;
//     const block = document.getElementById('planner__block').value;
//     const scenarioCustom = document.getElementById('planner__scenarioCustom').value;

//     const resultHTML = 
//        ` <style>
//         table {
//             width: 100%;
//             border-collapse: collapse;
//             margin-top: 20px;
//             font-family: Arial, sans-serif;
//             font-size:10px;
//         }
//         th, td {
//             padding: 10px;
//             text-align: left;
//             border-bottom: 1px solid #ddd;
//         }
//         th {
//             background-color: #f2f2f2;
//         }
//         tr:hover {
//             background-color: #f5f5f5;
//         }
//     </style>
//     <h5>Выбранные значения:</h5>
//     <table>
//         <tr>
//             <th>Наименование</th>
//             <th>Блок</th>
//             <th>Сценарий</th>
//             <th>Интервал повторений</th>
//             <th>Дни повторения</th>
//             <th>Время запуска</th>
//             <th>Дата начала</th>
//             <th>Дата окончания</th>
//         </tr>
//         <tr>
//             <td>${scenarioName}</td>
//             <td>${block}</td>
//             <td>${scenarioCustom}</td>
//             <td>${modalData.intervalNum}  дней</td>
//             <td>${modalData.dayOfWeekRepeat}</td>
//             <td>${modalData.selectedTime}</td>
//             <td>${modalData.selectedStartDate}</td>
//             <td>${modalData.endingInfo}</td>
//         </tr>
//     </table>`
//     ;

//     const iframe = document.getElementById('planner_Iframe');
//     const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
//     iframeDoc.open();
//     iframeDoc.write(resultHTML);
//     iframeDoc.close();
// }


function planner_addData() {
    const scenarioName = document.getElementById('planner__scenarioName').value;
    const block = document.getElementById('planner__block').value;
    const scenarioCustom = document.getElementById('planner__scenarioCustom').value;

    const newRowHTML = 
        `<tr>
            <td>${scenarioName}</td>
            <td>${block}</td>
            <td>${scenarioCustom}</td>
            <td>${modalData.intervalNum} дней</td>
            <td>${modalData.dayOfWeekRepeat}</td>
            <td>${modalData.selectedTime}</td>
            <td>${modalData.selectedStartDate}</td>
            <td>${modalData.endingInfo}</td>
        </tr>`
    ;

    const iframe = document.getElementById('planner_Iframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Проверяем, существует ли таблица
    let table = iframeDoc.querySelector('table');
    
    if (!table) {
        // Если таблицы нет, создаём её
        const resultHTML = 
            `<style>
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
                ${newRowHTML}
            </table>`
        ;
        iframeDoc.open();
        iframeDoc.write(resultHTML);
        iframeDoc.close();
    } else {
        // Если таблица существует, добавляем новую строку
        const tbody = table.querySelector('tbody') || table.createTBody();
        tbody.insertAdjacentHTML('beforeend', newRowHTML);
    }
}



export { saveModalData, planner_addData};

window.saveModalData = saveModalData;
window.planner_addData = planner_addData;

