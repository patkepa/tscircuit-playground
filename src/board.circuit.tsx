import { BatteryPower } from "./components/battery-power"
import { Esp32Core } from "./components/esp32-core"
import { UsbCInterface } from "./components/usb-c"

/**
 * 45 x 25 mm battery-powered ESP32-C3 board.
 *
 * U1 is deliberately placed against the top edge. The keepout covers the
 * module's PCB-antenna section on every copper layer; no traces, pours, vias,
 * or components may enter that region.
 */
export default function Esp32BatteryBoard() {
  return (
    <board
      title="ESP32-C3 USB-C LiPo Board"
      width="45mm"
      height="25mm"
      layers={4}
      thickness="1.6mm"
      material="fr4"
      solderMaskColor="green"
      autorouter={{ preset: "auto_local", local: true, traceClearance: "0.2mm" }}
      autorouterEffortLevel="2x"
      defaultTraceWidth="0.2mm"
      schTraceAutoLabelEnabled
      schMaxTraceDistance="3mm"
    >
      <net name="GND" isGroundNet nominalTraceWidth="0.3mm" />
      <net name="V3V3" isPowerNet nominalTraceWidth="0.5mm" />
      <net name="VBUS" isPowerNet nominalTraceWidth="0.5mm" />
      <net name="VBAT" isPowerNet nominalTraceWidth="0.5mm" />
      <net name="VSYS" isPowerNet nominalTraceWidth="0.5mm" />

      <net name="USB_CC1" />
      <net name="USB_CC2" />
      <net name="USB_DP_CONN" nominalTraceWidth="0.2mm" />
      <net name="USB_DM_CONN" nominalTraceWidth="0.2mm" />
      <net name="USB_DP_MCU" nominalTraceWidth="0.2mm" />
      <net name="USB_DM_MCU" nominalTraceWidth="0.2mm" />

      <net name="BQ_TS" />
      <net name="BQ_PGOOD" />
      <net name="BQ_CHG" />
      <net name="BQ_ILIM" />
      <net name="BQ_TMR" />
      <net name="BQ_ITERM" />
      <net name="BQ_ISET" />

      <net name="REG_EN" />
      <net name="REG_PG" />
      <net name="REG_VAUX" />
      <net name="REG_FB" />
      <net name="REG_L1" nominalTraceWidth="0.5mm" />
      <net name="REG_L2" nominalTraceWidth="0.5mm" />

      <net name="ESP_EN" />
      <net name="GPIO0" />
      <net name="GPIO1" />
      <net name="GPIO2" />
      <net name="GPIO3" />
      <net name="GPIO4_SDA" />
      <net name="GPIO5_SCL" />
      <net name="GPIO6" />
      <net name="GPIO7" />
      <net name="GPIO8" />
      <net name="GPIO9_BOOT" />
      <net name="GPIO10_LED" />
      <net name="GPIO20_RXD0" />
      <net name="GPIO21_TXD0" />
      <net name="USER_LED_A" />

      <UsbCInterface />
      <BatteryPower />
      <Esp32Core />

      <keepout
        shape="rect"
        pcbX={10.3}
        pcbY={9.45}
        width="13.2mm"
        height="6.1mm"
        layers={["top", "inner1", "inner2", "bottom"]}
      />
      <pcbnotetext
        text="ESP32 ANTENNA - NO COPPER / PARTS"
        pcbX={10.3}
        pcbY={9.4}
        fontSize="0.55mm"
        anchorAlignment="center"
        color="#ffffff"
      />

      <copperpour
        name="GND_PLANE_INNER1"
        layer="inner1"
        connectsTo="net.GND"
        clearance="0.2mm"
        boardEdgeMargin="0.25mm"
      />
      <copperpour
        name="POWER_PLANE_INNER2"
        layer="inner2"
        connectsTo="net.V3V3"
        clearance="0.2mm"
        boardEdgeMargin="0.25mm"
      />
      <copperpour
        name="GND_POUR_TOP"
        layer="top"
        connectsTo="net.GND"
        clearance="0.2mm"
        boardEdgeMargin="0.25mm"
      />
      <copperpour
        name="GND_POUR_BOTTOM"
        layer="bottom"
        connectsTo="net.GND"
        clearance="0.2mm"
        boardEdgeMargin="0.25mm"
      />
    </board>
  )
}
