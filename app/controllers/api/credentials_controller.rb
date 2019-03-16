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
    debugger
    @credential = current_user.credential

    if @credential.update(credential_params)
      render :show
    else
      render json: @posting.errors.full_messages
    end
  rescue
    render json: ['Posting not found'], status: :not_found
  end

  def show
    @credential = current_user.credential
  end

  private

  def credential_params
    params.require(:credential).permit(
      :about_me,
      :education,
      :skills,
      :looking_for
    )
  end
end
