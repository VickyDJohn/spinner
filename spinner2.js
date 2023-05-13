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
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1000);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1200);

const spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];
let delay = 100;
for (const ele of spinner) {
  setTimeout(() => {
    process.stdout.write(ele);
  }, delay);
  delay += 200;
}