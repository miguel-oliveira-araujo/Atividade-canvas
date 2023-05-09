
# Atividade-Canvas
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Primeiramente iniciamos o trabalho criando cada arquivo diferente e botando em suas respectivas pastas (Js,Html e Css). A 
partir disso codificamos o html:Botamos o codigo base do Head;linkamos o Javascript e o Css com o html e criamos um id para oCanvas.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E após isso, começamos a fazer os comando do Canvas no Javascript. Para desenhar diversas formas. E abaixo explicarei cada uma 
delas.



 ## Retangulo
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iniciamos fazendo um quadrado. Utilizando uma "const canva" e utilizando o comando de getElementById. Pelo Id do Canvas que 
criamos no Html. Essa parte do codigo foi suficiente para todos desenhos, e nao precisamos ficar colocando o mesmo codigo 
varias vezes pra cada desenho (Tinhamos feito isso antes). Criamos outra const para "ctx" (contexto), e depois utilizamos o  getContext (Como parametro sendo o "2d". Por serem desenhos 2d). O comando getContext funciona para retornar um contexto de  desenho no Canvas, ou null quando um tipo de contexto indentificado nao e suportado.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agora explicando os comandos para formar o quadrado:<br> 
- ctx.fillStyle = ""                                        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O fillStyle serve para preenchermos o desenho com uma cor (Se ele for um desenho fechado). E entre as "", botamos a cor que queremos. Continuamente, o ctx e usado no inicio do comando para o contexto.<br>
- ctx.fillRect()<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este comando servimos para desenhar de fato o retangulo. Dentro dos () estará os pixeis de onde o retangulo iniciara e terminara. E depois, o Canva vai preencher sozinho o retangulo.
 
  ## Circulo e Arco
  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Codificamos depois, o circulo:<br>
  - ctx.beginPath()<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aqui vamos definir quando comecou o caminho do desenho, ou quando vamos reinicia-lo. Caso voce nao tenha nada antes do desenho, ele ficara igual com ou sem o beginPath. Mas, nesse caso temos,entao temos que utiliza-lo<br>
- ctx.arc()
> 📝 **Observacao:** Vale lembrar que o "ctx" nos comandos acima e abaixo, sao somente exemplos. Ja que eles sao variaveis e por isso podem ser qualquer outra coisa. <br>
 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seguindo a mesma logica do retangulo, aqui iniciamos o desenho do circulo. Dentro dos parenteses colocamos os pixeis onde o circulo estara, como no retangulo. Alem disso, temos que colocar o raio do circulo, o grau dele 
  
  
