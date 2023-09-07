def generate_array(length, start):
  if length == "" or length == 0 or start == "" or start == 0:
    print("My Work Is Generate An Array With Length And Start Point, I Can't Work Without Them!!")
  else:
    my_array = [start + i for i in range(length)]
    print(f"Your Array Is: {my_array}")

generate_array(7,15)
generate_array("",15)
generate_array(7,"")
generate_array(0,15)
generate_array(7,0)