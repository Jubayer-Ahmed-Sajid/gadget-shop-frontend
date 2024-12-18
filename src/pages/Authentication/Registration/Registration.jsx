import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import axios from "axios";
import { toast } from "sonner";
const Registration = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { createUser, googleLogin } = UseAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const data = await googleLogin();

      const email = data?.user?.email;
      const photoURL = data?.user?.photoURL;
      const lastName = data?.user?.displayName;
      const role = "buyer";
      const whishList = [];
      const status = "approved";
      const userDetails = {
        email,
        photoURL,
        lastName,
        role,
        whishList,
        status,
      };

      const minDelay = 1000;
      const startTime = Date.now();
      toast.loading("User is creating...");
      const userData = await axios.post(
        "http://localhost:5000/users",
        userDetails
      );
      const passed = Date.now() - startTime;
      if (passed < minDelay) {
        await new Promise((resolve) => setTimeout(resolve, minDelay - passed));
      }
     
      toast.dismiss();
      toast.success("User successfully created!!");
      navigate("/");
    } catch (error) {
      toast.dismiss();
      toast.error(`${error.message}`);
    }
  };

  const onSubmit = async (data) => {
    try {
      // loading time start
      const minDelay = 1000;
      const startTime = Date.now();
      // loading starts
      toast.loading("Creating user...");
      const { email, password, firstName, lastName, role } = data;
      const whishList = [];
      const status = role === "buyer" ? "approved" : "pending";
      const userDetails = { email, lastName, role, status, whishList };

      await createUser(email, password, firstName, lastName);
      const userData = await axios.post(
        "http://localhost:5000/users",
        userDetails
      );
      const passed = Date.now() - startTime;

      // toast continues even if data fetched earlier

      if (passed < minDelay) {
        await new Promise((resolve) => setTimeout(resolve, minDelay - passed));
      }
      console.log(userData);
      // loading toast dismissed
      toast.dismiss();

      // success toast
      toast.success("User successfully created");
      navigate("/");
    } catch (error) {
      toast.dismiss();
      toast.error(error?.message) || "Failed to create user. Please try again.";
    }
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>

                <select
                  className="select select-bordered w-full"
                  {...register("role", { required: true })}
                >
                  <option disabled selected>
                    Select Role
                  </option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
              </div>
              {errors.role?.type === "required" && (
                <p className="text-red-600">Role is required</p>
              )}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="divider">OR</div>
              <div onClick={handleGoogleLogin} className="flex gap-4 btn ">
                <div className="text-2xl">
                  <FcGoogle></FcGoogle>
                </div>
                Login With Google
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
