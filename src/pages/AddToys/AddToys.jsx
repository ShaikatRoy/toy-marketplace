
const AddToys = () => {
    return (
        <form>
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
                <input type="text" name="userName" placeholder="user name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub-category</span>
                </label>
                <input type="text" name="sub_category" placeholder="sub-category" className="input input-bordered" required />
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
    );
};

export default AddToys;