import React, { useState } from 'react'

function Todo() {

    const [formData, setFormData] = useState([
        {
            name: "",
            description: "",
            status: "Not Completed"
        }
    ]);

    const addForms = () => {
        const nameInput = document.getElementById("nameInput").value;
        const descriptionInput = document.getElementById("descriptionInput").value;

        setFormData([
            ...formData,
            {
                name: nameInput,
                description: descriptionInput,
                status: "Not Completed"
            }
        ]);

        document.getElementById("todoForm").reset();
    };

    const handleBtnStatus = (index) => {
        const updatedStatus = [...formData];
        updatedStatus[index].status = updatedStatus[index].status === "Not Completed" ? "Completed" : "Not Completed";
        setFormData(updatedStatus);
    };

    const [filterOption, setFilterOption] = useState("all");

    const deeleteTodo = (index) => {
        const updatedTodos = formData.filter((_, i) =>
            i !== index
        )
        setFormData(updatedTodos);
    }

    const filteredTodos = formData.filter(todo => {
        if (filterOption === 'all') {
            return true;
        }
        // Convert both to lowercase for case-insensitive comparison
        return todo.status.toLowerCase() === filterOption.toLowerCase();
    });


    return (
        <>
            <div className="container-fluid">
                <h3 className='text-center pt-3'>Todo App</h3>
                <div className="row mb-3">
                    <form className='bg-primary mt-5' id="todoForm">
                        <div className="row px-5 py-3">
                            <div className="form-floating col-6 ">
                                <input type="text" className="form-control" id="nameInput" name="name" placeholder="Enter Your Name" />
                                <label htmlFor="nameInput">Enter Your Name</label>
                            </div>
                            <div className="form-floating col-6">
                                <textarea type="text" className="form-control" id="descriptionInput" name="description" placeholder="Description" ></textarea>
                                <label htmlFor="descriptionInput">Description</label>
                            </div>
                        </div>
                        <div className="row px-5 pb-3">
                            <div className="col fiter-btns">
                                <button type="button" className="btn btn-warning" onClick={addForms}>Add</button>
                                <select className='form-select bg-warning' onChange={(e) => setFilterOption(e.target.value)}>
                                    <option value="all">All</option>
                                    <option value="not completed">Not Completed</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                {filteredTodos.length > 0 && (
                    <div className="row m-3 p-5 bg-success todo-card-row">
                        {filteredTodos.map((items, index) => (
                            <div key={index} className="col-sm-12 col-md-2 col-lg-3 col-xl-4 mb-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <p className="card-title">Name: {items.name}</p>
                                        <p className="card-text">Description: {items.description}</p>
                                        <p>Status: {items.status}</p>
                                        <div >
                                            <button className="btn btn-primary" onClick={() => handleBtnStatus(index)}>{items.status}</button>
                                            <button className='btn btn-danger ms-3' onClick={() => deeleteTodo(index)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Todo