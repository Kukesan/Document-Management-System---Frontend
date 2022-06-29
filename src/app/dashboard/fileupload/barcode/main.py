import os
import cv2
import pyzbar
from app import app
from flask import flash, request, redirect, render_template
from werkzeug.utils import secure_filename
from pyzbar.pyzbar import decode


ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def upload_form():
    return render_template('upload.html')


@app.route('/', methods=['POST'])
def upload_file():
    if request.method == 'POST':

        files = request.files.getlist('files[]')
        for file in files:
            if file and allowed_file(file.filename):
              filename = secure_filename(file.filename)
              file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
              img = cv2.imread(os.path.join(app.config['UPLOAD_FOLDER'], filename))
              barcode = decode(img)

              flash(barcode[0][0].decode("utf-8"))

        flash('File submitted')
        return redirect('/')

if _name_ == "_main_":
    app.run()