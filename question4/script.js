function Calculator() {
    this.calculate = function (arg) {
      let split_arg = arg.split(" ");
  
      if (split_arg[1] == "+") {
        return +split_arg[0] + +split_arg[2];
      } else if (split_arg[1] == "-") {
        return +split_arg[1] - +split_arg[2];
      }
    };
  
    this.getnum = function () {
      this.a = +prompt("enter a number1:", 0);
      this.b = +prompt("enter a number2:", 0);
    };
  
    this.addMethod = function (name) {
      if (name == "*") {
        return this.a * this.b;
      } else if (name == "/") {
        return this.a / this.b;
      } else if (name == "**") {
        return this.a ** this.b;
      }
    };
  }
  
  let calc = new Calculator();
  alert("Sum=" + calc.calculate("2 + 3"));
  alert(calc.calculate("3 + 7"));
 
  let powerCalc = new Calculator();
  powerCalc.getnum();
  alert(powerCalc.addMethod("**"));