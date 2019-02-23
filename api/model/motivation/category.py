from typing import Tuple

from model.motivation.accomplishment import Accomplishment


class Category(Accomplishment):

    def __init__(self, id: str, name: str, point: float, item_list : Tuple[Accomplishment]) -> None:
        super().__init__(id, name, point)
        self.item_list = set(item_list)
        self.completed = set()

    def complete(self, item) -> None:
        self.completed.add(item)

    def get_point(self, done=list[Accomplishment]) -> float:
        return self.get_point if self.item_list.issubset(done) else 0.0
