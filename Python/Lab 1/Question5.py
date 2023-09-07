name = input("Enter Your Name (Required): ")
if name.strip() and name.isalpha():
  email = input("Enter Your Email: ")
  print(f"Your Name Is {name} And Your Email Is {email}")
else:
  print("Invalid Name!!")