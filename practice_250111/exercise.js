let number = prompt("1부터 100 사이의 숫자를 입력하세요.", "");
let sum = 0;

for(let i = 1; i<=number ; i++) {
    sum = sum + i;
}

alert(`1부터 ${number}까지의 합은 ${sum}입니다.`);