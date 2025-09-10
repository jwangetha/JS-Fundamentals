const args = process.argv.slice(2);
if (args.length === 0 || isNaN(parseInt(args[0], 10))) {
  console.log("Missing size");
} else {
  const size = parseInt(args[0], 10);
  if (size <= 0) {
    // Do nothing
  } else {
    let i = 0;
    while (i < size) {
      console.log("X".repeat(size));
      i++;
    }
  }
}


