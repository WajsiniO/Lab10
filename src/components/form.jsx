import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

const Form = () => {
    return <div >
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title: </label>
                <input type="text" className="form-control" id="title" placeholder="Title"/>
            </div>

            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image: </label>
                <input type="file" className="form-control" id="image"/>
            </div>

            <div className="mb-3">
                <label for="text" className="form-label">Text: </label>
                <textarea className="form-control" id="text" placeholder="text here"/>
            </div>

            <div className="mb-3">
                <input type="submit" className="btn btn-success " value="Submit"/>
                <input type="reset" className="btn btn-danger " value="Reset"/>
            </div>
        </form>
    </div>
}

const sendComponent = () => {

}

export default Form;