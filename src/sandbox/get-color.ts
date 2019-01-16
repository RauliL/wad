export const getColor = ( palette: Uint8Array, i: number ) => {
  const p = i * 3

  const r = palette[ p ]
  const g = palette[ p + 1 ]
  const b = palette[ p + 2 ]

  const color = `rgb( ${ r }, ${ g }, ${ b } )`

  return color
}
