<template name="home">
	<view>
		<cu-custom bgColor="bg-gradual-theme" >
			<block slot="content">主页</block>
		</cu-custom>
		
		<!-- 轮播图start -->
		<swiper 
		 class="screen-swiper round-dot" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image 
				:src="item.url" 
				mode="aspectFill">
				</image>	
			</swiper-item>
		</swiper>
		<!-- 轮播图end -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: this.$swiper
				// swiperList: [{
				// 	id: 0,
				// 	type: 'image',
				// 	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				// }, {
				// 	id: 1,
				// 	type: 'image',
				// 	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				// }, {
				// 	id: 2,
				// 	type: 'image',
				// 	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				// }, {
				// 	id: 3,
				// 	type: 'image',
				// 	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				// }, {
				// 	id: 4,
				// 	type: 'image',
				// 	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				// }, {
				// 	id: 5,
				// 	type: 'image',
				// 	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				// }, {
				// 	id: 6,
				// 	type: 'image',
				// 	url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				// }]
			}
		},
		methods: {
		},
		onLoad(){
			this.swiperList = this.getSwiperList();
			this.TowerSwiper('swiperList');			
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				console.log(1)
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
		
			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},
		
			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},
		
			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},


		}
	}
</script>

<style>
	.tower-swiper .tower-item {
	transform: scale(calc(0.5 + var(--index) / 10));
	margin-left: calc(var(--left) * 100upx - 150upx);
	z-index: var(--index);
	}
</style>
