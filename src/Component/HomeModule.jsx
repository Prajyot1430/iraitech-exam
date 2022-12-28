import React, { useRef, useState } from 'react'

export default function HomeModule() {
    const inputRef = useRef(null);
    const [label1, setLabel1] = useState('');
    const [label2, setLabel2] = useState('');
    const [label3, setLabel3] = useState('');
    const [label4, setLabel4] = useState('');

    const onChangeLabel = () => {
        let str = inputRef.current.value;
        setLabel1(str);
        setLabel2(str);
        setLabel3(str);
        setLabel4(str);
    }


    return (
        <div>
            <h4>Q4</h4>
            <div class="gridBox">
                <div class="box1" id="label1">{label1}</div>
                <div class="box2" id="label2">{label2}</div>

                <input type="text" class="center-block" ref={inputRef} onChange={onChangeLabel} />

                <div class="box3" id="label3">{label3}</div>
                <div class="box4" id="label4">{label4}</div>
            </div>
        </div>
    )
}
