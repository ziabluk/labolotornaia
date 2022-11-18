let table = document.getElementById("myTable");
let tbody = table.children[0]
function changeContent(){    
    let stolb = prompt("введи столбец");
    let chei = prompt("Веди ячейку");
    let znach = prompt("Введи текст");
    let num1 = tbody.children[stolb - 1].children[chei - 1];
    num1.innerText = znach
}

