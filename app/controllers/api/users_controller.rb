class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    user = User.new(user_params)
      if user.save
        render json:user
      else
        render json: {message: user.errors}, status: 400
      end
  end

  def user_params
    params.require(:user).permit(:username,:email,:password)
  end
end
