import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useToast } from "../../context/toastContext";
import ToastItem from "./Toast";

export default function ToastBox({ content, error = false }) {
  const { toastList } = useToast();

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`position-fixed top-0 end-0 ${
        toastList.length ? "w-25" : "w-0"
      }`}
      style={{ minHeight: "240px", zIndex: 1000 }}
    >
      <ToastContainer position="top-end" className="p-3">
        {toastList && toastList.length ? (
          toastList.map((toast, idx) => <ToastItem toast={toast} idx={idx} />)
        ) : (
          <></>
        )}
      </ToastContainer>
    </div>
  );
}
