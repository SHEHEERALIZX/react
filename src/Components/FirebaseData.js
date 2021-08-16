import React ,{useState}from 'react'
import db from './config'
import 'bootstrap/dist/css/bootstrap.min.css';



function FirebaseData() {

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

    const [data,setData] = useState({})
    const [clientdata,setClientData] = useState([])



    const submitHandler=(e)=>{
        e.preventDefault()

        setData(
            {name:name,password:password}
        )

        setClientData([
            ...clientdata,{name:name,password:password}
        ])
        console.log(data)
        setName('')
        setPassword('')
        db.collection('users').add(data).then((docRef)=>console.log("Document id : ",docRef.id))

        
    }


    const getalldata=()=>{
        db.collection('user').get()
    }




    return (
        <>
        <div className="container">
        <div className="container-fluid">

        <form className="row g-3">
  <div className="col-auto">
    <label for="staticEmail2" className="visually-hidden">Name</label>
    <input autoComplete='off' onChange={(e)=>setName(e.target.value)} type="text" readonly className="form-control" id="staticEmail2" value={name}/>
  </div>
  <div className="col-auto">
    <label for="inputPassword2" className="visually-hidden">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="inputPassword2" placeholder="Password" value={password}/>
  </div>
  <div className="col-auto">
    <input onClick={submitHandler} type="submit" className="btn btn-primary mb-3"/>
    <br />
    <input onClick={getalldata} type="submit" className="btn btn-primary mb-3" value="getData"/>

  </div>
</form>

</div>
</div>
</>
    )
}

export default FirebaseData
