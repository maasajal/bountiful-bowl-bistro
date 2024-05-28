import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import formImg from "../../assets/others/authentication1.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      photo: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    try {
      const response = await createUser(email, password);
      const user = response.user;
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-16">
      <div className="hero bg-base-200 my-20 rounded-xl  shadow-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
            <img src={formImg} alt="form image" />
          </div>
          <div className="card md:w-1/2 bg-base-100">
            <h2 className="text-5xl font-bold text-center mb-5">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control relative mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password should not be less than 6 characters!",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain at least one capital letter and one special character (! @ # $ % ^ & *)",
                    },
                  })}
                />
                <span
                  className="absolute right-2 bottom-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <FaEye /> : <PiEyeClosedFill />}
                </span>
              </div>
              <div>
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    {errors.password?.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    {errors.password?.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054B3] text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center space-y-4 mb-8">
              <p className="text-[#D1A054]">
                Already registered?{" "}
                <Link to="/login" className="font-semibold">
                  Go to log in
                </Link>
              </p>
              <p>Or Sign up with</p>
              <div className="px-8 mb-6 flex justify-center gap-4">
                <button className="btn btn-outline rounded-full">
                  <FaGoogle className="text-lg" />
                </button>
                <button className="btn btn-outline rounded-full">
                  <FaGithub className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
