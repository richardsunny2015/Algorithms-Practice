# Definition for a pair.
# class Pair:
#     def __init__(self, key: int, value: str):
#         self.key = key
#         self.value = value
class Solution:
    def insertionSort(self, pairs: List[Pair]) -> List[List[Pair]]:
        if not pairs:
            return []
        inserts = [pairs]
        for i in range(1, len(pairs)):
            j = i - 1
            copy = self.deep_copy(inserts[-1])
            while j >= 0 and copy[j + 1].key < copy[j].key:
                tmp = copy[j + 1]
                copy[j + 1] = copy[j]
                copy[j] = tmp
                j -= 1
            inserts.append(copy)
        return inserts
    def deep_copy(self, pairs: List[Pair]) -> List[Pair]:
        return [Pair(x.key, x.value) for x in pairs]
