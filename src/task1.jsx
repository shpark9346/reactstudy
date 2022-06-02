import React, { useState } from 'react';

const Task1 = () => {
    const [num, setNum] = useState(0);
    const plusNum = () => {
        setNum(num+1)
    };
    const minusNum = () => {
        setNum(num-1)
    };
    return (
        <div>
            <h1 className='task1head'>1번문제입니다.</h1>
            <div className='countNum'>
                {num}
            </div>
            <div className='task1button'>
                <button onClick={minusNum}>minus1</button>
                <button onClick={plusNum}>plus1</button>
            </div>
            
        </div>
    );
};




export default Task1;