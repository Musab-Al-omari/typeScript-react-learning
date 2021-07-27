import { useState } from "react"

export const GestList: React.FC = () => {
    const [input, setinput] = useState('')
    const [lines, setlines] = useState<string[]>([])



    const handleSubmit: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
        setinput(e.target.value)

    }
    const handleClicked: React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
        setinput('')
        setlines([...lines, input])
    }

    return (
        <div>
            <h1>Party Gest List </h1>
            <ul>
                {lines.map((value, index) => {
                    return (<li key={index}>{value}</li>)
                })}
            </ul>
            <input type="text" value={input} onChange={handleSubmit} />
            <button onClick={handleClicked}>hello</button>
        </div>)


}