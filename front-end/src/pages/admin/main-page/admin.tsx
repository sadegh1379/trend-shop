import { useState, type FC } from "react";
import { AdminContainer } from "./admin.style";
import { POSTUserLogin } from "api/auth";
import { GETUserInfo } from "api/user";
import { useDispatch } from "react-redux";
import { changeToken } from "state-manager/reducer/profile";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

interface AdminProps {}

const Admin: FC<AdminProps> = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    POSTUserLogin({ phone, password }).then((res) => {
      dispatch(changeToken(res.token));
      GETUserInfo().then((user) => {
        if (user.isAdmin) {
          toast.success("ورود موفق");
          navigate("/admin/product-list");
        } else {
          toast.error("شما دسترسی به ادمین ندارید.");
          navigate("/");
        }
      });
    });
    setLoading(false);
  };
  return (
    <AdminContainer>
      <div className="login_modal">
        <form className="login_modal_container" onSubmit={handleSubmit}>
          <div className="login_modal_title">
            <h2 className="text-center">ورود ادمین</h2>
          </div>
          <div className="login_modal_inputs">
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
            ورود
          </button>
        </form>
      </div>
    </AdminContainer>
  );
};

export default Admin;
