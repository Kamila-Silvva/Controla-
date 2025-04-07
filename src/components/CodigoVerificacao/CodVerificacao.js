import { Link } from 'react-router-dom';
import './CodVerificacao.css';

function CodigoVerificacao () {

  return (
    <div className="recovery-container">
    <div className="form-box">
        <h1 className="logo">Controla+</h1>
        
        <div className="instructions">
            <h2>Esqueceu sua senha?</h2>
            <p>Enviamos um código de verificação para seu e-mail. Digite-o abaixo para continuar. Caso não encontre, verifique a caixa de spam.</p>
        </div>
        
        <div className="form-group">
            <label fohtmlFor="email">Código de verificação</label>
            <input type="email" id="email" className="form-input" placeholder="Digite o código"/>
        </div>
        
        <Link to='/redefinir-senha' className='submit-code-btn'>Verificar</Link>
    </div>
</div>
  )
}

export default CodigoVerificacao