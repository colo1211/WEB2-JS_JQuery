// function init 내에서 jQuery 사용
function init() {
    
    for (let i=0; i<$('.tab-button').length; i++){
     $('.tab-button').eq(i).on('click', function () {
         console.log(i);
         // 나머지 모든 tab에 대해서 class를 제거한다.(eq를 안달면 모든 해당 class가 선택되어 remove할 수 있다.) 
         $('.tab-button').removeClass('active');
         $('.tab-content').removeClass('show');
         // 제거 이후에 tab에서 0번째 탭에 class를 추가한다. 
         $('.tab-button').eq(i).addClass('active');
         $('.tab-content').eq(i).addClass('show');
        });
    }
}

var scriptElement = document.createElement('script');
scriptElement.src = 'http://code.jquery.com/jquery-latest.js';

scriptElement.onloadDone = false;
scriptElement.onload = function () {
    scriptElement.onloadDone = true;
    init();
}
scriptElement.onreadystatechange = function () {
    if (("loaded" === scriptElement.readyState || "complete" === scriptElement.readyState) &&
        !scriptElement.onloadDone) {
        scriptElement.onloadDone = true;
        init();
    }
};
document.getElementsByTagName('head')[0].appendChild(scriptElement);