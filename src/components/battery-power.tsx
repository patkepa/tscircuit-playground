import { tps63070RnmFootprint } from "./footprints"

/**
 * Protected 1-cell LiPo input, USB charger/power-path, and 3.3 V buck-boost.
 *
 * The battery pack must contain its own cell protection. R6 programs about
 * 297 mA charge current (BQ24074 KISET / 3 kohm), while R7 programs a 500 mA
 * USB input ceiling. SW3 removes the regulator load without interrupting the
 * charger or its power-path output.
 */
export function BatteryPower() {
  return (
    <>
      <connector
        name="J2"
        manufacturerPartNumber="B2B-PH-SM4-TB(LF)(SN)"
        footprint="kicad:Connector_JST/JST_PH_B2B-PH-SM4-TB_1x02-1MP_P2.00mm_Vertical"
        pinLabels={{ pin1: "BAT_POS", pin2: "BAT_NEG" }}
        connections={{ BAT_POS: "net.VBAT", BAT_NEG: "net.GND" }}
        pcbX={-18.2}
        pcbY={-9.3}
        schX={-18}
        schY={-4}
      />

      <chip
        name="U2"
        manufacturerPartNumber="BQ24074RGTR"
        footprint="kicad:Package_DFN_QFN/VQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm_ThermalVias"
        pinLabels={{
          pin1: "TS",
          pin2: "BAT1",
          pin3: "BAT2",
          pin4: "CE",
          pin5: "EN2",
          pin6: "EN1",
          pin7: "PGOOD",
          pin8: "VSS",
          pin9: "CHG",
          pin10: "OUT1",
          pin11: "OUT2",
          pin12: "ILIM",
          pin13: "IN",
          pin14: "TMR",
          pin15: "ITERM",
          pin16: "ISET",
          pin17: "THERMAL_PAD",
        }}
        internallyConnectedPins={[
          ["BAT1", "BAT2"],
          ["OUT1", "OUT2"],
          ["VSS", "THERMAL_PAD"],
        ]}
        connections={{
          TS: "net.BQ_TS",
          BAT1: "net.VBAT",
          BAT2: "net.VBAT",
          CE: "net.GND",
          EN2: "net.GND",
          EN1: "net.VBUS",
          PGOOD: "net.BQ_PGOOD",
          VSS: "net.GND",
          THERMAL_PAD: "net.GND",
          CHG: "net.BQ_CHG",
          OUT1: "net.VSYS",
          OUT2: "net.VSYS",
          ILIM: "net.BQ_ILIM",
          IN: "net.VBUS",
          TMR: "net.BQ_TMR",
          ITERM: "net.BQ_ITERM",
          ISET: "net.BQ_ISET",
        }}
        pcbX={10.7}
        pcbY={-7.5}
        schX={-7}
        schY={-3}
      />

      <capacitor
        name="C2"
        manufacturerPartNumber="GRM21BC71E106ME11L"
        capacitance="10uF"
        maxVoltageRating="25V"
        footprint="0805"
        connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
        pcbX={12.8}
        pcbY={-6.2}
        schX={-13}
        schY={0}
      />
      <capacitor
        name="C3"
        manufacturerPartNumber="GRM21BC71E106ME11L"
        capacitance="10uF"
        maxVoltageRating="25V"
        footprint="0805"
        connections={{ pin1: "net.VBAT", pin2: "net.GND" }}
        pcbX={8.4}
        pcbY={-8.7}
        schX={-12}
        schY={-3}
      />
      <capacitor
        name="C4"
        manufacturerPartNumber="GRM21BC71E106ME11L"
        capacitance="10uF"
        maxVoltageRating="25V"
        footprint="0805"
        connections={{ pin1: "net.VSYS", pin2: "net.GND" }}
        pcbX={8.3}
        pcbY={-6.1}
        schX={-12}
        schY={-6}
      />

      <resistor
        name="R5"
        manufacturerPartNumber="RC0603FR-0710KL"
        resistance="10k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.BQ_TS", pin2: "net.GND" }}
        pcbX={9.1}
        pcbY={-4.9}
        schX={-3}
        schY={1}
      />
      <resistor
        name="R6"
        manufacturerPartNumber="RC0603FR-073KL"
        resistance="3k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.BQ_ISET", pin2: "net.GND" }}
        pcbX={10.6}
        pcbY={-4.9}
        schX={-1}
        schY={0}
      />
      <resistor
        name="R7"
        manufacturerPartNumber="RC0603FR-073K09L"
        resistance="3.09k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.BQ_ILIM", pin2: "net.GND" }}
        pcbX={12.1}
        pcbY={-4.9}
        schX={1}
        schY={-1}
      />
      <resistor
        name="R8"
        manufacturerPartNumber="RC0603FR-073KL"
        resistance="3k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.BQ_ITERM", pin2: "net.GND" }}
        pcbX={12.8}
        pcbY={-7.8}
        pcbRotation={90}
        schX={1}
        schY={-3}
      />
      <resistor
        name="R9"
        manufacturerPartNumber="RC0603FR-0746K4L"
        resistance="46.4k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.BQ_TMR", pin2: "net.GND" }}
        pcbX={12.8}
        pcbY={-9.5}
        pcbRotation={90}
        schX={1}
        schY={-5}
      />
      <resistor
        name="R10"
        manufacturerPartNumber="RC0603FR-07100KL"
        resistance="100k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.VSYS", pin2: "net.BQ_PGOOD" }}
        pcbX={8.6}
        pcbY={-10.6}
        schX={-3}
        schY={-7}
      />

      <resistor
        name="R11"
        manufacturerPartNumber="RC0603FR-072K2L"
        resistance="2.2k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.VSYS", pin2: ".D1 > .anode" }}
        pcbX={10.5}
        pcbY={-10.5}
        schX={-7}
        schY={-8}
      />
      <led
        name="D1"
        manufacturerPartNumber="LTST-C191KGKT"
        color="green"
        footprint="kicad:LED_SMD/LED_0603_1608Metric"
        connections={{ anode: ".R11 > .pin2", cathode: "net.BQ_CHG" }}
        pcbX={12.1}
        pcbY={-10.5}
        schX={-3}
        schY={-8}
      />

      <chip
        name="SW3"
        manufacturerPartNumber="JS102011SAQN"
        footprint="kicad:Button_Switch_SMD/SW_SPDT_CK_JS102011SAQN"
        pinLabels={{ pin1: "OFF", pin2: "COMMON", pin3: "ON" }}
        connections={{
          OFF: "net.GND",
          COMMON: "net.REG_EN",
          ON: "net.VSYS",
        }}
        pcbX={-7.3}
        pcbY={-10.1}
        pcbRotation={180}
        schX={6}
        schY={-9}
      />

      <chip
        name="U3"
        manufacturerPartNumber="TPS630702RNMR"
        footprint={tps63070RnmFootprint}
        pinLabels={{
          pin1: "PS_SYNC",
          pin2: "PG",
          pin3: "VAUX",
          pin4: "GND",
          pin5: "FB",
          pin6: "FB2",
          pin7: "VOUT1",
          pin8: "VOUT2",
          pin9: "L2",
          pin10: "PGND",
          pin11: "L1",
          pin12: "VIN1",
          pin13: "VIN2",
          pin14: "EN",
          pin15: "VSEL",
        }}
        internallyConnectedPins={[
          ["VOUT1", "VOUT2"],
          ["VIN1", "VIN2"],
          ["GND", "PGND"],
        ]}
        noConnect={["FB2"]}
        connections={{
          PS_SYNC: "net.VSYS",
          PG: "net.REG_PG",
          VAUX: "net.REG_VAUX",
          GND: "net.GND",
          PGND: "net.GND",
          FB: "net.REG_FB",
          VOUT1: "net.V3V3",
          VOUT2: "net.V3V3",
          L2: "net.REG_L2",
          L1: "net.REG_L1",
          VIN1: "net.VSYS",
          VIN2: "net.VSYS",
          EN: "net.REG_EN",
          VSEL: "net.GND",
        }}
        pcbX={1.1}
        pcbY={-7}
        schX={8}
        schY={-3}
      />
      <inductor
        name="L1"
        manufacturerPartNumber="XFL4020-152ME"
        inductance="1.5uH"
        footprint="kicad:Inductor_SMD/L_Coilcraft_XxL4020"
        connections={{ pin1: "net.REG_L1", pin2: "net.REG_L2" }}
        pcbX={4.6}
        pcbY={-7}
        pcbRotation={90}
        schX={14}
        schY={-3}
      />

      <capacitor
        name="C5"
        manufacturerPartNumber="GRM21BC71E106ME11L"
        capacitance="10uF"
        maxVoltageRating="25V"
        footprint="0805"
        connections={{ pin1: "net.VSYS", pin2: "net.GND" }}
        pcbX={-1.1}
        pcbY={-8.2}
        schX={4}
        schY={0}
      />
      <capacitor
        name="C6"
        manufacturerPartNumber="GRM21BC71E106ME11L"
        capacitance="10uF"
        maxVoltageRating="25V"
        footprint="0805"
        connections={{ pin1: "net.VSYS", pin2: "net.GND" }}
        pcbX={-1.1}
        pcbY={-6.2}
        schX={4}
        schY={-2}
      />
      <capacitor
        name="C7"
        manufacturerPartNumber="TMK105B7104MV-FR"
        capacitance="100nF"
        maxVoltageRating="25V"
        footprint="0402"
        connections={{ pin1: "net.REG_VAUX", pin2: "net.GND" }}
        pcbX={0.1}
        pcbY={-5.2}
        schX={4}
        schY={-4}
      />
      <capacitor
        name="C8"
        manufacturerPartNumber="GRM21BC81C226ME44L"
        capacitance="22uF"
        maxVoltageRating="16V"
        footprint="0805"
        connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
        pcbX={6.4}
        pcbY={-9.3}
        schX={16}
        schY={0}
      />
      <capacitor
        name="C9"
        manufacturerPartNumber="GRM21BC81C226ME44L"
        capacitance="22uF"
        maxVoltageRating="16V"
        footprint="0805"
        connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
        pcbX={4.4}
        pcbY={-10.2}
        schX={18}
        schY={-2}
      />
      <capacitor
        name="C10"
        manufacturerPartNumber="GRM21BC81C226ME44L"
        capacitance="22uF"
        maxVoltageRating="16V"
        footprint="0805"
        connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
        pcbX={2.4}
        pcbY={-10.2}
        schX={18}
        schY={-4}
      />

      <resistor
        name="R12"
        manufacturerPartNumber="RC0603FR-07470KL"
        resistance="470k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.V3V3", pin2: "net.REG_FB" }}
        pcbX={-0.7}
        pcbY={-4.2}
        schX={12}
        schY={1}
      />
      <resistor
        name="R13"
        manufacturerPartNumber="RC0603FR-07150KL"
        resistance="150k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.REG_FB", pin2: "net.GND" }}
        pcbX={1.1}
        pcbY={-4.2}
        schX={12}
        schY={-1}
      />
      <resistor
        name="R14"
        manufacturerPartNumber="RC0603FR-07100KL"
        resistance="100k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.V3V3", pin2: "net.REG_PG" }}
        pcbX={2.9}
        pcbY={-4.2}
        schX={12}
        schY={-6}
      />
    </>
  )
}
