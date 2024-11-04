import React, { createContext, useState, ReactNode } from "react";

interface UserContextType {
  userId: string | null;
  setUserId: (id: string) => void;
  userType: string | null;
  setUserType: (userType: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ userId, setUserId, userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};