import { useFormik } from "formik";
import { FC, useRef, useState } from "react";
import * as Yup from "yup";
import visible from "../../assets/images/visible.svg";
import notVisible from "../../assets/images/notvisible.svg";
import { ButtonLoader } from "../../components/Loader";

interface SignupFormProps {
  loading: boolean;
  mutate: any;
}

export const SignupForm: FC<SignupFormProps> = ({ loading, mutate }) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    studentId: Yup.string()
      .min(8, "Invalid Id")
      .max(8, "Invalid Id")
      .required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
  });
  const inpuRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      password: "",
      studentId: "",
    },

    onSubmit: async ({ fullname, email, password, studentId }) => {
      await mutate({ fullname, email, password, studentId });
    },
    validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="get-started">
        <input
          ref={inpuRef}
          id="fullname"
          name="fullname"
          inputMode="text"
          className="auth-input"
          placeholder="Full Name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.fullname}
        />
        {formik.touched.fullname && formik.errors.fullname ? (
          <div className="error">{formik.errors.fullname}</div>
        ) : null}
        <input
          id="email"
          name="email"
          inputMode="email"
          className="auth-input"
          placeholder="Email Address"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <input
          id="studentId"
          name="studentId"
          inputMode="numeric"
          className="auth-input"
          placeholder="Student Id"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        {formik.touched.studentId && formik.errors.studentId ? (
          <div className="error">{formik.errors.studentId}</div>
        ) : null}

        <div className="password">
          <input
            id="password"
            name="password"
            inputMode="text"
            type={passwordVisible ? "text" : "password"}
            className="auth-input"
            placeholder="Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <img
            src={passwordVisible ? notVisible : visible}
            onClick={() => setPasswordVisible(prevState => !prevState)}
            alt=""
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        <button type="submit" disabled={loading} className="primary-btn ">
          {loading ? <ButtonLoader /> : "Sign up"}
        </button>
      </div>
    </form>
  );
};
