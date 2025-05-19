

// Create a general element with specified text
const createElement = (elementType, text) => {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

// Creates images with alt
const createImage = (url, alt) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt;
  return img;
};

// Create a header element with specified text and data attribute
const createHeader = (headerType, text, dataCy) => {
  const header = document.createElement(headerType);
  header.textContent = text;
  header.setAttribute("data-cy", dataCy);
  return header;
};

// Create a button that toggles the visibility of the form
const createToggleButton = (text, element) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {
    element.classList.toggle("notVisible");
  });
  return button;
};

// Form Helper Functions
// Helper function to create a label element
const createLabel = (text, htmlFor) => {
  const label = document.createElement("label");
  label.textContent = text;
  label.setAttribute("for", htmlFor);
  return label;
};

// Helper function to create an input element
// const createInput = (name) => {
//   const input = document.createElement("input");
//   input.name = name;
//   input.id = name;
//   return input;
// };
const createInput = (id) => {
  const input = document.createElement('input');
  input.id = id;
  input.name = id;
  input.setAttribute('data-cy', 'title_input');
  return input;
};

// const createSubmitButton = (value) => {
//   const submit = document.createElement("input");
//   submit.type = "submit";
//   submit.value = value;
//   return submit;
// };
const createSubmitButton = (text) => {
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = text;
  button.setAttribute('data-cy', 'submit_button'); 
  return button;
};

export {
  createElement,
  createImage,
  createHeader,
  createToggleButton,
  createLabel,
  createInput,
  createSubmitButton,
};
