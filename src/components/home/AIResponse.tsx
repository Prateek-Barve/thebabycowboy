import "./AIResponse.css";

interface AIResponseProps {
  response: string;
}

const AIResponse = ({ response }: AIResponseProps) => {
  return (
    <section className="ai-response">
      <span className="ai-response__label">
        A response
      </span>

      <p className="ai-response__text">
        {response}
      </p>
    </section>
  );
};

export default AIResponse;