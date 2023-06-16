import React from 'react';
import { useState } from "react/cjs/react.production.min";
import "./styles.css";

const App = () => {
  const [Fullcontent, setContent] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const handelclick = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setContent((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email,

        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email,
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value,
        };
      }
    });
  };

  return (
    <>
      <div classname="d1">
        <h1>
          Hello {Fullcontent.fname} {Fullcontent.lname}
        </h1>
        <p classname="email">{Fullcontent.email}</p>
        <input
          type="text"
          name="fname"
          value={Fullcontent.fname}
          onChange={handelclick}
        />
        <input
          type="text"
          name="lname"
          value={Fullcontent.lname}
          onChange={handelclick}
        />
        <input
          type="text"
          name="email"
          value={Fullcontent.email}
          onChange={handelclick}
        />
      </div>
    </>
  );
};
export default App;
