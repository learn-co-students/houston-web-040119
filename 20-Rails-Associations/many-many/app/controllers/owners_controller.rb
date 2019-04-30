class OwnersController < ApplicationController
    before_action :current_owner, only: [:show, :edit, :update, :destroy]

    def index
     @owners = Owner.all
    end

    def show
    
    end

    def new
        @owner = Owner.new
    end

    def create
        @owner = Owner.create(owner_params)
        redirect_to @owner

    end

    def edit
    
    end

    def update
        @owner.update(owner_params)
        redirect_to @owner

    end

    def destroy
       @owner.destroy
       redirect_to owners_path
    end
    
    private

    def current_owner
        @owner = Owner.find(params[:id])
    end

    def owner_params
        params.require(:owner).permit(:name)
    end
end
