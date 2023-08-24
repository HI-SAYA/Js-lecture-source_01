// length property

// length property는 요소의 개수를 나타내는 0 이상의 정수의 값을 갖는다.
console.log([].length);     // 0개
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);    // 5개

// length property 값은 배열에 요소를 추가하거나 삭제하면 자동으로 갱신된다.
arr.push(6);
console.log(arr);           // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr.length);    // 6
arr.pop();  // 1 삭제
console.log(arr);           // [ 1, 2, 3, 4, 5 ]
console.log(arr.length);    // 5

// length 프로퍼티에 임의의 숫자 값을 명시적으로 할당할 수 있다.
// 현재 length보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다.
arr.length = 3;
console.log(arr);           // [ 1, 2, 3 ]
console.log(arr.length);    // 3

// 현재 length보다 큰 숫자를 할당하면 length 프로퍼티의 값은 변경 되지만
// 배열의 길이가 늘어나지는 않는다.
arr.length = 10;
console.log(arr);           // [ 1, 2, 3, <7 empty items> ]
console.log(arr.length);    // 10
console.log(Object.getOwnPropertyDescriptors(arr));
/* 
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 10, writable: true, enumerable: false, configurable: false }
} */

// arr.length = 0 으로 할 경우 요소가 다 지워진다.
// 자바스크립트는 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 희소 배열을 문법적으로 허용한다.
const sparse = [, 2, , 4];
console.log(sparse);        // [ <1 empty item>, 2, <1 empty item>, 4 ]
console.log(sparse.length); // 4
console.log(Object.getOwnPropertyDescriptors(sparse));
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}*/
