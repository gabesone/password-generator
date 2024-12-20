import { useState } from "react";
import { question_answer } from "../lib/question_answer";

function FAQ() {
  const [isOpen, setIsOpen] = useState({});

  return (
    <div>
      <div className="mb-16 space-y-4 text-center">
        <h2 className="text-4xl font-bold">
          Perguntas frequentes sobre o gerador de senhas
        </h2>
        <p>
          Dúvidas sobre o gerador de senhas aleatórias? As respostas estão
          abaixo.
        </p>
      </div>

      {/* FAQ */}
      <div className="mx-8 space-y-4 divide-y divide-blue-200 rounded-3xl border-[1px] border-blue-200">
        {question_answer.map((qa) => (
          <div key={qa.id} className="p-4">
            <h3
              onClick={() => handleOpen(qa.id)}
              className={`w-fit cursor-pointer text-lg font-bold hover:text-blue-600 ${isOpen[qa.id] ? "mb-2 text-blue-600" : ""}`}
            >
              {qa.question}
            </h3>
            {
              <div className={`${isOpen[qa.id] ? "block" : "hidden"}`}>
                <p className="py-2 text-slate-600">{qa.answer}</p>
                {qa.list && (
                  <ol className="list-decimal px-8 text-slate-600">
                    {qa.list.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ol>
                )}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );

  function handleOpen(id) {
    setIsOpen((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific question
    }));
  }
}

export default FAQ;
