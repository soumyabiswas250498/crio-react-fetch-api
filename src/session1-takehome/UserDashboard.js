import React, { useEffect, useState } from "react";
import "../styles.css";

const sampleData = {
  id: 0,
  email: "",
  first_name: "",
  last_name: "",
  avatar: "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
};

export default function UserDashboard() {
  const [buttonState, setButtonState] = useState(0);
  const [userData, setUserData] = useState(sampleData);
  // useEffect(function () {
  //   fetch("https://reqres.in/api/users/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    async function fetchData(id) {
      try {
        const res = await fetch(`https://reqres.in/api/users/${id}`);
        const data = await res.json();
        // console.log(res.status);
        setUserData(data.data);
        if (res.status !== 200) {
          alert("Failed to Fetch Data");
        }
      } catch (error) {
        console.log("error");
      }
    }
    if (buttonState) {
      fetchData(buttonState);
    }
    // console.log(buttonState);
  }, [buttonState]);
  return (
    <>
      <div className="btn">
        <button
          value="1"
          onClick={(e) => {
            setButtonState(e.target.value);
          }}
        >
          1
        </button>
        <button
          value="2"
          onClick={(e) => {
            setButtonState(e.target.value);
          }}
        >
          2
        </button>
        <button
          value="3"
          onClick={(e) => {
            setButtonState(e.target.value);
          }}
        >
          3
        </button>
        <button
          value="100"
          onClick={(e) => {
            setButtonState(e.target.value);
          }}
        >
          100
        </button>
      </div>
      <div>
        {userData ? (
          <ul>
            <li>Name: {userData.first_name + " " + userData.last_name}</li>
            <li>Email: {userData.email}</li>
          </ul>
        ) : (
          <ul>
            <li>Name: </li>
            <li>Email: </li>
          </ul>
        )}
      </div>
      <div className="avatar">
        <img
          src={
            userData
              ? userData.avatar
              : "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
          }
          alt="..."
        />
      </div>
    </>
  );
}
