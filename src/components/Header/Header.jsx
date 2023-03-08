import './header.css'
function Header({count}) {
    return (
        <>
        <header className="wrapper">Header</header>
        <hr />
        {count}
        <hr /> 
        </>
    )
}


export {Header}
// export default Header