// Exampl at multiThreed

const crypto = require("crypto");

const start = Date.now();
const pbkdf2 = crypto.pbkdf2;

pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("g: ", Date.now() - start);
});

pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});

pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 100000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
pbkdf2("pass", "salt", 1000, 30, "sha512", () => {
  console.log("1: ", Date.now() - start);
});
