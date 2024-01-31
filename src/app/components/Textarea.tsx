interface Props {
  name: string;
}

const TextArea = ({ name }: Props) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 dark:text-white">
        Comment
      </label>
      <textarea
        name={name}
        id="textarea-label"
        className="py-3 px-4 block w-full   rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
        rows={3}
        placeholder="Write your complaint here..."
      />
    </div>
  );
};

export default TextArea;
