import IAnimal from './animal.interface';
import Food from './food/food';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal {
  public weight: number;
  public name: string;

  public constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }

  public eat<T extends Food>(a: T): void | string {
    if (this.weight > 0) this.weight += 10;
  }

  public sleep(): void {
    this.weight > 10 ? (this.weight -= 10) : (this.weight = 0);
  }
}
