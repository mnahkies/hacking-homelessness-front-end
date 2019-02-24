

# class Language:
#
#     def __init__(self, code: str, name: str) -> None:
#         self._code = code
#         self._name = name
#
#     def __str__(self):
#         return f'{self._code} -> {self._name}.'
#

def all() -> list:
    l = list()
    for k, v in _supported_lan.items():
        l.append(Language(k, v))
    return l
