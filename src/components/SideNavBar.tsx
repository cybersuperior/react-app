import { Dashboard, Feed, TableRows } from "@mui/icons-material"
import { CssBaseline, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"

type SideNavBarListItemProps = {
  text: string;
  route: string;
  icon: JSX.Element;
}

export const SideNavBarListItem = ({text, route, icon}: SideNavBarListItemProps) => {
  const navigate = useNavigate()

  return (
    <ListItemButton 
    key={text}
    onClick={() => { navigate(route)}}
    divider
  >
    <ListItemIcon
      sx={{
        width: "12px",
        minWidth: "30px"
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
  return (
    <div style={{display: "flex"}}>
    
    <CssBaseline />
    <Drawer
        PaperProps={{
          sx: {
            color: "#a9b7d0",
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
        <List sx={{marginTop: '20px'}}>
        <SideNavBarListItem text={"Dashboard"} route={"/dashboard"} icon={<Dashboard/>}/>
        <SideNavBarListItem text={"Table (Coming soon)"} route={"/table"} icon={<TableRows/>}/>
        <SideNavBarListItem text={"Form (Coming soon)"} route={"/form"} icon={<Feed/>}/>
        </List>
      </Drawer>
      
    </div>
  )   
}