// Get all the buttons
const buttons = document.querySelectorAll("button");
let input =document.getElementById("screen");

let string="";
let arr=Array.from(buttons);



// Add onclick function to each button
buttons.forEach(button =>  {

  button.addEventListener("click", (f) => {
    // Your function logic goes here
    if(f.target.innerHTML == '=')
    {
      string = eval(string);
      input.value = string;
    }

    else if(f.target.innerHTML == 'clear')
    {
      string = "";
      input.value = string;
    }

    else
    {
      string += f.target.innerHTML;
    input.value = string;
    }
    // console.log("Button clicked: " + button.id);
  })
});
