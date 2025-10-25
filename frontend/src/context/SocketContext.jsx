import { useState, useEffect, createContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import { useContext } from "react";

const SocketContext = createContext();

// hook to consume the value of contextProvider
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      // backend url
      const socket = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      // handle the response from the backend and set to our useState hook
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
