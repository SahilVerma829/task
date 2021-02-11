import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap' ;
import {signup} from '../ApiHit'
import '../App.css'

 const NewUser =(props)=> {
    const [value,setValue] = useState({
            firstname:"",
            lastname:"",
            address:"",
            city:"",
            state:""
    });
const {firstname,lastname,address,city,state} =value
const onSubmit=event=>{
    
    event.preventDefault()
    signup({firstname,lastname,address,city,state})
    .then(err=>{
        if(err){
            console.log("error",err)
        }else{
            alert("insert Successful")
        }
      })
}

const onHandle=firstname=>event=>{
    setValue({...value,[firstname]:event.target.value})
}
    return (
        <div className="newuser ">
      <Form className="p-4">
     <Form.Group >
    <Form.Label>First Name</Form.Label>
    <Form.Control onChange={onHandle("firstname")} type="text" placeholder="Enter your First Name" value={value.firstname} />
    </Form.Group>
    <Form.Group >
    <Form.Label>Last Name</Form.Label>
    <Form.Control onChange={onHandle("lastname")} type="text" placeholder="Enter your Last Name" value={value.lastname} />
    </Form.Group>
    <Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control onChange={onHandle("address")} type="text" placeholder="Address" value={value.address}/>
    </Form.Group>
    <Form.Group>
    <Form.Label>City</Form.Label>
    <Form.Control onChange={onHandle("city")} type="text" placeholder="Enter your City" value={value.city} />
    </Form.Group>
    <Form.Group>
    <Form.Label>State</Form.Label>
    <Form.Control onChange={onHandle("state")} type="text" placeholder="Enter your State" value={value.state} />
    </Form.Group>
     <Button className="form-control" onClick={onSubmit}>Save</Button>
   </Form>
        </div>
    )
}

export default NewUser;