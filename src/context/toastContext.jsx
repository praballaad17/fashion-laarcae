import React, { useContext, useState, createContext } from "react";

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}
export function ToastProvider({ children }) {
  const [toastList, setToastList] = useState([]);

  const addToast = (message) => {
    setToastList((prev) => [
      ...prev,
      {
        message,
      },
    ]);
  };

  const value = {
    toastList,
    addToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
