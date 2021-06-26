import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import ContactsIcon from '@material-ui/icons/Contacts';
const drawerWidth=250
const useStyles=makeStyles({
    logo:{
        fontWeight:900,
        flexGrow:1,
        fontSize:28,
    },
    drawer:{
        width:drawerWidth,
    },
    listItem:{
        fontSize:15,
        fontWeight:600,
        transition:'0.3s',
        '&:hover':{
            color:'#F9004D !important'
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    button:{
        '&:hover':{
            background:'rgba(0,0,0,0.2)',
        },
    },
    icon:{
        color:'rgba(255,255,255,0.75)'
    },
    drawerItems:{
        color:'rgba(0,0,0,0.7)',
        '&:hover':{
            color:'rgba(0,0,0,0.7)',
        },
    },
    activeClass:{
        color:'#F9004D'
    }
})

const Navbar =(props)=>{
    const classes = useStyles()
    const[drawer,setDrawer]=useState(false)
    const[navbar,setNav]=useState(false)
    const[activeHome,setActiveHome]=useState('')
    const[activeServices,setActiveServices]=useState('')
    const[activeChat,setActiveChat]=useState('')
    const[activeAxios,setActiveAxios]=useState('')
    const[activeContact,setActiveContact]=useState('')
    const[changeActive,setChangeActive]=useState('')
    useEffect(()=>{
        if(window.location.pathname==='/'){
            setActiveHome('#F9004D')
        }else{
            setActiveHome('rgba(255,255,255,0.75')
        }
        if(window.location.pathname==='/services'){
            setActiveServices('#F9004D')
        }else{
            setActiveServices('rgba(255,255,255,0.75')
        }
        if(window.location.pathname==='/chat'){
            setActiveChat('#F9004D')
        }else{
            setActiveChat('rgba(255,255,255,0.75')
        }
        if(window.location.pathname==='/axios'){
            setActiveAxios('#F9004D')
        }else{
            setActiveAxios('rgba(255,255,255,0.75')
        }
        if(window.location.pathname==='/contact'){
            setActiveContact('#F9004D')
        }else{
            setActiveContact('rgba(255,255,255,0.75')
        }
    },[changeActive])
    const menuItems=[
        {
            id:1,
            title:'Home',
            path:'/',
            icon:<HomeIcon color="primary"/>,
            color: activeHome
        },
        {
            id:2,
            title:'Services',
            path:'/services',
            icon:<RoomServiceIcon color="primary"/>,
            color:activeServices
        },
       
        {
            id:3,
            title:'Chat',
            path:'/chat',
            icon:<MenuBookIcon color="primary"/>,
            color:activeChat
        },
        {
            id:4,
            title:'Axios',
            path:'/axios',
            icon:<ViewAgendaIcon color="primary"/>,
            color:activeAxios
        },
        {
            id:5,
            title:'Contact',
            path:'/contact',
            icon:<ContactsIcon color="primary"/>,
            color:activeContact
        },
    ]
    const activeLink=(path)=>{
        setChangeActive(path)
    }
    const closeDrawer=()=>{
        setDrawer(false)
    }
    const openDrawer=()=>{
        setDrawer(true)
    }
    
    const scrolling=()=>{
      if(window.scrollY>=80){
          setNav(true)
      }else{
          setNav(false)
      }
    }
    window.addEventListener('scroll',scrolling)
    return(
        <header>
            <AppBar className={navbar?'first-container shadow':''} position="fixed" color="transparent" elevation={0}>
                <Toolbar className="my-2 mx-md-5 mx-3">
                    <Typography className={`text-white ${classes.logo}`} variant="h5" component="h1">Mema.</Typography>
                    <ul className="d-md-flex flex-row d-none">
                        {menuItems.map((item)=>(
                            <li key={item.id}>
                                <Link className={`mx-3 pb-1 ${classes.listItem}`} style={{color:`${item.color}`}} to={item.path} onClick={()=>activeLink(item.path)}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <IconButton onClick={openDrawer} edge="start" className={`drawer-icon d-md-none ${classes.icon}`} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} anchor="right" open={drawer} onClose={closeDrawer}>
                <List>
                    {menuItems.map((item)=>(
                        <Link to={item.path} key={item.icon}>
                            <ListItem button>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText className={classes.drawerItems} color="primary">{item.title}</ListItemText> 
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <div>
                { props.children }
            </div>
        </header>
    )
}
export default Navbar