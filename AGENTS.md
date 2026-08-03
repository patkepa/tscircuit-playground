# AGENTS.md

## Scope

This repository contains a tscircuit electronics design written in TypeScript/TSX. The current `src/board.circuit.tsx` is only a workspace smoke test. The intended next phase is a custom ESP32 board.

## Working rules

- Read `README.md` and `docs/esp32-board-brief.md` before changing the circuit.
- Treat component datasheets, vendor hardware-design guidelines, reference schematics, and the selected manufacturer's rules as authoritative.
- Never invent pin mappings, package dimensions, footprints, electrical limits, antenna keep-outs, or supplier part numbers. Record the source for every non-obvious hardware choice.
- Do not silently choose an ESP32 family or module. The exact orderable variant must be explicit before implementing the ESP32 core.
- Keep `src/board.circuit.tsx` as the top-level assembly. Move reusable subsystems into focused files under `src/components/` as the circuit grows.
- Use standard reference designators: `U` for ICs/modules, `R` resistors, `C` capacitors, `L` inductors, `D` diodes/LEDs, `J` connectors, `SW` switches, and `TP` test points.
- Give every component a stable reference designator and every important net a descriptive name. Keep power-net naming consistent (`VBUS`, `+3V3`, `GND`, and so on).
- Specify PCB placement deliberately in millimetres. Preserve RF keep-outs and place decoupling and protection parts according to their electrical purpose.
- Prefer small, reviewable changes organized by subsystem. Do not mix speculative feature additions with footprint or power-integrity corrections.
- Generated files belong in `dist/` and must not be committed unless a later task explicitly changes that policy.

## Required validation

Run these from the repository root:

```sh
npm run typecheck
npm run check
```

For layout-affecting changes, also run `npm run build`, inspect the generated schematic and PCB SVGs, and use `npm run dev` when visual inspection is needed.

A passing CLI check is necessary but not sufficient for fabrication. Before claiming fabrication readiness, verify the design against the exact component revisions, validate footprints and pin numbering, review design-rule output, check BOM availability, and obtain an independent schematic/layout review.

## Dependency policy

- Use the locally installed CLI through npm scripts; do not require a global tscircuit installation.
- Keep tscircuit and TypeScript versions compatible. Upgrade intentionally, review release behavior, and rerun all validation after an upgrade.
- Add registry components only when their provenance, pinout, footprint, and licensing have been reviewed.
