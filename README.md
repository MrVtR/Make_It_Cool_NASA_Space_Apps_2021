# Make_It_Cool_NASA_Space_Apps_2021

## Conceito do projeto
Esse projeto consiste em realizar o desafio da Maratona NASA Space Apps 2021, o tema da nossa equipe é [Waring: Things Are Heating Up](https://2021.spaceappschallenge.org/challenges/statements/warning-things-are-heating-up/teams/make-it-cool/project), usamos ReactJS para realizar o projeto, juntamente com o auxilio de bibliotecas que serão listadas mais abaixo <br/>
O site criado conta com Cinco abas principais planejadas:
1. **Home** - Página inicial do projeto, onde é apresentado quais são as nossas preocupações com relação aos desastres naturais que ocorrem ao redor do mundo, juntamente com as soluções que propusemos, com destaque para o Modelo Preditivo sobre Aumentos de Temperaturas, o jogo desenvolvido por nós e uma amostra de dados históricos via Mapa
2. **About Us** - Página feita para mostrar como a equipe se conheceu, qual os nossos objetivos como time e quais projetos fizemos dentro da solução do desafio da NASA
3. **Map** - Página com a função de exibir os resultados das soluções Preditivas nossas, que mostram predicções futuras para a cidade de São Paulo - Brazil com relação a aumentos de temperatura, além disso, também foi desenvolvido uma amostra de dados históricos(1990-2021) da base NASA EONET, contribuindo para mostrar ao usuário quais os impactos que sua região teve durante o passar dos tempos, dando destaque para a amostra dos resultados, utilizando das cores Verde, Amarelo e Vermelho para amostrar os resultados em formato de Ondas de Calor, por fim, informamos o usuário sobre os principais problemas que trabalhamos dentro do desafio, junto com suas origens e consequências, como o alto índice de queimadas e estresse por calor
4. **Learn** - Nesta página apresentamos Mitigações que o usuário pode seguir de forma individual e também informamos qual a responsabilidade que o governo deve ter para que contribua para reduzir os índices de desastres. Além disso, também informamos quais as origens e consequências de outros desastres naturais que não foram tratados explicitamente dentro de nossa análise de dados, como os Oceanos, Poluição do Ar e Danos em agriculturas
5. **Game** - Para esta página que fizemos, o intuito dela é apresentar o jogo desenvolvido pela equipe dentro da Engine GDevelop5, este jogo tem o objtivo de conscientizar as pessoas sobre temas como: Poluição, Voto Consciente, Desperdício de Alimentos, Mundo da Moda e Certificados Verdes, o usuário pode jogar de forma simples e rápida dentro do próprio navegador. Além disso, explicamos de forma aprofundada os temas citados acima em seções mais abaixo da execução do jogo
6. **To Inspire** - Esta é uma seção para que o usuário sinta-se acolhido por nosso desafio e seja incentivado a colaborar também do jeito que conseguir, pois toda ajuda importa quando tratamos do nosso Planeta, dessa forma, apresentamos algumas sugestões do cotidiano para que o leitor possa colocar em prática, além de poder mencionar nossa equipe em situações ecológicas futuramente dentro de suas redes sociais

## Pré-requisitos e recursos utilizados
Para o projeto ser realizado, foi utilizado as seguintes dependências para ReactJS:
1. [ReactJS: 0.17.1](https://github.com/facebook/react/releases)
2. [React-router-dom: 5.2.0](https://reactrouter.com/web/guides/quick-start)
3. [Node Sass: 4.14.1](https://www.npmjs.com/package/node-sass/v/4.14.1)
4. [Axios: 0.21.1](https://github.com/axios/axios)
6. [react-elastic-carousel](https://www.npmjs.com/package/react-elastic-carousel)
7. [mapboxgl](https://www.mapbox.com)
8. [https://github.com/mapbox/mapbox-gl-geocoder](https://github.com/jonathandion/react-tilt)
  
## Passo a passo
1. A equipe composta de 6 pessoas se reuniu durante os dias 02/10/2021 e 03/10/2021, durante 48 horas coletamos dados da NASA para alimentar nossa aplicação
2. Criei o projeto e mapeei as rotas através do React-router-dom, além de fazer a configuração dos requests da API com o Axios
3. Criei os componentes comuns que poderiam ser utilizados no projeto todo
4. Fiz pesquisas sobre as bibliotecas que utilizam de geolocalização para que fossem incluídas dentro do nosso site
5. Durante o meio da competição, finalizamos um jogo para conscientizar as pessoas de suas ações, incluindo ele dentro da aplicação web
6. Por fim, fizemos análises preditivas sobre o aumento de temperaturas dentro do nosso país, para que possa ser possível alertar a população e sugerir práticas que diminuam danos em seus sistemas fisiológicos

## Instalação
Para instalar as dependências do projeto localmente, utilize a instrução abaixo:
1. Após baixar o projeto, digite no terminal ```yarn install``` e espere pela instalação das dependências, após isso, siga para a etapa de [Execução](#Execução)

## Execução
Para executar o programa é necessário instalar as dependências utilizadas, que estão no package.json e após isso executar o projeto,para estar operações, utilize os comandos abaixo:
1. Digite no terminal ```yarn start``` para rodar o projeto em modo desenvolvimento.


## Autor da aplicação Web em ReactJS
* Vítor Ribeiro ([MrVtR](https://github.com/MrVtR))
