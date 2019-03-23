require 'test_helper'

class SubmitsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get submits_create_url
    assert_response :success
  end

  test "should get destroy" do
    get submits_destroy_url
    assert_response :success
  end

  test "should get show" do
    get submits_show_url
    assert_response :success
  end

end
