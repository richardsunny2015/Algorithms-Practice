(ns fizzbuzz)

(defn mod-m?
  "Takes a number, m, and returns a function
   that takes a number, n, and returns true
   if n % m is equal to 0, false otherwise."
   [m]
   (fn [n] (= (mod n m) 0)))

(def mod-3? (mod-m? 3))

(def mod-5? (mod-m? 5))

(defn fizzbuzz
  "Takes a number n and returns the string Fizz if n is
   divisable by 3, the string Buzz if n is divisable by
   5, the string FizzBuzz if divisable by 3 and 5, or
   n as a string otherwise."
   [n]
   (cond (and (mod-3? n) (mod-5? n))
         "FizzBuzz"
         (mod-3? n)
         "Fizz"
         (mod-5? n)
         "Buzz"
         :else
         (str n)))