// 5-1. 년, 월, 일을 전달하면 해당 날짜의 요일을 
// '월', '화', '수', '목', '금', '토', '일'
//  문자열로 반환해주는 함수 getWeekDay를 만든다.

function getWeekDay(year, month, date) {
    // month -1하는 이유 javascript의 인덱스가 0부터 시작하기 때문에.
    const when = new Date(year, month-1, date);
     // days 배열에는 1.일~7.토 순서대로
    const days = ['일', '월', '화', '수', '목', '금', '토' ];
    // days[when.getDay()]; 를 통해 Date 객체의 요일에 해당하는 요일 이름을 반환한다.
    return days[when.getDay()];
}

console.log(getWeekDay(2023, 8, 28));

console.log(getWeekDay(2022, 6, 21));  
console.log(getWeekDay(2022, 12, 12));

console.log(getWeekDay(1994, 6, 3));