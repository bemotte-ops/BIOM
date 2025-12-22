#!/usr/bin/env python3
import sys
import traceback

try:
    from flask import Flask, render_template, request, jsonify
    import json
    import os
    from datetime import datetime
    print("✅ Все импорты успешны")
except ImportError as e:
    print(f"❌ Ошибка импорта: {e}")
    sys.exit(1)

try:
    app = Flask(__name__)
    print("✅ Flask приложение создано")
    
    # Цветовая палитра
    PALETTE = {
        'primary_bg': '#F5E9DE',
        'secondary_bg': '#E6D5C3',
        'neutral': '#D2B48C',
        'dark_text': '#4A2D80',
        'accent_purple': '#6F42C1',
        'accent_purple_dark': '#59359a',
        'accent_terracotta': '#CC7A6F',
        'accent_terracotta_dark': '#B3544F',
        'accent_terracotta_deep': '#9C4A47'
    }
    print("✅ Палитра настроена")
    
    @app.route('/')
    def index():
        return render_template('index.html', palette=PALETTE)
    print("✅ Маршрут / создан")
    
    @app.route('/moodboard')
    def moodboard():
        return render_template('moodboard.html', palette=PALETTE)
    print("✅ Маршрут /moodboard создан")
    
    print("🎉 Приложение готово к запуску!")
    print("Откройте http://localhost:5000 в браузере")
    
    if __name__ == '__main__':
        app.run(debug=True, host='0.0.0.0', port=5000)
        
except Exception as e:
    print(f"❌ Ошибка при создании приложения: {e}")
    print("Полная трассировка:")
    traceback.print_exc()