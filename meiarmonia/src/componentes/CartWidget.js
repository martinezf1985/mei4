import {UseEffect, UseState } from "react"

const cards =[
{
description :'simple description 1',
user:{
    name:'fer',
    carrera:'react'
}
},
{
    description :'simple description 2',
    name:'pepe',
    carrera:'ux/ui'
}
]



export default function CartWidget (){
const [dataCartWidget, setDataCartWidget] = useState([]);
const [loading, setLoading]= useState(false)


useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setDataCartWidget(cards) 
        setLoading(false) 
    }, 3000);
   
}, [])

useEffect(() => {
    
}, [dataCartWidget])

if(loading){
    return (
        <h3>loading...</h3>
    )
}
return (
    <> 
     CartWidget
    </>
)
      


}