import { Child } from './Child'
import { useState } from 'react'

function Parents() {
    const [state, setstate] = useState('')

    function handleTime(time: string) {
        setstate(time)
    }

    return (<div>
        <Child color='red' heClicked={() => console.log('hello')} thisIsMyFunction={handleTime} >
            hello world

        </Child>
        <div> the time is {state}</div>
    </div>)

}
export default Parents