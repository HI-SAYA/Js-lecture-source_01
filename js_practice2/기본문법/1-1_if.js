var grade = '운영자';
var authority;

if (grade == '손님') {
    authority = '글 읽기'
} else if (grade == '일반회원') {
    authority = '글 읽기, 글 쓰기'
} else if (grade == '운영자') {
    authority = '글 읽기, 글 쓰기, 글 삭제'
}
console.log(grade + "의 경우 " + authority + " 가 가능합니다.");