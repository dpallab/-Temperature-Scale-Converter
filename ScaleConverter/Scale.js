let a = document.getElementById("Num1");
let b = document.getElementById("r1");
let c = document.getElementById("r2");

function display() {
    if (b.checked) {
        let val = a.value;
        val = (val * 9 / 5) + 32;
        document.getElementById("result").innerText = `${a.value}°C = ${val.toFixed(2)}°F`;
    }
    else if (c.checked) {
        let temp = a.value;
        temp = (temp - 32) * (5 / 9);
        document.getElementById("result").innerText = `${a.value}°F = ${temp.toFixed(2)}°C`;
    }
    else {
        alert("⚠️ Please select a conversion type!");
    }
}

function resetForm() {
    a.value = "";               // clear input
    b.checked = false;          // uncheck Celsius → Fahrenheit
    c.checked = false;          // uncheck Fahrenheit → Celsius
    document.getElementById("result").innerText = "Result"; // reset result
}
