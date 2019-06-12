import { useState } from "react";

const useAddContact = callback => {
  const [inputs, setInputs] = useState({
    fornavn: "",
    etternavn: "",
    gate: "",
    postnr: "",
    poststed: ""
  });

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useAddContact;
