// vaclaims is a signup form for veterans disability compensation help
// import React and use hooks to create objects
// hooks let you use state without writing a class
import React, { useReducer, useState} from 'react';
import './App.css';

// reducer function that takes inputs state and event
const formReducer = (state, event) => {
  // when the event.reset property is true
  // reset the field values to empty strings
  if(event.reset) {
    return {
      name: '',
      email: '',
      phone: '',
      type: '',
      'contact': false
    }
  }
  return {
    ...state,
    // pass an event object with properties name and value
    [event.name]: event.value
  }
}

function App() {
  // variables formData and setFormData are assigned to:
  // the hook useReducer called with the parameter formReducer
  const [formData, setFormData] = useReducer(formReducer);
  // variables submitting and setSubmitting are assigned to the result of:
  // calling the useState hook with a parameter of false
  const [submitting, setSubmitting] = useState(false);
  // function handleSubmit has parameter event
  const handleSubmit = event => {
  // run the event.preventDefault property in this function
    event.preventDefault();
  // set the setSubmitting variable to true
    setSubmitting(true);
  // show Submitting Form message for 3 sec on button click
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  }
// function to pull the data from the event.target
// and pass the object to setFormData
  const handleChange = event => {
    // check if event.target.type is checkbox
    const isCheckbox = event.target.type === 'checkbox';
    // setFormData is an object with keys: name and value
    // and values of event.target.name and event.target.value
    setFormData({
      name: event.target.name,
      // if type is checkbox, pass event.target.checked as the value
      // otherwise, pass event.target.value as value
      value: isCheckbox ? event.target.checked : event.target.value
    });
  }
// the user-facing section
// update the onChange event handler to use the handleChange function
  return (
    <div className="wrapper">
      <h1>Get help with your VA Claim</h1>
      <h2>Let's increase your VA rating</h2>
      {submitting &&
      <div>
        You are submitting the following:
        <ul>
          {Object.entries(formData).map(([name, value]) => (
            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
          ))}
          </ul>
      </div>
      }

      <form onSubmit={handleSubmit}>
      <fieldset disabled={submitting}>
        <label>
          <p>Name</p>
          <input name="name" onChange={handleChange} value={formData.name}/>
          <p>Email</p>
          <input name="email" onChange={handleChange} value={formData.email}/>
          <p>Phone (recommended)</p>
          <input name="phone" onChange={handleChange} value={formData.phone}/>
        </label>
      </fieldset>

      <fieldset disabled={submitting}>
        <label>
          <p>Please choose an option:</p>
          <select name="type" onChange={handleChange} value={formData.type}>
            <option value="VA Claim">VA Claim</option>
            <option value="VA Appeal">VA Appeal</option>
            <option value="Not sure">I'm not sure</option>
          </select>
        </label>

        <label>
          <p>Contact me about my VA Claim/Appeal.</p>
          <input type="checkbox" name="contact" onChange={handleChange} checked={formData['contact']} />
        </label>
      </fieldset>

      <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </div>
  )
}

export default App;
