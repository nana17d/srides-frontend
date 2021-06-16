import { FC } from "react";
import FadeIn from "react-fade-in";
import { useHistory } from "react-router-dom";
import { AuthNav } from "../../components/Navigationbar";

interface NotfoundProps {}

const Notfound: FC<NotfoundProps> = () => {
  const { push } = useHistory();
  return (
    <div className="notfound-page">
      <AuthNav />

      <div className="body">
        <FadeIn>
          <h1>Oops!</h1>
          <h3>The page you are looking for doesnt exist</h3>
          <p>Don't panic, just click the big button to return home</p>
          <hr />
          <div>
            <button onClick={() => push("/")}>Home</button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Notfound;
