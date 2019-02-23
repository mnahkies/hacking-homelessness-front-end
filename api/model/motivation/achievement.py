from abc import ABC, abstractmethod
import uuid


class Achievement(ABC):

    def __init__(self, id: str, category: str, points: float) -> None:
        self.id = id if id else self._get_id()
        self.category = category
        self.points = points

    def _get_id(self) -> str:
        return f'{type(self).__name__}_{uuid.uuid1()}'

    @abstractmethod
    def get_point(self) -> bool:
        pass
