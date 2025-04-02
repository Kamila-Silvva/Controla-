import React, { useState } from 'react';
import CadastroFinanceiro from './CadastroFinanceiro';
import ProjecaoFinanceira from './ProjecaoFinanceira';

const ProgramacaoFinanceira = () => {
  const [gastos, setGastos] = useState([]);
  const [recebimentos, setRecebimentos] = useState([]);
  const [metas, setMetas] = useState([]);

  // Função para adicionar gastos ou recebimentos
  const handleAdicionar = (item) => {
    if (item.tipo === 'gasto') {
      setGastos([...gastos, item]);
    } else {
      setRecebimentos([...recebimentos, item]);
    }
  };

  // Função para adicionar metas
  const handleAdicionarMeta = (meta) => {
    setMetas([...metas, meta]);
  };

  return (
    <div>
      <h1>Programação Financeira</h1>

      {/* Cadastro de Gastos e Recebimentos */}
      <CadastroFinanceiro onAdicionar={handleAdicionar} />

      {/* Formulário para Adicionar Metas */}
      <h2>Adicionar Meta</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const descricao = e.target.descricao.value;
          const valorTotal = parseFloat(e.target.valorTotal.value);
          const prazo = parseInt(e.target.prazo.value);
          const valorMensal = valorTotal / prazo; // Divide o valor total pelo prazo
          handleAdicionarMeta({ descricao, valorTotal, prazo, valorMensal });
          e.target.reset(); // Limpar o formulário após o envio
        }}
      >
        <label>
          Descrição:
          <input type="text" name="descricao" required />
        </label>
        <label>
          Valor Total:
          <input type="number" name="valorTotal" required />
        </label>
        <label>
          Prazo (meses):
          <input type="number" name="prazo" required />
        </label>
        <button type="submit">Adicionar Meta</button>
      </form>

      {/* Projeção Financeira */}
      <ProjecaoFinanceira
        gastos={gastos}
        recebimentos={recebimentos}
        metas={metas}
      />
    </div>
  );
};

export default ProgramacaoFinanceira;