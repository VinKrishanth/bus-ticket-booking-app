import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthInput from '../input/AuthInput';
import AuthInputIcon from '../input/AuthInputIcon';

function AuthForm({authMethod}) {
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        password: '',
        repeat_password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

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
        if (!formData.email) {
            formErrors.email = 'Email is required';
        }
        if (!formData.password) {
            formErrors.password = 'Password  is required';
        }
        
        if (!formData.repeat_password) {
            formErrors.repeat_password = 'Conform password  is required';
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        console.log(formData);

        // try {
        //     const response = await axiosInstance.post('/api/booking', formData); 
        //     setSuccessMessage(response.data.message);
        //     setErrorMessage('');
        //     setFormData({
        //         user_name: '',
        //         mobile_number: '',
        //         nic_number: '',
        //         email: '',
        //     });
        //     setErrors({});
        // } catch (err) {
        //     setErrorMessage('Error submitting form');
        //     setSuccessMessage('');
        // }
    };
    
    
  return (
    <main className="flex-1 flex items-center justify-center p-4 shadow-lg">
        <div className="rounded-2xl  p-8 w-full max-w-md">
            {
                authMethod === 'register' ? (
                    <h1 className={`text-3xl font-semibold mb-8 sm:text-left text-center tracking-normal leading-8`}>
                        Create your QTechy Account
                    </h1>
                ) : <div className='flex justify-start items-start flex-col'>
                        <h1 className="text-3xl font-bold mb-2">Sign in</h1>
                        <p className="text-gray-600 mb-6">Enter your QTechy Account details.</p>
                    </div>
            }
            <form 
                className="space-y-6" 
                onSubmit={handleSubmit}
            >
                <AuthInput
                    id={`user_name`}
                    name={`user_name`}
                    label="user Name"
                    placeholder={'name'}
                    value={formData.user_name} 
                    onChange={inputDataChange} 
                    error={errors.user_name}
                    key={1}
                />
                {
                     authMethod === 'register' && <AuthInput
                     id={`email`}
                     name={`email`}
                     label="eMail"
                     placeholder={'example@gmail.com'}
                     value={formData.email} 
                     onChange={inputDataChange} 
                     error={errors.email}
                     key={2}
                 />
                }
                

                <AuthInputIcon
                    id={`password`}
                    name={`password`}
                    label="Password"
                    placeholder={'* * * * * * * *'}
                    value={formData.password} 
                    onChange={inputDataChange} 
                    error={errors.password}
                    key={3}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
                {
                    authMethod === 'register' ? <AuthInputIcon
                        id={`repeat_password`}
                        name={`repeat_password`}
                        label="Repeat password"
                        placeholder={'* * * * * * * *'}
                        value={formData.repeat_password} 
                        onChange={inputDataChange} 
                        error={errors.repeat_password}
                        key={4}
                        showPassword={showRepeatPassword}
                        setShowPassword={setShowRepeatPassword}
                    />
                    : 
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
                            Recommended on trusted devices. <a href="#" className="text-[#6d4aff] hover:underline">Why?</a>
                            </p>
                        </div>
                    </div>
                }

                <button
                    type={`submit`}
                    className={`w-full bg-[#6d4aff] text-white py-3 rounded-lg hover:bg-[#5b3df5] transition-colors`}
                >
                    {
                        authMethod === 'register' ? 'Create account' : 'Sign in'
                    }  
                </button>
            </form>


            {
                 authMethod === 'register' ? (
                    <>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                        Already have an account? <Link to="/bus-booking/login" className="text-[#6d4aff] hover:underline">Sign in</Link>
                        </p>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        By creating a QTechy account, you agree to our{' '}
                        <a href="#" className="text-[#6d4aff] hover:underline">terms and conditions</a>
                    </div>
                    </>
                 ): (
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            New to QTechy? <Link to="/bus-booking/register" className="text-[#6d4aff] hover:underline">Create account</Link>
                        </p>
                    </div>
                 )
            }
        </div>
    </main>
  )
}

export default AuthForm