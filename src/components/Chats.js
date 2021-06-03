import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();

    console.log("this is user");
    console.log(user);

    const handleLogoout = async () => {
        await auth.signOut();

        history.push('/');
    }

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div onClick={handleLogoout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="adbd5425-aafd-413c-a910-751020ca903f"
                userName="."
                userSecret="."
            />
        </div>
    )
}

export default Chats;