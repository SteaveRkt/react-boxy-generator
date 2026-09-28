import { useState,useEffect } from "react"
import chevron from "../../assets/chevron.svg"
import ShadowRange from "./ShadowRange"
import ShadowColorPicker from './ShadowColorPicker'
import ShadowCheckbox from "./ShadowCheckbox"
export default function Shadow({panelNumber,shadow}) {
    const [toogleShadow,setToogleShadow]=useState(false)
      const shadowInputs=shadow.inputs.map((input,index)=>(
        input.type==='range'?
        <ShadowRange key={index} inputData={input} shadowId={shadow.id}/>:
        <ShadowColorPicker key={index} inputData={input} shadowId={shadow.id}/>
      )
    )
    useEffect(()=>{
        if(panelNumber===1){
            setToogleShadow(true)
        }
    },[])
  return (
    <li className="bg-gray-50 border-gray-300 border-b">
        <button
        className="flex w-full px-6 py-4 items-center hover:bg-gray-100 justify-between"
        onClick={()=>setToogleShadow(!toogleShadow)}>
        <span>
       {`Shadow ${panelNumber}`} 
        </span>
        <img src={chevron} className="font-bold w-5 " alt="chevron"  style={{transform:`${toogleShadow?"rotate(90deg)":"rotate(0deg)"}`}}/>
        </button>
    {toogleShadow&& 
        <>
            <div className="flex items-end px-6 py-4">
                <ShadowCheckbox name="active" shadowId={shadow.id}/>
                <ShadowCheckbox name="inset" shadowId={shadow.id}/>
                <button className="rounded bg-red-600 hover:bg-red-700 ml-auto text-sm text-white py-1 px-3">Remove</button>
            </div>
            <div className="px-6 py-4">
                {shadowInputs}
            </div>
        </>
    }
    </li>
  )
}
