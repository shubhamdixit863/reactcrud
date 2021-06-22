import React,{useState} from 'react'

function Example() {


    const defaultState={
        a:false,
        b:false,
        c:false,
        d:false,
    }
const [state, setstate] = useState({...defaultState,a:true})

const changeVisibility=(option)=>{
    setstate({...defaultState,[option]:true})

}

    return (
        <div>
            <ul style={{cursor:"pointer"}}>
              <li onClick={()=>changeVisibility("a")}>
                  Option A
              </li>

              <li onClick={()=>changeVisibility("b")}>
                  Option B
              </li>


              <li onClick={()=>changeVisibility("c")}>
                  Option C
              </li>

             

              <li onClick={()=>changeVisibility("d")}>
                  Option D
              </li>
             

            </ul>

            {
                state.a?  <div id="optiona">
                <h1>Option A</h1>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
             </div>:""
            }

          {
              state.b? <div id="optionb">
              <h1>Option B</h1>
           </div>:""
          }
            

            {
                state.c ?  <div id="optionc">
                <h1>Option C</h1>
             </div> :""
            }
           
           {
               state.d ?  <div id="optiond">
               <h1>Option D</h1>
            </div>:""
           }
          
          
            
        </div>
    )
}

export default Example
