from typing import Tuple

from model.motivation.language import Language
from model.motivation.task import Task


class Lesson(Task):

    def __init__(self, id: str, name: str, point: float, languages: Tuple[Language]) -> None:
        super().__init__(id, name, point)
        self.language = languages

    def supported_languages(self) -> Tuple[Language]:
        return self.language
