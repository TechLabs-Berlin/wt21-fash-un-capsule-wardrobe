# FashUp

FashUp is an aggregated solution that allows the end-user to upload his/her favorite clothing item and to quickly find the most personalised second hand item.

## Table of Contents

1. [About the Project](https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe/edit/main/README.md#1-about-the-project)
    - [Usage](https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe/edit/main/README.md#usage)
    - [Technology](https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe/edit/main/README.md#technology) 

2. [Getting Started](https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe/edit/main/README.md#2-getting-started)
    - [Clone GitHub Repo](https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe/edit/main/README.md#github-repo)
    - [Install React dependencies](https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe/edit/main/README.md#react-app)
    - [Install AI Model](https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe/edit/main/README.md#ai-model)

3. [Credits](https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe/edit/main/README.md#3-credits)

4. [Team](https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe/edit/main/README.md#4-team)

## 1. About the Project

Inaccurate product descriptions, possibly incorrect categorizations and a lack of personalized product suggestions contribute to an unsatisfactory user experience in the secondhand market.

Fashup is a web app that is developed to solve these problems by making it easier and quicker to find the desired clothing item  throughout several platforms (limited to vinted.com in the starting phase). By uploading a picture of a clothing item that represents the preferred style, the user will be shown the most similar items that are currently available on the respective platforms in a matter of seconds. This is made possible by the use of an AI-model that recognizes the type as well as the style of the uploaded clothing item and identifies matching pieces.

While improving the user experience in second hand online shopping, Fashup is supporting a sustainable approach to fashion as well.



### Usage

  Step 1: Upload a single picture with your favorite item<br>

  Step 2: Click an "Search" & suggest 4 most similiar items<br>

  Step 3: Research your favorized item & navigate to online shop<br>




### Technology

- [ReactJS](https://reactjs.org/)<br>
- [NodeJS](https://nodejs.org/en/)<br>
- [Python](https://www.python.org/)<br>
- [Flask](https://flask.palletsprojects.com/en/2.0.x/)<br> 
- [PyTorch](https://pytorch.org/)<br> 
- [Jina AI](https://jina.ai/)<br>


## 2. Getting Started

For installation, please follow the instructions below.

### GitHub repo

1. Clone GitHub repo
  ```
  https://github.com/TechLabs-Berlin/wt21-fash-un-capsule-wardrobe.git
  ``` 

### React App

2. Install React App dependencies inside the `frontend` diretory 
  ```
  npm install
  ```

3. Start the local server environment 
  ```
  npm start
  ```
### AI Model
4. Install all dependecies via the Requirements.txt file: Navigate to requirements.txt root and run the following command:<br>
```
pip install -r requirements.txt
```
5. Open the app.py file and replace the following paths with your own paths:<br>
- database_path = own_path
- dictio = own_path
- target = own_path

6. Navigate to app.py root and execute the app.py via the following command:
```
!python app.py
```

## 3. Credits

We'd want to express our gratitude to the TechLabs staff as well as the numerous volunteers that made this adventure possible. Our Journey Leads, Track Leads, and Project Mentors deserve special gratitude for always being available to answer inquiries and solve problems. You've always been there for us, encouraging us, motivating us, and keeping us on our toes.

## 4. Team 

### Project Team

- UX Siraprapa Chalermphao
- WD Roman Wiegel
- WD Cem Akbulut
- AI Lukas Bauerschmidt
- AI Fabian Barulli

### Project Mentor:

- Bogdan Ciobotaru
