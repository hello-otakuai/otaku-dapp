import { ChangeEvent, InputHTMLAttributes, useEffect, useRef } from "react";
import { Signal, useSignal } from "@src/hooks/useSignal";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  validator?: FormValidator;
  controller?: Signal<string>;
  helperText?: string;
  label?: string;
}

export const TextInput = (
  {
    name,
    label,
    className: sx,
    validator,
    controller,
    onChange,
    helperText,
    ...props
  }: TextInputProps,
) => {
  const ref = useRef<HTMLInputElement>(null);
  const isValid = useSignal<NullString>(null);
  const inputType = useSignal(props.type);

  const _validator = (text: string) => {
    if (validator) {
      return validator(text);
    }
    if (props.required) {
      return text.length < 1 ? "field is required" : null;
    }
    return null;
  };

  const _onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(ev);
    controller && (controller.value = ev.currentTarget.value);
    isValid.value = _validator(ev.currentTarget.value);
  };

  return (
    <div className={"flex flex-col gap-1"}>
      {label && <label className={"font-[500]"} htmlFor={name}>{label}</label>}
      <div
        className={`bg-[#292929] w-full rounded-xl py-2 px-4 flex gap-4 items-center ${
          sx ?? ""
        } ${
          isValid.value == null
            ? "outline-zinc-200 focus-within:outline-zinc-400"
            : "outline-red-200 focus-within:outline-red-400"
        }`}
      >
        <input
          ref={ref}
          id={name}
          value={controller?.value ?? props.value ?? props.defaultValue}
          name={name}
          {...props}
          placeholder={props.placeholder ?? (props.type === "email"
            ? "johndoe@domain.com"
            : props.type === "password"
            ? "********"
            : (label ?? name))}
          type={inputType.value}
          className="outline-none bg-transparent py-1 placeholder:text-[#ADADAD] text-zinc-300 flex-1"
          onChange={_onChange}
        />
        {props.type === "password" && (
          <span
            onClick={() =>
              inputType.value = inputType.value == "text" ? "password" : "text"}
          >
            {inputType.value == "password"
              ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
                    clipRule="evenodd"
                  />
                  <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
                </svg>
              )
              : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path
                    fillRule="evenodd"
                    d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
          </span>
        )}
      </div>
      {helperText && (
        <em className={"text-sm text-zinc-500 flex items-center gap-2"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
              clipRule="evenodd"
            />
          </svg>
          <span>{helperText}</span>
        </em>
      )}
      {isValid.value && (
        <em className={"text-sm text-red-500"}>{isValid.value}</em>
      )}
    </div>
  );
};
