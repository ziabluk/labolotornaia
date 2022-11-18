let form1 = document.getElementById("form1");
let num = form1.firstElementChild
let num2 = form1.lastElementChild
function getFormvalue(){
    num2.insertAdjacentHTML('afterend', `<p>${num.value} ${num2.value}</p>`);
}
