// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// const sentence = "hello there from lighthouse labs";
// let timer = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//         // print the char here
//     process.stdout.write(char);
//   }, timer += 50) // <= 1s delay to make it noticeable. Can dial it down later.
// };
// setTimeout(() => {
//   process.stdout.write("\n");
// }, timer)

//  DRY DRY DRY Do Not Repeat Yourself

const slash = "|/-\|/-\|";
let timer = 0;
for (const char of slash) {
  setTimeout(() => {
        // print the char here
    process.stdout.write('\r'+ char);
  }, timer += 200) // <= 1s delay to make it noticeable. Can dial it down later.
};
setTimeout(() => {
    process.stdout.write("\n");
}, timer)

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// // ... fill in the rest yourself ...
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

// // To make code DRY. Do Not repeat yourself