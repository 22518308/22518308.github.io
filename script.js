function copyText(value) {
    var copyText = document.getElementById(value).innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById("copy" + value).src = "images/tick_icon.png";
    setTimeout(function () { document.getElementById("copy" + value).src = "images/clipboard_icon.png"; }, 300)
}