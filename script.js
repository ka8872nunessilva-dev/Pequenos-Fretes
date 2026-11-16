/*
  EDITE SEU TELEFONE DO WHATSAPP AQUI.
  Use 55 + DDD + número, somente números.
  Exemplo: 5561999999999
*/
const NUMERO_WHATSAPP = "5561995676496";

document.querySelectorAll(".whatsapp-link").forEach((botao) => {
  const mensagem = encodeURIComponent(
    botao.dataset.msg || "Olá! Gostaria de solicitar um orçamento."
  );
  botao.href = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`;
  botao.target = "_blank";
  botao.rel = "noopener noreferrer";
});
document.getElementById("ano").textContent = new Date().getFullYear();
