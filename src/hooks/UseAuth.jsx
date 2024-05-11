import {useContext} from "react";
import {AuthContext} from "../FirebaseProvider/AuthProvider";

const UseAuth = () => {
  const myHook = useContext(AuthContext);
  return myHook;
};

export default UseAuth;
