def sort_array():
  my_array = []
  for i in range(5):
    element = input(f"Enter Element Number {i+1}: ")
    while True:
      if element.isnumeric():
        element = int(element)
        break
      else:
        element = input("Please Enter A Numeric Value: ")
        i -= 1
    my_array.append(element)
  my_array.sort()
  print(f"Ascending Order is: {my_array}")
  my_array.sort(reverse=True)
  print(f"Descending Order is: {my_array}")

sort_array()