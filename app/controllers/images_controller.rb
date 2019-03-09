class ImagesController <ApplicationController
  before_action :set_image, only: [:show,:destroy,:comment,:like]
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token


  def index
    @images = Image.all
    render json:@images, methods: :url
  end

  def show
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
    if @image.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this image" }, status: 400
    end
  end

  def comment
    comment = @image.comments.build(comment_params)
    if comment.save
      render json: @image, :methods => :url
    else
      render json:{message: comment.errors}, status: 400
    end
  end


  def like
    image = Image.find(params[:id])
    image.likes += 1
    if image.save
      render json: image, :methods => :url
    else
      render json:{message: comment.errors}, status: 400
    end
  end

private

  def set_image
    @image = Image.find(params[:id])
  end

  def image_params
    params.require(:image).permit(:title,:description,:picture)
  end

  def comment_params
    params.require(:comment).permit(:username,:text)
  end
end
