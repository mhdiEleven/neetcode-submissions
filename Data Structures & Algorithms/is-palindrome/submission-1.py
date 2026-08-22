class Solution:
    def isPalindrome(self, s: str) -> bool:
        
        size = len(s)
        i=0
        s = s.lower()
        while (i<size):
            if (not(s[i].isalnum())):
                s = s.replace(s[i] , "")
                
            i= i+1
            print(s)
            size = len(s)

        for i in range(size):
            if(s[i] == s[size-i-1]):
                continue
            return False
        return True