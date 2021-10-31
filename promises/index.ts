interface IResponse{
	id:string,
	content:string,
	flag:boolean
}

const doTheOperationAfterSomeTime = (time:number) : Promise<IResponse> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve({
			id:"sdfsd",
			content:"lorem ipsum",
			flag:true
		}), time)
	})
}

doTheOperationAfterSomeTime(3000)
.then((data) => console.log(data))
