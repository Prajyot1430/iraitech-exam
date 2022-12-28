import React, { useRef, useState } from 'react'

export default function DynamicComponents() {

    const [formValues, setFormValues] = useState([{ X: "", Y: "" }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }


    return (
        <div>
            <h4>Q2</h4>
            <form onSubmit={handleSubmit}>
                {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                        <div class="card">
                            <h5 class="card-header">Component X</h5>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <label>Name</label>
                                <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
                                {
                                    index ?
                                        <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                                        : null
                                }                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                ))}
                <div className="button-section">
                    <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                    <button className="button submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
