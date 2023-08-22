var grade = '손님';
var authority = '';

authority = (grade == '손님') ? '글 읽기' :
            (grade == '일반회원') ? '글 읽기, 글 쓰기' :
            (grade == '운영자') ? '글 읽기, 글 쓰기, 글 삭제' :

console.log(grade + "의 경우 " + authority + "가 가능합니다.");