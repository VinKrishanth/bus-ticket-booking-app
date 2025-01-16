import React, { useState } from 'react';
import Button from '../button/Button';
import TextInput from '../input/TextInput';
import axiosInstance from '../../utils/axiosConfig.js'; 

export default function BookingForm() {
    const [formData, setFormData] = useState({
        user_name: '',
        mobile_number: '',
        nic_number: '',
        email: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const inputDataChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formErrors = {};

        if (!formData.user_name) {
            formErrors.user_name = 'Name is required';
        }
        if (!formData.mobile_number) {
            formErrors.mobile_number = 'Mobile number is required';
        }
        if (!formData.nic_number) {
            formErrors.nic_number = 'NIC/Passport number is required';
        }
        if (!formData.email) {
            formErrors.email = 'Email is required';
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            const response = await axiosInstance.post('/api/booking', formData); 
            setSuccessMessage(response.data.message);
            setErrorMessage('');
            setFormData({
                user_name: '',
                mobile_number: '',
                nic_number: '',
                email: '',
            });
            setErrors({});
        } catch (err) {
            setErrorMessage('Error submitting form');
            setSuccessMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="sm:mt-8 mt-4 sm:border-2 sm:p-8 p-0 space-y-2">
            <h2 className="sm:text-2xl text-xl tracking-wider align-text-top cursor-pointer font-semibold sm:text-left text-center sm:pb-0 pb-2">
                Your Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-6">
                <TextInput
                    id="user_name"
                    name="user_name"
                    label="Name"
                    placeholder="Enter your name"
                    value={formData.user_name} 
                    onChange={inputDataChange} 
                    error={errors.user_name}
                />
                <TextInput
                    id="mobile_number"
                    name="mobile_number"
                    label="Mobile Number"
                    placeholder="701234567"
                    value={formData.mobile_number} 
                    onChange={inputDataChange} 
                    error={errors.mobile_number}
                    type='number'
                />
                <TextInput
                    id="nic_number"
                    name="nic_number"
                    label="NIC/Passport Number"
                    placeholder="012345678V"
                    value={formData.nic_number} 
                    onChange={inputDataChange} 
                    error={errors.nic_number}
                />
                <TextInput
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="name@example.lk"
                    value={formData.email} 
                    onChange={inputDataChange} 
                    error={errors.email}
                    type='email'
                />
            </div>

            <div className="flex justify-end items-center py-4">
                <Button
                    label="Proceed to Pay"
                    className="bg-tertiary"
                    type="submit"
                />
            </div>
        </form>
    );
}
