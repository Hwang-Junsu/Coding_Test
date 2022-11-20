function solution(s) {
  const stack = [];

  [...s].forEach((el, idx) => {
    if (idx === 0) stack.push(el);
    else {
      if (stack[stack.length - 1] === "(" && el === ")") {
        stack.pop();
      } else stack.push(el);
    }
  });

  return stack.length === 0 ? true : false;
}
