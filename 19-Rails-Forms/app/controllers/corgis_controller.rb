class CorgisController < ApplicationController

    # before_action :current_corgi
    # skip_before_action :current_corgi, :only => [:index, :new, :create]  


    before_action :current_corgi, only: [:show, :edit, :update, :destroy]  

    def index
    @corgis = Corgi.all
    end

    def show
    # @corgi = Corgi.find(params[:id])
    end

    def new
        @corgi = Corgi.new
    end

    def create
        @corgi = Corgi.create(corgi_params)
        redirect_to @corgi
    end

    def edit
        # byebug
    # @corgi = Corgi.find(params[:id])
    end

    def update
    #  @corgi = Corgi.find(params[:id])
     @corgi.update(corgi_params)
     redirect_to @corgi
    end

    def destroy
        # corgi = Corgi.find(params[:id])
        @corgi.destroy
        redirect_to corgis_path
    end

    private
    def corgi_params
        params.require(:corgi).permit(:name)
    end

    def current_corgi
        @corgi = Corgi.find(params[:id])
    end
end
