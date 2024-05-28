import { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import formImg from "../../assets/others/authentication1.png";
import { Link } from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { logInUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    try {
      const response = await logInUser(email, password);
      const user = response.user;
    } catch (error) {
      console.error("Error", error);
    }
  };
  const handleOnBlur = () => {
    if (validateCaptcha(captchaRef.current.value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-16">
      <div className="hero bg-base-200 my-20 rounded-xl  shadow-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2">
            <img src={formImg} alt="form image" />
          </div>
          <div className="card md:w-1/2 bg-base-100">
            <h2 className="text-5xl font-bold text-center mb-5">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered"
                  required
                />
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
                  required
                />
                <span
                  className="absolute right-2 bottom-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <FaEye /> : <PiEyeClosedFill />}
                </span>
              </div>
              <div className="form-control mb-5">
                <div className="input input-bordered p-4">
                  <LoadCanvasTemplate />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Type the captcha here..."
                  name="captcha"
                  className="input input-bordered"
                  required
                  ref={captchaRef}
                  onBlur={handleOnBlur}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054B3] text-white"
                  type="submit"
                  value="Sign In"
                  disabled={disabled}
                />
              </div>
            </form>
            <div className="text-center space-y-4 mb-8">
              <p className="text-[#D1A054]">
                New here?{" "}
                <Link to="/signup" className="font-semibold">
                  Create a New Account
                </Link>
              </p>
              <p>Or Sign in with</p>
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
export default Login;
