// UserContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface UserContextType {
  userId: string | null;
  setUserId: (userId: string | null) => void;
  sessionExpirationTime: number | null;
  setSessionExpirationTime: (expirationTime: number | null) => void;
}

const UserContext = createContext<UserContextType>({
  userId: null,
  setUserId: () => {},
  sessionExpirationTime: null,
  setSessionExpirationTime: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionExpirationTime, setSessionExpirationTime] = useState<number | null>(null);

  return (
    <UserContext.Provider value={{ userId, setUserId, sessionExpirationTime, setSessionExpirationTime }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
