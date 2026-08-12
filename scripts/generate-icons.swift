import AppKit

func drawIcon(size: CGFloat, path: String) {
  let image = NSImage(size: NSSize(width: size, height: size))
  image.lockFocus()
  NSColor(calibratedRed: 20/255, green: 23/255, blue: 21/255, alpha: 1).setFill()
  NSBezierPath(roundedRect: NSRect(x: 0, y: 0, width: size, height: size), xRadius: size * 0.22, yRadius: size * 0.22).fill()

  let lime = NSColor(calibratedRed: 221/255, green: 1, blue: 57/255, alpha: 1)
  lime.setStroke()
  let line = NSBezierPath()
  line.lineWidth = size * 0.084
  line.lineCapStyle = .round
  line.move(to: NSPoint(x: size * 0.19, y: size * 0.43)); line.line(to: NSPoint(x: size * 0.19, y: size * 0.57))
  line.move(to: NSPoint(x: size * 0.27, y: size * 0.35)); line.line(to: NSPoint(x: size * 0.27, y: size * 0.65))
  line.move(to: NSPoint(x: size * 0.73, y: size * 0.35)); line.line(to: NSPoint(x: size * 0.73, y: size * 0.65))
  line.move(to: NSPoint(x: size * 0.81, y: size * 0.43)); line.line(to: NSPoint(x: size * 0.81, y: size * 0.57))
  line.move(to: NSPoint(x: size * 0.27, y: size * 0.5)); line.line(to: NSPoint(x: size * 0.73, y: size * 0.5))
  line.stroke()

  NSColor(calibratedWhite: 0.965, alpha: 1).setFill()
  NSBezierPath(ovalIn: NSRect(x: size * 0.45, y: size * 0.45, width: size * 0.10, height: size * 0.10)).fill()
  image.unlockFocus()
  guard let data = image.tiffRepresentation,
        let png = NSBitmapImageRep(data: data)?.representation(using: .png, properties: [:]) else { fatalError("Could not encode PNG") }
  try! png.write(to: URL(fileURLWithPath: path))
}

drawIcon(size: 192, path: "icons/icon-192.png")
drawIcon(size: 512, path: "icons/icon-512.png")
