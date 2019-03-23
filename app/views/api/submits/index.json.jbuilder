@submits.each do |submit|
  json.set! submit.id do
    json.extract! submit, :company, :role, :logo_url, :address, :link_url, :description, :updated_at
  end
end
