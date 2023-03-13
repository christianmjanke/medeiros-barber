const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const data = document.querySelector('input[name="date"]').value;



let dataSplit = data.split("-"); // Divide a data em três partes: ano, mês e dia
let diaMes = dataSplit[2] + "/" + dataSplit[1]; // Obtém somente o dia e o mês e junta com /

  const time = document.querySelector('input[name="horario"]').value;
  const barbebeiro = document.getElementById("escolha").value;

  let barber = "";
  document
    .querySelectorAll('input[name="barber"]:checked')
    .forEach(function (item) {
      barber += `${item.value}\n`;
    });

  const message = `Quero agendar um corte de cabelo.\n\nMeu nome é : ${name} \n\nDia :  ${diaMes} \nHorário :  ${time} \n\nTIPO DE CORTE : \n${barber} \nCom o barbeiro: ${barbebeiro}`;

  const phone = "5551997811832";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappLink, "_blank");
});
