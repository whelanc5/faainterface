# mongo.py

from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'test'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/test'

mongo = PyMongo(app)

@app.route('/fixes', methods=['GET'])
def get_all_fixes():
  star = mongo.db.fixes
  output = []
  for s in fixes.find():
    output.append({'name' : s['name'])
  return jsonify({'result' : output})



if __name__ == '__main__':
    app.run(debug=True)
