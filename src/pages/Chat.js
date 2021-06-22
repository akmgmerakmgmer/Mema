import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { Box, makeStyles } from "@material-ui/core"
import { useState } from 'react';
import { TextField } from "@material-ui/core"
import Alert from '@material-ui/lab/Alert'
import Image from '../../src/assets/images/google-logo-icon-png-transparent-background.png'
import BackgroundContent from '../components/Reusable/BackgroundContent'
import Loading1 from '../components/Loadings/Loading1'
import background from '../assets/images/bg-image-27.jpg'
firebase.initializeApp({
  apiKey: "AIzaSyApehyNDv8b5VAMCpVOAfPHCu1YQEh_-JU",
  authDomain: "chat-9ebf3.firebaseapp.com",
  projectId: "chat-9ebf3",
  storageBucket: "chat-9ebf3.appspot.com",
  messagingSenderId: "600293172754",
  appId: "1:600293172754:web:1f000252d46a4b793f5acb"
})
const useStyles= makeStyles({
    back:{
        background:`url(${background})`,
        height:'100vh',
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'relative'
    }
    
})
const auth = firebase.auth()
const firestore = firebase.firestore()

    const Chat = ()=>{
        const classes=useStyles()
        const[user]=useAuthState(auth)
        return (
            <div className="first-container">
                <Box className={classes.back}>
                    <BackgroundContent title="Chat With Us." button="Axios Tasks" link="/axios"/>
                </Box>
                <div className="chat-container main-spacing py-5">
                    <div className="text-right">
                    <SignOut/>
                    </div>
                    {user?<ChatRoom/>:<SignIn/>}   
                </div>             
            </div>
        )
        function SignIn(){
            const signInWithGoogle=()=>{
                    const provider = new firebase.auth.GoogleAuthProvider();
                    auth.signInWithPopup(provider);
                }
                return(
                    <div className='text-center'>
                        <div>
                            <div className="button-container">
                                <img src={Image} alt="Google"/>
                                <button className="signin" onClick={signInWithGoogle}>Sign in with Google</button>
                            </div>
                        </div>
                    </div>
                )
            }
            function SignOut(){
            return auth.currentUser&&(
                <button className="signout-button mb-5" onClick={()=>auth.signOut()}>Sign Out</button>
            )
            }
            function ChatRoom(){
            const messageRef = firestore.collection('messages')
            const query = messageRef.orderBy('createdAt').limit(25)
            const [messages] = useCollectionData(query,{idField:'id'})
            const [formValue,setFormValue]=useState('')
            const [error,setError]=useState(false)
            const [loading,setLoading]=useState(false)
            const sendMessage=async(e)=>{
                e.preventDefault()
                const{uid,photoURL} = auth.currentUser
                if(formValue==''){
                    setError(true)
                }else{
                    setLoading(true)
                    setFormValue('')
                    await messageRef.add({
                text:formValue,
                createdAt:firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                photoURL
                })
                setLoading(false)
                setError(false)
                }
                
            }
            return(
                <div>
                    <div>{messages && messages.map(msg=><ChatMessage key={msg.id} message={msg}/>)}</div>
                    <form onSubmit={sendMessage}>
                        {loading?<Loading1/>:null}
                        <TextField label="Your Message*" fullWidth color="secondary" type="text" className="mt-5 mb-1" onChange={(e)=>setFormValue(e.target.value)} value={formValue}/>
                        {error?<Alert className="mt-3" variant="filled" severity="error">Your Message Can't Be Empty</Alert>:null}
                        <button className="default-button mt-4 project-button chat-button" type='submit'>Send</button>
                    </form>
                </div>
            )
            }
            function ChatMessage(props){
            const {text,uid,photoURL}=props.message
            const messageClass = uid ===  auth.currentUser.uid?'sent':'sent received'
            return(
                <div className={messageClass}>
                    <img src={photoURL} alt="Avatar"/>
                    <p>{text}</p>
                </div>
            )
            }
}

export default Chat