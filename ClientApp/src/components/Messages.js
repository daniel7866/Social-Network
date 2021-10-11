import React, {useEffect, useState} from 'react';
import {useMessages} from "../hooks/useMessages";
import { useSelector } from 'react-redux';
import TabNav from './TabNav';
import Tab from './Tab';
import "../Styles/Images.css";
import MessagesContainer from './MessagesContainer';

const Messages = (props) => {
    const user = useSelector(state => state.user);
    const [messages, usersMessaged, label, fetchAll] = useMessages();

    useEffect(()=>{
        if(user != null && user.uid != null)
            fetchAll(user.uid);
    },[user]);
    const [selected, setSelected] = useState(null);

    return (
        <div>
            <h1>{label}</h1>
            <TabNav setSelected={setSelected} tabs={usersMessaged} selected={selected}>
                {usersMessaged.map(x => <Tab key={x.id} id={x.id} isSelected={x.id === selected} >
                    {<MessagesContainer fetchAll={()=>fetchAll(user.uid)} loggedUserId={user.uid} messages={messages.filter(message => (message.senderId===x.id || message.receiverId === x.id))} />}
                </Tab>)}
            </TabNav>
            {Messages===[]?<h4>No messages, to send someone a message go to their profile and click on message.</h4>:null}
            {selected===null?<h4>Click on a tab to view your message history with someone!</h4>:null}
        </div>
    );
}

export default Messages;