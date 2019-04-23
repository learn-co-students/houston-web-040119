class BooksController < ApplicationController 

    # set :views, "app/views/books"

      # display books
      get '/books' do
        @books = Book.all
        erb :'books/index'
    end

    #new book form
    get '/books/new' do
        erb :new
    end

    #display a book info
    get '/books/:id' do
        @book = current_book
        erb :'show'
    end

    #create a book
    post '/books' do
        # binding.pry
        Book.create(params)
        redirect '/books'
    end

    #edit a book form
    get '/books/:id/edit' do
        @book = current_book
        erb :edit
    end

    #edit a book
    patch '/books/:id' do
        book = current_book
        # binding.pry
        book.update(title: params[:title], snippet: params[:snippet])
        redirect "/books/#{params[:id]}"
    end

    #delete a book
    delete '/books/:id' do
        book = current_book
        book.destroy 
        redirect "/books"
    end

private
    def current_book
        Book.find(params[:id])
    end

end