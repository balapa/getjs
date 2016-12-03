// get single item
var el = get.el(".element");
console.log("element: ", el);

var snowflake = get.el(".snowflake");
console.log("index: ", get.index(snowflake));

var block = get.el(".third-block");
var parentBlock = get.parentOf(block, "#first-block");

parentBlock.classList.add("blue");

console.log(get.childrenOf(get.el("ul"), "li"))

// get.childrenOf(get.el("ul"), "li").style.color = "red";