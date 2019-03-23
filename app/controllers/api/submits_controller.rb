class Api::SubmitsController < ApplicationController

  def create
    @submit = Submit.new(user_id: current_user.id, posting_id: submit_params[:posting_id])

    if @submit.save
      render json: @submit
    else
      render json: @submit.errors.full_messages, status: 422
    end
  end

  def destroy
    @submit = current_user.submitted_association.find_by(posting_id: submit_params[:posting_id]);
    @submit.destroy
    render json: @submit
  end

  def index
    @submits = current_user.submitted_applications
    render :index
  end

  private

  def submit_params
    params.require(:submit).permit(:posting_id)
  end
end
