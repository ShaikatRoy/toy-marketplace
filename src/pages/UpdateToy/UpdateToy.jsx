
const UpdateToy = () => {

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toy = {
            price,
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
            })

        }
    return (
        <div>
        <h2 className="text-center text-3xl font-bold mb-5">Update your toys here</h2>
        <form onSubmit={handleUpdateToy}>
            <div className="grid grid-cols-1 gap-6">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="price" className="input input-bordered" required />
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
                <input className="btn btn-primary btn-block" type="submit" value="Update Toy" />
            </div>
        </form>
    </div>
    );
};

export default UpdateToy;