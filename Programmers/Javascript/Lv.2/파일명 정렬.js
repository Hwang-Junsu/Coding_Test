function solution(files) {
  let answer = [];

  const divideName = (fileName) => {
    let head = "";
    let number = "";
    let tail = "";
    let isNumber = false;
    let isTail = false;
    let count = 0;
    for (let j = 0; j < fileName.length; j++) {
      if (!isNaN(fileName[j]) && !isNumber) {
        isNumber = true;
      }
      if (isNumber && isNaN(fileName[j])) {
        isNumber = false;
        isTail = true;
      }

      if (!isNumber && !isTail) head += fileName[j];
      else if (isNumber && count <= 5) {
        number += fileName[j];
        count++;
      } else if (isTail) tail += fileName[j];
    }
    return [head, number, tail];
  };

  files.sort((file1, file2) => {
    const [head1, number1, tail1] = divideName(file1);
    const [head2, number2, tail2] = divideName(file2);
    console.log(`head:${head1}, number:${number1}, tail:${tail1}`);

    if (head1.toLowerCase() < head2.toLowerCase()) return -1;
    if (head1.toLowerCase() > head2.toLowerCase()) return 1;
    if (Number(number1) < Number(number2)) return -1;
    if (Number(number1) > Number(number2)) return 1;
    return 0;
  });

  return files;
}
