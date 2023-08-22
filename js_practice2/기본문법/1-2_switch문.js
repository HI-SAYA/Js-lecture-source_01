var browser = 'Edge';   // 'Chrome', 'Firefox' 등으로 변경해서 테스트

switch (browser) {
    case 'Edge':
        console.log('Edge를 사용하고 계시네요');
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
        break;
        default :
        console.log('현재 페이지가 괜찮아 보이길 바랍니다.');
}