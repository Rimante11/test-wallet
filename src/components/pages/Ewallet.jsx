import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ewallet.css";

const Ewallet = () => {
  const creditCard = useSelector((state) => state.cardInfo);
  const [state, setState] = useState(creditCard);

  const toggleActive = (index) => {
    setState({ ...state, activeObject: state.cardInformation[index] });
  };

  const activeCard = state.cardInformation[state.activeObject];

  const inactiveCards = state.cardInformation.filter((c, index) => {
    return state.activeObject !== index;
  });

  const allCards = [activeCard, ...inactiveCards].filter(Boolean);

  console.log("inactive", inactiveCards);
  console.log("active", activeCard, state.activeObject);

  const toggleActiveStyle = (index) => {
    if (state.cardInformation[index] === state.activeObject) {
      return "active";
    } else {
      return "inactive";
    }
  };
  return (
    <>
      <h1>Wallet</h1>
      <ul>
        {allCards.map((credit, index) => {
          return (
            <li
              key={index}
              className={toggleActiveStyle(index)}
              onClick={() => {
                toggleActive(index);
              }}
            >
              <div className="credit-card">
                <div className="credit-card__logo picVisaCard">{credit.bankName}</div>

                <div className="credit-card__number">{credit.cardNumber}</div>
                <span className="credit-ccv">{credit.ccv}</span>
                <div className="credit-card__info">
                  <div className="credit-card__info_name">
                    <div className="credit-card__info_label">
                      CARDHOLDER'S NAME
                    </div>
                    <div className="cardHoldersName" value={credit.cardName}>{credit.cardName}</div>
                  </div>

                  <div className="credit-card__info_expiry">
                    <div className="credit-card__info_label">VALID UP TO</div>
                    <div>
                      {" "}
                      {credit.cardMonth} / {credit.cardYear}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Ewallet;