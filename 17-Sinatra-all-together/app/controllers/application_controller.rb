class ApplicationController < Sinatra::Base

    configure do 
        set :views, "app/views"
        set :method_override, true
    end

    #home page
    get '/' do
        @hello = "040119"
        erb :home
    end


    
end
