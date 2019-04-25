class BooksController < ApplicationController
  # display books
  get '/books' do
    @books = Book.all
    erb :'books/index'
  end

  #new book form
  get '/books/new' do
    @authors = Author.all
      erb :'books/new'
  end

  #display a book info
  get '/books/:id' do
      @book = current_book
      erb :'books/show'
  end

  #create a book
  post '/books' do
    binding.pry
      book = Book.new(params[:book])
      unless params[:author][:name].empty?
        book.authors << Author.create(params[:author])
      end
      book.save
      redirect '/books'
  end

  #edit a book form
  get '/books/:id/edit' do
      @book = current_book
      erb :'books/edit'
  end

  #edit a book
  patch '/books/:id' do
      book = current_book
      # binding.pry
      book.update(params[:book])
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