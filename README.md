
# Atividade-Canvas
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Primeiramente iniciamos o trabalho criando cada arquivo diferente e botando em suas respectivas pastas (Js,Html e Css). A 
partir disso codificamos o html:Botamos o codígo base do Head;linkamos o Javascript e o Css com o html e criamos um id para o Canvas.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E após isso, começamos a fazer os comando do Canvas no Javascript. Para desenhar diversas formas. E abaixo explicarei cada uma 
delas.



 ## Retângulo
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iniciamos fazendo um quadrado. Utilizando uma "const canva" e utilizando o comando de getElementById. Pelo Id do Canvas que 
criamos no Html. Essa parte do codígo foi suficiente para todos desenhos, e não precisamos ficar colocando o mesmo codígo 
varias vezes pra cada desenho (Tinhamos feito isso antes). Criamos outra const para "ctx" (contexto), e depois utilizamos o  getContext (Como parametro sendo o "2d". Por serem desenhos 2d). O comando getContext funciona para retornar um contexto de  desenho no Canvas, ou null quando um tipo de contexto indentificado nao e suportado.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agora explicando os comandos para formar o retângulo:<br> 
- ctx.fillStyle = ""                                        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O fillStyle serve para preenchermos o desenho com uma cor (Se ele for um desenho fechado). E entre as "", botamos a cor que queremos. Continuamente, o ctx e usado no inicio do comando para o contexto.<br>
- ctx.fillRect()<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este comando serve para desenhar de fato o retangulo. Dentro dos () estará os pixeis de onde o retângulo inicia e termina. E depois, o Canva vai preencher sozinho o retângulo.
 
  ## Circulo e Curva
  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Codificamos depois, o circulo:<br>
 - ctx.beginPath()<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aqui vamos definir quando comecou o caminho do desenho, ou quando vamos reinicia-lo. Caso voce não tenha nada antes do desenho, ele ficará igual com ou sem o beginPath. Mas, nesse caso temos,então temos que utiliza-lo<br>
- ctx.arc()
> 📝 **Observacão:** Vale lembrar que o "ctx" nos comandos acima e abaixo, sao somente exemplos. Ja que eles sao variaveis e por isso podem ser qualquer outra coisa. <br>
 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seguindo a mesma logíca do retângulo, aqui iniciamos o desenho do circulo. Dentro dos parenteses colocamos os pixeis onde o circulo estara, como no retângulo. Além disso, temos que colocar o raio do circulo e o grau dele (em radianos). Tambem definimos no final, se o angulo vai iniciar em sentido horario ou anti-horario. Isso não faz diferença se for um circulo completo, mas fará pro desenho do arco que vamos fazer.<br>
 - ctx.fill() <br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este comando e utilizado para preencher o circulo com a cor que definimos no fillStyle.<br>
 - ctx.stroke() <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Isto e basicamente a mesma coisa do ctx.fill. Mas, o stroke serve para desenhos que não estão fechados e o fill para desenhos fechados(Como o circulo).<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para fazer uma curva utilizamos os mesmos comandos do circulo. Somente alteramos o valor de grau e o valor de posicao (dentro do ctx.arc). E alteramos o ctx.fill() pelo ctx.stroke.
  
  ## Linha <br>
 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Com este comando do Canvas e possivel desenhar várias coisas. E é um dos mais faceis de utilizar.<br>
 - ctx.moveTo()<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Isto serve para movermos o ponto inicial de um novo sub-caminho, para outras coordenadas(Botando os valores nos parenteses).<br>
 - ctx.lineTo()<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Com este comando, definimos o inicio e o fim da linha (Em pixeis). Nos valores dentro do parenteses.
 
 ## Imagem <br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aqui nos criamos uma pasta para imagens (img), e em seguida pegamos uma imagem da internet. Depois criamos uma var  (imagem). Aqui e necessario utilizar tambem uma function()<br>
   - new Image() <br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aqui definimos que criamos um novo elemento do tipo img.<br>
   - imagem.onLoad=function() <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nesta secao do codígo estamos dizendo que a var imagem vai carregar pela function.<br>
  - ctx.drawImage() <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Isso decide como o canvas vai colocar a imagem no site. Os valores dentro do parenteses são:Onde esta a imagem que estamos definindo;Largura e Altura.<br>
 - imagem.src = "pasta/imagem" <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metódo para o codígo achar onde esta sua imagem.
      
      ## Print do Site
      
      ![image](https://github.com/miguel-oliveira-araujo/Atividade-canvas/assets/127852225/a547a055-dc20-4c58-bdf5-696096078ad9)

  
  
 
 
 
 
 
 
 
  
