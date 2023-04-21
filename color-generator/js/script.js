let history = [];

function colgen() {

    document.getElementById("el1").style.backgroundColor = `#${generation()}`;
    document.getElementById("el1").innerText = `#${history[history.length-1]}`;
    document.getElementById("el2").style.backgroundColor = `#${generation()}`;
    document.getElementById("el2").innerText = `#${history[history.length-1]}`;
    document.getElementById("el3").style.backgroundColor = `#${generation()}`;
    document.getElementById("el3").innerText = `#${history[history.length-1]}`;
    document.getElementById("el4").style.backgroundColor = `#${generation()}`;
    document.getElementById("el4").innerText = `#${history[history.length-1]}`;
    
}

function generation() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    history.push(color);
    return color;
}