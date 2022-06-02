import React, { useState } from 'react';

const Task2 = () => {
    const [song, setSong] = useState(["I've - Love Dive",'(G)-Idle - Tomboy','Le Sserafim - FEARLESS']);

    return (
        <div>
            <h1>2번문제입니다.</h1>
            <h2>저의 최애 곡들을 소개합니다!</h2>
            <div>
                <li>{song[0]}</li>
                <li>{song[1]}</li>
                <li>{song[2]}</li>
            </div>
            <button onClick={() => {setSong(['바꿈','(G)-Idle - Tomboy','Le Sserafim - FEARLESS'])}}>곡 변경</button>
            
        </div>
    );
};

export default Task2;