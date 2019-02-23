from abc import ABC, abstractmethod
import uuid


class Accomplishment(ABC):

    def __init__(self, id: str, name: str, point: float) -> None:
        self.id = id if id else self._get_id()
        self.name = name
        self.point = point

    def _get_id(self) -> str:
        return f'{type(self).__name__}_{uuid.uuid1()}'

    @abstractmethod
    def get_point(self) -> bool:
        pass