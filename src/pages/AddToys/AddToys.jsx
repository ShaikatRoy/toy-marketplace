import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from 'sweetalert2'

const AddToys = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.url.value;
        const toyName = form.name.value;
        const userName = form.userName.value;
        const email = user?.email;
        const subCategory = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toy = {
            photo,
            toyName,
            userName,
            email,
            subCategory,
            price,
            rating,
            quantity,
            description
        }
        console.log(toy);

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Good job!',
                    'Product added successfully!',
                    'success'
                  )
                  form.reset();
            })
    }

    return (
        <div>
            <h2 className="text-center text-3xl font-bold mb-5">Add your toys here</h2>
            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name="url" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="name" placeholder="toy name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="userName" defaultValue={user?.displayName} placeholder="user name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <select name="sub_category" className="input input-bordered" required>
                            <option value="">Select sub-category</option>
                            <option value="Marvel">Marvel</option>
                            <option value="DC">DC</option>
                            <option value="Disney">Disney</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="description" placeholder="description" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add Toys" />
                </div>
            </form>
        </div>
    );
};

export default AddToys;