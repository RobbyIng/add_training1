export const Main = ({setCount, todos, deleteList}) => {
    const increment = () => setCount((prev) => prev+1);
    const decrement = () => setCount((prev) => prev-1);
return(

<main className="mt-3">
    <ol className="list-group">
{todos.map((todo) => {
    return <li className="list-group-item" key={todo.id}>{todo.title}</li>
})}

    </ol>

<button onClick={increment}>Plus one</button>
<button onClick={decrement}>Minus one</button>
<button onClick={deleteList}>Delete</button>

</main>
)


}   