import React, { useEffect, useState } from "react";
import { app, user, auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userData } from "../../services/modules/appBootstarp/bootstrap.slice";
import { useNavigate } from "react-router-dom";
const Auth = (props) => {
  const { children } = props;
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setUser(user);
        dispatch(userData(user));
      },
      (error) => {
        console.log(error);
      }
    );
    setloading(false);
    return () => unsubscribe();
  }, []);

  if (!loading && user) return children;
  if (!loading && !user) {
    navigate("/");
    return;
  }
};

export default Auth;
