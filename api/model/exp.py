from model.motivation.accomplishment import Accomplishment


class ExperiencePoint:

    def __init__(self):
        self.task = set()

    def complete(self, accomplishment: Accomplishment):
        self.task.add(accomplishment)

    def point(self):
        return [i.get_point() for i in self.task]
