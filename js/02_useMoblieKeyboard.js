/**
 * 测试手机 虚拟键盘.
 * 1. 设置 回车键 文字, 改为:搜索;
 * 2. 驳货 键盘事件, 比如 回车键.
 * 
 * @author gonglong 20170113
 **/
;(function( window ){
    
    var searchObj = document.getElementById("search_main");
    var pressObj = document.getElementById("press_key");
    
    // onkeydown, onkeyup, onkeypress
    searchObj.addEventListener("keyup", function(e){
        
        // 回车键: e.keyCode: 13
        pressObj.innerHTML = e.keyCode;
    })
    
    
}(window));
