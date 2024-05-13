import React, { useState } from 'react'

function Todo() {

    // Define state for form data
    const [formData, setFormData] = useState([
        {
            name: "",
            description: "",
            status: "Not Completed"
        }
    ]);

    // Function to add new form data
    const addForms = () => {
        // Get input values from DOM
        const nameInput = document.getElementById("nameInput").value;
        const descriptionInput = document.getElementById("descriptionInput").value;

        // Update formData state with new data
        setFormData([
            ...formData,
            {
                name: nameInput,
                description: descriptionInput,
                status: "Not Completed"
            }
        ]);


        // Clear input fields
        document.getElementById("todoForm").reset();
    };

    // Function to handle button click to toggle status
    const handleBtnStatus = (index) => {
        // Create a copy of formData array
        const updatedStatus = [...formData];
        // Toggle status of specific item
        updatedStatus[index].status = updatedStatus[index].status === "Not Completed" ? "Completed" : "Not Completed";
        // Update formData state
        setFormData(updatedStatus);
    };

    // Define state for filter option
    const [filterOption, setFilterOption] = useState("all");

    // Function to delete a todo item
    const deeleteTodo = (index) => {
        // Filter out the todo item at the specified index
        const updatedTodos = formData.filter((_, i) => i !== index);
        // Update formData state
        setFormData(updatedTodos);
    }

    // Filter todos based on filterOption
    const filteredTodos = formData.filter(todo => {
        if (filterOption === 'all') {
            return true;
        }
        // Convert both to lowercase for case-insensitive comparison
        return todo.status.toLowerCase() === filterOption.toLowerCase();
    });

    // Return JSX for the component
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
                {/* Render todos */}
                {filteredTodos.length > 0 ? (
                    <div className="row m-3 p-5 bg-success todo-card-row">
                        {filteredTodos.map((items, index) => (
                            <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <p className="card-title">Name: {items.name}</p>
                                        <p className="card-text">Description: {items.description}</p>
                                        <p>Status: {items.status}</p>
                                        {/* Buttons to toggle status and delete todo */}
                                        <div >
                                            <button className="btn btn-primary" onClick={() => handleBtnStatus(index)}>{items.status}</button>
                                            <button className='btn btn-danger ms-3' onClick={() => deeleteTodo(index)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : false}
            </div>
        </>
    );
}

export default Todo