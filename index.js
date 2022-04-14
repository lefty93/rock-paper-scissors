function generateRandom() {

    const handPose = ["rock", "scissors", "paper"];
    const randomNo1 = Math.floor(Math.random() * 3);
    const randomNo2 = Math.floor(Math.random() * 3);
    const resultOne = handPose[randomNo1];
    const resultTwo = handPose[randomNo2];
    console.log(resultOne + "&" + resultTwo);
    if (resultOne === "rock" && resultTwo === "scissors") {
        console.log("PlayerOne wins")
    } else if (resultOne === "scissors" && resultTwo === "paper") {
        console.log("PlayerOne wins")
    } else if (resultOne === resultTwo) {
        console.log("Draw")
    } else if (resultOne === "paper" && resultTwo === "rock") {
        console.log("PlayerOne wins")
    } else {
        console.log("PlayerTwo wins")
    }
}