import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="bg-base-200 min-h-screen">
        <div className="hero-content">
          <div className="card bg-base-100 pb-4 w-2/5 shadow-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  className="input input-bordered"
                  {...register("firstName", { required: true })}
                />
              </div>
              {errors.firstName?.type === "required" && (
                <p className="text-red-600">First name is required</p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="input input-bordered"
                  {...register("lastName", { required: true })}
                />
              </div>
              {errors.lastName?.type === "required" && (
                <p className="text-red-600">Last name is required</p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true, minLength: 6 })}
                />
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password should at least be six characters
                </p>
              )}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
            </form>
            <div>
              <p className="text-center my-2">
                Already have an account?{" "}
                <Link className="text-blue-500 hover:underline" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
