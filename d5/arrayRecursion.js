const printItems = function (array) {
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement) => {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
};
let array = [
  "😎",
  [
    ["💩", ["🤗"]],
    [[["😼"]], "😂"],
  ],
];
printItems(array);

const printItemsRecursive = (array) => { //not working
  if (Array.isArray(array)) {
    const elem = array.shift();
    console.log(array);
    printItemsRecursive(elem);
  } else {
    console.log(array);
  }
};
printItemsRecursive(array);
