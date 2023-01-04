import "./Header.scss"
import Logo from "../assets/logo.svg";
import Todo from "../assets/todo.svg";

export function Header() {
    return(
        <header className="Header">
            <img src={Logo} alt="logo" />
            <img src={Todo} alt="" />
        </header>
    )
}