import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as yup from 'yup';
import { ILogin } from "@/types/Auth";
import authServices from "@/services/auth.service";

const loginSchema = yup.object().shape({
    fullName: yup.string().required("Please input your fullname"),
    username: yup.string().required("Please input your username"),
    email: yup.string().email("Email format nnot valid").required("Please input your email"),
    password: yup.string().min(8, "Minimal 8 Characters").required("Please input your password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), ""], "Password not match").required("Please input your password confirmation"),
});

const useLogin = () => {
    const router = useRouter();
    const [visiblePassword, setVisiblePassword] = useState({
            password: false,
            passwordConfirmation: false,
        });
    
    const handleVisiblePassword = (key: "password") => {
        setVisiblePassword({
            ...visiblePassword,
            [key]: !visiblePassword[key],
        });
    };
    const {control, handleSubmit, formState: {errors}, reset, setError} = useForm({
        resolver: yupResolver(loginSchema)
    });

    const registerService = async (payload: ILogin) => {
        const result = await authServices.login(payload);
        return result;
    };

    const {mutate: mutateRegister, isPending: isPendingRegister} = useMutation({
        mutationFn: registerService,
        onError(error) {
            setError("root", {
                message: error.message,
            });
        },
        onSuccess: () => {
            router.push('/auth/register/success')
            reset();
        },
    });

    const handleRegister = (data: ILogin) => mutateRegister(data);

    return{
        visiblePassword,
        handleVisiblePassword,
        control,
        handleSubmit,
        handleRegister,
        isPendingRegister,
        errors,
    };
};

export default useLogin;