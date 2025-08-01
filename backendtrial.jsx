import React, { useState } from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import CustomerList from './CustomerList';

function BackendTrial() {
    const [form, setForm] = useState({
        name: '',
        address: '',
        emergencyType: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(form);
        let url="http://localhost:5173/add";
    axios.post(url, formData)
      .then(() => {
        alert("Booking successful!");
        setFormData({ name: "", address: "", emergencyType: "", phone: "" });
      })
      .catch(() => {
        alert("Error booking event.");
      });

    };


    return ( <>
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
            <h2>Emergency Request Form</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Emergency Type:</label>
                <input
                    type="text"
                    name="emergencyType"
                    value={form.emergencyType}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Phone Number:</label>
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10,15}"
                />
            </div>
            <button type="submit">Submit</button>
        </form>

        <CustomerList/>
        </>
        
    );
};

export default BackendTrial;