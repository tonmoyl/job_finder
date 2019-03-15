@credentials.each do |credential|
  json.set! credential.id do
    json.partial! 'credential', credential: credential
  end
end
