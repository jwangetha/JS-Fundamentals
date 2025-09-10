let args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Not a number");
} else {
    let num = parseInt(args[0], 10);
    if (isNaN(num)) {
        console.log("Not a number");
    } else {
        console.log(`My number: ${num}`);
    }
}






