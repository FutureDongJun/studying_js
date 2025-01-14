function pow(x, n) {
    let result = x;

    for(let i = 1; i < n; i++) {
        result = result * x;
    }
    alert(result);
}

x = prompt("x를 입력해주세요.", "");
n = prompt("자연수 1 이상의 자연수 n을 입력해주세요.", "");

if(n < 1) {
    alert("자연수 1 이상의 n만 입력하셔야 합니다.");
} else {
    pow(x, n);
}