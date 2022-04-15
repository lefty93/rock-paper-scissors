var compHand = ['rock', 'scissors', 'paper'];
let compSide = () => {
    const compRandom = Math.floor(Math.random() * 3);
    const compChoice = compHand[compRandom];
    return compChoice;
}