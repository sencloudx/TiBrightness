$.current_btn.title = "当前页面亮度调节";

$.recover_btn.title = "恢复之前系统亮度";

var brightmodule = require('com.sencloud.light');

function current_click(e){
	brightmodule.goRise();
}

function recover_click(e){
	brightmodule.goRecover();
}
$.me.open(); 