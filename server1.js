const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Define the Employee schema and model
const employeeSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true, maxlength: 4 },
  emailid: { type: String, required: true },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  isverified: { type: Boolean, required: true },
  employeeId: { type: String, required: true },
  mobile: { type: String, required: true },
  department: { type: String, required: true }
});

const Employee = mongoose.model('Employee', employeeSchema);

// Define the API route to create a new employee
app.post('/api/employees', async (req, res) => {
  const { firstname, lastname, emailid, gender, country, isverified, employeeId, mobile, department } = req.body;

  const newEmployee = new Employee({
    firstname,
    lastname,
    emailid,
    gender,
    country,
    isverified,
    employeeId,
    mobile,
    department
  });

  try {
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
