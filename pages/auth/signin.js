import fb from "../../util/firebase-config";
import {useRouter} from "next/router";
import {useState} from "react";

export default function Signin() {

    const router = useRouter()
    const [loading, toggleLoading] = useState(false)


    function login(e) {
        toggleLoading(true)
        fb.auth().signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
            .then(() => router.push('/'))
            .catch(() => {
                alert("Your email or password was incorrect.")
                toggleLoading(false)
            })
    }

    return(
        // <div>
        //     <form onSubmit={e => {
        //         e.preventDefault()
        //         login(e.target.email.value, e.target.password.value)
        //     }}>
        //         <input name="email" id="email" type="email" placeholder="Email" disabled={loading} required/>
        //         <input name="password" id="password" type="password" placeholder="Password" disabled={loading} required/>
        //         <button type="submit" disabled={loading}>Signin</button>
        //     </form>
        // </div>

        <div className="h-screen flex justify-center items-center px-12 bg-gray-100">
            <div className="container mx-auto ">
                <div className="flex justify-center px-6 y-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg registerBG"/>
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">👋 Welcome Back</h3>

                            {/*Form*/}
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">

                                {/*Email*/}
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>

                                {/*Password*/}
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>

                                {/*Sign In*/}
                                <div className="mb-6 text-center">
                                    <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">Sign In</button>
                                </div>

                                <hr className="mb-6 border-t"/>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./register.html"
                                    >
                                        Create an Account!
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./forgot-password.html"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}