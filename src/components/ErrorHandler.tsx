import { FC } from "react";
import FadeIn from "react-fade-in";

interface ErrorHandlerProps {
  error: any;
}

export const ErrorHandler: FC<ErrorHandlerProps> = ({ error }) => {
  if (error) {
    return (
      <div className="error-handler">
        <FadeIn>
          <div className="alert alert-danger text-center" role="alert">
            <p>
              {error.response && error.response.data.message
                ? error.response.data.message
                : "Something went wrong"}
            </p>
          </div>
        </FadeIn>
      </div>
    );
  }
  return null;
};
