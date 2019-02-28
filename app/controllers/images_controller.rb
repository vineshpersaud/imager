class ImagesController <ApplicationController

  def index
    @images = Image.all
    render json:@images, :methods => :image
  end

  def show
    @image = Image.find(params[:id])
    # redirect_to api_image_path(@image)
    # render json: render_to_string('html_file_name')
    # render file: 'public/system/images/images/000/000/001/large/kitten.jpg'
    render :json => @image, :methods => :image
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
