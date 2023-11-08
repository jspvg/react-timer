import { type FormEvent, type ComponentPropsWithoutRef } from "react";

interface FormProps extends ComponentPropsWithoutRef<"form"> {
  onSave: (value: unknown) => void;
}

const Form = ({onSave, children, ...props}: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;
