class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :lng
end
