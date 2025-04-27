# 🔍 Buscador de perfil do GitHub

Uma aplicação feita em **React + TypeScript + TailwindCSS** que permite buscar usuários do GitHub e visualizar informações como nome, foto de perfil e bio, com base em um layout proposto no Figma.

Projeto desenvolvido como parte de desafio técnico para um processo seletivo.

Acesse aqui o projeto em funcionamento: [LINK](https://busca-perfil-github-elane-alencars-projects.vercel.app/)

## 🎯 Funcionalidades

- 🔎 Busca de usuários pelo nome de usuário do GitHub
- 👤 Exibição de nome, avatar e bio do perfil
- ❌ Mensagem de erro personalizada caso o perfil não seja encontrado
- 🎨 Layout estilizado com TailwindCSS conforme protótipo do Figma
- ⏳ Indicação de carregamento durante a requisição


## 📸 Preview

![Preview do projeto](src/assets/github_prewiew.png)



## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- API pública do [GitHub](https://api.github.com/users/{username})

## 🛠️ Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   ```

2. Acesse o diretório:
  ```bash
  cd seu-repo
  ```

3. Instale as dependências:
  ```bash
  npm install
  ```

4. Rode o projeto:
  ```bash
  npm run dev
  ```

## 💡 Observação

A API pública do GitHub possui limite de requisições não autenticadas. 
Se estiver recebendo erro 403, aguarde um pouco e tente novamente.

## 👩‍💻 Desenvolvido por 

Elane Alencar [Linkedin](https://www.linkedin.com/in/elanealencar/)