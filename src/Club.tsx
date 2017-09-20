import * as React from 'react'
import { Component } from 'react'
import { Svg } from 'expo'

import { Settings } from './Settings'

interface Props {
  /** Height and width. */
  size: number
}

export class Club extends Component<Props, {}> {
  public render() {
    return (
      <Svg height={this.props.size} viewBox="0 0 60 60" width={this.props.size}>
        <Svg.G>
          <Svg.Path
            d="M38.719,60 C36.316,56.842 34.943,54.645 33.913,51.831 C32.883,49.153 32.059,43.799 32.059,39.748 C32.059,37.071 32.128,36.659 32.677,36.659 C33.021,36.659 33.295,37.002 33.432,37.62 C33.982,40.503 34.119,40.847 34.943,42.426 C37.414,47.231 41.533,49.977 46.407,49.977 C49.84,49.977 53.478,48.398 55.881,45.858 C58.284,43.318 59.519,39.886 59.519,35.904 C59.519,28.833 53.684,23.41 46.064,23.41 C42.494,23.41 40.297,24.233 37.826,26.568 C37.14,27.254 36.865,27.391 36.453,27.391 C36.11,27.391 35.767,27.117 35.767,26.773 C35.767,26.43 36.041,26.018 36.659,25.538 C37.414,24.92 38.238,24.096 38.993,23.135 C41.67,20.046 42.906,16.819 42.906,13.249 C42.906,5.973 37.002,-0 29.863,-0 C25.606,-0 21.281,2.403 19.016,5.904 C17.78,7.895 17.025,10.503 17.025,13.043 C17.025,16.751 18.81,21.076 21.487,23.684 C24.165,26.362 24.165,26.362 24.165,26.705 C24.165,27.117 23.822,27.46 23.41,27.46 C23.135,27.46 22.86,27.323 22.174,26.773 C19.016,24.233 16.751,23.41 13.387,23.41 C5.904,23.41 0.481,28.833 0.481,36.453 C0.481,43.73 6.247,49.84 13.112,49.84 C16.613,49.84 19.565,48.741 21.831,46.545 C24.096,44.416 25.675,41.808 26.156,39.268 C26.636,36.728 26.636,36.659 27.185,36.659 C27.666,36.659 27.872,37.14 27.872,38.169 C27.872,42.838 27.391,47.094 26.499,50.046 C25.469,53.341 24.439,55.4 21.213,60 C23.89,59.588 26.224,59.451 29.657,59.451 C32.952,59.451 35.629,59.588 38.719,60 z"
            fill={Settings.instance.colors.card.clubs}
          />
        </Svg.G>
      </Svg>
    )
  }
}
