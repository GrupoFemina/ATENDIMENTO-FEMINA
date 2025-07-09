
import React, { useState } from "react";

const boardData = {
  lists: {
    estoque_coluna_001: "ESTOQUE",
    "683615767be3d4dd7675250e": "CADASTROS - EXTERNAS",
    "683616ef6cc0c8d06e9b1dcc": "ADMINISTRATIVO",
    "683615767be3d4dd7675250f": "FORÇA DE VENDAS",
    "683615767be3d4dd7675250d": "ATENDIMENTO - LOJA"
  },
  cards: [
    { name: "CADASTRO NOVO", desc: "<strong>Ativação:</strong> Via pedido.<br><strong>Pagamento:</strong> Boleto 3x.<br><strong>Entrega:</strong> endereço do RE.", idList: "683615767be3d4dd7675250e" },
    { name: "TRANSFERÊNCIA DE CADASTRO - ACOLHIMENTO", desc: "<strong>ATIVAÇÃO:</strong> Pedido em Anexo<br><strong>FORMA DE PAGAMENTO:</strong> Boleto 3x<br><strong>ENTREGA:</strong> No endereço do RE<br><strong>CUPOM:</strong> Inserir cupom vigente", idList: "683615767be3d4dd7675250e" },
    { name: "REATIVAÇÃO - CESSADO", desc: "<strong>ATIVAÇÃO:</strong> Pedido em Anexo<br><strong>FORMA DE PAGAMENTO:</strong> Boleto 3x<br><strong>ENTREGA:</strong> No endereço do RE<br><strong>CUPOM:</strong> Inserir cupom vigente", idList: "683615767be3d4dd7675250e" },
    { name: "LIBERAR CADASTRO - AUTOATENDIMENTO", desc: "<strong>Liberação de cadastro</strong> para o RE realizar compras em loja ou no APP.<br><br><strong>STATUS:</strong> [NOVO - CESSADO - TRANSFERÊNCIA]<br><strong>PAGAMENTO:</strong> Boleto 3x.", idList: "683615767be3d4dd7675250e" },
    { name: "AUTO REATIVAÇÃO", desc: "<strong>RE realizou pedido pelo APP ou em Loja</strong><br><br><strong>Nº PEDIDO:</strong> XXX.XXX.XXX<br><strong>Ranking:</strong> Adicionar ao ciclo XX", idList: "683615767be3d4dd7675250e" },
    { name: "PEDIDO COM RETIRADA AGENDADA", desc: "<strong>Nº PEDIDO:</strong> [XXX]<br><strong>CÓD. REV.:</strong> [CÓD + NOME RE]<br><strong>DATA RETIRAR:</strong> [pedido + 2 dias úteis]", idList: "estoque_coluna_001" },
    { name: "OCORRÊNCIA DE PRODUTO", desc: "<strong>CÓD. PRODUTO1:</strong><br><strong>CÓD. PRODUTO2:</strong><br><strong>CÓD. PRODUTO3:</strong>", idList: "estoque_coluna_001" },
    { name: "CANCELAMENTO DE PEDIDO", desc: "<strong>CÓD/NOME:</strong><br><strong>N° DO PEDIDO:</strong><br><strong>MOTIVO:</strong><br><strong>ANEXAR OS PRINTS DA SOLICITAÇÃO:</strong> (conversa com RE, entre outros)<br><br>@‌mencionar gerente adm @‌marcar gerente loja @‌mencionar gerente estoque", idList: "estoque_coluna_001" },
    { name: "TRANSFERÊNCIA DE VD - DOCUMENTAÇÃO NECESSÁRIA", desc: "Foto do documento (RG/CNH) frente e verso,<br>Selfie com o documento junto.<br>Comprovante de endereço atualizado e em seu nome.<br>Carta a próprio punho informando que está residindo no endereço atual.<br><br><strong>*ENVIAR A DOCUMENTAÇÃO PARA O E-MAIL:</strong><br>Joinville: admjoinville@grupofemina.com.br<br>Florianópolis: admflorianopolis@grupofemina.com.br<br>Rio do Sul: admriodosul@grupofemina.com.br", idList: "683616ef6cc0c8d06e9b1dcc" },
    { name: "ATENDIMENTO - RE ATIVO", desc: "<strong>CÓD RE + NOME:</strong><br><strong>DESCRIÇÃO DO ATENDIMENTO:</strong> Descrever a necessidade do RE.<br><strong>PROMOTORA:</strong> @marcar Alocação na Rede", idList: "683615767be3d4dd7675250f" },
    { name: "IDENTIFICAÇÃO PARA COMPRAR", desc: "Apresente um documento com foto no caixa para realizar compras.<br>Medida de segurança e identificação do revendedor.<br><br>Gratidão 💜", idList: "683615767be3d4dd7675250d" }
  ]
};

function App() {
  const [modalContent, setModalContent] = useState(null);
  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const grouped = {};
  for (const listId in boardData.lists) {
    grouped[listId] = {
      name: boardData.lists[listId],
      cards: boardData.cards.filter((c) => c.idList === listId)
    };
  }

  return (
    <div>
      <header>
        <h1>ATENDIMENTO PADRÃO</h1>
      </header>
      <div className="board">
        {Object.entries(grouped).map(([listId, list]) => (
          <div key={listId} className="list">
            <h3>{list.name}</h3>
            {list.cards.map((card, idx) => (
              <button key={idx} onClick={() => openModal(card)} className="card">
                <strong>{card.name}</strong>
              </button>
            ))}
          </div>
        ))}
      </div>

      {modalContent && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal}>Fechar</button>
            <div
              className="modal-content"
              dangerouslySetInnerHTML={{
                __html: `<strong>${modalContent.name}</strong><br><br>${modalContent.desc}`
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
