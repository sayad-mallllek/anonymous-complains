"use client";

import { FormEventHandler } from "react";

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
        <textarea
          className="break-words resize-none max-h-96 h-[90vh] max-w-[700px] w-[90vw]"
          placeholder="Enter something funny."
          id="text"
          name="text"
          rows={4}
          required
        />
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default Form;
