import React from 'react'
import './Form.css';

function Form() {
    return (
        <div className="form">

      <form>
        <label>
              Add todo:
              <input type="text" name="add todo" />
        </label>
              <input type="submit" value="Submit" />
      </form>

        </div>
    )
}

export default Form
