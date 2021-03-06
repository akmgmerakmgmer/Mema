import { Box, Grid, Snackbar, TextField } from "@material-ui/core"
import Alert from '@material-ui/lab/Alert'
import Heading1 from '../Headings/Heading1'
import image from '../../assets/images/about-9.jpg'
import { useState } from "react"
const Contact1=(props)=>{
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [subject,setSubject]= useState('')
    const [message,setMessage]= useState('')
    const [nameError,setNameError]= useState(null)
    const [emailError,setEmailError]= useState(null)
    const [subjectError,setSubjectError]= useState(null)
    const [messageError,setMessageError]= useState(null)
    const [open,setOpen]= useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name.trim()==='' || name.trim().length<4) {
            setNameError(false)
        }else{
            setNameError(true)
        }
        if(email.trim()==='' || !email.trim().includes('@') || !email.trim().includes('.com')) {
            setEmailError(false)
        }else{
            setEmailError(true)
        }
        if(message.trim()==='') {
            setMessageError(false)
        }else{
            setMessageError(true)
        }
        if(subject.trim()==='') {
            setSubjectError(false)
        }else{
            setSubjectError(true)
        }
        /*console.log(email,nameError,emailError,subjectError,messageError)*/
        if(name.trim()!='' && name.trim().length>4 && email.trim() !='' && email.trim().includes('@') && email.trim().includes('.com') && subject.trim()!='' && message.trim()!=''){
            setOpen(true)
            setName('')
            setEmail('')
            setMessage('')
            setSubject('')
        }
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return(
        <Box className="first-container main-spacing py-md-5 py-3 text-white">
            <Grid container direction="row" justify="flex-end" spacing={4}>
                <Grid item md={6} sm={12}>
                    <Heading1 component={props.component} title="Contact Us" paragraph="I am available for freelance work. Connect with me via phone: 01911111111 or email: admin@example.com"/>
                    <form onSubmit={handleSubmit}>
                        <label for="name" className="d-none">Name</label>
                        <TextField id="name" label="Your Name*" fullWidth color="secondary" variant="outlined" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                        {nameError==false?<Alert className="mt-3" variant="filled" severity="error">Your Name Shouldn't Be Empty or Less than 4 Letters</Alert>:''}
                        <label for="email" className="d-none">Email</label>
                        <TextField id="email" label="Your Email*" fullWidth color="secondary" variant="outlined" type="email" className={!nameError?'mt-3':'mt-4'}  onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        {emailError==false?<Alert className="mt-3" variant="filled" severity="error">Please Enter Your Email Correctly</Alert>:''}
                        <label for="subject" className="d-none">Subject</label>
                        <TextField id="subject" label="Write a Subject*" fullWidth color="secondary" variant="outlined" type="text" className="mt-4" onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                        {subjectError==false?<Alert className="mt-3" variant="filled" severity="error">Please Don't Leave Your Subject Empty</Alert>:''}
                        <label for="textarea" className="d-none">Textarea</label>
                        <TextField id="textarea" multiline rows="7" label="Your Message*" fullWidth color="secondary" variant="outlined" type="text" className="mt-4" onChange={(e)=>setMessage(e.target.value)} value={message}/>
                        {messageError==false?<Alert className="mt-3" variant="filled" severity="error">Please Don't Leave Your Message Empty</Alert>:''}
                        <button className="mt-4 project-button">Send Message</button>
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                            <Alert variant="filled" severity="success">
                            Your email has been sent successfully
                            </Alert>
                        </Snackbar>
                    </form>
                </Grid>
                <Grid item md={6} sm={12}>
                    <img src={image} className="w-100 h-100 image-fit" alt="Contact-Image"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact1