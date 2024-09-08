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
window.onload = function() {
    // Check if the date and time are already saved in localStorage
    let savedDateTime = localStorage.getItem('savedDateTime');
    
    // If not, set the current date and time and save it
    if (!savedDateTime) {
        let now = new Date();
        savedDateTime = now.toLocaleDateString() + " " + now.toLocaleTimeString();
        localStorage.setItem('savedDateTime', savedDateTime);
    }

    // Display the saved date and time
    document.getElementById('date-time').innerHTML = savedDateTime;
};