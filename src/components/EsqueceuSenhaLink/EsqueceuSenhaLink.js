import { Link } from 'react-router-dom';
import './EsqueceuSenhaLink.css';

function EsqueceuSenhaLink() {
  return (
    <div className="recovery-container">
    <div className="form-box">
        <h1 className="logo">Controla+</h1>
        
        <div className="instructions">
            <h2>Esqueceu sua senha?</h2>
            <p>Siga as instruções para recuperar o acesso.</p>
        </div>
        
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Digite seu email cadastrado"/>
        </div>
        
        <Link to="/codigo-verificacao" className='submit-code-btn'> Enviar Código</Link>
    </div>
</div>
  )
}

export default EsqueceuSenhaLink;