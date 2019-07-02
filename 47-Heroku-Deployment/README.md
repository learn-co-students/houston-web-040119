# Heroku Deployment

#### LGs:
* Use npm build to create an optimized react build
* Describe and give examples of “platform as a service” products
* Install and boot a rails server on a remote VM

1. Create a production Build `npm run-script build`
2. Copy it into your backend
3. Add the route
```rails
get '*path', to: "application#react_app", constraints: ->(request) do
	!request.xhr? && request.format.html?
end
```

4. 
```rails
    def react_app
        render :file => 'public/index.html'
    end
```


**Source:** https://devcenter.heroku.com/articles/git#repository-size
