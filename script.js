
document.getElementById("btn").addEventListener("click",()=>start())
// let inputNum=10

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
function start() {
	let inputNum=Number(document.getElementById("ip").value)
first(inputNum).then((res)=>{
	document.getElementById("output").innerText=`Result: ${res}`
	return second(res)
}).then((res)=>{
	document.getElementById("output").innerText=`Result: ${res}`
	return third(res)
}).then((res)=>{
	document.getElementById("output").innerText=`Result: ${res}`
	return fourth(res)
}).then((res)=>{
	document.getElementById("output").innerText=`Result: ${res}`
	return fifth(res)
}).then((res)=>{
	document.getElementById("output").innerText=`Final Result: ${res}`
})

}

