
import { Form } from '../Form'
import './header.css'
function Header({count, addToList}) {
    return (
        <>
        <header className="wrapper">Header</header>
        <Form addToList = {addToList}/>
        <hr />
        {count}
        <hr /> 
        </>
    )
}


export {Header}
// export default Header