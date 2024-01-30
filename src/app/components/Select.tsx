interface Props {
  name: string;
}

const options = [
  { value: "sara-kassem", label: "Sara Kassem (Recommended)" },
  { value: "ali-ghazleh", label: "Ali Ghazleh" },
  { value: "ali-kanso", label: "Ali Kanso" },
  { value: "ali-nouriddine", label: "Ali Nouriddine" },
  { value: "ibrahim-elzein", label: "Ibrahim ElZein" },
  { value: "ibrahim-rubaie", label: "Ibrahim Rubaie" },
  { value: "albert-geokgeuzian", label: "Albert Geokgeuzian", disabled: true },
  { value: "zeina-olabi", label: "Zeina Olabi" },
  { value: "ahmad-elyoussef", label: "Ahmad ElYoussef" },
  { value: "abdullah-alhouda", label: "Abdullah AlHouda" },
  { value: "huda-alzahabi", label: "Huda AlZahabi" },
  { value: "jad-yehya", label: "Jad Yehya" },
  { value: "karim-tabikh", label: "Karim Tabikh" },
  { value: "mohammed-hawa", label: "Mohammed Hawa" },
  { value: "layla-abdulrahman", label: "Layla Abdulrahman" },
  { value: "nesrine-salameh", label: "Nesrine Salameh" },
  { value: "mohammad-nassar", label: "Mohammad Nassar" },
  { value: "lina-annan", label: "Lina Annan" },
  { value: "layal-moti", label: "Layal Moti" },
  { value: "yuri-allam", label: "Yuri Allam" },
];

const Select = ({ name }: Props) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 dark:text-white">
        Person
      </label>
      <div className="relative">
        <select
          name={name}
          data-hs-select='{
    "placeholder": "Choose the annoying person...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
    "dropdownClasses": "mt-2 z-50 w-full max-h-[300px] p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
  }'
        >
          {options.map(({ label, ...rest }) => (
            <option {...rest} key={rest.value}>
              {label}
            </option>
          ))}
        </select>

        <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
          <svg
            className="flex-shrink-0 w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Select;
