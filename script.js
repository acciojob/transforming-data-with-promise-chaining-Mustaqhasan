// let inputNum=Number(document.getElementById("ip").value)
let inputNum=5

const first=(inputNum)=>{return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(inputNum)
	},2000)
})}
const second=(num)=>{return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(num*2)
	},1000)
})}
const third=(num)=>{return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(num-3)
	},1000)
})}
const fourth=(num)=>{return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(num/2)
	},1000)
})}
const fifth=(num)=>{return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(num+10)
	},1000)
})}
let display=document.getElementById("output")
first.then((res)=>{
	document.getElementById("output").innerText=res
	return second(res)
}).then((res)=>{
	document.getElementById("output").innerText=res
	return third(res)
}).then((res)=>{
	document.getElementById("output").innerText=res
	return fourth(res)
}).then((res)=>{
	document.getElementById("output").innerText=res
	return fifth(res)
}).then((res)=>{
	document.getElementById("output").innerText=res
})

