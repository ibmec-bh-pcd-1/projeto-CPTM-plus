# [Grupo 1] Projeto-CPTM-plus

- [Link dos slides](https://docs.google.com/presentation/d/1WhcmPL6o3zCwUjxxyQNF7d44-AmTVTR8ej00qzn1UnQ/edit?usp=sharing)
- [Modelo de registro de Dailies](https://docs.google.com/document/d/1sg9-XnS0XWlmYKIeP0JerL6xg7LS9sgfdZZyv98aP5c/edit?usp=sharing)

## Integrantes

- Vitor Neves: Scrum Master & Desenvolvimento
- Gabriel Borem: Desenvolvimento
- João Pedro Castro: Desenvolvimento
- Tulio Castro: Desenvolvimento

# 1. Nome do Projeto: CPTM+

Um aplicativo de melhoria da experiência do usuário no transporte ferroviário da CPTM.

## 2. Apresentação do Projeto

O projeto CPTM+ visa melhorar a acessibilidade e o design do aplicativo oficial da CPTM, proporcionando uma experiência mais intuitiva e eficiente para os usuários do transporte público. O novo design tem como objetivo facilitar a navegação, tornando mais simples o acesso a informações como horários, itinerários e notificações em tempo real sobre o serviço. Essa melhoria é voltada para todos os usuários do transporte, oferecendo uma interface mais moderna e direcionada.

## 3. Gestão de Código

Este projeto utiliza as seguintes tecnologias e ferramentas:

- **Linguagens:** HTML, CSS e JS
- **Framework:** Bootstrap
- **Versionamento de código:** Git

### Padrão para nomes de branches

- feature/: Usado para novas funcionalidades.
Exemplo: feature/adicionar-login-social

- bugfix/: Usado para correção de bugs.
Exemplo: bugfix/corrigir-botao-de-envio

- hotfix/: Usado para correções urgentes em produção.
Exemplo: hotfix/corrigir-falha-autenticacao

- chore/: Usado para pequenas tarefas ou atualizações técnicas que não afetam o código funcional.
Exemplo: chore/atualizar-documentacao

### Tipos de Commits

- feat: Adição de uma nova funcionalidade.
Exemplo: feat: implementar sistema de login com JWT

- fix: Correção de bugs.
Exemplo: fix: corrigir erro no cálculo de desconto

- docs: Alterações na documentação.
Exemplo: docs: atualizar README com instruções de instalação

- style: Alterações de formatação e estilo (não afetam a lógica).
Exemplo: style: ajustar espaçamento no arquivo CSS

- refactor: Refatoração de código (melhorias sem adicionar novas funcionalidades).
Exemplo: refactor: otimizar função de busca

- test: Adição ou correção de testes.
Exemplo: test: adicionar testes unitários para componente Header

- chore: Atualizações gerais que não alteram código funcional (ex: atualizações de dependências).
Exemplo: chore: atualizar pacotes NPM

### 4. Organização de Pastas e Arquivos

- **/src**: Contém o código fonte do projeto.
  - **/content**: Arquivos HTML.
  - **/css**: Folhas de estilo CSS.
  - **/js**: Arquivos JS.
  - **/img**: Imagens.
- **/docs**: Documentação do projeto.


### 5. Requisitos Funcionais

1. **Cadastro de Usuários:** Permite o registro de novos usuários (admin e funcionários).
2. **Gestão de Pedidos:** Garçons podem adicionar, editar e excluir pedidos.
3. **Relatórios:** O sistema gera relatórios de pedidos por dia e por período.
4. **Integração com Cozinha:** Notificações em tempo real para a cozinha quando um pedido é enviado.
5. **Login e Autenticação:** Sistema seguro de login com autenticação JWT.

---

Esse modelo pode ser adaptado para diversos tipos de projetos. A clareza e a organização são essenciais para facilitar o entendimento e a colaboração de novos desenvolvedores.
