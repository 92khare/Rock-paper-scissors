import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock Paper Scissors';
  compChoicesArray=['r','p','s'];
  userScore:number=0;
  compScore:number=0;
  compChoice;
  gameText:String="Select from Rock , Paper or Scissors";
  smallUserWord="User".fontsize(3).sub();
  smallCompWord="Comp".fontsize(3).sub();


  userChoice(userInput){
    if(this.userScore==10 ){
    this.gameText="You won 10 times , Congrats !!!! <br> Hit the score card to play again";
    return false;
  }
    if(this.compScore==10){
      this.gameText="You lost 10 times , :( <br> Hit the score card to play again";
    return false;
    }
  this.evaluateResult(userInput);
  }
  evaluateResult(userChoice){
    

    this.compChoice=this.compChoicesArray[Math.floor(Math.random()*3)];
    
    switch(userChoice+this.compChoice){


      case "rs":
      case "sp":
      case "pr": 
      this.win(userChoice,this.compChoice);
      break;

      case "rp":
      case "sr":
      case "ps": console.log("you lost");
      this.lost(userChoice,this.compChoice)
      break;

      case "rr":
      case "ss":
      case "pp": 
      this.draw(userChoice,this.compChoice)
      break;
    }

  }
  convertToWord(letter){
    if(letter==='r')
    return "Rock";

    if(letter==='p')
    return "Paper";
    if(letter==='s')
    return "Scissors";
  }

  win(userChoice,compChoice){
this.userScore++;
this.gameText=`${this.convertToWord(userChoice)}${this.smallUserWord}  beats  ${this.convertToWord(compChoice)}${this.smallCompWord} , you won !!!`;
document.getElementById(userChoice).style.border='4px solid white;'  ;
}

  lost(userChoice,compChoice){
    this.compScore++;
    this.gameText=`${this.convertToWord(compChoice)}${this.smallCompWord}  beats ${this.convertToWord(userChoice)}${this.smallUserWord} , you lost !!!`;
      }

draw(userChoice,compChoice){       
this.gameText="Its a draw !!!"
  }

  resetGame(){
    if(this.userScore==10 || this.compScore==10){
      window.location.reload(); 
    }
   
  }
}
