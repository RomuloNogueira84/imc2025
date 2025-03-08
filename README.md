# Calculadora de IMC com Efeito Parallax

## Descrição

Este projeto é uma aplicação web interativa para calcular o Índice de Massa Corporal (IMC) do usuário. Ele foi desenvolvido utilizando HTML para a estrutura da página, CSS para o design e efeitos visuais, e JavaScript para a lógica do cálculo do IMC. O site possui um design moderno com um efeito parallax, que dá a sensação de movimento ao fundo, tornando a experiência do usuário mais envolvente.

## Funcionalidades

- **Efeito Parallax:** O plano de fundo da página se move a uma velocidade diferente do conteúdo em primeiro plano, criando um efeito visual atrativo.
- **Formulário de Entrada:** O usuário pode inserir seu peso e altura em um formulário.
- **Cálculo do IMC:** Ao enviar o formulário, o IMC é calculado com base nos dados inseridos.
- **Exibição do Resultado:** O resultado do cálculo do IMC é exibido na página junto com uma mensagem correspondente à classificação do IMC (magreza extrema, peso ideal, sobrepeso, obesidade grau I, II ou III).

## Estrutura do Projeto

O projeto é composto por três arquivos principais:
1. **HTML:** Contém a estrutura da página e o formulário de entrada de dados.
2. **CSS:** Define os estilos da página e inclui o efeito parallax para o plano de fundo.
3. **JavaScript:** Contém a lógica para o cálculo do IMC e a exibição do resultado.

## Como o Projeto Foi Feito

### HTML
- A estrutura da página foi criada utilizando elementos HTML como `<div>`, `<form>`, `<label>`, `<input>`, `<button>` e `<p>`.
- O formulário coleta os dados de peso e altura do usuário e inclui um botão para enviar as informações e calcular o IMC.

### CSS
- Os estilos foram definidos para dar à página um visual moderno e atraente.
- Utilizou-se a propriedade `background-attachment: fixed;` para criar o efeito parallax, onde o plano de fundo se mantém fixo enquanto o usuário rola a página.
- O conteúdo principal foi estilizado para ter um fundo semi-transparente, bordas arredondadas e centralização na página, melhorando a legibilidade e a estética.

### JavaScript
- A lógica do cálculo do IMC foi implementada utilizando um `switch` para classificar o IMC em diferentes categorias.
- O evento `submit` do formulário foi interceptado para calcular o IMC e exibir o resultado na página, ao invés de recarregar a página.

