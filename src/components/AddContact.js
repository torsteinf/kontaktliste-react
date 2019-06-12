import React from "react";
import useAddContact from "./hooks/useAddContact";

const AddContact = () => {
  const addcontact = () => {
    const allContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const contact = {
      fornavn: inputs.fornavn,
      etternavn: inputs.etternavn,
      gate: inputs.gate,
      postnr: inputs.postnr,
      poststed: inputs.poststed
    };
    allContacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const { inputs, handleInputChange, handleSubmit } = useAddContact(addcontact);
  return (
    <section className="container">
      <h2>Legg til kontakt</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fornavn">Fornavn</label>
        <input
          type="text"
          name="fornavn"
          id="fornavn"
          onChange={handleInputChange}
          value={inputs.fornavn}
        />
        <label htmlFor="etternavn">Etternavn</label>
        <input
          type="text"
          name="etternavn"
          id="etternavn"
          onChange={handleInputChange}
          value={inputs.etternavn}
        />
        <label htmlFor="gate">Gate</label>
        <input
          type="text"
          name="gate"
          id="gate"
          onChange={handleInputChange}
          value={inputs.gate}
        />
        <label htmlFor="postnr">Postnummer</label>
        <input
          type="number"
          name="postnr"
          id="postnr"
          onChange={handleInputChange}
          value={inputs.postnr}
        />
        <label htmlFor="poststed">Poststed</label>
        <input
          type="text"
          name="poststed"
          id="poststed"
          onChange={handleInputChange}
          value={inputs.poststed}
        />
        <button type="submit" id="leggTilKontaktKnapp">
          Legg til kontakt
        </button>
      </form>
    </section>
  );
};

export default AddContact;
