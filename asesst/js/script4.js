let sampleTable = document.getElementById("sampleTable");
let a = 2;

function insert_Row(){
    a = a+1
    sampleTable.insertAdjacentHTML('beforeend', `<tr><td class="red">Row${a} cell1</td><td class="red">Row${a} cell2</td></tr>`);
}