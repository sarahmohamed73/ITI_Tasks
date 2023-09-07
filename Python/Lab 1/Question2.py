binaryNumber = input("Enter A Number In Binary Form: ")
if binaryNumber.count("0") + binaryNumber.count("1") == len(binaryNumber) :
  decimalNumber = int(binaryNumber, 2)
  print(f"Decimal Form: {decimalNumber}")
else :
  print("Invalid Binary!!")