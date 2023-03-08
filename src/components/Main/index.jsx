export const Main = ({setCount}) => {
    const increment = () => setCount((prev) => prev+1);
    const decrement = () => setCount((prev) => prev-1);
return(
    <>
<header>Main</header>
<button onClick={increment}>Plus one</button>
<button onClick={decrement}>Minus one</button>
    </>

)


}   