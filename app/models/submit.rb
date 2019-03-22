class Submit < ApplicationRecord

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id

  belongs_to :posting,
  class_name: :Posting,
  foreign_key: :posting_id

end
