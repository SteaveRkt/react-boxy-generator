import BoxRange from './BoxRange'
import BoxColorPicker from './BoxColorPicker'
import {useSelector} from 'react-redux'
export default function BoxPanel() {
  const boxState=useSelector(state=>state.boxProperties)
  const boxInputs=boxState.map((input,index)=>(
    input.type==='range'?
    <BoxRange key={index} inputData={input}/>:
    <BoxColorPicker key={index} inputData={input}/>
  )
)
  return (
    <div className='bg-gray-50 px-6 py-4 border-b border-gray-300'>
      <p className='text-lg my-2 font-bold'> Box Properties</p>

      {boxInputs}
    </div>
  )
}
