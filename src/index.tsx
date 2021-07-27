import ReactDOM from "react-dom";
import Parents from "./props/Parents";
import { FindUser } from "./refs/FindUser";
import { GestList } from "./state/GestList";
function App() {
    const dragHandler: React.DragEventHandler<HTMLDivElement> | undefined = (event) => {

        console.log(event);


    }

    return (<div>
        <h1>hello there </h1>
        <div>
            <Parents />
            <FindUser />
            <GestList />

            <div draggable onDragStart={dragHandler}>i am  draggable </div>
        </div>
    </div>)

}

ReactDOM.render(<App />, document.querySelector('#root'))