
# Arquitetura do Sistema

Este documento descreve a organização e estrutura dos principais módulos do sistema.

## ui/ - Componentes do Design System

O diretório `@ui` contém todos os componentes reutilizáveis da interface. Estes componentes são agnósticos ao contexto e podem ser utilizados em qualquer parte da aplicação.

Principais características:
- Testes unitários (Testar os componentes)
- Atoms:
    - Button
    - Input
    - Text
    - Icons (Trash, Pencil, User, Apps, Home)
    - Select
- Molecules:
    - Card
    - Navbar
    - Sidebar
    - Form
    - Modal
- Organisms:
    - CardList
- Templates:
    - ClientTemplate


## @client/ - Lógica da Tela do Cliente

O diretório `@client` contém toda a lógica específica da tela do cliente.

Principais características:
- Lógica de negócio do cliente
- Testes unitários (Testar as páginas e a renderização delas)
- Arquitetura MVVM (Model-View-ViewModel) 

## @host/ - Aplicação Principal

O diretório `@host` é responsável por orquestrar todos os módulos e prover a estrutura principal da aplicação.

Principais características:
- Testes de integração/end-to-end (Testar a integração entre os módulos)
- Configuração da aplicação
- Configuração de API's (Aqui iremos configurar as APIs que serão utilizadas na aplicação)
- Providers globais
- Rotas e navegação
- Gerenciamento de estado global
- Inicialização da aplicação

## Fluxo de Dados


@ui/* (Componentes) → @client/* (Lógica) → @host/* (Orquestração)


## Como Utilizar

***Tendo em mente que:***
1. Para componentes visuais reutilizáveis, utilize o módulo `@ui`
2. Para lógica específica do cliente, utilize o módulo `@client`
3. Para configurações e estrutura principal, utilize o módulo `@host`
---
Basta executar o comando `docker compose up -d` para iniciar o container.

## Informações Adicionais

- Os componentes do `@ui` são stateless
- A regra de negócio é implementada no `@client` de maneira abstrata, usando contratos (interfaces)
- O `@host` orquestra a aplicação
