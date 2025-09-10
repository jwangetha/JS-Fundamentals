const args = process.argv.slice(2);
if (args.length === 0 || isNaN(parseInt(args[0], 10))) {
  console.log("Missing number of occurrences");
} else {
  const count = parseInt(args[0], 10);
  let i = 0;
  let output = "";
  while (i < count) {
    output += "C is fun\n";
    i++;
  }
  console.log(output.trim());
}


