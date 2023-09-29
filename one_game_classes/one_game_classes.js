class hero{
  constructor(name, age, job){
    this.name = name
    this.age = age
    this.job = job
  }

  attack(){
    let attackType = ''

    if (this.job == 'Mage') {
      attackType = 'Spell'
    } else if (this.job == 'Warrior') {
      attackType = 'Sword'
    } else if (this.job == 'Monk') {
      attackType = 'Martial arts'
    } else if (this.job == 'Ninja') {
      attackType = 'Shuriken'
    } else {
      attackType = 'Invalid'
    }

    console.log(`The ${this.job} attacked using ${attackType}.`)
  }
}

let msg = new hero('Gandalf', 100, 'Monk')
msg.attack()