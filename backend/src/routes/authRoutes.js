const express = require('express');

const { validate } = require('../middleware/validate');
const { firebaseAuthMiddleware } = require('../middleware/authMiddleware'); // Updated to authMiddleware
const {
  doctorLoginSchema,
  patientLoginSchema,
  doctorRegisterSchema,
  patientRegisterSchema,
} = require('../schemas/authSchema'); // Updated to authSchema (singular)
const authController = require('../controllers/authController');

const router = express.Router();

// Registration
router.post('/doctor/register', validate(doctorRegisterSchema), authController.doctorRegister);
router.post('/patient/register', validate(patientRegisterSchema), authController.patientRegister);

// Login
router.post('/doctor/login', validate(doctorLoginSchema), authController.doctorLogin);
router.post('/patient/login', validate(patientLoginSchema), authController.patientLogin);

// Current user
router.get('/me', firebaseAuthMiddleware, authController.getMe);

// Logout
router.post('/logout', authController.logout);

module.exports = router;