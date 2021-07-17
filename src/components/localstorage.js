function cadastrar() {
    let email = document.getElementById('email').value;
    let data = {
        email
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem("Email", convertData);
    window.alert('E-mail cadastrado com sucesso! Fique atento para não perder nada.');
}
