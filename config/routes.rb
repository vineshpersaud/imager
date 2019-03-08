Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    resources :users
    resources :images
    post "/images/:id/comments/create" => "images#comment"
    post "/images/:id/like" => "images#like"

end
