function obterMensagens() {
    var retorno = [];

    $.ajax({
        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false,
        success: function(data) {
            retorno = data;
        },
        error: function() {
            console.error('Erro ao obter mensagens.');
        }
    });

    return retorno;
}

function inserirMensagem(mensagem) {
    $.ajax({
        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        contentType: 'application/json',
        dataType: 'json',
        async: false,
        success: function() {
            alert('Mensagem enviada com sucesso!');
        },
        error: function() {
            alert('Erro ao enviar mensagem.');
        }
    });
}

function validarUsuario(objLoginSenha) {
    var retorno = false;

    $.ajax({
        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/usuarios/validar',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        async: false,
        data: JSON.stringify(objLoginSenha),
        success: function(data) {
            retorno = data;
        },
        error: function() {
            console.error('Erro ao validar usuário.');
        }
    });

    return retorno;
}
