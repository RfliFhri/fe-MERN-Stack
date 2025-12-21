import PageHead from "@/components/commons/pageHead";
import { Fragment, ReactNode } from "react";

interface PropsTypes {
    children?: ReactNode;
    title?: string;
};

const AuthLayout = (props : PropsTypes) => {
    const {title, children} = props;
    return (
        <Fragment>
            <PageHead title={title} />
            <section className="p-6 max-w-screen-3xl 3xl:container">
                {children}
            </section>
        </Fragment>
    );
};

export default AuthLayout;