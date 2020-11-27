export const getUser = () => {
    return JSON.parse(localStorage.getItem("usuario"));
}

export const getToken = () => {
    return localStorage.getItem("token");
}
