function calculaPontos(time){
  var pontos = (time.vitórias * 3) + time.empates
  return pontos 
}

var times = []

exibirTimes(times)

function exibirTimes(times){
  var html = ""
  for(var i=0; i < times.length; i++){
    html += "<tr><td>" + times[i].nome + "</td>"
    html += "<td>" + times[i].vitórias + "</td>"
    html += "<td>" + times[i].empates + "</td>"
    html += "<td>" + times[i].derrotas + "</td>"
    html += "<td>" + times[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Adicionar vitória</button> <button onClick='adicionarEmpate(" + i + ")'>Adicionar empate</button> <button onClick='adicionarDerrota(" + i + ")'>Adicionar derrota</button></td></tr>"
  }
  var tabelaTimes = document.getElementById("tabelaTimes")
  tabelaTimes.innerHTML = html  
} 

function adicionarVitoria(i){
  var time = times[i]
  time.vitórias++
  time.pontos = calculaPontos(time)
  exibirTimes(times)
}

function adicionarEmpate(i){
  var time = times[i]
  time.empates++
  time.pontos = calculaPontos(time)
  exibirTimes(times)
}

function adicionarDerrota(i){
  var time = times[i]
  time.derrotas++
  exibirTimes(times)
}

function adicionarTime(){
  var entrada = document.querySelector('#time').value
  var novoTime = {
  nome: entrada,
  vitórias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  }
  times.push(novoTime)
  exibirTimes(times)
  document.querySelector('#time').value = ""
}
