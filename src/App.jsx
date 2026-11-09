
import { useState } from "react";
import { categories } from "./data/questions";
import Wheel from "./components/Wheel";
import "./App.css";
import StartScreen from "./components/StartScreen";

function App() {
  const [gameScreen, setGameScreen] = useState("home");
  

  // Dados da rodada
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Dados da resposta
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  // Dados da pergunta
  const [usedQuestions, setUsedQuestions] = useState([]);

  // Pontuação
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);

  const TOTAL_QUESTIONS = 5;
  function goToForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSd9HfpLAdMSf2Y4wksJCmFdT9ZJM2sQMs7LxtPNBiIH1o4qdA/viewform?usp=dialog",
    "_blank"
  );
}

  function handleSpinComplete() {
    // Junta todas as perguntas de todas as categorias
    const allQuestions = categories.flatMap((category) =>
      category.questions.map((question) => ({
        ...question,
        category
      }))
    );

    // Mantém apenas perguntas que ainda não foram usadas
    const availableQuestions = allQuestions.filter(
      (question) => !usedQuestions.includes(question.id)
    );

    // Escolhe uma pergunta aleatória entre as disponíveis
    const randomIndex = Math.floor(
      Math.random() * availableQuestions.length
    );

    const selectedQuestion = availableQuestions[randomIndex];

    // Define a categoria correspondente à pergunta
    setSelectedCategory(selectedQuestion.category);
    setCurrentQuestion(selectedQuestion);

    // Guarda essa pergunta como já utilizada
    setUsedQuestions((previousQuestions) => [
      ...previousQuestions,
      selectedQuestion.id
    ]);

    // Reseta os dados da resposta
    setSelectedOption(null);
    setIsCorrect(false);

    setGameScreen("question");
  }

  function handleAnswer(index) {
    // Impede responder mais de uma vez
    if (selectedOption !== null) return;

    const correct = index === currentQuestion.correctAnswer;

    setSelectedOption(index);
    setIsCorrect(correct);

    if (correct) {
      setScore((previousScore) => previousScore + 1);
    }

    // Não muda mais de tela!
  }

  function nextRound() {
    const nextRoundNumber = round + 1;

    // Atualiza a quantidade de perguntas respondidas
    setRound(nextRoundNumber);

    // Limpa os dados da pergunta atual
    setSelectedCategory(null);
    setCurrentQuestion(null);
    setSelectedOption(null);
    setIsCorrect(false);

    // Se respondeu 5 perguntas, termina o jogo
    if (nextRoundNumber >= TOTAL_QUESTIONS) {
      setGameScreen("result");
    } else {
      setGameScreen("wheel");
    }
  }

  function getFinalFeedback() {
    if (score === 5) {
      return {
        title: "Excelente! 🏆",
        message:
          "Você acertou todas as perguntas! Seu conhecimento sobre consciência e respeito no ambiente de trabalho está muito bom."
      };
    }

    if (score >= 3) {
      return {
        title: "Muito bem! 👏",
        message:
          "Você demonstrou um bom conhecimento. Continue refletindo sobre como construir um ambiente de trabalho mais respeitoso e inclusivo."
      };
    }

    return {
      title: "Continue aprendendo! 🌱",
      message:
        "Este jogo é uma oportunidade para refletir e aprender. Reveja os conteúdos e tente novamente!"
    };
  }

  function restartGame() {
    setScore(0);
    setRound(0);
    setUsedQuestions([]);

    setSelectedCategory(null);
    setCurrentQuestion(null);
    setSelectedOption(null);
    setIsCorrect(false);

    setGameScreen("home");
  }

  return (
    <div className={gameScreen === "home" ? "home-container" : "game-container"}>

    {/* TELA INICIAL */}
    {gameScreen === "home" && (
      <StartScreen
        onStart={() => setGameScreen("wheel")}
        goToForm={goToForm}
      />
    )}

      {/* TELA DA ROLETA */}
      {gameScreen === "wheel" && (
        <div className="wheel-screen">
          
          <div className="game-header">
            <span className="round-label">
              PERGUNTA {round + 1} DE {TOTAL_QUESTIONS}
            </span>

            <h1>Gire a roleta!</h1>

            <p>
              Descubra qual tema será o próximo desafio.
            </p>
          </div>

          <Wheel
            categories={categories}
            onSpin={handleSpinComplete}
          />
          
        </div>
      )}

      {/* TELA DA PERGUNTA */}
      {gameScreen === "question" && currentQuestion && (
        <div className="question-screen">

          <div
            className="category-container"
            style={{
              backgroundColor: selectedCategory.color
            }}
          >
            <div>{selectedCategory.name}</div>
          </div>

          <div className="question-container">
            <p>{currentQuestion.question}</p>
          </div>

          <div className="options-container">
            {currentQuestion.options.map((option, index) => {

              // Verifica se esta é a resposta correta
              const isThisCorrect =
                index === currentQuestion.correctAnswer;

              // Verifica se esta foi a alternativa escolhida
              const isThisSelected =
                index === selectedOption;

              let choiceClass = "choices";

              if (selectedOption !== null) {
                if (isThisCorrect) {
                  choiceClass += " choice-correct";
                } else if (isThisSelected) {
                  choiceClass += " choice-incorrect";
                }
              }

              return (
                <button
                  className={choiceClass}
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* FEEDBACK DA RESPOSTA */}

          {/* MODAL DE FEEDBACK */}
          {selectedOption !== null && (
            <div className="feedback-overlay">
              <div
                className={`feedback-modal ${
                  isCorrect ? "feedback-correct" : "feedback-incorrect"
                }`}
              >
            
              <h2>
                {isCorrect
                  ? "Muito bem! Resposta correta!"
                  : "Não foi dessa vez!"}
              </h2> 

                <div className="feedback-explanation">
                  <h3>💡 Entenda o motivo:</h3>
                  <p>{currentQuestion.explanation}</p>
                </div>

                <button
                  className={`next-button ${
                    isCorrect ? "next-button-correct" : "next-button-incorrect"
                  }`}
                  onClick={nextRound}
                >
                  CONTINUAR
                </button>

              </div>
            </div>
          )}


        </div>
      )}

    {/* TELA FINAL */}
    {gameScreen === "result" && (
      <div className="result-screen">
        <div className="result-card">

          <span className="result-label">
            RESULTADO FINAL
          </span>

          <div className="result-icon">
            🏆
          </div>

          <h1>{getFinalFeedback().title}</h1>

          <h2>
            Você acertou <strong>{score}</strong> de{" "}
            {TOTAL_QUESTIONS} perguntas!
          </h2>

          <p>
            {getFinalFeedback().message}
          </p>

          <button
            className="start-button"
            onClick={restartGame}
          >
            JOGAR NOVAMENTE
          </button>

          <button
            className="form-button"
            onClick={goToForm}
          >
            RESPONDER FORMULÁRIO
          </button>

        </div>
      </div>
    )}
    </div>
  );
}

export default App;
