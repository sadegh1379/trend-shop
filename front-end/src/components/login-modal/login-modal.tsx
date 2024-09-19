import { FC, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "state-manager/store";
import { requestToServer } from "../../request-handler";
import { LoginModalContainer } from "./login-model.style";
import {
  changeShowLoginModal,
  changeToken,
} from "state-manager/reducer/profile";
import { POSTUserLogin, POSTUserRegister } from "api/auth";

const LoginModal: FC = () => {
  const dispatch = useDispatch();
  const [currentState, setCurrentState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!phone || !password || (currentState === "Sign Up" && !name)) {
      return toast.error("لطفاً تمام فیلدها را پر کنید");
    }

    setLoading(true);

    if (currentState === "Sign Up") {
      POSTUserRegister({ name, password, phone })
        .then((res) => {
          dispatch(changeToken(res.token));
          toast.success("ثبت نام با موفقیت انجام شد");
          handleCloseModal();
          setName("");
          setPhone("");
          setPassword("");
        })
        .finally(() => setLoading(false));
    } else {
      POSTUserLogin({ phone, password })
        .then((res) => {
          dispatch(changeToken(res.token));
          toast.success("ورود با موفقیت انجام شد");
          handleCloseModal();
          setName("");
          setPhone("");
          setPassword("");
          setLoading(false);
        })
        .finally(() => setLoading(false));
    }
  };

  const handleCloseModal = () => {
    dispatch(changeShowLoginModal(false));
  };

  return (
    <LoginModalContainer>
      <div className="login_modal">
        <form className="login_modal_container" onSubmit={handleSubmit}>
          <div className="login_modal_title">
            <h2>{currentState === "Sign Up" ? "ثبت نام" : "ورود"}</h2>
            <IoClose className="pointer" onClick={handleCloseModal} size={20} />
          </div>
          <div className="login_modal_inputs">
            {currentState === "Sign Up" && (
              <input
                type="text"
                placeholder="نام"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="phone"
              placeholder="شماره همراه"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="رمز ورود"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading
              ? "در حال پردازش..."
              : currentState === "Sign Up"
                ? "ثبت نام"
                : "ورود"}
          </button>
          <div className="login_modal_condition">
            <input type="checkbox" required />
            <p>تمام قوانین را خوانده‌ام</p>
          </div>
          {currentState === "Login" ? (
            <p>
              ساخت اکانت جدید؟{" "}
              <span onClick={() => setCurrentState("Sign Up")}>کلیک کنید</span>
            </p>
          ) : (
            <p>
              اکانت ساخته‌ام؟{" "}
              <span onClick={() => setCurrentState("Login")}>ورود</span>
            </p>
          )}
        </form>
      </div>
    </LoginModalContainer>
  );
};

export { LoginModal };
