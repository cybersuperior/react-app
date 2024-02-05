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
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.contrastText,
      pointerEvents: "none"
    },
    unSelectedItem: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main
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
          ? theme.palette.primary.main
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
            
            backgroundColor: theme.palette.primary.main,
            boxShadow: "1px 0 20px 0 #3f4d67"
          }
        }}
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 215,
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
        <SideNavBarListItem text={"Table (Coming soon)"} route={"/table"} icon={<TableRows/>}/>
        <SideNavBarListItem text={"Form (Coming soon)"} route={"/form"} icon={<Feed/>}/>
        </List>
      </Drawer>
      
    </div>
  )   
}