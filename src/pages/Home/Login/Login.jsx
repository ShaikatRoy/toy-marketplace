import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">

                </div>
                <div className="card flex-shrink- w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold mt-3">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="mb-2 mx-auto">
                        <Link to="/register">
                            <button className="btn btn-link">Do not have an account? Register here</button>
                        </Link>
                    </p>

                </div>
                <div className="divider">OR</div>
                <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-wide shadow-2xl bg-base-100"><FaGoogle className="text-2xl me-3" />Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;