import { serverURL } from '../util/constants';

export function login(data) {
    const route = `/usuario/login`;

    fetch(serverURL + route, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            if (res.ok) {
                alert('Login feito com sucesso');
            }
        })
        .catch((err) => alert(err));
}
