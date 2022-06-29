import React from 'react'
import './Form.css';

function Form() {
    return (
        <div className="form">

      <form>
        <label>
              <input type="text" name="add todo" placeholder="Add a new todo..." />
        </label>
              <input type="submit" value="Submit" />
      </form>

        </div>
    )
}

export default Form
