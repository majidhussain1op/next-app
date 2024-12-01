"use client";

import { useState } from "react"

export default function Page() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")

  const addUser = async () => {
    let data = await fetch("http://localhost:3000/users", {
      method: "Post",
      body: JSON.stringify({ name, email, age })
    });

    data = await data.json();
    if (data.success) {
      alert("new user Created")
    }
    console.log(data)
  }
  return (
    <div className="add-user">
      <h1>Add user</h1>
      <input type="text" value={name} placeholder="Enter Name" className="input-field" onChange={(e) => setName(e.target.value)} />
      <input type="text" value={email} placeholder="Enter Email" className="input-field" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={age} placeholder="Enter Age" className="input-field" onChange={(e) => setAge(e.target.value)} />
      <button className="btn" onClick={addUser}>Add user</button>
    </div>
  )
}