import config from 'config.js'

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

// 获取轮播图资源
function getSwiper(){
	uni.request({
		url:config.APIurl + "res/bannerList",
		method: 'POST',
		data:{
			"modelId" : config.modelId,
			"size" : 4
		},
		success:(res) => {
			if(res.statusCode == 200 && res.data.msg == "ok"){
				let List = res.data.data;
				// 检查img地址是否可用，错误的地址会被删除，返回正确的地址集合
				for (var i = 0; i < List.length; i++) {
					let url = List[i]["imgurl"];
					if ( !url.includes("banner")) {
						List.splice(i,1)
					}							
				}
				uni.setStorageSync("globalBannerList",List);
				return List;
			}
		},
		fail: (res) => {
			console.log(res.data.msg)
		}
	})
}



export default {
	checkVerifyCode,
	checkTel,
	getSwiper
}