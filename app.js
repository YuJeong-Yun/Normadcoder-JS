function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b)
}

const player = {
  name: "YJ",
  sayHello: function(otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!")
  }
}

player.sayHello("yj");
player.sayHello("jj");

plus(8, 20);
divide(50, 10);