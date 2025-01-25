from app import mongo
from datetime import datetime
from bson import ObjectId

class Disaster:
    def __init__(self, tag, severity, location, resources_needed, reported_by, coordinates=None):
        self.tag = tag
        self.severity = severity
        self.location = location
        self.resources_needed = resources_needed
        self.reported_by = reported_by
        self.coordinates = coordinates
        self.timestamp = datetime.utcnow()

    def save(self):
        disaster_data = self.__dict__
        disaster_data['_id'] = ObjectId()
        mongo.db.disasters.insert_one(disaster_data)
        return str(disaster_data['_id'])

    @staticmethod
    def get_all():
        disasters = list(mongo.db.disasters.find())
        for disaster in disasters:
            disaster['_id'] = str(disaster['_id'])
        return disasters
