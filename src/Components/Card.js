import React,{useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'
import '../App.css';
import {BsPencilSquare} from "react-icons/bs"
import {getUser} from "../ApiHit"
import Updateform from "./Updateform"



const Card=()=>{
    const [user,setUser]=useState([])

const getData=()=>{
    getUser().then(data=>{
        console.log("dadt",data) 
        setUser(data)  
    }).catch((err)=>{
        console.log("err",err)
    })
}
   
    useEffect(()=>{
    getData()
    },[])

    const [model,setModel]=useState(1)
    const updateUser =(uid,utitle,ubody)=>{
        setModel(0)
        <Updateform />
        
       
}

    return(         
         user.map((item)=>
         <div className="grid">
            <div className="card  overflow-hidden m-3">
                 <div className="card-header ca-head bg-primary text-left text-light ">
                 {item.title}
              
                    <button className="btn text-white float-right" 
                    onClick={(e)=>{updateUser(item.id,item.title,item.body)}} >
                    <BsPencilSquare/>
                     </button>
             
                </div>
                <div className="card-body overflow-hidden ca-body text-primary">
                     <div className="d-inline" >  
                        <Row>
                            <Col className="d-inline pr-1 md-4">
                            <img src="https://www.clipartmax.com/png/middle/144-1442578_flat-person-icon-download-dummy-man.png" 
                            alt="image"></img>
                            </Col>
                            <Col className="d-inline md-8">
                            <p className="card-text">{item.body}</p>
                            </Col>
                        </Row>
                     </div>
                </div>
            </div>
        </div>
        )
           
     )
}

export default Card;
