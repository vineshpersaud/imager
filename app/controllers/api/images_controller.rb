class Api::ImagesController <ApplicationController

  def show
    image = Image.find(params[:id])
    render json: image
  end
  def create
    image = Image.new(image_params)
    if image.save
      render json: image
    else
      render json:{message: image.errors}, status: 400
    end
  end


private
  def image_params
    params.require(:image).permit(:title,:description,:image)
  end
end
