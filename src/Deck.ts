import { computed } from 'mobx'

import { Card } from './Card'
import { Settings } from './Settings'
import { Suit } from './Suit'

export class Deck {
  private constructor() {
    const cards: Array<Card> = []
    for (const suit of [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades]) {
      if (Suit.hasOwnProperty(suit)) {
        for (let value = Settings.instance.maxCardValue; value >= 1; value--) {
          const nextCard = value === Settings.instance.maxCardValue
            ? undefined
            : cards[cards.length - 1]

          cards.push(new Card(suit, value, nextCard))
        }
      }
    }

    this.cards = cards
  }

  public static readonly instance: Deck = new Deck()

  public readonly cards: ReadonlyArray<Card>

  @computed
  public get theFourAces(): Array<Card> {
    const theFourAces = this.cards.filter(card => card.value === 1)
    return theFourAces
  }
}