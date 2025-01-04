# PUC-QAtests_backend

# **User Management API**

Este projeto é uma API para gerenciar usuários, incluindo funcionalidades como criar, listar, atualizar e deletar usuários.
O objetivo principal do projeto é treinar a prática com Jest.

## **Tabela de Conteúdos**

- [Descrição](#descrição)
- [Requisitos](#requisitos)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Testes](#testes)
- [Estrutura de Pastas](#estrutura-de-pastas)

---

## **Descrição**

A API é construída em Node.js com Express, utilizando MongoDB como banco de dados. O projeto segue boas práticas de organização de código, possui testes automatizados com Jest e suporta operações CRUD para gerenciar usuários.

---

## **Requisitos**

- **Node.js**: versão 16.x ou superior
- **MongoDB**: um banco de dados MongoDB configurado
- **NPM ou Yarn**: para gerenciar pacotes

---

## **Configuração**

1. Clone o repositório:

   ```bash
   git clone https://github.com/PalomaSts/PUC-QAtests_backend.git
   cd user-management-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   MONGO_URI=mongodb+srv://<seu_usuario>:<sua_senha>@<seu_cluster>/<seu_banco>?retryWrites=true&w=majority
   PORT=5000
   ```

4. Certifique-se de que o MongoDB está em execução.

---

## **Executando o Projeto**

1. Inicie o servidor:

   ```bash
   npm start
   ```

2. O servidor estará disponível em:
   ```
   http://localhost:5000
   ```

---

## **Testes**

Para executar os testes automatizados, use:

```bash
npm test
```

Caso queira verificar possíveis problemas com alocação de recursos, execute:

```bash
npx jest --detectOpenHandles
```

---

## **Estrutura de Pastas**

```
user-management-api/
├── controllers/        # Controladores das rotas
├── models/             # Modelos do MongoDB
├── routes/             # Definição de rotas da API
├── tests/              # Testes automatizados
├── .env                # Variáveis de ambiente (não incluso no repositório)
├── .eslintrc.json      # Configuração do ESLint
├── jest.config.js      # Configuração do Jest
├── package.json        # Dependências e scripts
└── README.md           # Documentação do projeto
```

---

## **Observações**

- **Pasta `node_modules`**:  
  A pasta `node_modules` foi ignorada no repositório para reduzir o tamanho do envio. Após clonar o repositório, instale as dependências usando `npm install`.

---

Obrigada por dar uma olhada no meu projeto! 😊
