"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import logo from "@/assets/logo.png"

const LoginPage = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm()

    const handleLoginFunc = (data) => {
      console.log(data);

    }

    // console.log(watch("email"));

    return (
        <div className='min-h-[70vh] flex justify-center items-center'>
            <div>
                <form onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <Image src={logo} width={200} height={200} alt='Logo' className='mx-auto' loading="eager"/>
                        <h2 className='text-2xl text-center my-5 font-bold'>Log in your account</h2>
                        <label className="label">Email</label>
                        <input type="email" className="input" {...register('email', {required: "Email field is required"})} placeholder="Email" />
                         {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        <label className="label">Password</label>
                        <input type="password" className="input" {...register('password', {required: "Password field is required"})} placeholder="Password" />
                         {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p>Don't have account. <Link href={`/register`} className='text-blue-400'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;