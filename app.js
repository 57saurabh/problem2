
let result = document.getElementById('result');
// console.log(billAmount)
function calculatetip() {
    let billAmount = document.getElementById('billAmount');
var tippercentage = document.getElementById('tippercentage');
    let x = parseInt(billAmount.value);
        // console.log(billAmount.value)
    let y = parseInt(tippercentage.value);

        let output= x + x*(y/100);

        console.log(output)
    result.innerHTML= output;
}