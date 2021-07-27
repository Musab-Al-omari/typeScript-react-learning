import { useState } from "react"
export const FindUser: React.FC = () => {
    const thisMyObj = [{ name: 'mosab', age: 23 }, { name: 'mosab1', age: 24 }, { name: 'mosab2', age: 23 },]
    const [input, setinput] = useState('')
    const [MyObj, setMyObj] = useState<{ name: string, age: number } | undefined>({ name: '', age: 0 })


    function handleClicked() {

        let newObj = thisMyObj.find((obj) => {
            return obj.name === input
        });
        console.log(newObj);

        setMyObj(newObj)



    }

    return (<div>
        <h1>Find User</h1>
        <input value={input} onChange={(e) => { setinput(e.target.value) }} />
        <button onClick={handleClicked}>find</button>
        {MyObj && MyObj.name}
        {MyObj && MyObj.age}
    </div>)
}