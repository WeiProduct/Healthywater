#\!/usr/bin/env python3
"""
Simple QR code placeholder generator
Run this after installing qrcode: pip install qrcode[pil]
"""

try:
    import qrcode
    from PIL import Image, ImageDraw, ImageFont
    
    # Create placeholder QR code
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data('https://apps.apple.com/app/healthy-water')
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="black", back_color="white")
    img = img.resize((200, 200))
    img.save('/Users/weifu/Desktop/健康喝水/website/assets/qr-code.png')
    
    print("QR code placeholder created successfully\!")
    
except ImportError:
    print("qrcode library not installed. Install with: pip install qrcode[pil]")
    
    # Create a simple placeholder image instead
    from PIL import Image, ImageDraw
    
    img = Image.new('RGB', (200, 200), 'white')
    draw = ImageDraw.Draw(img)
    
    # Draw a simple grid pattern
    for i in range(0, 200, 20):
        draw.line([(0, i), (200, i)], fill='lightgray', width=1)
        draw.line([(i, 0), (i, 200)], fill='lightgray', width=1)
    
    # Draw some black squares to simulate QR code
    import random
    for i in range(0, 200, 20):
        for j in range(0, 200, 20):
            if random.random() > 0.5:
                draw.rectangle([i, j, i+18, j+18], fill='black')
    
    img.save('/Users/weifu/Desktop/健康喝水/website/assets/qr-code.png')
    print("Simple QR placeholder created\!")

except Exception as e:
    print(f"Error creating QR code: {e}")
EOF < /dev/null