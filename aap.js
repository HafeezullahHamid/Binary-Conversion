function convertToBinarySteps() {
    const char = document.getElementById("charInput").value.trim();
    const output = document.getElementById("stepOutput");
    if (char.length !== 1 || !char.match(/[A-Za-z]/)) {
      output.innerText = "Please enter a single alphabet (A-Z or a-z).";
      return;
    }

    const ascii = char.charCodeAt(0);
    let steps = `Character: '${char}'\nASCII Code: ${ascii}\n\n--- Division Steps ---\n`;
    let num = ascii;
    let remainders = [];

    while (num > 0) {
      let quotient = Math.floor(num / 2);
      let remainder = num % 2;
      steps += `${num} ÷ 2 = ${quotient} → Remainder: ${remainder}\n`;
      remainders.push(remainder);
      num = quotient;
    }

    while (remainders.length < 8) {
      remainders.push(0); // pad with 0s to make 8-bit
    }

    steps += `\n--- Reverse Remainders ---\n`;
    steps += remainders.reverse().join(" ") + `\n`;

    steps += `\n✅ Final 8-bit Binary: ${remainders.join("")}`;

    output.innerText = steps;
  }