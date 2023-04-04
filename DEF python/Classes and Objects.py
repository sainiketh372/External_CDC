class Student:
    def __init__(self,name):
        self.name=name
        print("This is a Constructor")
    def say_Hi(self):
        print(self.name)
x=Student("Koushik")
y=x.say_Hi()


class Bike:
    def __init__(self, brand, model, mileage):
        self.brand = brand
        self.model = model
        self.mileage = mileage
    
    def __str__(self):
        return f"{self.brand} {self.model}, {self.mileage}"

bike_inventory = {
    "Bike 1": Bike("Honda", "CBR 250R", "35 kmpl"),
    "Bike 2": Bike("Yamaha", "R15", "45 kmpl"),
    "Bike 3": Bike("KTM", "Duke 390", "25 kmpl")
}

def buy_bike(bike_name):
    if bike_name in bike_inventory:
        del bike_inventory[bike_name]
        print(f"{bike_name} sold!")
    else:
        print(f"No bike with name {bike_name} found in inventory.")
    
def add_bike(bike_name, brand, model, mileage):
    bike_inventory[bike_name] = Bike(brand, model, mileage)
    print(f"{bike_name} added to inventory!")
    
def display_bikes():
    print("Bike inventory:")
    for bike_name, bike in bike_inventory.items():
        print(f"{bike_name}: {bike}")

display_bikes()
buy_bike("Bike 2")
display_bikes()
add_bike("Bike 4", "Harley-Davidson", "Sportster 883", "20 kmpl")



































display_bikes()
