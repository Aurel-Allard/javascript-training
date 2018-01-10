Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about', to: 'pages#about', as: :about
  get 'drums', to: 'pages#drums', as: :drums
  get 'clock', to: 'pages#clock', as: :clock
end
