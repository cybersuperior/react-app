import React from "react"

import { styled, useTheme } from "@mui/material"

type LayoutProps = {
  children: React.ReactNode
}

const LayoutContainer = styled('div')({
  flexGrow: 1,
  overflow: "auto",
  height: "100vh",
  padding: "24px 48px"
});

const LayoutInnerContainer = styled('div')(({ theme }) => (({
  ...theme.mixins.toolbar, 
  minHeight: "26px !important" 
})));

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <LayoutInnerContainer>
      {children}
      </LayoutInnerContainer>
    </LayoutContainer>
  )
}