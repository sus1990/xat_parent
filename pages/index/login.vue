<template>
	<view>
	<!-- cu-custom 为colorUI的标题栏 -->
		<cu-custom bgColor="bg-gradual-theme" >
			<block slot="content">登录</block>
		</cu-custom>

		<view class="solid-bottom text-sm padding">
			<text class="text-grey">通过手机短信验证码验证登录</text>
		</view>			

	<!-- 表单 -->
		<form @submit="formSubmit">
			
			<view class="cu-form-group">
				<view class="title">手机号</view>
				<input placeholder="请输入手机号码" name="tel"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="请输入验证码" name="verifyCode" ></input>
				<button class='cu-btn bg-green shadow'>验证码</button>
			</view>
			
			<view class="padding flex flex-direction">
				<button form-type="submit" class="cu-btn bg-gradual-theme margin-tb-sm lg">登录</button>
			</view>
		
		</form>
	</view>
</template>

<script>
	import { mapState, mapMutations  } from 'vuex'
	import Helper from '../../common/helper.js'
	export default{
		data(){
			return{
				btnValid:false
			}			
		},
		computed: mapState(['hasLogin']),	
			
		methods:{
			// 继承自store里面的login方法
			...mapMutations(['login']),
			formSubmit(e){
				let me = this;
				let tel = e.detail.value.tel;
				let verifyCode = e.detail.value.verifyCode;
								
				// 验证表单数据
				if(!Helper.checkTel(tel)){
					console.log("手机号码格式错误");
					return;
				}
				// if(!Helper.checkVerifyCode(verifyCode)){
				// 	console.log("验证码格式错误");
				// 	return;
				// }
				verifyCode = "480971";
				//api请求数据
				uni.request({
					url:me.APIurl+"users/LoginParent",
					method:"POST",
					data:{
						  "modelId": me.modelId,
						  "mobile": tel,
						  "verificationCode": verifyCode						
					},
					success(res) {
						if (res.statusCode == 200 && res.data.msg == "ok") {
							this.login()
						}else{
							
						}
					}
				})
			}
			// 获取验证码的方法要尽快写好！
		},
		onShow() {
		}
	}
</script>

<style>
</style>
