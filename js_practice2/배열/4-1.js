const str = '사과, 바나나, 당근, 김밥, 치즈, 떡볶이, 햄버거, 환타, 사이다, 콜라, 고양이, 강아지';

function findWord(str, word) {

    let arr;

    arr = str.split(", ");

    if(word == undefined) {
        return '결과를 확인할 수 없습니다.';
    }

    if(arr.indexOf(word) >= 0) {
        return `${word}는(은) 배열 index ${arr.indexOf(word)}번째에 있습니다.`;
    } else {
        return `${word}는(은) 배열에 존재하지 않습니다.`;
    }
};


console.log(findWord(str, '고양이'));
console.log(findWord(str, '샌드위치'));
console.log(findWord(str));

console.log('====================================================');
