"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import logo from "@/assets/logo.png"

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegisterFunc = (data) => {
        console.log(data);

    }

    // console.log(watch("email"));

    return (
        <div className='min-h-[70vh] flex justify-center items-center'>
            <div>
                <form onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <Image src={logo} width={200} height={200} alt='Logo' className='mx-auto' loading="eager"/>
                        <h2 className='text-2xl text-center my-5 font-bold'>Register your account</h2>
                        <label className="label">Name</label>
                        <input type="text" className="input" {...register('name', { required: "Name field is required" })} placeholder="Name" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        <label className="label">Photo url</label>
                        <input type="text" className="input" {...register('photo', { required: "Photo url is required" })} placeholder="photo url" />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                        <label className="label">Email</label>
                        <input type="email" className="input" {...register('email', { required: "Email field is required" })} placeholder="Email" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        <label className="label">Password</label>
                        <input type="password" className="input" {...register('password', { required: "Password field is required" })} placeholder="Password" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        <button className="btn btn-neutral mt-4">Register</button>
                        <p>Have account. <Link href={`/login`} className='text-blue-400'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;