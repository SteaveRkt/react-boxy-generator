import { updateShadow } from '../../features/shadows'
import { useDispatch } from 'react-redux'
export default function ShadowColorPicker({inputData,shadowId}) {
    const dispatch=useDispatch()
    function handleInput(e){
        dispatch(updateShadow({
          inputNumber:inputData.inputNumber,
          value:e.target.value,
          shadowId
        }))
      }
    return (
    <div className='mt-3'>
      <p>{inputData.name}</p>
      <div className="flex mt-2 ">
        <input 
        type="text"
        value={inputData.value}
        onChange={handleInput}
        className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
        />
        <input 
        value={inputData.value}
        onChange={handleInput}
        className="h-10 cursor-pointer"
        type="color" />
      </div>
    </div>
  )
}
