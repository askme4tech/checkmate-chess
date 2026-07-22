from PIL import Image
import sys

try:
    img = Image.open('d:\\Checkmatesite\\public\\logo.jpeg').convert('L') # Convert to grayscale
    img_rgba = img.convert('RGBA')
    datas = img_rgba.getdata()

    newData = []
    for item in datas:
        val = item[0]
        # We want the black pieces to remain visible and the white/grey background to become transparent.
        # Since it's a black logo on a white/grey background:
        # The darker the pixel, the more opaque it should be.
        # The lighter the pixel, the more transparent it should be.
        
        # We can increase contrast to remove the grey vignette.
        # Let's say anything brighter than 180 is fully transparent.
        # Anything darker than 100 is fully opaque black.
        if val > 200:
            newData.append((15, 23, 42, 0)) # dark-900 color but transparent
        else:
            # For smooth edges, we map val from 0-200 to alpha 255-0
            alpha = 255 - int((val / 200.0) * 255)
            # Use the site's dark text color instead of pure black
            newData.append((15, 23, 42, alpha)) 

    img_rgba.putdata(newData)
    img_rgba.save('d:\\Checkmatesite\\public\\logo-transparent.png', 'PNG')
    print("Created logo-transparent.png successfully")
except Exception as e:
    print("Error:", e)
