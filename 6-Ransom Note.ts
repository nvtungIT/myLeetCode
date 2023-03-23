//https://leetcode.com/problems/ransom-note/description/

function canConstruct(ransomNote: string, magazine: string): boolean {
    for ( let i = 0; i < ransomNote.length; i ++ ){
        let r = ransomNote.charAt(i);
        let matchingIndex = magazine.indexOf(r);
        if(matchingIndex == -1){
            return false
        }
        magazine = magazine.substring(0, matchingIndex) + magazine.substring(matchingIndex+ 1)
    }
    return true;

};