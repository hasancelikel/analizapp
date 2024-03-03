import React, {useState} from 'react'
import MalzemeDataService from './firebase.servis';
import './addmalzeme.css';

function Addmalzeme() {
    const [element,setelement] = useState("");
    const [box1, setbox1] = useState("");
    const [box2, setbox2] = useState("");
    const [box3, setbox3] = useState("");
    const [box4, setbox4] = useState("");
    const [box5, setbox5] = useState("");
    const [box6, setbox6] = useState("");
    const [box7, setbox7] = useState("");
    const [box8, setbox8] = useState("");
    const [boxoran1max,setboxoran1max] = useState("");
    const [boxoran2max,setboxoran2max] = useState("");
    const [boxoran3max,setboxoran3max] = useState("");
    const [boxoran4max,setboxoran4max] = useState("");
    const [boxoran5max,setboxoran5max] = useState("");
    const [boxoran6max,setboxoran6max] = useState("");
    const [boxoran7max,setboxoran7max] = useState("");
    const [boxoran8max,setboxoran8max] = useState("");
    const [boxoran1min,setboxoran1min] = useState("");
    const [boxoran2min,setboxoran2min] = useState("");
    const [boxoran3min,setboxoran3min] = useState("");
    const [boxoran4min,setboxoran4min] = useState("");
    const [boxoran5min,setboxoran5min] = useState("");
    const [boxoran6min,setboxoran6min] = useState("");
    const [boxoran7min,setboxoran7min] = useState("");
    const [boxoran8min,setboxoran8min] = useState("");
    const [mecbox1max,setmecbox1max] = useState("");
    const [mecbox2max,setmecbox2max] = useState("");
    const [mecbox3max,setmecbox3max] = useState("");
    const [mecbox4max,setmecbox4max] = useState("");
    const [mecbox1min,setmecbox1min] = useState("");
    const [mecbox2min,setmecbox2min] = useState("");
    const [mecbox3min,setmecbox3min] = useState("");
    const [mecbox4min,setmecbox4min] = useState("");
    const [produc,setproduc] = useState("");


    const [massage, setMassage] = useState({error: false, msg: ""});

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newMalzeme = {
            element,
            box1,
            box2,
            box3,
            box4,
            box5,
            box6,
            box7,
            box8,
            boxoran1max,
            boxoran2max,
            boxoran3max,
            boxoran4max,
            boxoran5max,
            boxoran6max,
            boxoran7max,
            boxoran8max,
            boxoran1min,
            boxoran2min,
            boxoran3min,
            boxoran4min,
            boxoran5min,
            boxoran6min,
            boxoran7min,
            boxoran8min,
            mecbox1max,
            mecbox2max,
            mecbox3max,
            mecbox4max,
            mecbox1min,
            mecbox2min,
            mecbox3min,
            mecbox4min,
            produc

        };
        try {
            await MalzemeDataService.addMalzeme(newMalzeme);
            
            setMassage({error: false , msg: "Yeni Malzeme Eklendi"})
        }
        catch (err){
            setMassage({
                error: true, msg: err.massage
            })
        }
        setelement("");
        setbox1("");
        setbox2("");
        setbox3("");
        setbox4("");
        setbox5("");
        setbox6("");
        setbox7("");
        setbox8("");
        setboxoran1max("");
        setboxoran2max("");
        setboxoran3max("");
        setboxoran4max("");
        setboxoran5max("");
        setboxoran6max("");
        setboxoran7max("");
        setboxoran8max("");
        setboxoran1min("");
        setboxoran2min("");
        setboxoran3min("");
        setboxoran4min("");
        setboxoran5min("");
        setboxoran6min("");
        setboxoran7min("");
        setboxoran8min("");
        setmecbox1max("");
        setmecbox2max("");
        setmecbox3max("");
        setmecbox4max("");
        setmecbox1min("");
        setmecbox2min("");
        setmecbox3min("");
        setmecbox4min("");
        setproduc("");
      
    };
    
    

    return (
         <>
            <form  onSubmit={handleSubmit}>

                
        <input className='addtdi1' type={'text'} placeholder='Malzemenin Cinsi(İsmi)' value={element} onChange={(e) => setelement(e.target.value)}/>
            
            <tr style={{width:'1000px'}}>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='1.Element' value={box1} onChange={(e) => setbox1(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='2.Element' value={box2} onChange={(e) => setbox2(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='3.Element' value={box3} onChange={(e) => setbox3(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='4.Element' value={box4} onChange={(e) => setbox4(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='5.Element' value={box5} onChange={(e) => setbox5(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='6.Element' value={box6} onChange={(e) => setbox6(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='7.Element' value={box7} onChange={(e) => setbox7(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='8.Element "Rem" yazınız.' value={box8} onChange={(e) => setbox8(e.target.value)}></input></td>
          </tr>
        <br/>
          <tr>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='1.Element Max ' value={boxoran1max} onChange={(e) => setboxoran1max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='2.Element Max ' value={boxoran2max} onChange={(e) => setboxoran2max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='3.Element Max ' value={boxoran3max} onChange={(e) => setboxoran3max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='4.Element Max ' value={boxoran4max} onChange={(e) => setboxoran4max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='5.Element Max ' value={boxoran5max} onChange={(e) => setboxoran5max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='6.Element Max ' value={boxoran6max} onChange={(e) => setboxoran6max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='7.Element Max ' value={boxoran7max} onChange={(e) => setboxoran7max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='8.Element Max ' value={boxoran8max} onChange={(e) => setboxoran8max(e.target.value)}></input></td>
          </tr>
          <tr>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='1.Element Min ' value={boxoran1min} onChange={(e) => setboxoran1min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='2.Element Min ' value={boxoran2min} onChange={(e) => setboxoran2min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='3.Element Min ' value={boxoran3min} onChange={(e) => setboxoran3min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='4.Element Min 'value={boxoran4min} onChange={(e) => setboxoran4min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='5.Element Min ' value={boxoran5min} onChange={(e) => setboxoran5min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='6.Element Min ' value={boxoran6min} onChange={(e) => setboxoran6min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='7.Element Min ' value={boxoran7min} onChange={(e) => setboxoran7min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='8.Element Min ' value={boxoran8min} onChange={(e) => setboxoran8min(e.target.value)}></input></td>
          </tr>
          <br/>
          <tr>
          <td className='addtd' ></td>
          <td className='addtd' ></td>
          <td className='addtd' ></td>
          <td className='addtd' ></td>
          </tr>
          <tr>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='1.MECHANICAL Max ' value={mecbox1max} onChange={(e) => setmecbox1max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='2.MECHANICAL Max ' value={mecbox2max} onChange={(e) => setmecbox2max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='3.MECHANICAL Max ' value={mecbox3max} onChange={(e) => setmecbox3max(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='4.MECHANICAL Max ' value={mecbox4max} onChange={(e) => setmecbox4max(e.target.value)}></input></td>
          </tr>
          <tr>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='1.MECHANICAL Min ' value={mecbox1min} onChange={(e) => setmecbox1min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='2.MECHANICAL Min 'value={mecbox2min} onChange={(e) => setmecbox2min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='3.MECHANICAL Min ' value={mecbox3min} onChange={(e) => setmecbox3min(e.target.value)}></input></td>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='4.MECHANICAL Min ' value={mecbox4min} onChange={(e) => setmecbox4min(e.target.value)}></input></td>
          </tr>
          <tr>
          <td className='addtd' ><input className='addtdi' type={'text'} placeholder='Ürünün Kodu' value={produc} onChange={(e) => setproduc(e.target.value)}></input></td>
          </tr>
          
          
          
            <input className='submit' type='submit' onSubmit={handleSubmit}></input>

            </form>

            <h4>{massage.msg}</h4>
        </>
    )
}

export default Addmalzeme