import ModalBtn from "./Modal/ModalBtn"
import { useSelector } from "react-redux"
import getBoxShadowValue from "../../utils/getBoxShadowValue"
export default function Visualization() {
    const shadowValues=useSelector(state=>state.shadows)
    
    
  return (
    <div className="flex flex-col p-5 ml-10 lg:ml-28">
      <ModalBtn/>
      <div
      style={{boxShadow:`${getBoxShadowValue(shadowValues).slice(0,-1) }`} }
      className="w-[250px] h-[250px] bg-white rounded-xl mb-20 lg:mb-40"></div>
    </div>
  )
}
