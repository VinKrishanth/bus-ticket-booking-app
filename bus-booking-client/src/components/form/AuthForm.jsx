import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthInput from '../input/AuthInput';
import AuthInputIcon from '../input/AuthInputIcon';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AuthForm({ authMethod }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(
        authMethod === 'register'
            ? { user_name: '', email: '', password: '', repeat_password: '' }
            : { user_name: '', password: '' }
    );

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [errors, setErrors] = useState({});
    
    
    useEffect(() => {
        if (authMethod === 'register') {
            setFormData({ user_name: '', email: '', password: '', repeat_password: '' });
        } else {
            setFormData({ user_name: '', password: '' });
        }
    }, [authMethod]);

    
    const inputDataChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        let formErrors = {};
    
        if (!formData.user_name.trim()) {
            formErrors.user_name = 'Name is required';
        }
        if (!formData.password) {
            formErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters';
        }
    
        if (authMethod === 'register') {
            if (!formData.email.trim()) {
                formErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                formErrors.email = 'Invalid email format';
            }
    
            if (!formData.repeat_password) {
                formErrors.repeat_password = 'Confirm password is required';
            } else if (formData.password !== formData.repeat_password) {
                formErrors.repeat_password = 'Passwords do not match';
            }
        }
    
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
    
        try {
            let response;
            if (authMethod === 'register') {
                response = await axiosInstance.post('/api/customer/register', formData);
                toast.success('Registration successful! Redirecting to login...', { position: 'top-right' });
                setTimeout(() => navigate('/bus-booking/login'), 2000); 
            } else {
                response = await axiosInstance.post('/api/customer/login', {
                    user_name: formData.user_name,
                    password: formData.password,
                });
                toast.success('Login successful! Redirecting...', { position: 'top-right' });
                setTimeout(() => navigate('/bus-booking/dashboard'), 2000);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong!', { position: 'top-right' });
        }
    };

    return (
        <main className="flex-1 flex items-center justify-center p-4 shadow-lg">
            <div className="rounded-2xl p-8 w-full max-w-md">
                {authMethod === 'register' ? (
                    <h1 className="text-3xl font-semibold mb-8 sm:text-left text-center">
                        Create your QTechy Account
                    </h1>
                ) : (
                    <div className="flex justify-start items-start flex-col">
                        <h1 className="text-3xl font-bold mb-2">Sign in</h1>
                        <p className="text-gray-600 mb-6">Enter your QTechy Account details.</p>
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <AuthInput
                        id="user_name"
                        name="user_name"
                        label="User Name"
                        placeholder="Enter your name"
                        value={formData.user_name}
                        onChange={inputDataChange}
                        error={errors.user_name}
                        key={1}
                    />

                    {authMethod === 'register' && (
                        <AuthInput
                            id="email"
                            name="email"
                            label="Email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={inputDataChange}
                            error={errors.email}
                            key={2}
                        />
                    )}

                    <AuthInputIcon
                        id="password"
                        name="password"
                        label="Password"
                        placeholder="********"
                        value={formData.password}
                        onChange={inputDataChange}
                        error={errors.password}
                        key={3}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />

                    {authMethod === 'register' ? (
                        <AuthInputIcon
                            id="repeat_password"
                            name="repeat_password"
                            label="Repeat Password"
                            placeholder="********"
                            value={formData.repeat_password}
                            onChange={inputDataChange}
                            error={errors.repeat_password}
                            key={4}
                            showPassword={showRepeatPassword}
                            setShowPassword={setShowRepeatPassword}
                        />
                    ) : (
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="keep-signed"
                                className="h-4 w-4 text-[#6d4aff] focus:ring-[#6d4aff] border-gray-300 rounded"
                            />
                            <div className="ml-2">
                                <label htmlFor="keep-signed" className="text-sm text-gray-700">
                                    Keep me signed in
                                </label>
                                <p className="text-xs text-gray-500">
                                    Recommended on trusted devices.{' '}
                                    <a href="#" className="text-[#6d4aff] hover:underline">
                                        Why?
                                    </a>
                                </p>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#6d4aff] text-white py-3 rounded-lg hover:bg-[#5b3df5] transition-colors"
                    >
                        {authMethod === 'register' ? 'Create account' : 'Sign in'}
                    </button>
                </form>

                {authMethod === 'register' ? (
                    <>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link to="/bus-booking/login" className="text-[#6d4aff] hover:underline">
                                    Sign in
                                </Link>
                            </p>
                        </div>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            By creating a QTechy account, you agree to our{' '}
                            <a href="#" className="text-[#6d4aff] hover:underline">
                                terms and conditions
                            </a>
                        </div>
                    </>
                ) : (
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            New to QTechy?{' '}
                            <Link to="/bus-booking/register" className="text-[#6d4aff] hover:underline">
                                Create account
                            </Link>
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default AuthForm;
