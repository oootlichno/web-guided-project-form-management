import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) use the `update` callback coming in through props
  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
        </label>

        <label>Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}


 
import React, { startTransition } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App';

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target
    update(name, value) // <-- corrected to call the `update` prop function
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit() // <-- corrected to call the `submit` prop function
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username
          <input
            value={values.username} // <-- corrected to access specific property
            name="username"
            type="text"
            placeholder='Type username'
            onChange={onChange}
          />
        </label>

        <label>Email
          <input
            value={values.email} // <-- corrected to access specific property
            name="email"
            type="text"
            placeholder='Type email'
            onChange={onChange}
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          <select
            value={values.role} // <-- corrected to access specific property
            name="role" // <-- changed to lowercase to match convention
            onChange={onChange}
          >
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </label>

        <div className='submit'>
          <button type="submit">submit</button>
        </div>
      </div>
    </form>
  )
}