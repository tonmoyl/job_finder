class Posting < ApplicationRecord

  validates :company, presence: true
  validates :role, presence: true  

end
