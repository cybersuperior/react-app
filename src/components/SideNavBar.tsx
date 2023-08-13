import { Dashboard } from "@mui/icons-material"
import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const SideNavBar = () => {
  const navigate = useNavigate()

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
            width: 180,
            boxSizing: "border-box",
            whiteSpace: "nowrap",
            height: '100vh'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{marginTop: '20px'}}>
        <ListItemButton 
      key={"Dashboard"}
      onClick={() => { navigate("")}}
      divider
    >
      <ListItemIcon
        sx={{
          width: "12px",
          minWidth: "30px"
        }}
      >
        <Dashboard/>
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{ fontSize: "14px" }}
        primary={"Dashboard"}
      />
    </ListItemButton>
        </List>
      </Drawer>
      
    </div>
  )   
}