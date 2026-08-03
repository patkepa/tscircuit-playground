const usbConnectorPinLabels = {
  pin1: ["GND_A1", "A1"],
  pin2: ["VBUS_A4", "A4"],
  pin3: ["CC1", "A5"],
  pin4: ["USB_DP_A6", "A6"],
  pin5: ["USB_DM_A7", "A7"],
  pin6: ["SBU1", "A8"],
  pin7: ["VBUS_A9", "A9"],
  pin8: ["GND_A12", "A12"],
  pin9: ["GND_B1", "B1"],
  pin10: ["VBUS_B4", "B4"],
  pin11: ["CC2", "B5"],
  pin12: ["USB_DP_B6", "B6"],
  pin13: ["USB_DM_B7", "B7"],
  pin14: ["SBU2", "B8"],
  pin15: ["VBUS_B9", "B9"],
  pin16: ["GND_B12", "B12"],
  pin17: ["SHIELD", "S1"],
} as const

/**
 * USB 2.0 Type-C sink and native ESP32-C3 programming interface.
 *
 * J1 is a power sink (UFP): each CC pin has its own 5.1 kohm Rd. U4 clamps
 * both data lines and VBUS at the connector; R3/R4 are the Espressif-reserved
 * USB series resistors placed on the MCU side of the clamp.
 */
export function UsbCInterface() {
  return (
    <>
      <connector
        name="J1"
        standard="usb_c"
        manufacturerPartNumber="USB4105-GF-A"
        footprint="kicad:Connector_USB/USB_C_Receptacle_GCT_USB4105-xx-A_16P_TopMnt_Horizontal"
        pinLabels={usbConnectorPinLabels}
        internallyConnectedPins={[
          ["GND_A1", "GND_A12", "GND_B1", "GND_B12", "SHIELD"],
          ["VBUS_A4", "VBUS_A9", "VBUS_B4", "VBUS_B9"],
          ["USB_DP_A6", "USB_DP_B6"],
          ["USB_DM_A7", "USB_DM_B7"],
        ]}
        noConnect={["SBU1", "SBU2"]}
        connections={{
          GND_A1: "net.GND",
          GND_A12: "net.GND",
          GND_B1: "net.GND",
          GND_B12: "net.GND",
          SHIELD: "net.GND",
          VBUS_A4: "net.VBUS",
          VBUS_A9: "net.VBUS",
          VBUS_B4: "net.VBUS",
          VBUS_B9: "net.VBUS",
          CC1: "net.USB_CC1",
          CC2: "net.USB_CC2",
          USB_DP_A6: "net.USB_DP_CONN",
          USB_DP_B6: "net.USB_DP_CONN",
          USB_DM_A7: "net.USB_DM_CONN",
          USB_DM_B7: "net.USB_DM_CONN",
        }}
        pcbX={18.2}
        pcbY={-9.2}
        pcbRotation={90}
        schX={-18}
        schY={8}
      />

      <resistor
        name="R1"
        manufacturerPartNumber="RC0603FR-075K1L"
        resistance="5.1k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.USB_CC1", pin2: "net.GND" }}
        pcbX={15.2}
        pcbY={-10.7}
        pcbRotation={90}
        schX={-13}
        schY={10}
      />
      <resistor
        name="R2"
        manufacturerPartNumber="RC0603FR-075K1L"
        resistance="5.1k"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.USB_CC2", pin2: "net.GND" }}
        pcbX={16.7}
        pcbY={-10.7}
        pcbRotation={90}
        schX={-13}
        schY={8}
      />

      <chip
        name="U4"
        manufacturerPartNumber="USBLC6-2SC6"
        footprint="kicad:Package_TO_SOT_SMD/SOT-23-6"
        pinLabels={{
          pin1: "DP_IO1",
          pin2: "GND",
          pin3: "DM_IO2",
          pin4: "DM_IO2_RETURN",
          pin5: "VBUS",
          pin6: "DP_IO1_RETURN",
        }}
        internallyConnectedPins={[
          ["DP_IO1", "DP_IO1_RETURN"],
          ["DM_IO2", "DM_IO2_RETURN"],
        ]}
        connections={{
          DP_IO1: "net.USB_DP_CONN",
          DP_IO1_RETURN: "net.USB_DP_CONN",
          DM_IO2: "net.USB_DM_CONN",
          DM_IO2_RETURN: "net.USB_DM_CONN",
          VBUS: "net.VBUS",
          GND: "net.GND",
        }}
        pcbX={15.3}
        pcbY={-7.4}
        pcbRotation={90}
        schX={-9}
        schY={8}
      />
      <capacitor
        name="C1"
        manufacturerPartNumber="GRM188R71H104KA93D"
        capacitance="100nF"
        maxVoltageRating="50V"
        footprint="0603"
        connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
        pcbX={13.5}
        pcbY={-8.3}
        schX={-5}
        schY={10}
      />

      <resistor
        name="R3"
        manufacturerPartNumber="RC0603FR-0722RL"
        resistance="22"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.USB_DP_CONN", pin2: "net.USB_DP_MCU" }}
        pcbX={16.1}
        pcbY={-3.6}
        pcbRotation={90}
        schX={-4}
        schY={8}
      />
      <resistor
        name="R4"
        manufacturerPartNumber="RC0603FR-0722RL"
        resistance="22"
        tolerance="1%"
        footprint="0603"
        connections={{ pin1: "net.USB_DM_CONN", pin2: "net.USB_DM_MCU" }}
        pcbX={17.7}
        pcbY={-3.6}
        pcbRotation={90}
        schX={-4}
        schY={6}
      />
    </>
  )
}
