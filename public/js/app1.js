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












// function sendWhatsAppBill() {
//     const data = {
//         jobNumber: document.getElementById('job-number').innerText,
//         customerName: document.getElementById('customer-name').innerText,
//         customerPhone: document.getElementById('customer-phone').innerText,
//         device: document.getElementById('device').innerText,
//         brand: document.getElementById('brand').innerText,
//         model: document.getElementById('model').innerText,
//         problem: document.getElementById('problem').innerText,
//         estimated: document.getElementById('estimated').innerText,
//         remark: document.getElementById('remark').innerText,
//         dateTime: document.getElementById('date-time').innerText
//     };

//     console.log('Sending job sheet data to backend:', data); // Add logging for debugging

//     // Send data to your server via fetch POST request
//     fetch('/send-whatsapp', { 
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Response from backend:', data);
//         if (data.success) {
//             alert('Job sheet sent via WhatsApp successfully!');
//         } else {
//             alert('Failed to send job sheet. Please try again.');
//         }
//     })
//     .catch(error => {
//         console.error('Error occurred while sending WhatsApp message:', error);
//         alert('There was an error. Please check the console for more details.');
//     });
// }








