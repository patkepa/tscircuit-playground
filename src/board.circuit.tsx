/**
 * Small smoke-test circuit for the workspace.
 *
 * Replace this incrementally with the ESP32 board after its requirements and
 * exact module have been selected. This is intentionally not a fabrication-ready
 * design.
 */
export default function StarterBoard() {
  return (
    <board width="30mm" height="18mm">
      <resistor
        name="R1"
        resistance="1k"
        footprint="0603"
        schX={-3}
        pcbX={-3}
      />
      <capacitor
        name="C1"
        capacitance="100nF"
        footprint="0603"
        schX={3}
        pcbX={3}
      />
      <trace name="NET_A" from=".R1 > .pin1" to=".C1 > .pin1" />
      <trace name="NET_B" from=".R1 > .pin2" to=".C1 > .pin2" />
    </board>
  )
}
