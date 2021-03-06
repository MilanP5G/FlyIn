class CountriesController < ApplicationController
  before_action :set_country, only: [:show, :update, :destroy]

  # GET /countries
  def index
    @countries = Country.all

    render json: @countries, methods: [:image_url]

  end

  # GET /countries/1
  def show
    # binding.pry
    country = Country.find(params[:id])
    render json: country, includes: [:places]
  end

  # POST /countries
  def create
    # binding.pry
    @country = Country.new(country_params)

    if @country.save
      render json: @country, methods: [:image_url], status: :created, location: @country
    else
      render json: @country.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /countries/1
  def update
    if @country.update(country_params)
      render json: @country
    else
      render json: @country.errors, status: :unprocessable_entity
    end
  end

  # DELETE /countries/1
  def destroy
    country = Country.find(params[:id])
    country.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_country
      @country = Country.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def country_params
      params.permit(:name, :image)
    end
end
