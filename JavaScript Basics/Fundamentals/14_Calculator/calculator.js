const screenContainer = document.querySelector("#screen-container");

function add_number_display(data){
  const screen = document.querySelector("#screen");
  screen.textContent = screen.textContent + data;
}

function add_story_display(data){
  const story = document.querySelector("#story");
  const screen = document.querySelector("#screen");
  story.textContent = screen.textContent + data;
  screen.textContent = "";
}

function operation(){
  const story = document.querySelector("#story");
  const screen = document.querySelector("#screen");
  let equal = 0;
  let operator = "";
  let num1 = 0;
  let num2 = 0;

  story.textContent = story.textContent + screen.textContent;
  let operation = Array.from(story.textContent);

  if (operation[1] == "+" || operation[1] == "-" 
    || operation[1] == "x" ||operation[1] == "÷" ){
      operator = operation[1];
      num1 = operation[1-1] *1;
      num2 = operation[1+1] *1;
    }
  
  
  switch (operator) {
    case "+":
      equal = add(num1,num2);
      break;

    case "-":
      equal = subtraction(num1,num2);
      break;

    case "x":
      equal = multiplication(num1,num2);
      break;

    case "÷"://
      equal = division(num1,num2);
      break;

    default:
      equal = "ERROR";
      break;
  }

  screen.textContent = equal;

}

function add(num1,num2){
  return num1 + num2;
}

function subtraction(num1,num2){
  return num1 - num2;
}

function multiplication(num1,num2){
  return num1 * num2;
}

function division(num1,num2){
  return num1 / num2;
}