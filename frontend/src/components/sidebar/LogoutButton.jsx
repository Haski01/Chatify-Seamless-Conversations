import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const [loading, logout] = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="size-6 text-white cursor-pointer ml-2"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner" />
      )}
    </div>
  );
};

export default LogoutButton;
