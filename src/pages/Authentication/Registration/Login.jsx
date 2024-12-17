import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";


const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
 
  const { login, googleLogin, user, loading } = UseAuth();
  const handleGoogleLogin = () => {
    googleLogin();
    navigate('/');
  };
const navigate = useNavigate()
  const onSubmit = (data) => {
    const { email, password, firstName, lastName } = data;
    login(email, password, firstName, lastName)
      .then(() => {
        // const users= auth.login;
        // updateProfile(users,{
        //   displayName:lastName
        // })
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
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
                <button className="btn btn-primary">Login</button>
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
                New to the site?{" "}
                <Link className="text-blue-500 hover:underline" to={"/registration"}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
