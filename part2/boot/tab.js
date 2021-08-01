
// 버튼을 누르면... 
// 1.product 버튼이 주황색 하이라이트 가짐
// 2.내용 0번째가 보여야 함. 
$('.tab-button').eq(0).on('click',function(){
    $('.tab-button').eq(0).addClass('active');
    $('.tab-content').eq(0).addClass('show');
})