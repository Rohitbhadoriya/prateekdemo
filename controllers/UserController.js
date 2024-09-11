const ComplaintModel = require("../models/Complaint");
const EngineerModel = require("../models/Engineer");
// For Random Number
const { v4: uuidv4 } = require("uuid");
// Date
const moment = require("moment");
// Excel
const ExcelJS = require("exceljs");

class UserController {
  static dashboard = async (req, res) => {
    try {
      const { name, image } = req.data1
      const { _id: userId } = req.data1;
      const startOfToday = moment().startOf("day").toDate();
      const endOfToday = moment().endOf("day").toDate();
      // Fetch complaints created today
      const todaysComplaints = await ComplaintModel.find({
        createdAt: { $gte: startOfToday, $lte: endOfToday },
        user: userId 
      });

      // Calculate the total estimated value
      const totalEstimated = todaysComplaints.reduce((sum, complaint) => {
        return sum + (complaint.estimated || 0); // Add estimated field, default to 0 if not present
      }, 0);

      res.render("user/dashboard", { todaysComplaints, totalEstimated, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };
  static addcomplaint = async (req, res) => {
    try {
      const { _id: userId, name, image } = req.data1
      const data = await ComplaintModel.find({ user: userId });
      const engineer = await EngineerModel.find();

      // console.log(data);

      res.render("user/addcomplaint", { d: data, er: engineer, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };
  static insertcomplaint = async (req, res) => {
    try {
      const { name: userName, _id: userId } = req.data1;
      // console.log("Insert Data")
      console.log(req.body);
      const {
        name,
        phone,
        email,
        model,
        brand,
        device,
        problem,
        remark,
        engineer,
        estimated,
      } = req.body;
      const jobNumber = `JOB-${uuidv4().slice(0, 4).toUpperCase()}`;
      const createdAt = new Date(); // Get the current date and time
      const r = new ComplaintModel({
        name: name,
        phone: phone,
        email: email,
        model: model,
        brand: brand,
        device: device,
        problem: problem,
        remark: remark,
        engineer: engineer,
        estimated: estimated,
        jobNumber,
        createdAt: createdAt,
        user: userId,
      });
      await r.save();
      res.redirect("/user/addcomplaint");
    } catch (error) {
      console.log(error);
    }
  };
  static viewcomaplint = async (req, res) => {
    try {
      const {  _id: userId, name, image } = req.data1
      const data = await ComplaintModel.findOne({ _id: req.params.id, user: userId });  // Fetch complaint only if it belongs to the user
    if (!data) {
      return res.status(404).send('Complaint not found');
    }
      res.render("user/viewcomplaint", { d:data, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };
  static printcomplaint = async (req, res) => {
    try {
      const data = await ComplaintModel.findById(req.params.id);
      res.render("user/printcomplaint", { d: data });
    } catch (error) {
      console.log(error);
    }
  };
  static editcomplaint = async (req, res) => {
    try {
      // console.log(req.params.id)
      const { name, image } = req.data1
      const data = await ComplaintModel.findById(req.params.id);
      // Prevent editing if complaint is delivered
      if (data.status === "Delivered" || data.status === "RWR + Delivered") {
        return res.status(400).send("This complaint cannot be edited as it has already been delivered.");
      }

      const engineer = await EngineerModel.find();
      res.render("user/editcomplaint", { d: data, er: engineer, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };
  static updatecomplaint = async (req, res) => {
    try {
      const id = req.params.id;
      const existingComplaint = await ComplaintModel.findById(id);
      // Prevent updating if complaint is delivered
      if (existingComplaint.status === "Delivered" || existingComplaint.status === "RWR + Delivered") {
        return res.status(400).send("This complaint cannot be updated as it has already been delivered & RWR + Delivered.");
      }

      const {
        name,
        phone,
        email,
        model,
        brand,
        device,
        problem,
        engineer,
        estimated,
        pcharge,
        pdescription,
        scharge,
        status,
        remark,
        mode,
      } = req.body;
      const r = {
        name: name,
        phone: phone,
        email: email,
        model: model,
        brand: brand,
        device: device,
        problem: problem,
        engineer: engineer,
        estimated: estimated,
        pcharge: pcharge,
        pdescription: pdescription,
        scharge: scharge,
        status: status,
        remark: remark,
        mode: mode,
      };
      if (status === "Delivered") {
        r.deliveredAt = new Date(); // Set current date and time
      }
      await ComplaintModel.findByIdAndUpdate(id, r);
      res.redirect("/user/addcomplaint");
    } catch (error) {
      console.log(error);
    }
  };
  static deletecomplaint = async (req, res) => {
    try {
      const data = await ComplaintModel.findByIdAndDelete(req.params.id);
      res.redirect("/user/addcomplaint");
    } catch (error) {
      console.log(error);
    }
  };
  static delivery = async (req, res) => {
    try {
      const {_id: userId, name, image } = req.data1
      const data = await ComplaintModel.find({ user: userId });
      console.log(data);
      const delivered = data.filter((de) => de.status === "Delivered");
      console.log(delivered);
      res.render("user/delivered", { de: delivered, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };
  // Date and Time

  static ok = async (req, res) => {
    try {
      const { _id: userId, name, image } = req.data1
      const data = await ComplaintModel.find({ user: userId });
      console.log(data);
      const ok = data.filter((k) => k.status === "OK");
      console.log(ok);
      res.render("user/ok", { k: ok, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };
  static okedit = async (req, res) => {
    try {
      const { name, image } = req.data1
      console.log(req.params.id)
      const data = await ComplaintModel.findById(req.params.id);
      res.render("user/okedit", { data: data, nm: name, img: image })

    } catch (error) {
      console.log(error);
    }
  }
  static okupdate = async (req, res) => {
    try {
      // const{name,image} = req.data1
      const { status } = req.body;
      const id = req.params.id
      const data = {
        status: status
      };
      if (status === "Delivered") {
        data.deliveredAt = new Date(); // Set current date and time
      }
      await ComplaintModel.findByIdAndUpdate(id, data);

      res.redirect("/user/delivered");
    } catch (error) {
      console.log(error);
    }
  }

  static rwr = async (req, res) => {
    try {
      const {_id: userId, name, image } = req.data1
      const data = await ComplaintModel.find({user: userId });
      // console.log(data);
      const rw = data.filter((r) => r.status === "RWR");
      res.render("user/rwr", { r: rw, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };
  static rwrdelivered = async (req, res) => {
    try {
      const {_id: userId, name, image } = req.data1
      const data = await ComplaintModel.find({user:userId});
      // console.log(data);
      const rwr = data.filter((rd) => rd.status === "RWR + Delivered");
      res.render("user/rwrdelivered", { rd: rwr, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };

  // RWR EDIt Section Start
  static rwredit = async (req, res) => {
    try {
      const {  name, image } = req.data1
      console.log(req.params.id)
      const data = await ComplaintModel.findById(req.params.id);
      res.render("user/rwredit", { data: data, nm: name, img: image })

    } catch (error) {
      console.log(error);
    }
  }
  static rwrupdate = async (req, res) => {
    try {

      const { status } = req.body;
      const id = req.params.id
      const data = {
        status: status
      };
      if (status === "RWR + Delivered") {
        data.deliveredAt = new Date(); // Set current date and time
      }
      await ComplaintModel.findByIdAndUpdate(id, data);

      res.redirect("/user/delivered");
    } catch (error) {
      console.log(error);
    }
  }


  // RWR Edit Section end
  static process = async (req, res) => {
    try {
      const {_id: userId, name, image } = req.data1
      const data = await ComplaintModel.find({user: userId,});
      // console.log(data);
      const process = data.filter((pr) => pr.status === "process");
      res.render("user/process", { pr: process, d: data, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };
  static todaycomplaints = async (req, res) => {
    try {
      const { name, image } = req.data1
      const { _id: userId } = req.data1;
      const engineer = await EngineerModel.find();
      const startOfToday = moment().startOf("day").toDate();
      const endOfToday = moment().endOf("day").toDate();
      const data = await ComplaintModel.find({
        createdAt: { $gte: startOfToday, $lte: endOfToday },
        user: userId 
      });

      res.render("user/todaycomplaint", { d: data, er: engineer, nm: name, img: image });
    } catch (error) {
      console.log(error);
    }
  };
  // Month Wise Report and Date wise report Start

  static reportsPage = async (req, res) => {
    const { name, image } = req.data1;
    res.render("user/reportpage", { nm: name, img: image });
  };

  // Generate and download month-wise report
  static monthWiseReport = async (req, res) => {
    try {
      const { month, year } = req.body;
      const { _id: userId } = req.data1;
      const startDate = moment().year(year).month(month - 1).startOf('month').toDate();
      const endDate = moment().year(year).month(month - 1).endOf('month').toDate();

      const complaints = await ComplaintModel.find({
        createdAt: { $gte: startDate, $lte: endDate },
        user: userId  // Filter by user
      });

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet(`Complaints ${month}-${year}`);

      // Add column headers
      worksheet.columns = [
        { header: 'Job Number', key: 'jobNumber', width: 15 },
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Device', key: 'device', width: 20 },
        { header: 'Problem', key: 'problem', width: 40 },
        { header: 'Engineer', key: 'engineer', width: 30 },
        { header: 'Status', key: 'status', width: 15 },
        { header: 'Created At', key: 'createdAt', width: 20 },
        { header: 'Estimated', key: 'estimated', width: 15 },
      ];

      // Add data
      complaints.forEach(complaint => {
        worksheet.addRow({
          jobNumber: complaint.jobNumber,
          name: complaint.name,
          device: complaint.device,
          problem: complaint.problem,
          engineer: complaint.engineer,
          status: complaint.status,
          createdAt: moment(complaint.createdAt).format('DD-MM-YYYY'),
          estimated: complaint.estimated || 'N/A',
        });
      });

      // Write to buffer and download the file
      const buffer = await workbook.xlsx.writeBuffer();
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename=month-wise-report-${month}-${year}.xlsx`);
      res.send(buffer);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to generate report.");
    }
  };

  // Generate and download date-wise report
  static dateWiseReport = async (req, res) => {
    try {
      const { startDate, endDate } = req.body;
      const start = moment(startDate).startOf('day').toDate();
      const end = moment(endDate).endOf('day').toDate();

      const complaints = await ComplaintModel.find({
        createdAt: { $gte: start, $lte: end },
      });

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet(`Complaints ${startDate} to ${endDate}`);

      // Add column headers
      worksheet.columns = [
        { header: 'Job Number', key: 'jobNumber', width: 15 },
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Device', key: 'device', width: 20 },
        { header: 'Problem', key: 'problem', width: 40 },
        { header: 'Engineer', key: 'engineer', width: 30 },
        { header: 'Status', key: 'status', width: 15 },
        { header: 'Created At', key: 'createdAt', width: 20 },
        { header: 'Estimated', key: 'estimated', width: 15 },
      ];

      // Add data
      complaints.forEach(complaint => {
        worksheet.addRow({
          jobNumber: complaint.jobNumber,
          name: complaint.name,
          device: complaint.device,
          problem: complaint.problem,
          engineer: complaint.engineer,
          status: complaint.status,
          createdAt: moment(complaint.createdAt).format('DD-MM-YYYY'),
          estimated: complaint.estimated || 'N/A',
        });
      });

      // Write to buffer and download the file
      const buffer = await workbook.xlsx.writeBuffer();
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename=date-wise-report-${startDate}-to-${endDate}.xlsx`);
      res.send(buffer);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to generate report.");
    }
  };


  // Month Month Wise Report and Date wise report end

}
module.exports = UserController;
