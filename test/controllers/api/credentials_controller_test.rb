require 'test_helper'

class Api::CredentialsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_credentials_create_url
    assert_response :success
  end

  test "should get ate" do
    get api_credentials_ate_url
    assert_response :success
  end

  test "should get update" do
    get api_credentials_update_url
    assert_response :success
  end

  test "should get show" do
    get api_credentials_show_url
    assert_response :success
  end

end
