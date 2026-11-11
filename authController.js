// authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerUser = async (req, res) => {
try {
const { username, password, age, isNewToAyush } = req.body;
const hashedPassword = await bcrypt.hash(password, 10);
const user = await User.create({
username,
age,
is_new_to_ayush: isNewToAyush,
Core Backend Structure
Key Features Implementation
password_hash: hashedPassword,
role: 'patient'
});
res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
res.status(500).json({ error: 'Registration failed' });
}
};
. Appointment Management
// appointmentController.js
const createAppointment = async (req, res) => {
try {
const { patientId, doctorId, date, time, reason } = req.body;
const appointment = await Appointment.create({
patient_id: patientId,
doctor_id: doctorId,
preferred_date: date,
preferred_time: time,
reason: reason
});
res.status(201).json(appointment);
} catch (error) {
res.status(500).json({ error: 'Appointment creation failed' });
}
};