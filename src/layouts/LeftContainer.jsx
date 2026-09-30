import ShadowList from './ShadowList/ShadowList';
import BoxPanel from './BoxPanel/BoxPanel';
import {useState} from 'react';
export default function LeftContainer() {
    const [tabs,setTabs] = useState(0);
    const tabsLists=[{
        name:'Shadow',
        component:<ShadowList/>
    },{
        name:'BoxPanel',
        component:<BoxPanel/>
    }]
  return (
    <div className="relative mt-10 w-[600px] h-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 ">
      <div className="flex absolute -translate-y-full -left-[1px]">
        {tabsLists.map((tab,index)=>(
            <button
                key={index}
                onClick={()=>setTabs(index)}
                className="min-w-[125px] py-[2px] px-[3px] mr-[4px] border-x border-gray-300 bg-slate-50 hover:bg-slate-200 text-slate-700 rounded-t focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
                    {tab.name}
            </button>
        ))}
      </div>
      <div className="h-full overflow-auto">
        {tabsLists[tabs].component}
      </div>
    </div>
  )
}
