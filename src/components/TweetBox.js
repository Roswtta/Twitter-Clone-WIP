import React from 'react';
import './TweetBox.js'
import { Avatar, Button } from '@material-ui/core';

const TweetBox = () => {
    return (
        <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="" />
                <input placeholder="What's happening?" type='text' />
            </div>
                <Button>Tweet</Button>
        </form>
    </div>
    );
}

export default TweetBox;

