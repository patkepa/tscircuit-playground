import type { FootprintSoupElements } from "@tscircuit/props"

type CustomPad = FootprintSoupElements

/**
 * Espressif's recommended land pattern for ESP32-C3-MINI-1.
 *
 * Coordinates are transcribed from Espressif's official module DXF and the
 * recommended land-pattern drawing in datasheet v2.2. Pins 49 and 50–53 are
 * the centre ground array and corner ground pads respectively.
 */
const makeEsp32C3Mini1Footprint = (): CustomPad[] => {
  const pads: CustomPad[] = []

  for (let pin = 1; pin <= 11; pin += 1) {
    pads.push({
      type: "pcb_smtpad",
      x: -5.9,
      y: 4 - (pin - 1) * 0.8,
      width: 0.8,
      height: 0.4,
      shape: "rect",
      portHints: [`pin${pin}`],
    })
  }

  for (let pin = 12; pin <= 24; pin += 1) {
    pads.push({
      type: "pcb_smtpad",
      x: -4.8 + (pin - 12) * 0.8,
      y: -4.9,
      width: 0.4,
      height: 0.8,
      shape: "rect",
      portHints: [`pin${pin}`],
    })
  }

  for (let pin = 25; pin <= 35; pin += 1) {
    pads.push({
      type: "pcb_smtpad",
      x: 5.9,
      y: -4 + (pin - 25) * 0.8,
      width: 0.8,
      height: 0.4,
      shape: "rect",
      portHints: [`pin${pin}`],
    })
  }

  for (let pin = 36; pin <= 48; pin += 1) {
    pads.push({
      type: "pcb_smtpad",
      x: 4.8 - (pin - 36) * 0.8,
      y: 4.9,
      width: 0.4,
      height: 0.8,
      shape: "rect",
      portHints: [`pin${pin}`],
    })
  }

  for (const x of [-1.975, 0, 1.975]) {
    for (const y of [-1.975, 0, 1.975]) {
      pads.push({
        type: "pcb_smtpad",
        x,
        y,
        width: 1.45,
        height: 1.45,
        shape: "rect",
        portHints: ["pin49"],
      })
    }
  }

  for (const [pin, x, y] of [
    [50, 5.95, 4.95],
    [51, 5.95, -4.95],
    [52, -5.95, -4.95],
    [53, -5.95, 4.95],
  ] as const) {
    pads.push({
      type: "pcb_smtpad",
      x,
      y,
      width: 0.7,
      height: 0.7,
      shape: "rect",
      portHints: [`pin${pin}`],
    })
  }

  return pads
}

export const esp32C3Mini1Footprint = makeEsp32C3Mini1Footprint()

/**
 * TI RNM0015A/B VQFN-HR recommended land pattern for TPS63070.
 * Pins 7/8 and 12/13 are combined power pads in the package drawing.
 */
export const tps63070RnmFootprint: CustomPad[] = [
  ...[1, 2, 3, 4].map((pin, index): CustomPad => ({
    type: "pcb_smtpad",
    x: -1.1,
    y: 0.75 - index * 0.5,
    width: 0.6,
    height: 0.25,
    shape: "rect",
    portHints: [`pin${pin}`],
  })),
  {
    type: "pcb_smtpad",
    x: -0.725,
    y: -1.15,
    width: 0.25,
    height: 0.6,
    shape: "rect",
    portHints: ["pin5"],
  },
  {
    type: "pcb_smtpad",
    x: -0.225,
    y: -1.15,
    width: 0.25,
    height: 0.6,
    shape: "rect",
    portHints: ["pin6"],
  },
  {
    type: "pcb_smtpad",
    x: 0.775,
    y: -1.15,
    width: 0.75,
    height: 0.6,
    shape: "rect",
    portHints: ["pin7", "pin8"],
  },
  ...[9, 10, 11].map((pin, index): CustomPad => ({
    type: "pcb_smtpad",
    x: 0.725,
    y: -0.5 + index * 0.5,
    width: 1.35,
    height: 0.25,
    shape: "rect",
    portHints: [`pin${pin}`],
  })),
  {
    type: "pcb_smtpad",
    x: 0.775,
    y: 1.15,
    width: 0.75,
    height: 0.6,
    shape: "rect",
    portHints: ["pin12", "pin13"],
  },
  {
    type: "pcb_smtpad",
    x: -0.225,
    y: 1.15,
    width: 0.25,
    height: 0.6,
    shape: "rect",
    portHints: ["pin14"],
  },
  {
    type: "pcb_smtpad",
    x: -0.725,
    y: 1.15,
    width: 0.25,
    height: 0.6,
    shape: "rect",
    portHints: ["pin15"],
  },
]
