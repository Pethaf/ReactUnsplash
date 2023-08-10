import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { useGlobalContext } from "../Context";
import { useEffect } from "react";
const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
    useEffect(()=> {
        localStorage.getItem("dark")
    },[])
    return (
        <section className="toggle-container">
            <button onClick={toggleDarkTheme} className="dark-toggle">
                {isDarkTheme ? <BiSolidMoon className="toggle-icon" /> : <BiSolidSun className="toggle-icon"/>}
            </button>
        </section>
    )
}

export { ThemeToggle }