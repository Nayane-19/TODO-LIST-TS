import "./TodoCreate.scss"
import Plus from "../assets/plus.svg"

export function TodoCreate() {
    return (
        <form className="TodoCreate">
            <input type="text" />
            <button type="submit">
                Criar
                <img src={Plus} alt="" />
            </button>
        </form>
    );
}