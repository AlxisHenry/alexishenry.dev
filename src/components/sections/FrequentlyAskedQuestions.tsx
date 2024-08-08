import { useState } from "react";
import { ChevronDown } from "react-feather";

import { useData } from "@/hooks";

import { Title } from "@/components/sections";

export const FrequentlyAskedQuestions = () => {
  const { faq } = useData();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section>
      <Title content={faq.title} />
      <p
        className={"mt-8"}
        dangerouslySetInnerHTML={{ __html: faq.description }}
      />
      <div className={"mt-8 grid gap-2"}>
        {faq.items.map((q, index) => (
          <Question
            key={`faq-${index}`}
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
      className={
        "border transition-colors duration-300 ease-in-out hover:border-blue-500 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer " +
        (open ? "border-blue-500" : "border-gray-300")
      }
    >
      <div
        className={
          "flex justify-between items-center cursor-pointer py-6 px-4 rounded-lg" +
          (open ? "border-b border-gray-300" : "")
        }
        onClick={onClick}
      >
        <h3 className={"text-md font-semibold"}>{question}</h3>
        <span
          className={
            "transition-transform text-gray-200 duration-300 ease-in-out transform " +
            (open ? "rotate-180" : "")
          }
        >
          <ChevronDown size={36} className={`${open ? "text-blue-500" : "text-gray-500 dark:text-gray-200"}`} />
        </span>
      </div>
      <div
        className={
          "bg-red py-2 px-4 rounded-b-lg hidden" + (open ? "block" : "")
        }
      >
        <p
          className={"mb-4"}
          dangerouslySetInnerHTML={{ __html: formatAnswer(answer) }}
        />
      </div>
    </div>
  );
};
