// 检测是否为6位数字验证码
function checkVerifyCode(verifyCode){
	let reg = /[0-9]{6}$/;
	if(verifyCode!="" && verifyCode!=undefined && verifyCode.length==6 && reg.test(verifyCode)){
		return true
	}else{
		return false
	}
	
}

// 检测是否为手机号
function checkTel(tel){
		
	let reg = /^1[0-9]{10}$/;
	if(tel!="" && tel!=undefined && tel.length==11 && reg.test(tel)){
		return true
	}else{
		return false
	}
}



export default {
	checkVerifyCode,
	checkTel
}