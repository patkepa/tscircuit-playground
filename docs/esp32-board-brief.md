# ESP32 board design brief

This document is the handoff into the actual board design. Resolve the decisions below before committing to a schematic, footprint, or board outline; different ESP32 families have materially different pins, power requirements, USB capabilities, and RF layout rules.

## Product decisions

| Decision | Current state | Examples or notes |
| --- | --- | --- |
| Board purpose | TBD | General dev board, sensor node, controller, or a product-specific board |
| ESP32 target | TBD | Exact module or bare SoC, including package and flash/PSRAM variant |
| Power input | TBD | USB-C 5 V, battery, external regulated input, or a combination |
| Peak current budget | TBD | Include radio transmit peaks and all external loads |
| Programming/debug | TBD | Native USB, USB-to-UART bridge, JTAG header, or pogo pads |
| Required interfaces | TBD | GPIO, I2C, SPI, UART, ADC, PWM, CAN/TWAI, or other buses |
| On-board peripherals | TBD | LEDs, buttons, sensors, storage, display, relays, or motor drivers |
| Connectors | TBD | Header pitch, locking connectors, USB connector, test points |
| Board constraints | TBD | Maximum dimensions, mounting holes, layer count, enclosure |
| Assembly target | TBD | Hand assembly, JLCPCB assembly, another CM, or mixed assembly |

## Design gates

- [ ] Save the exact module/SoC datasheet and hardware-design guidelines.
- [ ] Create a pin-allocation table, including strapping pins and boot states.
- [ ] Define the complete power tree, protection, decoupling, and current budget.
- [ ] Define reset, boot-mode, programming, and recovery behavior.
- [ ] Define RF antenna placement and the mandatory copper/component keep-out.
- [ ] Choose orderable manufacturer part numbers and verified footprints.
- [ ] Review the schematic against the vendor reference design.
- [ ] Review placement, routing, return paths, USB impedance needs, and RF rules.
- [ ] Pass type checking and all available tscircuit design checks.
- [ ] Inspect generated schematic, PCB, 3D, BOM, and fabrication artifacts.
- [ ] Perform an independent pre-fabrication review.

## Recommended first implementation slice

After the brief is complete, start with the smallest independently reviewable board core:

1. ESP32 module and antenna keep-out.
2. 3.3 V regulator, bulk capacitance, and local decoupling.
3. Enable/reset and boot-mode controls.
4. Programming interface.
5. One power LED and clearly labeled test points.

Only then add application-specific connectors and peripherals.
