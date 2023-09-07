"""
#####  Why dictionary key can only be an immutable type
--> Immutable objects => Can't Change 
--> Dictionaries use hash codes to determine uniqueness and perform efficient key-based lookup operations
--> Immutable keys ensure that the hash codes remain the same throughout the lifetime of the key.
--> If a key were mutable, and its value changed, it would result in unpredictable behavior and could break the internal structure of the dictionary.

##### How the set makes sure it has non-duplicates
--> By using hash codes to efficiently store and retrieve elements in the set. Hash codes are unique numerical values generated from the elements, allowing for fast membership checks and eliminating duplicates.
"""