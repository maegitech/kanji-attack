function test(min, max) {
    console.log(min, max);
}

for (var i = 1; i <= 14; i++) {
    var j = i - 1;

    if(j == 0) {
        test(j, j + 16);
    } else if (j > 0 && j < 13) {
        test(j * 16, (j * 16) + 16);
    } else {
        test(j * 16, (j * 16) + 6);
    }
}