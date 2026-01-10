import PageHead from "@/components/commons/pageHead";
import { ReactNode, useState } from "react";
import LayoutSidebar from "./layoutSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DasboardLayout.constants";
import { Navbar, NavbarMenuToggle } from "@nextui-org/react";

interface PropsType {
    children: ReactNode;
    title?: string;
    type?: string;
    description?: string;
};

const DashboardLayout = (props: PropsType) => {
    const {children, title, type = 'admin', description} = props;
    const [open, setOpen] = useState(false);
    return(
        <>
            <PageHead title={title} />
            <div className="flex max-w-screen-3xl 3xl:container">
                <LayoutSidebar sidebarItems={type === 'admin' ? SIDEBAR_ADMIN : SIDEBAR_MEMBER} isOpen={open} />
                <div className="w-full h-screen p-8 overflow-y-auto">
                    <Navbar className="flex justify-between px-0 bg-transparent" isBlurred={false} classNames={{ wrapper: "p-0" }} position="static">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <NavbarMenuToggle aria-label={open ? "Close Menu" : "Open Menu"} onClick={() => setOpen(!open)} className="lg:hidden"></NavbarMenuToggle>
                    </Navbar>
                    <p className="mb-4 text-small">{ description }</p>
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;