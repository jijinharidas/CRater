# CRater
C-Rater is a web app used to rate and show courses. 
## Running

### Frontend

	cd frontend
	yarn install
	yarn start

### Backend

	cd backend
	pip install django djangorestframework django-rest-knox
	python3 manage.py migrate
	python3 manage.py runserver

### Adding a new course
* Create django super user
* Run the backend server
* Go to http://localhost:8000/admin
* Login with super user
* Add courses under courses tab
