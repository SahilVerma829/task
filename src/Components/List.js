import React,{useState,useEffect} from 'react';
// import ReactDOM from 'react-dom'
import {} from 'react-bootstrap';
import '../App.css';
import {deleteUser, getUser} from "../ApiHit"
import {BsFillTrashFill} from 'react-icons/bs'




const List = (props) =>{
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
  
function popup(id)
{
    const boo=window.confirm(`Are You sure ${id}`)
    if(boo){
      deleteUser(id,user.id).then(data=>{
        if(data.error){
        console.log("Not")
    }else{
      console.log("Yes")
    }})
}
}
  
  return (
        <div>
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th className="text-primary">ID</th>  
                    <th className="text-primary">Title</th>
                    <th className="text-primary">Body</th>
                  </tr>  
                </thead>   
                <tbody>
                 {user.map((itm)=>
                   <tr> 
                     <td>{itm.id}</td>
                    <td>{itm.title}</td>
                    <td>{itm.body}</td> 
                    <td><button className="btn" onClick={(e)=>{popup(itm.id)}}  >
                   <BsFillTrashFill className="text-primary"/></button></td>
                 </tr> 
                   )
                }
                </tbody>
            </table>
        </div>  
      );
      
      
        
     
    
}
export default List;