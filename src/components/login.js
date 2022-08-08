import React, { useState } from "react";
import api from "../config";
import axios from "axios";
export default function Login(props) {
  const [user, setUser] = useState({});

  const submit = async (e) => {
    e.preventDefault();

    try {
      let result = await axios.post(`${api}/users/login`, user);
        localStorage.setItem('user',result.data.token);
        props.setlogincheck(true)
    } catch (error) {
        alert("provide valid user login")
    }
  };
  console.log(user);
  return (
    <div class="mycontainer">
      <div class="item-0">
        <form onSubmit={submit}>
          <div class="form-outline mb-4">
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="username"
              value={user.name}
              onChange={({ target }) => {
                setUser({ ...user, [target.id]: target.value });
              }}
            />
          </div>
          <div class="form-outline mb-4">
            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="password"
              value={user.password}
              onChange={({ target }) =>
                setUser({ ...user, [target.id]: target.value })
              }
            />
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
