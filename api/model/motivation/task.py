from model.motivation.accomplishment import Accomplishment


class Task(Accomplishment):

    def __init__(self, id: str, name: str, point: float) -> None:
        super().__init__(id, name, point)
        self.finish = False

    def complete(self) -> None:
        self.finish = True

    def get_point(self) -> float:
        return self.point if self.finish else 0.0
