class Solution:
    def isPalindrome(self, s: str) -> bool:
        i , l , r =0, 0 , len(s)-1
        s = s.lower()
        
        while i <len(s):
            
            if (not(s[i].isalnum())):
                s= s.replace(s[i],"")
                continue
            i=i+1
        print(s)
        size = len(s)
        r= size-1
        for i in range((len(s))//2):
            if(s[l] == s[r]):
                l +=1
                r -=1
                continue
            return False
        return True
        