import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap' ;
import { updateUser} from '../ApiHit'
import '../App.css'

const Updateform =(props)=>{
    const [value,setValue] = useState({
        id:"",
        title:"",
        body:"",
});
const{id,title,body}=value;
console.log(value)
const onSubmit=event=>{
    event.priventDefault()
    updateUser({id})
    .then(err=>{
        if(err){
            console.log("error",err)
        }else{
            alert("Successful");
        }
    })
}

const onHandle=name=>event=>{
    setValue({...value,[name]:event.target.value})
}
return(
    <div>
    <Form className="p-4">
    <Form.Group >
   <Form.Label>ID</Form.Label>
   <Form.Control onChange={onHandle("id")} type="text" text={value.id} value={value.id} />
   </Form.Group>
   <Form.Group >
   <Form.Label>Title</Form.Label>
   <Form.Control onChange={onHandle("title")} type="text" text={value.title} value={value.title} />
   </Form.Group>
   <Form.Group>
   <Form.Label>Body</Form.Label>
   <Form.Control onChange={onHandle("body")} type="text" text={value.body} value={value.body}/>
   </Form.Group>
    <Button className="form-control" onClick={event =>onSubmit(value.id)}>Save</Button>
  </Form>
       </div>)
}
export default Updateform