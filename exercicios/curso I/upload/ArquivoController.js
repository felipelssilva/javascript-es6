class ArquivoController {
    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        let arquivos = ArquivoHelper.cria(this._inputDados.value);
        console.log(`Dados do arquivo: ${arquivos.nome}, ${arquivos.tamanho}, ${arquivos.tipo}`);
        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}