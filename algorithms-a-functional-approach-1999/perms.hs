module Perms where

perms [] = [[]] -- if it's an empty list, return an empty list in an empty list
perms xs = [x:p | x <- xs, p <- perms (removeFirst x xs)] 
    where removeFirst x []                 = [] 
          removeFirst x (y:ys) | x == y    = ys
                               | otherwise = y : removeFirst x ys
-- the way perms works is it'll create a list and each element of that list is another list
-- it'll take the first element of the list and remove it
-- then it'll create permutations of the rest of the list
-- finally it'll add the first element back onto these permutations
-- and it does that recursively

-- removeFirst takes a target value and a list
-- if there's a match between the first value and the target, return the tail
-- otherwise return the head : removeFirst target tail
-- ex: removeFirst 1 [1,2,3] = [2,3]
-- ex: removeFirst 2 [1,2,3] = 1 : removeFirst 2 [2,3]
--                           = 1 : [3]
--                           = [1,3]

-- ex: perms [1,2,3]
-- [1: perms (removeFirst 1 [1,2,3])]
-- [1 : perms [2,3]]
   -- [2 : perms [3]]
       -- [3 : perms []]
       -- [3 : [[]]] = [[3]]
   -- [2 : [3]] = [[2, 3]]
   -- [3 : [2]] = [[3, 2]]
   -- [2,3] : [3,2] : [] = [[2,3], [3,2]]
-- [1: [[2,3], [3,2]]] = [[1,2,3], [1,3,2]]
-- [2: [[1,3], [3,1]]] = [[2,1,3], [2,3,1]]
-- [3: [[1,2], [2,1]]] = [[3,1,2], [3,2,1]]
-- [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

