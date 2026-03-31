import { createContext, useState } from "react"; 
export const UserContext = createContext(undefined); 

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }as any}>
      {children}
    </UserContext.Provider>
  );
};