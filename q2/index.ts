import { IModels, quest1 } from "../q1"

export const quest2 = ({a, b}: IModels) =>{
    if(a.length != b.length){
        return undefined
    }else{
        const newArray = a.map((item, index) => {
            if(item === b[index]){
                return item
            }else{
                return undefined
            }
        })
        return newArray
    }

}