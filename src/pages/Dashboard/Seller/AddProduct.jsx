import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import axios from "axios";

const AddProduct = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { user } = UseAuth();
  const onSubmit = (data) => {
    const { title, brand, category, price, quantity, description, imageURL } =
      data;
    const fl_quantity = parseFloat(quantity);
    const fl_price = parseFloat(price);
    const email = user.email;
    const productDetails = {
      email,
      title,
      brand,
      category,
      fl_price,
      fl_quantity,
      description,
      imageURL,
    };
    const token = localStorage.getItem("access-token");
    axios.post('http://localhost:5000/add-product',productDetails,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{
        console.log(res.data);
    })
   
  };
  return (
    <div>
      <div className="bg-base-200 min-h-screen">
        <div className=" shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
            <div className="lg:flex gap-4 justify-center items-center w-full">
              <div className="form-control w-1/3">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter product Name"
                  className="input input-bordered"
                  {...register("title", { required: true })}
                />
                {errors.title?.type === "required" && (
                  <p className="text-red-600">Title e is required</p>
                )}
              </div>

              <div className="form-control w-1/3">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Brand Name"
                  className="input input-bordered"
                  {...register("brand", { required: true })}
                />
                {errors.brand?.type === "required" && (
                  <p className="text-red-600">Brand name is required</p>
                )}
              </div>
              <div className="form-control w-1/3">
                <label className="label">
                  <span className="label-text">Image url</span>
                </label>
                <input
                  type="url"
                  placeholder="Enter image url"
                  className="input input-bordered"
                  {...register("imageURL", { required: true })}
                />
                {errors.imageURL?.type === "required" && (
                  <p className="text-red-600">Image URL is required</p>
                )}
              </div>
            </div>

            <div className="lg:flex gap-4 justify-between">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter product Price"
                  className="input input-bordered"
                  {...register("price", { required: true })}
                />
                {errors.price?.type === "required" && (
                  <p className="text-red-600">price e is required</p>
                )}
              </div>{" "}
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter product quantity"
                  className="input input-bordered"
                  {...register("quantity", { required: true })}
                />
                {errors.quantity?.type === "required" && (
                  <p className="text-red-600">quantity is required</p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>

              <select
                className="select select-bordered w-full"
                {...register("category", { required: true })}
              >
                <option disabled selected>
                  Select Category
                </option>
                <option value="smartphone">SmartPhone</option>
                <option value="tablet">Tablet</option>
                <option value="laptop">Laptop</option>
                <option value="headset">Headset</option>
                <option value="watch">Watch</option>
              </select>
            </div>
            {errors.category?.type === "required" && (
              <p className="text-red-600">category is required</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Enter description"
                className="input h-40"
                {...register("description", { required: true, minLength: 6 })}
              />
            </div>
            {errors.description?.type === "required" && (
              <p className="text-red-600">Description is required</p>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
