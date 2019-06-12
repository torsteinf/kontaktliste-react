import React from "react";

function Contact(props) {
  return (
    <tr>
      <td>{props.fornavn}</td>
      <td>{props.etternavn}</td>
      <td>{props.gate}</td>
      <td>{props.postnr}</td>
      <td>{props.poststed}</td>
    </tr>
  );
}

export class ListContacts extends React.Component {
  constructor() {
    super();
    let contacts = [];
    if(!localStorage.contacts) {
      localStorage.contacts = JSON.stringify([])
    } else {
      contacts = JSON.parse(localStorage.getItem("contacts"));
    }
    
    this.state = {
      contacts: contacts
    };
  }

  

  renderContacts() {
    return this.state.contacts.map((contact, index) => (
      <Contact
        key={index}
        fornavn={contact.fornavn}
        etternavn={contact.etternavn}
        gate={contact.gate}
        postnr={contact.postnr}
        poststed={contact.poststed}
      />
    ));
  }

  render() {
    return (
      <table>
        <tbody>{this.renderContacts()}</tbody>
      </table>
    );
  }
}
