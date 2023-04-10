import React, { useContext, useState, createContext } from "react";

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}
export function ToastProvider({ children }) {
  const [toastList, setToastList] = useState([]);

  const addToast = (message, isError = false) => {
    setToastList((prev) => [
      ...prev,
      {
        message,
        isError,
      },
    ]);
  };

  const removeToast = (idx) => {
    const unfilter = toastList;
    if (idx > -1) {
      // only splice array when item is found
      unfilter.splice(idx, 1); // 2nd parameter means remove one item only
    }
    setToastList(unfilter);
  };

  const value = {
    toastList,
    addToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}
