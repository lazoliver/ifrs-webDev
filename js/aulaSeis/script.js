let init = 2;
let end = 10;
let pairs = [];
while(init <= end) {
    pairs = pairs + init + ", ";
    init = init + 2;
}
alert(pairs)