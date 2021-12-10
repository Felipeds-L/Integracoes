import $ from 'jquery'
import Livro from "./modelo/livro";

const livro = new Livro('Royal', 111, 27)

console.log(livro.precoComDesconto())

$('body').append(`<h1>Nome: ${livro.nome}</h1>`)
$('body').append(`<h2>Preço: R$${livro.precoComDesconto()}</h2>`)