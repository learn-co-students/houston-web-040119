class DogsController < ApplicationController
  def index
    @dogs = Dog.all
  end

  def show
  end

  def new
  end


end
