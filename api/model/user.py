from model.exp import ExperiencePoint
from model.motivation import language
from model.motivation.login_streak import LoginStreak


class User:

    def __init__(self, name: str, email: str, language: language) -> None:
        self._name = name
        self._email = email
        self.language = language
        self.point = 10
        self.exp = ExperiencePoint()
        self.login_streak = LoginStreak()

    def get_point(self) -> float:
        return self.point + self.exp.point() + self.login_streak.point()

    get