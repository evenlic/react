
import {INCREMENT,DECREMENT} from '../action_types'

let initState = 0 //定义初始状态
export default function (preState=initState,action){
	const {type,data} = action
	let newState
	switch (type) {
		case INCREMENT:
			//如果动作类型为加
			newState = preState + data
			return newState
		case DECREMENT:
			//如果动作类型为减
			newState = preState - data
			return newState
		default:
			//如果动作类型不是加也不是减，那么就是初始化的时。
			return preState
	}
}