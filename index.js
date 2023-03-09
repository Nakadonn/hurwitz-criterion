function Gurvic() {
    //Удаление таблицы (если она уже создана)
    let table_del = document.getElementById("table");
    table_del.remove();
    let result_del = document.getElementById("result");
    result_del.remove();
    let pl_matrix_del = document.getElementById("pl_matrix");
    pl_matrix_del.remove();

    //Создание div для результатов
    let content = document.getElementById("content");
    let div_new_1 = document.createElement("div");
    div_new_1.id = "pl_matrix";
    let div_new_2 = document.createElement("div");
    div_new_2.id = "table";
    let div_new_3 = document.createElement("div");
    div_new_3.id = "result";
    div_new_1.innerHTML = " ";
    div_new_2.innerHTML = " ";
    div_new_3.innerHTML = " ";
    content.append(div_new_1);
    content.append(div_new_2);
    content.append(div_new_3);
    
    //значения переменных
    let arrayA = new Array();
    let a1 = document.getElementById('a1').value;
    let a2 = document.getElementById('a2').value;
    let a3 = document.getElementById('a3').value;
    arrayA[0] = a1;
    arrayA[1] = a2;
    arrayA[2] = a3;

    let arrayP = new Array();
    let p1 = document.getElementById('p1').value;
    let p2 = document.getElementById('p2').value;
    let p3 = document.getElementById('p3').value;
    arrayP[0] = p1;
    arrayP[1] = p2;
    arrayP[2] = p3;

    let c = document.getElementById('cena').value;
    let z = document.getElementById('zatraty').value;
    let g = document.getElementById('gamma').value;

    //Вычисление элементов платёжной матрицы
    let arrA = new Array(3);
    for (let i = 0; i < arrA.length; i++) {
        arrA[i] = new Array(3);
    }
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if (arrayA[row] <= arrayP[col]) {
                arrA[row][col] = (c - z) * arrayA[row];
            } else if (arrayA[row] > arrayP[col]) {
                arrA[row][col] = c * arrayP[col] - z * arrayA[row];
            }
        }
    }

    let arrL = new Array();
    for(row = 0; row < arrA.length; row++) {
        let minim = Math.min.apply(null, arrA[row]);
        let maxim = Math.max.apply(null, arrA[row]);
        arrL[row] = g * maxim + (1 - g) * minim;
    }

    //Вычисление максимального элемента
    let max_ind = arrL.indexOf(Math.max.apply(null, arrL));

    //Текст "платёжная матрица"
    let pl_matrix = document.getElementById("pl_matrix");
    let text_pl = document.createElement("p");
    let pl = "Платёжная матрица: ";
    text_pl.innerHTML = pl;
    pl_matrix.appendChild(text_pl);

    //создание таблицы
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('table').appendChild(table);

    // Шапка таблицы
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Стратегии";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "П1";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "П2";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "П3";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Вычисление";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    thead.appendChild(row_1);

    //Вторая строка
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "А1";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = arrA[0][0];
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = arrA[0][1];
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.innerHTML = arrA[0][2];
    let row_2_data_5 = document.createElement('td');
    row_2_data_5.innerHTML = arrL[0];

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    row_2.appendChild(row_2_data_5);
    tbody.appendChild(row_2);


    // Третья строка
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "А2";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = arrA[1][0];
    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = arrA[1][1];
    let row_3_data_4 = document.createElement('td');
    row_3_data_4.innerHTML = arrA[1][2];
    let row_3_data_5 = document.createElement('td');
    row_3_data_5.innerHTML = arrL[1];

    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    row_3.appendChild(row_3_data_4);
    row_3.appendChild(row_3_data_5);
    tbody.appendChild(row_3);


    // Четвёртая строка
    let row_4 = document.createElement('tr');
    let row_4_data_1 = document.createElement('td');
    row_4_data_1.innerHTML = "А3";
    let row_4_data_2 = document.createElement('td');
    row_4_data_2.innerHTML = arrA[2][0];
    let row_4_data_3 = document.createElement('td');
    row_4_data_3.innerHTML = arrA[2][1];
    let row_4_data_4 = document.createElement('td');
    row_4_data_4.innerHTML = arrA[2][2];
    let row_4_data_5 = document.createElement('td');
    row_4_data_5.innerHTML = arrL[2];

    row_4.appendChild(row_4_data_1);
    row_4.appendChild(row_4_data_2);
    row_4.appendChild(row_4_data_3);
    row_4.appendChild(row_4_data_4);
    row_4.appendChild(row_4_data_5);
    tbody.appendChild(row_4);

    //Вывод результата
    let result = document.getElementById("result");
    let text = document.createElement("p");
    let best = "Наилучшая стратегия — А" + (max_ind + 1) + ": " + arrayA[max_ind];
    text.innerHTML = best;
    result.appendChild(text);
}

function check_inputs() {
    let a1 = document.getElementById('a1').value;
    let a2 = document.getElementById('a2').value;
    let a3 = document.getElementById('a3').value;
    let p1 = document.getElementById('p1').value;
    let p2 = document.getElementById('p2').value;
    let p3 = document.getElementById('p3').value;
    let c = document.getElementById('cena').value;
    let z = document.getElementById('zatraty').value;
    let g = document.getElementById('gamma').value;

    document.getElementById("a1").className = document.getElementById("a1").className.replace(" error", "");
    document.getElementById("a2").className = document.getElementById("a2").className.replace(" error", "");
    document.getElementById("a3").className = document.getElementById("a3").className.replace(" error", "");
    document.getElementById("p1").className = document.getElementById("p1").className.replace(" error", "");
    document.getElementById("p2").className = document.getElementById("p2").className.replace(" error", "");
    document.getElementById("p3").className = document.getElementById("p3").className.replace(" error", "");
    document.getElementById("cena").className = document.getElementById("cena").className.replace(" error", "");
    document.getElementById("zatraty").className = document.getElementById("zatraty").className.replace(" error", "");
    document.getElementById("gamma").className = document.getElementById("gamma").className.replace(" error", "");

    if (a1.length == 0 || a2.length == 0 || a3.length == 0 || p1.length == 0 || p2.length == 0 || p3.length == 0 || c.length == 0 || z.length == 0 || g.length == 0) {
        alert("Пожалуйста, заполните все поля");
    }else if (a1 < 0 || a2 < 0 || a3 < 0 || p1 < 0 || p2 < 0 || p3 < 0 || c < 0 || z < 0 || g < 0 || g > 1) {
        alert("Неверно. Проверьте введённые значения");
        if (a1 < 0) document.getElementById("a1").className = document.getElementById("a1").className + " error";
        if (a2 < 0) document.getElementById("a2").className = document.getElementById("a2").className + " error";
        if (a3 < 0) document.getElementById("a3").className = document.getElementById("a3").className + " error";
        if (p1 < 0) document.getElementById("p1").className = document.getElementById("p1").className + " error";
        if (p2 < 0) document.getElementById("p2").className = document.getElementById("p2").className + " error";
        if (p3 < 0) document.getElementById("p3").className = document.getElementById("p3").className + " error";
        if (c < 0) document.getElementById("cena").className = document.getElementById("cena").className + " error";
        if (z < 0) document.getElementById("zatraty").className = document.getElementById("zatraty").className + " error";
        if (g < 0 || g > 1) document.getElementById("gamma").className = document.getElementById("gamma").className + " error";
    } else if (a1 > 0 && a2 > 0 && a3 > 0 && p1 > 0 && p2 > 0 && p3 > 0 && c > 0 && z > 0 && ((g > 0 && g < 1) || g == 1 || g == 0)) {
        Gurvic();
        setTimeout(() => alert("Расчёт выполнен"), 10);
    }
}