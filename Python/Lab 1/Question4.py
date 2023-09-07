import math
radius = float(input("Enter The Redius Of A Circle: "))
area = round(math.pi * radius ** 2, 2)
circumference = round(2 * math.pi * radius, 2)
print(f"The Area of Circle Is: {area} And The Circumference Is: {circumference}")