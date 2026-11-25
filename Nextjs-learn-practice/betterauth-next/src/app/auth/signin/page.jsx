"use client"

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { InputGroup } from "@heroui/react";
import { useState } from "react";


const SigninPage = () => {
    const [isVisible, setIsVisible] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("Form submitted with:", userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email, // required, The email address of the user.
            password: userData.password,
            rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)  
            callbackURL: "/"
        });
        console.log("Sign in response:", data, error);

    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Form className="flex w-96 flex-col gap-4  mx-auto bg-gray-500 p-4 rounded-2xl my-3" onSubmit={onSubmit}>
                <h2 className="text-white text-4xl font-bold text-center">Please Signin</h2>

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input name="email" placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField className="" name="password">
                    <Label>Password</Label>
                    <InputGroup>
                        <InputGroup.Input
                            className=""
                            type={isVisible ? "text" : "password"}
                            name="password"
                            placeholder="Your password"
                        />
                        <InputGroup.Suffix className="pe-0">
                            <Button
                                isIconOnly
                                aria-label={isVisible ? "Hide password" : "Show password"}
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Login
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SigninPage;