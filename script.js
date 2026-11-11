let produtos = [];
const prompt = require("prompt-sync")();
const fs = require("fs");
let continuar = "sim";
while (continuar === "sim") {
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
console.log("Faturamento total: R$", faturamentoTotal.toFixed(2));
produtos.push({
    nome: produto,
    precoCompra: precoCompra,
    precoVenda: precoVenda,
    quantidade: quantidade
    
});

continuar = prompt("Deseja cadastrar outro produto? (sim/não) ");
}
let relatorio = "MEU ESTOQUE\n\n";
let totalEstoque = 0;
let totalLucro = 0;
let totalFaturamento = 0;
for (let produto of produtos) {
    totalEstoque += produto.precoCompra * produto.quantidade;

totalLucro += (produto.precoVenda - produto.precoCompra) * produto.quantidade;

totalFaturamento += produto.precoVenda * produto.quantidade;
relatorio += "Produto: " + produto.nome + "\n";
relatorio += "Preço de compra: R$ " + produto.precoCompra.toFixed(2) + "\n";
relatorio += "Preço de venda: R$ " + produto.precoVenda.toFixed(2) + "\n";
relatorio += "Quantidade: " + produto.quantidade + "\n";
relatorio += "Valor do estoque: R$ " + (produto.precoCompra * produto.quantidade).toFixed(2) + "\n";
relatorio += "Lucro por unidade: R$" + (produto.precoVenda - produto.precoCompra).toFixed(2) + "\n";
relatorio += "Lucro total: R$ " + ((produto.precoVenda - produto.precoCompra) * produto.quantidade).toFixed(2) + "\n";
relatorio += "Faturamento total: R$ " + (produto.precoVenda * produto.quantidade).toFixed(2) + "\n\n";
}
relatorio += "----- RESUMO GERAL DO ESTOQUE -----\n";
relatorio += "Valor total investido: R$ " + totalEstoque.toFixed(2) + "\n";
relatorio += "Lucro total potencial: R$ " + totalLucro.toFixed(2) + "\n";
relatorio += "Faturamento potencial: R$ " + totalFaturamento.toFixed(2) + "\n";
fs.writeFileSync("relatorio.txt", relatorio);
console.log("Relatório salvo com sucesso!");
console.log(produtos);