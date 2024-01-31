"use client";

import { FormEventHandler, useEffect, useState } from "react";
import Select from "./Select";
import TextArea from "./Textarea";
import Toast from "./Toast";

const Form = () => {
  const [toast, setToast] = useState<{
    status: "success" | "error";
    message: string;
  } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClearToast = () => setTimeout(() => setToast(null), 500);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if (!data.person || !data.comment)
      return setToast({
        status: "error",
        message: "Please fill in all the fields!",
      });

    setSubmitted(true);

    fetch("/api/message", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() =>
        setToast({
          status: "success",
          message: "Your complaint has been submitted successfully!",
        })
      )
      .catch((err) =>
        setToast({
          status: "error",
          message:
            err.message ||
            "Something went wrong, please try again later or contact the admin!",
        })
      )
      .finally(() => {
        setSubmitted(false);
        handleClearToast();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6 min-w-56 sm:min-w-96">
        <Select name="person" />
        <TextArea name="comment" />
        <button
          disabled={submitted}
          type="submit"
          className="py-3 px-4 max-w-24 mx-auto inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Complain
        </button>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          status={toast.status}
          onExit={handleClearToast}
        />
      )}
    </form>
  );
};

export default Form;
