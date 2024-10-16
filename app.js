const express = require('express')
// console.log(express)
const app = express()
const port =  5500
const web  = require('./routes/web')
const connectdb = require('./db/connectdb')
const session  = require('express-session')
const flash  = require('connect-flash')
const fileUpload = require("express-fileupload");
const cookieParser = require('cookie-parser')

// For WHatsaap API
// const querystring  = require('querystring')
// const axios = require('axios')
// const apiToken = '7612|ieZoEJPjBE3qwHAGYOdkcGXAURQjhi47cf30jwVj';
// const phoneNumberId = '375093372350776';
// const templateId = '109221';

// require('dotenv').config()
// const axios = require('axios')


// for file upload
app.use(fileUpload({ useTempFiles: true }));
// for session
app.use(cookieParser())






app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,

}));

app.use(flash());









// dataconnectiondb
connectdb()

// For Data load
app.use(express.urlencoded({ extended: true }))
// ejs html css
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.json()); // Middleware to parse JSON
// First

// app.post('/send-whatsapp', async (req, res) => {
//   try {
//       // Destructure job sheet data from request body
//       const { jobNumber, customerName, customerPhone, device, brand, model, problem, estimated, remark, dateTime } = req.body;

//       if (!customerPhone) {
//           return res.status(400).json({ success: false, error: 'Customer phone number is required' });
//       }

//       // Prepare template variables
//       const templateVariables = {
//           'templateVariable-jobNumber': jobNumber,
//           'templateVariable-customerName': customerName,
//           'templateVariable-device': device,
//           'templateVariable-brand': brand,
//           'templateVariable-model': model,
//           'templateVariable-problem': problem,
//           'templateVariable-estimated': estimated,
//           'templateVariable-remark': remark,
//           'templateVariable-dateTime': dateTime
//       };

//       // Prepare data for WhatsApp API request
//       const data = {
//         apiToken: apiToken,
//         phone_number_id: phoneNumberId,
//         template_id: templateId,
//         to: customerPhone, // Replace recipient_phone with to
//         ...templateVariables,
        
        
//     };
    
//       console.log('Sending data to WhatsApp API:', data); // Debugging

//       // Send the POST request to WhatsApp API
//       const response = await axios.post('https://app.whatsmarketing.in/api/v1/whatsapp/send/template', querystring.stringify(data), {
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//           },
//       });

//       console.log('Response from WhatsApp API:', response.data); // Debugging
//       res.json({ success: true, data: response.data });

//   } catch (error) {
//       console.error('Error occurred while sending WhatsApp message:', error.response ? error.response.data : error.message);
//       res.status(500).json({ success: false, error: error.message });
//   }
// });

// const jobSheetData = {
//   customerPhone: '6268135064', // Example customer phone number
//   customerName: 'John Doe',
//   jobNumber: 'JS12345',
//   device: 'Mobile',
//   brand: 'Samsung',
//   model: 'Galaxy S21',
//   problem: 'Screen cracked',
//   estimated: 'Rs. 5000',
//   remark: 'Urgent repair'
// };
// async function sendMeassageTemp(){
//   const response = await axios({
//     url:"https://app.whatsmarketing.in/api/v1/whatsapp/send/template",
//     method:'post',
//     headers:{
//       'Authorization': `Bearer ${process.env.WHATSAAP_TOKEN}`,
//       'Content-Type':'application/x-www-form-urlencoded',
//     },
//     data:JSON.stringify({
//       messaging_product:'whatsapp',
//       to:'+91'+ jobSheetData.customerPhone,
//       type:'template',
//       template:{
//         name:'jobsheet',
//         language:'en',
//         // components:[
//         //   {
//         //     type:'text',
//         //     text:'Hello',
//         //     },

//         // ]
//         components: [
//           {
//             type: 'body', // Sending dynamic message content
//             parameters: [
//               { type: 'text', text: jobSheetData.customerName },    // Customer name
//               { type: 'text', text: jobSheetData.jobNumber },       // Job number
//               { type: 'text', text: jobSheetData.device },          // Device
//               { type: 'text', text: jobSheetData.brand },           // Brand
//               { type: 'text', text: jobSheetData.model },           // Model
//               { type: 'text', text: jobSheetData.problem },         // Problem
//               { type: 'text', text: jobSheetData.estimated },       // Estimated cost
//               { type: 'text', text: jobSheetData.remark },          // Remark
//             ]
//           }
//         ]
        
//       }


//     })
//   })
//   console.log(response.data);
 
// }
// sendMeassageTemp()








// app.post('/send-whatsapp', async (req, res) => {
//   try {
//     // Destructure job sheet data from request body
//     const { jobNumber, customerName, customerPhone, device, brand, model, problem, estimated, remark, dateTime } = req.body;

//     if (!customerPhone) {
//       return res.status(400).json({ success: false, error: 'Customer phone number is required' });
//     }

//     // Ensure the phone number is in the correct format (remove + symbol if present)
//     const formattedPhone = customerPhone.replace(/[^\d]/g, ''); // Remove all non-numeric characters

//     // Prepare template variables
//     const templateVariables = {
//       'templateVariable-jobNumber-1': jobNumber,
//       'templateVariable-customerName-2': customerName,
//       'templateVariable-device-3': device,
//       'templateVariable-brand-4': brand,
//       'templateVariable-model-5': model,
//       'templateVariable-problem-6': problem,
//       'templateVariable-estimated-7': estimated,
//       'templateVariable-remark-8': remark,
//       'templateVariable-dateTime-9': dateTime
//     };

//     // Prepare data for WhatsApp API request
//     const data = {
//       apiToken: '7556|rnuCzL9wPR3SgBjjwkcqgZEruc3jo0wVcit4pBb3', // WhatsApp API token
//       phone_number_id: '375093372350776', // WhatsApp Business phone number ID
//       template_id: '109221', // WhatsApp message template ID
//       to: formattedPhone, // Formatted customer phone number
//       ...templateVariables // Spread the template variables
//     };

//     console.log('Sending data to WhatsApp API:', data); // Debugging

//     // URL-encode the data
//     const encodedData = querystring.stringify(data);

//     // Send the POST request to WhatsApp API
//     const response = await axios.post(
//       'https://app.whatsmarketing.in/api/v1/whatsapp/send/template',
//       encodedData, // Send as URL-encoded form data
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     console.log('Response from WhatsApp API:', response.data); // Debugging
//     res.json({ success: true, data: response.data });

//   } catch (error) {
//     console.error('Error occurred while sending WhatsApp message:', error.response ? error.response.data : error.message);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });




// Second Code 
// app.post('/send-whatsapp', async (req, res) => {
//   try {
//       const { jobNumber, customerName, customerPhone, device, brand, model, problem, estimated, remark, dateTime } = req.body;

//       if (!customerPhone) {
//           return res.status(400).json({ success: false, error: 'Customer phone number is required' });
//       }

//       // Ensure phone number starts with +
//       const completePhone = customerPhone.startsWith('+') ? customerPhone : `+${customerPhone}`;

//       // Prepare template variables
//       const templateVariables = {
//           'templateVariable-jobNumber-1': jobNumber,
//           'templateVariable-customerName-2': customerName,
//           'templateVariable-device-3': device,
//           'templateVariable-brand-4': brand,
//           'templateVariable-model-5': model,
//           'templateVariable-problem-6': problem || 'N/A',
//           'templateVariable-estimated-7': estimated,
//           'templateVariable-remark-8': remark,
//           'templateVariable-dateTime-9': dateTime
//       };

//       // Prepare data for WhatsApp API request
//       const data = {
//           apiToken: apiToken,
//           phone_number_id: phoneNumberId,
//           template_id: templateId,
//           to: completePhone,  // Add + if not present
//           ...templateVariables
//       };

//       console.log('Sending data to WhatsApp API:', data); // Debugging log

//       // Send the POST request to WhatsApp API
//       const response = await axios.post('https://app.whatsmarketing.in/api/v1/whatsapp/send/template', querystring.stringify(data), {
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//               'Authorization': `Bearer ${apiToken}`, // Ensure authorization header is set correctly
//           },
//       });

//       console.log('Response from WhatsApp API:', response.data); // Debugging
//       res.json({ success: true, data: response.data });

//   } catch (error) {
//       console.error('Error occurred while sending WhatsApp message:', error.response ? error.response.data : error.message);
//       res.status(500).json({ success: false, error: error.message });
//   }
// });




// app.post('/send-whatsapp', async (req, res) => {
//   try {
//       const { jobNumber, customerName, customerPhone, device, brand, model, problem, estimated, remark, dateTime } = req.body;

//       if (!customerPhone) {
//           return res.status(400).json({ success: false, error: 'Customer phone number is required' });
//       }

//       const templateVariables = {
//           'templateVariable-jobNumber-1': jobNumber,
//           'templateVariable-customerName-2': customerName,
//           'templateVariable-device-3': device,
//           'templateVariable-brand-4': brand,
//           'templateVariable-model-5': model,
//           'templateVariable-problem-6': problem,
//           'templateVariable-estimated-7': estimated,
//           'templateVariable-remark-8': remark,
//           'templateVariable-dateTime-9': dateTime,
//           'templateVariable-customerPhone-10': customerPhone
//       };
//       // console.log(templateVariables);

//       const data = {
//         phone_number_id: phoneNumberId,  // Sender's WhatsApp number ID
//         template_id: templateId,          // Template ID
//         to: customerPhone,                 // Required 'to' parameter
//         ...templateVariables               // Additional template variables
//     };
//        console.log(data);
     

//       // Send the POST request to WhatsApp API
//       const response = await axios.post('https://app.whatsmarketing.in/api/v1/whatsapp/send/template', querystring.stringify(data), {
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//               'Authorization': `Bearer ${apiToken}` // Add token as Authorization header
//           },
//       });

//       console.log('Response from WhatsApp API:', response.data); // Debugging
//       res.json({ success: true, data: response.data });

//   } catch (error) {
//       console.error('Error occurred while sending WhatsApp message:', error.response ? error.response.data : error.message);
//       res.status(500).json({ success: false, error: error.message });
//   }
// });







// other
// app.post('/send-whatsapp', async (req, res) => {
//   try {
//       const { jobNumber, customerName, customerPhone, device, brand, model, problem, estimated, remark, dateTime } = req.body;

//       // Validate that customerPhone is provided
//       if (!customerPhone) {
//           return res.status(400).json({ success: false, error: 'Customer phone number is required' });
//       }

//       // Remove any spaces and ensure the number starts with '91'
//       const formattedPhone = customerPhone.replace(/\s/g, '');
//       const completePhone = formattedPhone.startsWith('91') ? formattedPhone : '91' + formattedPhone;

//       // Log the final phone number to ensure it's correct
//       console.log('Formatted phone number:', completePhone);

//       // Prepare template variables
//       const templateVariables = {
//           'templateVariable-jobNumber-1': jobNumber,
//           'templateVariable-customerName-2': customerName,
//           'templateVariable-device-3': device,
//           'templateVariable-brand-4': brand,
//           'templateVariable-model-5': model,
//           'templateVariable-problem-6': problem,
//           'templateVariable-estimated-7': estimated,
//           'templateVariable-remark-8': remark,
//           'templateVariable-dateTime-9': dateTime
//       };

//       // Prepare the data to send to the WhatsApp API
//       const data = {
//           to: completePhone,              // The recipient's phone number
//           phone_number_id: phoneNumberId,  // Sender's WhatsApp number ID
//           template_id: templateId,         // Template ID
//           ...templateVariables             // Additional template variables
//       };

//       console.log('Sending data to WhatsApp API:', data); // Debugging log

//       // Send the POST request to WhatsApp API
//       const response = await axios.post('https://app.whatsmarketing.in/api/v1/whatsapp/send/template', querystring.stringify(data), {
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//               'Authorization': `Bearer ${apiToken}` // Add token as Authorization header
//           },
//       });

//       console.log('Response from WhatsApp API:', response.data); // Debugging
//       res.json({ success: true, data: response.data });

//   } catch (error) {
//       console.error('Error occurred while sending WhatsApp message:', error.response ? error.response.data : error.message);
//       res.status(500).json({ success: false, error: error.message });
//   }
// });













//   route load
app.use('/',web)



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
 