import json

from model.exp import ExperiencePoint
from model.motivation import language
from model.motivation.language import Language
from model.motivation.login_streak import LoginStreak


class User:

    def __init__(self, name: str, email: str, language: Language) -> None:
        self.name = name
        self.email = email
        self.language = language
        self.point = 10
        self.exp = ExperiencePoint()
        self.login_streak = LoginStreak()

    def get_point(self) -> float:
        return self.point + self.exp.point() + self.login_streak.point()


if __name__ == '__main__':
    l = Languag

    u1 = User(name="user1", email="user1@gmail.com", language=Language())
    print(json.dumps(u1.__dict__))