import React from "react";
import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Header from "@/components/header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar isAdmin={true}/>
      <SidebarInset>
        <Header />
        {/* <div className="flex flex-1 flex-col gap-4 p-4"> */}
        {children}

        {/* </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;