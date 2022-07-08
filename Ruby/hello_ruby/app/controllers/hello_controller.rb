class HelloController < ApplicationController

  def index
    output = {'status': 'up'}
    return render json:output
  end  
end
