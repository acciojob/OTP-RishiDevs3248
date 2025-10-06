//your JS code here. If required.
let ips = document.querySelectorAll(".code")
ips[0].focus();
ips.forEach((ip,index)=>{
	ip.addEventListener('input',(e)=>{
		if(e.target.value.length == 1 && index < ips.length-1){
			ips[index+1].focus();
		}
	})
	ip.addEventListener('keydown',(e)=>{
		if (e.key === 'Backspace') {
			if (e.target.value.length == 0 && index > 0) {
				ips[index-1].value = ""
				ips[index-1].focus();
			}else{
				ips[index].value = ""
			}
		}
	})
})


