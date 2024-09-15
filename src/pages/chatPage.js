import React from "react"
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import './chatPage.css'
function chatPage(){

    const steps=[
        {
        id:"Greet",
        message:'Hello welcome to our website',
        trigger:'Ask Name'
        },
        {
            id:'Ask Name',
            message:'Please enter your name',
            trigger:'wating1'
        },
        {
            id:'wating1',
            user:true,
            trigger:'Name'
        },
        {
            id:'Name',
            message:'H1 {previousvalue}, Please select your issue',
            trigger:'issue'
        },
        {
            id:'issue',
            options:[{value:'React',label:'React',trigger:'React'},
                {value:'Angular',label:'Angular',trigger:'Angular'},
            ],
        },
        {
            id:'React',
            message:'Thanks for telling your react issue',
            end:true
        },
        {
            id:'Angular',
            message:'Thanks for telling your Angular issue',
            end:true
        }
    ];

    return(
        <>
        <div className="divChat">
           <Segment>
            <ChatBot steps={steps} />
            </Segment>  
            </div>       
        </>
    )
}
export default chatPage

