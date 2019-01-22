<template>
	<view class="content">
        <view class="button" @tap="chooseDate">{{now}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				now: '选择日期'
			}
		},
		methods: {
			chooseDate() {
				uni.navigateTo({
					url: '../datepicker/datepicker?date=' + this.now
				});
			}
		},
		onShow() {
			let date = uni.getStorageSync('selected-date');
			if (date) {
				if (date.constructor === Array) {
					this.now = date.join('至');
				}
				else {
					this.now = date;
				}
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .button {
		width: 500upx;
		height: 75upx;
		border-radius: 1000px;
		border: 1px solid #DBDBDB;
		background: #F5F5F5;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
