# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: I believe it basically allows passing of methods and behaviors from parent to child classes, so if you call super on a method you created it will allow it to be passed from wherever it was created down to where you are calling it at. I think it only works one way, so you cant pass the other direction. This is nice because it is a MUCH shorter version of passing it the entire way down your lines of code and it cleans it up a ton.

Researched answer: Calling super in Ruby allows methods from the parent class to be passed down to child classes, so if you make a method called like cheese_is_cool for example and then call super within that method, it will search for another method with that same name in the parent class for where the method was created. If it does not find that method it will throw a noMethodError. The super method behaves differently if you use it with or without an argument. Without using an argument it will pass the arguments used for the originally created method to call the new one, you can use super() for no arguments and super(argument1, argument2) for when you need to use an argument. It can ONLY be used inside of a method, and can be called multiple different times. 
Source: https://www.rubyguides.com/2018/09/ruby-super-keyword/

2. What is a gem?

Your answer: Gem is specific to Ruby, it is the package manager used for Ruby in the same way that Yarn is used for Jest with Javascript, Rspec is the test driven development environment used with Ruby. I believe RubyGems is the actual package manager name. Package managers in general make it easier to share functionality and implementation with other developers.

Researched answer: Gem is the platform version package manager for Ruby, each gem has a name, version and platform, inside each gem are code, documentation and gemspec components. Each gem starts with a Rake file.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database as far as I know, really only contains data and information that are related to each other, so like our example from this week with cohorts, the person attached to each cohort is the relation, the names of the people are related as that was the cohort they were in. We are still pretty fresh into databases, so im not entirely sure what other database types there are but im sure that there are probably many more types we have not covered yet, I will look into it and go into great detail on my researched answer.

Researched answer: I found an article about relational databases that I love the breakdown explanation they provided so I will use that for this answer. Relational databases use tables for data with the use of rows and columns. Data can be structured across multiple tables and are joined together with the foreign and primary keys. An example they provide that I really like is that its similar to a bank transfer, so a set amount of money is withdrawn from one account, and deposited into another, the amount is withdrawn and deposited, the transaction cant really happen in any kind of partial way, its all of it, or none of it. The Acid acronym helps break this down a little bit. 

atomicity - all data changes are performed in a single operation, all of the changes are performed or none of them are performed. 
consistency - data stays in a consistent state from the start to the end, reinforcing integrity
isolation - the intermediate state of transaction is not shown in other transactions which causes concurrent transactions to be serialized
durability - after the transaction was a success the the changes remain completed, even if a system failure occurs. 

another type of data that they mentioned in NoSQL databases, which I am basically understanding as not limited to SQL so sometimes they can have SQL-like querying. Key-value databases are very simplistic storing data accessible through a specific key, usually used for JSON objects, images or plain text. Document datatypes are also known as document oriented databases, these are very similar to key value databases with the main difference being that instead of storing random segments of data it stores them in a more structured format they call documents, usually formatted with JSON BSON or XML. There are many more, but I will just list them rather than explain, Time series databases, Multi-model databases, NEWSQL databases, Column family databases, graph databases are some other various types.

Sources: https://www.prisma.io/dataguide/intro/comparing-database-types
https://www.ibm.com/topics/relational-databases

4. What are primary keys? Why are they important?

Your answer: Primary keys related to databases are unique identifier keys that are assigned to elements created in the database. They can be called on to bring out the information on what they are assigned to, or to change the information stored inside. They are important because they are the main way of accessing the information they contain, as well as down the road sometimes you need to use foreign keys, which are essentially a secondary key, so if you have multiple tables of data you need to assign multiple things to, the example that comes to mind is the different cohorts with all the names of the people in them that we did in class the other day. 3 different cohorts with 3 different foreign IDs, to do this you can use the has_many or any of the vast amount of tags for this.

Researched answer: Primary Keys are the central element in SQL, they assign a unique value to a specific row in a table which has many helpful uses. Primary keys are only used once, and if you delete the information stored in them they are NOT used again. They are used to identify every record shown in the data table. Primary keys help ensure data consistency due to avoiding duplicate records the record will reject a new input if the existing value uses the same primary key values.
source: https://learnsql.com/blog/what-is-a-primary-key/

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: I know that Create, Read, Update and Delete are the main CRUD acronyms, I think we have only really covered the verbs and relation to CRUD like twice fully, so I don't remember all of them yet, but I will do my best.

CREATE I try to remember by adding new content specifically, so post request is the http verb related to it since you are posting new material.
READ is displaying content that is already created and set. I remember this one as get request since you are getting access to the content that is already made.
UPDATE is making changes to the content that is already created, I remember patch request for this one since it is patching, or modifying/fixing. I think this one has 2, but I cant remember the other one, I think its the weird one that doesn't really make sense in this action.
Delete is just simply delete request, this one is easy to remember because it just makes sense, you are deleting anything you feel like you no longer need. 
 
Researched answer: So the one I missed for this was put request, I have a difficult time remembering this one because I think it could've been named a little better, but it basically is replacing content, similar to editing, but I think a better example would be actually completely changing something that is stored rather than Patch maybe just adding more content. HTTP has 4 main points being location, action, status code and payload, the location and action are in relation to the request section, and the status code and payload are in relation to the response section. so location is the URL that you access the information from. The action is what we covered above the get, post, put, patch, and delete requests are all of the HTTP verbs. status codes are the different types of information display shown 100 - information, 200 - everything is okay, 300 - redirects, 400 - client side error, response was bad, and 500 being a server side error response was bad. I got this information from the drawing that Sarah made for us the other day in class.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Representational state transfer which provides a way of mapping the HTTP verbs get, post, put delete and the crud actions create read update delete. It relies on the HTTP verb and URL instead of the URL alone.

2. Model validations: This is the process of evaluating whether or not the model is performing as expected and achieving the expecting outcome and purpose served.

3. Params: From what im finding, its just a keyword used to specify a method parameter that uses a variable number of arguments. You can only use 1 in this case or you get an error. 

4. ERB: Embedded ruby allows you to generate any kind of text in any quantity from set templates, allows for variable substitution and flow control.

5. API: application programmable interface is the software intermediary that lets 2 apps communicate with each other, its an accessible way to retrieve and share data across organizations. 
