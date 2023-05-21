import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateToy = () => {
    const update = useLoaderData();
    console.log(update)

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
        };
        
        fetch(`http://localhost:5000/toys/${update._id}`, {
          method: 'PATCH',
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
                'Product Updated successfully!',
                'success'
              )
              form.reset();
          })
          .catch(error => {
            console.error(error);
          });
      };
      
    return (
        <div>
        <h2 className="text-center text-3xl font-bold mb-5">Update your toys here</h2>
        <form onSubmit={handleUpdateToy}>
            <div className="grid grid-cols-1 gap-6">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="price" defaultValue={update.price} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input type="text" name="quantity" placeholder="quantity" defaultValue={update.quantity} className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" name="description" placeholder="description" defaultValue={update.description} className="input input-bordered"/>
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