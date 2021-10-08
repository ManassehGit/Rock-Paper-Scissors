//using function expression
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    //condition check for valid input with cheat code for bomb
    if((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors')  || (userInput === 'bomb')){
      return userInput;
    }else{
      console.log('Kindly select a valid choice');
    }
  };
  
  //Testing the userChoice function
  //console.log(getUserChoice('paper'));
  
  //Function to return random number between 0 and 2
  const getComputerChoice = () => {
    let results = Math.floor(Math.random() * 3);
    if (results === 0){
      return 'rock';
    }else if(results === 1){
      return 'paper';
    }else{
      return 'scissors';
    }
  }
  
  //Testing the getComputerChoice function
  //console.log(getComputerChoice());
  
  //function to determine winner
  function determineWinner(userChoice, computerChoice){
    //added a cheat code for bomb and a corresponding cheat for userInput
    if(userChoice === 'bomb'){
      return 'User WON the game!!';}
    else{
      if(userChoice === computerChoice){
        return 'The game was a tie';
      }
  
      if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'The Computer won the game';
        }else{
          return 'User won the game';
        }
      }
  
      if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          return 'Computer won the game';
        }else{
          return 'User won the game';
        }
      }
  
      if(userChoice === 'scissors'){
          if(computerChoice === 'rock'){
            return 'Computer won the game';
          }else{
            return 'User won the game';
          }
        }
    }
  }
  //end of determine winner function
  
  //Testing the game
  //console.log(determineWinner(getUserChoice('rock'),getComputerChoice()));
  
  //PlayGame function
  const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();