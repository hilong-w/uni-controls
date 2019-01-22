<template>
	<view class="page">
		<mg-datepicker ref="datepicker" :date="date">
			<view class="message">暂时只能查询半年内的结果</view>
		</mg-datepicker>
	</view>
</template>

<script>
	import mgDatepicker from '@/components/magician-datepicker/magician-datepicker.vue'
	export default {
		components: {
			mgDatepicker
		},
		data() {
			return {
				date: ''
			};
		},
		onNavigationBarButtonTap() {			
			uni.setStorage({
				key: 'selected-date',
				data: this.$refs.datepicker.selected,
				complete() {
					uni.navigateBack({
						delta: 1
					})
				}
			})
		},
		onLoad(options) {
			this.date = options.date;
		}
	}
</script>

<style>
	.message {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 125upx;
		color: #ff1100;
		font-size: 12px;
	}
</style>
