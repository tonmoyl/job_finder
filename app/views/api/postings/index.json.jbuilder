@postings.each do |posting|
  json.set! posting.id do
    json.partial! 'posting', posting: posting
  end
end
