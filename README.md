# ATENDIMENTO-FEMINA
Mensagens Padronizadas
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Central de Atendimento</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #5c3d91;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .tabs {
      display: flex;
      justify-content: center;
      background: #eee;
      padding: 10px 0;
    }
    .tabs button {
      padding: 10px 20px;
      margin: 0 5px;
      border: none;
      background: #ddd;
      cursor: pointer;
      border-radius: 5px;
    }
    .tabs button.active {
      background: #5c3d91;
      color: white;
    }
    .content {
      display: none;
      padding: 20px;
    }
    .content.active {
      display: block;
    }
    .card {
      background: white;
      border-radius: 8px;
      padding: 15px;
      margin: 10px 0;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 600px;
      max-height: 80vh;
      overflow-y: auto;
    }
    .close {
      float: right;
      font-size: 20px;
      cursor: pointer;
    }
    input[type="text"] {
      display: block;
      margin: 20px auto;
      padding: 10px;
      width: 80%;
      max-width: 500px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Central de Atendimento</h1>
  </header>

  <div class="tabs">
    <button class="tab-btn active" data-tab="whatsapp">Atendimento WhatsApp</button>
    <button class="tab-btn" data-tab="cadastros">Cadastros - Externas</button>
  </div>

  <input type="text" id="search" placeholder="Digite para buscar uma mensagem..." />

  <div id="whatsapp" class="content active">
    <div class="card" data-msg="**CADASTRO REVENDEDOR**\n**IR - INTENÇÃO DE REVENDA**\n\nNOME COMPLETO:\nCPF:\nBAIRRO:\nTELEFONE:">Cadastro Revendedor</div>
    <div class="card" data-msg="**CAR - ATENDIMENTO**\nAtendimento de segunda a sexta, das 8h às 20h.\nSábado, das 9h às 16h.\nWhatsapp: (41) 8735-7095\nTelefone: 0800-729-9050\nLigação gratuita de qualquer lugar do país tanto de telefone fixo quanto de celular">CAR - Atendimento</div>
  </div>

  <div id="cadastros" class="content">
    <div class="card" data-msg="**CADASTRO NOVO**\nATIVAÇÃO: [PEDIDO EM ANEXO]\nFORMA DE PAGAMENTO: [BOLETO 3X]\nENTREGA: [NO ENDEREÇO DO RE]">Cadastro Novo</div>
    <div class="card" data-msg="**CANCELAMENTO DE PEDIDO**\nCÓD/NOME:\nN° DO PEDIDO:\nMOTIVO:\nANEXAR OS PRINTS DA SOLICITAÇÃO">Cancelamento</div>
    <div class="card" data-msg="**TRANSFERÊNCIA DE CADASTRO**\nATIVAÇÃO: [PEDIDO EM ANEXO]\nFORMA DE PAGAMENTO: [BOLETO 3X]\nENTREGA: [NO ENDEREÇO DO RE]">Transferência de Cadastro</div>
    <div class="card" data-msg="**AUTO ATIVAÇÃO - APP**\nNUMERO DO PEDIDO: 450.271.762 FAVOR ADICIONAR NO MEU RANKING CICLO 8">Auto Ativação</div>
    <div class="card" data-msg="**PEDIDO COM RETIRADA AGENDADA – NÃO CANCELAR**\nNº PEDIDO: [XXX]\nCÓD. REV.: [CÓD + NOME RE]\nDATA DO PEDIDO: [XX/XX/XX]\nDATA RETIRAR: [DATA DO PEDIDO + 2 DIAS ÚTEIS]">Pedido com Retirada Agendada</div>
    <div class="card" data-msg="**CARTA DE AUTODECLARAÇÃO DE ENDEREÇO**\n\"Eu, [Seu Nome Completo], portador do RG nº [Seu RG] e CPF nº [Seu CPF], declaro, que resido atualmente no endereço: Rua [Rua], Nº [Número], Bairro [Bairro], Cidade [Cidade], CEP [CEP].\nDeclaro, para os devidos fins, que as informações prestadas são verdadeiras.\n[Cidade, data]\nAssinatura\nNome Completo\"">Carta de Autodeclaração</div>
  </div>

  <div class="modal" id="modal">
    <div class="modal-content">
      <span class="close" id="close">&times;</span>
      <pre id="modal-text"></pre>
    </div>
  </div>

  <script>
    const tabBtns = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".content");
    const searchInput = document.getElementById("search");

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
      });
    });

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
        document.getElementById("modal-text").textContent = card.dataset.msg;
        document.getElementById("modal").style.display = "flex";
      });
    });

    document.getElementById("close").onclick = () => {
      document.getElementById("modal").style.display = "none";
    };

    window.onclick = e => {
      if (e.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
      }
    };

    searchInput.addEventListener("input", () => {
      const val = searchInput.value.toLowerCase();
      document.querySelectorAll(".card").forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(val) ? "block" : "none";
      });
    });
  </script>
</body>
</html>
