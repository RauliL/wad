export const zoomSvg = ( svg: SVGSVGElement ) =>
  svg.onwheel = e => {
    const { width: clientWidth, height: clientHeight } = svg.getBoundingClientRect()
    let { x, y, width, height } = svg.viewBox.baseVal
    let { layerX, layerY, deltaY } = e

    // need to transform layerX, layerY to map coords
    const scaleX = width / clientWidth
    const scaleY = height / clientHeight

    layerX *= scaleX
    layerY *= scaleY

    layerX += x
    layerY += y

    const amount = 1 + ( deltaY / 100 )

    x -= layerX
    y -= layerY

    x *= amount
    y *= amount
    width *= amount
    height *= amount

    x += layerX
    y += layerY

    Object.assign( svg.viewBox.baseVal, { x, y, width, height } )
  }

export const panSvg = ( svg: SVGSVGElement ) => {
  let lastPosition = { x: 0, y: 0 }
  let isDown: boolean

  const pointFromEvent = e => {
    let x = 0
    let y = 0

    if ( e[ 'targetTouches' ] ) {
      x = e.targetTouches[ 0 ].layerX
      y = e.targetTouches[ 0 ].layerY
    } else {
      x = e.layerX
      y = e.layerY
    }

    return { x, y }
  }

  const onDown = e => {
    lastPosition = pointFromEvent( e )
    isDown = true
  }

  const onUp = () => {
    isDown = false
  }

  const onMove = e => {
    if ( !isDown ) return

    e.preventDefault()

    const { width } = svg.viewBox.baseVal
    const { width: clientWidth } = svg.getBoundingClientRect()
    const ratio = width / clientWidth

    const position = pointFromEvent( e )

    svg.viewBox.baseVal.x -= ( position.x - lastPosition.x ) * ratio
    svg.viewBox.baseVal.y -= ( position.y - lastPosition.y ) * ratio

    lastPosition = position
  }

  if ( 'PointerEvent' in window ) {
    svg.onpointerdown = onDown
    svg.onpointerup = onUp
    svg.onpointermove = onMove
  } else {
    svg.onmousedown = onDown
    svg.onmouseup = onUp
    svg.onmousemove = onMove

    svg.ontouchstart = onDown
    svg.ontouchend = onUp
    svg.ontouchmove = onMove
  }
}
