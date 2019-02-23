import json

with open('data/achievement.json') as f:
    achievements = json.load(f)

with open('data/language.json') as f:
    languages = json.load(f)

with open('data/question.json') as f:
    questions = json.load(f)

with open('data/bank_lesson.json') as f:
    bank_lesson = json.load(f)

mock_db = {
    "achievement": achievements,
    "language": languages,
    "question": questions,
    "lessons": {
        "bank": bank_lesson,
    },
}
