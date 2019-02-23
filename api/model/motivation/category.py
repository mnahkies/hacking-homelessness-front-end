from typing import Tuple

from model.motivation.achievement import Achievement


class Category(Achievement):

    def __init__(self, id: str, category: str, points: float, item_list: Tuple[Achievement]) -> None:
        super().__init__(id, category, points)
        self.item_list = set(item_list)
        self.completed = set()

    def complete(self, item) -> None:
        self.completed.add(item)

    def get_point(self, done=list[Achievement]) -> float:
        return self.get_point if self.item_list.issubset(done) else 0.0
