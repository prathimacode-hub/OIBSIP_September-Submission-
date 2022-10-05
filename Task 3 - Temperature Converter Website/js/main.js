function tempConverter() {
    var temp = document.getElementById('temp1');
    var selectValue = temp.value;

    if (selectValue == "c") {
        var convertedintof = CtoF();
        return document.getElementById('result').value = convertedintof + ' '+  'Fahrenheit';
    } else if (selectValue == "f") {
        var convertedintoc = FtoC();
        return document.getElementById('result').value = convertedintoc + ' '+  'Celsuis';
    }

}
// ====  function that convert Celsius into Fahrenheit ===

function CtoF() {
    var c = document.getElementById('tempInput').value;
    return (c * 9 / 5) + 32;

}
// ==== function that convert Fahrenheit into Celsius  ===
function FtoC() {
    var f = document.getElementById('tempInput').value;
    return (f - 32) * 5 / 9;
}
