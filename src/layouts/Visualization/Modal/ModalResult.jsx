import { useEffect } from "react"
import getBoxShadowValue from "../../../utils/getBoxShadowValue"
import { useSelector } from "react-redux"
export default function ModalResult({closeModal}) {
  const shadow=useSelector(state=>state.shadows)
  const shadowValues=getBoxShadowValue(shadow)
  useEffect(()=>{
    document.body.style.overflowY="hidden"
    return ()=>document.body.style.overflowY="auto"
  },[])
  let runningAnimation=false
  function copied(e){
    if(!runningAnimation){
      e.target.innerText="Copied!"
      runningAnimation=true
      setTimeout(()=>{
        e.target.innerText="Copy"
        runningAnimation=false
      },1200)
    }
    navigator.clipboard.writeText(`box-shadow:${shadowValues}`)
  }
  return (
    <div 
    onClick={closeModal}
    className="w-full h-full fixed z-50 flex justify-center items-center inset-0 bg-gray-700/75">
      <div 
      onClick={(e)=>e.stopPropagation()}
      className="max-w-[400px] mb-[10vh] rounded p-7 bg-slate-50">
        <div className="flex items-end mb-5">
          <p className="font-semibold mr-5">Here is the code</p>
          <button 
          onClick={copied}
          className="ml-auto mr-2 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 py-1 px-3">Copy</button>
          <button className="text-sm rounded text-white bg-red-600 hover:bg-red-700 py-1 px-3"
          onClick={closeModal}
          >Close</button>
        </div>
        <p className="bg-gray-100 p-5 rounded">
          <span className="font-semibold">box-shadow:
            </span>
            <span>
            {shadowValues}
            </span>
        </p>
      </div>
    </div>
  )
}
