import { useState } from "react";

const initialState = {
  fornavn: "",
  etternavn: "",
  gate: "",
  postnr: "",
  poststed: ""
}

const useAddContact = (callback) => {
  
  const [inputs, setInputs] = useState(initialState);

  const clearState = () => {
    setInputs({...initialState})
  }

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback()
    clearState();
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
