// expire-date
let dateCheck = document.getElementById('date-check');
let expireDate = document.getElementById('expire-date');

dateCheck.addEventListener('click',function () {
    if (dateCheck.checked==1) {
        expireDate.style.display = "block";
    } else {
        expireDate.style.display = "none";
    }
});

// url copy
let url = document.getElementById('short-url');

let copyBtnSm = document.getElementById('copy-btn-sm');
let copyBtn = document.getElementById('copy-btn');

// copy for small button
copyBtnSm.addEventListener('click',function(){
    url.select();
    document.execCommand('copy');
    copyBtnSm.style.background = "#FF9B05";
    setInterval(function() {
        copyBtnSm.style.background = "#00288A";
    }, 1000);
});

// copy for main button
copyBtn.addEventListener('click',function(){
    url.select();
    document.execCommand('copy');
    copyBtn.style.background = "#FF9B05";
    setInterval(function() {
        copyBtn.style.background = "#00288A";
    }, 1000);
});