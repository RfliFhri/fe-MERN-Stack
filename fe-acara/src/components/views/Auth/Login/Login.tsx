import { Button, Card, CardBody, Input, Spinner } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useLogin from "./useLogin";
import { cn } from "@/utils/cn";

const Login = () => {
    const {isVisible, toggleVisible, control, handleSubmit, handleLogin, isPendingLogin, errors} = useLogin();
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full gap-10 lg:flex-row lg:gap-20">
                <div className="flex flex-col items-center justify-center w-full gap-10 lg:w-1/3">
                    <Image src="/images/general/logo.svg" alt="logo" width={180} height={180}/>
                    <Image src="/images/illustration/login.svg" className="w-2/3 lg:w-full" alt="login" width={1024} height={1024}/>
                </div>
                <Card>
                    <CardBody className="p-8">
                        <h2 className="text-2xl font-bold text-danger-500">Login</h2>
                        <p className="mb-4 mt-2 text-small">Dont have an account?&nbsp;
                            <Link href="/auth/register" className="font-semibold text-danger-400">Register here</Link>
                        </p>

                        {errors.root && (
                            <p className="mb-2 font-medium text-xs text-danger">
                                {errors?.root?.message}
                            </p>
                        )}

                        <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit(handleLogin)}>
                            <Controller name="identifier" control={control} render={
                                ({field}) => <Input {...field} type="text" label="Email / Username" variant="bordered" autoComplete="off" 
                                isInvalid={errors.identifier !== undefined} errorMessage={errors.identifier?.message} />
                            }/>
                            <Controller name="password" control={control} render={
                                ({field}) => <Input 
                                {...field} 
                                type={isVisible ? "text" : "password"}
                                label="Password" 
                                variant="bordered" 
                                autoComplete="off" 
                                isInvalid={errors.password !== undefined} 
                                errorMessage={errors.password?.message}
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisible}>
                                        {isVisible ? (
                                        <FaEye className="text-xl pointer-events-none text-default-400" /> 
                                        ) : (
                                        <FaEyeSlash className="text-xl pointer-events-none text-default-400"/> 
                                        )}
                                    </button>
                                }/>
                            }/>
                            
                            <Button color="danger" size="lg" type="submit">
                                {isPendingLogin ? <Spinner color="white" size="sm" /> : "Masuk"} 
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default Login;