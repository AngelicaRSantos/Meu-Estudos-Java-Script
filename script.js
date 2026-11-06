const prompt = require("prompt-sync")();
let produto = prompt("Qual é o nome do produto? ");
let precoCompra = Number(prompt("Qual é o preço de compra? "));
let precoVenda = Number(prompt("Qual é o preço de venda?"));
let quantidade = Number (prompt("Qual é a quantidade no estoque?"));
console.log(produto);
console.log(precoCompra);
console.log(precoVenda);
console.log(quantidade);
let valorEstoque = precoCompra * quantidade;
console.log(valorEstoque.toFixed(2));
let lucro = precoVenda - precoCompra;
console.log(lucro.toFixed(2));
let lucroTotal = lucro * quantidade;
console.log(lucroTotal.toFixed(2));
let faturamentoTotal = precoVenda * quantidade;
console.log(faturamentoTotal.toFixed(2))
console.log("----- RELATÓRIO DO PRODUTO -----");
console.log("Produto:", produto);
console.log("Preço de compra: R$", precoCompra.toFixed(2));
console.log("Preço de venda: R$", precoVenda.toFixed(2));
console.log("Quantidade:", quantidade);
console.log("Valor total do estoque: R$", valorEstoque.toFixed(2));
console.log("Lucro por unidade: R$", lucro.toFixed(2));
console.log("Lucro total: R$", lucroTotal.toFixed(2));
console.log("Faturamento total: R$", faturamentoTotal.toFixed(2));74
console.log("----- RELATÓRIO DO PRODUTO -----");
console.log("Produto:", produto);
console.log("Preço de compra: R$", precoCompra.toFixed(2));
console.log("Preço de venda: R$", precoVenda.toFixed(2));
console.log("Quantidade:", quantidade);
console.log("Valor total do estoque: R$", valorEstoque.toFixed(2));
console.log("Lucro por unidade: R$", lucro.toFixed(2));
console.log("Lucro total: R$", lucroTotal.toFixed(2));
console.log("Faturamento total: R$", faturamentoTotal.toFixed(2));
const fs = require("fs");
let relatorio = `
MEU ESTOQUE
Produto: ${produto}
Preço de compra: R$ ${precoCompra.toFixed(2)}
Preço de venda: R$ ${precoVenda.toFixed(2)}
Quantidade: ${quantidade}
Valor total do estoque: R$ ${valorEstoque.toFixed(2)}
Lucro por unidade: R$ ${lucro.toFixed(2)}
Lucro total: R$ ${lucroTotal.toFixed(2)}
Faturamento total: R$ ${faturamentoTotal.toFixed(2)}
`;

fs.writeFileSync("relatorio.txt", relatorio);

console.log("Relatório salvo com sucesso!");