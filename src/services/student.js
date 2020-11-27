const url = `http://api.localhost:3000`;

export function registerStudent(data){
	const route = `/usuario`;

	fetch(
		url + route,
		{
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(data)
			
		}
	).then((res) => {
		if(res.ok){
			alert('Cadastro feito com sucesso')
		}
	}).catch((err) =>
		alert(err)
	)
}

