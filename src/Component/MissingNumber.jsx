import React, { useRef, useState } from 'react'

function MissingNumber() {
    const inputRef = useRef(null);
    const [updated, setUpdated] = useState('');

    const handleClick = () => {
        let num = inputRef.current.value;
        if (num % 2 == 0) {
            num = num * num - 1;
        }
        else {
            num = num * num + 1;
        }

        setUpdated(num);
    }

    return (
        <div class="card">
            <h5 class="card-header">Q1</h5>
            <div class="card-body">
                <h5 class="card-title">Finding missing number in the series:</h5>
                <h3>2,3,10,15,26,35,50, 63,?</h3>
                <div className="input-group mb-3" >
                    <input type="text" ref={inputRef} className="form-control" placeholder="Enter induex number" aria-label="Recipient's username" aria-describedby="button-addon2" id='indexNum' name='indexNum' />

                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Find</button><br />
                        <h3> Number : {updated} </h3>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default MissingNumber
