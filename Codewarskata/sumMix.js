let a = [1, 2, 3, "5", 2];
let b = 0;
for (let i = 0; i < a.length; i++) {
  if (typeof a[i] == "string") {
    a[i] = parseInt(a[i]);
    console.log(typeof a[i]);
  }

  b = a[i] + b;
}
console.log(b);
