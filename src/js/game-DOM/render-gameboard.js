import missedShotIcon from "../../images/missedShot.svg";
import explosionIcon from "../../images/explosion.svg";

// Render the gameboard after each player's turn
const renderGameboard = (gameboardObj, allGameboardCases) => {
  // Render all damages on the gameboard
  gameboardObj.allShips.forEach((ship) => {
    ship.damages.forEach((coord) => {
      const img = document.createElement("img");
      img.src = explosionIcon;
      img.classList.add("explosion-icon");
      allGameboardCases[coord].style.backgroundColor = "var(--primary-text-color)";
      allGameboardCases[coord].innerHTML = "";
      allGameboardCases[coord].appendChild(img);
    });
  });

  // Render all missed shots on the gameboard
  gameboardObj.missedShots.forEach((missedShot) => {
    const img = document.createElement("img");
    img.src = missedShotIcon;
    img.classList.add("missed-shot-icon");
    allGameboardCases[missedShot].style.backgroundColor = "var(--primary-color)";
    allGameboardCases[missedShot].innerHTML = "";
    allGameboardCases[missedShot].appendChild(img);
  });
};

export default renderGameboard;
