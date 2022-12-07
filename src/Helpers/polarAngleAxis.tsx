import { Text } from 'recharts'

/**
 * @description Renders a custom polar angle axis for the performance chart
 * @param {any} props - props of the component
 * @param {any} props.payload - payload of the component
 * @param {number} props.x - x position of the axis
 * @param {number} props.y - y position of the axis
 * @param {number} props.cx - cx position of the axis
 * @param {number} props.cy - cy position of the axis
 * @param {any} props.rest - rest of the props
 * @returns The custom polar angle axis
 */
export function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }: any) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 12}
      x={x + (x - cx) / 30}
    >
      {payload.value}
    </Text>
  )
}
