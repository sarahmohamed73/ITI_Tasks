def user_inputs():
  total = 0
  count = 0
  while True:
    number = input("Enter A Number Or Done To Exit: ")
    if number.isnumeric():
      number = float(number)
      total += number
      count += 1
    elif number.lower() == "done":
      break
    else:
      print("You Enter A Valid Number!!")
      continue
  if count > 0 :
    avarage = total / count
    print(f"Total of Numbers Is: {total}")
    print(f"Count of Numbers Is: {count}")
    print(f"Avarage of Numbers Is: {avarage}")
  else:
    print("You Don't Enter Any Number")

user_inputs()