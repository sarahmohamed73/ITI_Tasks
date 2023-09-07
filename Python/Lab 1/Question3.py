def fizzBuzz(number):
  if number % 3 == 0 and number % 5 == 0:
    return "FizzBuzz"
  elif number % 3 == 0:
    return "Fizz"
  elif number % 5 == 0:
    return "Buzz"
  else:
    return "Number Is Not A Fizz Or Buzz"

number = float(input("Enter A Number: "))
result = fizzBuzz(number)
print(result)