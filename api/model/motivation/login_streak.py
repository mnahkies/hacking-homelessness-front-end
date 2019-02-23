from datetime import datetime


class LoginStreak:

    def __init__(self):
        self.streak = 0
        self.point = 0
        self.last_login = datetime.now()

    # TODO: reduce to some less value.
    def login(self):
        now = datetime.now()
        diff = abs((now - self.last_login).days)
        self.last_login = now

        if diff == 0:
            return
        elif diff == 1:
            self.streak += 1
            self.point += self.streak
        else:
            self.streak = 1
            self.point += 1

    def last_login(self) -> datetime.date:
        return self.last_login.date

    def get_steak(self):
        return self.streak
