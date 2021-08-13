import React, { useState, useEffect } from "react";
import db from "./config";

function Console() {
  const [name, setName] = useState("");
  const [firestoredata, setFirestoredata] = useState([]);
    const [loading,setLoading] = useState(false)

//   const ref = db.collections("students");

  function getdata() {
      setLoading(true)
      db.collection("students").onSnapshot((querysnapshot)=>{
          const lists = [] ;
          querysnapshot.forEach((obj)=>{
              lists.push(obj.data());
          });
          setFirestoredata(lists);
          setLoading(false);
      })
  }

  useEffect(()=>{
      getdata();
  },[])

  const handleSubmit = (e) => {
    setName(e.target.value);
  };
  if (loading){
      return <h1>Loading</h1>
  }

  return (
    <div>
      <input value={name} onChange={handleSubmit} type="text" name="" id="" />

      <input
        onClick={() => {
          db.collection("students")
            .get()
            .then((snapshot) => {
              snapshot.forEach((obj) => {
                console.log(obj.data());
              });
            });
        }}
        type="button"
        value="Console Data"
      />

      <input
        onClick={() => {
          db.collection("students").add({ name: name });
          setName("");

          console.log("Done");
        }}
        type="button"
        value="Add to List"
      />

      {
          firestoredata.map((obj,k)=>{
              return(
                  <ul><li>{obj.name}</li></ul>
              )
          })
      }
    </div>
  );
}

export default Console;
