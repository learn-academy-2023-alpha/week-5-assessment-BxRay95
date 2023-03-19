# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# pseudocode: taking in an array of words create a return array called same_letter_array that takes the given array of strings and uses the built in method .select(which from researching requires a block and requires something that evaluates to true or false, in thise case if the string includes the letter we are looking for)then use the built in method .includes? pass the string of the given letter to find, make a p statement returning your created array, and it will return your strings with the same letter.


beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

same_letter_array = beverages_array.select { |str| str.include?(letter_o) } # or letter_t for other example.

p same_letter_array



# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# pseudocode: taking in the input of a nested hash create a method called flatten_and_sort that takes in the given hash as a parameter and using the values.flatten.sort which from my EXTENSIVE research explained, values calls on the objects in a hash, flatten it accesses the inner elements in an array and returns only those inner elements, so in thise case the states, and then sort simply pushes them into alphabetical order since they are all strings. p the method and the hash given as an argument and you are done.

def flatten_and_sort(us_states)
    us_states.values.flatten.sort
end

p flatten_and_sort(us_states)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# pseudocode: create a class Bike that uses the attr accessor method for all of the info that is needed to be accessed later in the function. in this case we need to access all of them so :model, :wheels, and :current_speed are all used here. then using initialize with model, wheels set to 2 by default, and current_speed set to 0 by default as the parameters. set the class variables to be their normal states. Create a get_bike_info method that returns the string with all of the info of the bike. then create a method for pedal_faster that takes in speed_increase as a parameter, and add that to your current speed. the brake method is similar you just make current speed equal to the current speed - the speed_decrease value, to a .max(built in method) of 0 so it cannot go negative speeds. throw a p on that boy and you can change the values by calling on speed increase or brake. 

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, wheels = 2, current_speed = 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def get_bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(speed_increase)
        @current_speed += speed_increase
    end

    def brake(speed_decrease)
        @current_speed = [current_speed - speed_decrease, 0].max
    end
end

this_bike = Bike.new("Trek")
p this_bike.get_bike_info

this_bike.pedal_faster(15)
p this_bike.get_bike_info

this_bike.brake(10)
p this_bike.get_bike_info







