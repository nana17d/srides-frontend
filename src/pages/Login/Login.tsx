import { FC } from "react";
import { Link } from "react-router-dom";
import { ErrorHandler } from "../../components/ErrorHandler";
import { LoginForm } from "./LoginForm";
import { useLogin } from "../../hooks/mutation/useLogin";
import { AuthNav } from "../../components/Navigationbar";

const Login: FC<{}> = () => {
  const { mutate, error, loading } = useLogin();
  return (
    <div className="login-page">
      <AuthNav />
      <div className="holder">
        <div className="form-container">
          <div className="form-title">
            <h1>Happy to see you here once again.</h1>
          </div>
          <div className="login-link">
            <p>
              Don't have an account?{" "}
              <span>
                <Link to="/register">Sign Up</Link>
              </span>
            </p>
          </div>
          <div>
            <ErrorHandler error={error} />
            <LoginForm loading={loading} mutate={mutate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
