require 'sinatra'



get '/' do 
  erb :index
end

get '/Error' do
  erb :error
end

error 401..500 do
  redirect '/Error'
end