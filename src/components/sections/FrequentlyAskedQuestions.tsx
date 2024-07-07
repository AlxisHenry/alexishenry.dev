import { useState } from "preact/hooks";
import { Title } from "./index";
import { ChevronDown } from "react-feather";
import { useData } from "../../hooks";

export const FrequentlyAskedQuestions = () => {
  const { frequentlyAskedQuestions } = useData();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section>
      <Title>
        Questions <span class={"text-blue-500"}>fréquentes</span>
      </Title>
      <div class={"mt-8 grid gap-2"}>
        {frequentlyAskedQuestions.map((q, index) => (
          <Question
            {...q}
            open={currentQuestion === index}
            onClick={() => {
              setCurrentQuestion(index === currentQuestion ? -1 : index);
            }}
          />
        ))}
      </div>
    </section>
  );
};

interface QuestionProps {
  question: string;
  answer: string;
  open?: boolean;
  onClick?: () => void;
}

const Question = (props: QuestionProps) => {
  const { question, answer, open, onClick } = props;

  const formatAnswer = (description: string) => {
    return description
      .replace(/<h>/g, "<span class='font-semibold text-blue-500'>")
      .replace(/<\/h>/g, "</span>");
  };

  return (
    <div
      class={
        "border transition-colors duration-300 ease-in-out hover:border-blue-500 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer " +
        (open ? "border-blue-500" : "border-gray-300")
      }
    >
      <div
        class={
          "flex justify-between items-center cursor-pointer py-6 px-4 rounded-lg" +
          (open ? "border-b border-gray-300" : "")
        }
        onClick={onClick}
      >
        <h3 class={"text-md font-semibold"}>{question}</h3>
        <span
          class={
            "transition-transform duration-300 ease-in-out transform " +
            (open ? "rotate-180" : "")
          }
        >
          <ChevronDown size={36} color={open ? "#2563EB" : "#000"} />
        </span>
      </div>
      <div
        class={"bg-red py-2 px-4 rounded-b-lg hidden" + (open ? "block" : "")}
      >
        <p
          class={"mb-4"}
          dangerouslySetInnerHTML={{ __html: formatAnswer(answer) }}
        />
      </div>
    </div>
  );
};
