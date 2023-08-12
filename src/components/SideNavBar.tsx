import { CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material"

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
            width: 80,
            boxSizing: "border-box",
            position: "relative",
            whiteSpace: "nowrap"
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
        <ListItem
      key={"Dashboard"}
    >
      <ListItemText
        primaryTypographyProps={{ fontSize: "14px" }}
        primary={"Dashboard"}
      />
    </ListItem>
        </List>
      </Drawer>
      
    </div>
  )   
}