import React, { useRef, useState } from 'react'

export default function PhoneBook() {

    const [formValues, setFormValues] = useState([{ PhoneNumber: "" }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { PhoneNumber: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formValues));
    }


    return (
        <div>
            <div class="card">
                <h5 class="card-header">Q3</h5>
                <div class="card-body">
                    <h5 class="card-title">PhoneBook :</h5>
                    <h3>Enter Mobile numbers:</h3>
                    <div className="input-group mb-3" >
                        <form onSubmit={handleSubmit}>
                            {formValues.map((element, index) => (
                                <div className="form-inline" key={index}>
                                    <label>Enter Phone Number</label>
                                    <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
                                    {
                                        index ?
                                            <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                                            : null
                                    }
                                </div>
                            ))}
                            <div className="button-section">
                                <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                                <button className="button submit" type="submit">Submit</button><br />
                            </div>
                        </form>

                    </div>
                </div>

            </div >
        </div>
    )
}
