import React, { useEffect, useState } from 'react'
import MalzemeDataService from './firebase.servis';
import Select from "react-select";

function Malzemelist() {

    const [malzeme, setMalzeme] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => {
        getMalzeme();
    }, []);

    const getMalzeme = async () => {
        const data = await MalzemeDataService.getAllMalzeme();
        
        setMalzeme(data.docs.map((doc) => ({ ...doc.data(), id: doc.id}) ));
    };


    const options = malzeme.map((item) => ({
        value: item.id,
        label: item.element,
        box1: item.box1,
        box2: item.box2,
        box3: item.box3,
        box4: item.box4,
        box5: item.box5,
        box6: item.box6,
        box7: item.box7,
        box8: item.box8,
        boxoran1max:item.boxoran1max,
        boxoran2max:item.boxoran2max,
        boxoran3max:item.boxoran3max,
        boxoran4max:item.boxoran4max,
        boxoran5max:item.boxoran5max,
        boxoran6max:item.boxoran6max,
        boxoran7max:item.boxoran7max,
        boxoran8max:item.boxoran8max,
        boxoran1min:item.boxoran1min,
        boxoran2min:item.boxoran2min,
        boxoran3min:item.boxoran3min,
        boxoran4min:item.boxoran4min,
        boxoran5min:item.boxoran5min,
        boxoran6min:item.boxoran6min,
        boxoran7min:item.boxoran7min,
        boxoran8min:item.boxoran8min,
        mecbox1max: item.mecbox1max,
        mecbox2max: item.mecbox2max,
        mecbox3max: item.mecbox3max,
        mecbox4max: item.mecbox4max,
        mecbox1min: item.mecbox1min,
        mecbox2min: item.mecbox2min,
        mecbox3min: item.mecbox3min,
        mecbox4min: item.mecbox4min,
        produc: item.produc
        
      }));




    
    return (
       <>
      <div style={{marginLeft:'450px', border:'1px solid black'}}>
      <Select 
      value={selectedOption}
      onChange={(selectedOption) => {
        setSelectedOption(selectedOption);
      
        localStorage.setItem("selectedOption", JSON.stringify(selectedOption));
      }}
      options={options}
      
      />
       </div>
       </>
    )
}

export default Malzemelist