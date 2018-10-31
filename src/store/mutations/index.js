export default {
  updateCount(state, { num, num2 }) {
    // 通过参数传递对象，对象的属性通过结构赋值来达到传多个参数的目的
    // console.log(num2)
    state.count = num
  }
}
