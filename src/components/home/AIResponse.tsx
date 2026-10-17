// import "./AIResponse.css";

// interface AIResponseProps {
//   response: string;
// }

// const AIResponse = ({ response }: AIResponseProps) => {
//   return (
//     <section className="ai-response">
//       <span className="ai-response__label">
//         A response
//       </span>

//       <p className="ai-response__text">
//         {response}
//       </p>
//     </section>
//   );
// };

// export default AIResponse;

import "./AIResponse.css";

interface AIResponseProps {
  response: string;
}

const AIResponse = ({ response }: AIResponseProps) => {
  return (
    <section className="ai-response">
      <span className="ai-response__label">
        What Prateek might think
      </span>

      <p className="ai-response__text">
        {response}
      </p>
    </section>
  );
};

export default AIResponse;
