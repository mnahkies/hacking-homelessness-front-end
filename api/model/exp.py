from model.motivation.achievement import Achievement


class ExperiencePoint:

    def __init__(self):
        self.task = set()

    def complete(self, accomplishment: Achievement):
        self.task.add(accomplishment)

    def point(self):
        return [i.get_point() for i in self.task]
