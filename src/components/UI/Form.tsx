import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

interface FormProps extends ComponentPropsWithoutRef<"form"> {
  onSave: (value: unknown) => void;
}

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...props }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("clearing...");
          form.current?.reset();
        },
      };
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };

    return (
      <form onSubmit={handleSubmit} {...props} ref={form}>
        {children}
      </form>
    );
  }
);

export default Form;
