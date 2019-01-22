export default {
	date: {
		/**
		 * 计算指定日期到今天的天数差
		 */
		diff_day(time) {
			let now = new Date();
			return parseInt((now.getTime() - new Date(time).getTime()) / (1000 * 60 * 60 * 24));
		},
		isLeapyear(year) {
			if(year/4 == 0 && year/100 != 0){
				return true ;
			} else if (year/400 == 0){
				return true ;
			} else{
				return false ;
			}
		} ,
		dayOfMonth(year, month) {
			let days = 31;
			switch (month) {
				case 4:
				case 6:
				case 9:
				case 11:
					days = 30;
					break;
				case 2:
					days = this.isLeapyear(year) ? 29 : 28;
					break;
			}
			return days;
		}
	}
}