require 'test_helper'

class PostingsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get postings_new_url
    assert_response :success
  end

  test "should get edit" do
    get postings_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get postings_destroy_url
    assert_response :success
  end

  test "should get index" do
    get postings_index_url
    assert_response :success
  end

  test "should get create" do
    get postings_create_url
    assert_response :success
  end

  test "should get update" do
    get postings_update_url
    assert_response :success
  end

  test "should get show" do
    get postings_show_url
    assert_response :success
  end

end
