export default function getBoxShadowValue(shadow){
    let finalString=""
    shadow.forEach((element,index) => {
        if(element.active){
            element.inputs.forEach(input=>{
                input.type=="range"?finalString+=`${input.value}px `:finalString+=`${input.value}`
            })
            if(element.inset) finalString+=` inset`
            index===(shadow.length -1)?finalString+=";":finalString+=","
        }
        
    })
    return finalString
}