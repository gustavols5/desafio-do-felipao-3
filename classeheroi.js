
class heroi {
  
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    if (this.tipo === mago){
      this.tipoAtaque = "magia"   
    } else if(this.tipo === guerreiro){
      this.tipoAtaque = "espada"
    }else if(this.tipo === monge){
      this.tipoAtaque = "artes marciais"
    }else if(this.tipo === ninja){
      this.tipoAtaque = "shuriken"
    }
  }
  ataque(){
    console.log(`O ${this.tipo} atacou usando ${this.tipoAtaque}`)
  }

}

let heroi1 = new heroi("Ricardo",25,"mago")
heroi1.ataque();

let heroi2 = new heroi ("Pedro",15,"ninja")
heroi2.ataque();
 
