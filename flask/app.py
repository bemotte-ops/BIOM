from flask import Flask, render_template, request, jsonify
import json
import os
from datetime import datetime

app = Flask(__name__)

# Цветовая палитра
PALETTE = {
    # Основная гамма
    'primary_bg': '#F5E9DE',      # Светлая Слоновая Кость
    'secondary_bg': '#E6D5C3',    # Светло-бежевый
    'neutral': '#D2B48C',         # Тан
    
    # Коричневато-бежевая гамма (5 оттенков)
    'brown_light': '#D4B896',
    'brown_medium': '#B58A62',
    'brown': '#A67C52',
    'brown_dark': '#8B6F47',
    'brown_deep': '#6B5638',
    
    # Кремовая гамма (5 оттенков)
    'cream_very_light': '#FEFDFB',
    'cream_light': '#F5F1E8',
    'cream': '#E8DDD0',
    'cream_medium': '#D4C4B0',
    'cream_dark': '#C0A080',
    
    # Синяя гамма (5 оттенков)
    'blue_light': '#5A6B8A',
    'blue_medium': '#4A5A7A',
    'blue': '#3A4062',
    'blue_dark': '#2A3048',
    'blue_deep': '#1A2034',
    
    # Фиолетовая гамма
    'dark_text': '#4A2D80',       # Тёмный Future Dusk
    'accent_purple': '#6F42C1',   # Future Dusk
    'accent_purple_dark': '#59359a', # Тёмно-фиолетовый
    
    # Терракотовая гамма
    'accent_terracotta': '#CC7A6F', # Приглушённая Терракота
    'accent_terracotta_dark': '#B3544F', # Тёмно-терракотовый
    'accent_terracotta_deep': '#9C4A47',  # Глубокий терракотовый
}

# Инициализация данных мудборда
def init_moodboard_data():
    if not os.path.exists('moodboard_data.json'):
        initial_data = {
            'elements': [],
            'last_updated': datetime.now().isoformat()
        }
        with open('moodboard_data.json', 'w', encoding='utf-8') as f:
            json.dump(initial_data, f, ensure_ascii=False, indent=2)

@app.route('/')
def index():
    return render_template('index.html', palette=PALETTE)

@app.route('/moodboard')
def moodboard():
    return render_template('moodboard.html', palette=PALETTE)

@app.route('/api/elements', methods=['GET'])
def get_elements():
    try:
        with open('moodboard_data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
        return jsonify(data['elements'])
    except FileNotFoundError:
        return jsonify([])

@app.route('/api/elements', methods=['POST'])
def add_element():
    try:
        element_data = request.get_json()
        element_data['id'] = len(element_data.get('id', '')) + 1
        element_data['created_at'] = datetime.now().isoformat()
        
        # Загрузка существующих данных
        with open('moodboard_data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        data['elements'].append(element_data)
        data['last_updated'] = datetime.now().isoformat()
        
        # Сохранение обновленных данных
        with open('moodboard_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        return jsonify({'success': True, 'element': element_data})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/api/elements/<int:element_id>', methods=['DELETE'])
def delete_element(element_id):
    try:
        with open('moodboard_data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        data['elements'] = [elem for elem in data['elements'] if elem.get('id') != element_id]
        data['last_updated'] = datetime.now().isoformat()
        
        with open('moodboard_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/api/clear', methods=['POST'])
def clear_moodboard():
    try:
        data = {
            'elements': [],
            'last_updated': datetime.now().isoformat()
        }
        with open('moodboard_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/api/save', methods=['POST'])
def save_moodboard():
    try:
        moodboard_data = request.get_json()
        
        # Сохраняем с именем на основе даты
        filename = f"moodboard_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(moodboard_data, f, ensure_ascii=False, indent=2)
        
        return jsonify({'success': True, 'filename': filename})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/api/load/<filename>')
def load_moodboard(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return jsonify({'success': True, 'data': data})
    except FileNotFoundError:
        return jsonify({'success': False, 'error': 'Файл не найден'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    init_moodboard_data()
    app.run(debug=True, host='0.0.0.0', port=5000)