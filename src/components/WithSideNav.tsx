import { Outlet } from "react-router-dom"
import { SideNavBar } from "./SideNavBar"

export const WithSideNav = () => {

    return (
      <>
        <SideNavBar />
          <Outlet />
      </>
    )
  }