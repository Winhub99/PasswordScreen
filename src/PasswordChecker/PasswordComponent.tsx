import { useEffect, useState } from "react"
import "./Password.css"
const numbers=[1,2,3,4,5,6,7,8,9,0]
const pass="4569"

const PasswordComponent =() => {
    const [clickedNumbers, setClickedNumbers] = useState<number[]>([])
    const [message,setMessage] = useState("")
    const [iscorrect ,setIscorrect] = useState(false)

    useEffect(()=>{
        if(clickedNumbers.length>0){
            setMessage("")
        }
        if(clickedNumbers.length===pass.length){
            //compare password
            if(clickedNumbers.join("")===pass){
                setClickedNumbers([])
                setMessage("Success!")
                setIscorrect(true)
        }else{
            console.log("incorrect Password")
                setClickedNumbers([])
                setMessage("Incorrect Password!")
        }
    }
    },[clickedNumbers])

    return (
        <div className="container">
        <div className="phone">
            {iscorrect?(<div> {message}</div>):(<>
                 <div className="input">{clickedNumbers}{message}</div>
                 {numbers.map(num=>(
                    <div className= {num===0?"number zero":"number"}  >
                      <button onClick={()=>setClickedNumbers((prev)=>[...prev,num])}>{num}</button>
                    </div>))
                }</>)}
                        
        </div>
        </div>
    )
}


export default PasswordComponent;