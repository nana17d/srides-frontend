import { FC } from "react";
import FadeIn from "react-fade-in";
import * as Yup from "yup";
import { useFormik } from "formik";
import { hasToken } from "../../config/accessToken";
import { getUser } from "../../config/user";
import { Link, useHistory } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { ButtonLoader } from "../../components/Loader";
import { useGenerateTicket } from "../../hooks/mutation/useGenerateTicket";
import { ErrorHandler } from "../../components/ErrorHandler";

interface TicketGeneratingFormProps {}

export const TicketGeneratingForm: FC<TicketGeneratingFormProps> = () => {
  const validationSchema = Yup.object().shape({
    from: Yup.string().required("Required"),
    to: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
  });

  const history = useHistory();
  const { setTicket, ticket } = useStore();

  const buses = [
    "Yutong Bus GR 2001-21",
    "Yutong Bus GX 2451-15",
    "Yutong Bus GS 529-12",
    "Volkswagen AG GR 1616 Z",
    "Toyota Sora FC GA 2231-14",
    "Yutong Bus ZK6118HGA AZ 2121-87",
  ];
  const generateRandomNumber = (limit: number, init: number = 0): number => {
    return Math.floor(Math.random() * limit) + init;
  };
  const { mutate, loading, isSuccess, error } = useGenerateTicket();
  const formik = useFormik({
    initialValues: {
      from: ticket.from,
      to: ticket.to,
      date: ticket.date,
    },
    onSubmit: async ({ from, to, date }) => {
      if (!hasToken() && !getUser()) {
        history.push("/login");
        setTicket({ from, to, date });
      }
      await mutate({
        from,
        to,
        date,
        seatNo: `${generateRandomNumber(25, 1)}`,
        bus: `${buses[generateRandomNumber(buses.length - 1)]}`,
      });
    },
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="generate-ticket ">
        <ErrorHandler error={error} />
        {isSuccess && (
          <div className="success-alert">
            <div
              className="alert alert-success text-center mt-3"
              style={{ fontSize: "13px" }}
              role="alert"
            >
              Ticket generated successfully. click{" "}
              <Link to="/me/tickets">here</Link> to view your tickets
            </div>{" "}
          </div>
        )}
        <div className="row">
          <div className="col-12 col-xl-6">
            {" "}
            <div className="row">
              {" "}
              <div className="col-12 col-xl-6  d-flex flex-column align-items-center d-xl-block">
                {" "}
                <input
                  id="from"
                  name="from"
                  inputMode="text"
                  className="ticket-input"
                  placeholder="From"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.from}
                />{" "}
                {formik.touched.from && formik.errors.from ? (
                  <FadeIn>
                    {" "}
                    <div className="error"> {formik.errors.from}</div>{" "}
                  </FadeIn>
                ) : null}
              </div>{" "}
              <div className="col-12 col-xl-6 d-flex flex-column align-items-center d-xl-block">
                {" "}
                <input
                  id="to"
                  name="to"
                  inputMode="text"
                  className="ticket-input"
                  placeholder="To"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.to}
                />{" "}
                {formik.touched.to && formik.errors.to ? (
                  <FadeIn>
                    {" "}
                    <div className="error"> {formik.errors.to}</div>{" "}
                  </FadeIn>
                ) : null}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-12 col-xl-6">
            {" "}
            <div className="row">
              {" "}
              <div className="col-12 col-xl-6 d-flex flex-column align-items-center d-xl-block">
                {" "}
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="ticket-input"
                  placeholder="Date"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.date}
                />{" "}
                {formik.touched.date && formik.errors.date ? (
                  <FadeIn>
                    {" "}
                    <div className="error"> {formik.errors.date}</div>{" "}
                  </FadeIn>
                ) : null}
              </div>{" "}
              <div className="col-12 col-xl-6 d-flex flex-column align-items-center mt-4  d-xl-block">
                <button
                  type="submit"
                  disabled={loading}
                  className="primary-btn"
                >
                  {loading ? <ButtonLoader /> : "Generate"}
                </button>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>{" "}
    </form>
  );
};
