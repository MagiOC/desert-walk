import * as React from 'react'
import { Component } from 'react'
import { Svg } from 'expo'

import { Settings } from './Settings'

interface Props {
  /** Height and width. */
  size: number
}

export class Heart extends Component<Props, {}> {
  public render() {
    return (
      <Svg
        height={this.props.size}
        viewBox="0 0 60 60"
        width={this.props.size}
      >
        <Svg.G>
          <Svg.Path
            d="M30,60 C31.646,58.286 31.646,58.286 38.914,50.606 C45.634,43.543 50.023,37.851 53.451,31.749 C56.4,26.537 57.634,22.217 57.634,17.074 C57.634,10.491 55.44,5.486 51.257,2.606 C48.857,0.96 45.977,0 43.097,0 C40.629,0 37.749,0.686 36.103,1.577 C33.566,3.017 31.577,6.103 30.96,9.463 C30.617,11.52 30.411,11.931 30,11.931 C29.589,11.931 29.52,11.726 29.04,9.463 C28.491,6.377 26.709,3.497 24.377,1.851 C22.594,0.617 20.4,0 17.451,0 C12.309,0 8.537,1.851 5.794,5.691 C3.669,8.709 2.366,12.96 2.366,16.937 C2.366,23.657 5.726,31.611 12.446,40.457 C16.971,46.491 18.206,47.863 30,60 z"
            fill={Settings.instance.colors.card.hearts}
          />
        </Svg.G>
      </Svg>
    )
  }
}