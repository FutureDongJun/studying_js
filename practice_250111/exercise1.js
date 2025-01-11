let number = prompt("숫자를 입력하세요. ", "");

if (number % 2 == 0) {
    alert ("이 숫자는 짝수입니다.");
} else if (number % 2 == 1) {
    alert ("이 숫자는 홀수입니다.");
} else {
    alert("자연수가 아니거나 잘못 입력하셨습니다. ");
}