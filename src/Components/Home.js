import { React, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import { FaLock, FaSmileBeam, FaAngry, FaPlus, FaMinus } from "react-icons/fa";

export const Home = () => {
  const [password, setPassword] = useState("PASSWORD");

  const [count, setCount] = useState(8);

  const [config, setConfig] = useState({
    symbol: false,
    number: false,
    upper: false,
  });

  const [color, setColor] = useState({
    symbolClass: "btn btn-danger check",
    numberClass: "btn btn-danger check",
    upperClass: "btn btn-danger check",
  });

  const plus = () => {
    setCount(count + 1);
    if (count >= 18) {
      setCount(18);
    }
  };

  const minus = () => {
    setCount(count - 1);
    if (count <= 8) {
      setCount(8);
    }
  };

  const number = () => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.number = !newConfig.number;
      return newConfig;
    });
    setColor((lastColor) => {
      const newColor = { ...lastColor };
      newColor.numberClass === "btn btn-danger check"
        ? (newColor.numberClass = "btn btn-success check")
        : (newColor.numberClass = "btn btn-danger check");
      return newColor;
    });
  };

  const symbol = () => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.symbol = !newConfig.symbol;
      return newConfig;
    });
    setColor((lastColor) => {
      const newColor = { ...lastColor };
      newColor.symbolClass === "btn btn-danger check"
        ? (newColor.symbolClass = "btn btn-success check")
        : (newColor.symbolClass = "btn btn-danger check");
      return newColor;
    });
  };

  const upper = () => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.upper = !newConfig.upper;
      return newConfig;
    });
    setColor((lastColor) => {
      const newColor = { ...lastColor };
      newColor.upperClass === "btn btn-danger check"
        ? (newColor.upperClass = "btn btn-success check")
        : (newColor.upperClass = "btn btn-danger check");
      return newColor;
    });
  };

  const newPassword = () => {
    const characters = {
      number: "0 1 2 3 4 5 6 7 8 9 ",
      symbol: "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? / ",
      upper: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ",
    };

    let secret = "";
    let finalCharacters =
      "a b c d e f g h i j k l m n o p q r s t u v w x y z ";

    for (let props in config) {
      if (config[props]) {
        finalCharacters += characters[props];
      }
    }

    finalCharacters = finalCharacters.trim();
    finalCharacters = finalCharacters.split(" ");

    for (let i = 0; i < count; i++) {
      let random = Math.floor(Math.random() * finalCharacters.length);
      secret += finalCharacters[random];
    }

    setPassword(secret);
  };

  return (
    <Container className="container">
      <Row className="justify-content-center text-center main-row">
        <Col className="col-12 mt-2 p-2 app-name">Password Generator</Col>
        <form className="col-md-6 col-12">
          <Row className="my-5">
            <Col className="my-auto col-7 col-md-6">
              <label># de caracteres:</label>
            </Col>
            <Col>
              <div
                onClick={() => minus()}
                className="btn btn-primary count-button"
              >
                <FaMinus />
              </div>
              <span className="px-3">{count}</span>
              <div
                onClick={() => plus()}
                className="btn btn-primary count-button"
              >
                <FaPlus />
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="my-auto col-7 col-md-6">
              <label>Incluir Símbolos?</label>
            </Col>
            <Col>
              <div onClick={() => symbol()} className={color.symbolClass}>
                {config.symbol ? (
                  <FaSmileBeam size="1.8em" />
                ) : (
                  <FaAngry size="1.8em" />
                )}
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="my-auto col-7 col-md-6">
              <label>Incluir Números?</label>
            </Col>
            <Col>
              <div onClick={() => number()} className={color.numberClass}>
                {config.number ? (
                  <FaSmileBeam size="1.8em" />
                ) : (
                  <FaAngry size="1.8em" />
                )}
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="my-auto col-7 col-md-6">
              <label>Incluir Mayúsculas?</label>
            </Col>
            <Col>
              <div onClick={() => upper()} className={color.upperClass}>
                {config.upper ? (
                  <FaSmileBeam size="1.8em" />
                ) : (
                  <FaAngry size="1.8em" />
                )}
              </div>
            </Col>
          </Row>
          <Row className="my-4">
            <Col className="col-12 mb-3">
              <label className="password">{password}</label>
            </Col>
            <Col className="my-auto col-12">
              <div
                onClick={() => newPassword()}
                className="btn btn-primary pt-2 lock"
              >
                Generar <FaLock />
              </div>
            </Col>
          </Row>
        </form>
      </Row>
    </Container>
  );
};
