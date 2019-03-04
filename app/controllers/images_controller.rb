class ImagesController <ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  def index
    @images = Image.all
    render json:@images, methods: :url
  end

  def show
    @image = Image.find(params[:id])
    render :json => @image, methods: :url
  end

  def create
    image = Image.new(image_params)
    if image.save
      render json: image, :methods => :url
    else
      render json:{message: image.errors}, status: 400
    end
  end

  def destroy
    @image = Image.find(params[:id])
    if @image.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this image" }, status: 400
  end
end


private
  def image_params
    params.require(:image).permit(:title,:description,:picture)
  end
end
