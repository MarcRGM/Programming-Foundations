print("Hello, World!")
def greet(name):
    """Function to greet a person with their name."""
    return f"Hello, {name}!"
def add(a, b):
    """Function to add two numbers."""
    return a + b
def multiply(a, b):
    """Function to multiply two numbers."""
    return a * b
if __name__ == "__main__":
    # checks if the current script is being run directly as the main program, 
    # or if it's being imported as a module into another program.
    # __name__ is a variable that exists in every Python module, and is set to the name of the module.
    print(greet("Alice"))
    print(f"Sum: {add(5, 3)}")
    print(f"Product: {multiply(4, 2)}")
# This code defines a simple structure with functions to greet a person, add two numbers, and multiply two numbers.
# The main block executes the functions with sample inputs.