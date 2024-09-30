function printBill() {
    let body = document.getElementById('body').innerHTML
    // alert(body)
    let bill = document.getElementById('bill').innerHTML
// alert(bill)
document.getElementById('body').innerHTML = bill
    window.print();
} 

// whatsaap shaRE
// function setWhatsAppLink() {
//     const phone = document.getElementById('customer-phone').innerText.trim().replace(/\s+/g, '');

//     if (!phone) {
//         alert("Phone number is missing or invalid.");
//         return;
//     }

//     const jobNumber = document.getElementById('job-number').innerText.trim();
//     const name = document.getElementById('customer-name').innerText.trim();
//     const device = document.getElementById('device').innerText.trim();
//     const model = document.getElementById('model').innerText.trim();
//     const brand = document.getElementById('brand').innerText.trim();
//     const problem = document.getElementById('problem').innerText.trim();
//     const estimated = document.getElementById('estimated').innerText.trim();

//     // Format the message to resemble a printed bill layout
//     const message = 
// `*PRATEEK MOBILE*
// 2nd Floor, Rajeev Plaza, Jayendrganj Gwalior
// 9755669222
// *Job Sheet*
// ------------------
// Job No: ${jobNumber}
// Name: ${name}
// Phone: ${phone}
// Device: ${device}
// Model: ${model}
// Brand: ${brand}
// Problem: ${problem}
// Estimated: ${estimated}
// ------------------
// *Terms & Conditions*
// 1. Estimate may change after repair
// 2. No responsibility for data loss
// 3. No responsibility for unclaimed repaired devices after 30 days
// 4. Warranty on screen replacement is only for touch-related issues
// 5. Subject to Gwalior jurisdiction`;

//     const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//     document.getElementById('whatsapp-link').href = whatsappLink;
// }

// window.onload = setWhatsAppLink;




// Auto Time and Date
// window.onload = function() {
//     let now = new Date();
//     let dateTimeString = now.toLocaleDateString() + " " + now.toLocaleTimeString();
//     document.getElementById('date-time').innerHTML = dateTimeString;
// };









