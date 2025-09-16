from collections import deque
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        de = deque(students)
        i = 0
        while i < len(de) and sandwiches:
            student = de.popleft()
            sandwich = sandwiches[0]
            if student == sandwich:
                i = 0
                sandwiches = sandwiches[1:]
            else:
                de.append(student)
                i += 1
        return len(de)