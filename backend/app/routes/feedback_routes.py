from flask import Blueprint, request, jsonify
from textblob import TextBlob
from app.models import FeedbackModel

feedback_blueprint = Blueprint('feedback', __name__)

@feedback_blueprint.route('/feedback', methods=['POST'])
def handle_feedback():
    try:
        data = request.json
        if not data:
            return jsonify({'message': 'No data provided'}), 400
        
        # sentiment analysis
        analysis = {}
        if 'other_reason' in data and data['other_reason']:
            blob = TextBlob(data['other_reason'])
            analysis['other_reason_sentiment'] = blob.sentiment.polarity
            
        if 'other_content' in data and data['other_content']:
            blob = TextBlob(data['other_content'])
            analysis['other_content_sentiment'] = blob.sentiment.polarity
            
            
        # save feedback to database
        feedback_data = {
            **data,
            'analysis': analysis # analysis results
        }    
        FeedbackModel.save_feedback(feedback_data)
        
        return jsonify({
            'message': 'Feedback received successfully',
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500