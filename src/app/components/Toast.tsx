import { useEffect, useRef, useState } from "react";

interface Props {
  message?: string;
  status?: "success" | "error";
  timeout?: number;
  keep?: boolean;
  delay?: number;
  onExit?: () => void;
}

const CLASSNAMES = {
  div: {
    success:
      "cursor-pointer animate-slide-in-left fixed bottom-10 left-2 max-w-xs bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500",
    error:
      "cursor-pointer animate-slide-in-left fixed bottom-10 left-2 max-w-xs bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg dark:bg-red-800/10 dark:border-red-900 dark:text-red-500",
  },
  button: {
    success:
      "inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-teal-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-teal-200",
    error:
      "inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-red-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-red-200",
  },
};

const Toast = ({
  message,
  status = "success",
  timeout = 4000,
  delay,
  keep = false,
  onExit = () => undefined,
}: Props) => {
  const [visible, setVisible] = useState(!!delay);

  const ref = useRef<HTMLDivElement>(null);

  const handleOnClose = () => {
    onExit();
    /* animate the toast out */
    ref.current?.classList.add("animate-slide-out-left");
    setTimeout(() => {
      ref.current?.style.setProperty("left", "-100vw");
      setVisible(false);
    }, 400);
  };

  useEffect(() => {
    /* incase you want to keep the toast visible */
    if (keep) return;

    /* delay the visibility of the toasy */
    let delayTimer: NodeJS.Timeout;
    delayTimer = setTimeout(() => {
      setVisible(true);
    }, delay);

    const timeoutTimer = setTimeout(() => {
      handleOnClose();
      /* we need to consider if there was any time delay */
    }, (delay || 0) + timeout);

    return () => {
      clearTimeout(timeoutTimer);
      clearTimeout(delayTimer);
    };
  }, [timeout, delay, ref]);

  const handleClose = () => handleOnClose();

  return (
    visible && (
      <div
        className={CLASSNAMES.div[status]}
        role="alert"
        ref={ref}
        onClick={handleClose}
      >
        <div className="flex p-4">
          {message}
          <div className="ms-auto">
            <button
              type="button"
              className={CLASSNAMES.button[status]}
              onClick={handleClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Toast;
