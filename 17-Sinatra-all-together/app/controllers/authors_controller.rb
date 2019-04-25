class AuthorsController < ApplicationController

    #index => Display all the authors
    get '/authors' do
        @authors = Author.all
        erb :'authors/index'
    end

    #new => Display form for a new author
    get '/authors/new' do
        erb :'authors/new'
    end

    #show => Display individual author
    get '/authors/:id' do
        @author = current_author
        erb :'authors/show'
    end

    #post => Adding author
    post '/authors' do
        Author.create(params[:author])
        redirect '/authors'
    end

    #edit => Display form for editing a author
    get '/authors/:id/edit' do
        @author = current_author
        erb :'authors/edit'

    end

    #patch => Updates the author
    patch '/authors/:id' do
        author = current_author
        author.update(params[:author])

        #current_author.update(name: params[:name])
        redirect "/authors/#{params[:id]}"
    end

    #delete => delete a author
    delete '/authors/:id' do
        current_author.destroy 
        redirect '/authors'
    end


    #selecting a author
    def current_author
        Author.find(params[:id])
    end



end
