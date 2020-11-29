import fb from "../../util/firebase-config";
import {useRouter} from "next/router";
import {useState} from "react";

export default function Login() {

    const router = useRouter()
    const [loading, toggleLoading] = useState(false)


    function login(email, password) {
        toggleLoading(true)
        fb.auth().signInWithEmailAndPassword(email, password)
            .then(() => router.push('/'))
            .catch(() => {
                alert("Your email or password was incorrect.")
                toggleLoading(false)
            })
    }

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                login(e.target.email.value, e.target.password.value)
            }}>
                <input name="email" id="email" type="email" placeholder="Email" disabled={loading} required/>
                <input name="password" id="password" type="password" placeholder="Password" disabled={loading} required/>
                <button type="submit" disabled={loading}>Login</button>
            </form>
        </div>
    )
}