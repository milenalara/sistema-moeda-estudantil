import React, { createContext, useState, useEffect, ReactNode } from "react";

interface UserContextType {
  userId: string | null;
  setUserId: (id: string) => void;
  userType: string | null;
  setUserType: (userType: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(()=> {
    return localStorage.getItem("userId");
  });
  const [userType, setUserType] = useState<string | null>(()=> {
    return localStorage.getItem("userType");
  });

  useEffect(()=> {
    if(userId !== null) {
      localStorage.setItem("userId", userId)
    } else {
      localStorage.removeItem("userId");
    }
  }, [userId]);

  useEffect(() => {
    if (userType !== null) {
      localStorage.setItem("userType", userType);
    } else {
      localStorage.removeItem("userType");
    }
  }, [userType]);

  return (
    <UserContext.Provider value={{ userId, setUserId, userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};