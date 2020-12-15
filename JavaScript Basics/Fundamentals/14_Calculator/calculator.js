const screenContainer = document.querySelector("#screen-container");

function del() {
  const screen = document.querySelector("#screen");
  let textcontent = screen.textContent;
  console.log(textcontent);
  screen.textContent = textcontent.substring(0, textcontent.length - 1);
}

function add_number_display(data) {
  const screen = document.querySelector("#screen");
  screen.textContent = screen.textContent + data;
}

function add_story_display(data) {
  const story = document.querySelector("#story");
  const screen = document.querySelector("#screen");
  story.textContent = screen.textContent + data;
  screen.textContent = "";
}

function operation() {
  const story = document.querySelector("#story");
  const screen = document.querySelector("#screen");
  let equal = 0;
  let operator = false;
  let num1 = "";
  let num2 = "";
  let aux = 0;

  story.textContent = story.textContent + screen.textContent;
  let operation = Array.from(story.textContent);

  for (let i = 0; i < operation.length; i++) {

    if (operation[i] == "+" || operation[i] == "-" ||
      operation[i] == "x" || operation[i] == "÷") {
      operator = operation[i];
      aux = i + 1;
    }
    if (operator === false) {
      num1 += operation[i];
    }
  }

  for (let i = aux; i < operation.length; i++) {
    num2 += operation[i];
  }


  switch (operator) {
    case "+":
      equal = add(num1, num2);
      break;

    case "-":
      equal = subtraction(num1, num2);
      break;

    case "x":
      equal = multiplication(num1, num2);
      break;

    case "÷": //
      equal = division(num1, num2);
      break;

    default:
      equal = "ERROR";
      break;
  }

  screen.textContent = equal;

}

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtraction(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiplication(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function division(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}