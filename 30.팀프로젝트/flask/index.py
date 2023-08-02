# 웹 마이크로프레임워크 : flask
# 오류 -> No module -> terminal 다음과 같이
# pip3 install flask
# Ctrl + Shift + P
# Flask : routing, run
# render_template : templates directory 안의 html 문서 호출
# request : 외부에서 오는 data 수신시 필요
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Hello World!<h1>'

@app.route('/lee')
def lee():
    return render_template('index.html')

# money 페이지에서는 GET방식으로 전송받음
@app.route('/money', methods = ['GET', 'POST'])
def money():

    # GET 방식 데이터 수신 : request.args['키값']
    # POST 방식 데이터 수신 :request.form['키값']
    # POST 방식 File 수신 : request.file['키값']
    money = request.args['money']

    return f'입금된 금액은 {money}입니다'


@app.route('/login')
def login():
    login_id = 'nayeho'
    return f'{login_id}님 환영합니다'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5021)




