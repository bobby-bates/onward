class TripSerializer < ActiveModel::Serializer
  attributes :id, :description, :start_on, :end_on
end
