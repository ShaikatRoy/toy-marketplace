import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import useTitle from "../../../hocks/useTitle";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    console.log(user, createUser)
    const navigate = useNavigate();
    useTitle('Home');

    const [error, setError] = useState(null);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);

        createUser(email, password, photoURL)
            .then(result => {
                const loggedUser = result.user;
                updateUserData(loggedUser, name, photoURL);
                console.log(loggedUser);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("user name and url updated");
          })
          .catch((error) => {
            setError(error.message);
          });
      };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold mt-3">Register</h1>
                    </div>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photoURL" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        {error && <p className="text-red-500">{error}</p>} 
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="mb-2 mx-auto">
                        <Link to="/login">
                            <button className="btn btn-link">Already have an account? Login here</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
