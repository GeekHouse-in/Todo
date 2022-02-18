import React, { useState } from 'react'
import icon from './images/icon.png'
import './Todo.css';



const Todo = () => {

    const[data,setData] = useState([]);
    const[inputData,setInputData] = useState('');

    const handleChange = (e) =>{

        setInputData(e.target.value);
    }

    const addItem = () =>{

        if(inputData === ''){
            alert('Enter Something');
        }
        else {
        setData([...data,inputData]);
        setInputData('');
        }
    }
 
    

    return (
    <div className="Todo">
        <div style={{textAlign : "center",paddingTop : "5%"}}>
            <h1>GeekHouse TODO &#128640;</h1>
        </div>
        <div className="parent_div">
            <div className="child_div">
                <div className="inputSection">
                    <img src={icon} alt="icon" />
                    <br />
                    <br />
                    <input type="text" placeholder='Enter your TODO' onChange={handleChange} value={inputData} />
                    <button className="addBtn" onClick={addItem}><i className="fa fa-plus"></i></button>
                </div>
                <br />

                <div className="listItems">
                    {
                        data.map((ele)=>{
                            return (
                                <div className="eachItem">
                                    <span>{ele}</span>
                                    <button className='deleteBtn'><i className='fa fa-trash'></i></button>
                                </div>
                            )
                        })
}
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Todo;

