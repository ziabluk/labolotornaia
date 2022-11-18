let w3r = document.getElementById('w3r');
function getAttributes(){
    w3r.insertAdjacentHTML('afterend', `<p class="p1">${w3r.href}</p> <br> <p class="p2">${w3r.hreflang}</p> <br> <p class="p3">${w3r.rel}</p> <br> <p class="p4">${w3r.type}</p> <br> <p class="p5">${w3r.target}</p>`);
}
