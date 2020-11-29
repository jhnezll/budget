import fb from "../../util/firebase-config";
import {useRouter} from "next/router";

export default function SignUp() {

    const router = useRouter()

    function signUp(e) {
        e.preventDefault()
        if (e.target.password.value === e.target.confirmPassword.value) {
            fb.auth().createUserWithEmailAndPassword(e.target.email.value, e.target.password.value)
                .then(() => router.push('/'))
                .catch(() => alert("There was an issue with signing up."))
        } else {
            alert("Passwords must match.")
        }

    }

    return(
        <div>
            <form onSubmit={signUp}>
                <input id="email" placeholder="Email" type="email" required/>
                <input id="password" placeholder="Password" type="password" required/>
                <input id="confirmPassword" placeholder="Confirm Password" type="password" required/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}