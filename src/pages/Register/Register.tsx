import React, { FC } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { ErrorHandler } from "../../components/ErrorHandler";
import { AuthNav } from "../../components/Navigationbar";
import { SignupForm } from "./SignupForm";
import { useRegister } from "../../hooks/mutation/useRegister";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const { mutate, error, loading } = useRegister();
  return (
    <div className="register-page py-5">
      <AuthNav />
      <div className="holder">
        <div className="form-container">
          <FadeIn>
            <div className="form-title">
              <h1>It’s free to create an account.</h1>
            </div>
            <div className="login-link">
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
            <div>
              <ErrorHandler error={error} />
              <SignupForm mutate={mutate} loading={loading} />
              <p
                className="text-center mt-3"
                style={{
                  fontSize: "12px",
                  lineHeight: "1.5",
                  fontWeight: "lighter",
                }}
              >
                By clicking “Sign Up”, I agree to Srides Terms of Service and
                Privacy Policy
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
export default Register;
