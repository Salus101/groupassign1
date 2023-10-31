import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    gender: '',
    courses: {
      apt: false,
      ist: false,
      ir: false,
      bcom: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        courses: {
          ...prevData.courses,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="student-form">
      <p>STUDENT INFORMATION</p>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="idNumber">ID Number:</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <h4>Courses taken:</h4>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="apt"
                checked={formData.courses.apt}
                onChange={handleChange}
              />
              APT
            </label>
            <label>
              <input
                type="checkbox"
                name="ist"
                checked={formData.courses.ist}
                onChange={handleChange}
              />
              IST
            </label>
            <label>
              <input
                type="checkbox"
                name="ir"
                checked={formData.courses.ir}
                onChange={handleChange}
              />
              IR
            </label>
            <label>
              <input
                type="checkbox"
                name="bcom"
                checked={formData.courses.bcom}
                onChange={handleChange}
              />
              BCOM
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
