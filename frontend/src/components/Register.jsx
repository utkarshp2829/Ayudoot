import React, { useState } from 'react';
import './registerpage.css';

// Reusable Input Component
const InputField = ({ type, placeholder, value, onChange }) => (
  <div className="input-group">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

// Custom Logo Component mimicking the design
const BrandLogo = () => (
  <div className="brand-logo-container">
    <svg className="brand-icon" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 42 C 12 30, 8 18, 15 10 C 22 2, 30 10, 30 10 C 30 10, 38 2, 45 10 C 52 18, 48 30, 30 42 Z" stroke="#37519E" strokeWidth="3" fill="transparent"/>
      <rect x="28" y="6" width="16" height="24" rx="8" transform="rotate(45 28 6)" fill="#FFD5D5" stroke="#37519E" strokeWidth="2"/>
      <circle cx="39" cy="11" r="3" fill="#E63946"/>
    </svg>
    <h1 className="brand-text">
      <span className="text-blue">Ayu</span>
      <span className="text-red">Doot</span>
    </h1>
  </div>
);

export default function RegisterPage() {
  const [role, setRole] = useState('Patient');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register attempt:', { role, ...formData });
  };

  return (
    <div className="register-layout">
      {/* LEFT COLUMN: Visual Graphics arranged for Register Page */}
      <div className="graphics-section">
        <div className="graphics-container">
          <div className="dashed-orbit"></div>
          
          {/* Main Illustration Images */}
          <div className="floating-item img-tablet">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop" alt="Digital Health Tablet" />
          </div>
          
          <div className="floating-item img-hospital">
            <img src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=400&auto=format&fit=crop" alt="Hospital Building" />
          </div>
          
          <div className="floating-item img-doctor">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop" alt="Smiling Doctor" />
          </div>

          {/* Floating Icons */}
          <div className="floating-icon icon-document">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#37519E"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          </div>
          <div className="floating-icon icon-pill">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#37519E"><path d="M16 6h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 10h-2v-2h2v2zm0-4h-2V8h2v4z" transform="rotate(45 12 12)"/></svg>
          </div>
          <div className="floating-icon icon-h">H</div>
        </div>
      </div>

      {/* RIGHT COLUMN: Form Section */}
      <div className="form-section">
        <div className="form-card">
          <BrandLogo />

          {/* Role Toggle Switch */}
          <div className="role-selector">
            {['Doctor', 'Patient', 'Admin'].map((r) => (
              <button
                key={r}
                type="button"
                className={`role-btn ${role === r ? 'active' : ''}`}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Registration Form */}
          <form onSubmit={handleRegister}>
            <InputField
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <InputField
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit" className="submit-btn mt-4">
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="login-text">
            Already have an account? <a href="#login">Login now</a>
          </p>
        </div>
      </div>
    </div>
  );
}