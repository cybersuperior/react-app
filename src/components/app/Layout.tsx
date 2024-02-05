import React from "react"

import { styled } from "@mui/material"

type LayoutProps = {
  children: React.ReactNode
}

const LayoutContainer = styled('div')({
  flexGrow: 1,
  overflow: "auto",
  height: "100vh",
  padding: "24px 48px"
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}