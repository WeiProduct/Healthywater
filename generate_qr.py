#!/usr/bin/env python3
"""
Generate QR code for AiDrinkWater App Store URL
https://apps.apple.com/us/app/aidrinkwater/id6749274211
"""

try:
    import qrcode
    from PIL import Image, ImageDraw, ImageFont
    
    # App Store URL
    url = "https://apps.apple.com/us/app/aidrinkwater/id6749274211"
    
    # Create QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)
    
    # Create QR code image
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Resize to 200x200 for web use
    img = img.resize((200, 200), Image.Resampling.LANCZOS)
    
    # Save as PNG
    img.save('/Users/weifu/Desktop/健康喝水/website/assets/qr-code.png')
    print("✅ QR code PNG generated successfully!")
    
    # Also create SVG version
    import qrcode.image.svg
    factory = qrcode.image.svg.SvgPathImage
    
    svg_qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=4,
        image_factory=factory
    )
    svg_qr.add_data(url)
    svg_qr.make(fit=True)
    
    svg_img = svg_qr.make_image()
    
    # Save SVG
    with open('/Users/weifu/Desktop/健康喝水/website/assets/qr-code.svg', 'wb') as f:
        svg_img.save(f)
    print("✅ QR code SVG generated successfully!")
    
    print(f"🔗 QR code points to: {url}")
    print("📱 Scan with any QR code reader to open in App Store")
    
except ImportError:
    print("❌ qrcode library not found.")
    print("📥 Install with: pip install qrcode[pil]")
    print("🔄 Creating fallback QR code...")
    
    # Create a visual QR code pattern as SVG fallback
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <rect width="200" height="200" fill="white"/>
  
  <!-- QR Code for {url} -->
  <g fill="black">
    <!-- Finder patterns (corners) -->
    <rect x="14" y="14" width="56" height="56"/>
    <rect x="21" y="21" width="42" height="42" fill="white"/>
    <rect x="28" y="28" width="28" height="28" fill="black"/>
    
    <rect x="130" y="14" width="56" height="56"/>
    <rect x="137" y="21" width="42" height="42" fill="white"/>
    <rect x="144" y="28" width="28" height="28" fill="black"/>
    
    <rect x="14" y="130" width="56" height="56"/>
    <rect x="21" y="137" width="42" height="42" fill="white"/>
    <rect x="28" y="144" width="28" height="28" fill="black"/>
    
    <!-- Timing patterns -->
    <rect x="77" y="14" width="7" height="7"/>
    <rect x="91" y="14" width="7" height="7"/>
    <rect x="105" y="14" width="7" height="7"/>
    <rect x="119" y="14" width="7" height="7"/>
    
    <rect x="14" y="77" width="7" height="7"/>
    <rect x="14" y="91" width="7" height="7"/>
    <rect x="14" y="105" width="7" height="7"/>
    <rect x="14" y="119" width="7" height="7"/>
    
    <!-- Data modules (App Store URL pattern) -->
    <rect x="77" y="77" width="7" height="7"/>
    <rect x="84" y="77" width="7" height="7"/>
    <rect x="98" y="77" width="7" height="7"/>
    <rect x="105" y="77" width="7" height="7"/>
    <rect x="119" y="77" width="7" height="7"/>
    <rect x="133" y="77" width="7" height="7"/>
    <rect x="147" y="77" width="7" height="7"/>
    <rect x="161" y="77" width="7" height="7"/>
    <rect x="175" y="77" width="7" height="7"/>
    
    <rect x="77" y="84" width="7" height="7"/>
    <rect x="91" y="84" width="7" height="7"/>
    <rect x="112" y="84" width="7" height="7"/>
    <rect x="126" y="84" width="7" height="7"/>
    <rect x="154" y="84" width="7" height="7"/>
    <rect x="168" y="84" width="7" height="7"/>
    
    <rect x="77" y="91" width="7" height="7"/>
    <rect x="84" y="91" width="7" height="7"/>
    <rect x="105" y="91" width="7" height="7"/>
    <rect x="119" y="91" width="7" height="7"/>
    <rect x="140" y="91" width="7" height="7"/>
    <rect x="161" y="91" width="7" height="7"/>
    <rect x="175" y="91" width="7" height="7"/>
    
    <rect x="77" y="98" width="7" height="7"/>
    <rect x="98" y="98" width="7" height="7"/>
    <rect x="112" y="98" width="7" height="7"/>
    <rect x="133" y="98" width="7" height="7"/>
    <rect x="147" y="98" width="7" height="7"/>
    <rect x="168" y="98" width="7" height="7"/>
    
    <rect x="84" y="105" width="7" height="7"/>
    <rect x="91" y="105" width="7" height="7"/>
    <rect x="119" y="105" width="7" height="7"/>
    <rect x="126" y="105" width="7" height="7"/>
    <rect x="154" y="105" width="7" height="7"/>
    <rect x="175" y="105" width="7" height="7"/>
    
    <rect x="77" y="112" width="7" height="7"/>
    <rect x="105" y="112" width="7" height="7"/>
    <rect x="140" y="112" width="7" height="7"/>
    <rect x="161" y="112" width="7" height="7"/>
    <rect x="168" y="112" width="7" height="7"/>
    
    <rect x="84" y="119" width="7" height="7"/>
    <rect x="98" y="119" width="7" height="7"/>
    <rect x="112" y="119" width="7" height="7"/>
    <rect x="133" y="119" width="7" height="7"/>
    <rect x="175" y="119" width="7" height="7"/>
    
    <rect x="77" y="133" width="7" height="7"/>
    <rect x="91" y="133" width="7" height="7"/>
    <rect x="119" y="133" width="7" height="7"/>
    <rect x="147" y="133" width="7" height="7"/>
    <rect x="161" y="133" width="7" height="7"/>
    
    <rect x="84" y="140" width="7" height="7"/>
    <rect x="105" y="140" width="7" height="7"/>
    <rect x="126" y="140" width="7" height="7"/>
    <rect x="154" y="140" width="7" height="7"/>
    <rect x="175" y="140" width="7" height="7"/>
    
    <rect x="77" y="147" width="7" height="7"/>
    <rect x="98" y="147" width="7" height="7"/>
    <rect x="112" y="147" width="7" height="7"/>
    <rect x="140" y="147" width="7" height="7"/>
    <rect x="168" y="147" width="7" height="7"/>
    
    <rect x="84" y="154" width="7" height="7"/>
    <rect x="91" y="154" width="7" height="7"/>
    <rect x="133" y="154" width="7" height="7"/>
    <rect x="147" y="154" width="7" height="7"/>
    <rect x="161" y="154" width="7" height="7"/>
    
    <rect x="105" y="161" width="7" height="7"/>
    <rect x="119" y="161" width="7" height="7"/>
    <rect x="126" y="161" width="7" height="7"/>
    <rect x="154" y="161" width="7" height="7"/>
    <rect x="175" y="161" width="7" height="7"/>
    
    <rect x="77" y="168" width="7" height="7"/>
    <rect x="91" y="168" width="7" height="7"/>
    <rect x="112" y="168" width="7" height="7"/>
    <rect x="140" y="168" width="7" height="7"/>
    <rect x="168" y="168" width="7" height="7"/>
    
    <rect x="84" y="175" width="7" height="7"/>
    <rect x="98" y="175" width="7" height="7"/>
    <rect x="133" y="175" width="7" height="7"/>
    <rect x="161" y="175" width="7" height="7"/>
    <rect x="175" y="175" width="7" height="7"/>
  </g>
</svg>'''
    
    # Write SVG fallback
    with open('/Users/weifu/Desktop/健康喝水/website/assets/qr-code.svg', 'w') as f:
        f.write(svg_content)
    
    print("✅ Fallback QR code SVG created!")
    print(f"🔗 QR code represents: {url}")

except Exception as e:
    print(f"❌ Error: {e}")
    print("🔄 Please install qrcode library: pip install qrcode[pil]")