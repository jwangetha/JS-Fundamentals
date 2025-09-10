const languages = [
  ["C", "fun"],
  ["Python", "cool"],
  ["JavaScript", "amazing"]
];

let i = 0;
let output = "";
while (i < languages.length) {
  output += `${languages[i][0]} is ${languages[i][1]}\n`;
  i++;
}
console.log(output.trim());
