import './RedefinirSenha.css';

function RedefinirSenha () {
  return (
    <div className="recovery-container">
    <div className="form-box">
        <h1 className="logo">Controla+</h1>
        
        <div className="instructions">
            <h2>Esqueceu sua senha?</h2>
            <p>Digite sua nova senha para concluir a recuperação do acesso.</p>
        </div>
        
        <div className="form-group">
            <label htmlFor="email">Senha</label>
            <input type="email" id="email" className="form-input" placeholder="Digite uma nova senha"/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Confirme sua nova senha</label>
            <input type="email" id="email" className="form-input" placeholder="Confirme sua nova senha"/>
        </div>
        
        <button className="submit-code-btn">
            Redefinir senha
        </button>
    </div>
</div>
  )
}

export default RedefinirSenha