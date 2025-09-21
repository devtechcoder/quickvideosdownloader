import React, { createContext, useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import { ShowToast, Severty } from "../helper/toast";
import axios from "axios";
import apiPath from "../constants/apiPath";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState({ token: null });
  const [userProfile, setUserProfile] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [refreshUser,setRefreshUser] = useState(false)
  const [refreshBalance, setRefreshBalance] = useState(false);
  const [goldAccount, setGoldAccount] = useState({
    price: 0,
    quantity: 0,
  });

  const [silverAccount, setSilverAccount] = useState({
    price: 0,
    quantity: 0,
  });




  const fetchUser = async (user) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        apiPath.baseURL + `/${apiPath.profile}`,
        {
          headers,
        },
      );
      console.log(response ,"authprofile")
      console.log(response.data.data, "response.data.data");
      const result = response.data.data;

       
      if (result) {
        setUserProfile(result);
    
      }
    } catch (error) {
      console.log(error);
      if(!error?.response?.data?.status){
       localStorage.removeItem("token");
       localStorage.removeItem("userProfile")
      }
    }
  };

  useEffect(() => {
    if (!userProfile) return;

    if (!userProfile.metalBalance) return;

    userProfile.metalBalance.map((item) => {
      if (item.categoryId == "66069035fa639b23dcf4b3a6") {
        const price = item.quantity / item.currentPrice;
        console.log("gold price", price, item.quantity, item.currentPrice);
        setGoldAccount({
          price,
          quantity: item.quantity,
        });
      } else {
        const price = item.quantity / item.currentPrice;
        setSilverAccount({
          price,
          quantity: item.quantity,
        });
      }
    });
  }, [userProfile]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;

    let user = JSON.parse(localStorage.getItem("userProfile"));
    if (user) {
      fetchUser(user);
      //setUserProfile(user)
    setIsLoggedIn(true);
    }
    setSession({ token: token });
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;

    let user = JSON.parse(localStorage.getItem("userProfile"));
    if (user) {
      fetchUser(user);
      //setUserProfile(user)
      setIsLoggedIn(true);
    }
    setSession({ token: token });
    setRefreshUser(false)
  }, [refreshUser]);

  useEffect(() => {
    if (!userProfile) return;
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    if (!isLoggedIn) return;
    // Additional logic on login
  }, [isLoggedIn]);

  const login = () => {
    setIsLoggedIn(true);
    // alert("login");
    return <Navigate to="/login" />;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userProfile");
    setIsLoggedIn(false);
    setSession({ token: null });
    setUserProfile(null); // Set userProfile to null instead of undefined
    ShowToast("Logout Successfully", Severty.SUCCESS);
    // window.location.assign("/login");
    <Navigate to="/login" />;
    return;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        session,
        setSession,
        userProfile,
        setUserProfile,
        login,
        logout,
        goldAccount,
        silverAccount,
        isDarkTheme,
        refreshBalance,
        setRefreshBalance,
        setRefreshUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
