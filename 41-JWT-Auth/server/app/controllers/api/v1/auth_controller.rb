class Api::V1::AuthController < ApplicationController

    skip_before_action :check_authentication, only: [:create]

    def create
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
            render json: {username: user.username, userId: user.id, token: encode_token({user_id: user.id}) }
        else
            render json: {error: 'Invalid password'}, status: 401
        end

    end

end
