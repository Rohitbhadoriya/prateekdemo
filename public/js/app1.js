function printBill() {
    let body = document.getElementById('body').innerHTML
    // alert(body)
    let bill = document.getElementById('bill').innerHTML
// alert(bill)
document.getElementById('body').innerHTML = bill
    window.print();
}
// Auto Time and Date
// window.onload = function() {
//     let now = new Date();
//     let dateTimeString = now.toLocaleDateString() + " " + now.toLocaleTimeString();
//     document.getElementById('date-time').innerHTML = dateTimeString;
// };
