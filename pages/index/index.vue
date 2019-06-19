<template>
	<view>
		<home v-if="PageCur=='home'"></home>
		<view class="cu-bar tabbar bg-white shadow foot">	
			<!-- homeStart -->
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabBar/icon_home' + [PageCur == 'home'?'_on':''] + '.png'" ></image>
				</view>
				<view :class="PageCur=='home'?'text-theme':'text-gray'">主页</view>
			</view>
			<!-- homeEnd -->

			<!-- safeStart -->
			<view class="action" @click="NavChange" data-cur="safe">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabBar/icon_safe' + [PageCur == 'safe'?'_on':''] + '.png'" ></image>
				</view>
				<view :class="PageCur=='safe'?'text-theme':'text-gray'">安全</view>
			</view>
			<!-- safeEnd -->
			
			<!-- findStart -->
			<view class="action" @click="NavChange" data-cur="find">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabBar/icon_find' + [PageCur == 'find'?'_on':''] + '.png'" ></image>
				</view>
				<view :class="PageCur=='find'?'text-theme':'text-gray'">发现</view>
			</view>
			<!-- findEnd -->

			<!-- meStart -->
			<view class="action" @click="NavChange" data-cur="me">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabBar/icon_me' + [PageCur == 'me'?'_on':''] + '.png'" ></image>
				</view>
				<view :class="PageCur=='me'?'text-theme':'text-gray'">我的</view>
			</view>
			<!-- meEnd -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				// console.log(e.currentTarget.dataset.cur)
				this.PageCur = e.currentTarget.dataset.cur
			},
			
		},
		onLoad() {
			this.swiperList = this.$swiper;
		}
	}
</script>

<style>
</style>
