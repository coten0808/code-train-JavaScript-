// Print even numbers from 1 to 49; stop at 42
for (let i = 1; i < 50; i++) {
    if (i % 2 !== 0) {
      continue;          // skip odd numbers
    }
  
    console.log(i);      // print even number
  
    if (i === 42) {
      break;             // stop when i equals 42
    }
  }
  