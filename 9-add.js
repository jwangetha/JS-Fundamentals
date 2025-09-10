const args = process.argv.slice(2);

function add(a, b) {
  return a + b;
}

if (args.length < 2 || isNaN(parseInt(args[0], 10)) || isNaN(parseInt(args[1], 10))) {
  console.log("NaN");
} else {
  const a = parseInt(args[0], 10);
  const b = parseInt(args[1], 10);
  console.log(add(a, b));
}
