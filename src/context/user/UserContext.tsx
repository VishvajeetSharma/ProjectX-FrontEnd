import { createContext, useState } from "react";
import type { ReactNode } from "react"; // type-only import

// ---- Types ----
export interface User {
  name: string;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// ---- Context ----
export const UserContext = createContext<UserContextType | undefined>(undefined);

// ---- Provider ----
interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};