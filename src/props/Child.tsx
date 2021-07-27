
import { useState, useEffect } from "react"

interface ChildProps {
    color: string,
    heClicked: () => void,
    children: string,
    thisIsMyFunction: (clock: string) => void

}
export const Child = function (props: ChildProps) {
    const [clock, setclock] = useState<string>('')
    setTimeout(() => {
        tick()
    }, 1000);


    function tick() {
        setclock(new Date().toLocaleTimeString())
        props.thisIsMyFunction(clock)
    }

    return (<div>
        <h1>{props.color}</h1>
        <h1>{clock}</h1>
        <button onClick={props.heClicked}> hello </button>
        <br />
        {props.children}
    </div>)

}


// export const NewChild: React.FC<ChildProps> = ({ color, heClicked, children }) => {
//     const [clock, setclock] = useState<string>()


//     setTimeout(() => {
//         tick()
//     }, 1000);


//     function tick() {
//         setclock(new Date().toLocaleTimeString())

//     }



//     return (<div>
//         <h1>{color}</h1>
//         <h1>{clock}</h1>
//         <button onClick={heClicked}></button>
//         {children}
//     </div>)


// }