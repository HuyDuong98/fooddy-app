import { useContext } from "react"
import { Context } from "./AppProvider"

export default function useAuth() {
    let { login, user, handleLogin, hadleLogout } = useContext(Context)
    return { login, user, handleLogin, hadleLogout }
}