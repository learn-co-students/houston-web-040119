# Intro Rails

## Learning Goals

* Create a new Rails application
* Generate a model
* Generate a controller
* Create views
* Create routes
* Create actions/methods for a RESTful controller
* Describe similarities between Sinatra routing & Rails routing


## Vocabulary

![](https://s3-us-west-2.amazonaws.com/student-resources/uploads/lecture/Screen+Shot+2017-06-09+at+10.04.20+AM.png)

* Rails
  * Gem
  * Framework

#### Restful Routes (Final Form):

| Name      | CRUD Action | HTTP Method / Path      | Body                       | Description                                                  |
| --------- | ----------- | ----------------------- | -------------------------- | ------------------------------------------------------------ |
| `new`     | (None)      | GET /resources/new      | (nothing)                  | Sends you a form to create a new thing (sends to a POST)     |
| `edit`    | (None)      | GET /resources/:id/edit | (nothing)                  | Sends you a form to update an existing thing (sends to a PATCH) |
| `index`   | Read        | GET /resources          | (nothing)                  | Display all resources                                        |
| `show`    | Read        | GET /resources/:id      | (nothing)                  | Display the details of a particular resource                 |
| `create`  | Create      | POST /resources         | Attributes of the resource | Creates the resource                                         |
| `update`  | Update      | PATCH /resources/:id    | Attributes of the resource | Update the resource                                          |
| `destroy` | Delete      | DELETE /resource/:id    | (nothing)                  | Deleting a resource                                          |


