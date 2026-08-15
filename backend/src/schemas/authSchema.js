const { z } = require('zod');

// ---- Login ----

const doctorLoginSchema = z.object({
  D_ID: z
    .string({ required_error: 'D_ID is required' })
    .regex(/^D_[0-9]+$/, 'D_ID must match the format D_100001'),
  password: z
    .string({ required_error: 'password is required' })
    .min(8, 'password must be at least 8 characters'),
});

const patientLoginSchema = z.object({
  P_ID: z
    .string({ required_error: 'P_ID is required' })
    .regex(/^P_[0-9]+$/, 'P_ID must match the format P_100001'),
  password: z
    .string({ required_error: 'password is required' })
    .min(8, 'password must be at least 8 characters'),
});

// ---- Registration (test-account creation only) ----

const doctorRegisterSchema = z.object({
  fullName: z.string({ required_error: 'fullName is required' }).min(1),
  email: z.string({ required_error: 'email is required' }).email('invalid email'),
  password: z
    .string({ required_error: 'password is required' })
    .min(8, 'password must be at least 8 characters'),
  specialization: z.string({ required_error: 'specialization is required' }).min(1),
});

const patientRegisterSchema = z.object({
  fullName: z.string({ required_error: 'fullName is required' }).min(1),
  email: z.string({ required_error: 'email is required' }).email('invalid email'),
  password: z
    .string({ required_error: 'password is required' })
    .min(8, 'password must be at least 8 characters'),
  dateOfBirth: z
    .string({ required_error: 'dateOfBirth is required' })
    .refine((val) => !Number.isNaN(Date.parse(val)), 'dateOfBirth must be a valid date (YYYY-MM-DD)'),
});

module.exports = {
  doctorLoginSchema,
  patientLoginSchema,
  doctorRegisterSchema,
  patientRegisterSchema,
};