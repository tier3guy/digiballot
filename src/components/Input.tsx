import { FC } from "react";

interface InputProps {
  value: string | number;
  setValue: Function;
  placeholder?: string;
  label?: string;
  important?: boolean;
  className?: string;
}

const Input: FC<InputProps> = ({
  value = "",
  setValue,
  placeholder = "",
  important = false,
  label = null,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <p className="flex items-center">
          {label.toUpperCase()}
          {important && "*"}
        </p>
      )}
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
        className="text-gray-500 py-3 px-5 outline-none border-3 w-[100%] bg-transparent border-[1.5px] border-gray-500 focus:border-green-600"
      />
    </div>
  );
};

export default Input;
