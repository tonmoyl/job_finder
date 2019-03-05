class PostingsController < ApplicationController

  def destroy
    @posting = Posting.find(params[:id])
    @posting.destroy

    head :no_content
  end

  def index
    @postings = Posting.all
    render :index
  end

  def create
    @posting = Posting.new(posting_params)

    if @posting.save
      render :show
    else
      render json: @posting.errors.full_messages
    end
  end

  def update
    @posting = Posting.find(params[:id])

    if @posting.update(posting_params)
      render :show
    else
      render @posting.errors.full_messages, status: :unprocessable_entity
    end
  rescue
    render json: ['Posting not found'], status: :not_found
  end

  def show
    @posting = Posting.find(params[:id])
  end

  private

  def posting_params
    params.require(:posting).permit(
      :posting_id,
      :company,
      :role,
      :logo_url,
      :address,
      :link_url,
      :description
    )
  end


end
