
function pow(x, n) {
    if (n < 1) {
        console.log("n은 1 이상의 자연수여야 합니다.");
        return;
    }

    var result = 1;

    for (var i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

var x = 2;
var n = 10;

if (n < 1) {
    console.log("n은 1 이상의 자연수여야 합니다.");
} else {
    console.log(pow(x, n));
}