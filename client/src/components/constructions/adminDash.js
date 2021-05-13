import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import img2 from '../../images/delete.png';
import './../../css/IT19140162.css';

export default function AdminConstruction(){

    const[adminReqCus, setReqAdmin] = useState([]);
    const[adminReqSys, setReqAdminSys] = useState([]);
    
    useEffect(() =>{
        function fetchAdminReq(){
            axios.get("http://localhost:5000/customizedReq/")
            .then(res => {
                setReqAdmin(res.data); 
               
               console.log('data is retreived');
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })
        }
        fetchAdminReq();


        function fetchAdminReqSystemized(){
            axios.get("http://localhost:5000/systemizedReq/")
            .then(res => {
                setReqAdminSys(res.data); 
               
               console.log('data is retreived');
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })
        }
        fetchAdminReqSystemized();

        
    },[]);
    
    const deleteCustomizedReq = async(id) => {
        
        const deletereq = await axios.delete(`http://localhost:5000/customizedReq/delete/${id}`);
        
        if(deletereq){
            window.location ="/adminConsDash"
        }
        
    }


    const deletesystemizedReq = async(id) => {
        
        const deletereqS = await axios.delete(`http://localhost:5000/systemizedReq/delete/${id}`);
        
        if(deletereqS){
            window.location ="/adminConsDash"
        }
        
    }

    
        return(
    
    
            <div className="container">
                    <br/><br/>
                    <div className= "it19140162-sub1AdminDash">
                        <p className = "it19140162-topic1AdminDash">Construction Requests</p>
                    </div>
                    <hr className="hrLine"/><br/>
                    <div className="it19140162-mainDiv33">
                    <h5><b>Systemized Requests</b></h5>
                        <div id="it19140162-row1col11" >
        

                            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            <tbody>
                           
                           {/* map eken return wenne array eksk. array eka save karaganne CusReq 1ta. eken puluwan eka athule thiyena  */}
                            {adminReqSys.map(SysReq =>
                             <tr key = {SysReq._id} className="shadow p-3 mb-5 bg-white rounded">
                            

                             <td>
                                
                                 <p><b>Request Number : </b>{SysReq._id} </p>
                                 <p><b>Customer Name  : </b>{SysReq.name} </p>
                                 <p><b>Customer Email : </b>{SysReq.email} </p>
                                 <p><b>Customer Phone : </b>{SysReq.phone} </p>
                            </td>
                            <td>
                                  
                            </td>
                            <td>
                                <button onClick = {()=>deletesystemizedReq(SysReq._id)} type="button">
                                <img className="it19140162-imgd" src={img2} />Delete
                                </button>
                            </td>
                            
                            </tr>
                            )}
                            
                            </tbody>
                            </table>
                        </div>
                      <br/>
                       <div className="it19140162-mainDiv33">
                       <h5><b>Customized Requests</b></h5>
                        <div id="it19140162-row1col11" >  
                        
                            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                           
                           {/* map eken return wenne array eksk. array eka save karaganne CusReq 1ta. eken puluwan eka athule thiyena  */}
                            {adminReqCus.map(CusReq =>
                             <tr key = {CusReq._id} className="shadow p-3 mb-5 bg-white rounded" >
                            

                             <td>
                                
                                 <p><b>Request Number : </b>{CusReq._id} </p>
                                 <p><b>Customer Name  : </b>{CusReq.name} </p>
                                 <p><b>Customer Email : </b>{CusReq.email} </p>
                                 <p><b>Customer Phone : </b>{CusReq.phone} </p>
                            </td>
                            <td>
                                    

                            </td>
                            <td>
                                <button onClick = {()=>deleteCustomizedReq(CusReq._id)} type="button">
                                <img className="it19140162-imgd" src={img2} />Delete
                                </button>
                            </td>
                            
                            </tr>
                            
                            )}
                            
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
    
                    <br/> <br/>
    
                    <div className="it19140162-dpr">
    
                        <p className="it19140162-printS"><b>Enter Request Number To Get A Printed Copy </b>  </p>
                        
                        <div className="it19140162-prB">
                        
                        <div className="it19140162-pb"><input type="text" className="it19140162-rNumber" id="it19140162-rNum"
                                
                                 /> </div>
                            <div className="pb">
                            <Link to ="/userConsPrint">
                                <button type= "submit" id = "it19140162-userConsPrint" className = "btn btn-success" >OK</button>
                            </Link> </div>
    
                        </div>
    
                    </div>
    
            </div>
    
        )
    
    };