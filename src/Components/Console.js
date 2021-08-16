// import React, { useState, useEffect } from "react";
// import db from "./config";
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Console() {
//   const [name, setName] = useState("");
//   const [firestoredata, setFirestoredata] = useState([] );
//     const [loading,setLoading] = useState(false)
//     const [key,setKey] = useState([])

// //   const ref = db.collections("students");

//   function getdata() {
//       setLoading(true)
//       db.collection("students").onSnapshot((querysnapshot)=>{
//           const lists = [] ;
//           const keys =[];
//           querysnapshot.forEach((obj)=>{
//             //   lists.push(obj.data()); 
//             //   keys.push(obj.id)
//             setFirestoredata([
//                 ...firestoredata,{data:obj.data(),id:obj.id}
//             ]);
              
//           });
     
//           setKey(keys)
//           setLoading(false);
//       })
//   }

//       db.collection("students").doc("mFhM9Evr6yuKFuIX1byT").delete()

//   useEffect(()=>{
//       getdata();
//   },[])

//   const handleSubmit = (e) => {
//     setName(e.target.value);
//   };
//   if (loading){
//       return(
//           <div className="container">
//           <div className="container-fluid">

//           <div className="spinner-border text-primary" role="status">
//           <span className="sr-only">Loading...</span>
//         </div>
//           </div>
//           </div>
      
//       )

//   }

//   return (
//     <div>
//       <input value={name} onChange={handleSubmit} type="text" name="" id="" />

//       <input
//         onClick={() => {
//           db.collection("students")
//             .get()
//             .then((snapshot) => {
//               snapshot.forEach((obj) => {
//                 console.log(obj.data());
//               });
//             });
//         }}
//         type="button"
//         value="Console Data"
//       />

//       <input
//         onClick={() => {
//           db.collection("students").add({ name: name });
//           setName("");

//           console.log("Done");
//         }}
//         type="button"
//         value="Add to List"
//       />

//       {
//           firestoredata.map((obj,k)=>{
//               return(
//                   <ul><li>{obj.name} 
//                   {obj.id}
              
//                   </li>
//                   <input type="button" value="Delete" />
//                   </ul>
//               )
//           })
//       }
//     </div>
//   );
// }

// export default Console;
