export default window.loadData = function() {
    const selectedOption = document.getElementById('seasonality_method').value;
    const seasonality_selectedTime = document.getElementById('seasonality_time').value;
    const seasonality_selectedGeo = document.getElementById('seasonality_geography').value;
    const seasonality_selectedGroupSCU = document.getElementById('seasonality_groupSCU').value;

    if (selectedOption === 'not_selected' || 
        seasonality_selectedTime === 'not_selected' || 
        seasonality_selectedGeo === 'not_selected' || 
        seasonality_selectedGroupSCU === 'not_selected') {
        document.getElementById('seasonality_chart').innerHTML = 'Заполните все поля';
        return;
    }

    document.getElementById('seasonality_chart').innerHTML = '';

    let filePath = '';
    if (selectedOption === 'fluctuation_average' && 
        seasonality_selectedTime === 'week' && 
        seasonality_selectedGeo === 'all' && 
        seasonality_selectedGroupSCU === 'groupe1') {
        filePath = './images/demo_file/test3.xlsx';
    } else if (selectedOption === 'fluctuation_trend' && 
               seasonality_selectedTime === 'week' && 
               seasonality_selectedGeo === 'all' && 
               (seasonality_selectedGroupSCU === 'groupe1')) {
        filePath = './images/demo_file/test4.xlsx';
    } else {
        document.getElementById('seasonality_chart').innerHTML = 'Выберите корректные параметры';
        return;
    }
    fetch(filePath)
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            const labels = [];
            const datasets = {};
            // Пропускаем заголовок и обрабатываем данные
            for (let i = 1; i < jsonData.length; i++) {
                const row = jsonData[i];
                if (row.length === 3) { // Убедитесь, что в строке три колонки
                    const productType = row[0]; // Наименование
                    const week = row[1]; // Неделя
                    const value = parseFloat(row[2]); // Значение
                    // Добавляем недели в labels, если их еще нет и если неделя не -1
                    if (!labels.includes(week) && week !== '-1') {
                        labels.push(week);
                    }
                    // Создаем массив для каждого типа продукции, если его еще нет
                    if (!datasets[productType]) {
                        datasets[productType] = {
                            x: [], 
                            y: [], 
                            type: 'scatter', // Тип графика
                            mode: 'lines+markers', // Режим отображения
                            name: productType // Имя для легенды
                        };
                    }
                    const weekIndex = labels.indexOf(week); // Заполняем массив значений для соответствующей недели
                    if (weekIndex !== -1) {
                        datasets[productType].x.push(week);
                        datasets[productType].y.push(value);
                    }
                }
            }
            // Преобразуем объект datasets в массив для Plotly
            const plotData = Object.values(datasets);
            // Создание нового графика
            Plotly.newPlot('seasonality_chart', plotData, {
                title: 'Сезонность',
                xaxis: {
                    title: 'Неделя',
                    tickmode: 'linear', // Используем линейный режим для оси X
                    tick0: 1, // Начальное значение оси X (неделя 1)
                    dtick: 1, // Шаг по оси X (по одной неделе)
                    range: [0, 53]
                },
                yaxis: {
                    title: 'Значение',
                    rangemode: 'tozero' // Начинаем ось Y с нуля
                }
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла:', error);
        });
}





// export default window.loadData = function() {
//     const selectedOption = document.getElementById('seasonality_method').value;
//     const seasonality_selectedTime = document.getElementById('seasonality_time').value;
//     const seasonality_selectedGeo = document.getElementById('seasonality_geography').value;
//     const seasonality_selectedGroupSCU = document.getElementById('seasonality_groupSCU').value;
    
//     if (selectedOption === 'not_selected' || seasonality_selectedTime === 'not_selected' || seasonality_selectedGeo === 'not_selected' || seasonality_selectedGroupSCU === 'not_selected') {
//         document.getElementById('seasonality_chart').innerHTML = 'Заполните все поля';
//         return;
//     }

//     const filePath = './images/demo_file/test3.xlsx'; // Путь к файлу
//     fetch(filePath)
//         .then(response => response.arrayBuffer())
//         .then(data => {
//             const workbook = XLSX.read(data, { type: 'array' });
//             const firstSheetName = workbook.SheetNames[0];
//             const worksheet = workbook.Sheets[firstSheetName];
//             const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//             const labels = [];
//             const datasets = {};

//             // Пропускаем заголовок и обрабатываем данные
//             for (let i = 1; i < jsonData.length; i++) {
//                 const row = jsonData[i];
//                 if (row.length === 3) { // Убедитесь, что в строке три колонки
//                     const productType = row[0]; // Наименование
//                     const week = row[1]; // Неделя
//                     const value = parseFloat(row[2]); // Значение

//                     // Добавляем недели в labels, если их еще нет и если неделя не -1
//                     if (!labels.includes(week) && week !== '-1') {
//                         labels.push(week);
//                     }

//                     // Создаем массив для каждого типа продукции, если его еще нет
//                     if (!datasets[productType]) {
//                         datasets[productType] = {
//                             x: [], // Массив для недель
//                             y: [], // Массив для значений
//                             type: 'scatter', // Тип графика
//                             mode: 'lines+markers', // Режим отображения
//                             name: productType // Имя для легенды
//                         };
//                     }

//                     // Заполняем массив значений для соответствующей недели
//                     const weekIndex = labels.indexOf(week);
//                     if (weekIndex !== -1) {
//                         datasets[productType].x.push(week);
//                         datasets[productType].y.push(value);
//                     }
//                 }
//             }

//             // Преобразуем объект datasets в массив для Plotly
//             const plotData = Object.values(datasets);

//             // Создание нового графика
//             Plotly.newPlot('seasonality_chart', plotData, {
//                 title: 'Сезонность, метод расчета "колебание от средней"',
//                 xaxis: {
//                     title: 'Неделя',
//                     tickmode: 'linear', // Используем линейный режим для оси X
//                     tick0: 1, // Начальное значение оси X (неделя 1)
//                     dtick: 1, // Шаг по оси X (по одной неделе)
//                 },
//                 yaxis: {
//                     title: 'Значение',
//                     rangemode: 'tozero' // Начинаем ось Y с нуля
//                 }
//             });
//         })
//         .catch(error => {
//             console.error('Ошибка при загрузке файла:', error);
//         });
// }