import { Dashboard, Feed, TableRows } from "@mui/icons-material"
import { CssBaseline, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"

type SideNavBarListItemProps = {
  text: string;
  route: string;
  icon: JSX.Element;
}

export const SideNavBarListItem = ({text, route, icon}: SideNavBarListItemProps) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const classes = {
    selectedItem: {
      color: "#27293d",
      backgroundColor: theme.palette.primary.contrastText,
      pointerEvents: "none"
    },
    unSelectedItem: {
      color: theme.palette.primary.contrastText,
      backgroundColor: "#27293d"
    }
  }

  return (
    <ListItemButton 
    key={text}
    onClick={() => { navigate(route)}}
    divider
    sx={
      location.pathname === route
        ? classes.selectedItem
        : classes.unSelectedItem
    }
  >
    <ListItemIcon
      sx={{
        width: "12px",
        minWidth: "30px",
        color:
        location.pathname === route
          ? "#27293d"
          : theme.palette.primary.contrastText
      }}
    >
    {icon}
    </ListItemIcon>
    <ListItemText
      primaryTypographyProps={{ fontSize: "16px" }}
      primary={text}
    />
  </ListItemButton>
  )
}


export const SideNavBar = () => {
  const theme = useTheme()
  return (
    <div style={{display: "flex", backgroundColor: theme.palette.primary.main}}>
    
    <CssBaseline />
    <Drawer
        PaperProps={{
          sx: {
            
            backgroundColor: "#27293d",
            boxShadow: "1px 0 20px 0 #3f4d67"
          }
        }}
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 180,
            boxSizing: "border-box",
            whiteSpace: "nowrap",
            height: '100vh',
            position: 'relative'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{marginTop: '60px'}}>
        <SideNavBarListItem text={"Dashboard"} route={"/dashboard"} icon={<Dashboard/>}/>
        <SideNavBarListItem text={"Table"} route={"/table"} icon={<TableRows/>}/>
        <SideNavBarListItem text={"Form"} route={"/form"} icon={<Feed/>}/>
        </List>
      </Drawer>
      
    </div>
  )   
}