function printBill() {
    let body = document.getElementById('body').innerHTML
    // alert(body)
    let bill = document.getElementById('bill').innerHTML
// alert(bill)
document.getElementById('body').innerHTML = bill
    window.print();
}
