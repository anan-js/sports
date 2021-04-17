// const pngs=require.context("../static/icons",false,/.png$/)
// console.log(pngs)
// let module = {}
// pngs.keys().forEach((key,index)=>{
// 	console.log(key,pngs(key));
//   module[key]=pngs(key)
// })
// console.log(module)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context("../../static/icons", false, /.png$/)
requireAll(req)

export default requireAll(req)
