export const extractFormData = (formTarget, formLength) => {
  let newData = {};

  for (let i = 0; i < formTarget.length - formLength; i++) {
    const inputName = formTarget[i].getAttribute("name");    
    // const inputValue = formTarget[i].value;
    let inputValue;
    // newData = {[inputName]: inputValue}

    if (formTarget[i].getAttribute("type") == "file") {
      inputValue = formTarget[i].files[0]
    }else {
      inputValue = formTarget[i].value
    }

    newData = { ...newData, [inputName]: inputValue };
  }

  return newData
};