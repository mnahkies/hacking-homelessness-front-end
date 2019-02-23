import json

from model.motivation.achievement import Achievement


class Task(Achievement):

    def __init__(self, id: str, category: str, points: float) -> None:
        super().__init__(id, category, points)
        self.finish = False

    def complete(self) -> None:
        self.finish = True

    def get_point(self) -> float:
        return self.points if self.finish else 0.0


if __name__ == '__main__':
    t1 = Task(id="1", category="Managing Money", points=60.0)
    print(json.dumps(t1.__dict__))
