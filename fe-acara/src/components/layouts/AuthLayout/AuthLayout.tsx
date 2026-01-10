import PageHead from "@/components/commons/pageHead";
import { Fragment, ReactNode } from "react";

interface PropsTypes {
    children?: ReactNode;
    title?: string;
};

const AuthLayout = (props : PropsTypes) => {
    const {title, children} = props;
    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-screen gap-10 py-10 lg:py-0">
            <Fragment>
                <PageHead title={title} />
                <section className="p-6 max-w-screen-3xl 3xl:container">
                    {children}
                </section>
            </Fragment>
        </div>
    );
};

export default AuthLayout;