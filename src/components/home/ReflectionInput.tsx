import "./ReflectionInput.css";

interface ReflectionInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

const ReflectionInput = ({
  value,
  onChange,
  onSubmit,
  disabled = false,
}: ReflectionInputProps) => {
  return (
    <section className="reflection-input">
      <label
        className="reflection-input__label"
        htmlFor="reflection"
      >
        What do you feel?
      </label>

      <textarea
        id="reflection"
        className="reflection-input__textarea"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Write whatever comes to mind..."
        disabled={disabled}
      />

      <button
        className="reflection-input__button"
        type="button"
        onClick={onSubmit}
        disabled={disabled || !value.trim()}
      >
        Respond
      </button>
    </section>
  );
};

export default ReflectionInput;