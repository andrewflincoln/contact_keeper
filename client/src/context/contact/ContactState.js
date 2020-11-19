import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'


const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        id: 1,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "112-111-1121",
       
    },
    {
        type: "personal",
        id: 2,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "212-111-1121",
      
   },
  {
      type: "personal",
      id: 3,
      name: "Sarah Watson",
      email: "sarah@gmail.com",
      phone: "312-111-1121",
    
  },
  ]
  }

  const [state, dispatch] = useReducer(contactReducer, intialState)

  //Add contact

  //Delete Contact

  //Set current contact

  //Clear current contact

  //Update contact

  //Filter contacts

  //Clear filter

  return (
    <ContactContext.Provider value={{contacts: state.contacts}}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState