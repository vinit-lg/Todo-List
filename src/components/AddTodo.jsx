function AddTodo(){
    return(
        <div className="container">
        <div className="row vk-row">
        <div className="col-6">
        <input type="text" placeholder="Enter todo Here"/>
        </div>
        <div className="col-4">
        <input type="date"/>
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-success vk-button">Add</button>
        </div>
        </div>
        </div>
    )
}

export default AddTodo;