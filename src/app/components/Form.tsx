"use client";

import { FormEventHandler } from "react";
import Select from "./Select";
import TextArea from "./Textarea";

const Form = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch("/api/message", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => console.log(res));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <Select name="person" />
        <TextArea name="comment" />
        <button
          type="button"
          className="py-3 px-4 max-w-24 mx-auto inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Complain
        </button>
      </div>
    </form>
  );
};

export default Form;
