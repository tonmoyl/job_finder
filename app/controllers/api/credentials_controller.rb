class Api::CredentialsController < ApplicationController
  def create
    @credential = Credential.new(credential_params)
    @credential.user_id = current_user.id

    if @credential.save
      render :show
    else
      render json: @posting.errors.full_messages
    end
  end


  def update
    @credential = current_user.credential
debugger
    if @credential.update(credential_params)
      render :show
    else
      render json: @credential.errors.full_messages
    end
  rescue
    render json: ['Credential not found'], status: :not_found
  end

  def show
    @credential = current_user.credential
    render :show
  end

  private

  def credential_params
    params.require(:personal).permit(
      :about_me,
      :education,
      :skills,
      :looking_for
    )
  end
end
