
import "./StartScreen.css";
import background from "../assets/wallpaper.png";

function StartScreen({ onStart, goToForm }) {
  return (
    <main
      className="start-screen"
      style={{ backgroundImage: `url(${background})` }}
    >


      <div className="start-content">
        <span className="start-eyebrow">
          UM JOGO SOBRE CONSCIÊNCIA E RESPEITO
        </span>

        <h1>
          CONSCIÊNCIA
          <span>EM JOGO</span>
        </h1>

        <p className="start-description">
          Racismo estrutural e os desafios contemporâneos
          no ambiente de trabalho.
        </p>

        <p className="start-instruction">
          Você está preparado para testar seus conhecimentos
          e enfrentar situações do cotidiano profissional?
        </p>

      <div className="btnContainer">
        <button
          className="start-button"
          onClick={onStart}
        >
          JOGAR AGORA
        </button>

        <button
            className="form-button"
            onClick={goToForm}
          >
            RESPONDER FORMULÁRIO
          </button>
        </div>

        <span className="start-footer">
          APRENDA • REFLITA • TRANSFORME
        </span>
      </div>

    </main>
  );
}

export default StartScreen;
