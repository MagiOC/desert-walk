import { computed } from 'mobx'

import { Card } from './Card'
import { Cell } from './Cell'
import { ICardCellPair } from './ICardCellPair'
import { Point } from './Point'
import { Rectangle } from './Rectangle'
import { Settings } from './Settings'

// TODO: Find a better name for this class. CardCellPair is much better. It's probably possible to replace 'left' with 'gridState' and make left a computed value, and thus remove the need for the interface.
export class DraggableCard implements ICardCellPair {
  constructor(
    public card: Card,
    public cell: Cell,
    private left: DraggableCard | undefined
  ) { }

  @computed
  public get boundary(): Rectangle {
    const boundary = DraggableCard.getBoundary(this.position)
    return boundary
  }

  @computed
  public get correctlyPlaced(): boolean {
    if (this.card === undefined) {
      return false
    }

    if (this.cell.cellToTheLeft === undefined) {
      const aceInFirstColumn = this.card.value === 1
      return aceInFirstColumn
    }

    if (this.left === undefined) {
      return false
    }

    const followsCardToTheLeft = this.left.correctlyPlaced && this.left.card.next === this.card
    return followsCardToTheLeft
  }

  @computed
  public get position(): Point {
    return this.cell.position
  }

  // TODO: Move to the Card class.
  public static getBoundary(position: Point): Rectangle {
    const boundary = new Rectangle(
      position.x,
      position.x + Settings.instance.cardSize.width,
      position.y,
      position.y + Settings.instance.cardSize.height
    )

    return boundary
  }
}