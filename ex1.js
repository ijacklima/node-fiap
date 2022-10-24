import fs from "fs";

const dir = "./upload";
//Funções que terminam em Sync são síncronas
//ou seja elas são bloqueantes
//evite utilizar ao máximo funções síncronas
if (!fs.existsSync(dir)) {
  console.log("Criando diretório");

  fs.mkdirSync(dir);

  setTimeout(() => {
    console.log("------------");
    console.log("Diretório criado com sucesso");
  }, 1000);
} else {
  console.log("Acessando o diretório ", dir);
}

let msg = "Gratidão gera Gratidão";
let file = "gratidao.txt";
let path = `${dir}/${file}`;

if (!fs.existsSync(path)) {
  fs.writeFileSync(path, msg);
  console.log("Arquivo criado com sucesso ", file);
}