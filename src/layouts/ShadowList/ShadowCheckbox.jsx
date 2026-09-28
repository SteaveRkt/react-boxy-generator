import { useDispatch ,useSelector} from "react-redux"
import { updateCheckbox } from "../../features/shadows"
export default function ShadowCheckbox({name,shadowId}) {
  const checkbxShadow=useSelector(state=>state.shadows.find(shadow=>shadow.id===shadowId
  ))
  const dispacth=useDispatch()
    return (
    <>
      <input
      onChange={()=>dispacth(updateCheckbox({shadowId,name}))} 
      type="checkbox" 
      id={`checkbox-${name}-${shadowId}`}
      checked={checkbxShadow[name]}
      className="h-4 w-4 border-gray-300 rounded mr-2"
      />
      <label
      className="leading-4 mr-5" 
      htmlFor={`checkbox-${name}-${shadowId}`}>
        {name.charAt(0).toUpperCase()+name.slice(1)}
      </label>
    </>
  )
}
