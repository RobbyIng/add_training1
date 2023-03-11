export const Main = ({setCount, todos, deleteList, deleteOneTodo}) => {
    const increment = () => setCount((prev) => prev+1);
    const decrement = () => setCount((prev) => prev-1);

    if (!todos.length) {
        return <p>TODO list still empty</p>
    }
return(
    <main className="mt-3">
        <ul className="list-group">
        {todos.map((todo, index) => {
          return <li key={todo.id} className="list-group-item">
            {`${index + 1}.  `}<span>{todo.title}</span>
            <div data-actions>
              <button
                type="submit"
                onClick={() => deleteOneTodo(todo.id)}
                className="btn btn-danger mx-3"
              >
                Удалить
              </button>
              <button
                type="submit"
                onClick={() => console.log('изменить')}
                className="btn btn-warning mx-3"
              >
                Изменить
              </button>
            </div>
          </li>
        })}
      </ul>
    <button onClick={increment}>Plus one</button>
    <button onClick={decrement}>Minus one</button>
    <button type="submit" onClick={deleteList} className="btn btn-danger mt-3">Delete all</button>

</main>
)}   