import React, {useState} from "react";
import axios from "axios";
import './../../css/IT19140162.css';

export default function InsertSystemizedDesigns(){

    const [designNum,setDesignNum] = useState("");
    const [landArea,setLandArea] = useState("");
    const [buildingArea,setBuildingArea] = useState("");
    const [bedRooms,setBedRooms] = useState("");
    const [bathRooms,setBathRooms] = useState("");
    const [img,setImgs] = useState("");
    
    function sendData(e){
        e.preventDefault(); 

        
        const newSysDesigns = {
            designNum,
            landArea,
            buildingArea,
            bedRooms,
            bathRooms,
            img
        }
        
        axios.post("http://localhost:5000/systemizedDesig/addDesign",newSysDesigns).then(()=>{
            alert("req added")
            
        } ).catch((err)=>{
            alert(err)
        })
    }


    return(
    

        <div className="container"> 
           <br/>
            <div className = "it19140162-mainDiv">  
                <p className = "it19140162-topic1">Insert System Design Details</p><br/>   
                
                <div className = "it19140162-sub4">
                     <form onSubmit={sendData}>  

                     <div className="form-group">
                        <label for="it19140162-designNum">Design Number</label>
                        <input type="text" className="form-control" id="it19140162-designNum" placeholder="SP0000"
                        
                            onChange={(e) => {
                                setDesignNum(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-landArea">Land Area</label>
                        <input type="text" className="form-control" id="it19140162-landArea" 
                        
                            onChange={(e) => {
                                setLandArea(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-buildingArea">Building Area</label>
                        <input type="text" className="form-control" id="it19140162-buildingArea" 
                        
                        onChange={(e) => {
                            setBuildingArea(e.target.value);
                        }} />
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-bedRooms">Bed Rooms</label>
                        <input type="text" className="form-control" id="it19140162-bedRooms" 
                        
                        onChange={(e) => {
                            setBedRooms(e.target.value);
                        }} />
                    </div>

                    <div className="form-group">
                        <label for="it19140162-bathRooms">Bathrooms</label>
                        <input type="text" className="form-control" id="it19140162-bathRooms" 
                        
                            onChange={(e) => {
                                setBathRooms(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group"> 
                        <label for="it19140162-bathRooms">Insert Images</label>
                        <input type="file" className="form-control-file" id="it19140162-image"/> 
                    </div>
                    <br/>
                    <div>
                        <button type="submit" className="btn btn-success">INSERT DETAILS</button>
                    </div>
        </form>
                </div>
                
                </div><br/>
            </div>          
      

    )

}