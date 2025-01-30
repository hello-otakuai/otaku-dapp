import { Fragment, ReactNode, useRef } from "react";
import { createRoot } from "react-dom/client";

export const showDialog = (
  dialog: ({ closeFn }: { closeFn: VoidFunction }) => ReactNode,
  {
    useWidth = true, dismissable = true, bgClassName = "bg-secondary"
  }: {
    useWidth?: boolean,
    dismissable?: boolean
    bgClassName?: string
  },
) => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(
    <Dialog closeFn={(el) => el.remove()} useWidth={useWidth} dismissable={dismissable} bgClassName={bgClassName}>
      {dialog}
    </Dialog>,
  );

  document.body.append(container);
};

export const showAlertDialog = ({
  title,
  message,
  onCancel,
  onContinue,
}: {
  title: ReactNode;
  message: ReactNode;
  onContinue: VoidFunction;
  onCancel?: VoidFunction;
}) => {
  const container = document.createElement("div");
  const closeFn = (el: HTMLDivElement) => el.remove();

  const root = createRoot(container);
  root.render(
    <Dialog closeFn={closeFn} >
      {({ closeFn }) => (
        <Fragment>
          <div className={"px-4 py-2 font-semibold"}>{title}</div>
          <div className={"px-4 py-2 text-sm"}>{message}</div>
          <div className={"grid grid-cols-2 text-sm"}>
            <button
              className={
                "text-center py-1 bg-red-500 text-white w-full rounded-bl-lg"
              }
              onClick={() => {
                onCancel && onCancel();
                closeFn();
              }}
            >
              Cancel
            </button>
            <button
              className={
                "text-center py-1 bg-green-500 text-white w-full rounded-br-lg"
              }
              onClick={() => {
                try {
                  onContinue();
                  closeFn();
                } catch (_) {
                  console.debug(_);
                }
              }}
            >
              Continue
            </button>
          </div>
        </Fragment>
      )}
    </Dialog>,
  );
  document.body.append(container);
};

type CloseFn = (ev: HTMLDivElement) => void;

export default function Dialog({
  children,
  closeFn,
  useWidth = true,
  dismissable = true,
  bgClassName
}: {
  useWidth?: boolean;
  closeFn: CloseFn;
  children?:
  | (({ closeFn }: { closeFn: VoidFunction }) => ReactNode)
  | ReactNode;
  dismissable?: boolean;
  bgClassName?: string
}) {
  const __container_ref = useRef<HTMLDivElement>(null);
  const __ref = useRef<HTMLDivElement>(null);

  children =
    typeof children == "function"
      ? children({
        closeFn: () => {
          __container_ref.current?.parentElement?.remove();
        },
      })
      : children;

  return (
    <div
      ref={__container_ref}
      className={
        "fixed z-[99] inset-0 w-[100vw] h-[100vh] bg-gray-800 bg-opacity-5 backdrop-blur-[1px] flex flex-col justify-center items-center"
      }
      onClick={(ev) => {
        if (!dismissable) return;
        ev.stopPropagation();
        closeFn(ev.currentTarget.parentElement! as HTMLDivElement);
      }}
    >
      <div
        className={`${useWidth ? "w-full max-w-sm min-w-64" : "w-fit"
          }  mx-auto`}
        onClick={(ev) => ev.stopPropagation()}
      >
        <div
          ref={__ref}
          className={`rounded-lg shadow-md ${bgClassName} text-white bg-opacity-100 w-full`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
