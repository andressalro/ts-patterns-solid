import { Card } from "./card";
import { CardDeck } from "./card-deck";

let cardDeck = new CardDeck();
cardDeck.add(new Card("Card 1", 34, 56));
cardDeck.add(new Card("Card 2", 12, 34));

let secondDeck = new CardDeck();
secondDeck.add(new Card("Card 3", 35, 12));
secondDeck.add(new Card("Card 4", 75, 90));

cardDeck.add(secondDeck);
cardDeck.add(new Card("Card 5", 99, 100));

console.log(cardDeck.display());
console.log(secondDeck.display());
