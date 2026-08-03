import { esp32C3Mini1Footprint } from "./footprints"

const esp32PinLabels = {
  pin1: "GND1",
  pin2: "GND2",
  pin3: "VDD3P3",
  pin4: "NC4",
  pin5: "GPIO2",
  pin6: "GPIO3",
  pin7: "NC7",
  pin8: "EN",
  pin9: "NC9",
  pin10: "NC10",
  pin11: "GND11",
  pin12: "GPIO0",
  pin13: "GPIO1",
  pin14: "GND14",
  pin15: "NC15",
  pin16: "GPIO10",
  pin17: "NC17",
  pin18: "GPIO4",
  pin19: "GPIO5",
  pin20: "GPIO6",
  pin21: "GPIO7",
  pin22: "GPIO8",
  pin23: "GPIO9",
  pin24: "NC24",
  pin25: "NC25",
  pin26: "USB_DM",
  pin27: "USB_DP",
  pin28: "NC28",
  pin29: "NC29",
  pin30: "GPIO20_RXD0",
  pin31: "GPIO21_TXD0",
  pin32: "NC32",
  pin33: "NC33",
  pin34: "NC34",
  pin35: "NC35",
  pin36: "GND36",
  pin37: "GND37",
  pin38: "GND38",
  pin39: "GND39",
  pin40: "GND40",
  pin41: "GND41",
  pin42: "GND42",
  pin43: "GND43",
  pin44: "GND44",
  pin45: "GND45",
  pin46: "GND46",
  pin47: "GND47",
  pin48: "GND48",
  pin49: "GND49",
  pin50: "GND50",
  pin51: "GND51",
  pin52: "GND52",
  pin53: "GND53",
} as const

const groundPins = [
  "GND1",
  "GND2",
  "GND11",
  "GND14",
  "GND36",
  "GND37",
  "GND38",
  "GND39",
  "GND40",
  "GND41",
  "GND42",
  "GND43",
  "GND44",
  "GND45",
  "GND46",
  "GND47",
  "GND48",
  "GND49",
  "GND50",
  "GND51",
  "GND52",
  "GND53",
] as const

/** ESP32-C3 native-USB core, boot/reset network, user LED, and GPIO header. */
export function Esp32Core() {
  return (
    <>
      <chip
        name="U1"
        manufacturerPartNumber="ESP32-C3-MINI-1-N4X"
        footprint={esp32C3Mini1Footprint}
        pinLabels={esp32PinLabels}
        internallyConnectedPins={[groundPins as unknown as string[]]}
        noConnect={[
          "NC4",
          "NC7",
          "NC9",
          "NC10",
          "NC15",
          "NC17",
          "NC24",
          "NC25",
          "NC28",
          "NC29",
          "NC32",
          "NC33",
          "NC34",
          "NC35",
        ]}
        connections={{
          GND1: "net.GND",
          GND2: "net.GND",
          GND11: "net.GND",
          GND14: "net.GND",
          GND36: "net.GND",
          GND37: "net.GND",
          GND38: "net.GND",
          GND39: "net.GND",
          GND40: "net.GND",
          GND41: "net.GND",
          GND42: "net.GND",
          GND43: "net.GND",
          GND44: "net.GND",
          GND45: "net.GND",
          GND46: "net.GND",
          GND47: "net.GND",
          GND48: "net.GND",
          GND49: "net.GND",
          GND50: "net.GND",
          GND51: "net.GND",
          GND52: "net.GND",
          GND53: "net.GND",
          VDD3P3: "net.V3V3",
          EN: "net.ESP_EN",
          GPIO0: "net.GPIO0",
          GPIO1: "net.GPIO1",
          GPIO2: "net.GPIO2",
          GPIO3: "net.GPIO3",
          GPIO4: "net.GPIO4_SDA",
          GPIO5: "net.GPIO5_SCL",
          GPIO6: "net.GPIO6",
          GPIO7: "net.GPIO7",
          GPIO8: "net.GPIO8",
          GPIO9: "net.GPIO9_BOOT",
          GPIO10: "net.GPIO10_LED",
          USB_DM: "net.USB_DM_MCU",
          USB_DP: "net.USB_DP_MCU",
          GPIO20_RXD0: "net.GPIO20_RXD0",
          GPIO21_TXD0: "net.GPIO21_TXD0",
        }}
        pcbX={10.3}
        pcbY={1.5}
        schX={8}
        schY={8}
        schWidth={7}
        schHeight={14}
      />

      <capacitor
        name="C11"
        manufacturerPartNumber="TMK107BBJ106MA-T"
        capacitance="10uF"
        maxVoltageRating="25V"
        footprint="0603"
        connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
        pcbX={3.3}
        pcbY={4.7}
        pcbRotation={90}
        schX={2}
        schY={13}
      />
      <capacitor
        name="C12"
        manufacturerPartNumber="GRM188R71H104KA93D"
        capacitance="100nF"
        maxVoltageRating="50V"
        footprint="0603"
        connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
        pcbX={3.3}
        pcbY={3.1}
        pcbRotation={90}
        schX={0}
        schY={13}
      />

      <resistor
        name="R15"
        manufacturerPartNumber="RC0603FR-0710KL"
        resistance="10k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.V3V3", pin2: "net.ESP_EN" }}
        pcbX={2.8}
        pcbY={1.4}
        schX={0}
        schY={9}
      />
      <capacitor
        name="C13"
        manufacturerPartNumber="GRM188R71A105KA61D"
        capacitance="1uF"
        maxVoltageRating="10V"
        footprint="0603"
        connections={{ pin1: "net.ESP_EN", pin2: "net.GND" }}
        pcbX={2.8}
        pcbY={-0.1}
        schX={0}
        schY={7}
      />
      <pushbutton
        name="SW1"
        manufacturerPartNumber="B3U-1000P"
        footprint="kicad:Button_Switch_SMD/SW_SPST_B3U-1000P"
        pinLabels={{ pin1: "EN", pin2: "GND" }}
        connections={{ EN: "net.ESP_EN", GND: "net.GND" }}
        pcbX={-9.5}
        pcbY={5.4}
        schX={-4}
        schY={7}
      />

      <resistor
        name="R16"
        manufacturerPartNumber="RC0603FR-0710KL"
        resistance="10k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.V3V3", pin2: "net.GPIO2" }}
        pcbX={4.1}
        pcbY={-1.6}
        pcbRotation={90}
        schX={0}
        schY={5}
      />
      <resistor
        name="R17"
        manufacturerPartNumber="RC0603FR-0710KL"
        resistance="10k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.V3V3", pin2: "net.GPIO9_BOOT" }}
        pcbX={5.7}
        pcbY={-3.4}
        schX={0}
        schY={3}
      />
      <pushbutton
        name="SW2"
        manufacturerPartNumber="B3U-1000P"
        footprint="kicad:Button_Switch_SMD/SW_SPST_B3U-1000P"
        pinLabels={{ pin1: "BOOT", pin2: "GND" }}
        connections={{ BOOT: "net.GPIO9_BOOT", GND: "net.GND" }}
        pcbX={-9.5}
        pcbY={1.8}
        schX={-4}
        schY={3}
      />

      <resistor
        name="R18"
        manufacturerPartNumber="RC0603FR-072K2L"
        resistance="2.2k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.GPIO10_LED", pin2: "net.USER_LED_A" }}
        pcbX={-6.8}
        pcbY={-2.8}
        schX={15}
        schY={12}
      />
      <led
        name="D2"
        manufacturerPartNumber="LTST-C191KGKT"
        color="green"
        footprint="kicad:LED_SMD/LED_0603_1608Metric"
        connections={{ anode: "net.USER_LED_A", cathode: "net.GND" }}
        pcbX={-5.2}
        pcbY={-2.8}
        schX={18}
        schY={12}
      />

      <pinheader
        name="J3"
        manufacturerPartNumber="TSW-107-07-G-D"
        pinCount={14}
        footprint="kicad:Connector_PinHeader_2.54mm/PinHeader_2x07_P2.54mm_Vertical"
        pinLabels={{
          pin1: "VDD_3V3",
          pin2: "GND_A",
          pin3: "GPIO0",
          pin4: "GPIO1",
          pin5: "GPIO2_STRAP",
          pin6: "GPIO3",
          pin7: "GPIO4_SDA",
          pin8: "GPIO5_SCL",
          pin9: "GPIO6",
          pin10: "GPIO7",
          pin11: "GPIO8_STRAP",
          pin12: "GPIO20_RXD0",
          pin13: "GPIO21_TXD0",
          pin14: "GND_B",
        }}
        connections={{
          VDD_3V3: "net.V3V3",
          GND_A: "net.GND",
          GPIO0: "net.GPIO0",
          GPIO1: "net.GPIO1",
          GPIO2_STRAP: "net.GPIO2",
          GPIO3: "net.GPIO3",
          GPIO4_SDA: "net.GPIO4_SDA",
          GPIO5_SCL: "net.GPIO5_SCL",
          GPIO6: "net.GPIO6",
          GPIO7: "net.GPIO7",
          GPIO8_STRAP: "net.GPIO8",
          GPIO20_RXD0: "net.GPIO20_RXD0",
          GPIO21_TXD0: "net.GPIO21_TXD0",
          GND_B: "net.GND",
        }}
        showSilkscreenPinLabels
        pcbX={-18.3}
        pcbY={2.2}
        pcbRotation={90}
        schX={-12}
        schY={9}
      />

      <testpoint
        name="TP1"
        footprintVariant="pad"
        padDiameter="1mm"
        connections={{ pin1: "net.VBUS" }}
        pcbX={20.8}
        pcbY={-5.8}
        schX={-19}
        schY={12}
      />
      <testpoint
        name="TP2"
        footprintVariant="pad"
        padDiameter="1mm"
        connections={{ pin1: "net.VBAT" }}
        pcbX={-14.4}
        pcbY={-9.7}
        schX={-17}
        schY={-1}
      />
      <testpoint
        name="TP3"
        footprintVariant="pad"
        padDiameter="1mm"
        connections={{ pin1: "net.VSYS" }}
        pcbX={-3.1}
        pcbY={-10.6}
        schX={-10}
        schY={-8}
      />
      <testpoint
        name="TP4"
        footprintVariant="pad"
        padDiameter="1mm"
        connections={{ pin1: "net.V3V3" }}
        pcbX={0}
        pcbY={-10.7}
        schX={19}
        schY={2}
      />
      <testpoint
        name="TP5"
        footprintVariant="pad"
        padDiameter="1mm"
        connections={{ pin1: "net.GND" }}
        pcbX={-21}
        pcbY={10.7}
        schX={19}
        schY={0}
      />
      <testpoint
        name="TP6"
        footprintVariant="pad"
        padDiameter="1mm"
        connections={{ pin1: "net.ESP_EN" }}
        pcbX={-7.1}
        pcbY={5.5}
        schX={-2}
        schY={9}
      />
      <testpoint
        name="TP7"
        footprintVariant="pad"
        padDiameter="1mm"
        connections={{ pin1: "net.GPIO9_BOOT" }}
        pcbX={-7.1}
        pcbY={1.9}
        schX={-2}
        schY={3}
      />
      <testpoint
        name="TP8"
        footprintVariant="pad"
        padDiameter="1mm"
        connections={{ pin1: "net.REG_PG" }}
        pcbX={4.4}
        pcbY={-4.1}
        schX={16}
        schY={-7}
      />
      <testpoint
        name="TP9"
        footprintVariant="pad"
        padDiameter="1mm"
        connections={{ pin1: "net.BQ_PGOOD" }}
        pcbX={7}
        pcbY={-10.8}
        schX={-1}
        schY={-7}
      />
    </>
  )
}
