def IsPalindrom(str1):    
    for x in range(str1.len()/2):
        if str1[x] != str1[str.len()-x] & x != str1.len:
            return False
        else:
            return True
IsPalindrom("abcdcba")