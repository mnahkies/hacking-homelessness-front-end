from typing import Tuple

from model.motivation.language import Language
from model.motivation.task import Task


class Lesson(Task):

    def __init__(self, id: str, category: str, points: float, languages: Tuple[Language]) -> None:
        super().__init__(id, category, points)
        self.language = languages

    def supported_languages(self) -> Tuple[Language]:
        return self.language
