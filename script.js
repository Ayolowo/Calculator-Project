function addToInput(value) {
    document.getElementById("in_out").value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById("in_out").value);
        document.getElementById("in_out").value = result;
    } catch (error) {
        document.getElementById("in_out").value = "Error";
    }
}
