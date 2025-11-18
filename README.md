# 📚 Planner Inglês 2025 - Landing Page

## Visão Geral do Projeto

Esta é uma landing page de alta conversão, desenvolvida em **React**, com foco na apresentação e venda do **Planner Inglês 2025** (um produto digital para estudantes autodidatas com rotina corrida). O design é **Mobile-First** e utiliza técnicas modernas de CSS (Grid e Flexbox) para garantir uma experiência visual atraente e perfeitamente adaptada a qualquer tamanho de ecrã.

## ✨ Destaques e Funcionalidades Implementadas

O projeto é modularizado em componentes React, cada um com sua lógica de estado e responsividade:

* **Hero Section:** Título escalável, vídeo de apresentação responsivo (`aspect-ratio`), e Call to Action (CTA) principal com animação de `pulse`.
* **Feedbacks (Carrossel):** Galeria de depoimentos responsiva, exibindo **3 cards por vez** no desktop. Utiliza `useRef` e `scroll-snap` em CSS para um comportamento de "paginação" suave e preciso.
* **Pricing Section:** Layout de duas colunas (Vantagens vs. Preço) em *desktop*. Caixa de Preço destacada, com **selos de confiança** e estrutura de preço otimizada.
* **Vantagens & Características:** Listas modulares utilizando **ícones SVG** distintos (não genéricos) para aumentar o impacto visual e a autoridade.
* **FAQ (Perguntas Frequentes):** Acordeão interativo, utilizando a técnica de `max-height` no CSS para animação suave das respostas (slide-down).
* **Responsividade (4K Ready):** Implementação de *breakpoints* progressivos para escalar tamanhos de fonte, fotos, e `max-width` do conteúdo.

## 🛠️ Tecnologias Utilizadas

* **Frontend:** React (componentes funcionais).
* **Estilização:** CSS3 puro (Flexbox, Grid Layout, Scroll Snap).
* **Tipografia:** **Montserrat** (importada via `@font-face` localmente para maior robustez).
* **Ícones:** SVGs (Scalable Vector Graphics).
* **Deploy:** Netlify (Configuração para Continuous Deployment/CD).

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de que tem o **Node.js** e o **npm** (Node Package Manager) instalados.

### Instalação

1.  Clone o repositório ou baixe os arquivos do projeto.
2.  Abre o terminal na pasta raiz do projeto (onde está o `package.json`).
3.  Instala as dependências:
    ```bash
    npm install
    ```

### Execução

Para iniciar o servidor de desenvolvimento:
```bash
npm run start
