import React from "react";

const App = () => {
//   const [name, setName] = React.useState("");
//   const [ email, setEmail] = React.useState("");
const [ form, setForm] = React.useState({ 
    name: "",
    email: "",
  
});

  function handleSubimit(event) {
    event.preventDefault();
    console.log(name);
  }
  function handleChange({target}) { 
    const { id, value } = target;
    setForm({...form, [id]: value } );
  }

  return (
    <form onSubmit={handleSubimit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default App;
