import {createSlice} from '@reduxjs/toolkit'
import nanoid from 'nanoid'
const initialState = [
    { 
        id:nanoid(8),
        active:true,
        inset:false,
        inputs:[{
            inputNumber:1,
            name:"Horizontal Offset",
            value:0,
            type:'range',
            minMax:[-250,250],


        },
        {
            inputNumber:2,
            name:"Vertical Offset",
            value:10,
            type:'range',
            minMax:[-250,250],


        },{
            inputNumber:3,
            name:"Blur Radius",
            value:15,
            type:'range',
            minMax:[0,250],


        },{
            inputNumber:4,
            name:"Spread Radius",
            value:-3,
            type:'range',
            minMax:[-250,250],


        },
        {
            inputNumber:5,
            name:"Color",
            value:"#4f4f4f",
            type:'color',


        },

    ]
    }
]
export const shadowsSlice = createSlice({
    name:'shadows',
    initialState,
    reducers:{
        addShadow:(state,action)=>{
            
        },
        removeShadow:(state,action)=>{
        },
        updateShadow:(state,action)=>{
        },
        updateCheckbox:(state,action)=>{
        },}
    })
export const {addShadow,removeShadow,updateShadow,updateCheckbox} = shadowsSlice.actions
export default shadowsSlice.reducer
