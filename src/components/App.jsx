import React, { useState } from "react";

function App() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");

  const [fullName, setFullName] = useState({ fname: " ", lname: " " });

  // function handleOnchangeFname(event) {
  //   setFname(event.target.value);
  // }

  // function handleOnchangeLname(event) {
  //   setLname(event.target.value);
  // }

  function updateHeading(event) {
    // const newvalue = event.target.value;
    // const targetAttribute = event.target.name;

    const { value, name } = event.target;

    setFullName(prevVlaue => {
      if (name === "fName") {
        return { fname: value, lname: prevVlaue.lname };
      } else if (name === "lName") {
        return { fname: prevVlaue.fname, lname: value };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          onChange={updateHeading}
          name="fName"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={updateHeading}
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
