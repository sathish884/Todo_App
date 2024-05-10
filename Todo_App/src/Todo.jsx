import React, { useState } from 'react'

function Todo() {

    const [inputData, setInputData] = useState(
        {
            name: "",
            description: ""
        }
    )

    const [formData, setFormData] = useState([
        {
            name: "",
            description: ""
        }
    ]
    )

    const [submit, setSubmit] = useState(false)

    const updatedField = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        });
    }
    const addForms = (e) => {
        e.preventDefault()
        setFormData([...formData, {
            name: inputData.name,
            description: inputData.description
        }])
        setInputData({
            name: "",
            description: ""
        })
        //  setSubmit(true);
    }


    return (
        <>
            <div className="container-fluid">
                <div className="row mb-3">
                    <form className='bg-primary mt-5'>
                        <div className="row px-5 py-3">
                            <div className="form-floating col-6 ">
                                <input type="email" className="form-control" id="floatingInputValue" placeholder="name@example.com" name="name" value={inputData.name} onChange={updatedField} />
                                <label htmlFor="floatingInputValue">Input with value</label>
                            </div>
                            <div className="form-floating col-6">
                                <input type="email" className="form-control" id="floatingInputValue" placeholder="name@example.com" name="description" value={inputData.description} onChange={updatedField} />
                                <label htmlFor="floatingInputValue">Input with value</label>
                            </div>
                        </div>
                        <div className="row px-5 pb-3">
                            <div className="col fiter-btns">
                                <button type="button" className="btn btn-warning" onClick={addForms}>Add</button>
                                <select className="form-select bg-warning">
                                    <option selected>Filter</option>
                                    <option value="1">All</option>
                                    <option value="2">Completed</option>
                                    <option value="3">Not-Completed</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    {formData.map((items, index) => (
                        <div className="col-3 mb-3" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <p className="card-title">Name : {items.name}</p>
                                    <p className="card-text">Description : {items.description}</p>
                                    <p>{items.status}</p>
                                    <button href="#" className="btn btn-primary">Completed</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}

export default Todo