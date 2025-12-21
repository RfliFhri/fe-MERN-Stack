import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface PropsTypes {
    status: 'success' | 'failed'
};

const Activation = (props: PropsTypes) => {
    const router = useRouter();
    const {status} = props;
    return (
        <>
            <div className="flex flex-col items-center justify-center w-screen gap-10 p-4">
                <div className="flex flex-col items-center justify-center gap-10">
                    <Image src="/images/general/logo.svg" alt="logo" width={180} height={180}/>
                    <Image 
                        src={ status === 'success' ? "/images/illustration/success.svg" : "/images/illustration/pending.svg"} 
                        alt={status === 'success' ? "success" : "failed"} 
                        width={300} 
                        height={300}
                    />
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="text-3xl font-bold text-danger-500">
                        {status === 'success' ? "Activation Success" : "Activation Failed"}
                    </p>
                    <p className="text-xl font-bold text-default-500">
                        {status === 'success' ? "Thank you for register account in Acara" : "Confirmation code is invalid"}
                    </p>
                    <Button className="mt-4 w-fit" variant="bordered" color="danger" onClick={() => router.push('/')}>
                        Back To Home
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Activation;