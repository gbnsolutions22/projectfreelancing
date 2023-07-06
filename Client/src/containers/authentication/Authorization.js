import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userData } from "../../services/modules/appBootstarp/bootstrap.slice";
import { useNavigate } from "react-router-dom";
const Auth = (props) => {

  const path = location.pathname;
  const { children } = props;
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setloading(true);
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        dispatch(userData(user));
        setloading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => unsubscribe();
  }, []);

  if (!loading && !user) {
    navigate("/");
    return;
  }

  if (user) return children;
  if (!user?.email && !user?.displayName && path != "/profile") return navigate("/profile");
};

export default Auth;
