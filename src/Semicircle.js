// @flow

import * as L from "leaflet"

import { withLeaflet } from './context'
import Path from './Path'
import type { LatLng, MapLayerProps, PathOptions } from './types'

require('leaflet-semicircle');

type LeafletElement = LeafletSemicircle
type Props = {
  center: LatLng,
  radius: number,
  startAngle: number,
  stopAngle: number,
} & MapLayerProps &
  PathOptions &
  Object

class Semicircle extends Path<LeafletElement, Props> {
  createLeafletElement(props: Props): LeafletElement {
    const { center, radius, startAngle, stopAngle, ...options } = props
    return new L.semiCircle(center, radius, startAngle, stopAngle, this.getOptions(options))
  }

  updateLeafletElement(fromProps: Props, toProps: Props) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center)
    }
    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius)
    }
  }
}

export default withLeaflet(Semicircle)
